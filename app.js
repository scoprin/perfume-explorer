const perfumeData = [
    {
        name: "Aventus",
        brand: "Creed",
        year: 2010,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
        description: "A legendary fragrance celebrating strength, power, and success. It opens with an iconic blast of pineapple and black currant.",
        accords: [
            { name: "fruity", value: 95, color: "var(--clr-fresh)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "smoky", value: 75, color: "var(--clr-leather)" }
        ],
        pyramid: {
            top: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
            heart: ["Birch", "Patchouli", "Moroccan Jasmine", "Rose"],
            base: ["Musk", "Oak Moss", "Ambergris", "Vanilla"]
        }
    },
    {
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        year: 2015,
        image: "https://images.unsplash.com/photo-1544608310-24430fac97a7?auto=format&fit=crop&q=80&w=800",
        description: "A poetic alchemy of jasmine, saffron, and amberwood. Known for its airy, crystal-like sweetness and incredible trail.",
        accords: [
            { name: "amber", value: 100, color: "var(--clr-amber)" },
            { name: "woody", value: 80, color: "var(--clr-woody)" },
            { name: "spicy", value: 60, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Saffron", "Jasmine"],
            heart: ["Amberwood", "Ambergris"],
            base: ["Fir Resin", "Cedar"]
        }
    },
    {
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        year: 2007,
        image: "https://images.unsplash.com/photo-1544608310-24430fac97a7?auto=format&fit=crop&q=80&w=800",
        description: "A warm, opulent journey into a London gentleman's club. Tobacco leaf meets creamy vanilla and spicy accords.",
        accords: [
            { name: "tobacco", value: 95, color: "var(--clr-leather)" },
            { name: "vanilla", value: 90, color: "var(--clr-vanilla)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Tobacco Leaf", "Spices"],
            heart: ["Vanilla", "Cacao", "Tonka Bean", "Tobacco Blossom"],
            base: ["Dried Fruits", "Woody Notes"]
        }
    },
    {
        name: "Sauvage",
        brand: "Dior",
        year: 2015,
        image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&q=80&w=800",
        description: "A radically fresh composition, inspired by wide-open spaces and a desert landscape under the blue sky.",
        accords: [
            { name: "fresh", value: 95, color: "var(--clr-fresh)" },
            { name: "spicy", value: 85, color: "var(--clr-spicy)" },
            { name: "citrus", value: 80, color: "var(--clr-citrus)" }
        ],
        pyramid: {
            top: ["Calabrian Bergamot", "Pepper"],
            heart: ["Sichuan Pepper", "Lavender", "Pink Pepper", "Vetiver"],
            base: ["Ambroxan", "Cedar", "Labdanum"]
        }
    },
    {
        name: "Angels' Share",
        brand: "Kilian Paris",
        year: 2020,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
        description: "A boozy, gourmand masterpiece inspired by Hennessy cognac cellars. Rich with cinnamon, tonka, and oak.",
        accords: [
            { name: "boozy", value: 95, color: "var(--clr-amber)" },
            { name: "sweet", value: 90, color: "var(--clr-sweet)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Cognac"],
            heart: ["Cinnamon", "Tonka Bean", "Oak"],
            base: ["Praline", "Vanilla", "Sandalwood"]
        }
    },
    {
        name: "Lost Cherry",
        brand: "Tom Ford",
        year: 2018,
        image: "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=800",
        description: "A full-bodied journey into the once-forbidden; a contrasting scent that reveals a playful, candy-like gleam.",
        accords: [
            { name: "cherry", value: 100, color: "var(--clr-floral)" },
            { name: "sweet", value: 90, color: "var(--clr-sweet)" },
            { name: "nutty", value: 80, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Sour Cherry", "Bitter Almond", "Liquor"],
            heart: ["Sour Cherry", "Plum", "Turkish Rose"],
            base: ["Tonka Bean", "Vanilla", "Peru Balsam"]
        }
    },
    {
        name: "Layton",
        brand: "Parfums de Marly",
        year: 2016,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
        description: "A royal blue aromatic fragrance that balances crisp apple and lavender with a deep, creamy vanilla base.",
        accords: [
            { name: "vanilla", value: 95, color: "var(--clr-vanilla)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "fruity", value: 80, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Apple", "Lavender", "Bergamot", "Mandarin Orange"],
            heart: ["Geranium", "Violet", "Jasmine"],
            base: ["Vanilla", "Cardamom", "Sandalwood", "Pepper", "Patchouli"]
        }
    },
    {
        name: "Erba Pura",
        brand: "Xerjoff",
        year: 2019,
        image: "https://images.unsplash.com/photo-1623512398506-69f3d17ca85e?auto=format&fit=crop&q=80&w=800",
        description: "A modern basket of Mediterranean fruits and citrus that dries down into a long-lasting, sensual musk and vanilla.",
        accords: [
            { name: "fruity", value: 100, color: "var(--clr-sweet)" },
            { name: "citrus", value: 85, color: "var(--clr-citrus)" },
            { name: "musky", value: 80, color: "var(--clr-musky)" }
        ],
        pyramid: {
            top: ["Orange", "Lemon", "Bergamot"],
            heart: ["Fruits"],
            base: ["White Musk", "Amber", "Madagascar Vanilla"]
        }
    },
    {
        name: "Hacivat",
        brand: "Nishane",
        year: 2017,
        image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
        description: "A tribute to elegance and love of art. A long-lasting woody fragrance with a dominant, crisp pineapple and oakmoss trail.",
        accords: [
            { name: "woody", value: 95, color: "var(--clr-woody)" },
            { name: "citrus", value: 90, color: "var(--clr-citrus)" },
            { name: "mossy", value: 85, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Pineapple", "Grapefruit", "Bergamot"],
            heart: ["Cedar", "Patchouli", "Jasmine"],
            base: ["Oakmoss", "Woody Notes"]
        }
    },
    {
        name: "Bleu de Chanel",
        brand: "Chanel",
        year: 2010,
        image: "https://images.unsplash.com/photo-1438901713224-9bb0dc18df88?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate blue fragrance. A tribute to masculine freedom in an aromatic-woody trail with captivating citrus notes.",
        accords: [
            { name: "citrus", value: 95, color: "var(--clr-citrus)" },
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "fresh", value: 85, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
            heart: ["Ginger", "Nutmeg", "Jasmine"],
            base: ["Incense", "Vetiver", "Cedar", "Sandalwood"]
        }
    },
    {
        name: "Terre d'Hermes",
        brand: "Hermes",
        year: 2006,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        description: "A story of mythic elements; a connection between man and earth. A unique blend of orange, flint, and earthy vetiver.",
        accords: [
            { name: "citrus", value: 90, color: "var(--clr-citrus)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "earthy", value: 80, color: "var(--clr-leather)" }
        ],
        pyramid: {
            top: ["Orange", "Grapefruit"],
            heart: ["Pepper", "Pelargonium"],
            base: ["Vetiver", "Cedar", "Patchouli", "Benzoin"]
        }
    },
    {
        name: "Naxos",
        brand: "Xerjoff",
        year: 2015,
        image: "https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&q=80&w=800",
        description: "A celebration of Sicily. Bright citrus meets sweet honey and spicy tobacco, grounded by lavender and vanilla.",
        accords: [
            { name: "sweet", value: 95, color: "var(--clr-sweet)" },
            { name: "tobacco", value: 90, color: "var(--clr-leather)" },
            { name: "honey", value: 85, color: "var(--clr-amber)" }
        ],
        pyramid: {
            top: ["Lavender", "Bergamot", "Lemon"],
            heart: ["Honey", "Cinnamon", "Cashmeran", "Jasmine Sambac"],
            base: ["Tobacco Leaf", "Vanilla", "Tonka Bean"]
        }
    },
    {
        name: "Side Effect",
        brand: "Initio",
        year: 2016,
        image: "https://images.unsplash.com/photo-1527231441113-f932e616bc21?auto=format&fit=crop&q=80&w=800",
        description: "A daring, boozy composition that envelops the wearer in a cloud of rum, vanilla, and high-quality tobacco.",
        accords: [
            { name: "boozy", value: 95, color: "var(--clr-amber)" },
            { name: "tobacco", value: 90, color: "var(--clr-leather)" },
            { name: "spicy", value: 85, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Rum"],
            heart: ["Vanilla", "Tobacco"],
            base: ["Cinnamon", "Saffron", "Sandalwood"]
        }
    },
    {
        name: "Philosykos",
        brand: "Diptyque",
        year: 1996,
        image: "https://images.unsplash.com/photo-1543834164-96d594b96898?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate fig fragrance. An ode to the entire fig tree: the green leaves, the white wood, and the milky fruit.",
        accords: [
            { name: "green", value: 100, color: "var(--clr-fresh)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "fruity", value: 75, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Fig Leaf", "Fig"],
            heart: ["Coconut", "Green Notes"],
            base: ["Cedar", "Fig Tree", "Woody Notes"]
        }
    },
    {
        name: "Gypsy Water",
        brand: "Byredo",
        year: 2008,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
        description: "A glamorization of the Romani lifestyle. Fresh soil, deep forests, and campfires; a beautiful nomadic dream.",
        accords: [
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "citrus", value: 85, color: "var(--clr-citrus)" },
            { name: "aromatic", value: 80, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Juniper", "Lemon", "Bergamot", "Pepper"],
            heart: ["Pine Needles", "Incense", "Orris Root"],
            base: ["Vanilla", "Sandalwood", "Amber"]
        }
    },
    {
        name: "By the Fireplace",
        brand: "Maison Margiela",
        year: 2015,
        image: "https://images.unsplash.com/photo-1519082274508-4829695618bc?auto=format&fit=crop&q=80&w=800",
        description: "Part of the 'Replica' collection, evoking the comforting scent of wood crackling in the hearth and roasted chestnuts.",
        accords: [
            { name: "woody", value: 95, color: "var(--clr-woody)" },
            { name: "sweet", value: 90, color: "var(--clr-sweet)" },
            { name: "smoky", value: 85, color: "var(--clr-leather)" }
        ],
        pyramid: {
            top: ["Cloves", "Pink Pepper", "Orange Blossom"],
            heart: ["Chestnut", "Guaiac Wood", "Juniper"],
            base: ["Vanilla", "Peru Balsam", "Cashmeran"]
        }
    },
    {
        name: "Santal 33",
        brand: "Le Labo",
        year: 2011,
        image: "https://images.unsplash.com/photo-1605615804078-fc734a74ef5e?auto=format&fit=crop&q=80&w=800",
        description: "An iconic, genderless fragrance that defines a generation. Smells like raw wood, leather, and open Western plains.",
        accords: [
            { name: "woody", value: 100, color: "var(--clr-woody)" },
            { name: "powdery", value: 85, color: "var(--clr-powdery)" },
            { name: "leather", value: 80, color: "var(--clr-leather)" }
        ],
        pyramid: {
            top: ["Sandalwood", "Cedar"],
            heart: ["Cardamom", "Violet", "Papyrus"],
            base: ["Leather", "Amber", "Iris"]
        }
    },
    {
        name: "Delina",
        brand: "Parfums de Marly",
        year: 2017,
        image: "https://images.unsplash.com/photo-1560033085-c351657ef451?auto=format&fit=crop&q=80&w=800",
        description: "A floral explosion of Turkish rose and lily of the valley, rounded with lychee, rhubarb, and creamy vanilla.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "fruity", value: 90, color: "var(--clr-sweet)" },
            { name: "fresh", value: 80, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Litchi", "Rhubarb", "Bergamot"],
            heart: ["Turkish Rose", "Peony", "Musk", "Petalia"],
            base: ["Cashmeran", "Cedar", "Incense", "Vanilla"]
        }
    },
    {
        name: "Oud Wood",
        brand: "Tom Ford",
        year: 2007,
        image: "https://images.unsplash.com/photo-1615394441551-4935b546d882?auto=format&fit=crop&q=80&w=800",
        description: "One of the most rare and precious ingredients in a perfumer's arsenal, oud wood is often burned in incense-filled temples.",
        accords: [
            { name: "woody", value: 100, color: "var(--clr-woody)" },
            { name: "oud", value: 90, color: "var(--clr-leather)" },
            { name: "spicy", value: 80, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Rosewood", "Cardamom"],
            heart: ["Oud", "Sandalwood", "Vetiver"],
            base: ["Vanilla", "Amber", "Tonka Bean"]
        }
    },
    {
        name: "Mojave Ghost",
        brand: "Byredo",
        year: 2014,
        image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&q=80&w=800",
        description: "Inspired by the soulful beauty of the Mojave Desert and the rare ghost flower that blooms in its arid ground.",
        accords: [
            { name: "musky", value: 95, color: "var(--clr-musky)" },
            { name: "floral", value: 85, color: "var(--clr-floral)" },
            { name: "powdery", value: 80, color: "var(--clr-powdery)" }
        ],
        pyramid: {
            top: ["Ambrette", "Sapodilla"],
            heart: ["Violet", "Sandalwood", "Magnolia"],
            base: ["Ambergris", "Cedar"]
        }
    },
    {
        name: "Elysium",
        brand: "Roja Parfums",
        year: 2017,
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800",
        description: "An ultra-premium aromatic fougere. A hero's landscape of grapefruit, vetiver, and ambergris with unmatched quality.",
        accords: [
            { name: "citrus", value: 100, color: "var(--clr-citrus)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "fresh", value: 80, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Grapefruit", "Bergamot", "Lemon", "Lime"],
            heart: ["Apple", "Jasmine", "Black Currant"],
            base: ["Vetiver", "Ambergris", "Vanilla", "Leather", "Cedar"]
        }
    },
    {
        name: "Ombre Nomade",
        brand: "Louis Vuitton",
        year: 2018,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
        description: "A monumental oud fragrance. Rich, dark, and smoky, balanced by a surprising touch of raspberry and incense.",
        accords: [
            { name: "oud", value: 100, color: "var(--clr-leather)" },
            { name: "smoky", value: 90, color: "var(--clr-woody)" },
            { name: "fruity", value: 70, color: "var(--clr-floral)" }
        ],
        pyramid: {
            top: ["Raspberry", "Saffron"],
            heart: ["Oud", "Incense", "Rose"],
            base: ["Benzoin", "Amberwood", "Birch"]
        }
    },
    {
        name: "Wood Sage & Sea Salt",
        brand: "Jo Malone London",
        year: 2014,
        image: "https://images.unsplash.com/photo-1438901713224-9bb0dc18df88?auto=format&fit=crop&q=80&w=800",
        description: "Escape the everyday along the windswept shore. Air mingling with sea salt and the earthy, woody scent of sage.",
        accords: [
            { name: "salty", value: 100, color: "var(--clr-fresh)" },
            { name: "aromatic", value: 90, color: "var(--clr-floral)" },
            { name: "woody", value: 80, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Ambrette Seeds"],
            heart: ["Sea Salt"],
            base: ["Sage"]
        }
    },
    {
        name: "Halfeti",
        brand: "Penhaligon's",
        year: 2014,
        image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
        description: "Named after the black roses of Turkey. A rich, opulent woody-floral that weaves saffron and rose with exotic spices.",
        accords: [
            { name: "spicy", value: 95, color: "var(--clr-spicy)" },
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "floral", value: 85, color: "var(--clr-floral)" }
        ],
        pyramid: {
            top: ["Cypress", "Saffron", "Bergamot"],
            heart: ["Rose", "Jasmine", "Nutmeg"],
            base: ["Oud", "Leather", "Cedar", "Sandalwood", "Amber"]
        }
    },
    {
        name: "L'Air du Desert Marocain",
        brand: "Tauer",
        year: 2005,
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=800",
        description: "An indie masterpiece. Captures the scent of a Moroccan night: warm wind, spices, and the vast desert sky.",
        accords: [
            { name: "amber", value: 100, color: "var(--clr-amber)" },
            { name: "spicy", value: 95, color: "var(--clr-spicy)" },
            { name: "woody", value: 90, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Coriander", "Cumin", "Petitgrain"],
            heart: ["Rock Rose", "Jasmine"],
            base: ["Amber", "Cedar", "Vetiver"]
        }
    },
    {
        name: "Reflection Man",
        brand: "Amouage",
        year: 2007,
        image: "https://images.unsplash.com/photo-1513506496266-3d2418be5005?auto=format&fit=crop&q=80&w=800",
        description: "A clean, sophisticated floral for men. Smells like a freshly laundered white shirt in a luxury garden.",
        accords: [
            { name: "floral", value: 95, color: "var(--clr-floral)" },
            { name: "powdery", value: 90, color: "var(--clr-powdery)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Rosemary", "Pink Pepper", "Petitgrain"],
            heart: ["Iris", "Jasmine", "Neroli"],
            base: ["Sandalwood", "Cedar", "Vetiver", "Patchouli"]
        }
    },
    {
        name: "Cedrat Boise",
        brand: "Mancera",
        year: 2011,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        description: "A vibrant blend of citrus, fruit, and wood. Often compared to Aventus but with its own creamy, fruity identity.",
        accords: [
            { name: "citrus", value: 95, color: "var(--clr-citrus)" },
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "fruity", value: 85, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Lemon", "Black Currant", "Bergamot", "Spices"],
            heart: ["Fruits", "Jasmine", "Patchouli"],
            base: ["Cedar", "Leather", "Sandalwood", "Vanilla", "Musk"]
        }
    },
    {
        name: "Intense Cafe",
        brand: "Montale",
        year: 2013,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
        description: "A gourmand dream. A dominant, fresh-roasted coffee note paired with a blooming rose and sweet vanilla.",
        accords: [
            { name: "coffee", value: 100, color: "var(--clr-leather)" },
            { name: "rose", value: 95, color: "var(--clr-floral)" },
            { name: "vanilla", value: 90, color: "var(--clr-vanilla)" }
        ],
        pyramid: {
            top: ["Floral Notes"],
            heart: ["Coffee", "Rose"],
            base: ["Vanilla", "White Musk", "Amber"]
        }
    },
    {
        name: "Love, Don't Be Shy",
        brand: "Kilian Paris",
        year: 2007,
        image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate marshmallow scent. An opening of orange blossom that settles into a fluffy, sugary sweetness.",
        accords: [
            { name: "sweet", value: 100, color: "var(--clr-sweet)" },
            { name: "floral", value: 90, color: "var(--clr-floral)" },
            { name: "citrus", value: 75, color: "var(--clr-citrus)" }
        ],
        pyramid: {
            top: ["Neroli", "Bergamot", "Pink Pepper"],
            heart: ["Orange Blossom", "Honeysuckle", "Jasmine", "Rose", "Iris"],
            base: ["Sugar", "Vanilla", "Caramel", "Musk"]
        }
    },
    {
        name: "Jazz Club",
        brand: "Maison Margiela",
        year: 2013,
        image: "https://images.unsplash.com/photo-1514525253344-48598ca187ea?auto=format&fit=crop&q=80&w=800",
        description: "The tradition of generations handed down, immortalizing the atmosphere of a Brooklyn jazz club.",
        accords: [
            { name: "tobacco", value: 95, color: "var(--clr-leather)" },
            { name: "boozy", value: 85, color: "var(--clr-amber)" },
            { name: "sweet", value: 80, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Pink Pepper", "Neroli", "Lemon"],
            heart: ["Rum", "Clary Sage", "Vetiver"],
            base: ["Tobacco Leaf", "Vanilla", "Styrax"]
        }
    },
    {
        name: "Acqua di Gio",
        brand: "Giorgio Armani",
        year: 1996,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        description: "The quintessential aquatic. Inspired by the island of Pantelleria: salt, sun, and crystal-clear water.",
        accords: [
            { name: "aquatic", value: 100, color: "var(--clr-fresh)" },
            { name: "citrus", value: 95, color: "var(--clr-citrus)" },
            { name: "fresh", value: 90, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Lime", "Lemon", "Bergamot", "Jasmine", "Orange"],
            heart: ["Sea Notes", "Jasmine", "Peach", "Rosemary", "Freesia"],
            base: ["White Musk", "Cedar", "Oakmoss", "Patchouli", "Amber"]
        }
    },
    {
        name: "Another 13",
        brand: "Le Labo",
        year: 2010,
        image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
        description: "A dirty, addictive musk. Composed of ambroxan, a synthetic animal musk, making it an addictive potion.",
        accords: [
            { name: "musky", value: 100, color: "var(--clr-musky)" },
            { name: "amber", value: 85, color: "var(--clr-amber)" },
            { name: "woody", value: 70, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Pear", "Apple", "Citrus"],
            heart: ["Ambrette", "Jasmine", "Moss"],
            base: ["Ambroxan", "Iso E Super", "Cetalox"]
        }
    },
    {
        name: "Portrait of a Lady",
        brand: "Frederic Malle",
        year: 2010,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        description: "A baroque, sumptuous perfume. A symphonic blend of 400 roses per bottle with patchouli and incense.",
        accords: [
            { name: "spicy", value: 100, color: "var(--clr-spicy)" },
            { name: "floral", value: 95, color: "var(--clr-floral)" },
            { name: "amber", value: 90, color: "var(--clr-amber)" }
        ],
        pyramid: {
            top: ["Rose", "Clove", "Raspberry", "Black Currant", "Cinnamon"],
            heart: ["Patchouli", "Incense", "Sandalwood"],
            base: ["Musk", "Benzoin", "Amber"]
        }
    },
    {
        name: "Le Male",
        brand: "Jean Paul Gaultier",
        year: 1995,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
        description: "The sailor in a striped shirt. A classic combination of lavender, mint, and vanilla that redefined masculine scent.",
        accords: [
            { name: "vanilla", value: 95, color: "var(--clr-vanilla)" },
            { name: "aromatic", value: 90, color: "var(--clr-fresh)" },
            { name: "spicy", value: 85, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Lavender", "Mint", "Cardamom", "Bergamot", "Artemisia"],
            heart: ["Cinnamon", "Orange Blossom", "Caraway"],
            base: ["Vanilla", "Tonka Bean", "Amber", "Sandalwood", "Cedar"]
        }
    },
    {
        name: "La Nuit de l'Homme",
        brand: "YSL",
        year: 2009,
        image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate date night fragrance. A magnetic blend of cardamom and cedar with a romantic lavender heart.",
        accords: [
            { name: "spicy", value: 100, color: "var(--clr-spicy)" },
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "aromatic", value: 85, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Cardamom"],
            heart: ["Lavender", "Virginia Cedar", "Bergamot"],
            base: ["Vetiver", "Caraway"]
        }
    },
    {
        name: "Flowerbomb",
        brand: "Viktor&Rolf",
        year: 2005,
        image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
        description: "An explosion of flowers. A profusion of jasmine, orchid, and rose on a deep patchouli and tea base.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "patchouli", value: 90, color: "var(--clr-woody)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Tea", "Bergamot", "Osmanthus"],
            heart: ["Orchid", "Jasmine", "Rose", "Freesia", "Orange Blossom"],
            base: ["Patchouli", "Musk", "Vanilla"]
        }
    },
    {
        name: "Light Blue",
        brand: "Dolce & Gabbana",
        year: 2001,
        image: "https://images.unsplash.com/photo-1516211697149-d8677ecd00d3?auto=format&fit=crop&q=80&w=800",
        description: "The joy of living on the Mediterranean. A sparkling blend of Sicilian lemon, apple, and cedar.",
        accords: [
            { name: "citrus", value: 100, color: "var(--clr-citrus)" },
            { name: "fruity", value: 90, color: "var(--clr-fresh)" },
            { name: "woody", value: 80, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Sicilian Lemon", "Apple", "Cedar", "Bellflower"],
            heart: ["Bamboo", "Jasmine", "White Rose"],
            base: ["Cedar", "Musk", "Amber"]
        }
    },
    {
        name: "Eros",
        brand: "Versace",
        year: 2012,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
        description: "Inspired by Greek mythology. A passionate explosion of mint, green apple, and tonka bean.",
        accords: [
            { name: "vanilla", value: 95, color: "var(--clr-vanilla)" },
            { name: "aromatic", value: 90, color: "var(--clr-fresh)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Mint", "Green Apple", "Lemon"],
            heart: ["Tonka Bean", "Ambroxan", "Geranium"],
            base: ["Madagascar Vanilla", "Virginia Cedar", "Atlas Cedar", "Vetiver", "Oakmoss"]
        }
    },
    {
        name: "Alien",
        brand: "Mugler",
        year: 2005,
        image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&q=80&w=800",
        description: "A mysterious and supernatural scent. A solar jasmine bloom that dries down into woody cashmeran and white amber.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "amber", value: 90, color: "var(--clr-amber)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Jasmine"],
            heart: ["Woody Notes"],
            base: ["Amber"]
        }
    },
    {
        name: "No. 5",
        brand: "Chanel",
        year: 1921,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        description: "The world's most famous perfume. A timeless bouquet of aldehydes and jasmine that defined the essence of femininity.",
        accords: [
            { name: "aldehydic", value: 100, color: "var(--clr-fresh)" },
            { name: "floral", value: 95, color: "var(--clr-floral)" },
            { name: "powdery", value: 90, color: "var(--clr-powdery)" }
        ],
        pyramid: {
            top: ["Aldehydes", "Ylang-Ylang", "Neroli", "Bergamot", "Lemon"],
            heart: ["Iris", "Jasmine", "Rose", "Orris Root", "Lily-of-the-Valley"],
            base: ["Civet", "Musk", "Amber", "Sandalwood", "Moss", "Vanilla", "Vetiver", "Patchouli"]
        }
    },
    {
        name: "Black Opium",
        brand: "YSL",
        year: 2014,
        image: "https://images.unsplash.com/photo-1610461821890-3c6a1e00b171?auto=format&fit=crop&q=80&w=800",
        description: "A seductive, intoxicating fragrance. Adrenaline-rich coffee and sweet sensuality of vanilla settle into white flowers.",
        accords: [
            { name: "coffee", value: 95, color: "var(--clr-leather)" },
            { name: "vanilla", value: 90, color: "var(--clr-vanilla)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" }
        ],
        pyramid: {
            top: ["Pear", "Pink Pepper", "Orange Blossom"],
            heart: ["Coffee", "Jasmine", "Bitter Almond"],
            base: ["Vanilla", "Patchouli", "Cedar", "Cashmere Wood"]
        }
    },
    {
        name: "Coco Mademoiselle",
        brand: "Chanel",
        year: 2001,
        image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
        description: "A modern oriental. Fresh orange sparks the senses, leading to a clear, transparent heart of jasmine and rose.",
        accords: [
            { name: "citrus", value: 95, color: "var(--clr-citrus)" },
            { name: "patchouli", value: 90, color: "var(--clr-woody)" },
            { name: "floral", value: 85, color: "var(--clr-floral)" }
        ],
        pyramid: {
            top: ["Orange", "Mandarin Orange", "Bergamot", "Orange Blossom"],
            heart: ["Turkish Rose", "Jasmine", "Mimosa", "Ylang-Ylang"],
            base: ["Patchouli", "White Musk", "Vanilla", "Vetiver", "Tonka Bean", "Opoponax"]
        }
    },
    {
        name: "J'adore",
        brand: "Dior",
        year: 1999,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800",
        description: "A grand feminine floral. A custom-made bouquet of the most beautiful flowers from around the world.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "fruity", value: 90, color: "var(--clr-sweet)" },
            { name: "fresh", value: 80, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Pear", "Melon", "Magnolia", "Peach", "Mandarin Orange", "Bergamot"],
            heart: ["Jasmine", "Lily-of-the-Valley", "Tuberose", "Freesia", "Rose", "Orchid", "Plum", "Violet"],
            base: ["Musk", "Vanilla", "Blackberry", "Cedar"]
        }
    },
    {
        name: "Libre",
        brand: "YSL",
        year: 2019,
        image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=800",
        description: "The fragrance of freedom. A statement of grand lavender from France and sensual orange blossom from Morocco.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "citrus", value: 85, color: "var(--clr-citrus)" },
            { name: "vanilla", value: 80, color: "var(--clr-vanilla)" }
        ],
        pyramid: {
            top: ["Lavender", "Mandarin Orange", "Black Currant", "Petitgrain"],
            heart: ["Lavender", "Orange Blossom", "Jasmine"],
            base: ["Madagascar Vanilla", "Musk", "Cedar", "Ambergris"]
        }
    },
    {
        name: "Ombre Leather",
        brand: "Tom Ford",
        year: 2018,
        image: "https://images.unsplash.com/photo-1524508762098-fd3003058a94?auto=format&fit=crop&q=80&w=800",
        description: "The scent of the open desert. Vast and layered, it reveals itself like a landscape as leather meets floral notes.",
        accords: [
            { name: "leather", value: 100, color: "var(--clr-leather)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "spicy", value: 75, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Cardamom"],
            heart: ["Leather", "Jasmine Sambac"],
            base: ["Amber", "Moss", "Patchouli"]
        }
    },
    {
        name: "Glossier You",
        brand: "Glossier",
        year: 2017,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        description: "A scent that smells like you, but better. Primarily made of base notes that adapt to your skin chemistry.",
        accords: [
            { name: "musky", value: 100, color: "var(--clr-musky)" },
            { name: "powdery", value: 90, color: "var(--clr-powdery)" },
            { name: "iris", value: 80, color: "var(--clr-floral)" }
        ],
        pyramid: {
            top: ["Pink Pepper"],
            heart: ["Iris"],
            base: ["Ambroxan", "Musk", "Ambrette (Musk Mallow)"]
        }
    },
    {
        name: "Prada L'Homme",
        brand: "Prada",
        year: 2016,
        image: "https://images.unsplash.com/photo-1541612403160-f6595568340d?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate clean scent. A sophisticated blend of iris and neroli that smells like luxury soap and fresh linen.",
        accords: [
            { name: "powdery", value: 100, color: "var(--clr-powdery)" },
            { name: "floral", value: 90, color: "var(--clr-floral)" },
            { name: "fresh", value: 85, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Neroli", "Black Pepper", "Cardamom", "Carrot Seeds"],
            heart: ["Iris", "Violet", "Geranium", "Mate"],
            base: ["Linden", "Cedar", "Patchouli", "Sandalwood", "Amber"]
        }
    },
    {
        name: "The Noir 29",
        brand: "Le Labo",
        year: 2015,
        image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
        description: "An ode to the noble leaf and the craft that surrounds it. Combines depth and freshness, softness and strength.",
        accords: [
            { name: "woody", value: 100, color: "var(--clr-woody)" },
            { name: "fresh", value: 85, color: "var(--clr-fresh)" },
            { name: "spicy", value: 80, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Fig", "Bay Leaf", "Bergamot"],
            heart: ["Cedar", "Vetiver", "Musk"],
            base: ["Tobacco", "Hay"]
        }
    },
    {
        name: "Colonia",
        brand: "Acqua di Parma",
        year: 1916,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        description: "The symbol of Italian chic. A classic citrus blend that has remained a favorite of Hollywood stars for over a century.",
        accords: [
            { name: "citrus", value: 100, color: "var(--clr-citrus)" },
            { name: "aromatic", value: 90, color: "var(--clr-fresh)" },
            { name: "fresh", value: 85, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Lemon", "Sweet Orange", "Calabrian Bergamot"],
            heart: ["Lavender", "Bulgarian Rose", "Verbena", "Rosemary"],
            base: ["Vetiver", "Sandalwood", "Patchouli"]
        }
    }
];

const grid = document.getElementById('perfumeGrid');
const searchInput = document.getElementById('perfumeSearch');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeButton = document.querySelector('.close-button');

function displayPerfumes(perfumes) {
    grid.innerHTML = '';
    const fragment = document.createDocumentFragment();
    perfumes.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        const accordHtml = p.accords.map(a => \`
            <div class="accord-row">
                <div class="accord-label">\${a.name}</div>
                <div class="accord-bar-bg">
                    <div class="accord-bar-fill" style="width: \${a.value}%; background-color: \${a.color}"></div>
                </div>
            </div>
        \`).join('');
        card.innerHTML = \`
            <div class="card-image-container">
                <img src="\${p.image}" class="card-image" alt="\${p.name}" loading="lazy">
            </div>
            <div class="card-info">
                <div class="card-brand">\${p.brand}</div>
                <div class="card-name">\${p.name}</div>
                <div class="accord-container">
                    \${accordHtml}
                </div>
            </div>
        \`;
        card.onclick = () => showModal(p);
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

function showModal(p) {
    modalDetails.innerHTML = \`
        <div class="modal-body">
            <div class="modal-image-col">
                <img src="\${p.image}" alt="\${p.name}">
            </div>
            <div class="modal-info-col">
                <div class="modal-brand">\${p.brand} (\${p.year})</div>
                <div class="modal-name">\${p.name}</div>
                <p class="modal-desc">\${p.description}</p>
                <div class="pyramid-section">
                    <div class="pyramid-tier">
                        <div class="tier-label">Top Notes</div>
                        <div class="notes-flex">
                            \${p.pyramid.top.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Heart Notes</div>
                        <div class="notes-flex">
                            \${p.pyramid.heart.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Base Notes</div>
                        <div class="notes-flex">
                            \${p.pyramid.base.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    \`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

let searchTimeout;
searchInput.oninput = (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const term = e.target.value.toLowerCase();
        const filtered = perfumeData.filter(p => 
            p.name.toLowerCase().includes(term) ||
            p.brand.toLowerCase().includes(term) ||
            p.accords.some(a => a.name.toLowerCase().includes(term)) ||
            p.pyramid.top.some(n => n.toLowerCase().includes(term)) ||
            p.pyramid.heart.some(n => n.toLowerCase().includes(term)) ||
            p.pyramid.base.some(n => n.toLowerCase().includes(term))
        );
        displayPerfumes(filtered);
    }, 200);
};

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeButton.onclick = closeModal;
window.onclick = (e) => { 
    if (e.target.className === 'modal-overlay') closeModal(); 
};

displayPerfumes(perfumeData);