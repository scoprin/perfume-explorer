export const perfumes = [
  {
    id: "oud-wood",
    name: "Oud Wood",
    brand: "Tom Ford",
    year: 2007,
    description: "One of the most rare, precious, and expensive ingredients in a perfumer's arsenal, oud wood is often burned in incense-filled temples. Exotic rose wood and cardamom give way to a smoky blend of rare oud wood, sandalwood and vetiver.",
    accords: [
      { name: "Woody", val: 95 },
      { name: "Warm Spicy", val: 80 },
      { name: "Balsamic", val: 70 },
      { name: "Powdery", val: 50 }
    ],
    pyramid: {
      top: ["Rosewood", "Cardamom", "Chinese Pepper"],
      heart: ["Oud Wood", "Sandalwood", "Vetiver"],
      base: ["Tonka Bean", "Vanilla", "Amber"]
    },
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "aventus",
    name: "Aventus",
    brand: "Creed",
    year: 2010,
    description: "The exceptional Aventus was inspired by the dramatic life of a historic emperor, celebrating strength, power and success. Introduced in 2010 and crafted by the deft hand of Sixth Generation Master Perfumer Olivier Creed in collaboration with his son Erwin.",
    accords: [
      { name: "Fruity", val: 90 },
      { name: "Sweet", val: 80 },
      { name: "Leather", val: 75 },
      { name: "Woody", val: 65 }
    ],
    pyramid: {
      top: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
      heart: ["Birch", "Patchouli", "Moroccan Jasmine", "Rose"],
      base: ["Musk", "Oak Moss", "Ambergris", "Vanille"]
    },
    image: "https://images.unsplash.com/photo-1595425970377-c9703d74081b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "baccarat-rouge-540",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    year: 2015,
    description: "Baccarat Rouge 540 extrait de parfum augments the strength and radiance of the fragrance's amber woody floral aura. In this exalted version of a signature scent, jasmine blossoms and woody musks engage in an alchemy of the senses.",
    accords: [
      { name: "Amber", val: 95 },
      { name: "Almond", val: 85 },
      { name: "Animalic", val: 70 },
      { name: "Warm Spicy", val: 65 }
    ],
    pyramid: {
      top: ["Bitter Almond", "Saffron"],
      heart: ["Egyptian Jasmine", "Cedar"],
      base: ["Musk", "Woody Notes", "Ambergris"]
    },
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "interlude-man",
    name: "Interlude Man",
    brand: "Amouage",
    year: 2012,
    description: "Interlude Man is a spicy and woody fragrance that opens with zesty bergamot, oregano and pimento berry oil, perpetuating intervals of conflict which are countered by aromatic notes of amber, frankincense, opoponax, cistus and myrrh.",
    accords: [
      { name: "Balsamic", val: 95 },
      { name: "Smoky", val: 90 },
      { name: "Warm Spicy", val: 85 },
      { name: "Woody", val: 75 }
    ],
    pyramid: {
      top: ["Oregano", "Pepper", "Bergamot"],
      heart: ["Incense", "Opoponax", "Amber", "Labdanum"],
      base: ["Leather", "Oud", "Sandalwood", "Patchouli"]
    },
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "layton",
    name: "Layton",
    brand: "Parfums de Marly",
    year: 2016,
    description: "A highly addictive composition that infuses elegance and nobility into the festive and harmonious atmosphere of the Versailles court. Bergamot leads with its tangy passion, while lavender and geranium blend into a fresh note, chic and chivalrous all at once.",
    accords: [
      { name: "Warm Spicy", val: 90 },
      { name: "Vanilla", val: 85 },
      { name: "Fresh Spicy", val: 75 },
      { name: "Aromatic", val: 70 }
    ],
    pyramid: {
      top: ["Apple", "Lavender", "Mandarin Orange", "Bergamot"],
      heart: ["Geranium", "Violet", "Jasmine"],
      base: ["Vanilla", "Cardamom", "Sandalwood", "Pepper", "Patchouli", "Guaiac Wood"]
    },
    image: "https://images.unsplash.com/photo-1587463272361-566270fae41d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "no-5",
    name: "No. 5",
    brand: "Chanel",
    year: 1921,
    description: "In 1921, Gabrielle Chanel asked Ernest Beaux to create 'a woman's perfume with a woman's scent', rare and powerful. The perfumer presented her with a visionary composition that made unprecedented use of aldehydes.",
    accords: [
      { name: "Aldehydic", val: 95 },
      { name: "White Floral", val: 85 },
      { name: "Powdery", val: 80 },
      { name: "Woody", val: 65 }
    ],
    pyramid: {
      top: ["Aldehydes", "Ylang-Ylang", "Neroli", "Bergamot", "Lemon"],
      heart: ["Iris", "Jasmine", "Rose", "Orris Root", "Lily-of-the-Valley"],
      base: ["Civet", "Amber", "Sandalwood", "Musk", "Moss", "Vetiver", "Vanilla", "Patchouli"]
    },
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "black-orchid",
    name: "Black Orchid",
    brand: "Tom Ford",
    year: 2006,
    description: "A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice. Tom Ford's Black Orchid is both modern and timeless.",
    accords: [
      { name: "Warm Spicy", val: 95 },
      { name: "Earthy", val: 90 },
      { name: "Woody", val: 85 },
      { name: "Sweet", val: 75 }
    ],
    pyramid: {
      top: ["Truffle", "Gardenia", "Black Currant", "Ylang-Ylang", "Jasmine", "Bergamot", "Mandarin Orange", "Amalfi Lemon"],
      heart: ["Orchid", "Spices", "Gardenia", "Fruity Notes", "Ylang-Ylang", "Jasmine", "Lotus"],
      base: ["Mexican chocolate", "Patchouli", "Vanille", "Incense", "Amber", "Sandalwood", "Vetiver", "White Musk"]
    },
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "green-irish-tweed",
    name: "Green Irish Tweed",
    brand: "Creed",
    year: 1985,
    description: "A classic, as the old adage goes, never goes out of style. Like a perfectly tailored suit, Green Irish Tweed has been and continues to be worn by confident men at the peak of their field.",
    accords: [
      { name: "Citrus", val: 90 },
      { name: "Powdery", val: 85 },
      { name: "Ozone", val: 75 },
      { name: "Woody", val: 70 }
    ],
    pyramid: {
      top: ["Lemon Verbena", "Iris"],
      heart: ["Violet Leaf"],
      base: ["Ambergris", "Sandalwood"]
    },
    image: "https://images.unsplash.com/photo-1629853904944-d621f3583569?q=80&w=600&auto=format&fit=crop"
  }
];
