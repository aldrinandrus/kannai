"""Extract embedded images from the Kannai brochure PDF."""
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Installing PyMuPDF...")
    os.system(f"{sys.executable} -m pip install pymupdf -q")
    import fitz

PDF_PATH = r"c:\Users\Aldrin\Downloads\KAT- CTBook (1).pdf"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "brochure")
PAGE_RENDER_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "pages")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PAGE_RENDER_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
image_count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)

    for img_index, img in enumerate(images):
        xref = img[0]
        try:
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            ext = base_image["ext"]
            if ext == "jpeg":
                ext = "jpg"
            filename = f"page{page_num + 1:02d}_img{img_index + 1:02d}.{ext}"
            filepath = os.path.join(OUTPUT_DIR, filename)
            with open(filepath, "wb") as f:
                f.write(image_bytes)
            image_count += 1
        except Exception as e:
            print(f"  Skipped image on page {page_num + 1}: {e}")

    # Also render full pages as fallback
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    page_path = os.path.join(PAGE_RENDER_DIR, f"page{page_num + 1:02d}.jpg")
    pix.save(page_path)

doc.close()
print(f"Extracted {image_count} embedded images to {OUTPUT_DIR}")
print(f"Rendered {len(os.listdir(PAGE_RENDER_DIR))} page images to {PAGE_RENDER_DIR}")
