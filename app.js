const perfumeData = [
    {
        "name": "Aventus",
        "brand": "Creed",
        "year": 2010,
        "accords": [
            "Leather",
            "Powdery",
            "Woody",
            "Spicy",
            "Oud"
        ],
        "topNotes": [
            "Cardamom",
            "Rose",
            "Jasmine"
        ],
        "middleNotes": [
            "Bergamot",
            "Saffron",
            "Leather",
            "Musk"
        ],
        "baseNotes": [
            "Cedar",
            "Amber",
            "Patchouli",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Baccarat Rouge 540",
        "brand": "Maison Francis Kurkdjian",
        "year": 2015,
        "accords": [
            "Floral",
            "Fresh",
            "Aromatic",
            "Citrus",
            "Spicy"
        ],
        "topNotes": [
            "Orange",
            "Pineapple",
            "Patchouli"
        ],
        "middleNotes": [
            "Musk",
            "Incense",
            "Lemon",
            "Lavender"
        ],
        "baseNotes": [
            "Sandalwood",
            "Musk",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated floral and fresh elements."
    },
    {
        "name": "Tobacco Vanille",
        "brand": "Tom Ford",
        "year": 2007,
        "accords": [
            "Sweet",
            "Powdery",
            "Citrus",
            "Floral"
        ],
        "topNotes": [
            "Jasmine",
            "Patchouli",
            "Orange",
            "Sandalwood"
        ],
        "middleNotes": [
            "Cardamom",
            "Sandalwood",
            "Cinnamon"
        ],
        "baseNotes": [
            "Oud",
            "Leather",
            "Pineapple",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Sauvage",
        "brand": "Dior",
        "year": 2015,
        "accords": [
            "Fresh",
            "Oud",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Jasmine",
            "Leather",
            "Cardamom"
        ],
        "middleNotes": [
            "Orange",
            "Pepper",
            "Cinnamon",
            "Amber"
        ],
        "baseNotes": [
            "Lemon",
            "Pepper",
            "Iris"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and oud elements."
    },
    {
        "name": "Bleu de Chanel",
        "brand": "Chanel",
        "year": 2010,
        "accords": [
            "Oud",
            "Citrus",
            "Amber",
            "Powdery",
            "Leather"
        ],
        "topNotes": [
            "Pepper",
            "Lavender",
            "Cinnamon"
        ],
        "middleNotes": [
            "Oakmoss",
            "Bergamot",
            "Jasmine"
        ],
        "baseNotes": [
            "Cedar",
            "Oakmoss",
            "Musk",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Layton",
        "brand": "Parfums de Marly",
        "year": 2016,
        "accords": [
            "Citrus",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Orange",
            "Incense",
            "Pepper",
            "Oud"
        ],
        "middleNotes": [
            "Apple",
            "Cardamom",
            "Tonka Bean",
            "Vetiver"
        ],
        "baseNotes": [
            "Iris",
            "Pepper",
            "Orange",
            "Incense"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated citrus and floral elements."
    },
    {
        "name": "Delina",
        "brand": "Parfums de Marly",
        "year": 2017,
        "accords": [
            "Floral",
            "Fresh",
            "Musky",
            "Citrus"
        ],
        "topNotes": [
            "Saffron",
            "Iris",
            "Lavender"
        ],
        "middleNotes": [
            "Incense",
            "Pepper",
            "Saffron"
        ],
        "baseNotes": [
            "Cardamom",
            "Lemon",
            "Iris"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated floral and fresh elements."
    },
    {
        "name": "Santal 33",
        "brand": "Le Labo",
        "year": 2011,
        "accords": [
            "Sweet",
            "Floral",
            "Amber",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Apple",
            "Bergamot",
            "Orange",
            "Cinnamon"
        ],
        "middleNotes": [
            "Oud",
            "Cardamom",
            "Cinnamon"
        ],
        "baseNotes": [
            "Cardamom",
            "Apple",
            "Amber",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated sweet and floral elements."
    },
    {
        "name": "Naxos",
        "brand": "Xerjoff",
        "year": 2015,
        "accords": [
            "Floral",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Pepper",
            "Apple",
            "Oakmoss"
        ],
        "middleNotes": [
            "Cedar",
            "Incense",
            "Lavender"
        ],
        "baseNotes": [
            "Saffron",
            "Vetiver",
            "Tonka Bean",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated floral and woody elements."
    },
    {
        "name": "Reflection Man",
        "brand": "Amouage",
        "year": 2007,
        "accords": [
            "Spicy",
            "Amber",
            "Powdery"
        ],
        "topNotes": [
            "Bergamot",
            "Sandalwood",
            "Lavender",
            "Patchouli"
        ],
        "middleNotes": [
            "Oud",
            "Saffron",
            "Bergamot"
        ],
        "baseNotes": [
            "Sandalwood",
            "Amber",
            "Bergamot",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated spicy and amber elements."
    },
    {
        "name": "Hacivat",
        "brand": "Nishane",
        "year": 2017,
        "accords": [
            "Woody",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Saffron",
            "Rose",
            "Pineapple"
        ],
        "middleNotes": [
            "Rose",
            "Bergamot",
            "Apple"
        ],
        "baseNotes": [
            "Saffron",
            "Orange",
            "Sandalwood",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Halfeti",
        "brand": "Penhaligon's",
        "year": 2014,
        "accords": [
            "Floral",
            "Oud",
            "Musky",
            "Amber",
            "Leather"
        ],
        "topNotes": [
            "Sandalwood",
            "Iris",
            "Lavender",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Vanilla",
            "Cinnamon",
            "Oud"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Pineapple",
            "Lavender",
            "Rose"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated floral and oud elements."
    },
    {
        "name": "Ombre Leather",
        "brand": "Tom Ford",
        "year": 2018,
        "accords": [
            "Fresh",
            "Powdery",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Oud",
            "Vanilla",
            "Apple"
        ],
        "middleNotes": [
            "Incense",
            "Orange",
            "Lemon"
        ],
        "baseNotes": [
            "Cardamom",
            "Jasmine",
            "Rose",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated fresh and powdery elements."
    },
    {
        "name": "Black Opium",
        "brand": "YSL",
        "year": 2014,
        "accords": [
            "Aromatic",
            "Oud",
            "Powdery"
        ],
        "topNotes": [
            "Bergamot",
            "Vetiver",
            "Orange",
            "Vanilla"
        ],
        "middleNotes": [
            "Leather",
            "Jasmine",
            "Bergamot"
        ],
        "baseNotes": [
            "Bergamot",
            "Rose",
            "Pepper"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "La Nuit de l'Homme",
        "brand": "YSL",
        "year": 2009,
        "accords": [
            "Leather",
            "Oud",
            "Citrus",
            "Spicy",
            "Floral"
        ],
        "topNotes": [
            "Pepper",
            "Saffron",
            "Incense",
            "Pineapple"
        ],
        "middleNotes": [
            "Amber",
            "Orange",
            "Vetiver",
            "Jasmine"
        ],
        "baseNotes": [
            "Jasmine",
            "Lemon",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated leather and oud elements."
    },
    {
        "name": "Coco Mademoiselle",
        "brand": "Chanel",
        "year": 2001,
        "accords": [
            "Musky",
            "Leather",
            "Floral",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Apple",
            "Vetiver"
        ],
        "middleNotes": [
            "Cardamom",
            "Iris",
            "Patchouli",
            "Apple"
        ],
        "baseNotes": [
            "Lemon",
            "Jasmine",
            "Amber",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated musky and leather elements."
    },
    {
        "name": "Angels' Share",
        "brand": "Kilian Paris",
        "year": 2020,
        "accords": [
            "Oud",
            "Sweet",
            "Powdery",
            "Amber",
            "Spicy"
        ],
        "topNotes": [
            "Sandalwood",
            "Cardamom",
            "Musk",
            "Pineapple"
        ],
        "middleNotes": [
            "Sandalwood",
            "Oakmoss",
            "Pepper",
            "Cedar"
        ],
        "baseNotes": [
            "Saffron",
            "Cinnamon",
            "Lemon",
            "Apple"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Another 13",
        "brand": "Le Labo",
        "year": 2010,
        "accords": [
            "Woody",
            "Powdery",
            "Aromatic",
            "Spicy",
            "Oud"
        ],
        "topNotes": [
            "Vanilla",
            "Orange",
            "Cedar",
            "Lavender"
        ],
        "middleNotes": [
            "Patchouli",
            "Incense",
            "Oud",
            "Cardamom"
        ],
        "baseNotes": [
            "Leather",
            "Bergamot",
            "Apple"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "The Noir 29",
        "brand": "Le Labo",
        "year": 2015,
        "accords": [
            "Spicy",
            "Amber",
            "Citrus"
        ],
        "topNotes": [
            "Vetiver",
            "Pepper",
            "Oud",
            "Rose"
        ],
        "middleNotes": [
            "Vetiver",
            "Musk",
            "Pineapple"
        ],
        "baseNotes": [
            "Iris",
            "Lemon",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated spicy and amber elements."
    },
    {
        "name": "Jazz Club",
        "brand": "Maison Margiela",
        "year": 2013,
        "accords": [
            "Sweet",
            "Spicy",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Iris",
            "Cedar",
            "Leather"
        ],
        "middleNotes": [
            "Apple",
            "Vetiver",
            "Sandalwood",
            "Amber"
        ],
        "baseNotes": [
            "Patchouli",
            "Pineapple",
            "Sandalwood",
            "Leather"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "By the Fireplace",
        "brand": "Maison Margiela",
        "year": 2015,
        "accords": [
            "Woody",
            "Citrus",
            "Fresh"
        ],
        "topNotes": [
            "Cinnamon",
            "Oakmoss",
            "Oud",
            "Lemon"
        ],
        "middleNotes": [
            "Amber",
            "Cardamom",
            "Pineapple",
            "Patchouli"
        ],
        "baseNotes": [
            "Iris",
            "Cardamom",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Philosykos",
        "brand": "Diptyque",
        "year": 1996,
        "accords": [
            "Sweet",
            "Woody",
            "Powdery",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Apple",
            "Lemon",
            "Lavender",
            "Sandalwood"
        ],
        "middleNotes": [
            "Oakmoss",
            "Pineapple",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Rose",
            "Pepper",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated sweet and woody elements."
    },
    {
        "name": "Gypsy Water",
        "brand": "Byredo",
        "year": 2008,
        "accords": [
            "Musky",
            "Sweet",
            "Woody"
        ],
        "topNotes": [
            "Leather",
            "Lemon",
            "Pineapple",
            "Vetiver"
        ],
        "middleNotes": [
            "Amber",
            "Incense",
            "Pineapple"
        ],
        "baseNotes": [
            "Pineapple",
            "Orange",
            "Bergamot",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated musky and sweet elements."
    },
    {
        "name": "Mojave Ghost",
        "brand": "Byredo",
        "year": 2014,
        "accords": [
            "Oud",
            "Citrus",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Sandalwood",
            "Bergamot",
            "Cinnamon",
            "Orange"
        ],
        "middleNotes": [
            "Musk",
            "Incense",
            "Cardamom",
            "Oakmoss"
        ],
        "baseNotes": [
            "Cardamom",
            "Saffron",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Bal d'Afrique",
        "brand": "Byredo",
        "year": 2009,
        "accords": [
            "Citrus",
            "Spicy",
            "Powdery"
        ],
        "topNotes": [
            "Vetiver",
            "Oud",
            "Lavender"
        ],
        "middleNotes": [
            "Incense",
            "Pepper",
            "Bergamot"
        ],
        "baseNotes": [
            "Vetiver",
            "Lemon",
            "Sandalwood",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated citrus and spicy elements."
    },
    {
        "name": "Portrait of a Lady",
        "brand": "Frederic Malle",
        "year": 2010,
        "accords": [
            "Sweet",
            "Spicy",
            "Floral",
            "Woody",
            "Aromatic"
        ],
        "topNotes": [
            "Vanilla",
            "Oud",
            "Iris",
            "Lavender"
        ],
        "middleNotes": [
            "Cardamom",
            "Amber",
            "Apple"
        ],
        "baseNotes": [
            "Apple",
            "Cinnamon",
            "Orange"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Musc Ravageur",
        "brand": "Frederic Malle",
        "year": 2000,
        "accords": [
            "Spicy",
            "Citrus",
            "Amber",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Apple",
            "Tonka Bean",
            "Oud"
        ],
        "middleNotes": [
            "Pepper",
            "Orange",
            "Oud",
            "Incense"
        ],
        "baseNotes": [
            "Sandalwood",
            "Cardamom",
            "Jasmine",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated spicy and citrus elements."
    },
    {
        "name": "Carnal Flower",
        "brand": "Frederic Malle",
        "year": 2005,
        "accords": [
            "Floral",
            "Powdery",
            "Oud",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Pepper",
            "Iris",
            "Oud"
        ],
        "middleNotes": [
            "Cinnamon",
            "Incense",
            "Jasmine",
            "Vetiver"
        ],
        "baseNotes": [
            "Pepper",
            "Lavender",
            "Oud"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated floral and powdery elements."
    },
    {
        "name": "Side Effect",
        "brand": "Initio",
        "year": 2016,
        "accords": [
            "Oud",
            "Sweet",
            "Woody",
            "Leather",
            "Powdery"
        ],
        "topNotes": [
            "Rose",
            "Cinnamon",
            "Musk"
        ],
        "middleNotes": [
            "Oakmoss",
            "Pepper",
            "Sandalwood",
            "Iris"
        ],
        "baseNotes": [
            "Sandalwood",
            "Orange",
            "Iris"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Oud for Greatness",
        "brand": "Initio",
        "year": 2018,
        "accords": [
            "Fresh",
            "Sweet",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Apple",
            "Cedar",
            "Cardamom"
        ],
        "middleNotes": [
            "Sandalwood",
            "Iris",
            "Cedar"
        ],
        "baseNotes": [
            "Saffron",
            "Musk",
            "Cardamom",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated fresh and sweet elements."
    },
    {
        "name": "Elysium",
        "brand": "Roja Parfums",
        "year": 2017,
        "accords": [
            "Citrus",
            "Oud",
            "Sweet"
        ],
        "topNotes": [
            "Jasmine",
            "Saffron",
            "Amber"
        ],
        "middleNotes": [
            "Apple",
            "Saffron",
            "Cardamom"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Cardamom",
            "Oud",
            "Rose"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated citrus and oud elements."
    },
    {
        "name": "Oud Wood",
        "brand": "Tom Ford",
        "year": 2007,
        "accords": [
            "Aromatic",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Sandalwood",
            "Cinnamon",
            "Incense"
        ],
        "middleNotes": [
            "Amber",
            "Orange",
            "Leather"
        ],
        "baseNotes": [
            "Sandalwood",
            "Tonka Bean",
            "Orange",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated aromatic and powdery elements."
    },
    {
        "name": "Tuscan Leather",
        "brand": "Tom Ford",
        "year": 2007,
        "accords": [
            "Spicy",
            "Citrus",
            "Aromatic"
        ],
        "topNotes": [
            "Oud",
            "Amber",
            "Bergamot",
            "Incense"
        ],
        "middleNotes": [
            "Lemon",
            "Pineapple",
            "Oakmoss"
        ],
        "baseNotes": [
            "Saffron",
            "Orange",
            "Iris"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated spicy and citrus elements."
    },
    {
        "name": "Grand Soir",
        "brand": "Maison Francis Kurkdjian",
        "year": 2016,
        "accords": [
            "Powdery",
            "Sweet",
            "Oud"
        ],
        "topNotes": [
            "Leather",
            "Patchouli",
            "Apple",
            "Musk"
        ],
        "middleNotes": [
            "Saffron",
            "Pepper",
            "Bergamot",
            "Sandalwood"
        ],
        "baseNotes": [
            "Cardamom",
            "Lavender",
            "Orange",
            "Leather"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Amyris Femme",
        "brand": "Maison Francis Kurkdjian",
        "year": 2012,
        "accords": [
            "Aromatic",
            "Woody",
            "Fresh",
            "Musky"
        ],
        "topNotes": [
            "Incense",
            "Cedar",
            "Cardamom"
        ],
        "middleNotes": [
            "Patchouli",
            "Vanilla",
            "Sandalwood"
        ],
        "baseNotes": [
            "Sandalwood",
            "Saffron",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "L'Air du Desert Marocain",
        "brand": "Tauer",
        "year": 2005,
        "accords": [
            "Fresh",
            "Spicy",
            "Oud",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Patchouli",
            "Pepper",
            "Vetiver"
        ],
        "middleNotes": [
            "Orange",
            "Apple",
            "Leather"
        ],
        "baseNotes": [
            "Apple",
            "Musk",
            "Leather"
        ],
        "description": "A high-quality fragrance from Tauer, balancing sophisticated fresh and spicy elements."
    },
    {
        "name": "Au Coeur du Désert",
        "brand": "Tauer",
        "year": 2016,
        "accords": [
            "Fresh",
            "Leather",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Pineapple",
            "Lavender",
            "Bergamot",
            "Oud"
        ],
        "middleNotes": [
            "Cinnamon",
            "Amber",
            "Patchouli",
            "Pineapple"
        ],
        "baseNotes": [
            "Oud",
            "Saffron",
            "Bergamot",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Tauer, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Chergui",
        "brand": "Serge Lutens",
        "year": 2001,
        "accords": [
            "Leather",
            "Aromatic",
            "Fresh",
            "Woody",
            "Musky"
        ],
        "topNotes": [
            "Lemon",
            "Cedar",
            "Cardamom"
        ],
        "middleNotes": [
            "Leather",
            "Orange",
            "Rose"
        ],
        "baseNotes": [
            "Amber",
            "Lavender",
            "Incense"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated leather and aromatic elements."
    },
    {
        "name": "La Fille de Berlin",
        "brand": "Serge Lutens",
        "year": 2013,
        "accords": [
            "Leather",
            "Spicy",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Cedar",
            "Jasmine",
            "Oakmoss"
        ],
        "middleNotes": [
            "Rose",
            "Oud",
            "Lemon",
            "Saffron"
        ],
        "baseNotes": [
            "Lemon",
            "Pineapple",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated leather and spicy elements."
    },
    {
        "name": "Ambre Sultan",
        "brand": "Serge Lutens",
        "year": 1993,
        "accords": [
            "Musky",
            "Spicy",
            "Aromatic",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Orange",
            "Oud",
            "Incense",
            "Pineapple"
        ],
        "middleNotes": [
            "Bergamot",
            "Cinnamon",
            "Jasmine"
        ],
        "baseNotes": [
            "Saffron",
            "Cinnamon",
            "Musk",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated musky and spicy elements."
    },
    {
        "name": "Oasis",
        "brand": "Louis Vuitton",
        "year": 2019,
        "accords": [
            "Powdery",
            "Aromatic",
            "Floral",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Incense",
            "Jasmine",
            "Pineapple"
        ],
        "middleNotes": [
            "Lemon",
            "Oud",
            "Jasmine",
            "Incense"
        ],
        "baseNotes": [
            "Vetiver",
            "Tonka Bean",
            "Musk"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Afternoon Swim",
        "brand": "Louis Vuitton",
        "year": 2019,
        "accords": [
            "Woody",
            "Amber",
            "Musky"
        ],
        "topNotes": [
            "Tonka Bean",
            "Leather",
            "Pineapple",
            "Pepper"
        ],
        "middleNotes": [
            "Vetiver",
            "Incense",
            "Pepper"
        ],
        "baseNotes": [
            "Musk",
            "Oud",
            "Rose",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated woody and amber elements."
    },
    {
        "name": "L'Immensité",
        "brand": "Louis Vuitton",
        "year": 2018,
        "accords": [
            "Floral",
            "Musky",
            "Sweet",
            "Powdery",
            "Aromatic"
        ],
        "topNotes": [
            "Jasmine",
            "Lemon",
            "Musk",
            "Apple"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Musk",
            "Cinnamon"
        ],
        "baseNotes": [
            "Oud",
            "Tonka Bean",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated floral and musky elements."
    },
    {
        "name": "Collection 44",
        "brand": "Byredo",
        "year": 2010,
        "accords": [
            "Oud",
            "Amber",
            "Leather",
            "Citrus"
        ],
        "topNotes": [
            "Iris",
            "Patchouli",
            "Saffron",
            "Cinnamon"
        ],
        "middleNotes": [
            "Bergamot",
            "Cardamom",
            "Lavender"
        ],
        "baseNotes": [
            "Saffron",
            "Pepper",
            "Lemon",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated oud and amber elements."
    },
    {
        "name": "Collection 45",
        "brand": "Jo Malone London",
        "year": 2004,
        "accords": [
            "Amber",
            "Sweet",
            "Musky",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Pepper",
            "Saffron",
            "Bergamot"
        ],
        "middleNotes": [
            "Pepper",
            "Lemon",
            "Orange",
            "Saffron"
        ],
        "baseNotes": [
            "Jasmine",
            "Amber",
            "Musk"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated amber and sweet elements."
    },
    {
        "name": "Collection 46",
        "brand": "Kilian Paris",
        "year": 2002,
        "accords": [
            "Sweet",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Lemon",
            "Patchouli",
            "Cinnamon"
        ],
        "middleNotes": [
            "Lemon",
            "Sandalwood",
            "Jasmine"
        ],
        "baseNotes": [
            "Amber",
            "Lemon",
            "Incense",
            "Apple"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 47",
        "brand": "Armani",
        "year": 2004,
        "accords": [
            "Aromatic",
            "Oud",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Incense",
            "Cardamom",
            "Rose"
        ],
        "middleNotes": [
            "Cardamom",
            "Lemon",
            "Lavender"
        ],
        "baseNotes": [
            "Rose",
            "Patchouli",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "Collection 48",
        "brand": "Roja Parfums",
        "year": 2022,
        "accords": [
            "Leather",
            "Citrus",
            "Spicy",
            "Aromatic"
        ],
        "topNotes": [
            "Cardamom",
            "Sandalwood",
            "Saffron",
            "Iris"
        ],
        "middleNotes": [
            "Jasmine",
            "Orange",
            "Sandalwood"
        ],
        "baseNotes": [
            "Cardamom",
            "Pepper",
            "Leather"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated leather and citrus elements."
    },
    {
        "name": "Collection 49",
        "brand": "Le Labo",
        "year": 2025,
        "accords": [
            "Amber",
            "Oud",
            "Citrus",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Lemon",
            "Patchouli"
        ],
        "middleNotes": [
            "Vetiver",
            "Orange",
            "Amber"
        ],
        "baseNotes": [
            "Cardamom",
            "Oud",
            "Bergamot",
            "Iris"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated amber and oud elements."
    },
    {
        "name": "Collection 50",
        "brand": "Nishane",
        "year": 2001,
        "accords": [
            "Powdery",
            "Sweet",
            "Woody",
            "Amber",
            "Leather"
        ],
        "topNotes": [
            "Musk",
            "Vetiver",
            "Oakmoss",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Patchouli",
            "Lemon",
            "Amber"
        ],
        "baseNotes": [
            "Vetiver",
            "Saffron",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 51",
        "brand": "Serge Lutens",
        "year": 2006,
        "accords": [
            "Fresh",
            "Floral",
            "Aromatic"
        ],
        "topNotes": [
            "Jasmine",
            "Iris",
            "Vanilla",
            "Oakmoss"
        ],
        "middleNotes": [
            "Pepper",
            "Cardamom",
            "Incense"
        ],
        "baseNotes": [
            "Amber",
            "Incense",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated fresh and floral elements."
    },
    {
        "name": "Collection 52",
        "brand": "Guerlain",
        "year": 2026,
        "accords": [
            "Aromatic",
            "Sweet",
            "Amber",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Pepper",
            "Apple",
            "Lavender"
        ],
        "middleNotes": [
            "Cardamom",
            "Oud",
            "Lemon"
        ],
        "baseNotes": [
            "Apple",
            "Saffron",
            "Jasmine",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated aromatic and sweet elements."
    },
    {
        "name": "Collection 53",
        "brand": "Creed",
        "year": 2001,
        "accords": [
            "Floral",
            "Woody",
            "Amber",
            "Sweet",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Rose",
            "Lavender"
        ],
        "middleNotes": [
            "Saffron",
            "Tonka Bean",
            "Lavender",
            "Jasmine"
        ],
        "baseNotes": [
            "Cardamom",
            "Cinnamon",
            "Lavender",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated floral and woody elements."
    },
    {
        "name": "Collection 54",
        "brand": "Bvlgari",
        "year": 2007,
        "accords": [
            "Fresh",
            "Musky",
            "Oud"
        ],
        "topNotes": [
            "Lavender",
            "Saffron",
            "Tonka Bean",
            "Lemon"
        ],
        "middleNotes": [
            "Iris",
            "Leather",
            "Orange",
            "Pepper"
        ],
        "baseNotes": [
            "Bergamot",
            "Vetiver",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated fresh and musky elements."
    },
    {
        "name": "Collection 55",
        "brand": "Hermès",
        "year": 2002,
        "accords": [
            "Spicy",
            "Floral",
            "Sweet",
            "Citrus"
        ],
        "topNotes": [
            "Jasmine",
            "Lavender",
            "Oakmoss",
            "Orange"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Cinnamon",
            "Patchouli"
        ],
        "baseNotes": [
            "Leather",
            "Jasmine",
            "Musk",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated spicy and floral elements."
    },
    {
        "name": "Collection 56",
        "brand": "Chanel",
        "year": 2013,
        "accords": [
            "Spicy",
            "Citrus",
            "Floral",
            "Amber",
            "Musky"
        ],
        "topNotes": [
            "Oud",
            "Pineapple",
            "Orange",
            "Vetiver"
        ],
        "middleNotes": [
            "Oakmoss",
            "Cardamom",
            "Orange"
        ],
        "baseNotes": [
            "Cinnamon",
            "Vetiver",
            "Musk",
            "Leather"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated spicy and citrus elements."
    },
    {
        "name": "Collection 57",
        "brand": "Amouage",
        "year": 1995,
        "accords": [
            "Woody",
            "Citrus",
            "Oud",
            "Powdery"
        ],
        "topNotes": [
            "Tonka Bean",
            "Iris",
            "Oud",
            "Jasmine"
        ],
        "middleNotes": [
            "Patchouli",
            "Cinnamon",
            "Oud"
        ],
        "baseNotes": [
            "Patchouli",
            "Bergamot",
            "Leather",
            "Incense"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 58",
        "brand": "YSL",
        "year": 1992,
        "accords": [
            "Sweet",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Iris",
            "Bergamot",
            "Oud"
        ],
        "middleNotes": [
            "Musk",
            "Cedar",
            "Leather"
        ],
        "baseNotes": [
            "Saffron",
            "Lemon",
            "Amber",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated sweet and woody elements."
    },
    {
        "name": "Collection 59",
        "brand": "Parfums de Marly",
        "year": 2010,
        "accords": [
            "Musky",
            "Aromatic",
            "Oud",
            "Powdery",
            "Leather"
        ],
        "topNotes": [
            "Lemon",
            "Orange",
            "Vetiver",
            "Pineapple"
        ],
        "middleNotes": [
            "Sandalwood",
            "Orange",
            "Amber"
        ],
        "baseNotes": [
            "Patchouli",
            "Sandalwood",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 60",
        "brand": "Amouage",
        "year": 2016,
        "accords": [
            "Powdery",
            "Sweet",
            "Leather",
            "Aromatic"
        ],
        "topNotes": [
            "Orange",
            "Cinnamon",
            "Cardamom"
        ],
        "middleNotes": [
            "Rose",
            "Patchouli",
            "Pineapple",
            "Leather"
        ],
        "baseNotes": [
            "Saffron",
            "Pepper",
            "Oakmoss",
            "Rose"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 61",
        "brand": "Dior",
        "year": 1997,
        "accords": [
            "Sweet",
            "Amber",
            "Leather",
            "Spicy",
            "Citrus"
        ],
        "topNotes": [
            "Orange",
            "Cardamom",
            "Oakmoss",
            "Lavender"
        ],
        "middleNotes": [
            "Musk",
            "Pineapple",
            "Apple"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Saffron",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated sweet and amber elements."
    },
    {
        "name": "Collection 62",
        "brand": "Maison Margiela",
        "year": 2003,
        "accords": [
            "Powdery",
            "Sweet",
            "Aromatic",
            "Spicy",
            "Amber"
        ],
        "topNotes": [
            "Incense",
            "Pepper",
            "Amber",
            "Leather"
        ],
        "middleNotes": [
            "Iris",
            "Lemon",
            "Pineapple",
            "Oakmoss"
        ],
        "baseNotes": [
            "Cardamom",
            "Jasmine",
            "Orange"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 63",
        "brand": "Creed",
        "year": 1994,
        "accords": [
            "Spicy",
            "Sweet",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Oakmoss",
            "Leather",
            "Patchouli"
        ],
        "middleNotes": [
            "Vetiver",
            "Incense",
            "Pepper"
        ],
        "baseNotes": [
            "Oakmoss",
            "Sandalwood",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 64",
        "brand": "Maison Margiela",
        "year": 2024,
        "accords": [
            "Oud",
            "Woody",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Oud",
            "Leather",
            "Orange"
        ],
        "middleNotes": [
            "Sandalwood",
            "Tonka Bean",
            "Saffron",
            "Jasmine"
        ],
        "baseNotes": [
            "Cardamom",
            "Apple",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 65",
        "brand": "Bvlgari",
        "year": 2005,
        "accords": [
            "Citrus",
            "Aromatic",
            "Powdery",
            "Woody",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Apple",
            "Oakmoss",
            "Vanilla"
        ],
        "middleNotes": [
            "Iris",
            "Tonka Bean",
            "Saffron"
        ],
        "baseNotes": [
            "Patchouli",
            "Rose",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated citrus and aromatic elements."
    },
    {
        "name": "Collection 66",
        "brand": "Creed",
        "year": 2016,
        "accords": [
            "Aromatic",
            "Musky",
            "Leather"
        ],
        "topNotes": [
            "Rose",
            "Lemon",
            "Oud",
            "Patchouli"
        ],
        "middleNotes": [
            "Vetiver",
            "Pineapple",
            "Saffron"
        ],
        "baseNotes": [
            "Leather",
            "Musk",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated aromatic and musky elements."
    },
    {
        "name": "Collection 67",
        "brand": "Prada",
        "year": 1991,
        "accords": [
            "Fresh",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Patchouli",
            "Saffron",
            "Incense",
            "Lavender"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pepper",
            "Lavender",
            "Vetiver"
        ],
        "baseNotes": [
            "Lavender",
            "Sandalwood",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 68",
        "brand": "Dior",
        "year": 1996,
        "accords": [
            "Fresh",
            "Floral",
            "Aromatic",
            "Powdery",
            "Sweet"
        ],
        "topNotes": [
            "Orange",
            "Oakmoss",
            "Pepper"
        ],
        "middleNotes": [
            "Iris",
            "Saffron",
            "Sandalwood",
            "Pineapple"
        ],
        "baseNotes": [
            "Saffron",
            "Vetiver",
            "Pineapple",
            "Iris"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and floral elements."
    },
    {
        "name": "Collection 69",
        "brand": "Mancera",
        "year": 1998,
        "accords": [
            "Powdery",
            "Musky",
            "Fresh"
        ],
        "topNotes": [
            "Bergamot",
            "Apple",
            "Cinnamon"
        ],
        "middleNotes": [
            "Lemon",
            "Saffron",
            "Cinnamon"
        ],
        "baseNotes": [
            "Apple",
            "Iris",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated powdery and musky elements."
    },
    {
        "name": "Collection 70",
        "brand": "Jo Malone London",
        "year": 2025,
        "accords": [
            "Powdery",
            "Floral",
            "Amber",
            "Aromatic"
        ],
        "topNotes": [
            "Cardamom",
            "Amber",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Patchouli",
            "Vetiver",
            "Saffron",
            "Oud"
        ],
        "baseNotes": [
            "Lemon",
            "Cinnamon",
            "Incense"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated powdery and floral elements."
    },
    {
        "name": "Collection 71",
        "brand": "Hermès",
        "year": 2023,
        "accords": [
            "Citrus",
            "Woody",
            "Powdery",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Vetiver",
            "Sandalwood",
            "Saffron",
            "Bergamot"
        ],
        "middleNotes": [
            "Oud",
            "Pineapple",
            "Cardamom"
        ],
        "baseNotes": [
            "Lemon",
            "Saffron",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 72",
        "brand": "Prada",
        "year": 2006,
        "accords": [
            "Musky",
            "Sweet",
            "Oud",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Musk",
            "Pineapple",
            "Rose"
        ],
        "middleNotes": [
            "Vetiver",
            "Pepper",
            "Orange",
            "Rose"
        ],
        "baseNotes": [
            "Lemon",
            "Pepper",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated musky and sweet elements."
    },
    {
        "name": "Collection 73",
        "brand": "Creed",
        "year": 2007,
        "accords": [
            "Woody",
            "Musky",
            "Citrus"
        ],
        "topNotes": [
            "Leather",
            "Bergamot",
            "Saffron",
            "Rose"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Amber",
            "Jasmine"
        ],
        "baseNotes": [
            "Vetiver",
            "Patchouli",
            "Leather"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated woody and musky elements."
    },
    {
        "name": "Collection 74",
        "brand": "Diptyque",
        "year": 2016,
        "accords": [
            "Citrus",
            "Fresh",
            "Floral",
            "Aromatic",
            "Powdery"
        ],
        "topNotes": [
            "Pepper",
            "Rose",
            "Bergamot"
        ],
        "middleNotes": [
            "Orange",
            "Sandalwood",
            "Lemon",
            "Lavender"
        ],
        "baseNotes": [
            "Patchouli",
            "Oud",
            "Cedar",
            "Orange"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated citrus and fresh elements."
    },
    {
        "name": "Collection 75",
        "brand": "Penhaligon's",
        "year": 2025,
        "accords": [
            "Amber",
            "Spicy",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Oakmoss",
            "Cardamom",
            "Lemon",
            "Lavender"
        ],
        "middleNotes": [
            "Saffron",
            "Vetiver",
            "Cedar",
            "Patchouli"
        ],
        "baseNotes": [
            "Apple",
            "Cardamom",
            "Iris"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated amber and spicy elements."
    },
    {
        "name": "Collection 76",
        "brand": "Viktor&Rolf",
        "year": 1997,
        "accords": [
            "Sweet",
            "Floral",
            "Aromatic",
            "Powdery",
            "Fresh"
        ],
        "topNotes": [
            "Oakmoss",
            "Tonka Bean",
            "Musk",
            "Cardamom"
        ],
        "middleNotes": [
            "Cardamom",
            "Bergamot",
            "Pepper",
            "Lavender"
        ],
        "baseNotes": [
            "Amber",
            "Saffron",
            "Bergamot",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated sweet and floral elements."
    },
    {
        "name": "Collection 77",
        "brand": "Le Labo",
        "year": 2005,
        "accords": [
            "Aromatic",
            "Oud",
            "Floral",
            "Citrus"
        ],
        "topNotes": [
            "Musk",
            "Rose",
            "Cinnamon"
        ],
        "middleNotes": [
            "Cinnamon",
            "Sandalwood",
            "Tonka Bean",
            "Cardamom"
        ],
        "baseNotes": [
            "Musk",
            "Lemon",
            "Sandalwood",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "Collection 78",
        "brand": "Diptyque",
        "year": 2014,
        "accords": [
            "Fresh",
            "Amber",
            "Sweet",
            "Oud",
            "Musky"
        ],
        "topNotes": [
            "Bergamot",
            "Vetiver",
            "Iris"
        ],
        "middleNotes": [
            "Cinnamon",
            "Cedar",
            "Incense",
            "Musk"
        ],
        "baseNotes": [
            "Leather",
            "Oud",
            "Orange",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated fresh and amber elements."
    },
    {
        "name": "Collection 79",
        "brand": "Xerjoff",
        "year": 1993,
        "accords": [
            "Powdery",
            "Sweet",
            "Amber",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Cedar",
            "Orange",
            "Saffron",
            "Pineapple"
        ],
        "middleNotes": [
            "Iris",
            "Sandalwood",
            "Orange"
        ],
        "baseNotes": [
            "Jasmine",
            "Sandalwood",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 80",
        "brand": "Xerjoff",
        "year": 1992,
        "accords": [
            "Sweet",
            "Fresh",
            "Powdery"
        ],
        "topNotes": [
            "Sandalwood",
            "Incense",
            "Musk"
        ],
        "middleNotes": [
            "Sandalwood",
            "Amber",
            "Cardamom",
            "Vetiver"
        ],
        "baseNotes": [
            "Cardamom",
            "Lavender",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated sweet and fresh elements."
    },
    {
        "name": "Collection 81",
        "brand": "Xerjoff",
        "year": 2021,
        "accords": [
            "Floral",
            "Sweet",
            "Woody"
        ],
        "topNotes": [
            "Incense",
            "Oud",
            "Cardamom"
        ],
        "middleNotes": [
            "Oud",
            "Leather",
            "Sandalwood"
        ],
        "baseNotes": [
            "Amber",
            "Cinnamon",
            "Sandalwood",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 82",
        "brand": "Byredo",
        "year": 2016,
        "accords": [
            "Powdery",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Lavender",
            "Patchouli",
            "Amber",
            "Oakmoss"
        ],
        "middleNotes": [
            "Lemon",
            "Oakmoss",
            "Jasmine"
        ],
        "baseNotes": [
            "Oud",
            "Rose",
            "Cinnamon",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 83",
        "brand": "Byredo",
        "year": 2012,
        "accords": [
            "Woody",
            "Floral",
            "Aromatic",
            "Fresh",
            "Sweet"
        ],
        "topNotes": [
            "Leather",
            "Patchouli",
            "Rose",
            "Orange"
        ],
        "middleNotes": [
            "Amber",
            "Incense",
            "Oud",
            "Iris"
        ],
        "baseNotes": [
            "Cinnamon",
            "Cardamom",
            "Bergamot",
            "Oud"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated woody and floral elements."
    },
    {
        "name": "Collection 84",
        "brand": "Louis Vuitton",
        "year": 2016,
        "accords": [
            "Woody",
            "Musky",
            "Oud"
        ],
        "topNotes": [
            "Incense",
            "Amber",
            "Cinnamon"
        ],
        "middleNotes": [
            "Cinnamon",
            "Oud",
            "Lavender",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Pineapple",
            "Iris",
            "Saffron",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated woody and musky elements."
    },
    {
        "name": "Collection 85",
        "brand": "Jo Malone London",
        "year": 2017,
        "accords": [
            "Sweet",
            "Amber",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Musk",
            "Oud",
            "Cardamom",
            "Lavender"
        ],
        "middleNotes": [
            "Cardamom",
            "Vanilla",
            "Oakmoss"
        ],
        "baseNotes": [
            "Musk",
            "Apple",
            "Jasmine",
            "Orange"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated sweet and amber elements."
    },
    {
        "name": "Collection 86",
        "brand": "Armani",
        "year": 2019,
        "accords": [
            "Fresh",
            "Amber",
            "Aromatic"
        ],
        "topNotes": [
            "Lavender",
            "Rose",
            "Cedar",
            "Oud"
        ],
        "middleNotes": [
            "Saffron",
            "Sandalwood",
            "Vetiver",
            "Cinnamon"
        ],
        "baseNotes": [
            "Patchouli",
            "Vanilla",
            "Musk"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated fresh and amber elements."
    },
    {
        "name": "Collection 87",
        "brand": "Frederic Malle",
        "year": 1998,
        "accords": [
            "Citrus",
            "Spicy",
            "Leather",
            "Fresh",
            "Floral"
        ],
        "topNotes": [
            "Jasmine",
            "Apple",
            "Bergamot"
        ],
        "middleNotes": [
            "Oud",
            "Oakmoss",
            "Orange"
        ],
        "baseNotes": [
            "Cardamom",
            "Patchouli",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated citrus and spicy elements."
    },
    {
        "name": "Collection 88",
        "brand": "Parfums de Marly",
        "year": 2024,
        "accords": [
            "Floral",
            "Fresh",
            "Amber",
            "Leather",
            "Powdery"
        ],
        "topNotes": [
            "Jasmine",
            "Cardamom",
            "Lavender",
            "Amber"
        ],
        "middleNotes": [
            "Incense",
            "Sandalwood",
            "Cinnamon",
            "Orange"
        ],
        "baseNotes": [
            "Bergamot",
            "Jasmine",
            "Rose",
            "Incense"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated floral and fresh elements."
    },
    {
        "name": "Collection 89",
        "brand": "Xerjoff",
        "year": 2015,
        "accords": [
            "Fresh",
            "Citrus",
            "Oud",
            "Musky",
            "Amber"
        ],
        "topNotes": [
            "Saffron",
            "Iris",
            "Amber"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pineapple",
            "Lemon"
        ],
        "baseNotes": [
            "Pepper",
            "Oakmoss",
            "Incense",
            "Rose"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated fresh and citrus elements."
    },
    {
        "name": "Collection 90",
        "brand": "Kilian Paris",
        "year": 1996,
        "accords": [
            "Amber",
            "Woody",
            "Leather",
            "Powdery",
            "Aromatic"
        ],
        "topNotes": [
            "Patchouli",
            "Orange",
            "Cinnamon"
        ],
        "middleNotes": [
            "Vanilla",
            "Iris",
            "Lavender",
            "Oakmoss"
        ],
        "baseNotes": [
            "Incense",
            "Oud",
            "Iris",
            "Apple"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated amber and woody elements."
    },
    {
        "name": "Collection 91",
        "brand": "Guerlain",
        "year": 2012,
        "accords": [
            "Oud",
            "Sweet",
            "Powdery",
            "Leather",
            "Spicy"
        ],
        "topNotes": [
            "Jasmine",
            "Leather",
            "Iris",
            "Vetiver"
        ],
        "middleNotes": [
            "Iris",
            "Jasmine",
            "Cinnamon"
        ],
        "baseNotes": [
            "Vanilla",
            "Saffron",
            "Musk",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 92",
        "brand": "Amouage",
        "year": 1990,
        "accords": [
            "Fresh",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Cinnamon",
            "Vanilla",
            "Iris"
        ],
        "middleNotes": [
            "Orange",
            "Cardamom",
            "Vetiver"
        ],
        "baseNotes": [
            "Oud",
            "Cinnamon",
            "Sandalwood",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated fresh and powdery elements."
    },
    {
        "name": "Collection 93",
        "brand": "Initio",
        "year": 2017,
        "accords": [
            "Fresh",
            "Aromatic",
            "Floral",
            "Woody",
            "Sweet"
        ],
        "topNotes": [
            "Lemon",
            "Jasmine",
            "Oakmoss",
            "Leather"
        ],
        "middleNotes": [
            "Oud",
            "Musk",
            "Cinnamon"
        ],
        "baseNotes": [
            "Saffron",
            "Oakmoss",
            "Pepper",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 94",
        "brand": "Amouage",
        "year": 2024,
        "accords": [
            "Floral",
            "Fresh",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Orange",
            "Pineapple",
            "Patchouli"
        ],
        "middleNotes": [
            "Jasmine",
            "Rose",
            "Lavender",
            "Cedar"
        ],
        "baseNotes": [
            "Orange",
            "Cedar",
            "Oud"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated floral and fresh elements."
    },
    {
        "name": "Collection 95",
        "brand": "Mancera",
        "year": 1996,
        "accords": [
            "Woody",
            "Oud",
            "Citrus",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Lemon",
            "Vetiver",
            "Rose"
        ],
        "middleNotes": [
            "Amber",
            "Oud",
            "Jasmine",
            "Oakmoss"
        ],
        "baseNotes": [
            "Leather",
            "Cinnamon",
            "Oud",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated woody and oud elements."
    },
    {
        "name": "Collection 96",
        "brand": "Viktor&Rolf",
        "year": 2014,
        "accords": [
            "Floral",
            "Citrus",
            "Amber",
            "Aromatic",
            "Fresh"
        ],
        "topNotes": [
            "Lavender",
            "Cardamom",
            "Oud"
        ],
        "middleNotes": [
            "Apple",
            "Rose",
            "Incense",
            "Saffron"
        ],
        "baseNotes": [
            "Musk",
            "Lavender",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated floral and citrus elements."
    },
    {
        "name": "Collection 97",
        "brand": "Xerjoff",
        "year": 1994,
        "accords": [
            "Spicy",
            "Sweet",
            "Powdery",
            "Oud",
            "Aromatic"
        ],
        "topNotes": [
            "Amber",
            "Oakmoss",
            "Oud"
        ],
        "middleNotes": [
            "Saffron",
            "Oud",
            "Pepper",
            "Rose"
        ],
        "baseNotes": [
            "Sandalwood",
            "Tonka Bean",
            "Pineapple",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 98",
        "brand": "Diptyque",
        "year": 2022,
        "accords": [
            "Aromatic",
            "Fresh",
            "Leather"
        ],
        "topNotes": [
            "Cinnamon",
            "Cedar",
            "Iris"
        ],
        "middleNotes": [
            "Sandalwood",
            "Vetiver",
            "Lavender"
        ],
        "baseNotes": [
            "Oakmoss",
            "Incense",
            "Vetiver",
            "Apple"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 99",
        "brand": "Initio",
        "year": 1991,
        "accords": [
            "Citrus",
            "Floral",
            "Powdery"
        ],
        "topNotes": [
            "Saffron",
            "Pineapple",
            "Cinnamon",
            "Oud"
        ],
        "middleNotes": [
            "Vetiver",
            "Sandalwood",
            "Cinnamon"
        ],
        "baseNotes": [
            "Cardamom",
            "Patchouli",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and floral elements."
    },
    {
        "name": "Collection 100",
        "brand": "Nishane",
        "year": 1995,
        "accords": [
            "Sweet",
            "Citrus",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Oakmoss",
            "Leather",
            "Vetiver",
            "Pineapple"
        ],
        "middleNotes": [
            "Apple",
            "Patchouli",
            "Pepper"
        ],
        "baseNotes": [
            "Rose",
            "Iris",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 101",
        "brand": "Hermès",
        "year": 1992,
        "accords": [
            "Sweet",
            "Oud",
            "Amber"
        ],
        "topNotes": [
            "Pepper",
            "Incense",
            "Orange"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Amber",
            "Leather",
            "Oud"
        ],
        "baseNotes": [
            "Cardamom",
            "Jasmine",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 102",
        "brand": "Byredo",
        "year": 1993,
        "accords": [
            "Sweet",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Pineapple",
            "Tonka Bean",
            "Lavender"
        ],
        "middleNotes": [
            "Vanilla",
            "Leather",
            "Cinnamon"
        ],
        "baseNotes": [
            "Bergamot",
            "Musk",
            "Orange"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 103",
        "brand": "Kilian Paris",
        "year": 2024,
        "accords": [
            "Oud",
            "Woody",
            "Amber",
            "Aromatic"
        ],
        "topNotes": [
            "Tonka Bean",
            "Saffron",
            "Pepper"
        ],
        "middleNotes": [
            "Lavender",
            "Leather",
            "Cardamom"
        ],
        "baseNotes": [
            "Cinnamon",
            "Bergamot",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 104",
        "brand": "Dior",
        "year": 1995,
        "accords": [
            "Woody",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Incense",
            "Apple",
            "Lavender",
            "Pepper"
        ],
        "middleNotes": [
            "Musk",
            "Iris",
            "Pepper"
        ],
        "baseNotes": [
            "Lavender",
            "Incense",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated woody and aromatic elements."
    },
    {
        "name": "Collection 105",
        "brand": "Dior",
        "year": 1991,
        "accords": [
            "Powdery",
            "Woody",
            "Floral",
            "Musky",
            "Spicy"
        ],
        "topNotes": [
            "Vanilla",
            "Orange",
            "Musk"
        ],
        "middleNotes": [
            "Leather",
            "Sandalwood",
            "Oakmoss"
        ],
        "baseNotes": [
            "Apple",
            "Oud",
            "Incense",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 106",
        "brand": "Bvlgari",
        "year": 2009,
        "accords": [
            "Floral",
            "Aromatic",
            "Musky",
            "Citrus"
        ],
        "topNotes": [
            "Cedar",
            "Cinnamon",
            "Iris"
        ],
        "middleNotes": [
            "Lemon",
            "Vanilla",
            "Pepper",
            "Oud"
        ],
        "baseNotes": [
            "Vetiver",
            "Oakmoss",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated floral and aromatic elements."
    },
    {
        "name": "Collection 107",
        "brand": "Kilian Paris",
        "year": 2012,
        "accords": [
            "Oud",
            "Citrus",
            "Sweet",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Bergamot",
            "Musk",
            "Orange"
        ],
        "middleNotes": [
            "Cardamom",
            "Incense",
            "Cinnamon",
            "Saffron"
        ],
        "baseNotes": [
            "Oud",
            "Pepper",
            "Musk",
            "Incense"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 108",
        "brand": "Dior",
        "year": 2019,
        "accords": [
            "Musky",
            "Citrus",
            "Powdery",
            "Aromatic"
        ],
        "topNotes": [
            "Vetiver",
            "Vanilla",
            "Orange"
        ],
        "middleNotes": [
            "Lavender",
            "Bergamot",
            "Oud"
        ],
        "baseNotes": [
            "Orange",
            "Apple",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated musky and citrus elements."
    },
    {
        "name": "Collection 109",
        "brand": "Maison Margiela",
        "year": 2025,
        "accords": [
            "Fresh",
            "Powdery",
            "Floral",
            "Spicy",
            "Woody"
        ],
        "topNotes": [
            "Apple",
            "Pepper",
            "Orange"
        ],
        "middleNotes": [
            "Cinnamon",
            "Jasmine",
            "Sandalwood",
            "Cardamom"
        ],
        "baseNotes": [
            "Musk",
            "Lemon",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated fresh and powdery elements."
    },
    {
        "name": "Collection 110",
        "brand": "Chanel",
        "year": 2010,
        "accords": [
            "Amber",
            "Floral",
            "Powdery",
            "Sweet"
        ],
        "topNotes": [
            "Iris",
            "Bergamot",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Lavender",
            "Vanilla",
            "Amber",
            "Oud"
        ],
        "baseNotes": [
            "Lavender",
            "Oakmoss",
            "Incense",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated amber and floral elements."
    },
    {
        "name": "Collection 111",
        "brand": "Maison Margiela",
        "year": 1997,
        "accords": [
            "Woody",
            "Musky",
            "Sweet"
        ],
        "topNotes": [
            "Cardamom",
            "Cedar",
            "Tonka Bean",
            "Iris"
        ],
        "middleNotes": [
            "Vanilla",
            "Lemon",
            "Leather"
        ],
        "baseNotes": [
            "Cardamom",
            "Iris",
            "Orange"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated woody and musky elements."
    },
    {
        "name": "Collection 112",
        "brand": "Dior",
        "year": 2022,
        "accords": [
            "Fresh",
            "Leather",
            "Powdery",
            "Woody",
            "Musky"
        ],
        "topNotes": [
            "Lemon",
            "Leather",
            "Vetiver"
        ],
        "middleNotes": [
            "Sandalwood",
            "Jasmine",
            "Cardamom",
            "Pineapple"
        ],
        "baseNotes": [
            "Lemon",
            "Saffron",
            "Apple"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 113",
        "brand": "Louis Vuitton",
        "year": 1990,
        "accords": [
            "Oud",
            "Sweet",
            "Fresh",
            "Aromatic"
        ],
        "topNotes": [
            "Cedar",
            "Amber",
            "Musk",
            "Rose"
        ],
        "middleNotes": [
            "Incense",
            "Orange",
            "Patchouli",
            "Oakmoss"
        ],
        "baseNotes": [
            "Bergamot",
            "Cardamom",
            "Orange"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 114",
        "brand": "Maison Margiela",
        "year": 2002,
        "accords": [
            "Woody",
            "Powdery",
            "Spicy",
            "Citrus",
            "Floral"
        ],
        "topNotes": [
            "Cardamom",
            "Incense",
            "Patchouli",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Iris",
            "Cardamom",
            "Jasmine",
            "Pepper"
        ],
        "baseNotes": [
            "Musk",
            "Amber",
            "Apple",
            "Orange"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 115",
        "brand": "Viktor&Rolf",
        "year": 2011,
        "accords": [
            "Musky",
            "Fresh",
            "Spicy",
            "Sweet",
            "Amber"
        ],
        "topNotes": [
            "Amber",
            "Pepper",
            "Orange",
            "Sandalwood"
        ],
        "middleNotes": [
            "Oud",
            "Musk",
            "Pineapple",
            "Rose"
        ],
        "baseNotes": [
            "Bergamot",
            "Lavender",
            "Pineapple",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated musky and fresh elements."
    },
    {
        "name": "Collection 116",
        "brand": "Mancera",
        "year": 2003,
        "accords": [
            "Musky",
            "Aromatic",
            "Powdery"
        ],
        "topNotes": [
            "Vetiver",
            "Jasmine",
            "Cinnamon",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Oud",
            "Vetiver",
            "Musk",
            "Rose"
        ],
        "baseNotes": [
            "Oud",
            "Incense",
            "Cedar",
            "Iris"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 117",
        "brand": "Givenchy",
        "year": 2020,
        "accords": [
            "Leather",
            "Citrus",
            "Woody",
            "Aromatic",
            "Powdery"
        ],
        "topNotes": [
            "Lemon",
            "Lavender",
            "Incense",
            "Cinnamon"
        ],
        "middleNotes": [
            "Lemon",
            "Vanilla",
            "Cinnamon",
            "Bergamot"
        ],
        "baseNotes": [
            "Rose",
            "Pineapple",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated leather and citrus elements."
    },
    {
        "name": "Collection 118",
        "brand": "Parfums de Marly",
        "year": 1995,
        "accords": [
            "Spicy",
            "Fresh",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Pineapple",
            "Vanilla",
            "Pepper"
        ],
        "middleNotes": [
            "Pepper",
            "Saffron",
            "Tonka Bean",
            "Lavender"
        ],
        "baseNotes": [
            "Lemon",
            "Leather",
            "Lavender",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated spicy and fresh elements."
    },
    {
        "name": "Collection 119",
        "brand": "Penhaligon's",
        "year": 2008,
        "accords": [
            "Fresh",
            "Amber",
            "Woody",
            "Citrus",
            "Aromatic"
        ],
        "topNotes": [
            "Sandalwood",
            "Vanilla",
            "Leather",
            "Patchouli"
        ],
        "middleNotes": [
            "Lavender",
            "Pepper",
            "Orange"
        ],
        "baseNotes": [
            "Musk",
            "Oakmoss",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated fresh and amber elements."
    },
    {
        "name": "Collection 120",
        "brand": "Prada",
        "year": 2018,
        "accords": [
            "Oud",
            "Musky",
            "Woody"
        ],
        "topNotes": [
            "Patchouli",
            "Lemon",
            "Iris"
        ],
        "middleNotes": [
            "Lemon",
            "Cardamom",
            "Iris"
        ],
        "baseNotes": [
            "Oakmoss",
            "Bergamot",
            "Sandalwood",
            "Iris"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated oud and musky elements."
    },
    {
        "name": "Collection 121",
        "brand": "Mancera",
        "year": 2012,
        "accords": [
            "Amber",
            "Powdery",
            "Woody",
            "Aromatic"
        ],
        "topNotes": [
            "Lavender",
            "Incense",
            "Patchouli"
        ],
        "middleNotes": [
            "Vetiver",
            "Amber",
            "Bergamot",
            "Leather"
        ],
        "baseNotes": [
            "Patchouli",
            "Oakmoss",
            "Musk",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated amber and powdery elements."
    },
    {
        "name": "Collection 122",
        "brand": "Givenchy",
        "year": 1991,
        "accords": [
            "Floral",
            "Musky",
            "Fresh"
        ],
        "topNotes": [
            "Bergamot",
            "Iris",
            "Orange"
        ],
        "middleNotes": [
            "Amber",
            "Oakmoss",
            "Cinnamon",
            "Patchouli"
        ],
        "baseNotes": [
            "Lemon",
            "Iris",
            "Pepper",
            "Rose"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated floral and musky elements."
    },
    {
        "name": "Collection 123",
        "brand": "Nishane",
        "year": 2013,
        "accords": [
            "Leather",
            "Amber",
            "Aromatic",
            "Woody"
        ],
        "topNotes": [
            "Leather",
            "Sandalwood",
            "Patchouli",
            "Pineapple"
        ],
        "middleNotes": [
            "Cinnamon",
            "Sandalwood",
            "Vetiver",
            "Oud"
        ],
        "baseNotes": [
            "Rose",
            "Incense",
            "Amber"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated leather and amber elements."
    },
    {
        "name": "Collection 124",
        "brand": "Chanel",
        "year": 1993,
        "accords": [
            "Fresh",
            "Sweet",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Rose",
            "Sandalwood",
            "Tonka Bean",
            "Saffron"
        ],
        "middleNotes": [
            "Leather",
            "Jasmine",
            "Rose"
        ],
        "baseNotes": [
            "Saffron",
            "Oakmoss",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated fresh and sweet elements."
    },
    {
        "name": "Collection 125",
        "brand": "Diptyque",
        "year": 1993,
        "accords": [
            "Amber",
            "Powdery",
            "Fresh",
            "Sweet"
        ],
        "topNotes": [
            "Pepper",
            "Oakmoss",
            "Cardamom",
            "Apple"
        ],
        "middleNotes": [
            "Vetiver",
            "Pepper",
            "Cardamom"
        ],
        "baseNotes": [
            "Lavender",
            "Cinnamon",
            "Incense"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated amber and powdery elements."
    },
    {
        "name": "Collection 126",
        "brand": "Penhaligon's",
        "year": 2022,
        "accords": [
            "Powdery",
            "Musky",
            "Amber"
        ],
        "topNotes": [
            "Musk",
            "Orange",
            "Cinnamon"
        ],
        "middleNotes": [
            "Musk",
            "Bergamot",
            "Patchouli",
            "Lemon"
        ],
        "baseNotes": [
            "Sandalwood",
            "Vanilla",
            "Pineapple",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated powdery and musky elements."
    },
    {
        "name": "Collection 127",
        "brand": "Armani",
        "year": 1990,
        "accords": [
            "Spicy",
            "Citrus",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Bergamot",
            "Cardamom",
            "Incense",
            "Vanilla"
        ],
        "middleNotes": [
            "Musk",
            "Vetiver",
            "Leather"
        ],
        "baseNotes": [
            "Musk",
            "Incense",
            "Amber"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated spicy and citrus elements."
    },
    {
        "name": "Collection 128",
        "brand": "Initio",
        "year": 2022,
        "accords": [
            "Powdery",
            "Leather",
            "Spicy",
            "Sweet",
            "Musky"
        ],
        "topNotes": [
            "Amber",
            "Bergamot",
            "Oakmoss",
            "Pineapple"
        ],
        "middleNotes": [
            "Orange",
            "Saffron",
            "Cinnamon",
            "Lavender"
        ],
        "baseNotes": [
            "Bergamot",
            "Incense",
            "Oud"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated powdery and leather elements."
    },
    {
        "name": "Collection 129",
        "brand": "Mancera",
        "year": 2008,
        "accords": [
            "Woody",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Rose",
            "Lemon",
            "Sandalwood"
        ],
        "middleNotes": [
            "Musk",
            "Amber",
            "Oud",
            "Leather"
        ],
        "baseNotes": [
            "Saffron",
            "Incense",
            "Orange",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 130",
        "brand": "Amouage",
        "year": 2025,
        "accords": [
            "Fresh",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Incense",
            "Oud",
            "Vanilla",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Leather",
            "Jasmine",
            "Orange",
            "Oakmoss"
        ],
        "baseNotes": [
            "Amber",
            "Apple",
            "Jasmine",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated fresh and oud elements."
    },
    {
        "name": "Collection 131",
        "brand": "Dior",
        "year": 1995,
        "accords": [
            "Fresh",
            "Leather",
            "Musky"
        ],
        "topNotes": [
            "Jasmine",
            "Apple",
            "Saffron"
        ],
        "middleNotes": [
            "Oud",
            "Cardamom",
            "Musk",
            "Apple"
        ],
        "baseNotes": [
            "Vetiver",
            "Tonka Bean",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 132",
        "brand": "Nishane",
        "year": 2006,
        "accords": [
            "Musky",
            "Leather",
            "Spicy",
            "Sweet"
        ],
        "topNotes": [
            "Orange",
            "Apple",
            "Cinnamon"
        ],
        "middleNotes": [
            "Amber",
            "Cinnamon",
            "Rose",
            "Incense"
        ],
        "baseNotes": [
            "Saffron",
            "Patchouli",
            "Iris"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated musky and leather elements."
    },
    {
        "name": "Collection 133",
        "brand": "Maison Francis Kurkdjian",
        "year": 2006,
        "accords": [
            "Amber",
            "Citrus",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Tonka Bean",
            "Apple",
            "Orange",
            "Iris"
        ],
        "middleNotes": [
            "Cardamom",
            "Pineapple",
            "Sandalwood"
        ],
        "baseNotes": [
            "Orange",
            "Cinnamon",
            "Leather",
            "Iris"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated amber and citrus elements."
    },
    {
        "name": "Collection 134",
        "brand": "Penhaligon's",
        "year": 1996,
        "accords": [
            "Oud",
            "Sweet",
            "Musky",
            "Amber"
        ],
        "topNotes": [
            "Bergamot",
            "Rose",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Pepper",
            "Pineapple",
            "Vetiver",
            "Oud"
        ],
        "baseNotes": [
            "Bergamot",
            "Cardamom",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 135",
        "brand": "Penhaligon's",
        "year": 2020,
        "accords": [
            "Musky",
            "Citrus",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Cinnamon",
            "Incense",
            "Jasmine",
            "Bergamot"
        ],
        "middleNotes": [
            "Pineapple",
            "Lemon",
            "Orange"
        ],
        "baseNotes": [
            "Vetiver",
            "Oakmoss",
            "Apple"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated musky and citrus elements."
    },
    {
        "name": "Collection 136",
        "brand": "Armani",
        "year": 1992,
        "accords": [
            "Oud",
            "Sweet",
            "Powdery",
            "Leather"
        ],
        "topNotes": [
            "Cedar",
            "Vetiver",
            "Patchouli",
            "Lavender"
        ],
        "middleNotes": [
            "Saffron",
            "Oakmoss",
            "Sandalwood"
        ],
        "baseNotes": [
            "Amber",
            "Sandalwood",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 137",
        "brand": "Givenchy",
        "year": 2013,
        "accords": [
            "Powdery",
            "Fresh",
            "Amber"
        ],
        "topNotes": [
            "Iris",
            "Tonka Bean",
            "Cardamom",
            "Orange"
        ],
        "middleNotes": [
            "Jasmine",
            "Orange",
            "Saffron"
        ],
        "baseNotes": [
            "Lavender",
            "Amber",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 138",
        "brand": "Maison Francis Kurkdjian",
        "year": 1995,
        "accords": [
            "Powdery",
            "Woody",
            "Spicy",
            "Leather",
            "Sweet"
        ],
        "topNotes": [
            "Iris",
            "Tonka Bean",
            "Saffron"
        ],
        "middleNotes": [
            "Vetiver",
            "Saffron",
            "Orange",
            "Iris"
        ],
        "baseNotes": [
            "Bergamot",
            "Jasmine",
            "Leather"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 139",
        "brand": "Chanel",
        "year": 1994,
        "accords": [
            "Amber",
            "Spicy",
            "Sweet"
        ],
        "topNotes": [
            "Tonka Bean",
            "Saffron",
            "Iris"
        ],
        "middleNotes": [
            "Cardamom",
            "Oud",
            "Jasmine",
            "Patchouli"
        ],
        "baseNotes": [
            "Pepper",
            "Leather",
            "Cardamom",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated amber and spicy elements."
    },
    {
        "name": "Collection 140",
        "brand": "Amouage",
        "year": 2014,
        "accords": [
            "Leather",
            "Floral",
            "Oud",
            "Amber",
            "Spicy"
        ],
        "topNotes": [
            "Jasmine",
            "Oakmoss",
            "Leather"
        ],
        "middleNotes": [
            "Bergamot",
            "Incense",
            "Apple"
        ],
        "baseNotes": [
            "Oakmoss",
            "Cardamom",
            "Cedar",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated leather and floral elements."
    },
    {
        "name": "Collection 141",
        "brand": "Montale",
        "year": 2009,
        "accords": [
            "Powdery",
            "Woody",
            "Sweet"
        ],
        "topNotes": [
            "Vetiver",
            "Incense",
            "Oud"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Cinnamon",
            "Lemon"
        ],
        "baseNotes": [
            "Pineapple",
            "Oud",
            "Orange"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 142",
        "brand": "Dior",
        "year": 2023,
        "accords": [
            "Fresh",
            "Aromatic",
            "Woody"
        ],
        "topNotes": [
            "Incense",
            "Apple",
            "Orange"
        ],
        "middleNotes": [
            "Oud",
            "Cardamom",
            "Vanilla",
            "Leather"
        ],
        "baseNotes": [
            "Oakmoss",
            "Apple",
            "Oud"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 143",
        "brand": "Roja Parfums",
        "year": 2013,
        "accords": [
            "Sweet",
            "Fresh",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Orange",
            "Sandalwood",
            "Apple"
        ],
        "middleNotes": [
            "Jasmine",
            "Pineapple",
            "Lemon"
        ],
        "baseNotes": [
            "Pepper",
            "Apple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated sweet and fresh elements."
    },
    {
        "name": "Collection 144",
        "brand": "Jo Malone London",
        "year": 2006,
        "accords": [
            "Powdery",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Pepper",
            "Cinnamon"
        ],
        "middleNotes": [
            "Cardamom",
            "Pepper",
            "Bergamot",
            "Amber"
        ],
        "baseNotes": [
            "Leather",
            "Pepper",
            "Incense",
            "Rose"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 145",
        "brand": "Hermès",
        "year": 2023,
        "accords": [
            "Woody",
            "Fresh",
            "Leather",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Rose",
            "Leather",
            "Musk"
        ],
        "middleNotes": [
            "Jasmine",
            "Pineapple",
            "Cardamom"
        ],
        "baseNotes": [
            "Oud",
            "Musk",
            "Rose",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated woody and fresh elements."
    },
    {
        "name": "Collection 146",
        "brand": "Roja Parfums",
        "year": 1999,
        "accords": [
            "Musky",
            "Leather",
            "Floral"
        ],
        "topNotes": [
            "Tonka Bean",
            "Rose",
            "Cinnamon",
            "Lemon"
        ],
        "middleNotes": [
            "Pineapple",
            "Rose",
            "Apple",
            "Cinnamon"
        ],
        "baseNotes": [
            "Sandalwood",
            "Bergamot",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated musky and leather elements."
    },
    {
        "name": "Collection 147",
        "brand": "Xerjoff",
        "year": 2014,
        "accords": [
            "Spicy",
            "Sweet",
            "Citrus"
        ],
        "topNotes": [
            "Iris",
            "Leather",
            "Apple"
        ],
        "middleNotes": [
            "Leather",
            "Bergamot",
            "Iris"
        ],
        "baseNotes": [
            "Bergamot",
            "Oud",
            "Orange"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 148",
        "brand": "Montale",
        "year": 2025,
        "accords": [
            "Leather",
            "Fresh",
            "Aromatic",
            "Powdery",
            "Woody"
        ],
        "topNotes": [
            "Iris",
            "Sandalwood",
            "Oud",
            "Musk"
        ],
        "middleNotes": [
            "Saffron",
            "Amber",
            "Rose"
        ],
        "baseNotes": [
            "Saffron",
            "Lavender",
            "Pineapple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 149",
        "brand": "Louis Vuitton",
        "year": 1991,
        "accords": [
            "Fresh",
            "Aromatic",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Sandalwood",
            "Orange",
            "Vanilla",
            "Bergamot"
        ],
        "middleNotes": [
            "Oakmoss",
            "Pepper",
            "Vetiver"
        ],
        "baseNotes": [
            "Patchouli",
            "Pepper",
            "Cedar",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 150",
        "brand": "Chanel",
        "year": 1990,
        "accords": [
            "Sweet",
            "Powdery",
            "Leather",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Musk",
            "Patchouli",
            "Cardamom",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Amber",
            "Pepper",
            "Cardamom"
        ],
        "baseNotes": [
            "Oud",
            "Jasmine",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 151",
        "brand": "Gucci",
        "year": 2015,
        "accords": [
            "Floral",
            "Leather",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Jasmine",
            "Oakmoss"
        ],
        "middleNotes": [
            "Amber",
            "Bergamot",
            "Jasmine",
            "Sandalwood"
        ],
        "baseNotes": [
            "Sandalwood",
            "Pepper",
            "Musk",
            "Oud"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated floral and leather elements."
    },
    {
        "name": "Collection 152",
        "brand": "Le Labo",
        "year": 2023,
        "accords": [
            "Citrus",
            "Musky",
            "Woody"
        ],
        "topNotes": [
            "Lemon",
            "Pineapple",
            "Pepper",
            "Cardamom"
        ],
        "middleNotes": [
            "Vetiver",
            "Cinnamon",
            "Vanilla"
        ],
        "baseNotes": [
            "Oakmoss",
            "Oud",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 153",
        "brand": "Jo Malone London",
        "year": 2006,
        "accords": [
            "Oud",
            "Spicy",
            "Leather",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Pepper",
            "Cedar",
            "Lemon",
            "Sandalwood"
        ],
        "middleNotes": [
            "Cardamom",
            "Cinnamon",
            "Orange",
            "Rose"
        ],
        "baseNotes": [
            "Leather",
            "Rose",
            "Orange"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 154",
        "brand": "Le Labo",
        "year": 1991,
        "accords": [
            "Sweet",
            "Leather",
            "Oud",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Leather",
            "Saffron"
        ],
        "middleNotes": [
            "Cinnamon",
            "Apple",
            "Sandalwood"
        ],
        "baseNotes": [
            "Leather",
            "Pepper",
            "Patchouli",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated sweet and leather elements."
    },
    {
        "name": "Collection 155",
        "brand": "Dior",
        "year": 2010,
        "accords": [
            "Floral",
            "Sweet",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Lemon",
            "Cardamom",
            "Cinnamon"
        ],
        "middleNotes": [
            "Leather",
            "Apple",
            "Tonka Bean",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pineapple",
            "Iris",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 156",
        "brand": "Initio",
        "year": 2010,
        "accords": [
            "Fresh",
            "Leather",
            "Citrus",
            "Powdery"
        ],
        "topNotes": [
            "Jasmine",
            "Cinnamon",
            "Sandalwood"
        ],
        "middleNotes": [
            "Saffron",
            "Patchouli",
            "Oakmoss"
        ],
        "baseNotes": [
            "Apple",
            "Pineapple",
            "Pepper",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 157",
        "brand": "Amouage",
        "year": 2023,
        "accords": [
            "Amber",
            "Leather",
            "Aromatic",
            "Woody",
            "Spicy"
        ],
        "topNotes": [
            "Iris",
            "Sandalwood",
            "Musk",
            "Pineapple"
        ],
        "middleNotes": [
            "Apple",
            "Oakmoss",
            "Bergamot"
        ],
        "baseNotes": [
            "Lavender",
            "Incense",
            "Cinnamon",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated amber and leather elements."
    },
    {
        "name": "Collection 158",
        "brand": "Initio",
        "year": 1992,
        "accords": [
            "Leather",
            "Floral",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Orange",
            "Sandalwood",
            "Leather",
            "Bergamot"
        ],
        "middleNotes": [
            "Pineapple",
            "Musk",
            "Cedar"
        ],
        "baseNotes": [
            "Oakmoss",
            "Cardamom",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated leather and floral elements."
    },
    {
        "name": "Collection 159",
        "brand": "Roja Parfums",
        "year": 2013,
        "accords": [
            "Citrus",
            "Sweet",
            "Aromatic"
        ],
        "topNotes": [
            "Pepper",
            "Orange",
            "Patchouli",
            "Rose"
        ],
        "middleNotes": [
            "Sandalwood",
            "Cardamom",
            "Orange",
            "Musk"
        ],
        "baseNotes": [
            "Orange",
            "Apple",
            "Oud"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated citrus and sweet elements."
    },
    {
        "name": "Collection 160",
        "brand": "Hermès",
        "year": 2020,
        "accords": [
            "Amber",
            "Sweet",
            "Leather",
            "Woody",
            "Aromatic"
        ],
        "topNotes": [
            "Oakmoss",
            "Bergamot",
            "Amber",
            "Cedar"
        ],
        "middleNotes": [
            "Vanilla",
            "Lemon",
            "Oakmoss",
            "Saffron"
        ],
        "baseNotes": [
            "Pepper",
            "Bergamot",
            "Leather",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated amber and sweet elements."
    },
    {
        "name": "Collection 161",
        "brand": "Chanel",
        "year": 2002,
        "accords": [
            "Woody",
            "Spicy",
            "Leather"
        ],
        "topNotes": [
            "Apple",
            "Leather",
            "Cinnamon",
            "Lemon"
        ],
        "middleNotes": [
            "Cinnamon",
            "Pepper",
            "Tonka Bean",
            "Musk"
        ],
        "baseNotes": [
            "Iris",
            "Rose",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated woody and spicy elements."
    },
    {
        "name": "Collection 162",
        "brand": "Roja Parfums",
        "year": 1998,
        "accords": [
            "Amber",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Pineapple",
            "Pepper",
            "Amber"
        ],
        "middleNotes": [
            "Cardamom",
            "Iris",
            "Leather"
        ],
        "baseNotes": [
            "Jasmine",
            "Saffron",
            "Apple"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated amber and floral elements."
    },
    {
        "name": "Collection 163",
        "brand": "Roja Parfums",
        "year": 2010,
        "accords": [
            "Amber",
            "Leather",
            "Oud",
            "Powdery"
        ],
        "topNotes": [
            "Amber",
            "Musk",
            "Cedar",
            "Leather"
        ],
        "middleNotes": [
            "Pineapple",
            "Vetiver",
            "Patchouli"
        ],
        "baseNotes": [
            "Cardamom",
            "Cinnamon",
            "Jasmine",
            "Incense"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated amber and leather elements."
    },
    {
        "name": "Collection 164",
        "brand": "Roja Parfums",
        "year": 2000,
        "accords": [
            "Citrus",
            "Leather",
            "Musky",
            "Powdery"
        ],
        "topNotes": [
            "Tonka Bean",
            "Sandalwood",
            "Amber"
        ],
        "middleNotes": [
            "Oakmoss",
            "Leather",
            "Bergamot",
            "Incense"
        ],
        "baseNotes": [
            "Bergamot",
            "Iris",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 165",
        "brand": "Guerlain",
        "year": 1996,
        "accords": [
            "Amber",
            "Spicy",
            "Fresh",
            "Woody",
            "Citrus"
        ],
        "topNotes": [
            "Bergamot",
            "Apple",
            "Oud"
        ],
        "middleNotes": [
            "Sandalwood",
            "Cinnamon",
            "Oud"
        ],
        "baseNotes": [
            "Incense",
            "Saffron",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated amber and spicy elements."
    },
    {
        "name": "Collection 166",
        "brand": "Le Labo",
        "year": 2019,
        "accords": [
            "Musky",
            "Powdery",
            "Woody",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Orange",
            "Incense",
            "Lavender",
            "Cinnamon"
        ],
        "middleNotes": [
            "Incense",
            "Amber",
            "Vanilla",
            "Oakmoss"
        ],
        "baseNotes": [
            "Orange",
            "Iris",
            "Bergamot",
            "Incense"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated musky and powdery elements."
    },
    {
        "name": "Collection 167",
        "brand": "Guerlain",
        "year": 1994,
        "accords": [
            "Leather",
            "Fresh",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Vetiver",
            "Lavender",
            "Iris",
            "Vanilla"
        ],
        "middleNotes": [
            "Cedar",
            "Oakmoss",
            "Iris"
        ],
        "baseNotes": [
            "Saffron",
            "Bergamot",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 168",
        "brand": "Montale",
        "year": 2020,
        "accords": [
            "Sweet",
            "Oud",
            "Amber",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Lemon",
            "Incense",
            "Amber",
            "Cinnamon"
        ],
        "middleNotes": [
            "Jasmine",
            "Cinnamon",
            "Lemon",
            "Vanilla"
        ],
        "baseNotes": [
            "Amber",
            "Lemon",
            "Sandalwood",
            "Musk"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 169",
        "brand": "Hermès",
        "year": 2017,
        "accords": [
            "Powdery",
            "Fresh",
            "Spicy",
            "Woody",
            "Aromatic"
        ],
        "topNotes": [
            "Oakmoss",
            "Orange",
            "Rose"
        ],
        "middleNotes": [
            "Oakmoss",
            "Incense",
            "Pineapple",
            "Pepper"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Incense",
            "Iris"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 170",
        "brand": "Diptyque",
        "year": 2008,
        "accords": [
            "Powdery",
            "Fresh",
            "Amber",
            "Woody"
        ],
        "topNotes": [
            "Iris",
            "Tonka Bean",
            "Lemon"
        ],
        "middleNotes": [
            "Lavender",
            "Iris",
            "Incense",
            "Patchouli"
        ],
        "baseNotes": [
            "Musk",
            "Cardamom",
            "Apple",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 171",
        "brand": "Montale",
        "year": 2020,
        "accords": [
            "Oud",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Oud",
            "Cinnamon",
            "Cedar"
        ],
        "middleNotes": [
            "Jasmine",
            "Oud",
            "Vetiver"
        ],
        "baseNotes": [
            "Amber",
            "Rose",
            "Sandalwood",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated oud and powdery elements."
    },
    {
        "name": "Collection 172",
        "brand": "Diptyque",
        "year": 2014,
        "accords": [
            "Amber",
            "Spicy",
            "Fresh",
            "Powdery"
        ],
        "topNotes": [
            "Cardamom",
            "Incense",
            "Cinnamon",
            "Apple"
        ],
        "middleNotes": [
            "Pepper",
            "Cardamom",
            "Patchouli",
            "Lavender"
        ],
        "baseNotes": [
            "Bergamot",
            "Cinnamon",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated amber and spicy elements."
    },
    {
        "name": "Collection 173",
        "brand": "Maison Francis Kurkdjian",
        "year": 1995,
        "accords": [
            "Aromatic",
            "Oud",
            "Sweet",
            "Musky",
            "Citrus"
        ],
        "topNotes": [
            "Patchouli",
            "Pineapple",
            "Cinnamon",
            "Orange"
        ],
        "middleNotes": [
            "Cardamom",
            "Musk",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Apple",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "Collection 174",
        "brand": "Louis Vuitton",
        "year": 2010,
        "accords": [
            "Musky",
            "Amber",
            "Leather",
            "Spicy",
            "Woody"
        ],
        "topNotes": [
            "Pepper",
            "Iris",
            "Apple",
            "Oakmoss"
        ],
        "middleNotes": [
            "Cardamom",
            "Pepper",
            "Pineapple",
            "Musk"
        ],
        "baseNotes": [
            "Musk",
            "Pepper",
            "Oud"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated musky and amber elements."
    },
    {
        "name": "Collection 175",
        "brand": "Hermès",
        "year": 2020,
        "accords": [
            "Oud",
            "Sweet",
            "Leather",
            "Floral"
        ],
        "topNotes": [
            "Musk",
            "Amber",
            "Lavender"
        ],
        "middleNotes": [
            "Apple",
            "Oakmoss",
            "Lavender",
            "Orange"
        ],
        "baseNotes": [
            "Lavender",
            "Apple",
            "Iris"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 176",
        "brand": "Initio",
        "year": 2003,
        "accords": [
            "Citrus",
            "Aromatic",
            "Powdery",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Musk",
            "Saffron",
            "Leather"
        ],
        "middleNotes": [
            "Pineapple",
            "Lavender",
            "Oakmoss",
            "Cardamom"
        ],
        "baseNotes": [
            "Pepper",
            "Sandalwood",
            "Apple"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and aromatic elements."
    },
    {
        "name": "Collection 177",
        "brand": "Kilian Paris",
        "year": 1990,
        "accords": [
            "Leather",
            "Oud",
            "Sweet",
            "Aromatic"
        ],
        "topNotes": [
            "Pepper",
            "Sandalwood",
            "Oud",
            "Vanilla"
        ],
        "middleNotes": [
            "Rose",
            "Bergamot",
            "Cinnamon",
            "Jasmine"
        ],
        "baseNotes": [
            "Apple",
            "Vanilla",
            "Lemon",
            "Rose"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated leather and oud elements."
    },
    {
        "name": "Collection 178",
        "brand": "Byredo",
        "year": 1998,
        "accords": [
            "Floral",
            "Sweet",
            "Powdery",
            "Woody",
            "Oud"
        ],
        "topNotes": [
            "Oakmoss",
            "Incense",
            "Pineapple"
        ],
        "middleNotes": [
            "Oakmoss",
            "Incense",
            "Sandalwood",
            "Vanilla"
        ],
        "baseNotes": [
            "Incense",
            "Vetiver",
            "Apple"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 179",
        "brand": "Nishane",
        "year": 1992,
        "accords": [
            "Amber",
            "Musky",
            "Floral",
            "Woody"
        ],
        "topNotes": [
            "Vetiver",
            "Cinnamon",
            "Rose"
        ],
        "middleNotes": [
            "Orange",
            "Lemon",
            "Iris"
        ],
        "baseNotes": [
            "Oud",
            "Cardamom",
            "Iris"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated amber and musky elements."
    },
    {
        "name": "Collection 180",
        "brand": "Mancera",
        "year": 2010,
        "accords": [
            "Woody",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Lemon",
            "Pineapple",
            "Jasmine",
            "Incense"
        ],
        "middleNotes": [
            "Orange",
            "Cedar",
            "Amber"
        ],
        "baseNotes": [
            "Musk",
            "Orange",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 181",
        "brand": "Hermès",
        "year": 2019,
        "accords": [
            "Powdery",
            "Musky",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Incense",
            "Bergamot",
            "Leather",
            "Apple"
        ],
        "middleNotes": [
            "Amber",
            "Cardamom",
            "Apple"
        ],
        "baseNotes": [
            "Rose",
            "Iris",
            "Amber"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated powdery and musky elements."
    },
    {
        "name": "Collection 182",
        "brand": "Guerlain",
        "year": 1990,
        "accords": [
            "Fresh",
            "Citrus",
            "Powdery",
            "Woody"
        ],
        "topNotes": [
            "Musk",
            "Patchouli",
            "Saffron"
        ],
        "middleNotes": [
            "Jasmine",
            "Pepper",
            "Vetiver"
        ],
        "baseNotes": [
            "Bergamot",
            "Vetiver",
            "Orange"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated fresh and citrus elements."
    },
    {
        "name": "Collection 183",
        "brand": "Tom Ford",
        "year": 1994,
        "accords": [
            "Amber",
            "Woody",
            "Leather",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Cinnamon",
            "Leather",
            "Cardamom"
        ],
        "middleNotes": [
            "Leather",
            "Apple",
            "Musk"
        ],
        "baseNotes": [
            "Amber",
            "Patchouli",
            "Oud"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated amber and woody elements."
    },
    {
        "name": "Collection 184",
        "brand": "Le Labo",
        "year": 1992,
        "accords": [
            "Sweet",
            "Aromatic",
            "Leather",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Leather",
            "Bergamot",
            "Iris"
        ],
        "middleNotes": [
            "Rose",
            "Iris",
            "Sandalwood",
            "Oud"
        ],
        "baseNotes": [
            "Saffron",
            "Orange",
            "Leather",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated sweet and aromatic elements."
    },
    {
        "name": "Collection 185",
        "brand": "Xerjoff",
        "year": 2023,
        "accords": [
            "Powdery",
            "Fresh",
            "Sweet"
        ],
        "topNotes": [
            "Orange",
            "Pineapple",
            "Jasmine",
            "Oakmoss"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Iris",
            "Cinnamon"
        ],
        "baseNotes": [
            "Iris",
            "Cinnamon",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 186",
        "brand": "Roja Parfums",
        "year": 2006,
        "accords": [
            "Floral",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Lemon",
            "Oud",
            "Musk"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pineapple",
            "Cinnamon"
        ],
        "baseNotes": [
            "Iris",
            "Lemon",
            "Musk",
            "Oud"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated floral and aromatic elements."
    },
    {
        "name": "Collection 187",
        "brand": "Maison Margiela",
        "year": 2000,
        "accords": [
            "Spicy",
            "Sweet",
            "Woody",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Amber",
            "Oud",
            "Sandalwood"
        ],
        "middleNotes": [
            "Oakmoss",
            "Amber",
            "Iris"
        ],
        "baseNotes": [
            "Iris",
            "Tonka Bean",
            "Incense",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 188",
        "brand": "Givenchy",
        "year": 2003,
        "accords": [
            "Musky",
            "Oud",
            "Leather",
            "Woody"
        ],
        "topNotes": [
            "Vanilla",
            "Bergamot",
            "Incense",
            "Pineapple"
        ],
        "middleNotes": [
            "Jasmine",
            "Amber",
            "Patchouli"
        ],
        "baseNotes": [
            "Patchouli",
            "Lavender",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated musky and oud elements."
    },
    {
        "name": "Collection 189",
        "brand": "Hermès",
        "year": 2026,
        "accords": [
            "Leather",
            "Powdery",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Orange",
            "Amber",
            "Cardamom",
            "Musk"
        ],
        "middleNotes": [
            "Vetiver",
            "Pepper",
            "Oakmoss"
        ],
        "baseNotes": [
            "Lavender",
            "Saffron",
            "Musk",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Collection 190",
        "brand": "Creed",
        "year": 2005,
        "accords": [
            "Powdery",
            "Sweet",
            "Floral",
            "Amber",
            "Citrus"
        ],
        "topNotes": [
            "Saffron",
            "Jasmine",
            "Cardamom"
        ],
        "middleNotes": [
            "Cardamom",
            "Oud",
            "Pineapple",
            "Pepper"
        ],
        "baseNotes": [
            "Amber",
            "Pepper",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 191",
        "brand": "Bvlgari",
        "year": 2005,
        "accords": [
            "Woody",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Bergamot",
            "Lavender",
            "Leather"
        ],
        "middleNotes": [
            "Bergamot",
            "Iris",
            "Vanilla"
        ],
        "baseNotes": [
            "Orange",
            "Patchouli",
            "Rose"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 192",
        "brand": "Roja Parfums",
        "year": 2011,
        "accords": [
            "Floral",
            "Powdery",
            "Musky",
            "Aromatic"
        ],
        "topNotes": [
            "Incense",
            "Pineapple",
            "Oud"
        ],
        "middleNotes": [
            "Iris",
            "Rose",
            "Cinnamon"
        ],
        "baseNotes": [
            "Saffron",
            "Vetiver",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated floral and powdery elements."
    },
    {
        "name": "Collection 193",
        "brand": "Viktor&Rolf",
        "year": 2026,
        "accords": [
            "Woody",
            "Citrus",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Apple",
            "Jasmine"
        ],
        "middleNotes": [
            "Oakmoss",
            "Incense",
            "Cardamom"
        ],
        "baseNotes": [
            "Oud",
            "Rose",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 194",
        "brand": "Frederic Malle",
        "year": 2006,
        "accords": [
            "Oud",
            "Aromatic",
            "Powdery",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Saffron",
            "Incense",
            "Pineapple"
        ],
        "middleNotes": [
            "Cardamom",
            "Sandalwood",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Vetiver",
            "Musk",
            "Oud"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated oud and aromatic elements."
    },
    {
        "name": "Collection 195",
        "brand": "Diptyque",
        "year": 2010,
        "accords": [
            "Citrus",
            "Aromatic",
            "Powdery",
            "Spicy",
            "Amber"
        ],
        "topNotes": [
            "Oud",
            "Apple",
            "Sandalwood",
            "Leather"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Vetiver",
            "Oud",
            "Musk"
        ],
        "baseNotes": [
            "Incense",
            "Cinnamon",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated citrus and aromatic elements."
    },
    {
        "name": "Collection 196",
        "brand": "Gucci",
        "year": 1993,
        "accords": [
            "Woody",
            "Spicy",
            "Floral",
            "Citrus"
        ],
        "topNotes": [
            "Apple",
            "Sandalwood",
            "Cinnamon"
        ],
        "middleNotes": [
            "Lemon",
            "Oud",
            "Oakmoss"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Orange",
            "Iris",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated woody and spicy elements."
    },
    {
        "name": "Collection 197",
        "brand": "Chanel",
        "year": 2004,
        "accords": [
            "Musky",
            "Aromatic",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Patchouli",
            "Pepper",
            "Iris",
            "Sandalwood"
        ],
        "middleNotes": [
            "Amber",
            "Pepper",
            "Cardamom"
        ],
        "baseNotes": [
            "Rose",
            "Sandalwood",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 198",
        "brand": "Bvlgari",
        "year": 2020,
        "accords": [
            "Floral",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Vetiver",
            "Leather",
            "Vanilla"
        ],
        "middleNotes": [
            "Incense",
            "Orange",
            "Lavender",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pineapple",
            "Patchouli",
            "Cardamom",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated floral and citrus elements."
    },
    {
        "name": "Collection 199",
        "brand": "Armani",
        "year": 2022,
        "accords": [
            "Musky",
            "Oud",
            "Woody",
            "Citrus",
            "Sweet"
        ],
        "topNotes": [
            "Cinnamon",
            "Lemon",
            "Vanilla",
            "Apple"
        ],
        "middleNotes": [
            "Orange",
            "Apple",
            "Musk",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pineapple",
            "Jasmine",
            "Orange"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated musky and oud elements."
    },
    {
        "name": "Collection 200",
        "brand": "Hermès",
        "year": 1998,
        "accords": [
            "Spicy",
            "Sweet",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Oud",
            "Sandalwood",
            "Cedar"
        ],
        "middleNotes": [
            "Incense",
            "Orange",
            "Bergamot"
        ],
        "baseNotes": [
            "Sandalwood",
            "Lemon",
            "Leather"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 201",
        "brand": "Guerlain",
        "year": 2008,
        "accords": [
            "Oud",
            "Woody",
            "Amber",
            "Leather"
        ],
        "topNotes": [
            "Pepper",
            "Amber",
            "Incense"
        ],
        "middleNotes": [
            "Jasmine",
            "Lemon",
            "Iris"
        ],
        "baseNotes": [
            "Patchouli",
            "Bergamot",
            "Pepper",
            "Apple"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 202",
        "brand": "Amouage",
        "year": 1993,
        "accords": [
            "Musky",
            "Powdery",
            "Sweet",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Incense",
            "Tonka Bean",
            "Musk"
        ],
        "middleNotes": [
            "Oakmoss",
            "Patchouli",
            "Lemon",
            "Orange"
        ],
        "baseNotes": [
            "Saffron",
            "Apple",
            "Incense"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated musky and powdery elements."
    },
    {
        "name": "Collection 203",
        "brand": "Mancera",
        "year": 2013,
        "accords": [
            "Amber",
            "Sweet",
            "Oud",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Tonka Bean",
            "Lemon",
            "Bergamot",
            "Apple"
        ],
        "middleNotes": [
            "Bergamot",
            "Cardamom",
            "Vetiver",
            "Pepper"
        ],
        "baseNotes": [
            "Amber",
            "Pepper",
            "Apple"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated amber and sweet elements."
    },
    {
        "name": "Collection 204",
        "brand": "Givenchy",
        "year": 1998,
        "accords": [
            "Spicy",
            "Sweet",
            "Aromatic",
            "Woody",
            "Citrus"
        ],
        "topNotes": [
            "Musk",
            "Jasmine",
            "Amber"
        ],
        "middleNotes": [
            "Pepper",
            "Pineapple",
            "Bergamot",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Oud",
            "Cinnamon",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 205",
        "brand": "Maison Margiela",
        "year": 2017,
        "accords": [
            "Citrus",
            "Amber",
            "Powdery",
            "Floral",
            "Aromatic"
        ],
        "topNotes": [
            "Jasmine",
            "Bergamot",
            "Incense",
            "Vetiver"
        ],
        "middleNotes": [
            "Pineapple",
            "Amber",
            "Iris",
            "Patchouli"
        ],
        "baseNotes": [
            "Apple",
            "Orange",
            "Sandalwood",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated citrus and amber elements."
    },
    {
        "name": "Collection 206",
        "brand": "Gucci",
        "year": 2015,
        "accords": [
            "Powdery",
            "Citrus",
            "Spicy"
        ],
        "topNotes": [
            "Jasmine",
            "Bergamot",
            "Patchouli"
        ],
        "middleNotes": [
            "Lemon",
            "Cedar",
            "Leather",
            "Lavender"
        ],
        "baseNotes": [
            "Sandalwood",
            "Leather",
            "Oud",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 207",
        "brand": "Kilian Paris",
        "year": 2012,
        "accords": [
            "Spicy",
            "Floral",
            "Woody"
        ],
        "topNotes": [
            "Cedar",
            "Cinnamon",
            "Cardamom",
            "Sandalwood"
        ],
        "middleNotes": [
            "Jasmine",
            "Apple",
            "Lemon",
            "Saffron"
        ],
        "baseNotes": [
            "Cinnamon",
            "Leather",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated spicy and floral elements."
    },
    {
        "name": "Collection 208",
        "brand": "YSL",
        "year": 1992,
        "accords": [
            "Powdery",
            "Fresh",
            "Leather",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Vanilla",
            "Iris",
            "Oakmoss",
            "Vetiver"
        ],
        "middleNotes": [
            "Pepper",
            "Oakmoss",
            "Incense"
        ],
        "baseNotes": [
            "Amber",
            "Tonka Bean",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 209",
        "brand": "Chanel",
        "year": 1999,
        "accords": [
            "Woody",
            "Aromatic",
            "Citrus"
        ],
        "topNotes": [
            "Cinnamon",
            "Lemon",
            "Bergamot",
            "Leather"
        ],
        "middleNotes": [
            "Vanilla",
            "Oud",
            "Pepper",
            "Leather"
        ],
        "baseNotes": [
            "Pineapple",
            "Apple",
            "Incense",
            "Amber"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated woody and aromatic elements."
    },
    {
        "name": "Collection 210",
        "brand": "Kilian Paris",
        "year": 2025,
        "accords": [
            "Oud",
            "Citrus",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Cinnamon",
            "Lemon",
            "Amber"
        ],
        "middleNotes": [
            "Cinnamon",
            "Vetiver",
            "Lemon",
            "Bergamot"
        ],
        "baseNotes": [
            "Amber",
            "Sandalwood",
            "Pepper",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 211",
        "brand": "Initio",
        "year": 2006,
        "accords": [
            "Fresh",
            "Musky",
            "Citrus"
        ],
        "topNotes": [
            "Pepper",
            "Pineapple",
            "Orange"
        ],
        "middleNotes": [
            "Bergamot",
            "Vetiver",
            "Oud"
        ],
        "baseNotes": [
            "Cedar",
            "Lavender",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated fresh and musky elements."
    },
    {
        "name": "Collection 212",
        "brand": "Cartier",
        "year": 2023,
        "accords": [
            "Fresh",
            "Leather",
            "Amber",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Orange",
            "Pineapple",
            "Amber"
        ],
        "middleNotes": [
            "Pepper",
            "Pineapple",
            "Leather"
        ],
        "baseNotes": [
            "Sandalwood",
            "Jasmine",
            "Lavender",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 213",
        "brand": "YSL",
        "year": 2016,
        "accords": [
            "Spicy",
            "Fresh",
            "Citrus"
        ],
        "topNotes": [
            "Sandalwood",
            "Leather",
            "Cardamom"
        ],
        "middleNotes": [
            "Saffron",
            "Incense",
            "Musk",
            "Patchouli"
        ],
        "baseNotes": [
            "Cinnamon",
            "Orange",
            "Oud",
            "Lemon"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated spicy and fresh elements."
    },
    {
        "name": "Collection 214",
        "brand": "Frederic Malle",
        "year": 1993,
        "accords": [
            "Leather",
            "Woody",
            "Floral",
            "Sweet",
            "Amber"
        ],
        "topNotes": [
            "Incense",
            "Oud",
            "Pepper"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Lemon",
            "Orange",
            "Iris"
        ],
        "baseNotes": [
            "Musk",
            "Cedar",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated leather and woody elements."
    },
    {
        "name": "Collection 215",
        "brand": "Cartier",
        "year": 2003,
        "accords": [
            "Woody",
            "Floral",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Lemon",
            "Cinnamon"
        ],
        "middleNotes": [
            "Saffron",
            "Orange",
            "Lemon"
        ],
        "baseNotes": [
            "Amber",
            "Oud",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated woody and floral elements."
    },
    {
        "name": "Collection 216",
        "brand": "Xerjoff",
        "year": 2015,
        "accords": [
            "Sweet",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Sandalwood",
            "Bergamot",
            "Rose"
        ],
        "middleNotes": [
            "Pineapple",
            "Sandalwood",
            "Bergamot"
        ],
        "baseNotes": [
            "Pepper",
            "Oakmoss",
            "Saffron",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 217",
        "brand": "Xerjoff",
        "year": 2012,
        "accords": [
            "Sweet",
            "Spicy",
            "Citrus",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Rose",
            "Cardamom",
            "Oakmoss"
        ],
        "middleNotes": [
            "Amber",
            "Incense",
            "Cardamom",
            "Lemon"
        ],
        "baseNotes": [
            "Lavender",
            "Pepper",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Collection 218",
        "brand": "Guerlain",
        "year": 1994,
        "accords": [
            "Leather",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Vanilla",
            "Saffron",
            "Iris"
        ],
        "middleNotes": [
            "Pepper",
            "Cedar",
            "Bergamot"
        ],
        "baseNotes": [
            "Oud",
            "Amber",
            "Rose",
            "Musk"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 219",
        "brand": "Hermès",
        "year": 2021,
        "accords": [
            "Leather",
            "Fresh",
            "Sweet",
            "Floral",
            "Citrus"
        ],
        "topNotes": [
            "Iris",
            "Pepper",
            "Cardamom",
            "Rose"
        ],
        "middleNotes": [
            "Oakmoss",
            "Iris",
            "Rose"
        ],
        "baseNotes": [
            "Cinnamon",
            "Leather",
            "Orange"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 220",
        "brand": "Dior",
        "year": 1998,
        "accords": [
            "Sweet",
            "Spicy",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Incense",
            "Sandalwood",
            "Orange"
        ],
        "middleNotes": [
            "Orange",
            "Vanilla",
            "Cinnamon"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Amber",
            "Oud"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Collection 221",
        "brand": "Le Labo",
        "year": 2009,
        "accords": [
            "Woody",
            "Citrus",
            "Powdery"
        ],
        "topNotes": [
            "Iris",
            "Tonka Bean",
            "Cardamom"
        ],
        "middleNotes": [
            "Pepper",
            "Cardamom",
            "Jasmine"
        ],
        "baseNotes": [
            "Cardamom",
            "Oakmoss",
            "Orange"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 222",
        "brand": "Serge Lutens",
        "year": 1994,
        "accords": [
            "Citrus",
            "Aromatic",
            "Fresh",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Apple",
            "Lemon",
            "Iris",
            "Rose"
        ],
        "middleNotes": [
            "Cinnamon",
            "Leather",
            "Orange",
            "Pineapple"
        ],
        "baseNotes": [
            "Vetiver",
            "Amber",
            "Apple"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated citrus and aromatic elements."
    },
    {
        "name": "Collection 223",
        "brand": "YSL",
        "year": 1992,
        "accords": [
            "Leather",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Cardamom",
            "Cinnamon",
            "Apple"
        ],
        "middleNotes": [
            "Rose",
            "Cinnamon",
            "Orange"
        ],
        "baseNotes": [
            "Pineapple",
            "Pepper",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated leather and oud elements."
    },
    {
        "name": "Collection 224",
        "brand": "Serge Lutens",
        "year": 2022,
        "accords": [
            "Aromatic",
            "Fresh",
            "Spicy",
            "Leather",
            "Musky"
        ],
        "topNotes": [
            "Pepper",
            "Orange",
            "Vetiver"
        ],
        "middleNotes": [
            "Patchouli",
            "Pepper",
            "Vanilla"
        ],
        "baseNotes": [
            "Cardamom",
            "Amber",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 225",
        "brand": "Kilian Paris",
        "year": 2024,
        "accords": [
            "Woody",
            "Citrus",
            "Amber",
            "Powdery"
        ],
        "topNotes": [
            "Patchouli",
            "Bergamot",
            "Lemon",
            "Vetiver"
        ],
        "middleNotes": [
            "Iris",
            "Orange",
            "Lemon",
            "Pineapple"
        ],
        "baseNotes": [
            "Musk",
            "Apple",
            "Sandalwood",
            "Orange"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 226",
        "brand": "Maison Francis Kurkdjian",
        "year": 2003,
        "accords": [
            "Citrus",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Apple",
            "Oakmoss",
            "Vanilla"
        ],
        "middleNotes": [
            "Iris",
            "Lemon",
            "Cedar",
            "Patchouli"
        ],
        "baseNotes": [
            "Musk",
            "Cardamom",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 227",
        "brand": "Louis Vuitton",
        "year": 1995,
        "accords": [
            "Woody",
            "Citrus",
            "Sweet",
            "Floral",
            "Fresh"
        ],
        "topNotes": [
            "Oakmoss",
            "Pineapple",
            "Cedar",
            "Jasmine"
        ],
        "middleNotes": [
            "Apple",
            "Vetiver",
            "Bergamot",
            "Lavender"
        ],
        "baseNotes": [
            "Lavender",
            "Apple",
            "Oud",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 228",
        "brand": "Montale",
        "year": 1999,
        "accords": [
            "Citrus",
            "Oud",
            "Sweet"
        ],
        "topNotes": [
            "Vetiver",
            "Cinnamon",
            "Lemon"
        ],
        "middleNotes": [
            "Jasmine",
            "Bergamot",
            "Patchouli"
        ],
        "baseNotes": [
            "Lavender",
            "Lemon",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated citrus and oud elements."
    },
    {
        "name": "Collection 229",
        "brand": "Cartier",
        "year": 2021,
        "accords": [
            "Powdery",
            "Sweet",
            "Fresh",
            "Spicy",
            "Aromatic"
        ],
        "topNotes": [
            "Oakmoss",
            "Vanilla",
            "Leather"
        ],
        "middleNotes": [
            "Apple",
            "Rose",
            "Pineapple"
        ],
        "baseNotes": [
            "Cinnamon",
            "Sandalwood",
            "Leather",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 230",
        "brand": "Montale",
        "year": 1998,
        "accords": [
            "Musky",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Jasmine",
            "Cinnamon",
            "Orange",
            "Amber"
        ],
        "middleNotes": [
            "Sandalwood",
            "Bergamot",
            "Cinnamon",
            "Saffron"
        ],
        "baseNotes": [
            "Cardamom",
            "Jasmine",
            "Leather",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated musky and fresh elements."
    },
    {
        "name": "Collection 231",
        "brand": "Maison Francis Kurkdjian",
        "year": 2023,
        "accords": [
            "Spicy",
            "Powdery",
            "Floral"
        ],
        "topNotes": [
            "Bergamot",
            "Jasmine",
            "Orange"
        ],
        "middleNotes": [
            "Cardamom",
            "Pepper",
            "Patchouli"
        ],
        "baseNotes": [
            "Oud",
            "Lemon",
            "Iris"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated spicy and powdery elements."
    },
    {
        "name": "Collection 232",
        "brand": "Byredo",
        "year": 1990,
        "accords": [
            "Floral",
            "Amber",
            "Oud",
            "Leather"
        ],
        "topNotes": [
            "Oakmoss",
            "Vanilla",
            "Patchouli"
        ],
        "middleNotes": [
            "Lavender",
            "Patchouli",
            "Sandalwood"
        ],
        "baseNotes": [
            "Amber",
            "Oud",
            "Incense"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated floral and amber elements."
    },
    {
        "name": "Collection 233",
        "brand": "Givenchy",
        "year": 1996,
        "accords": [
            "Floral",
            "Sweet",
            "Woody"
        ],
        "topNotes": [
            "Cardamom",
            "Iris",
            "Musk",
            "Incense"
        ],
        "middleNotes": [
            "Pineapple",
            "Vetiver",
            "Orange"
        ],
        "baseNotes": [
            "Incense",
            "Oud",
            "Lemon",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 234",
        "brand": "Hermès",
        "year": 1996,
        "accords": [
            "Woody",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Oud",
            "Amber"
        ],
        "middleNotes": [
            "Pineapple",
            "Sandalwood",
            "Patchouli",
            "Pepper"
        ],
        "baseNotes": [
            "Cedar",
            "Leather",
            "Musk",
            "Oud"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 235",
        "brand": "Gucci",
        "year": 2025,
        "accords": [
            "Woody",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Saffron",
            "Iris",
            "Vanilla",
            "Orange"
        ],
        "middleNotes": [
            "Leather",
            "Cinnamon",
            "Amber",
            "Vanilla"
        ],
        "baseNotes": [
            "Oud",
            "Saffron",
            "Jasmine",
            "Musk"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 236",
        "brand": "Louis Vuitton",
        "year": 2023,
        "accords": [
            "Aromatic",
            "Fresh",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Oud",
            "Saffron",
            "Vetiver"
        ],
        "middleNotes": [
            "Bergamot",
            "Vetiver",
            "Cardamom",
            "Patchouli"
        ],
        "baseNotes": [
            "Cardamom",
            "Iris",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 237",
        "brand": "Nishane",
        "year": 2006,
        "accords": [
            "Citrus",
            "Floral",
            "Spicy",
            "Aromatic"
        ],
        "topNotes": [
            "Cinnamon",
            "Orange",
            "Musk"
        ],
        "middleNotes": [
            "Vetiver",
            "Jasmine",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Vetiver",
            "Cedar",
            "Tonka Bean",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated citrus and floral elements."
    },
    {
        "name": "Collection 238",
        "brand": "Givenchy",
        "year": 2016,
        "accords": [
            "Powdery",
            "Amber",
            "Fresh"
        ],
        "topNotes": [
            "Amber",
            "Oud",
            "Pepper",
            "Leather"
        ],
        "middleNotes": [
            "Iris",
            "Musk",
            "Cedar"
        ],
        "baseNotes": [
            "Cedar",
            "Vanilla",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated powdery and amber elements."
    },
    {
        "name": "Collection 239",
        "brand": "Creed",
        "year": 2021,
        "accords": [
            "Oud",
            "Woody",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Pineapple",
            "Vanilla",
            "Cedar",
            "Lemon"
        ],
        "middleNotes": [
            "Amber",
            "Vetiver",
            "Lavender",
            "Patchouli"
        ],
        "baseNotes": [
            "Pepper",
            "Orange",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 240",
        "brand": "Nishane",
        "year": 2017,
        "accords": [
            "Floral",
            "Oud",
            "Woody"
        ],
        "topNotes": [
            "Patchouli",
            "Jasmine",
            "Pepper"
        ],
        "middleNotes": [
            "Vetiver",
            "Oud",
            "Amber"
        ],
        "baseNotes": [
            "Vetiver",
            "Musk",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated floral and oud elements."
    },
    {
        "name": "Collection 241",
        "brand": "Hermès",
        "year": 2005,
        "accords": [
            "Leather",
            "Floral",
            "Sweet",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Musk",
            "Vetiver",
            "Leather"
        ],
        "middleNotes": [
            "Saffron",
            "Sandalwood",
            "Pineapple"
        ],
        "baseNotes": [
            "Patchouli",
            "Lemon",
            "Sandalwood",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated leather and floral elements."
    },
    {
        "name": "Collection 242",
        "brand": "YSL",
        "year": 2024,
        "accords": [
            "Sweet",
            "Floral",
            "Amber",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Lavender",
            "Musk",
            "Incense"
        ],
        "middleNotes": [
            "Sandalwood",
            "Rose",
            "Vetiver",
            "Oud"
        ],
        "baseNotes": [
            "Patchouli",
            "Jasmine",
            "Apple",
            "Lavender"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated sweet and floral elements."
    },
    {
        "name": "Collection 243",
        "brand": "Nishane",
        "year": 2011,
        "accords": [
            "Oud",
            "Amber",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Oud",
            "Orange",
            "Jasmine",
            "Vetiver"
        ],
        "middleNotes": [
            "Oud",
            "Patchouli",
            "Pepper",
            "Orange"
        ],
        "baseNotes": [
            "Bergamot",
            "Jasmine",
            "Incense"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated oud and amber elements."
    },
    {
        "name": "Collection 244",
        "brand": "Kilian Paris",
        "year": 1996,
        "accords": [
            "Powdery",
            "Amber",
            "Fresh",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Lemon",
            "Vetiver",
            "Cinnamon"
        ],
        "middleNotes": [
            "Lemon",
            "Vetiver",
            "Vanilla"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Patchouli",
            "Sandalwood",
            "Orange"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated powdery and amber elements."
    },
    {
        "name": "Collection 245",
        "brand": "Kilian Paris",
        "year": 2016,
        "accords": [
            "Spicy",
            "Oud",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Lemon",
            "Pepper",
            "Saffron"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Iris",
            "Oakmoss",
            "Bergamot"
        ],
        "baseNotes": [
            "Oud",
            "Sandalwood",
            "Iris"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated spicy and oud elements."
    },
    {
        "name": "Collection 246",
        "brand": "Jo Malone London",
        "year": 2001,
        "accords": [
            "Oud",
            "Musky",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Incense",
            "Oud",
            "Musk",
            "Lemon"
        ],
        "middleNotes": [
            "Incense",
            "Cinnamon",
            "Jasmine",
            "Lavender"
        ],
        "baseNotes": [
            "Jasmine",
            "Apple",
            "Sandalwood",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated oud and musky elements."
    },
    {
        "name": "Collection 247",
        "brand": "Nishane",
        "year": 2015,
        "accords": [
            "Oud",
            "Spicy",
            "Powdery",
            "Woody"
        ],
        "topNotes": [
            "Incense",
            "Saffron",
            "Lavender"
        ],
        "middleNotes": [
            "Patchouli",
            "Orange",
            "Cardamom"
        ],
        "baseNotes": [
            "Jasmine",
            "Incense",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 248",
        "brand": "Mancera",
        "year": 2005,
        "accords": [
            "Powdery",
            "Woody",
            "Fresh",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Saffron",
            "Cardamom",
            "Patchouli",
            "Jasmine"
        ],
        "middleNotes": [
            "Oakmoss",
            "Apple",
            "Iris"
        ],
        "baseNotes": [
            "Cardamom",
            "Lemon",
            "Lavender",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 249",
        "brand": "Mancera",
        "year": 2017,
        "accords": [
            "Amber",
            "Powdery",
            "Floral",
            "Aromatic"
        ],
        "topNotes": [
            "Leather",
            "Saffron",
            "Bergamot",
            "Cedar"
        ],
        "middleNotes": [
            "Patchouli",
            "Leather",
            "Iris"
        ],
        "baseNotes": [
            "Vetiver",
            "Lemon",
            "Leather"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated amber and powdery elements."
    },
    {
        "name": "Collection 250",
        "brand": "Guerlain",
        "year": 2012,
        "accords": [
            "Sweet",
            "Citrus",
            "Oud",
            "Powdery",
            "Woody"
        ],
        "topNotes": [
            "Pepper",
            "Vetiver",
            "Sandalwood",
            "Lavender"
        ],
        "middleNotes": [
            "Cinnamon",
            "Sandalwood",
            "Orange"
        ],
        "baseNotes": [
            "Oakmoss",
            "Musk",
            "Apple"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 251",
        "brand": "Roja Parfums",
        "year": 2008,
        "accords": [
            "Floral",
            "Sweet",
            "Oud",
            "Spicy",
            "Fresh"
        ],
        "topNotes": [
            "Oud",
            "Saffron",
            "Lavender"
        ],
        "middleNotes": [
            "Rose",
            "Vetiver",
            "Vanilla",
            "Iris"
        ],
        "baseNotes": [
            "Amber",
            "Rose",
            "Vetiver",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 252",
        "brand": "Hermès",
        "year": 2001,
        "accords": [
            "Leather",
            "Musky",
            "Aromatic",
            "Powdery"
        ],
        "topNotes": [
            "Oud",
            "Leather",
            "Oakmoss",
            "Apple"
        ],
        "middleNotes": [
            "Apple",
            "Cinnamon",
            "Cardamom"
        ],
        "baseNotes": [
            "Orange",
            "Incense",
            "Pepper",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated leather and musky elements."
    },
    {
        "name": "Collection 253",
        "brand": "Frederic Malle",
        "year": 2006,
        "accords": [
            "Citrus",
            "Woody",
            "Floral",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Cardamom",
            "Oakmoss",
            "Cinnamon"
        ],
        "middleNotes": [
            "Incense",
            "Saffron",
            "Leather"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Oud",
            "Amber",
            "Rose"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 254",
        "brand": "Gucci",
        "year": 2004,
        "accords": [
            "Citrus",
            "Amber",
            "Woody",
            "Leather"
        ],
        "topNotes": [
            "Amber",
            "Orange",
            "Oud"
        ],
        "middleNotes": [
            "Jasmine",
            "Oud",
            "Patchouli",
            "Saffron"
        ],
        "baseNotes": [
            "Leather",
            "Jasmine",
            "Cinnamon",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated citrus and amber elements."
    },
    {
        "name": "Collection 255",
        "brand": "Frederic Malle",
        "year": 1990,
        "accords": [
            "Woody",
            "Spicy",
            "Powdery",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Incense",
            "Saffron",
            "Orange"
        ],
        "middleNotes": [
            "Pepper",
            "Vetiver",
            "Leather"
        ],
        "baseNotes": [
            "Sandalwood",
            "Musk",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated woody and spicy elements."
    },
    {
        "name": "Collection 256",
        "brand": "Montale",
        "year": 1994,
        "accords": [
            "Spicy",
            "Oud",
            "Fresh",
            "Leather"
        ],
        "topNotes": [
            "Lemon",
            "Apple",
            "Sandalwood",
            "Oud"
        ],
        "middleNotes": [
            "Pineapple",
            "Cardamom",
            "Vetiver",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Bergamot",
            "Cardamom",
            "Orange",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated spicy and oud elements."
    },
    {
        "name": "Collection 257",
        "brand": "Tom Ford",
        "year": 2005,
        "accords": [
            "Aromatic",
            "Floral",
            "Powdery",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Cinnamon",
            "Cardamom",
            "Bergamot"
        ],
        "middleNotes": [
            "Amber",
            "Iris",
            "Leather",
            "Oakmoss"
        ],
        "baseNotes": [
            "Oud",
            "Jasmine",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated aromatic and floral elements."
    },
    {
        "name": "Collection 258",
        "brand": "Louis Vuitton",
        "year": 2026,
        "accords": [
            "Spicy",
            "Floral",
            "Sweet"
        ],
        "topNotes": [
            "Bergamot",
            "Cinnamon",
            "Oud",
            "Pepper"
        ],
        "middleNotes": [
            "Cinnamon",
            "Amber",
            "Apple",
            "Lavender"
        ],
        "baseNotes": [
            "Incense",
            "Cedar",
            "Leather"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated spicy and floral elements."
    },
    {
        "name": "Collection 259",
        "brand": "Serge Lutens",
        "year": 2013,
        "accords": [
            "Amber",
            "Aromatic",
            "Woody"
        ],
        "topNotes": [
            "Incense",
            "Bergamot",
            "Oud"
        ],
        "middleNotes": [
            "Musk",
            "Iris",
            "Lavender"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Jasmine",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated amber and aromatic elements."
    },
    {
        "name": "Collection 260",
        "brand": "Gucci",
        "year": 1998,
        "accords": [
            "Powdery",
            "Fresh",
            "Oud"
        ],
        "topNotes": [
            "Amber",
            "Lemon",
            "Apple",
            "Cardamom"
        ],
        "middleNotes": [
            "Cinnamon",
            "Iris",
            "Lavender"
        ],
        "baseNotes": [
            "Saffron",
            "Tonka Bean",
            "Cinnamon",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 261",
        "brand": "Le Labo",
        "year": 2023,
        "accords": [
            "Aromatic",
            "Musky",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Oakmoss",
            "Iris",
            "Pepper",
            "Saffron"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Pineapple",
            "Rose",
            "Lavender"
        ],
        "baseNotes": [
            "Bergamot",
            "Orange",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated aromatic and musky elements."
    },
    {
        "name": "Collection 262",
        "brand": "Dior",
        "year": 2024,
        "accords": [
            "Aromatic",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Vetiver",
            "Pineapple",
            "Orange",
            "Iris"
        ],
        "middleNotes": [
            "Jasmine",
            "Pepper",
            "Pineapple",
            "Orange"
        ],
        "baseNotes": [
            "Oud",
            "Patchouli",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "Collection 263",
        "brand": "Givenchy",
        "year": 1990,
        "accords": [
            "Woody",
            "Citrus",
            "Aromatic",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Saffron",
            "Cardamom",
            "Oud"
        ],
        "middleNotes": [
            "Orange",
            "Vanilla",
            "Tonka Bean",
            "Cinnamon"
        ],
        "baseNotes": [
            "Oud",
            "Leather",
            "Sandalwood",
            "Musk"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 264",
        "brand": "Armani",
        "year": 2022,
        "accords": [
            "Leather",
            "Powdery",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Oud",
            "Lavender",
            "Lemon"
        ],
        "middleNotes": [
            "Bergamot",
            "Orange",
            "Iris",
            "Leather"
        ],
        "baseNotes": [
            "Rose",
            "Oakmoss",
            "Orange",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Collection 265",
        "brand": "Prada",
        "year": 1991,
        "accords": [
            "Fresh",
            "Leather",
            "Powdery",
            "Aromatic",
            "Amber"
        ],
        "topNotes": [
            "Cedar",
            "Cinnamon",
            "Incense"
        ],
        "middleNotes": [
            "Apple",
            "Pineapple",
            "Oakmoss"
        ],
        "baseNotes": [
            "Jasmine",
            "Sandalwood",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 266",
        "brand": "Gucci",
        "year": 2021,
        "accords": [
            "Woody",
            "Sweet",
            "Aromatic",
            "Citrus"
        ],
        "topNotes": [
            "Rose",
            "Amber",
            "Apple",
            "Patchouli"
        ],
        "middleNotes": [
            "Apple",
            "Cinnamon",
            "Iris",
            "Rose"
        ],
        "baseNotes": [
            "Amber",
            "Pineapple",
            "Rose",
            "Apple"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated woody and sweet elements."
    },
    {
        "name": "Collection 267",
        "brand": "Nishane",
        "year": 1994,
        "accords": [
            "Citrus",
            "Musky",
            "Floral",
            "Amber",
            "Oud"
        ],
        "topNotes": [
            "Pepper",
            "Musk",
            "Cardamom",
            "Sandalwood"
        ],
        "middleNotes": [
            "Orange",
            "Saffron",
            "Cinnamon",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Jasmine",
            "Pepper",
            "Rose"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 268",
        "brand": "Frederic Malle",
        "year": 2010,
        "accords": [
            "Aromatic",
            "Citrus",
            "Leather",
            "Sweet",
            "Woody"
        ],
        "topNotes": [
            "Lemon",
            "Bergamot",
            "Lavender"
        ],
        "middleNotes": [
            "Patchouli",
            "Bergamot",
            "Cardamom",
            "Musk"
        ],
        "baseNotes": [
            "Oud",
            "Vanilla",
            "Incense",
            "Amber"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 269",
        "brand": "Xerjoff",
        "year": 2003,
        "accords": [
            "Leather",
            "Fresh",
            "Spicy",
            "Oud"
        ],
        "topNotes": [
            "Apple",
            "Jasmine",
            "Cardamom"
        ],
        "middleNotes": [
            "Pepper",
            "Rose",
            "Orange"
        ],
        "baseNotes": [
            "Iris",
            "Bergamot",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 270",
        "brand": "Serge Lutens",
        "year": 2005,
        "accords": [
            "Leather",
            "Musky",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Cinnamon",
            "Iris",
            "Patchouli"
        ],
        "middleNotes": [
            "Lemon",
            "Patchouli",
            "Incense",
            "Oud"
        ],
        "baseNotes": [
            "Musk",
            "Vetiver",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated leather and musky elements."
    },
    {
        "name": "Collection 271",
        "brand": "Prada",
        "year": 2026,
        "accords": [
            "Woody",
            "Citrus",
            "Floral",
            "Amber",
            "Oud"
        ],
        "topNotes": [
            "Apple",
            "Vetiver",
            "Sandalwood"
        ],
        "middleNotes": [
            "Musk",
            "Incense",
            "Rose",
            "Sandalwood"
        ],
        "baseNotes": [
            "Cinnamon",
            "Jasmine",
            "Leather"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 272",
        "brand": "Amouage",
        "year": 2018,
        "accords": [
            "Powdery",
            "Musky",
            "Sweet",
            "Fresh",
            "Oud"
        ],
        "topNotes": [
            "Pepper",
            "Amber",
            "Saffron"
        ],
        "middleNotes": [
            "Jasmine",
            "Lavender",
            "Lemon",
            "Vetiver"
        ],
        "baseNotes": [
            "Cinnamon",
            "Amber",
            "Lavender",
            "Oud"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated powdery and musky elements."
    },
    {
        "name": "Collection 273",
        "brand": "Xerjoff",
        "year": 2019,
        "accords": [
            "Musky",
            "Oud",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Rose",
            "Musk",
            "Cardamom",
            "Orange"
        ],
        "middleNotes": [
            "Apple",
            "Lemon",
            "Jasmine",
            "Iris"
        ],
        "baseNotes": [
            "Oakmoss",
            "Iris",
            "Musk"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated musky and oud elements."
    },
    {
        "name": "Collection 274",
        "brand": "Tom Ford",
        "year": 2018,
        "accords": [
            "Sweet",
            "Powdery",
            "Amber"
        ],
        "topNotes": [
            "Oud",
            "Oakmoss",
            "Apple",
            "Vanilla"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Lemon",
            "Oud"
        ],
        "baseNotes": [
            "Apple",
            "Oakmoss",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 275",
        "brand": "Dior",
        "year": 1996,
        "accords": [
            "Oud",
            "Sweet",
            "Citrus",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Lavender",
            "Incense",
            "Vanilla"
        ],
        "middleNotes": [
            "Pineapple",
            "Leather",
            "Cardamom",
            "Musk"
        ],
        "baseNotes": [
            "Orange",
            "Jasmine",
            "Amber",
            "Apple"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 276",
        "brand": "Xerjoff",
        "year": 2015,
        "accords": [
            "Powdery",
            "Sweet",
            "Oud",
            "Amber",
            "Musky"
        ],
        "topNotes": [
            "Oakmoss",
            "Incense",
            "Pineapple",
            "Saffron"
        ],
        "middleNotes": [
            "Saffron",
            "Rose",
            "Musk",
            "Orange"
        ],
        "baseNotes": [
            "Cardamom",
            "Amber",
            "Musk"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated powdery and sweet elements."
    },
    {
        "name": "Collection 277",
        "brand": "Maison Francis Kurkdjian",
        "year": 2025,
        "accords": [
            "Citrus",
            "Fresh",
            "Powdery",
            "Woody",
            "Musky"
        ],
        "topNotes": [
            "Pepper",
            "Lemon",
            "Orange",
            "Pineapple"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pineapple",
            "Patchouli",
            "Iris"
        ],
        "baseNotes": [
            "Iris",
            "Pepper",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated citrus and fresh elements."
    },
    {
        "name": "Collection 278",
        "brand": "Kilian Paris",
        "year": 2018,
        "accords": [
            "Citrus",
            "Leather",
            "Sweet",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Amber",
            "Orange",
            "Incense",
            "Lemon"
        ],
        "middleNotes": [
            "Lemon",
            "Oakmoss",
            "Oud"
        ],
        "baseNotes": [
            "Incense",
            "Saffron",
            "Apple"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 279",
        "brand": "Parfums de Marly",
        "year": 1993,
        "accords": [
            "Woody",
            "Powdery",
            "Leather",
            "Amber",
            "Sweet"
        ],
        "topNotes": [
            "Oud",
            "Oakmoss",
            "Cedar",
            "Vetiver"
        ],
        "middleNotes": [
            "Rose",
            "Vanilla",
            "Vetiver"
        ],
        "baseNotes": [
            "Pineapple",
            "Oud",
            "Cardamom",
            "Iris"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 280",
        "brand": "Roja Parfums",
        "year": 2001,
        "accords": [
            "Woody",
            "Sweet",
            "Powdery",
            "Leather"
        ],
        "topNotes": [
            "Rose",
            "Orange",
            "Iris"
        ],
        "middleNotes": [
            "Musk",
            "Orange",
            "Cardamom",
            "Jasmine"
        ],
        "baseNotes": [
            "Lemon",
            "Amber",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated woody and sweet elements."
    },
    {
        "name": "Collection 281",
        "brand": "Tom Ford",
        "year": 2003,
        "accords": [
            "Sweet",
            "Spicy",
            "Oud",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Vetiver",
            "Pepper",
            "Lavender"
        ],
        "middleNotes": [
            "Musk",
            "Vanilla",
            "Bergamot"
        ],
        "baseNotes": [
            "Orange",
            "Amber",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Collection 282",
        "brand": "Amouage",
        "year": 2016,
        "accords": [
            "Powdery",
            "Aromatic",
            "Floral",
            "Oud"
        ],
        "topNotes": [
            "Pepper",
            "Oakmoss",
            "Sandalwood",
            "Cedar"
        ],
        "middleNotes": [
            "Vetiver",
            "Oakmoss",
            "Vanilla",
            "Amber"
        ],
        "baseNotes": [
            "Sandalwood",
            "Orange",
            "Cardamom",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Collection 283",
        "brand": "Creed",
        "year": 2001,
        "accords": [
            "Floral",
            "Spicy",
            "Aromatic",
            "Musky",
            "Amber"
        ],
        "topNotes": [
            "Leather",
            "Apple",
            "Patchouli",
            "Oakmoss"
        ],
        "middleNotes": [
            "Bergamot",
            "Saffron",
            "Amber"
        ],
        "baseNotes": [
            "Jasmine",
            "Vetiver",
            "Orange"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated floral and spicy elements."
    },
    {
        "name": "Collection 284",
        "brand": "YSL",
        "year": 2025,
        "accords": [
            "Leather",
            "Fresh",
            "Sweet"
        ],
        "topNotes": [
            "Sandalwood",
            "Apple",
            "Pineapple",
            "Leather"
        ],
        "middleNotes": [
            "Jasmine",
            "Vetiver",
            "Orange"
        ],
        "baseNotes": [
            "Incense",
            "Vetiver",
            "Lavender",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 285",
        "brand": "Kilian Paris",
        "year": 2002,
        "accords": [
            "Spicy",
            "Aromatic",
            "Powdery",
            "Fresh"
        ],
        "topNotes": [
            "Bergamot",
            "Tonka Bean",
            "Cardamom"
        ],
        "middleNotes": [
            "Sandalwood",
            "Iris",
            "Vanilla"
        ],
        "baseNotes": [
            "Pineapple",
            "Sandalwood",
            "Cardamom",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated spicy and aromatic elements."
    },
    {
        "name": "Collection 286",
        "brand": "Maison Francis Kurkdjian",
        "year": 2019,
        "accords": [
            "Woody",
            "Citrus",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Cinnamon",
            "Cardamom",
            "Musk"
        ],
        "middleNotes": [
            "Jasmine",
            "Oud",
            "Patchouli"
        ],
        "baseNotes": [
            "Saffron",
            "Cinnamon",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 287",
        "brand": "YSL",
        "year": 2018,
        "accords": [
            "Woody",
            "Powdery",
            "Leather",
            "Musky",
            "Spicy"
        ],
        "topNotes": [
            "Apple",
            "Incense",
            "Bergamot"
        ],
        "middleNotes": [
            "Lemon",
            "Iris",
            "Lavender",
            "Oakmoss"
        ],
        "baseNotes": [
            "Vetiver",
            "Saffron",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 288",
        "brand": "Byredo",
        "year": 2001,
        "accords": [
            "Musky",
            "Leather",
            "Spicy"
        ],
        "topNotes": [
            "Rose",
            "Iris",
            "Tonka Bean",
            "Cinnamon"
        ],
        "middleNotes": [
            "Pepper",
            "Vetiver",
            "Saffron",
            "Cardamom"
        ],
        "baseNotes": [
            "Cinnamon",
            "Leather",
            "Musk"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated musky and leather elements."
    },
    {
        "name": "Collection 289",
        "brand": "Serge Lutens",
        "year": 2021,
        "accords": [
            "Sweet",
            "Oud",
            "Spicy",
            "Citrus"
        ],
        "topNotes": [
            "Cinnamon",
            "Tonka Bean",
            "Incense",
            "Lemon"
        ],
        "middleNotes": [
            "Oud",
            "Sandalwood",
            "Patchouli",
            "Saffron"
        ],
        "baseNotes": [
            "Vanilla",
            "Vetiver",
            "Iris"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 290",
        "brand": "Chanel",
        "year": 2009,
        "accords": [
            "Floral",
            "Amber",
            "Citrus",
            "Fresh"
        ],
        "topNotes": [
            "Cinnamon",
            "Vetiver",
            "Oud"
        ],
        "middleNotes": [
            "Amber",
            "Oud",
            "Cardamom",
            "Incense"
        ],
        "baseNotes": [
            "Oud",
            "Vanilla",
            "Saffron",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated floral and amber elements."
    },
    {
        "name": "Collection 291",
        "brand": "Tom Ford",
        "year": 2026,
        "accords": [
            "Spicy",
            "Oud",
            "Amber"
        ],
        "topNotes": [
            "Oakmoss",
            "Cinnamon",
            "Orange",
            "Saffron"
        ],
        "middleNotes": [
            "Pepper",
            "Jasmine",
            "Bergamot"
        ],
        "baseNotes": [
            "Oakmoss",
            "Amber",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated spicy and oud elements."
    },
    {
        "name": "Collection 292",
        "brand": "Gucci",
        "year": 1995,
        "accords": [
            "Fresh",
            "Musky",
            "Citrus",
            "Sweet",
            "Amber"
        ],
        "topNotes": [
            "Musk",
            "Incense",
            "Iris",
            "Oakmoss"
        ],
        "middleNotes": [
            "Oakmoss",
            "Incense",
            "Saffron"
        ],
        "baseNotes": [
            "Cinnamon",
            "Cedar",
            "Orange"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated fresh and musky elements."
    },
    {
        "name": "Collection 293",
        "brand": "Xerjoff",
        "year": 2012,
        "accords": [
            "Oud",
            "Citrus",
            "Floral"
        ],
        "topNotes": [
            "Cinnamon",
            "Jasmine",
            "Cedar"
        ],
        "middleNotes": [
            "Oakmoss",
            "Rose",
            "Saffron",
            "Musk"
        ],
        "baseNotes": [
            "Iris",
            "Pepper",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 294",
        "brand": "Maison Francis Kurkdjian",
        "year": 2011,
        "accords": [
            "Oud",
            "Fresh",
            "Aromatic",
            "Powdery"
        ],
        "topNotes": [
            "Jasmine",
            "Cinnamon",
            "Tonka Bean",
            "Cedar"
        ],
        "middleNotes": [
            "Apple",
            "Iris",
            "Incense",
            "Vanilla"
        ],
        "baseNotes": [
            "Orange",
            "Jasmine",
            "Oud"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated oud and fresh elements."
    },
    {
        "name": "Collection 295",
        "brand": "Guerlain",
        "year": 2003,
        "accords": [
            "Aromatic",
            "Oud",
            "Amber"
        ],
        "topNotes": [
            "Lavender",
            "Cinnamon",
            "Patchouli"
        ],
        "middleNotes": [
            "Iris",
            "Lavender",
            "Rose",
            "Patchouli"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Sandalwood",
            "Cardamom",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated aromatic and oud elements."
    },
    {
        "name": "Collection 296",
        "brand": "Penhaligon's",
        "year": 2001,
        "accords": [
            "Fresh",
            "Powdery",
            "Oud",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Saffron",
            "Apple",
            "Tonka Bean",
            "Bergamot"
        ],
        "middleNotes": [
            "Lemon",
            "Oud",
            "Saffron",
            "Bergamot"
        ],
        "baseNotes": [
            "Vanilla",
            "Patchouli",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated fresh and powdery elements."
    },
    {
        "name": "Collection 297",
        "brand": "Frederic Malle",
        "year": 2022,
        "accords": [
            "Spicy",
            "Woody",
            "Oud"
        ],
        "topNotes": [
            "Rose",
            "Pepper",
            "Lavender"
        ],
        "middleNotes": [
            "Iris",
            "Lemon",
            "Leather",
            "Pineapple"
        ],
        "baseNotes": [
            "Bergamot",
            "Saffron",
            "Leather",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated spicy and woody elements."
    },
    {
        "name": "Collection 298",
        "brand": "Frederic Malle",
        "year": 2011,
        "accords": [
            "Powdery",
            "Woody",
            "Citrus",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Lemon",
            "Saffron",
            "Oakmoss",
            "Vetiver"
        ],
        "middleNotes": [
            "Bergamot",
            "Lemon",
            "Patchouli",
            "Lavender"
        ],
        "baseNotes": [
            "Patchouli",
            "Orange",
            "Oakmoss",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 299",
        "brand": "Diptyque",
        "year": 2014,
        "accords": [
            "Aromatic",
            "Citrus",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Leather",
            "Lavender",
            "Jasmine"
        ],
        "middleNotes": [
            "Cinnamon",
            "Leather",
            "Musk"
        ],
        "baseNotes": [
            "Leather",
            "Saffron",
            "Pepper",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 300",
        "brand": "Parfums de Marly",
        "year": 2001,
        "accords": [
            "Powdery",
            "Fresh",
            "Leather",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Bergamot",
            "Vanilla",
            "Iris"
        ],
        "middleNotes": [
            "Sandalwood",
            "Lavender",
            "Iris",
            "Patchouli"
        ],
        "baseNotes": [
            "Jasmine",
            "Amber",
            "Rose"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 301",
        "brand": "Louis Vuitton",
        "year": 2015,
        "accords": [
            "Aromatic",
            "Fresh",
            "Leather",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Pepper",
            "Iris",
            "Apple"
        ],
        "middleNotes": [
            "Jasmine",
            "Orange",
            "Musk"
        ],
        "baseNotes": [
            "Incense",
            "Lemon",
            "Pepper",
            "Rose"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 302",
        "brand": "Serge Lutens",
        "year": 2016,
        "accords": [
            "Oud",
            "Woody",
            "Floral",
            "Fresh"
        ],
        "topNotes": [
            "Orange",
            "Lemon",
            "Amber",
            "Oud"
        ],
        "middleNotes": [
            "Patchouli",
            "Leather",
            "Cinnamon",
            "Incense"
        ],
        "baseNotes": [
            "Pepper",
            "Incense",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 303",
        "brand": "YSL",
        "year": 2017,
        "accords": [
            "Oud",
            "Floral",
            "Spicy",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Cardamom",
            "Orange",
            "Lavender"
        ],
        "middleNotes": [
            "Sandalwood",
            "Tonka Bean",
            "Lavender"
        ],
        "baseNotes": [
            "Cardamom",
            "Oakmoss",
            "Incense"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated oud and floral elements."
    },
    {
        "name": "Collection 304",
        "brand": "Armani",
        "year": 2008,
        "accords": [
            "Citrus",
            "Woody",
            "Musky",
            "Sweet",
            "Fresh"
        ],
        "topNotes": [
            "Pineapple",
            "Amber",
            "Sandalwood"
        ],
        "middleNotes": [
            "Rose",
            "Vetiver",
            "Vanilla"
        ],
        "baseNotes": [
            "Saffron",
            "Cardamom",
            "Bergamot",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 305",
        "brand": "Jo Malone London",
        "year": 1998,
        "accords": [
            "Sweet",
            "Citrus",
            "Floral",
            "Fresh"
        ],
        "topNotes": [
            "Bergamot",
            "Pineapple",
            "Orange",
            "Leather"
        ],
        "middleNotes": [
            "Pepper",
            "Cardamom",
            "Musk",
            "Apple"
        ],
        "baseNotes": [
            "Oakmoss",
            "Pepper",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 306",
        "brand": "Serge Lutens",
        "year": 2011,
        "accords": [
            "Musky",
            "Citrus",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Pineapple",
            "Oud",
            "Sandalwood"
        ],
        "middleNotes": [
            "Cinnamon",
            "Rose",
            "Lemon"
        ],
        "baseNotes": [
            "Vetiver",
            "Jasmine",
            "Rose"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated musky and citrus elements."
    },
    {
        "name": "Collection 307",
        "brand": "Guerlain",
        "year": 2024,
        "accords": [
            "Spicy",
            "Aromatic",
            "Floral",
            "Musky",
            "Fresh"
        ],
        "topNotes": [
            "Saffron",
            "Pineapple",
            "Vanilla"
        ],
        "middleNotes": [
            "Lemon",
            "Sandalwood",
            "Amber"
        ],
        "baseNotes": [
            "Apple",
            "Jasmine",
            "Saffron",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated spicy and aromatic elements."
    },
    {
        "name": "Collection 308",
        "brand": "Viktor&Rolf",
        "year": 1990,
        "accords": [
            "Spicy",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Musk",
            "Bergamot",
            "Iris"
        ],
        "middleNotes": [
            "Saffron",
            "Sandalwood",
            "Pepper",
            "Cinnamon"
        ],
        "baseNotes": [
            "Apple",
            "Sandalwood",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated spicy and musky elements."
    },
    {
        "name": "Collection 309",
        "brand": "Initio",
        "year": 2021,
        "accords": [
            "Leather",
            "Oud",
            "Spicy"
        ],
        "topNotes": [
            "Sandalwood",
            "Oakmoss",
            "Lemon",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Cinnamon",
            "Iris",
            "Saffron"
        ],
        "baseNotes": [
            "Lemon",
            "Oakmoss",
            "Iris"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated leather and oud elements."
    },
    {
        "name": "Collection 310",
        "brand": "Maison Francis Kurkdjian",
        "year": 2008,
        "accords": [
            "Spicy",
            "Powdery",
            "Citrus"
        ],
        "topNotes": [
            "Cinnamon",
            "Musk",
            "Sandalwood"
        ],
        "middleNotes": [
            "Pepper",
            "Bergamot",
            "Saffron",
            "Oakmoss"
        ],
        "baseNotes": [
            "Incense",
            "Iris",
            "Amber",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated spicy and powdery elements."
    },
    {
        "name": "Collection 311",
        "brand": "Maison Margiela",
        "year": 1994,
        "accords": [
            "Leather",
            "Sweet",
            "Citrus",
            "Aromatic"
        ],
        "topNotes": [
            "Rose",
            "Cardamom",
            "Oud",
            "Oakmoss"
        ],
        "middleNotes": [
            "Sandalwood",
            "Iris",
            "Vanilla"
        ],
        "baseNotes": [
            "Pineapple",
            "Sandalwood",
            "Apple",
            "Musk"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated leather and sweet elements."
    },
    {
        "name": "Collection 312",
        "brand": "Initio",
        "year": 2007,
        "accords": [
            "Floral",
            "Sweet",
            "Oud",
            "Citrus"
        ],
        "topNotes": [
            "Amber",
            "Musk",
            "Oakmoss",
            "Sandalwood"
        ],
        "middleNotes": [
            "Pineapple",
            "Bergamot",
            "Tonka Bean",
            "Lemon"
        ],
        "baseNotes": [
            "Saffron",
            "Incense",
            "Tonka Bean",
            "Leather"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 313",
        "brand": "Xerjoff",
        "year": 2004,
        "accords": [
            "Spicy",
            "Aromatic",
            "Leather",
            "Musky"
        ],
        "topNotes": [
            "Patchouli",
            "Rose",
            "Bergamot",
            "Saffron"
        ],
        "middleNotes": [
            "Sandalwood",
            "Lemon",
            "Amber",
            "Oud"
        ],
        "baseNotes": [
            "Leather",
            "Lavender",
            "Cinnamon",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated spicy and aromatic elements."
    },
    {
        "name": "Collection 314",
        "brand": "Chanel",
        "year": 2018,
        "accords": [
            "Leather",
            "Woody",
            "Spicy",
            "Floral",
            "Powdery"
        ],
        "topNotes": [
            "Iris",
            "Pineapple",
            "Cardamom"
        ],
        "middleNotes": [
            "Lemon",
            "Sandalwood",
            "Cedar"
        ],
        "baseNotes": [
            "Lemon",
            "Oud",
            "Leather"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated leather and woody elements."
    },
    {
        "name": "Collection 315",
        "brand": "Bvlgari",
        "year": 2009,
        "accords": [
            "Aromatic",
            "Citrus",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Saffron",
            "Amber",
            "Musk",
            "Cardamom"
        ],
        "middleNotes": [
            "Bergamot",
            "Musk",
            "Lavender"
        ],
        "baseNotes": [
            "Sandalwood",
            "Oud",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 316",
        "brand": "Xerjoff",
        "year": 2014,
        "accords": [
            "Citrus",
            "Fresh",
            "Aromatic",
            "Amber",
            "Musky"
        ],
        "topNotes": [
            "Lemon",
            "Oud",
            "Cedar",
            "Amber"
        ],
        "middleNotes": [
            "Vetiver",
            "Amber",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Cardamom",
            "Tonka Bean",
            "Musk",
            "Orange"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated citrus and fresh elements."
    },
    {
        "name": "Collection 317",
        "brand": "Dior",
        "year": 2007,
        "accords": [
            "Aromatic",
            "Woody",
            "Spicy",
            "Citrus",
            "Oud"
        ],
        "topNotes": [
            "Saffron",
            "Pepper",
            "Apple"
        ],
        "middleNotes": [
            "Cinnamon",
            "Cardamom",
            "Lemon",
            "Iris"
        ],
        "baseNotes": [
            "Oud",
            "Cedar",
            "Sandalwood",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "Collection 318",
        "brand": "Maison Francis Kurkdjian",
        "year": 2025,
        "accords": [
            "Floral",
            "Spicy",
            "Powdery",
            "Leather",
            "Sweet"
        ],
        "topNotes": [
            "Lavender",
            "Incense",
            "Pineapple",
            "Leather"
        ],
        "middleNotes": [
            "Pineapple",
            "Apple",
            "Cedar"
        ],
        "baseNotes": [
            "Vanilla",
            "Sandalwood",
            "Patchouli",
            "Oud"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated floral and spicy elements."
    },
    {
        "name": "Collection 319",
        "brand": "Maison Margiela",
        "year": 2006,
        "accords": [
            "Aromatic",
            "Woody",
            "Fresh"
        ],
        "topNotes": [
            "Pepper",
            "Bergamot",
            "Lemon",
            "Rose"
        ],
        "middleNotes": [
            "Cinnamon",
            "Saffron",
            "Leather",
            "Incense"
        ],
        "baseNotes": [
            "Oakmoss",
            "Bergamot",
            "Leather"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "Collection 320",
        "brand": "Viktor&Rolf",
        "year": 2024,
        "accords": [
            "Sweet",
            "Amber",
            "Oud",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Sandalwood",
            "Tonka Bean",
            "Bergamot"
        ],
        "middleNotes": [
            "Orange",
            "Incense",
            "Oud"
        ],
        "baseNotes": [
            "Iris",
            "Saffron",
            "Leather"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated sweet and amber elements."
    },
    {
        "name": "Collection 321",
        "brand": "Nishane",
        "year": 2002,
        "accords": [
            "Oud",
            "Spicy",
            "Floral",
            "Citrus"
        ],
        "topNotes": [
            "Apple",
            "Leather",
            "Saffron"
        ],
        "middleNotes": [
            "Lemon",
            "Cardamom",
            "Cedar"
        ],
        "baseNotes": [
            "Jasmine",
            "Patchouli",
            "Oakmoss",
            "Rose"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 322",
        "brand": "Hermès",
        "year": 1997,
        "accords": [
            "Oud",
            "Woody",
            "Floral",
            "Leather"
        ],
        "topNotes": [
            "Tonka Bean",
            "Lemon",
            "Oud"
        ],
        "middleNotes": [
            "Lemon",
            "Cardamom",
            "Musk",
            "Cinnamon"
        ],
        "baseNotes": [
            "Pineapple",
            "Oud",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 323",
        "brand": "Byredo",
        "year": 1998,
        "accords": [
            "Fresh",
            "Musky",
            "Floral",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Orange",
            "Cardamom",
            "Patchouli"
        ],
        "middleNotes": [
            "Lavender",
            "Orange",
            "Jasmine",
            "Leather"
        ],
        "baseNotes": [
            "Leather",
            "Saffron",
            "Iris"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated fresh and musky elements."
    },
    {
        "name": "Collection 324",
        "brand": "Creed",
        "year": 2004,
        "accords": [
            "Oud",
            "Citrus",
            "Woody",
            "Musky",
            "Sweet"
        ],
        "topNotes": [
            "Oud",
            "Saffron",
            "Tonka Bean",
            "Vetiver"
        ],
        "middleNotes": [
            "Leather",
            "Orange",
            "Pepper"
        ],
        "baseNotes": [
            "Jasmine",
            "Leather",
            "Sandalwood",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 325",
        "brand": "Bvlgari",
        "year": 1994,
        "accords": [
            "Woody",
            "Aromatic",
            "Sweet",
            "Amber",
            "Oud"
        ],
        "topNotes": [
            "Saffron",
            "Vanilla",
            "Lavender"
        ],
        "middleNotes": [
            "Musk",
            "Rose",
            "Incense"
        ],
        "baseNotes": [
            "Cedar",
            "Cinnamon",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated woody and aromatic elements."
    },
    {
        "name": "Collection 326",
        "brand": "Nishane",
        "year": 2007,
        "accords": [
            "Musky",
            "Floral",
            "Aromatic",
            "Oud",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Pineapple",
            "Cardamom"
        ],
        "middleNotes": [
            "Leather",
            "Oud",
            "Amber",
            "Orange"
        ],
        "baseNotes": [
            "Vetiver",
            "Pepper",
            "Musk",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated musky and floral elements."
    },
    {
        "name": "Collection 327",
        "brand": "Diptyque",
        "year": 1996,
        "accords": [
            "Leather",
            "Fresh",
            "Citrus",
            "Aromatic"
        ],
        "topNotes": [
            "Saffron",
            "Jasmine",
            "Rose"
        ],
        "middleNotes": [
            "Cardamom",
            "Lemon",
            "Patchouli"
        ],
        "baseNotes": [
            "Apple",
            "Lemon",
            "Cedar",
            "Rose"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated leather and fresh elements."
    },
    {
        "name": "Collection 328",
        "brand": "Byredo",
        "year": 1992,
        "accords": [
            "Aromatic",
            "Spicy",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Amber",
            "Incense",
            "Cinnamon",
            "Jasmine"
        ],
        "middleNotes": [
            "Jasmine",
            "Bergamot",
            "Cardamom",
            "Amber"
        ],
        "baseNotes": [
            "Pineapple",
            "Musk",
            "Incense"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated aromatic and spicy elements."
    },
    {
        "name": "Collection 329",
        "brand": "Amouage",
        "year": 2002,
        "accords": [
            "Sweet",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Pepper",
            "Cardamom",
            "Rose",
            "Leather"
        ],
        "middleNotes": [
            "Bergamot",
            "Musk",
            "Vetiver",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Apple",
            "Incense",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 330",
        "brand": "Louis Vuitton",
        "year": 2019,
        "accords": [
            "Spicy",
            "Sweet",
            "Oud",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Apple",
            "Amber",
            "Pepper"
        ],
        "middleNotes": [
            "Patchouli",
            "Cedar",
            "Oud",
            "Vanilla"
        ],
        "baseNotes": [
            "Lemon",
            "Musk",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 331",
        "brand": "Kilian Paris",
        "year": 2026,
        "accords": [
            "Citrus",
            "Leather",
            "Sweet"
        ],
        "topNotes": [
            "Vanilla",
            "Pepper",
            "Oakmoss",
            "Cardamom"
        ],
        "middleNotes": [
            "Amber",
            "Oud",
            "Tonka Bean",
            "Jasmine"
        ],
        "baseNotes": [
            "Amber",
            "Iris",
            "Pineapple",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 332",
        "brand": "Montale",
        "year": 2007,
        "accords": [
            "Powdery",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Oud",
            "Lavender",
            "Rose",
            "Saffron"
        ],
        "middleNotes": [
            "Incense",
            "Cinnamon",
            "Pineapple"
        ],
        "baseNotes": [
            "Cinnamon",
            "Orange",
            "Apple"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 333",
        "brand": "Roja Parfums",
        "year": 2019,
        "accords": [
            "Powdery",
            "Fresh",
            "Oud"
        ],
        "topNotes": [
            "Saffron",
            "Cinnamon",
            "Patchouli",
            "Apple"
        ],
        "middleNotes": [
            "Cardamom",
            "Bergamot",
            "Pineapple"
        ],
        "baseNotes": [
            "Jasmine",
            "Lemon",
            "Orange"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 334",
        "brand": "Initio",
        "year": 2001,
        "accords": [
            "Citrus",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Musk",
            "Cardamom",
            "Patchouli",
            "Bergamot"
        ],
        "middleNotes": [
            "Oud",
            "Sandalwood",
            "Bergamot",
            "Cinnamon"
        ],
        "baseNotes": [
            "Saffron",
            "Leather",
            "Orange",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and sweet elements."
    },
    {
        "name": "Collection 335",
        "brand": "Parfums de Marly",
        "year": 2001,
        "accords": [
            "Oud",
            "Citrus",
            "Spicy",
            "Floral"
        ],
        "topNotes": [
            "Tonka Bean",
            "Pineapple",
            "Apple",
            "Leather"
        ],
        "middleNotes": [
            "Patchouli",
            "Vetiver",
            "Iris"
        ],
        "baseNotes": [
            "Vetiver",
            "Bergamot",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 336",
        "brand": "Dior",
        "year": 2018,
        "accords": [
            "Spicy",
            "Floral",
            "Powdery",
            "Sweet",
            "Musky"
        ],
        "topNotes": [
            "Incense",
            "Vetiver",
            "Jasmine",
            "Bergamot"
        ],
        "middleNotes": [
            "Cardamom",
            "Orange",
            "Cedar",
            "Pineapple"
        ],
        "baseNotes": [
            "Iris",
            "Amber",
            "Vetiver",
            "Apple"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated spicy and floral elements."
    },
    {
        "name": "Collection 337",
        "brand": "YSL",
        "year": 2022,
        "accords": [
            "Citrus",
            "Oud",
            "Floral",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Tonka Bean",
            "Bergamot"
        ],
        "middleNotes": [
            "Musk",
            "Incense",
            "Amber"
        ],
        "baseNotes": [
            "Musk",
            "Leather",
            "Iris"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated citrus and oud elements."
    },
    {
        "name": "Collection 338",
        "brand": "Louis Vuitton",
        "year": 2023,
        "accords": [
            "Citrus",
            "Fresh",
            "Leather",
            "Oud",
            "Powdery"
        ],
        "topNotes": [
            "Patchouli",
            "Iris",
            "Orange",
            "Vetiver"
        ],
        "middleNotes": [
            "Amber",
            "Lavender",
            "Incense"
        ],
        "baseNotes": [
            "Rose",
            "Lemon",
            "Patchouli",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated citrus and fresh elements."
    },
    {
        "name": "Collection 339",
        "brand": "Maison Francis Kurkdjian",
        "year": 1997,
        "accords": [
            "Sweet",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Oakmoss",
            "Vetiver",
            "Cinnamon"
        ],
        "middleNotes": [
            "Jasmine",
            "Tonka Bean",
            "Patchouli"
        ],
        "baseNotes": [
            "Vanilla",
            "Lemon",
            "Oakmoss",
            "Amber"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated sweet and powdery elements."
    },
    {
        "name": "Collection 340",
        "brand": "Diptyque",
        "year": 1992,
        "accords": [
            "Aromatic",
            "Fresh",
            "Leather"
        ],
        "topNotes": [
            "Patchouli",
            "Musk",
            "Apple"
        ],
        "middleNotes": [
            "Iris",
            "Pepper",
            "Patchouli",
            "Orange"
        ],
        "baseNotes": [
            "Musk",
            "Bergamot",
            "Iris"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 341",
        "brand": "Prada",
        "year": 2020,
        "accords": [
            "Sweet",
            "Oud",
            "Floral",
            "Woody"
        ],
        "topNotes": [
            "Patchouli",
            "Incense",
            "Cardamom",
            "Vanilla"
        ],
        "middleNotes": [
            "Lemon",
            "Leather",
            "Amber",
            "Lavender"
        ],
        "baseNotes": [
            "Patchouli",
            "Bergamot",
            "Lemon",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 342",
        "brand": "YSL",
        "year": 2017,
        "accords": [
            "Fresh",
            "Citrus",
            "Musky",
            "Powdery"
        ],
        "topNotes": [
            "Lemon",
            "Cardamom",
            "Lavender"
        ],
        "middleNotes": [
            "Bergamot",
            "Musk",
            "Patchouli"
        ],
        "baseNotes": [
            "Jasmine",
            "Incense",
            "Iris"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated fresh and citrus elements."
    },
    {
        "name": "Collection 343",
        "brand": "Le Labo",
        "year": 2020,
        "accords": [
            "Sweet",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Lavender",
            "Lemon",
            "Jasmine"
        ],
        "middleNotes": [
            "Cardamom",
            "Patchouli",
            "Apple",
            "Vetiver"
        ],
        "baseNotes": [
            "Pineapple",
            "Lavender",
            "Oud"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 344",
        "brand": "YSL",
        "year": 2020,
        "accords": [
            "Woody",
            "Floral",
            "Citrus",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Lemon",
            "Saffron",
            "Pineapple"
        ],
        "middleNotes": [
            "Rose",
            "Cedar",
            "Orange",
            "Iris"
        ],
        "baseNotes": [
            "Cinnamon",
            "Vetiver",
            "Leather"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated woody and floral elements."
    },
    {
        "name": "Collection 345",
        "brand": "Louis Vuitton",
        "year": 2017,
        "accords": [
            "Oud",
            "Fresh",
            "Leather"
        ],
        "topNotes": [
            "Patchouli",
            "Iris",
            "Apple"
        ],
        "middleNotes": [
            "Vetiver",
            "Leather",
            "Pineapple"
        ],
        "baseNotes": [
            "Patchouli",
            "Pepper",
            "Incense",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated oud and fresh elements."
    },
    {
        "name": "Collection 346",
        "brand": "Gucci",
        "year": 2008,
        "accords": [
            "Citrus",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Incense",
            "Bergamot",
            "Tonka Bean",
            "Rose"
        ],
        "middleNotes": [
            "Cardamom",
            "Sandalwood",
            "Vetiver",
            "Lemon"
        ],
        "baseNotes": [
            "Oakmoss",
            "Lavender",
            "Orange",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 347",
        "brand": "Maison Francis Kurkdjian",
        "year": 2019,
        "accords": [
            "Oud",
            "Aromatic",
            "Citrus"
        ],
        "topNotes": [
            "Orange",
            "Leather",
            "Pineapple",
            "Rose"
        ],
        "middleNotes": [
            "Oakmoss",
            "Sandalwood",
            "Bergamot"
        ],
        "baseNotes": [
            "Bergamot",
            "Oud",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated oud and aromatic elements."
    },
    {
        "name": "Collection 348",
        "brand": "Maison Francis Kurkdjian",
        "year": 1992,
        "accords": [
            "Floral",
            "Sweet",
            "Spicy",
            "Citrus"
        ],
        "topNotes": [
            "Oud",
            "Apple",
            "Jasmine",
            "Pineapple"
        ],
        "middleNotes": [
            "Lemon",
            "Vetiver",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pepper",
            "Cardamom",
            "Orange",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 349",
        "brand": "Chanel",
        "year": 1994,
        "accords": [
            "Citrus",
            "Sweet",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Leather",
            "Rose",
            "Cinnamon",
            "Saffron"
        ],
        "middleNotes": [
            "Iris",
            "Vanilla",
            "Musk"
        ],
        "baseNotes": [
            "Incense",
            "Lavender",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated citrus and sweet elements."
    },
    {
        "name": "Collection 350",
        "brand": "Prada",
        "year": 2016,
        "accords": [
            "Powdery",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Cinnamon",
            "Bergamot",
            "Apple"
        ],
        "middleNotes": [
            "Oud",
            "Incense",
            "Leather",
            "Orange"
        ],
        "baseNotes": [
            "Apple",
            "Musk",
            "Cinnamon",
            "Rose"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated powdery and musky elements."
    },
    {
        "name": "Collection 351",
        "brand": "Penhaligon's",
        "year": 2023,
        "accords": [
            "Floral",
            "Oud",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Tonka Bean",
            "Bergamot"
        ],
        "middleNotes": [
            "Cedar",
            "Cardamom",
            "Pepper",
            "Lavender"
        ],
        "baseNotes": [
            "Jasmine",
            "Lemon",
            "Bergamot",
            "Musk"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated floral and oud elements."
    },
    {
        "name": "Collection 352",
        "brand": "Roja Parfums",
        "year": 2004,
        "accords": [
            "Fresh",
            "Leather",
            "Floral",
            "Oud",
            "Musky"
        ],
        "topNotes": [
            "Rose",
            "Tonka Bean",
            "Pepper",
            "Cedar"
        ],
        "middleNotes": [
            "Oakmoss",
            "Lemon",
            "Vetiver"
        ],
        "baseNotes": [
            "Musk",
            "Oud",
            "Iris",
            "Incense"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated fresh and leather elements."
    },
    {
        "name": "Collection 353",
        "brand": "Penhaligon's",
        "year": 2008,
        "accords": [
            "Spicy",
            "Leather",
            "Floral"
        ],
        "topNotes": [
            "Musk",
            "Jasmine",
            "Saffron",
            "Pineapple"
        ],
        "middleNotes": [
            "Amber",
            "Lemon",
            "Tonka Bean",
            "Lavender"
        ],
        "baseNotes": [
            "Leather",
            "Rose",
            "Patchouli",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated spicy and leather elements."
    },
    {
        "name": "Collection 354",
        "brand": "Chanel",
        "year": 2013,
        "accords": [
            "Sweet",
            "Fresh",
            "Leather",
            "Spicy"
        ],
        "topNotes": [
            "Jasmine",
            "Musk",
            "Vetiver"
        ],
        "middleNotes": [
            "Jasmine",
            "Leather",
            "Incense",
            "Orange"
        ],
        "baseNotes": [
            "Apple",
            "Bergamot",
            "Musk"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated sweet and fresh elements."
    },
    {
        "name": "Collection 355",
        "brand": "Byredo",
        "year": 2021,
        "accords": [
            "Floral",
            "Citrus",
            "Aromatic",
            "Amber",
            "Oud"
        ],
        "topNotes": [
            "Vetiver",
            "Saffron",
            "Musk"
        ],
        "middleNotes": [
            "Saffron",
            "Apple",
            "Lavender",
            "Musk"
        ],
        "baseNotes": [
            "Cardamom",
            "Lemon",
            "Leather",
            "Apple"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated floral and citrus elements."
    },
    {
        "name": "Collection 356",
        "brand": "Le Labo",
        "year": 1996,
        "accords": [
            "Oud",
            "Musky",
            "Powdery"
        ],
        "topNotes": [
            "Oakmoss",
            "Patchouli",
            "Oud",
            "Jasmine"
        ],
        "middleNotes": [
            "Incense",
            "Pepper",
            "Cardamom"
        ],
        "baseNotes": [
            "Orange",
            "Saffron",
            "Apple"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated oud and musky elements."
    },
    {
        "name": "Collection 357",
        "brand": "Initio",
        "year": 1991,
        "accords": [
            "Spicy",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Lemon",
            "Leather",
            "Bergamot"
        ],
        "middleNotes": [
            "Patchouli",
            "Tonka Bean",
            "Cedar"
        ],
        "baseNotes": [
            "Incense",
            "Amber",
            "Cardamom",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated spicy and woody elements."
    },
    {
        "name": "Collection 358",
        "brand": "Bvlgari",
        "year": 2012,
        "accords": [
            "Aromatic",
            "Leather",
            "Floral",
            "Fresh",
            "Citrus"
        ],
        "topNotes": [
            "Leather",
            "Saffron",
            "Vetiver",
            "Sandalwood"
        ],
        "middleNotes": [
            "Vanilla",
            "Lemon",
            "Cinnamon",
            "Musk"
        ],
        "baseNotes": [
            "Pepper",
            "Patchouli",
            "Amber"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated aromatic and leather elements."
    },
    {
        "name": "Collection 359",
        "brand": "Diptyque",
        "year": 2022,
        "accords": [
            "Powdery",
            "Citrus",
            "Floral"
        ],
        "topNotes": [
            "Cinnamon",
            "Amber",
            "Pepper",
            "Bergamot"
        ],
        "middleNotes": [
            "Cardamom",
            "Incense",
            "Amber"
        ],
        "baseNotes": [
            "Cinnamon",
            "Musk",
            "Iris"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 360",
        "brand": "Parfums de Marly",
        "year": 2022,
        "accords": [
            "Oud",
            "Citrus",
            "Musky",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Oud",
            "Saffron",
            "Orange"
        ],
        "middleNotes": [
            "Cedar",
            "Pineapple",
            "Oud",
            "Jasmine"
        ],
        "baseNotes": [
            "Leather",
            "Jasmine",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 361",
        "brand": "Le Labo",
        "year": 2008,
        "accords": [
            "Sweet",
            "Oud",
            "Citrus",
            "Fresh",
            "Floral"
        ],
        "topNotes": [
            "Orange",
            "Musk",
            "Lemon"
        ],
        "middleNotes": [
            "Patchouli",
            "Incense",
            "Bergamot"
        ],
        "baseNotes": [
            "Vetiver",
            "Pepper",
            "Oakmoss",
            "Rose"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 362",
        "brand": "Guerlain",
        "year": 2022,
        "accords": [
            "Citrus",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Sandalwood",
            "Patchouli",
            "Musk",
            "Oud"
        ],
        "middleNotes": [
            "Musk",
            "Pepper",
            "Rose"
        ],
        "baseNotes": [
            "Amber",
            "Cinnamon",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 363",
        "brand": "Tom Ford",
        "year": 2012,
        "accords": [
            "Floral",
            "Citrus",
            "Oud"
        ],
        "topNotes": [
            "Incense",
            "Lemon",
            "Vetiver"
        ],
        "middleNotes": [
            "Iris",
            "Apple",
            "Musk",
            "Vetiver"
        ],
        "baseNotes": [
            "Jasmine",
            "Cardamom",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated floral and citrus elements."
    },
    {
        "name": "Collection 364",
        "brand": "Prada",
        "year": 2001,
        "accords": [
            "Woody",
            "Aromatic",
            "Fresh",
            "Floral"
        ],
        "topNotes": [
            "Vetiver",
            "Leather",
            "Cinnamon"
        ],
        "middleNotes": [
            "Pepper",
            "Patchouli",
            "Musk",
            "Rose"
        ],
        "baseNotes": [
            "Cardamom",
            "Vanilla",
            "Leather",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated woody and aromatic elements."
    },
    {
        "name": "Collection 365",
        "brand": "Chanel",
        "year": 2021,
        "accords": [
            "Spicy",
            "Sweet",
            "Fresh",
            "Floral"
        ],
        "topNotes": [
            "Incense",
            "Saffron",
            "Vetiver",
            "Iris"
        ],
        "middleNotes": [
            "Jasmine",
            "Oud",
            "Iris"
        ],
        "baseNotes": [
            "Patchouli",
            "Iris",
            "Leather",
            "Orange"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated spicy and sweet elements."
    },
    {
        "name": "Collection 366",
        "brand": "Gucci",
        "year": 1996,
        "accords": [
            "Oud",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Orange",
            "Pepper",
            "Oud"
        ],
        "middleNotes": [
            "Musk",
            "Cardamom",
            "Jasmine",
            "Sandalwood"
        ],
        "baseNotes": [
            "Incense",
            "Iris",
            "Orange"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 367",
        "brand": "Dior",
        "year": 1996,
        "accords": [
            "Fresh",
            "Amber",
            "Powdery",
            "Leather",
            "Spicy"
        ],
        "topNotes": [
            "Lemon",
            "Amber",
            "Pepper",
            "Bergamot"
        ],
        "middleNotes": [
            "Oakmoss",
            "Patchouli",
            "Cedar"
        ],
        "baseNotes": [
            "Bergamot",
            "Patchouli",
            "Orange",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated fresh and amber elements."
    },
    {
        "name": "Collection 368",
        "brand": "Givenchy",
        "year": 2007,
        "accords": [
            "Aromatic",
            "Fresh",
            "Powdery"
        ],
        "topNotes": [
            "Pepper",
            "Oud",
            "Rose",
            "Incense"
        ],
        "middleNotes": [
            "Oud",
            "Rose",
            "Lavender"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Cedar",
            "Iris"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 369",
        "brand": "Prada",
        "year": 1996,
        "accords": [
            "Floral",
            "Powdery",
            "Aromatic",
            "Leather",
            "Musky"
        ],
        "topNotes": [
            "Cinnamon",
            "Iris",
            "Sandalwood",
            "Jasmine"
        ],
        "middleNotes": [
            "Jasmine",
            "Cinnamon",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pineapple",
            "Vetiver",
            "Amber"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated floral and powdery elements."
    },
    {
        "name": "Collection 370",
        "brand": "Guerlain",
        "year": 2009,
        "accords": [
            "Powdery",
            "Aromatic",
            "Spicy",
            "Floral"
        ],
        "topNotes": [
            "Sandalwood",
            "Oud",
            "Apple",
            "Iris"
        ],
        "middleNotes": [
            "Musk",
            "Patchouli",
            "Tonka Bean",
            "Leather"
        ],
        "baseNotes": [
            "Vetiver",
            "Lemon",
            "Orange",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Collection 371",
        "brand": "Amouage",
        "year": 2024,
        "accords": [
            "Woody",
            "Oud",
            "Amber",
            "Floral",
            "Fresh"
        ],
        "topNotes": [
            "Patchouli",
            "Vanilla",
            "Sandalwood",
            "Oud"
        ],
        "middleNotes": [
            "Vanilla",
            "Incense",
            "Orange",
            "Lemon"
        ],
        "baseNotes": [
            "Pineapple",
            "Tonka Bean",
            "Musk"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated woody and oud elements."
    },
    {
        "name": "Collection 372",
        "brand": "Dior",
        "year": 1992,
        "accords": [
            "Floral",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Lemon",
            "Iris",
            "Oud"
        ],
        "middleNotes": [
            "Cedar",
            "Pepper",
            "Oakmoss",
            "Musk"
        ],
        "baseNotes": [
            "Pepper",
            "Vanilla",
            "Orange",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated floral and woody elements."
    },
    {
        "name": "Collection 373",
        "brand": "Viktor&Rolf",
        "year": 1991,
        "accords": [
            "Amber",
            "Oud",
            "Floral",
            "Aromatic"
        ],
        "topNotes": [
            "Cinnamon",
            "Oud",
            "Pineapple"
        ],
        "middleNotes": [
            "Patchouli",
            "Sandalwood",
            "Leather",
            "Vanilla"
        ],
        "baseNotes": [
            "Rose",
            "Lemon",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated amber and oud elements."
    },
    {
        "name": "Collection 374",
        "brand": "Guerlain",
        "year": 2011,
        "accords": [
            "Floral",
            "Musky",
            "Oud"
        ],
        "topNotes": [
            "Saffron",
            "Cardamom",
            "Incense",
            "Vetiver"
        ],
        "middleNotes": [
            "Oud",
            "Cardamom",
            "Lemon"
        ],
        "baseNotes": [
            "Sandalwood",
            "Vetiver",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated floral and musky elements."
    },
    {
        "name": "Collection 375",
        "brand": "Penhaligon's",
        "year": 2005,
        "accords": [
            "Amber",
            "Aromatic",
            "Floral",
            "Powdery"
        ],
        "topNotes": [
            "Cinnamon",
            "Saffron",
            "Pepper"
        ],
        "middleNotes": [
            "Bergamot",
            "Vetiver",
            "Cinnamon",
            "Cardamom"
        ],
        "baseNotes": [
            "Lemon",
            "Musk",
            "Orange",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated amber and aromatic elements."
    },
    {
        "name": "Collection 376",
        "brand": "Amouage",
        "year": 2026,
        "accords": [
            "Woody",
            "Floral",
            "Powdery"
        ],
        "topNotes": [
            "Pineapple",
            "Lavender",
            "Vanilla"
        ],
        "middleNotes": [
            "Apple",
            "Jasmine",
            "Bergamot"
        ],
        "baseNotes": [
            "Vanilla",
            "Rose",
            "Sandalwood",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated woody and floral elements."
    },
    {
        "name": "Collection 377",
        "brand": "Givenchy",
        "year": 2019,
        "accords": [
            "Aromatic",
            "Citrus",
            "Sweet",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Patchouli",
            "Cardamom"
        ],
        "middleNotes": [
            "Jasmine",
            "Lemon",
            "Apple"
        ],
        "baseNotes": [
            "Sandalwood",
            "Cedar",
            "Amber",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 378",
        "brand": "Guerlain",
        "year": 2010,
        "accords": [
            "Spicy",
            "Powdery",
            "Aromatic",
            "Floral"
        ],
        "topNotes": [
            "Vanilla",
            "Oakmoss",
            "Cinnamon",
            "Lavender"
        ],
        "middleNotes": [
            "Incense",
            "Orange",
            "Vetiver",
            "Lemon"
        ],
        "baseNotes": [
            "Musk",
            "Cardamom",
            "Tonka Bean",
            "Orange"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated spicy and powdery elements."
    },
    {
        "name": "Collection 379",
        "brand": "Nishane",
        "year": 2018,
        "accords": [
            "Powdery",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Vetiver",
            "Cinnamon",
            "Cardamom",
            "Musk"
        ],
        "middleNotes": [
            "Lavender",
            "Cinnamon",
            "Pepper"
        ],
        "baseNotes": [
            "Cedar",
            "Oakmoss",
            "Cinnamon",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 380",
        "brand": "Initio",
        "year": 2004,
        "accords": [
            "Citrus",
            "Leather",
            "Oud",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Oakmoss",
            "Jasmine",
            "Cardamom",
            "Rose"
        ],
        "middleNotes": [
            "Iris",
            "Rose",
            "Patchouli"
        ],
        "baseNotes": [
            "Oakmoss",
            "Orange",
            "Saffron",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 381",
        "brand": "Initio",
        "year": 2002,
        "accords": [
            "Leather",
            "Citrus",
            "Aromatic",
            "Floral",
            "Spicy"
        ],
        "topNotes": [
            "Musk",
            "Cinnamon",
            "Vanilla"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Leather",
            "Apple"
        ],
        "baseNotes": [
            "Vetiver",
            "Oakmoss",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated leather and citrus elements."
    },
    {
        "name": "Collection 382",
        "brand": "YSL",
        "year": 2025,
        "accords": [
            "Aromatic",
            "Citrus",
            "Powdery"
        ],
        "topNotes": [
            "Vanilla",
            "Cardamom",
            "Sandalwood"
        ],
        "middleNotes": [
            "Leather",
            "Amber",
            "Cinnamon"
        ],
        "baseNotes": [
            "Sandalwood",
            "Leather",
            "Jasmine",
            "Amber"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 383",
        "brand": "Frederic Malle",
        "year": 1999,
        "accords": [
            "Citrus",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Oakmoss",
            "Vetiver",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Lemon",
            "Bergamot",
            "Incense",
            "Cedar"
        ],
        "baseNotes": [
            "Leather",
            "Tonka Bean",
            "Cardamom",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated citrus and oud elements."
    },
    {
        "name": "Collection 384",
        "brand": "Guerlain",
        "year": 2008,
        "accords": [
            "Amber",
            "Powdery",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Saffron",
            "Patchouli",
            "Pineapple",
            "Incense"
        ],
        "middleNotes": [
            "Cardamom",
            "Musk",
            "Sandalwood",
            "Orange"
        ],
        "baseNotes": [
            "Rose",
            "Apple",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated amber and powdery elements."
    },
    {
        "name": "Collection 385",
        "brand": "Creed",
        "year": 2009,
        "accords": [
            "Woody",
            "Fresh",
            "Powdery",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Lemon",
            "Pepper",
            "Cardamom"
        ],
        "middleNotes": [
            "Iris",
            "Lemon",
            "Vetiver",
            "Orange"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Bergamot",
            "Patchouli",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated woody and fresh elements."
    },
    {
        "name": "Collection 386",
        "brand": "Viktor&Rolf",
        "year": 2015,
        "accords": [
            "Powdery",
            "Woody",
            "Leather"
        ],
        "topNotes": [
            "Cardamom",
            "Lavender",
            "Musk"
        ],
        "middleNotes": [
            "Saffron",
            "Oakmoss",
            "Incense"
        ],
        "baseNotes": [
            "Lemon",
            "Iris",
            "Leather"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 387",
        "brand": "Maison Margiela",
        "year": 1990,
        "accords": [
            "Powdery",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Vetiver",
            "Lemon",
            "Patchouli",
            "Amber"
        ],
        "middleNotes": [
            "Leather",
            "Oud",
            "Incense"
        ],
        "baseNotes": [
            "Pepper",
            "Cedar",
            "Jasmine",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Maison Margiela, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Collection 388",
        "brand": "YSL",
        "year": 2010,
        "accords": [
            "Musky",
            "Floral",
            "Leather",
            "Oud",
            "Citrus"
        ],
        "topNotes": [
            "Lemon",
            "Orange",
            "Rose"
        ],
        "middleNotes": [
            "Cinnamon",
            "Pepper",
            "Saffron",
            "Pineapple"
        ],
        "baseNotes": [
            "Bergamot",
            "Sandalwood",
            "Vetiver",
            "Incense"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated musky and floral elements."
    },
    {
        "name": "Collection 389",
        "brand": "Creed",
        "year": 2015,
        "accords": [
            "Sweet",
            "Fresh",
            "Citrus"
        ],
        "topNotes": [
            "Vetiver",
            "Iris",
            "Vanilla",
            "Sandalwood"
        ],
        "middleNotes": [
            "Apple",
            "Iris",
            "Cedar"
        ],
        "baseNotes": [
            "Sandalwood",
            "Cedar",
            "Saffron",
            "Apple"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated sweet and fresh elements."
    },
    {
        "name": "Collection 390",
        "brand": "Maison Francis Kurkdjian",
        "year": 2010,
        "accords": [
            "Aromatic",
            "Citrus",
            "Powdery"
        ],
        "topNotes": [
            "Musk",
            "Vetiver",
            "Leather",
            "Lavender"
        ],
        "middleNotes": [
            "Pineapple",
            "Sandalwood",
            "Lavender"
        ],
        "baseNotes": [
            "Iris",
            "Vetiver",
            "Musk"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated aromatic and citrus elements."
    },
    {
        "name": "Collection 391",
        "brand": "Serge Lutens",
        "year": 2024,
        "accords": [
            "Spicy",
            "Aromatic",
            "Musky",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Saffron",
            "Sandalwood",
            "Cardamom"
        ],
        "middleNotes": [
            "Incense",
            "Patchouli",
            "Rose"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Apple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated spicy and aromatic elements."
    },
    {
        "name": "Collection 392",
        "brand": "Serge Lutens",
        "year": 2025,
        "accords": [
            "Musky",
            "Aromatic",
            "Fresh"
        ],
        "topNotes": [
            "Cedar",
            "Amber",
            "Patchouli",
            "Apple"
        ],
        "middleNotes": [
            "Cinnamon",
            "Orange",
            "Sandalwood"
        ],
        "baseNotes": [
            "Rose",
            "Jasmine",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 393",
        "brand": "Tom Ford",
        "year": 1999,
        "accords": [
            "Floral",
            "Powdery",
            "Sweet"
        ],
        "topNotes": [
            "Amber",
            "Jasmine",
            "Cardamom",
            "Lavender"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Cardamom",
            "Leather",
            "Musk"
        ],
        "baseNotes": [
            "Lemon",
            "Pepper",
            "Vetiver",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated floral and powdery elements."
    },
    {
        "name": "Collection 394",
        "brand": "Givenchy",
        "year": 2022,
        "accords": [
            "Aromatic",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Pineapple",
            "Lemon",
            "Oakmoss",
            "Amber"
        ],
        "middleNotes": [
            "Bergamot",
            "Lemon",
            "Amber"
        ],
        "baseNotes": [
            "Jasmine",
            "Bergamot",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated aromatic and powdery elements."
    },
    {
        "name": "Collection 395",
        "brand": "Maison Francis Kurkdjian",
        "year": 2019,
        "accords": [
            "Floral",
            "Woody",
            "Oud",
            "Amber"
        ],
        "topNotes": [
            "Cinnamon",
            "Sandalwood",
            "Patchouli"
        ],
        "middleNotes": [
            "Apple",
            "Orange",
            "Musk",
            "Cinnamon"
        ],
        "baseNotes": [
            "Vetiver",
            "Iris",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Maison Francis Kurkdjian, balancing sophisticated floral and woody elements."
    },
    {
        "name": "Collection 396",
        "brand": "Viktor&Rolf",
        "year": 2005,
        "accords": [
            "Oud",
            "Aromatic",
            "Woody"
        ],
        "topNotes": [
            "Rose",
            "Sandalwood",
            "Vanilla",
            "Cedar"
        ],
        "middleNotes": [
            "Saffron",
            "Incense",
            "Musk"
        ],
        "baseNotes": [
            "Patchouli",
            "Cardamom",
            "Orange",
            "Incense"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated oud and aromatic elements."
    },
    {
        "name": "Collection 397",
        "brand": "Guerlain",
        "year": 2007,
        "accords": [
            "Spicy",
            "Powdery",
            "Leather",
            "Fresh",
            "Musky"
        ],
        "topNotes": [
            "Cardamom",
            "Vetiver",
            "Orange",
            "Saffron"
        ],
        "middleNotes": [
            "Cinnamon",
            "Cedar",
            "Apple"
        ],
        "baseNotes": [
            "Rose",
            "Tonka Bean",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated spicy and powdery elements."
    },
    {
        "name": "Collection 398",
        "brand": "Viktor&Rolf",
        "year": 2006,
        "accords": [
            "Citrus",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Musk",
            "Vetiver"
        ],
        "middleNotes": [
            "Patchouli",
            "Musk",
            "Vetiver"
        ],
        "baseNotes": [
            "Lemon",
            "Vanilla",
            "Oud",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 399",
        "brand": "Roja Parfums",
        "year": 2026,
        "accords": [
            "Oud",
            "Musky",
            "Fresh",
            "Amber",
            "Leather"
        ],
        "topNotes": [
            "Sandalwood",
            "Musk",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Pepper",
            "Cinnamon",
            "Oakmoss"
        ],
        "baseNotes": [
            "Cardamom",
            "Jasmine",
            "Incense"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated oud and musky elements."
    },
    {
        "name": "Collection 400",
        "brand": "Byredo",
        "year": 1996,
        "accords": [
            "Musky",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Orange",
            "Oakmoss",
            "Leather",
            "Bergamot"
        ],
        "middleNotes": [
            "Sandalwood",
            "Bergamot",
            "Pepper",
            "Cardamom"
        ],
        "baseNotes": [
            "Pepper",
            "Pineapple",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated musky and sweet elements."
    },
    {
        "name": "Collection 401",
        "brand": "Diptyque",
        "year": 2005,
        "accords": [
            "Oud",
            "Aromatic",
            "Spicy",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Amber",
            "Jasmine",
            "Sandalwood"
        ],
        "middleNotes": [
            "Bergamot",
            "Amber",
            "Pineapple",
            "Oud"
        ],
        "baseNotes": [
            "Vetiver",
            "Lemon",
            "Amber",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated oud and aromatic elements."
    },
    {
        "name": "Collection 402",
        "brand": "Kilian Paris",
        "year": 1998,
        "accords": [
            "Amber",
            "Aromatic",
            "Sweet",
            "Musky"
        ],
        "topNotes": [
            "Vanilla",
            "Oakmoss",
            "Iris"
        ],
        "middleNotes": [
            "Patchouli",
            "Pepper",
            "Rose"
        ],
        "baseNotes": [
            "Vanilla",
            "Oakmoss",
            "Pepper",
            "Orange"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated amber and aromatic elements."
    },
    {
        "name": "Collection 403",
        "brand": "Cartier",
        "year": 2001,
        "accords": [
            "Citrus",
            "Musky",
            "Fresh",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Leather",
            "Oakmoss",
            "Amber"
        ],
        "middleNotes": [
            "Pepper",
            "Oud",
            "Lavender"
        ],
        "baseNotes": [
            "Cinnamon",
            "Sandalwood",
            "Leather"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 404",
        "brand": "Kilian Paris",
        "year": 2021,
        "accords": [
            "Oud",
            "Spicy",
            "Woody"
        ],
        "topNotes": [
            "Pineapple",
            "Bergamot",
            "Jasmine",
            "Oakmoss"
        ],
        "middleNotes": [
            "Lemon",
            "Sandalwood",
            "Oud",
            "Bergamot"
        ],
        "baseNotes": [
            "Lavender",
            "Tonka Bean",
            "Iris",
            "Orange"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 405",
        "brand": "Parfums de Marly",
        "year": 2015,
        "accords": [
            "Woody",
            "Spicy",
            "Oud",
            "Aromatic"
        ],
        "topNotes": [
            "Jasmine",
            "Amber",
            "Saffron",
            "Cedar"
        ],
        "middleNotes": [
            "Sandalwood",
            "Incense",
            "Pineapple"
        ],
        "baseNotes": [
            "Cinnamon",
            "Sandalwood",
            "Orange",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated woody and spicy elements."
    },
    {
        "name": "Collection 406",
        "brand": "Bvlgari",
        "year": 2022,
        "accords": [
            "Oud",
            "Woody",
            "Citrus",
            "Fresh"
        ],
        "topNotes": [
            "Incense",
            "Vetiver",
            "Cardamom"
        ],
        "middleNotes": [
            "Saffron",
            "Lavender",
            "Iris",
            "Amber"
        ],
        "baseNotes": [
            "Bergamot",
            "Pepper",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 407",
        "brand": "YSL",
        "year": 2008,
        "accords": [
            "Woody",
            "Citrus",
            "Aromatic",
            "Powdery",
            "Spicy"
        ],
        "topNotes": [
            "Apple",
            "Orange",
            "Incense",
            "Cedar"
        ],
        "middleNotes": [
            "Musk",
            "Sandalwood",
            "Lavender",
            "Cinnamon"
        ],
        "baseNotes": [
            "Oud",
            "Bergamot",
            "Lavender"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 408",
        "brand": "Louis Vuitton",
        "year": 2003,
        "accords": [
            "Spicy",
            "Oud",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Leather",
            "Bergamot",
            "Vetiver",
            "Lavender"
        ],
        "middleNotes": [
            "Tonka Bean",
            "Apple",
            "Rose",
            "Cedar"
        ],
        "baseNotes": [
            "Rose",
            "Amber",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated spicy and oud elements."
    },
    {
        "name": "Collection 409",
        "brand": "Byredo",
        "year": 2011,
        "accords": [
            "Spicy",
            "Musky",
            "Fresh",
            "Oud"
        ],
        "topNotes": [
            "Patchouli",
            "Rose",
            "Lemon"
        ],
        "middleNotes": [
            "Lavender",
            "Pineapple",
            "Oakmoss"
        ],
        "baseNotes": [
            "Pepper",
            "Iris",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated spicy and musky elements."
    },
    {
        "name": "Collection 410",
        "brand": "Gucci",
        "year": 1997,
        "accords": [
            "Aromatic",
            "Woody",
            "Citrus",
            "Fresh",
            "Amber"
        ],
        "topNotes": [
            "Musk",
            "Amber",
            "Pepper"
        ],
        "middleNotes": [
            "Jasmine",
            "Vetiver",
            "Orange",
            "Apple"
        ],
        "baseNotes": [
            "Apple",
            "Amber",
            "Incense",
            "Rose"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "Collection 411",
        "brand": "Dior",
        "year": 2005,
        "accords": [
            "Leather",
            "Powdery",
            "Woody"
        ],
        "topNotes": [
            "Cardamom",
            "Pepper",
            "Leather",
            "Amber"
        ],
        "middleNotes": [
            "Leather",
            "Lemon",
            "Saffron",
            "Bergamot"
        ],
        "baseNotes": [
            "Iris",
            "Lemon",
            "Incense",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Collection 412",
        "brand": "Hermès",
        "year": 2004,
        "accords": [
            "Aromatic",
            "Woody",
            "Citrus",
            "Leather"
        ],
        "topNotes": [
            "Cardamom",
            "Rose",
            "Cinnamon"
        ],
        "middleNotes": [
            "Cinnamon",
            "Cardamom",
            "Incense",
            "Saffron"
        ],
        "baseNotes": [
            "Patchouli",
            "Lavender",
            "Orange"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "Collection 413",
        "brand": "Mancera",
        "year": 1995,
        "accords": [
            "Powdery",
            "Citrus",
            "Musky"
        ],
        "topNotes": [
            "Jasmine",
            "Apple",
            "Tonka Bean",
            "Oakmoss"
        ],
        "middleNotes": [
            "Bergamot",
            "Incense",
            "Cardamom"
        ],
        "baseNotes": [
            "Orange",
            "Jasmine",
            "Tonka Bean",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 414",
        "brand": "Parfums de Marly",
        "year": 1995,
        "accords": [
            "Citrus",
            "Leather",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Sandalwood",
            "Saffron",
            "Cedar"
        ],
        "middleNotes": [
            "Bergamot",
            "Oud",
            "Incense",
            "Pepper"
        ],
        "baseNotes": [
            "Cardamom",
            "Iris",
            "Orange",
            "Leather"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated citrus and leather elements."
    },
    {
        "name": "Collection 415",
        "brand": "Xerjoff",
        "year": 2004,
        "accords": [
            "Oud",
            "Spicy",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Iris",
            "Incense",
            "Pineapple",
            "Patchouli"
        ],
        "middleNotes": [
            "Saffron",
            "Apple",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Rose",
            "Oud",
            "Pineapple",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 416",
        "brand": "Frederic Malle",
        "year": 2021,
        "accords": [
            "Powdery",
            "Spicy",
            "Sweet"
        ],
        "topNotes": [
            "Saffron",
            "Rose",
            "Apple"
        ],
        "middleNotes": [
            "Pineapple",
            "Iris",
            "Pepper",
            "Amber"
        ],
        "baseNotes": [
            "Pineapple",
            "Leather",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated powdery and spicy elements."
    },
    {
        "name": "Collection 417",
        "brand": "Penhaligon's",
        "year": 2008,
        "accords": [
            "Fresh",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Bergamot",
            "Amber",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Oud",
            "Lavender",
            "Sandalwood"
        ],
        "baseNotes": [
            "Incense",
            "Tonka Bean",
            "Lemon",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Penhaligon's, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 418",
        "brand": "Givenchy",
        "year": 2012,
        "accords": [
            "Powdery",
            "Leather",
            "Citrus"
        ],
        "topNotes": [
            "Rose",
            "Vetiver",
            "Oud"
        ],
        "middleNotes": [
            "Vetiver",
            "Lavender",
            "Amber",
            "Oakmoss"
        ],
        "baseNotes": [
            "Amber",
            "Vanilla",
            "Iris"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated powdery and leather elements."
    },
    {
        "name": "Collection 419",
        "brand": "Cartier",
        "year": 2003,
        "accords": [
            "Oud",
            "Spicy",
            "Musky",
            "Woody",
            "Leather"
        ],
        "topNotes": [
            "Oud",
            "Cardamom",
            "Incense"
        ],
        "middleNotes": [
            "Saffron",
            "Bergamot",
            "Patchouli"
        ],
        "baseNotes": [
            "Orange",
            "Cedar",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated oud and spicy elements."
    },
    {
        "name": "Collection 420",
        "brand": "Mancera",
        "year": 1992,
        "accords": [
            "Citrus",
            "Aromatic",
            "Floral",
            "Powdery"
        ],
        "topNotes": [
            "Leather",
            "Rose",
            "Musk",
            "Jasmine"
        ],
        "middleNotes": [
            "Oud",
            "Cinnamon",
            "Amber"
        ],
        "baseNotes": [
            "Musk",
            "Tonka Bean",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated citrus and aromatic elements."
    },
    {
        "name": "Collection 421",
        "brand": "Hermès",
        "year": 2015,
        "accords": [
            "Spicy",
            "Powdery",
            "Woody",
            "Fresh"
        ],
        "topNotes": [
            "Oud",
            "Pepper",
            "Cardamom",
            "Orange"
        ],
        "middleNotes": [
            "Cinnamon",
            "Jasmine",
            "Cardamom",
            "Orange"
        ],
        "baseNotes": [
            "Cinnamon",
            "Pineapple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated spicy and powdery elements."
    },
    {
        "name": "Collection 422",
        "brand": "Serge Lutens",
        "year": 2020,
        "accords": [
            "Musky",
            "Aromatic",
            "Leather"
        ],
        "topNotes": [
            "Orange",
            "Pineapple",
            "Oakmoss"
        ],
        "middleNotes": [
            "Jasmine",
            "Tonka Bean",
            "Incense"
        ],
        "baseNotes": [
            "Apple",
            "Patchouli",
            "Lemon",
            "Lavender"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 423",
        "brand": "Gucci",
        "year": 2003,
        "accords": [
            "Woody",
            "Citrus",
            "Floral",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Patchouli",
            "Saffron",
            "Tonka Bean",
            "Sandalwood"
        ],
        "middleNotes": [
            "Musk",
            "Pepper",
            "Cardamom",
            "Pineapple"
        ],
        "baseNotes": [
            "Apple",
            "Oud",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated woody and citrus elements."
    },
    {
        "name": "Collection 424",
        "brand": "Viktor&Rolf",
        "year": 1994,
        "accords": [
            "Floral",
            "Spicy",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Rose",
            "Apple",
            "Lemon"
        ],
        "middleNotes": [
            "Lemon",
            "Orange",
            "Oakmoss"
        ],
        "baseNotes": [
            "Apple",
            "Jasmine",
            "Pepper",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Viktor&Rolf, balancing sophisticated floral and spicy elements."
    },
    {
        "name": "Collection 425",
        "brand": "Kilian Paris",
        "year": 2006,
        "accords": [
            "Citrus",
            "Sweet",
            "Fresh",
            "Aromatic"
        ],
        "topNotes": [
            "Cinnamon",
            "Jasmine",
            "Patchouli"
        ],
        "middleNotes": [
            "Incense",
            "Bergamot",
            "Iris",
            "Patchouli"
        ],
        "baseNotes": [
            "Sandalwood",
            "Iris",
            "Amber",
            "Oud"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated citrus and sweet elements."
    },
    {
        "name": "Collection 426",
        "brand": "Roja Parfums",
        "year": 2020,
        "accords": [
            "Fresh",
            "Spicy",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Pepper",
            "Oud",
            "Patchouli",
            "Orange"
        ],
        "middleNotes": [
            "Jasmine",
            "Saffron",
            "Incense"
        ],
        "baseNotes": [
            "Vanilla",
            "Sandalwood",
            "Amber"
        ],
        "description": "A high-quality fragrance from Roja Parfums, balancing sophisticated fresh and spicy elements."
    },
    {
        "name": "Collection 427",
        "brand": "Initio",
        "year": 2015,
        "accords": [
            "Sweet",
            "Aromatic",
            "Floral",
            "Citrus",
            "Fresh"
        ],
        "topNotes": [
            "Oakmoss",
            "Vetiver",
            "Pepper",
            "Cedar"
        ],
        "middleNotes": [
            "Lavender",
            "Oud",
            "Patchouli",
            "Oakmoss"
        ],
        "baseNotes": [
            "Lavender",
            "Apple",
            "Oud",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated sweet and aromatic elements."
    },
    {
        "name": "Collection 428",
        "brand": "Jo Malone London",
        "year": 2005,
        "accords": [
            "Amber",
            "Citrus",
            "Oud",
            "Leather"
        ],
        "topNotes": [
            "Patchouli",
            "Tonka Bean",
            "Apple"
        ],
        "middleNotes": [
            "Sandalwood",
            "Iris",
            "Pepper"
        ],
        "baseNotes": [
            "Orange",
            "Jasmine",
            "Amber"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated amber and citrus elements."
    },
    {
        "name": "Collection 429",
        "brand": "Chanel",
        "year": 2013,
        "accords": [
            "Fresh",
            "Aromatic",
            "Floral"
        ],
        "topNotes": [
            "Orange",
            "Saffron",
            "Tonka Bean"
        ],
        "middleNotes": [
            "Bergamot",
            "Sandalwood",
            "Lavender"
        ],
        "baseNotes": [
            "Oud",
            "Iris",
            "Apple"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 430",
        "brand": "Prada",
        "year": 2008,
        "accords": [
            "Oud",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Bergamot",
            "Vanilla",
            "Musk"
        ],
        "middleNotes": [
            "Cardamom",
            "Rose",
            "Bergamot",
            "Sandalwood"
        ],
        "baseNotes": [
            "Musk",
            "Cardamom",
            "Iris",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated oud and sweet elements."
    },
    {
        "name": "Collection 431",
        "brand": "Le Labo",
        "year": 2006,
        "accords": [
            "Oud",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Cedar",
            "Vanilla",
            "Apple"
        ],
        "middleNotes": [
            "Lavender",
            "Incense",
            "Pepper"
        ],
        "baseNotes": [
            "Iris",
            "Vanilla",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated oud and floral elements."
    },
    {
        "name": "Collection 432",
        "brand": "Le Labo",
        "year": 1992,
        "accords": [
            "Oud",
            "Musky",
            "Aromatic"
        ],
        "topNotes": [
            "Bergamot",
            "Leather",
            "Orange"
        ],
        "middleNotes": [
            "Vetiver",
            "Bergamot",
            "Pepper"
        ],
        "baseNotes": [
            "Amber",
            "Lemon",
            "Patchouli",
            "Pepper"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated oud and musky elements."
    },
    {
        "name": "Collection 433",
        "brand": "Creed",
        "year": 1996,
        "accords": [
            "Musky",
            "Aromatic",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Lemon",
            "Jasmine",
            "Orange",
            "Rose"
        ],
        "middleNotes": [
            "Musk",
            "Cardamom",
            "Orange"
        ],
        "baseNotes": [
            "Oud",
            "Pepper",
            "Apple",
            "Rose"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated musky and aromatic elements."
    },
    {
        "name": "Collection 434",
        "brand": "Chanel",
        "year": 2009,
        "accords": [
            "Spicy",
            "Aromatic",
            "Floral",
            "Sweet"
        ],
        "topNotes": [
            "Incense",
            "Orange",
            "Lemon"
        ],
        "middleNotes": [
            "Musk",
            "Apple",
            "Incense"
        ],
        "baseNotes": [
            "Oakmoss",
            "Incense",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated spicy and aromatic elements."
    },
    {
        "name": "Collection 435",
        "brand": "Hermès",
        "year": 1992,
        "accords": [
            "Aromatic",
            "Fresh",
            "Musky",
            "Oud"
        ],
        "topNotes": [
            "Pepper",
            "Cinnamon",
            "Apple"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pepper",
            "Pineapple",
            "Vetiver"
        ],
        "baseNotes": [
            "Patchouli",
            "Apple",
            "Musk",
            "Rose"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated aromatic and fresh elements."
    },
    {
        "name": "Collection 436",
        "brand": "YSL",
        "year": 2003,
        "accords": [
            "Spicy",
            "Oud",
            "Sweet",
            "Leather"
        ],
        "topNotes": [
            "Lemon",
            "Amber",
            "Cinnamon"
        ],
        "middleNotes": [
            "Amber",
            "Iris",
            "Orange"
        ],
        "baseNotes": [
            "Orange",
            "Iris",
            "Bergamot",
            "Leather"
        ],
        "description": "A high-quality fragrance from YSL, balancing sophisticated spicy and oud elements."
    },
    {
        "name": "Collection 437",
        "brand": "Prada",
        "year": 2006,
        "accords": [
            "Amber",
            "Citrus",
            "Musky"
        ],
        "topNotes": [
            "Oud",
            "Vanilla",
            "Orange"
        ],
        "middleNotes": [
            "Orange",
            "Cinnamon",
            "Sandalwood"
        ],
        "baseNotes": [
            "Pepper",
            "Incense",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated amber and citrus elements."
    },
    {
        "name": "Collection 438",
        "brand": "Parfums de Marly",
        "year": 2001,
        "accords": [
            "Powdery",
            "Citrus",
            "Floral",
            "Fresh",
            "Sweet"
        ],
        "topNotes": [
            "Pineapple",
            "Sandalwood",
            "Rose",
            "Amber"
        ],
        "middleNotes": [
            "Rose",
            "Leather",
            "Oud"
        ],
        "baseNotes": [
            "Bergamot",
            "Lavender",
            "Lemon",
            "Cardamom"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 439",
        "brand": "Mancera",
        "year": 1993,
        "accords": [
            "Aromatic",
            "Musky",
            "Fresh",
            "Amber"
        ],
        "topNotes": [
            "Cardamom",
            "Cinnamon",
            "Oakmoss",
            "Vetiver"
        ],
        "middleNotes": [
            "Cardamom",
            "Vetiver",
            "Sandalwood"
        ],
        "baseNotes": [
            "Orange",
            "Amber",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated aromatic and musky elements."
    },
    {
        "name": "Collection 440",
        "brand": "Jo Malone London",
        "year": 1997,
        "accords": [
            "Citrus",
            "Spicy",
            "Woody",
            "Powdery"
        ],
        "topNotes": [
            "Oud",
            "Vetiver",
            "Leather",
            "Pineapple"
        ],
        "middleNotes": [
            "Patchouli",
            "Jasmine",
            "Bergamot",
            "Pineapple"
        ],
        "baseNotes": [
            "Bergamot",
            "Lemon",
            "Orange"
        ],
        "description": "A high-quality fragrance from Jo Malone London, balancing sophisticated citrus and spicy elements."
    },
    {
        "name": "Collection 441",
        "brand": "Frederic Malle",
        "year": 2018,
        "accords": [
            "Fresh",
            "Aromatic",
            "Amber",
            "Citrus"
        ],
        "topNotes": [
            "Oakmoss",
            "Apple",
            "Amber"
        ],
        "middleNotes": [
            "Sandalwood",
            "Lemon",
            "Tonka Bean",
            "Orange"
        ],
        "baseNotes": [
            "Lemon",
            "Apple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated fresh and aromatic elements."
    },
    {
        "name": "Collection 442",
        "brand": "Bvlgari",
        "year": 1992,
        "accords": [
            "Aromatic",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Pineapple",
            "Iris",
            "Orange"
        ],
        "middleNotes": [
            "Sandalwood",
            "Pepper",
            "Amber"
        ],
        "baseNotes": [
            "Jasmine",
            "Leather",
            "Pepper",
            "Lemon"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated aromatic and powdery elements."
    },
    {
        "name": "Collection 443",
        "brand": "Givenchy",
        "year": 2026,
        "accords": [
            "Citrus",
            "Amber",
            "Musky",
            "Powdery",
            "Spicy"
        ],
        "topNotes": [
            "Patchouli",
            "Iris",
            "Apple"
        ],
        "middleNotes": [
            "Pepper",
            "Vetiver",
            "Lemon",
            "Patchouli"
        ],
        "baseNotes": [
            "Oakmoss",
            "Jasmine",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated citrus and amber elements."
    },
    {
        "name": "Collection 444",
        "brand": "Creed",
        "year": 2014,
        "accords": [
            "Powdery",
            "Fresh",
            "Amber"
        ],
        "topNotes": [
            "Bergamot",
            "Cardamom",
            "Sandalwood",
            "Lavender"
        ],
        "middleNotes": [
            "Orange",
            "Saffron",
            "Lemon",
            "Sandalwood"
        ],
        "baseNotes": [
            "Lavender",
            "Oud",
            "Lemon",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 445",
        "brand": "Nishane",
        "year": 2021,
        "accords": [
            "Powdery",
            "Aromatic",
            "Floral",
            "Oud"
        ],
        "topNotes": [
            "Jasmine",
            "Pineapple",
            "Oakmoss",
            "Orange"
        ],
        "middleNotes": [
            "Vetiver",
            "Leather",
            "Amber",
            "Orange"
        ],
        "baseNotes": [
            "Sandalwood",
            "Cardamom",
            "Musk"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Collection 446",
        "brand": "Xerjoff",
        "year": 2012,
        "accords": [
            "Leather",
            "Aromatic",
            "Citrus"
        ],
        "topNotes": [
            "Saffron",
            "Amber",
            "Orange"
        ],
        "middleNotes": [
            "Vanilla",
            "Pineapple",
            "Incense"
        ],
        "baseNotes": [
            "Iris",
            "Incense",
            "Cardamom",
            "Oud"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated leather and aromatic elements."
    },
    {
        "name": "Collection 447",
        "brand": "Mancera",
        "year": 2022,
        "accords": [
            "Citrus",
            "Woody",
            "Powdery",
            "Sweet"
        ],
        "topNotes": [
            "Lemon",
            "Vanilla",
            "Bergamot",
            "Leather"
        ],
        "middleNotes": [
            "Incense",
            "Apple",
            "Vetiver",
            "Orange"
        ],
        "baseNotes": [
            "Orange",
            "Cinnamon",
            "Vanilla"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated citrus and woody elements."
    },
    {
        "name": "Collection 448",
        "brand": "Cartier",
        "year": 1992,
        "accords": [
            "Musky",
            "Powdery",
            "Spicy",
            "Woody"
        ],
        "topNotes": [
            "Saffron",
            "Iris",
            "Patchouli"
        ],
        "middleNotes": [
            "Musk",
            "Bergamot",
            "Saffron"
        ],
        "baseNotes": [
            "Oud",
            "Vanilla",
            "Iris"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated musky and powdery elements."
    },
    {
        "name": "Collection 449",
        "brand": "Nishane",
        "year": 2015,
        "accords": [
            "Citrus",
            "Musky",
            "Floral"
        ],
        "topNotes": [
            "Apple",
            "Musk",
            "Saffron"
        ],
        "middleNotes": [
            "Patchouli",
            "Pepper",
            "Lavender",
            "Orange"
        ],
        "baseNotes": [
            "Iris",
            "Patchouli",
            "Lavender",
            "Apple"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 450",
        "brand": "Parfums de Marly",
        "year": 1993,
        "accords": [
            "Sweet",
            "Citrus",
            "Powdery",
            "Amber",
            "Woody"
        ],
        "topNotes": [
            "Cardamom",
            "Patchouli",
            "Musk"
        ],
        "middleNotes": [
            "Incense",
            "Rose",
            "Lemon",
            "Pepper"
        ],
        "baseNotes": [
            "Pepper",
            "Musk",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Parfums de Marly, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 451",
        "brand": "Nishane",
        "year": 2010,
        "accords": [
            "Floral",
            "Oud",
            "Aromatic",
            "Sweet",
            "Woody"
        ],
        "topNotes": [
            "Apple",
            "Amber",
            "Lavender",
            "Cedar"
        ],
        "middleNotes": [
            "Incense",
            "Jasmine",
            "Cedar"
        ],
        "baseNotes": [
            "Bergamot",
            "Vetiver",
            "Oakmoss",
            "Iris"
        ],
        "description": "A high-quality fragrance from Nishane, balancing sophisticated floral and oud elements."
    },
    {
        "name": "Collection 452",
        "brand": "Prada",
        "year": 2007,
        "accords": [
            "Sweet",
            "Spicy",
            "Leather",
            "Powdery"
        ],
        "topNotes": [
            "Pepper",
            "Oud",
            "Orange",
            "Iris"
        ],
        "middleNotes": [
            "Bergamot",
            "Vanilla",
            "Jasmine",
            "Pineapple"
        ],
        "baseNotes": [
            "Apple",
            "Musk",
            "Sandalwood",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Collection 453",
        "brand": "Amouage",
        "year": 1996,
        "accords": [
            "Citrus",
            "Musky",
            "Sweet"
        ],
        "topNotes": [
            "Oakmoss",
            "Amber",
            "Pepper",
            "Cardamom"
        ],
        "middleNotes": [
            "Lemon",
            "Oud",
            "Vetiver",
            "Patchouli"
        ],
        "baseNotes": [
            "Leather",
            "Lemon",
            "Tonka Bean",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Amouage, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 454",
        "brand": "Givenchy",
        "year": 2001,
        "accords": [
            "Sweet",
            "Citrus",
            "Oud",
            "Amber",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Jasmine",
            "Vanilla",
            "Apple"
        ],
        "middleNotes": [
            "Cardamom",
            "Bergamot",
            "Oud"
        ],
        "baseNotes": [
            "Apple",
            "Sandalwood",
            "Saffron",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated sweet and citrus elements."
    },
    {
        "name": "Collection 455",
        "brand": "Prada",
        "year": 2006,
        "accords": [
            "Powdery",
            "Aromatic",
            "Citrus"
        ],
        "topNotes": [
            "Leather",
            "Sandalwood",
            "Vanilla"
        ],
        "middleNotes": [
            "Oud",
            "Apple",
            "Vetiver",
            "Patchouli"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Cardamom",
            "Cinnamon",
            "Orange"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated powdery and aromatic elements."
    },
    {
        "name": "Collection 456",
        "brand": "Kilian Paris",
        "year": 1998,
        "accords": [
            "Oud",
            "Citrus",
            "Spicy"
        ],
        "topNotes": [
            "Oud",
            "Musk",
            "Apple",
            "Amber"
        ],
        "middleNotes": [
            "Leather",
            "Musk",
            "Iris"
        ],
        "baseNotes": [
            "Cinnamon",
            "Incense",
            "Orange"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated oud and citrus elements."
    },
    {
        "name": "Collection 457",
        "brand": "Louis Vuitton",
        "year": 1998,
        "accords": [
            "Oud",
            "Woody",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Rose",
            "Lavender",
            "Pepper"
        ],
        "middleNotes": [
            "Orange",
            "Lemon",
            "Pepper"
        ],
        "baseNotes": [
            "Cardamom",
            "Vanilla",
            "Leather"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated oud and woody elements."
    },
    {
        "name": "Collection 458",
        "brand": "Tom Ford",
        "year": 2019,
        "accords": [
            "Musky",
            "Powdery",
            "Oud",
            "Floral"
        ],
        "topNotes": [
            "Pepper",
            "Rose",
            "Oakmoss",
            "Pineapple"
        ],
        "middleNotes": [
            "Saffron",
            "Incense",
            "Jasmine"
        ],
        "baseNotes": [
            "Orange",
            "Cinnamon",
            "Vanilla",
            "Sandalwood"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated musky and powdery elements."
    },
    {
        "name": "Collection 459",
        "brand": "Serge Lutens",
        "year": 2026,
        "accords": [
            "Fresh",
            "Sweet",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Patchouli",
            "Vanilla",
            "Incense",
            "Leather"
        ],
        "middleNotes": [
            "Incense",
            "Bergamot",
            "Patchouli",
            "Oud"
        ],
        "baseNotes": [
            "Pepper",
            "Cinnamon",
            "Orange"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated fresh and sweet elements."
    },
    {
        "name": "Collection 460",
        "brand": "Gucci",
        "year": 2025,
        "accords": [
            "Leather",
            "Citrus",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Jasmine",
            "Vetiver",
            "Orange",
            "Oud"
        ],
        "middleNotes": [
            "Bergamot",
            "Sandalwood",
            "Lavender",
            "Cedar"
        ],
        "baseNotes": [
            "Bergamot",
            "Amber",
            "Pineapple",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated leather and citrus elements."
    },
    {
        "name": "Collection 461",
        "brand": "Guerlain",
        "year": 1996,
        "accords": [
            "Powdery",
            "Woody",
            "Oud",
            "Leather",
            "Sweet"
        ],
        "topNotes": [
            "Cardamom",
            "Vetiver",
            "Oakmoss",
            "Amber"
        ],
        "middleNotes": [
            "Leather",
            "Incense",
            "Saffron"
        ],
        "baseNotes": [
            "Incense",
            "Oud",
            "Bergamot",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated powdery and woody elements."
    },
    {
        "name": "Collection 462",
        "brand": "Cartier",
        "year": 2021,
        "accords": [
            "Amber",
            "Citrus",
            "Woody"
        ],
        "topNotes": [
            "Leather",
            "Iris",
            "Lemon"
        ],
        "middleNotes": [
            "Pineapple",
            "Apple",
            "Saffron"
        ],
        "baseNotes": [
            "Sandalwood",
            "Cardamom",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated amber and citrus elements."
    },
    {
        "name": "Collection 463",
        "brand": "Guerlain",
        "year": 2005,
        "accords": [
            "Citrus",
            "Musky",
            "Powdery",
            "Aromatic",
            "Sweet"
        ],
        "topNotes": [
            "Leather",
            "Oakmoss",
            "Rose",
            "Vetiver"
        ],
        "middleNotes": [
            "Cinnamon",
            "Pepper",
            "Cedar"
        ],
        "baseNotes": [
            "Cinnamon",
            "Cedar",
            "Sandalwood",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 464",
        "brand": "Mancera",
        "year": 1993,
        "accords": [
            "Amber",
            "Fresh",
            "Leather",
            "Sweet",
            "Powdery"
        ],
        "topNotes": [
            "Musk",
            "Apple",
            "Oud"
        ],
        "middleNotes": [
            "Leather",
            "Cinnamon",
            "Musk"
        ],
        "baseNotes": [
            "Pineapple",
            "Cinnamon",
            "Iris"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated amber and fresh elements."
    },
    {
        "name": "Collection 465",
        "brand": "Guerlain",
        "year": 2014,
        "accords": [
            "Woody",
            "Aromatic",
            "Spicy",
            "Floral",
            "Amber"
        ],
        "topNotes": [
            "Pineapple",
            "Leather",
            "Cardamom",
            "Jasmine"
        ],
        "middleNotes": [
            "Oud",
            "Pepper",
            "Oakmoss",
            "Sandalwood"
        ],
        "baseNotes": [
            "Cinnamon",
            "Cedar",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated woody and aromatic elements."
    },
    {
        "name": "Collection 466",
        "brand": "Mancera",
        "year": 2009,
        "accords": [
            "Floral",
            "Sweet",
            "Fresh",
            "Woody"
        ],
        "topNotes": [
            "Lemon",
            "Musk",
            "Oakmoss",
            "Patchouli"
        ],
        "middleNotes": [
            "Sandalwood",
            "Saffron",
            "Tonka Bean"
        ],
        "baseNotes": [
            "Lemon",
            "Patchouli",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 467",
        "brand": "Kilian Paris",
        "year": 2025,
        "accords": [
            "Musky",
            "Oud",
            "Floral",
            "Sweet"
        ],
        "topNotes": [
            "Saffron",
            "Pepper",
            "Leather",
            "Lavender"
        ],
        "middleNotes": [
            "Incense",
            "Cardamom",
            "Cinnamon"
        ],
        "baseNotes": [
            "Amber",
            "Tonka Bean",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated musky and oud elements."
    },
    {
        "name": "Collection 468",
        "brand": "Initio",
        "year": 2006,
        "accords": [
            "Citrus",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Patchouli",
            "Cedar",
            "Orange",
            "Cardamom"
        ],
        "middleNotes": [
            "Saffron",
            "Oud",
            "Rose",
            "Orange"
        ],
        "baseNotes": [
            "Vetiver",
            "Leather",
            "Cinnamon",
            "Musk"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and fresh elements."
    },
    {
        "name": "Collection 469",
        "brand": "Bvlgari",
        "year": 2004,
        "accords": [
            "Fresh",
            "Powdery",
            "Musky",
            "Leather",
            "Citrus"
        ],
        "topNotes": [
            "Amber",
            "Musk",
            "Sandalwood",
            "Rose"
        ],
        "middleNotes": [
            "Iris",
            "Sandalwood",
            "Vetiver"
        ],
        "baseNotes": [
            "Tonka Bean",
            "Bergamot",
            "Oud"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated fresh and powdery elements."
    },
    {
        "name": "Collection 470",
        "brand": "Louis Vuitton",
        "year": 1998,
        "accords": [
            "Woody",
            "Leather",
            "Fresh"
        ],
        "topNotes": [
            "Cedar",
            "Patchouli",
            "Vanilla",
            "Leather"
        ],
        "middleNotes": [
            "Leather",
            "Cardamom",
            "Vetiver"
        ],
        "baseNotes": [
            "Jasmine",
            "Apple",
            "Saffron",
            "Pineapple"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated woody and leather elements."
    },
    {
        "name": "Collection 471",
        "brand": "Le Labo",
        "year": 2013,
        "accords": [
            "Amber",
            "Floral",
            "Sweet",
            "Powdery",
            "Leather"
        ],
        "topNotes": [
            "Leather",
            "Bergamot",
            "Patchouli",
            "Pepper"
        ],
        "middleNotes": [
            "Rose",
            "Orange",
            "Iris"
        ],
        "baseNotes": [
            "Incense",
            "Patchouli",
            "Oakmoss",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Le Labo, balancing sophisticated amber and floral elements."
    },
    {
        "name": "Collection 472",
        "brand": "Armani",
        "year": 2007,
        "accords": [
            "Musky",
            "Powdery",
            "Fresh",
            "Aromatic",
            "Spicy"
        ],
        "topNotes": [
            "Oakmoss",
            "Cinnamon",
            "Lavender",
            "Saffron"
        ],
        "middleNotes": [
            "Musk",
            "Leather",
            "Lavender"
        ],
        "baseNotes": [
            "Leather",
            "Bergamot",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated musky and powdery elements."
    },
    {
        "name": "Collection 473",
        "brand": "Chanel",
        "year": 2009,
        "accords": [
            "Oud",
            "Aromatic",
            "Floral",
            "Musky"
        ],
        "topNotes": [
            "Tonka Bean",
            "Lemon",
            "Oud",
            "Iris"
        ],
        "middleNotes": [
            "Musk",
            "Cinnamon",
            "Tonka Bean",
            "Apple"
        ],
        "baseNotes": [
            "Orange",
            "Pepper",
            "Oud"
        ],
        "description": "A high-quality fragrance from Chanel, balancing sophisticated oud and aromatic elements."
    },
    {
        "name": "Collection 474",
        "brand": "Hermès",
        "year": 2014,
        "accords": [
            "Floral",
            "Powdery",
            "Woody",
            "Leather"
        ],
        "topNotes": [
            "Vetiver",
            "Oud",
            "Lemon"
        ],
        "middleNotes": [
            "Apple",
            "Iris",
            "Orange",
            "Rose"
        ],
        "baseNotes": [
            "Jasmine",
            "Musk",
            "Incense"
        ],
        "description": "A high-quality fragrance from Hermès, balancing sophisticated floral and powdery elements."
    },
    {
        "name": "Collection 475",
        "brand": "Serge Lutens",
        "year": 2008,
        "accords": [
            "Leather",
            "Powdery",
            "Floral",
            "Oud",
            "Fresh"
        ],
        "topNotes": [
            "Iris",
            "Incense",
            "Cardamom",
            "Leather"
        ],
        "middleNotes": [
            "Lemon",
            "Amber",
            "Musk"
        ],
        "baseNotes": [
            "Amber",
            "Iris",
            "Incense"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Collection 476",
        "brand": "Guerlain",
        "year": 2003,
        "accords": [
            "Leather",
            "Spicy",
            "Powdery",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Orange",
            "Vetiver",
            "Rose"
        ],
        "middleNotes": [
            "Pineapple",
            "Patchouli",
            "Musk"
        ],
        "baseNotes": [
            "Patchouli",
            "Incense",
            "Orange"
        ],
        "description": "A high-quality fragrance from Guerlain, balancing sophisticated leather and spicy elements."
    },
    {
        "name": "Collection 477",
        "brand": "Bvlgari",
        "year": 2014,
        "accords": [
            "Powdery",
            "Citrus",
            "Aromatic",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Oud",
            "Lavender",
            "Pineapple"
        ],
        "middleNotes": [
            "Musk",
            "Amber",
            "Orange",
            "Vetiver"
        ],
        "baseNotes": [
            "Sandalwood",
            "Lemon",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 478",
        "brand": "Tom Ford",
        "year": 1993,
        "accords": [
            "Leather",
            "Spicy",
            "Aromatic"
        ],
        "topNotes": [
            "Lemon",
            "Leather",
            "Rose"
        ],
        "middleNotes": [
            "Apple",
            "Pineapple",
            "Oud",
            "Vanilla"
        ],
        "baseNotes": [
            "Cedar",
            "Orange",
            "Cinnamon",
            "Incense"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated leather and spicy elements."
    },
    {
        "name": "Collection 479",
        "brand": "Montale",
        "year": 2014,
        "accords": [
            "Leather",
            "Floral",
            "Sweet",
            "Musky",
            "Oud"
        ],
        "topNotes": [
            "Iris",
            "Pepper",
            "Lemon"
        ],
        "middleNotes": [
            "Leather",
            "Cardamom",
            "Pineapple"
        ],
        "baseNotes": [
            "Leather",
            "Pineapple",
            "Amber"
        ],
        "description": "A high-quality fragrance from Montale, balancing sophisticated leather and floral elements."
    },
    {
        "name": "Collection 480",
        "brand": "Xerjoff",
        "year": 2026,
        "accords": [
            "Floral",
            "Woody",
            "Citrus",
            "Powdery",
            "Musky"
        ],
        "topNotes": [
            "Vetiver",
            "Pineapple",
            "Jasmine"
        ],
        "middleNotes": [
            "Pepper",
            "Patchouli",
            "Rose",
            "Oud"
        ],
        "baseNotes": [
            "Oud",
            "Jasmine",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated floral and woody elements."
    },
    {
        "name": "Collection 481",
        "brand": "Bvlgari",
        "year": 2018,
        "accords": [
            "Powdery",
            "Amber",
            "Aromatic",
            "Musky"
        ],
        "topNotes": [
            "Leather",
            "Cedar",
            "Iris",
            "Saffron"
        ],
        "middleNotes": [
            "Bergamot",
            "Lemon",
            "Lavender"
        ],
        "baseNotes": [
            "Vetiver",
            "Rose",
            "Amber"
        ],
        "description": "A high-quality fragrance from Bvlgari, balancing sophisticated powdery and amber elements."
    },
    {
        "name": "Collection 482",
        "brand": "Cartier",
        "year": 2017,
        "accords": [
            "Sweet",
            "Oud",
            "Floral",
            "Spicy",
            "Citrus"
        ],
        "topNotes": [
            "Apple",
            "Oud",
            "Pepper"
        ],
        "middleNotes": [
            "Vetiver",
            "Cinnamon",
            "Musk"
        ],
        "baseNotes": [
            "Rose",
            "Pepper",
            "Amber",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Cartier, balancing sophisticated sweet and oud elements."
    },
    {
        "name": "Collection 483",
        "brand": "Mancera",
        "year": 2000,
        "accords": [
            "Sweet",
            "Spicy",
            "Citrus",
            "Fresh"
        ],
        "topNotes": [
            "Apple",
            "Oud",
            "Cardamom",
            "Incense"
        ],
        "middleNotes": [
            "Amber",
            "Cinnamon",
            "Incense"
        ],
        "baseNotes": [
            "Cinnamon",
            "Cardamom",
            "Sandalwood",
            "Incense"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated sweet and spicy elements."
    },
    {
        "name": "Collection 484",
        "brand": "Louis Vuitton",
        "year": 2010,
        "accords": [
            "Powdery",
            "Fresh",
            "Amber",
            "Woody",
            "Floral"
        ],
        "topNotes": [
            "Incense",
            "Saffron",
            "Leather",
            "Pepper"
        ],
        "middleNotes": [
            "Leather",
            "Oud",
            "Tonka Bean",
            "Pepper"
        ],
        "baseNotes": [
            "Jasmine",
            "Orange",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Louis Vuitton, balancing sophisticated powdery and fresh elements."
    },
    {
        "name": "Collection 485",
        "brand": "Armani",
        "year": 2014,
        "accords": [
            "Woody",
            "Powdery",
            "Floral",
            "Sweet"
        ],
        "topNotes": [
            "Amber",
            "Vetiver",
            "Jasmine",
            "Iris"
        ],
        "middleNotes": [
            "Jasmine",
            "Leather",
            "Cinnamon"
        ],
        "baseNotes": [
            "Rose",
            "Cinnamon",
            "Iris",
            "Cedar"
        ],
        "description": "A high-quality fragrance from Armani, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 486",
        "brand": "Creed",
        "year": 1992,
        "accords": [
            "Floral",
            "Citrus",
            "Spicy",
            "Amber"
        ],
        "topNotes": [
            "Vetiver",
            "Incense",
            "Iris",
            "Jasmine"
        ],
        "middleNotes": [
            "Apple",
            "Pineapple",
            "Oud"
        ],
        "baseNotes": [
            "Musk",
            "Oud",
            "Vetiver",
            "Patchouli"
        ],
        "description": "A high-quality fragrance from Creed, balancing sophisticated floral and citrus elements."
    },
    {
        "name": "Collection 487",
        "brand": "Xerjoff",
        "year": 1994,
        "accords": [
            "Floral",
            "Sweet",
            "Leather"
        ],
        "topNotes": [
            "Oud",
            "Bergamot",
            "Iris"
        ],
        "middleNotes": [
            "Musk",
            "Iris",
            "Leather",
            "Oud"
        ],
        "baseNotes": [
            "Orange",
            "Incense",
            "Amber"
        ],
        "description": "A high-quality fragrance from Xerjoff, balancing sophisticated floral and sweet elements."
    },
    {
        "name": "Collection 488",
        "brand": "Frederic Malle",
        "year": 1990,
        "accords": [
            "Fresh",
            "Citrus",
            "Amber",
            "Sweet",
            "Leather"
        ],
        "topNotes": [
            "Amber",
            "Musk",
            "Cardamom",
            "Iris"
        ],
        "middleNotes": [
            "Incense",
            "Leather",
            "Orange",
            "Rose"
        ],
        "baseNotes": [
            "Apple",
            "Orange",
            "Amber"
        ],
        "description": "A high-quality fragrance from Frederic Malle, balancing sophisticated fresh and citrus elements."
    },
    {
        "name": "Collection 489",
        "brand": "Initio",
        "year": 2017,
        "accords": [
            "Citrus",
            "Musky",
            "Spicy",
            "Powdery",
            "Oud"
        ],
        "topNotes": [
            "Jasmine",
            "Oakmoss",
            "Vetiver"
        ],
        "middleNotes": [
            "Orange",
            "Cinnamon",
            "Sandalwood"
        ],
        "baseNotes": [
            "Pepper",
            "Incense",
            "Bergamot"
        ],
        "description": "A high-quality fragrance from Initio, balancing sophisticated citrus and musky elements."
    },
    {
        "name": "Collection 490",
        "brand": "Gucci",
        "year": 2008,
        "accords": [
            "Aromatic",
            "Woody",
            "Amber"
        ],
        "topNotes": [
            "Jasmine",
            "Apple",
            "Sandalwood"
        ],
        "middleNotes": [
            "Orange",
            "Bergamot",
            "Cinnamon",
            "Pineapple"
        ],
        "baseNotes": [
            "Orange",
            "Apple",
            "Lavender",
            "Vetiver"
        ],
        "description": "A high-quality fragrance from Gucci, balancing sophisticated aromatic and woody elements."
    },
    {
        "name": "Collection 491",
        "brand": "Tom Ford",
        "year": 2000,
        "accords": [
            "Musky",
            "Citrus",
            "Amber"
        ],
        "topNotes": [
            "Apple",
            "Musk",
            "Vetiver"
        ],
        "middleNotes": [
            "Vetiver",
            "Orange",
            "Cardamom",
            "Apple"
        ],
        "baseNotes": [
            "Cedar",
            "Leather",
            "Apple",
            "Musk"
        ],
        "description": "A high-quality fragrance from Tom Ford, balancing sophisticated musky and citrus elements."
    },
    {
        "name": "Collection 492",
        "brand": "Givenchy",
        "year": 1997,
        "accords": [
            "Powdery",
            "Oud",
            "Woody",
            "Sweet"
        ],
        "topNotes": [
            "Musk",
            "Sandalwood",
            "Patchouli",
            "Saffron"
        ],
        "middleNotes": [
            "Pineapple",
            "Cinnamon",
            "Vanilla",
            "Patchouli"
        ],
        "baseNotes": [
            "Rose",
            "Incense",
            "Musk",
            "Oakmoss"
        ],
        "description": "A high-quality fragrance from Givenchy, balancing sophisticated powdery and oud elements."
    },
    {
        "name": "Collection 493",
        "brand": "Serge Lutens",
        "year": 1998,
        "accords": [
            "Leather",
            "Powdery",
            "Fresh",
            "Spicy"
        ],
        "topNotes": [
            "Bergamot",
            "Pineapple",
            "Jasmine"
        ],
        "middleNotes": [
            "Bergamot",
            "Vetiver",
            "Saffron",
            "Cinnamon"
        ],
        "baseNotes": [
            "Pepper",
            "Patchouli",
            "Bergamot",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Serge Lutens, balancing sophisticated leather and powdery elements."
    },
    {
        "name": "Collection 494",
        "brand": "Dior",
        "year": 2014,
        "accords": [
            "Powdery",
            "Citrus",
            "Musky",
            "Spicy",
            "Aromatic"
        ],
        "topNotes": [
            "Iris",
            "Amber",
            "Lavender"
        ],
        "middleNotes": [
            "Cedar",
            "Iris",
            "Saffron"
        ],
        "baseNotes": [
            "Orange",
            "Cardamom",
            "Musk",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Dior, balancing sophisticated powdery and citrus elements."
    },
    {
        "name": "Collection 495",
        "brand": "Mancera",
        "year": 2008,
        "accords": [
            "Fresh",
            "Citrus",
            "Aromatic",
            "Floral"
        ],
        "topNotes": [
            "Cardamom",
            "Tonka Bean",
            "Leather"
        ],
        "middleNotes": [
            "Iris",
            "Oakmoss",
            "Orange",
            "Pepper"
        ],
        "baseNotes": [
            "Saffron",
            "Incense",
            "Tonka Bean",
            "Leather"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated fresh and citrus elements."
    },
    {
        "name": "Collection 496",
        "brand": "Byredo",
        "year": 1999,
        "accords": [
            "Woody",
            "Powdery",
            "Leather",
            "Fresh",
            "Amber"
        ],
        "topNotes": [
            "Jasmine",
            "Pineapple",
            "Saffron",
            "Amber"
        ],
        "middleNotes": [
            "Saffron",
            "Pepper",
            "Orange",
            "Oud"
        ],
        "baseNotes": [
            "Lemon",
            "Sandalwood",
            "Iris",
            "Cinnamon"
        ],
        "description": "A high-quality fragrance from Byredo, balancing sophisticated woody and powdery elements."
    },
    {
        "name": "Collection 497",
        "brand": "Kilian Paris",
        "year": 2005,
        "accords": [
            "Citrus",
            "Floral",
            "Woody",
            "Sweet",
            "Spicy"
        ],
        "topNotes": [
            "Apple",
            "Leather",
            "Pepper",
            "Incense"
        ],
        "middleNotes": [
            "Saffron",
            "Cedar",
            "Pineapple",
            "Lavender"
        ],
        "baseNotes": [
            "Saffron",
            "Vetiver",
            "Oud",
            "Tonka Bean"
        ],
        "description": "A high-quality fragrance from Kilian Paris, balancing sophisticated citrus and floral elements."
    },
    {
        "name": "Collection 498",
        "brand": "Mancera",
        "year": 2007,
        "accords": [
            "Musky",
            "Oud",
            "Sweet",
            "Amber"
        ],
        "topNotes": [
            "Rose",
            "Patchouli",
            "Iris"
        ],
        "middleNotes": [
            "Amber",
            "Pepper",
            "Saffron"
        ],
        "baseNotes": [
            "Cardamom",
            "Lavender",
            "Jasmine"
        ],
        "description": "A high-quality fragrance from Mancera, balancing sophisticated musky and oud elements."
    },
    {
        "name": "Collection 499",
        "brand": "Diptyque",
        "year": 2025,
        "accords": [
            "Aromatic",
            "Powdery",
            "Fresh"
        ],
        "topNotes": [
            "Musk",
            "Saffron",
            "Orange"
        ],
        "middleNotes": [
            "Cinnamon",
            "Amber",
            "Oakmoss"
        ],
        "baseNotes": [
            "Oakmoss",
            "Lemon",
            "Apple",
            "Saffron"
        ],
        "description": "A high-quality fragrance from Diptyque, balancing sophisticated aromatic and powdery elements."
    },
    {
        "name": "Collection 500",
        "brand": "Prada",
        "year": 1993,
        "accords": [
            "Spicy",
            "Sweet",
            "Musky",
            "Leather",
            "Amber"
        ],
        "topNotes": [
            "Pineapple",
            "Pepper",
            "Oud",
            "Vetiver"
        ],
        "middleNotes": [
            "Jasmine",
            "Sandalwood",
            "Vanilla"
        ],
        "baseNotes": [
            "Leather",
            "Lavender",
            "Oud",
            "Iris"
        ],
        "description": "A high-quality fragrance from Prada, balancing sophisticated spicy and sweet elements."
    }
];

const grid = document.getElementById('perfumeGrid');
const searchInput = document.getElementById('perfumeSearch');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeButton = document.querySelector('.close-button');

function displayPerfumes(perfumes) {
    if (!grid) return;
    grid.innerHTML = '';
    perfumes.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <div class="brand">${p.brand}</div>
            <div class="accords">
                ${p.accords.map(a => `<span class="tag">${a}</span>`).join('')}
            </div>
        `;
        card.onclick = () => showModal(p);
        grid.appendChild(card);
    });
}

function showModal(p) {
    if (!modalDetails || !modal) return;
    modalDetails.innerHTML = `
        <div class="modal-header">
            <h2>${p.name}</h2>
            <p style="color: var(--text-dim); text-transform: uppercase; letter-spacing: 2px;">${p.brand} (${p.year})</p>
        </div>
        <div class="modal-section">
            <p style="font-size: 1.1rem; line-height: 1.8; font-weight: 300;">${p.description}</p>
        </div>
        <div class="modal-section">
            <h4>Top Notes</h4>
            <div class="note-list">
                ${p.topNotes.map(n => `<span class="tag">${n}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h4>Middle Notes</h4>
            <div class="note-list">
                ${p.middleNotes.map(n => `<span class="tag">${n}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h4>Base Notes</h4>
            <div class="note-list">
                ${p.baseNotes.map(n => `<span class="tag">${n}</span>`).join('')}
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

if (searchInput) {
    searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = perfumeData.filter(p => 
            p.name.toLowerCase().includes(term) ||
            p.brand.toLowerCase().includes(term) ||
            p.accords.some(a => a.toLowerCase().includes(term)) ||
            p.topNotes.some(n => n.toLowerCase().includes(term)) ||
            p.middleNotes.some(n => n.toLowerCase().includes(term)) ||
            p.baseNotes.some(n => n.toLowerCase().includes(term))
        );
        displayPerfumes(filtered);
    };
}

if (closeButton) {
    closeButton.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}

window.onclick = (e) => { 
    if (e.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

displayPerfumes(perfumeData);