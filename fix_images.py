import random

filepath = 'src/data/perfumes.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

images = [
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595425970377-c9703d74081b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587463272361-566270fae41d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629853904944-d621f3583569?q=80&w=600&auto=format&fit=crop"
]

generic = "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"

parts = content.split(generic)
new_content = parts[0]
for i in range(1, len(parts)):
    # use a random image from the images list
    new_content += random.choice(images) + parts[i]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Images fixed!")
