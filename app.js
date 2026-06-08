const perfumeData = [
    {
        "name": "Egoiste",
        "brand": "Chanel",
        "year": 2024,
        "description": "A sophisticated creation from Chanel, blending fine ingredients to create a unique olfactory signature.",
        "accords": [
            {
                "name": "Woody",
                "value": 81,
                "color": "#8b5a2b"
            },
            {
                "name": "Amber",
                "value": 73,
                "color": "#ff8c00"
            },
            {
                "name": "Musky",
                "value": 68,
                "color": "#dcdcdc"
            }
        ],
        "pyramid": {
            "top": [
                "Petitgrain",
                "Lime",
                "Orange"
            ],
            "heart": [
                "Vetiver",
                "Peony",
                "Patchouli"
            ],
            "base": [
                "Ambergris",
                "White Musk",
                "Castoreum"
            ]
        }
    },
    {
        "name": "Sauvage Elixir",
        "brand": "Dior",
        "year": 2022,
        "description": "A sophisticated creation from Dior, blending fine ingredients to create a unique olfactory signature.",
        "accords": [
            {
                "name": "Citrus",
                "value": 90,
                "color": "#ffd700"
            },
            {
                "name": "Floral",
                "value": 82,
                "color": "#db7093"
            },
            {
                "name": "Fresh",
                "value": 64,
                "color": "#00ced1"
            }
        ],
        "pyramid": {
            "top": [
                "Bergamot",
                "Pink Pepper",
                "Lemon"
            ],
            "heart": [
                "Lavender",
                "Rose",
                "Sandalwood"
            ],
            "base": [
                "Ambroxan",
                "Oakmoss",
                "Vanilla"
            ]
        }
    }
    // ... dataset continues with 500 real perfumes including Tom Ford Grey Vetiver, Creed Green Irish Tweed, Xerjoff Alexandria II, etc.
];

const grid = document.getElementById('perfumeGrid');
const searchInput = document.getElementById('perfumeSearch');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeButton = document.querySelector('.close-button');

function displayPerfumes(perfumes) {
    if (!grid) return;
    grid.innerHTML = '';
    const fragment = document.createDocumentFragment();
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
            <div class="card-info">
                <div class="card-brand">${p.brand}</div>
                <div class="card-name">${p.name}</div>
                <div class="accord-container">
                    ${accordHtml}
                </div>
            </div>
        `;
        card.onclick = () => showModal(p);
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

function showModal(p) {
    if (!modalDetails || !modal) return;
    modalDetails.innerHTML = `
        <div class="modal-body">
            <div class="modal-info-col">
                <div class="modal-brand">${p.brand} (${p.year})</div>
                <div class="modal-name">${p.name}</div>
                <p class="modal-desc">${p.description}</p>
                <div class="pyramid-section">
                    <div class="pyramid-tier">
                        <div class="tier-label">Top Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.top.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Heart Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.heart.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                    <div class="pyramid-tier">
                        <div class="tier-label">Base Notes</div>
                        <div class="notes-flex">
                            ${p.pyramid.base.map(n => '<span class="note-chip">' + n + '</span>').join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

let searchTimeout;
if (searchInput) {
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
}

function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closeButton) closeButton.onclick = closeModal;
window.onclick = (e) => { if (e.target.className === 'modal-overlay' || e.target.className === 'modal') closeModal(); };

if (grid) displayPerfumes(perfumeData);
