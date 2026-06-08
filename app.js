const perfumeData = [
    {
        name: "Angels' Share",
        brand: "Kilian",
        year: 2020,
        accords: ["Spicy", "Gourmand", "Woody", "Sweet"],
        topNotes: ["Cognac"],
        middleNotes: ["Cinnamon", "Tonka Bean", "Oak"],
        baseNotes: ["Praline", "Vanilla", "Sandalwood"],
        description: "A warm, boozy, and sweet masterpiece reminiscent of the finest cognac aged in oak barrels."
    },
    {
        name: "Un Jardin sur le Nil",
        brand: "Hermès",
        year: 2005,
        accords: ["Fresh", "Green", "Citrus", "Aromatic"],
        topNotes: ["Grapefruit", "Green Mango", "Tomato", "Carrot"],
        middleNotes: ["Lotus", "Bulrush", "Orange", "Hyacinth", "Peony"],
        baseNotes: ["Musk", "Iris", "Incense", "Labdanum", "Cinnamon"],
        description: "A refreshing stroll along the banks of the Nile, bursting with green mango and lotus."
    },
    {
        name: "Love, Don't Be Shy",
        brand: "Kilian",
        year: 2007,
        accords: ["Sweet", "Floral", "Gourmand", "White Floral"],
        topNotes: ["Neroli", "Bergamot", "Pink Pepper", "Coriander"],
        middleNotes: ["Orange Blossom", "Honeysuckle", "Jasmine", "Iris", "Rose"],
        baseNotes: ["Sugar", "Vanilla", "Caramel", "Musk", "Civet", "Labdanum"],
        description: "A sweet, marshmallowy cloud of orange blossom and vanilla. Pure indulgence."
    },
    {
        name: "5 - Floral, Amber, Sensual Musk",
        brand: "Rosendo Mateu",
        year: 2017,
        accords: ["Amber", "Musky", "Floral", "Powdery"],
        topNotes: ["Spices", "Exotic Floral Notes"],
        middleNotes: ["Carnation", "Lily-of-the-Valley"],
        baseNotes: ["Amber", "Musk", "Vanilla"],
        description: "An incredibly sensual and exotic blend that develops into a smooth, buttery musk skin-scent."
    },
    {
        name: "Oud Save the King",
        brand: "Atkinsons",
        year: 2013,
        accords: ["Oud", "Woody", "Powdery", "Sweet"],
        topNotes: ["Earl Grey Tea", "Bergamot"],
        middleNotes: ["Suede", "Orris"],
        baseNotes: ["Oud", "Sandalwood"],
        description: "A sophisticated blend of British elegance and exotic Oud, featuring a distinct Earl Grey top note."
    },
    {
        name: "Back to Black",
        brand: "Kilian",
        year: 2009,
        accords: ["Honey", "Sweet", "Tobacco", "Cherry"],
        topNotes: ["Honey", "Fruit Notes"],
        middleNotes: ["Tobacco", "Saffron", "Cardamom"],
        baseNotes: ["Vanilla", "Raspberry", "Amber"],
        description: "An aphrodisiac blend of honey and tobacco, smoky and mysterious."
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
    modalDetails.innerHTML = `
        <h2>${p.name}</h2>
        <p style="color: var(--text-dim)">${p.brand} (${p.year})</p>
        <p class="modal-section">${p.description}</p>
        
        <div class="modal-section">
            <h4>Top Notes</h4>
            <div class="note-list">${p.topNotes.join(', ')}</div>
        </div>
        <div class="modal-section">
            <h4>Middle Notes</h4>
            <div class="note-list">${p.middleNotes.join(', ')}</div>
        </div>
        <div class="modal-section">
            <h4>Base Notes</h4>
            <div class="note-list">${p.baseNotes.join(', ')}</div>
        </div>
    `;
    modal.style.display = 'block';
}

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

closeButton.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

// Initial Load
displayPerfumes(perfumeData);
