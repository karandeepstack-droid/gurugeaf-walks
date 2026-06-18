import fitz
import os

pdf_path = "/Users/karandeepsingh/Downloads/Gurugeaf Walks.pdf"
out_dir = "/Users/karandeepsingh/gurugeaf-walks/public"

doc = fitz.open(pdf_path)
count = 0
for i in range(len(doc)):
    for img in doc.get_page_images(i):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        with open(os.path.join(out_dir, f"image_{count}.{image_ext}"), "wb") as f:
            f.write(image_bytes)
        count += 1
print(f"Extracted {count} images")
