import time
from duckduckgo_search import DDGS
import re
import json

perfumes_data = [
    {
        "id": "hacivat", "name": "Hacivat", "brand": "Nishane", "year": 2017,
        "description": "A tribute to elegance, kindness, and art. Hacivat is a modern chypre bursting with pineapple, grapefruit, and an addictive woody base.",
        "accords": [{"name": "Citrus", "val": 95}, {"name": "Woody", "val": 90}, {"name": "Fruity", "val": 85}, {"name": "Earthy", "val": 75}],
        "pyramid": {"top": ["Pineapple", "Grapefruit", "Bergamot"], "heart": ["Cedar", "Patchouli", "Jasmine"], "base": ["Oakmoss", "Woody Notes", "Clearwood"]}
    },
    {
        "id": "angels-share", "name": "Angels' Share", "brand": "By Kilian", "year": 2020,
        "description": "Like a master perfumer's interpretation of a fine cognac. Contains the essence of Cognac derived from the liquor to lend it a natural caramel color.",
        "accords": [{"name": "Warm Spicy", "val": 95}, {"name": "Sweet", "val": 90}, {"name": "Woody", "val": 85}, {"name": "Vanilla", "val": 80}],
        "pyramid": {"top": ["Cognac"], "heart": ["Cinnamon", "Tonka Bean", "Oak"], "base": ["Praline", "Vanilla", "Sandalwood"]}
    },
    {
        "id": "naxos", "name": "XJ 1861 Naxos", "brand": "Xerjoff", "year": 2015,
        "description": "Naxos celebrates the deep and sensual heart of Sicily with a rich Mediterranean blend of citrus, exotic spices, and sweet honey over tobacco.",
        "accords": [{"name": "Sweet", "val": 95}, {"name": "Tobacco", "val": 90}, {"name": "Honey", "val": 85}, {"name": "Citrus", "val": 75}],
        "pyramid": {"top": ["Lavender", "Bergamot", "Lemon"], "heart": ["Honey", "Cinnamon", "Cashmeran", "Jasmine"], "base": ["Tobacco", "Vanilla", "Tonka Bean"]}
    },
    {
        "id": "reflection-man", "name": "Reflection Man", "brand": "Amouage", "year": 2007,
        "description": "A compelling, distinctive and unmistakably masculine fragrance with a timeless appeal. A refined interplay of cool aromatics and warm woods.",
        "accords": [{"name": "White Floral", "val": 95}, {"name": "Woody", "val": 90}, {"name": "Powdery", "val": 85}, {"name": "Aromatic", "val": 80}],
        "pyramid": {"top": ["Rosemary", "Pink Pepper", "Petitgrain"], "heart": ["Jasmine", "Neroli", "Orris Root", "Ylang-Ylang"], "base": ["Sandalwood", "Vetiver", "Cedar", "Patchouli"]}
    },
    {
        "id": "tobacco-vanille", "name": "Tobacco Vanille", "brand": "Tom Ford", "year": 2007,
        "description": "A modern take on an old-world men's club. A smooth oriental, Tobacco Vanille opens immediately with opulent essences of tobacco leaf and aromatic spice notes.",
        "accords": [{"name": "Vanilla", "val": 95}, {"name": "Sweet", "val": 90}, {"name": "Tobacco", "val": 85}, {"name": "Warm Spicy", "val": 80}],
        "pyramid": {"top": ["Tobacco Leaf", "Spicy Notes"], "heart": ["Vanilla", "Cacao", "Tonka Bean", "Tobacco Blossom"], "base": ["Dried Fruits", "Woody Notes"]}
    },
    {
        "id": "herod", "name": "Herod", "brand": "Parfums de Marly", "year": 2012,
        "description": "A smoky vanilla masterpiece. Herod exudes a stunning regal essence, merging smoky tobacco with a sweet vanilla and cedarwood background.",
        "accords": [{"name": "Tobacco", "val": 95}, {"name": "Vanilla", "val": 90}, {"name": "Warm Spicy", "val": 85}, {"name": "Cinnamon", "val": 80}],
        "pyramid": {"top": ["Cinnamon", "Pepperwood"], "heart": ["Tobacco Leaf", "Incense", "Osmanthus", "Labdanum"], "base": ["Vanilla", "Iso E Super", "Cedar", "Musk"]}
    },
    {
        "id": "santal-33", "name": "Santal 33", "brand": "Le Labo", "year": 2011,
        "description": "A perfume that introduces our use of cardamom, iris, violet, and ambrox which crackle in the formula and bring to this smoking wood alloy some spicy, leathery, musky notes.",
        "accords": [{"name": "Woody", "val": 95}, {"name": "Powdery", "val": 90}, {"name": "Leather", "val": 85}, {"name": "Warm Spicy", "val": 75}],
        "pyramid": {"top": ["Cardamom", "Violet", "Papyrus"], "heart": ["Iris", "Amber"], "base": ["Sandalwood", "Cedar", "Leather"]}
    },
    {
        "id": "grand-soir", "name": "Grand Soir", "brand": "Maison Francis Kurkdjian", "year": 2016,
        "description": "Dress in your finest attire and polish your look. Wander in a never-ending night and enjoy the daring radiance of a magnificent Parisian evening.",
        "accords": [{"name": "Amber", "val": 95}, {"name": "Vanilla", "val": 90}, {"name": "Balsamic", "val": 85}, {"name": "Warm Spicy", "val": 75}],
        "pyramid": {"top": ["Spanish Labdanum"], "heart": ["Benzoin", "Tonka Bean"], "base": ["Vanilla", "Amber"]}
    },
    {
        "id": "limmensite", "name": "L'Immensité", "brand": "Louis Vuitton", "year": 2018,
        "description": "A laser-sharp, fresh ginger note lifted by the bitterness of grapefruit and softened by an addictive and sensual amber note.",
        "accords": [{"name": "Fresh Spicy", "val": 95}, {"name": "Citrus", "val": 90}, {"name": "Amber", "val": 85}, {"name": "Aromatic", "val": 80}],
        "pyramid": {"top": ["Grapefruit", "Ginger", "Bergamot"], "heart": ["Water Notes", "Sage", "Rosemary", "Geranium"], "base": ["Ambroxan", "Amber", "Labdanum"]}
    },
    {
        "id": "elysium", "name": "Elysium Pour Homme", "brand": "Roja Parfums", "year": 2017,
        "description": "An ultra-fresh citrus blend with an incredibly complex structure, grounded in a base of vetiver, ambergris, and leather.",
        "accords": [{"name": "Citrus", "val": 95}, {"name": "Aromatic", "val": 90}, {"name": "Fresh Spicy", "val": 85}, {"name": "Woody", "val": 80}],
        "pyramid": {"top": ["Grapefruit", "Lemon", "Bergamot", "Lime", "Thyme", "Galbanum"], "heart": ["Vetiver", "Juniper Berries", "Black Currant", "Apple", "Pink Pepper", "Cedar", "Rose", "Jasmine"], "base": ["Ambergris", "Leather", "Vanilla", "Benzoin", "Labdanum"]}
    },
    {
        "id": "erba-pura", "name": "Erba Pura", "brand": "Xerjoff", "year": 2019,
        "description": "A delicious and modern blend of Mediterranean citrus and sweet fruits layered over a warm and sensual amber oriental base.",
        "accords": [{"name": "Fruity", "val": 95}, {"name": "Citrus", "val": 90}, {"name": "Sweet", "val": 85}, {"name": "Musky", "val": 80}],
        "pyramid": {"top": ["Sicilian Orange", "Calabrian bergamot", "Sicilian Lemon"], "heart": ["Fruits"], "base": ["White Musk", "Madagascar Vanilla", "Amber"]}
    },
    {
        "id": "oud-for-greatness", "name": "Oud for Greatness", "brand": "Initio Parfums Prives", "year": 2018,
        "description": "A highly concentrated and incredibly powerful natural Oud, handled with majesty and framed by patchouli and musk.",
        "accords": [{"name": "Warm Spicy", "val": 95}, {"name": "Woody", "val": 90}, {"name": "Oud", "val": 85}, {"name": "Patchouli", "val": 80}],
        "pyramid": {"top": ["Saffron", "Nutmeg", "Lavender"], "heart": ["Agarwood (Oud)"], "base": ["Patchouli", "Musk"]}
    },
    {
        "id": "silver-mountain-water", "name": "Silver Mountain Water", "brand": "Creed", "year": 1995,
        "description": "Inspired by the exhilarating crispness of alpine air, Silver Mountain Water is a fresh and contemporary scent with citrus, tea, and blackcurrant.",
        "accords": [{"name": "Green", "val": 95}, {"name": "Citrus", "val": 90}, {"name": "Fruity", "val": 85}, {"name": "Musky", "val": 80}],
        "pyramid": {"top": ["Bergamot", "Mandarin Orange"], "heart": ["Green Tea", "Black Currant"], "base": ["Musk", "Sandalwood", "Petitgrain", "Galbanum"]}
    },
    {
        "id": "terre-dhermes", "name": "Terre d'Hermès", "brand": "Hermès", "year": 2006,
        "description": "Terre d'Hermès tells the story of the mythical elements of the ancient and natural world, a story of transformation from earth to bloom.",
        "accords": [{"name": "Citrus", "val": 95}, {"name": "Woody", "val": 90}, {"name": "Earthy", "val": 85}, {"name": "Fresh Spicy", "val": 80}],
        "pyramid": {"top": ["Orange", "Grapefruit"], "heart": ["Pepper", "Pelargonium"], "base": ["Vetiver", "Cedar", "Patchouli", "Benzoin"]}
    },
    {
        "id": "tuscan-leather", "name": "Tuscan Leather", "brand": "Tom Ford", "year": 2007,
        "description": "A raw, yet refined, sensual take on leather. Saffron, raspberry and thyme open to olibanum and night-blooming jasmine, wrapping in suede and amberwood.",
        "accords": [{"name": "Leather", "val": 95}, {"name": "Fruity", "val": 90}, {"name": "Animalic", "val": 85}, {"name": "Sweet", "val": 80}],
        "pyramid": {"top": ["Raspberry", "Saffron", "Thyme"], "heart": ["Olibanum", "Jasmine"], "base": ["Leather", "Suede", "Woody Notes", "Amber"]}
    },
    {
        "id": "pegasus", "name": "Pegasus", "brand": "Parfums de Marly", "year": 2011,
        "description": "Both powdery and fresh, Pegasus stands out for its classic structure of fern warmed by vanilla and creamy almond veiled with a veil of sandalwood.",
        "accords": [{"name": "Almond", "val": 95}, {"name": "Vanilla", "val": 90}, {"name": "Powdery", "val": 85}, {"name": "Metallic", "val": 75}],
        "pyramid": {"top": ["Heliotrope", "Cumin", "Bergamot"], "heart": ["Bitter Almond", "Lavender", "Jasmine"], "base": ["Vanilla", "Sandalwood", "Amber"]}
    },
    {
        "id": "ani", "name": "Ani", "brand": "Nishane", "year": 2019,
        "description": "A romantic and calm fragrance created under the inspiration of a famous Anatolian folk song. Ani is a magnificent vanilla-based oriental scent.",
        "accords": [{"name": "Vanilla", "val": 95}, {"name": "Warm Spicy", "val": 90}, {"name": "Woody", "val": 85}, {"name": "Powdery", "val": 80}],
        "pyramid": {"top": ["Ginger", "Bergamot", "Pink Pepper", "Green Notes"], "heart": ["Cardamom", "Black Currant", "Turkish Rose"], "base": ["Vanilla", "Sandalwood", "Benzoin", "Cedar", "Patchouli", "Ambergris", "Musk"]}
    }
]

ddgs = DDGS()

for p in perfumes_data:
    query = f"site:fragrantica.com/perfume/ {p['name']} {p['brand']}"
    try:
        results = ddgs.text(query, max_results=3)
        found_id = None
        for r in results:
            match = re.search(r'-(\d+)\.html', r['href'])
            if match:
                found_id = match.group(1)
                break
        
        if found_id:
            p["image"] = f"https://fimgs.net/mdimg/perfume/375x500.{found_id}.jpg"
            print(f"Found {p['name']}: {found_id}")
        else:
            p["image"] = "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
            print(f"NOT FOUND {p['name']}")
    except Exception as e:
        p["image"] = "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
        print(f"Error {p['name']}: {e}")
    time.sleep(1)

import os
filepath = 'src/data/perfumes.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_data_str = json.dumps(perfumes_data, indent=2)
new_data_str = new_data_str[1:-1]

final_content = content[:content.rfind(']')] + ",\n" + new_data_str + "\n];\n"

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(final_content)
print("Successfully updated perfumes.js")
