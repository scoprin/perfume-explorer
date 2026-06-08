const perfumeData = [
    {
        name: "Aventus",
        brand: "Creed",
        year: 2010,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        description: "The most popular fragrance in the history of the House of Creed, Aventus is a fragrance for men - also adored by women - that celebrates strength, power and success.",
        accords: [
            { name: "fruity", value: 95, color: "var(--clr-fresh)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" },
            { name: "woody", value: 75, color: "var(--clr-woody)" },
            { name: "smoky", value: 70, color: "var(--clr-leather)" }
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
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
        description: "A poetic alchemy where the aerial notes of jasmine and the radiance of saffron carry ambergris facets and woody tones of freshly cut cedar.",
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
        image: "https://images.unsplash.com/photo-1557170334-a7c3c467b1f6?auto=format&fit=crop&q=80&w=800",
        description: "A modern take on an old-world gentleman's club. A smooth Oriental fragrance that opens with notes of tobacco leaf and aromatic spices.",
        accords: [
            { name: "sweet", value: 95, color: "var(--clr-sweet)" },
            { name: "tobacco", value: 90, color: "var(--clr-leather)" },
            { name: "vanilla", value: 85, color: "var(--clr-vanilla)" },
            { name: "spicy", value: 70, color: "var(--clr-spicy)" }
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
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
        description: "A radically fresh composition, dictated by a name that has the ring of a manifesto. Brutal and noble all at once.",
        accords: [
            { name: "fresh", value: 95, color: "var(--clr-fresh)" },
            { name: "citrus", value: 85, color: "var(--clr-citrus)" },
            { name: "spicy", value: 75, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Calabrian Bergamot", "Pepper"],
            heart: ["Sichuan Pepper", "Lavender", "Pink Pepper", "Vetiver", "Patchouli"],
            base: ["Ambroxan", "Cedar", "Labdanum"]
        }
    },
    {
        name: "Angels' Share",
        brand: "Kilian Paris",
        year: 2020,
        image: "https://images.unsplash.com/photo-1615634260167-c8cdede0ca4c?auto=format&fit=crop&q=80&w=800",
        description: "Inspired by the 'part des anges', this fragrance contains the essence of Cognac derived from the liquor to lend it a natural caramel color.",
        accords: [
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" },
            { name: "spicy", value: 80, color: "var(--clr-spicy)" },
            { name: "amber", value: 75, color: "var(--clr-amber)" }
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
        image: "https://images.unsplash.com/photo-1616164276412-258013e8d752?auto=format&fit=crop&q=80&w=800",
        description: "A full-bodied journey into the once-forbidden; a contrasting scent that reveals a tempting dichotomy of playful, candy-like gleam on the outside and luscious flesh on the inside.",
        accords: [
            { name: "sweet", value: 95, color: "var(--clr-sweet)" },
            { name: "fruity", value: 90, color: "var(--clr-floral)" },
            { name: "nutty", value: 70, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Sour Cherry", "Bitter Almond", "Liquor"],
            heart: ["Sour Cherry", "Plum", "Turkish Rose", "Jasmine Sambac"],
            base: ["Tonka Bean", "Vanilla", "Peru Balsam", "Benzoin", "Cinnamon", "Sandalwood", "Cedar", "Cloves"]
        }
    },
    {
        name: "Black Opium",
        brand: "YSL",
        year: 2014,
        image: "https://images.unsplash.com/photo-1610461821890-3c6a1e00b171?auto=format&fit=crop&q=80&w=800",
        description: "A seductive, intoxicating fragrance. The opening notes of adrenaline-rich coffee and the sweet sensuality of vanilla recline into the softness of white flowers.",
        accords: [
            { name: "coffee", value: 90, color: "var(--clr-leather)" },
            { name: "vanilla", value: 85, color: "var(--clr-vanilla)" },
            { name: "sweet", value: 80, color: "var(--clr-sweet)" },
            { name: "floral", value: 60, color: "var(--clr-floral)" }
        ],
        pyramid: {
            top: ["Pear", "Pink Pepper", "Orange Blossom"],
            heart: ["Coffee", "Jasmine", "Bitter Almond", "Licorice"],
            base: ["Vanilla", "Patchouli", "Cedar", "Cashmere Wood"]
        }
    },
    {
        name: "Bleu de Chanel",
        brand: "Chanel",
        year: 2010,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
        description: "A tribute to masculine freedom in an aromatic-woody fragrance with a captivating trail. A timeless, anti-conformist fragrance.",
        accords: [
            { name: "citrus", value: 90, color: "var(--clr-citrus)" },
            { name: "woody", value: 85, color: "var(--clr-woody)" },
            { name: "fresh", value: 80, color: "var(--clr-fresh)" },
            { name: "spicy", value: 70, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
            heart: ["Ginger", "Nutmeg", "Jasmine", "Iso E Super"],
            base: ["Incense", "Vetiver", "Cedar", "Sandalwood", "Patchouli", "Labdanum", "White Musk"]
        }
    },
    {
        name: "Santale 33",
        brand: "Le Labo",
        year: 2011,
        image: "https://images.unsplash.com/photo-1605615804078-fc734a74ef5e?auto=format&fit=crop&q=80&w=800",
        description: "A perfume that touches the sensual universality of this icon... that would intoxicate a man as much as a woman.",
        accords: [
            { name: "woody", value: 100, color: "var(--clr-woody)" },
            { name: "powdery", value: 80, color: "var(--clr-powdery)" },
            { name: "leather", value: 70, color: "var(--clr-leather)" }
        ],
        pyramid: {
            top: ["Sandalwood", "Virginia Cedar"],
            heart: ["Cardamom", "Violet", "Papyrus"],
            base: ["Leather", "Amber", "Iris"]
        }
    },
    {
        name: "Jazz Club",
        brand: "Maison Margiela",
        year: 2013,
        image: "https://images.unsplash.com/photo-1588405864443-f1118131e505?auto=format&fit=crop&q=80&w=800",
        description: "The tradition of generations has been handed down, immortalizing the atmosphere of a Brooklyn jazz club.",
        accords: [
            { name: "tobacco", value: 95, color: "var(--clr-leather)" },
            { name: "sweet", value: 85, color: "var(--clr-sweet)" },
            { name: "woody", value: 80, color: "var(--clr-woody)" },
            { name: "boozy", value: 75, color: "var(--clr-amber)" }
        ],
        pyramid: {
            top: ["Pink Pepper", "Neroli", "Lemon"],
            heart: ["Rum", "Clary Sage", "Java Vetiver Oil"],
            base: ["Tobacco Leaf", "Vanilla Bean", "Styrax"]
        }
    },
    {
        name: "Delina",
        brand: "Parfums de Marly",
        year: 2017,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
        description: "A floral explosion of Turkish rose, lily of the valley and peony, combined with the rounded tangy notes of lychee, rhubarb and bergamot.",
        accords: [
            { name: "floral", value: 100, color: "var(--clr-floral)" },
            { name: "fruity", value: 80, color: "var(--clr-sweet)" },
            { name: "fresh", value: 70, color: "var(--clr-fresh)" }
        ],
        pyramid: {
            top: ["Litchi", "Rhubarb", "Bergamot", "Nutmeg"],
            heart: ["Turkish Rose", "Peony", "Musk", "Petalia", "Vanilla"],
            base: ["Cashmeran", "Cedar", "Haitian Vetiver", "Incense"]
        }
    },
    {
        name: "Oud Wood",
        brand: "Tom Ford",
        year: 2007,
        image: "https://images.unsplash.com/photo-1615394441551-4935b546d882?auto=format&fit=crop&q=80&w=800",
        description: "One of the most rare, precious, and expensive ingredients in a perfumer's arsenal, oud wood is often burned in the incense-filled temples of Bhutan.",
        accords: [
            { name: "woody", value: 100, color: "var(--clr-woody)" },
            { name: "oud", value: 90, color: "var(--clr-leather)" },
            { name: "spicy", value: 70, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Rosewood", "Cardamom", "Chinese Pepper"],
            heart: ["Oud", "Sandalwood", "Vetiver"],
            base: ["Vanilla", "Amber", "Tonka Bean"]
        }
    },
    {
        name: "Another 13",
        brand: "Le Labo",
        year: 2010,
        image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
        description: "In 2010, Le Labo was commissioned by AnOther Magazine to work on an exclusive scent. This fragrance is a dirty, addictive musk.",
        accords: [
            { name: "musky", value: 100, color: "var(--clr-musky)" },
            { name: "amber", value: 80, color: "var(--clr-amber)" },
            { name: "woody", value: 60, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Pear", "Apple", "Citrus"],
            heart: ["Ambrette", "Amyl Salicylate", "Jasmine", "Moss"],
            base: ["Ambroxan", "Helvetolide", "Cetalox", "Ambrettolide"]
        }
    },
    {
        name: "Portrait of a Lady",
        brand: "Frederic Malle",
        year: 2010,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        description: "A new breed of oriental floral, this is a baroque, sumptuous and symphonic perfume that required hundreds of trials to balance its expressive formula.",
        accords: [
            { name: "spicy", value: 95, color: "var(--clr-spicy)" },
            { name: "floral", value: 90, color: "var(--clr-floral)" },
            { name: "amber", value: 85, color: "var(--clr-amber)" },
            { name: "woody", value: 80, color: "var(--clr-woody)" }
        ],
        pyramid: {
            top: ["Rose", "Clove", "Raspberry", "Black Currant", "Cinnamon"],
            heart: ["Patchouli", "Incense", "Sandalwood"],
            base: ["Musk", "Benzoin", "Amber"]
        }
    },
    {
        name: "The Noir 29",
        brand: "Le Labo",
        year: 2015,
        image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
        description: "The Noir 29 is an ode to the noble leaf and the craft that surrounds it. It combines depth and freshness, softness and strength.",
        accords: [
            { name: "woody", value: 90, color: "var(--clr-woody)" },
            { name: "fresh", value: 85, color: "var(--clr-fresh)" },
            { name: "spicy", value: 70, color: "var(--clr-spicy)" }
        ],
        pyramid: {
            top: ["Fig", "Bay Leaf", "Bergamot"],
            heart: ["Cedar", "Vetiver", "Musk"],
            base: ["Tobacco", "Hay"]
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
    perfumes.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const accordHtml = p.accords.map(a => `
            <div class="accord-row">
                <div class="accord-label">${a.name}</div>
                <div class="accord-bar-bg">
                    <div class="accord-bar-fill" style="width: ${a.value}%; background-color: ${a.color}"></div>
                </div>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${p.image}" class="card-image" alt="${p.name}">
            </div>
            <div class="card-info">
                <div class="card-brand">${p.brand}</div>
                <div class="card-name">${p.name}</div>
                <div class="accord-container">
                    ${accordHtml}
                </div>
            </div>
        `;
        card.onclick = () => showModal(p);
        grid.appendChild(card);
    });
}

function showModal(p) {
    modalDetails.innerHTML = `
        <div class="modal-body">
            <div class="modal-image-col">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="modal-info-col">
                <div class="modal-brand">${p.brand} (${p.year})</div>
                <div class="modal-name">${p.name}</div>
                <p class="modal-desc">${p.description}</p>
                
                <div class="pyramid-section">
                    <div class="pyramid-tier">
                        <div class="tier-label">Top Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.top.map(n => `<span class="note-chip">${n}</span>`).join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Heart Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.heart.map(n => `<span class="note-chip">${n}</span>`).join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Base Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.base.map(n => `<span class="note-chip">${n}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

searchInput.oninput = (e) => {
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
};

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeButton.onclick = closeModal;
window.onclick = (e) => { 
    if (e.target.className === 'modal-overlay') closeModal(); 
};

// Initial Load
displayPerfumes(perfumeData);
