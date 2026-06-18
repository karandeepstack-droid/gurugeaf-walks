import fitz
import os

pdf_path = "/Users/karandeepsingh/Downloads/Gurugeaf Walks.pdf"
out_dir = "/Users/karandeepsingh/gurugeaf-walks/public"

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"page_{i}.png"))
    print(f"Rendered page_{i}.png")
