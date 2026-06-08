const perfumeData = [
    {
        name: "Aventus",
        brand: "Creed",
        year: 2010,
        description: "A legendary powerhouse of blackcurrant, bergamot, and birch smoke. The definitive scent of success and modern masculine elegance.",
        accords: [
            { name: "Fruity", val: 95 },
            { name: "Woody", val: 85 },
            { name: "Smoky", val: 70 },
            { name: "Leather", val: 60 }
        ],
        top: "Pineapple, Bergamot, Blackcurrant, Apple",
        heart: "Birch, Patchouli, Moroccan Jasmine, Rose",
        base: "Musk, Oakmoss, Ambergris, Vanille"
    },
    {
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        year: 2015,
        description: "A poetic alchemy of jasmine and saffron, carrying the mineral notes of ambergris and woody tones of freshly cut cedar.",
        accords: [
            { name: "Amber", val: 100 },
            { name: "Woody", val: 90 },
            { name: "Sweet", val: 80 },
            { name: "Warm", val: 75 }
        ],
        top: "Saffron, Jasmine",
        heart: "Amberwood, Ambergris",
        base: "Fir Resin, Cedar"
    },
    {
        name: "Santal 33",
        brand: "Le Labo",
        year: 2011,
        description: "An iconic scent that defines a generation. A smokey wood alloy of sandalwood, cedarwood, cardamom, violet, and papyrus.",
        accords: [
            { name: "Woody", val: 100 },
            { name: "Powdery", val: 85 },
            { name: "Leather", val: 70 },
            { name: "Warm", val: 60 }
        ],
        top: "Cardamom, Iris, Violet",
        heart: "Sandalwood, Cedar",
        base: "Leather, Papyrus, Amber"
    },
    {
        name: "Portrait of a Lady",
        brand: "Frederic Malle",
        year: 2010,
        description: "A baroque, operatic rose. A modern classic containing an unprecedented dose of Turkish rose essence and patchouli.",
        accords: [
            { name: "Rose", val: 100 },
            { name: "Amber", val: 90 },
            { name: "Patchouli", val: 85 },
            { name: "Spicy", val: 75 }
        ],
        top: "Rose, Clove, Raspberry, Blackcurrant",
        heart: "Patchouli, Sandalwood, Frankincense",
        base: "Musk, Benzoin, Amber"
    },
    {
        name: "Angels' Share",
        brand: "Kilian Paris",
        year: 2020,
        description: "Inspired by the cognac-making heritage, this gourmand masterpiece smells of the 'angel's share'—the evaporation from oak barrels.",
        accords: [
            { name: "Sweet", val: 100 },
            { name: "Warm", val: 95 },
            { name: "Woody", val: 80 },
            { name: "Boozy", val: 75 }
        ],
        top: "Cognac",
        heart: "Cinnamon, Tonka Bean, Oak",
        base: "Praline, Vanilla, Sandalwood"
    },
    {
        name: "Oud Wood",
        brand: "Tom Ford",
        year: 2007,
        description: "A pioneering oud fragrance. Smoldering, rare, and exotic; blending rare oud wood, sandalwood, and Chinese pepper.",
        accords: [
            { name: "Woody", val: 100 },
            { name: "Oud", val: 90 },
            { name: "Warm", val: 80 },
            { name: "Spicy", val: 70 }
        ],
        top: "Sichuan Pepper, Cardamom, Rosewood",
        heart: "Oud, Sandalwood, Vetiver",
        base: "Tonka Bean, Vanilla, Amber"
    }
];

const grid = document.getElementById('perfumeGrid');
const searchInput = document.getElementById('perfumeSearch');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close-btn');

function renderGrid(perfumes) {
    grid.innerHTML = '';
    perfumes.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="house">${p.brand}</div>
            <h3>${p.name}</h3>
            <div class="accord-container">
                ${p.accords.slice(0, 3).map(a => `
                    <div class="accord-row">
                        <span class="accord-label">${a.name}</span>
                        <div class="accord-bar-bg">
                            <div class="accord-bar-fill" style="width: ${a.val}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        card.onclick = () => openModal(p);
        grid.appendChild(card);
    });
}

function openModal(p) {
    modalDetails.innerHTML = `
        <div class="brand-meta">${p.brand} &bull; ${p.year}</div>
        <h2>${p.name}</h2>
        <p class="description">${p.description}</p>
        <div class="pyramid-grid">
            <div class="pyramid-tier">
                <h4>TOP NOTES</h4>
                <p>${p.top}</p>
            </div>
            <div class="pyramid-tier">
                <h4>HEART NOTES</h4>
                <p>${p.heart}</p>
            </div>
            <div class="pyramid-tier">
                <h4>BASE NOTES</h4>
                <p>${p.base}</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = perfumeData.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.top.toLowerCase().includes(term) ||
        p.heart.toLowerCase().includes(term) ||
        p.base.toLowerCase().includes(term)
    );
    renderGrid(filtered);
});

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };

// Initial Load
renderGrid(perfumeData);