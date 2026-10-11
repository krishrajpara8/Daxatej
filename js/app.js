/**
 * Daxatej Global - International Import & Export Corporate Application
 * Headquarters: Rajkot, Gujarat (PIN: 360410), India
 * Trade Desk: daxxaglobal11@gmail.com
 *
 * Strict Compliance:
 * - Pure vanilla JavaScript (zero dependencies)
 * - Zero unicode emojis (Bespoke SVG line icons only)
 * - Robust error handling, form formatting & accessibility
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT MASTER DATA (Rigorous Pharmacopeia & Agro Standards)
  // =========================================================================
  const PRODUCTS_DATA = [
    {
      id: 'ssg',
      name: 'Sodium Starch Glycolate',
      latinOrAlt: 'Sodium Carboxymethyl Starch (Type A & B)',
      category: 'pharma',
      casOrHs: 'CAS: 9063-38-1',
      grade: 'USP-NF / BP / EP / IP',
      application: 'Superdisintegrant for Tablets & Hard Capsules',
      packaging: '25 kg Net Fiber Drums with Double Polyethylene Liners',
      image: 'images/pharma_excipients_powder.jpg',
      synopsis: 'Premier pharmaceutical superdisintegrant that absorbs water swiftly, expanding up to 300 times its dry volume to promote rapid drug dissolution without creating a viscous gel barrier.',
      specifications: [
        { label: 'Appearance', value: 'White or almost white, free-flowing powder' },
        { label: 'pH (2% w/v suspension)', value: '5.5 – 7.5 (Type A) / 3.0 – 5.0 (Type B)' },
        { label: 'Loss on Drying', value: 'NMT 10.0% (at 130°C for 90 min)' },
        { label: 'Sodium Chloride', value: 'NMT 7.0%' },
        { label: 'Sodium Glycolate', value: 'NMT 2.0%' },
        { label: 'Heavy Metals (as Pb)', value: 'NMT 20 ppm' },
        { label: 'Settling Volume', value: 'NLT 7.0 mL' }
      ]
    },
    {
      id: 'colloidal-silica',
      name: 'Colloidal Silicon Dioxide',
      latinOrAlt: 'Fumed Silica / Colloidal Silica (Aerosil Equivalent)',
      category: 'pharma',
      casOrHs: 'CAS: 112945-52-5',
      grade: 'USP/NF, BP, EP, Food Grade (E551)',
      application: 'Glidant, Anti-caking Agent & Moisture Scavenger',
      packaging: '10 kg / 20 kg Multi-wall Kraft Bags & Fiber Drums',
      image: 'images/colloidal_silica_glidant.jpg',
      synopsis: 'High-purity sub-micron fumed silica with an immense specific surface area (~200 m²/g). Eliminates friction between powder particles to achieve uninterrupted flow in high-speed rotary tablet presses.',
      specifications: [
        { label: 'Chemical Formula', value: 'SiO₂ (Anhydrous Colloidal Silica)' },
        { label: 'Assay (Ignited basis)', value: '99.0% to 100.5% SiO₂' },
        { label: 'Specific Surface Area (BET)', value: '175 – 225 m²/g' },
        { label: 'pH (4% aqueous dispersion)', value: '3.5 to 5.5' },
        { label: 'Loss on Drying (105°C, 2 hr)', value: 'NMT 2.5%' },
        { label: 'Loss on Ignition (1000°C)', value: 'NMT 2.0%' },
        { label: 'Tamped Density', value: 'approx. 40 to 60 g/L' },
        { label: 'Heavy Metals', value: 'NMT 25 ppm' }
      ]
    },
    {
      id: 'cumin-seeds',
      name: 'Cumin Seeds (Jeera)',
      latinOrAlt: 'Cuminum Cyminum L.',
      category: 'spices',
      casOrHs: 'HS Code: 09093129',
      grade: 'Singapore 99%, Europe 99.5%, Sortex Clean 99.8%',
      application: 'Culinary, Commercial Spice Blending, Essential Oil Extraction',
      packaging: '25 kg / 50 kg PP Woven / Multi-ply Paper / Jute Bags',
      image: 'images/cumin_seeds_jeera.jpg',
      synopsis: 'Cultivated in the esteemed Saurashtra and Unjha agro-belts of Gujarat. Machine-cleaned and Sortex-sorted with rich natural volatile oil content (>3.0%) and strict adherence to European pesticide limits.',
      specifications: [
        { label: 'Purity Level', value: '99.0%, 99.5%, or 99.8% Sortex Clean' },
        { label: 'Volatile Oil Content', value: 'Min 2.5% to 3.5% (v/w)' },
        { label: 'Moisture Content', value: 'NMT 8.5% to 9.0%' },
        { label: 'Total Ash', value: 'NMT 8.0%' },
        { label: 'Acid Insoluble Ash', value: 'NMT 1.2%' },
        { label: 'Salmonella & E. Coli', value: 'Absent in 25g' },
        { label: 'Pesticide Compliance', value: 'EU / ASTA compliant testing verified' }
      ]
    },
    {
      id: 'coriander-seeds',
      name: 'Coriander Seeds (Dhania)',
      latinOrAlt: 'Coriandrum Sativum L.',
      category: 'spices',
      casOrHs: 'HS Code: 09092110',
      grade: 'Eagle Quality, Scooter, Badami, Green Sortex',
      application: 'Food Processing, Curry Powders, Oleoresin Distillation',
      packaging: '20 kg / 25 kg / 40 kg PP Bags / Kraft Paper Sacks',
      image: 'images/indian_spices_export.jpg',
      synopsis: 'Directly sourced from Gondal and Rajkot commodity hubs. Pristine uniform golden globes boasting intense citrus notes, low extraneous matter (<1%), and excellent grinding yield.',
      specifications: [
        { label: 'Purity Grades', value: 'Eagle (98%), Scooter (99%), Sortex (99.5%)' },
        { label: 'Moisture Content', value: 'NMT 9.0%' },
        { label: 'Volatile Oil', value: 'Min 0.40% (v/w)' },
        { label: 'Extraneous Matter', value: 'NMT 1.0%' },
        { label: 'Splits / Broken Seeds', value: 'NMT 5.0% (Sortex Grade)' },
        { label: 'Fumigation', value: 'Phosphine / Methyl Bromide Certified' }
      ]
    },
    {
      id: 'turmeric',
      name: 'Turmeric (Finger & Powder)',
      latinOrAlt: 'Curcuma Longa',
      category: 'spices',
      casOrHs: 'HS Code: 09103020',
      grade: 'Salem / Nizamabad / Rajapore (3.0% to 5.0% Curcumin)',
      application: 'Natural Food Coloring, Nutraceuticals, Culinary Spices',
      packaging: '25 kg / 50 kg Poly-lined Woven Bags',
      image: 'images/indian_spices_export.jpg',
      synopsis: 'High-potency natural turmeric available in double-polished whole fingers or fine micronized mesh powder. Free from synthetic additives, Sudan dyes, and lead chromate.',
      specifications: [
        { label: 'Curcumin Content', value: '3.0% to 5.2% (HPLC tested)' },
        { label: 'Moisture Content', value: 'NMT 10.0%' },
        { label: 'Total Ash', value: 'NMT 7.0%' },
        { label: 'Sudan Dye I - IV', value: 'Absent / Below detection threshold' },
        { label: 'Lead & Heavy Metals', value: 'Within US-FDA and EU food limits' }
      ]
    },
    {
      id: 'red-chilli',
      name: 'Dried Red Chilli',
      latinOrAlt: 'Capsicum Annuum',
      category: 'spices',
      casOrHs: 'HS Code: 09042110',
      grade: 'Teja (S17), S4 Sannam, Byadgi, Kashmiri',
      application: 'Hot Seasonings, Crushed Pepper Flakes, Capsaicin Oleoresin',
      packaging: '10 kg / 25 kg Jute Bags / Export Corrugated Cartons',
      image: 'images/indian_spices_export.jpg',
      synopsis: 'Naturally sun-dried Indian whole red chillies available stemless or with stem. Varied profiles spanning intense heat (up to 75,000 SHU) to deep vibrant ASTA red color values.',
      specifications: [
        { label: 'Heat Index (SHU)', value: '25,000 to 75,000 SHU (variety dependent)' },
        { label: 'Color Value (ASTA)', value: '60 to 140+ ASTA units' },
        { label: 'Moisture', value: 'NMT 10.0%' },
        { label: 'Loose Seeds & Foreign Matter', value: 'NMT 2.0%' },
        { label: 'Aflatoxin (B1+B2+G1+G2)', value: 'NMT 10 ppb (EU Regulation compliant)' }
      ]
    },
    {
      id: 'mcc',
      name: 'Microcrystalline Cellulose (MCC)',
      latinOrAlt: 'Cellulose Gel (PH 101, PH 102, PH 112)',
      category: 'pharma',
      casOrHs: 'CAS: 9004-34-6',
      grade: 'USP-NF / BP / EP / IP',
      application: 'Direct Compression Binder, Diluent & Disintegrant',
      packaging: '20 kg / 25 kg Multi-ply Kraft Paper Bags with PE Liner',
      image: 'images/pharma_excipients_powder.jpg',
      synopsis: 'Purified, partially depolymerized alpha-cellulose providing outstanding binding capacity and compressibility in direct compression tablet formulations.',
      specifications: [
        { label: 'Identification', value: 'Passes Tests A and B' },
        { label: 'pH (aqueous supernatant)', value: '5.0 to 7.5' },
        { label: 'Loss on Drying', value: 'NMT 7.0% (PH 101/102) / NMT 1.5% (PH 112)' },
        { label: 'Bulk Density', value: '0.28 to 0.34 g/cm³' },
        { label: 'Ether-Soluble Substances', value: 'NMT 0.05%' },
        { label: 'Water-Soluble Substances', value: 'NMT 0.25%' }
      ]
    },
    {
      id: 'croscarmellose',
      name: 'Croscarmellous Sodium',
      latinOrAlt: 'Croscarmellose Sodium / Cross-linked Na CMC',
      category: 'pharma',
      casOrHs: 'CAS: 74811-65-7',
      grade: 'USP-NF / BP / EP / IP',
      application: 'Fast-Acting Tablet & Capsule Superdisintegrant',
      packaging: '25 kg Net Fiber Drums with Moisture-Proof LDPE Bag',
      image: 'images/pharma_excipients_powder.jpg',
      synopsis: 'Internally cross-linked sodium carboxymethylcellulose that delivers rapid wicking and capillary fluid uptake, ensuring prompt tablet breakdown even at modest 1% to 3% concentration levels.',
      specifications: [
        { label: 'Degree of Substitution', value: '0.60 to 0.85' },
        { label: 'pH (1% dispersion)', value: '5.0 to 7.0' },
        { label: 'Loss on Drying', value: 'NMT 10.0%' },
        { label: 'Sodium Chloride Content', value: 'NMT 0.5%' },
        { label: 'Settling Volume', value: '10.0 to 17.0 mL' }
      ]
    },
    {
      id: 'ready-mix-coating',
      name: 'Ready Mix. Tablet Coating Polymers',
      latinOrAlt: 'Complete Film Coating Systems (Moisture Barrier / Enteric / Immediate Release)',
      category: 'pharma',
      casOrHs: 'HS Code: 39123900',
      grade: 'USP-NF / BP / EP / IP Compliant',
      application: 'Pre-formulated Film Coating for Tablets, Pellets & Caplets',
      packaging: '20 kg / 25 kg Triple-Laminated Moisture-Proof Bags in Fiber Drums',
      image: 'images/ready_mix_coating_polymers.jpg',
      synopsis: 'State-of-the-art pre-blended dry ready-mix coating formulations combining film-forming polymers, plasticizers, anti-tacking glidants, and stable pigments. Reconstitutes in water within 45 minutes for high-speed spray application with zero logo bridging or edge chipping.',
      specifications: [
        { label: 'Coating System Type', value: 'Immediate Release, Moisture Barrier, Enteric & Flavored' },
        { label: 'Reconstitution Time', value: '35 – 45 minutes in purified water' },
        { label: 'Suspension Solids Content', value: '11% to 20% (w/w) operational solids' },
        { label: 'Film Tensile Strength', value: '> 8.5 MPa (High mechanical protection)' },
        { label: 'Color Uniformity (ΔE)', value: '< 0.8 across continuous production batches' },
        { label: 'Heavy Metals (as Pb)', value: 'NMT 20 ppm' },
        { label: 'Microbial Limits', value: 'TAMC < 1000 CFU/g, TYMC < 100 CFU/g, E. Coli Absent' }
      ]
    },
    {
      id: 'l-100',
      name: 'L-100',
      latinOrAlt: 'Methacrylic Acid Copolymer Type A (1:1)',
      category: 'pharma',
      casOrHs: 'CAS: 25086-15-1',
      grade: 'USP-NF (Type A) / Ph. Eur. (1:1) / IP',
      application: 'Enteric Film Coating Soluble at pH ≥ 6.0 (Mid-to-Lower Intestinal Release)',
      packaging: '10 kg / 20 kg Hermetic Fiber Drums with Double PE Liners',
      image: 'images/methacrylic_coating_polymers.jpg',
      synopsis: 'Solid high-purity anionic enteric copolymer of methacrylic acid and methyl methacrylate (1:1 ratio). Insoluble in gastric fluid; dissolves at pH 6.0 and above to target drug release precisely to the jejunum and ileum.',
      specifications: [
        { label: 'Chemical Name', value: 'Poly(methacrylic acid-co-methyl methacrylate) 1:1' },
        { label: 'Dissolution pH Threshold', value: 'Soluble at pH ≥ 6.0 (Mid-to-lower bowel release)' },
        { label: 'Assay (Methacrylic Acid)', value: '46.0% to 50.6% on dried substance' },
        { label: 'Physical Form', value: 'White free-flowing fine powder' },
        { label: 'Loss on Drying', value: 'NMT 5.0% (at 110°C for 6 hours)' },
        { label: 'Residue on Ignition', value: 'NMT 0.1%' },
        { label: 'Heavy Metals (as Pb)', value: 'NMT 20 ppm' },
        { label: 'Apparent Viscosity', value: '50 to 200 mPa·s' }
      ]
    },
    {
      id: 'l-100-55',
      name: 'L-100-55',
      latinOrAlt: 'Methacrylic Acid Copolymer Type C (1:1) Powder',
      category: 'pharma',
      casOrHs: 'CAS: 25212-88-8',
      grade: 'USP-NF (Type C) / Ph. Eur. (Type A) / IP',
      application: 'Enteric Film Coating Soluble at pH ≥ 5.5 (Duodenal & Upper Bowel Release)',
      packaging: '10 kg / 20 kg Moisture-Proof Fiber Drums with PE Liners',
      image: 'images/methacrylic_coating_polymers.jpg',
      synopsis: 'Redispersible dry powder form of methacrylic acid - ethyl acrylate copolymer (1:1). Dissolves rapidly at pH 5.5 and above in the duodenum. Delivers reliable gastro-resistance, acid protection, and ambient moisture shielding.',
      specifications: [
        { label: 'Chemical Name', value: 'Poly(methacrylic acid-co-ethyl acrylate) 1:1' },
        { label: 'Dissolution pH Threshold', value: 'Soluble at pH ≥ 5.5 (Duodenal targeted release)' },
        { label: 'Assay (Methacrylic Acid)', value: '46.0% to 50.6% on dried substance' },
        { label: 'Physical Form', value: 'White fine powder with faint characteristic odor' },
        { label: 'Loss on Drying', value: 'NMT 5.0% (at 105°C for 2 hours)' },
        { label: 'Residue on Ignition', value: 'NMT 0.1%' },
        { label: 'Heavy Metals (as Pb)', value: 'NMT 20 ppm' },
        { label: 'Redispersibility', value: 'Easily forms stable aqueous dispersion with plasticizers' }
      ]
    },
    {
      id: 'l30-d',
      name: 'L30 D',
      latinOrAlt: 'Methacrylic Acid Copolymer 30% Aqueous Dispersion (L 30 D-55)',
      category: 'pharma',
      casOrHs: 'CAS: 25212-88-8',
      grade: 'USP-NF (Type C Dispersion) / Ph. Eur. / IP',
      application: '100% Aqueous Enteric Coating Dispersion Soluble at pH ≥ 5.5',
      packaging: '25 kg HDPE Carboys / 200 kg Drums / 1000 kg IBC Containers',
      image: 'images/methacrylic_coating_polymers.jpg',
      synopsis: 'Ready-to-use 30% aqueous colloidal dispersion of methacrylic acid - ethyl acrylate copolymer (1:1). Eliminates flammable organic solvents, simplifies pan coating operations, and delivers reliable enteric protection soluble at pH ≥ 5.5.',
      specifications: [
        { label: 'Dry Polymer Solids Content', value: '28.5% to 31.5% (w/w)' },
        { label: 'Dissolution pH Threshold', value: 'Soluble at pH ≥ 5.5' },
        { label: 'Apparent Viscosity', value: 'NMT 15 mPa·s (at 20°C)' },
        { label: 'pH Value', value: '2.0 to 3.0' },
        { label: 'Coagulum Content', value: 'NMT 1000 mg / kg' },
        { label: 'Heavy Metals (as Pb)', value: 'NMT 20 ppm' },
        { label: 'Eco-Advantage', value: '100% Aqueous, Zero VOC, non-flammable processing' }
      ]
    },
    {
      id: 'magnesium-stearate',
      name: 'Magnesium Stearate',
      latinOrAlt: 'Octadecanoic Acid Magnesium Salt (Vegetable Origin)',
      category: 'pharma',
      casOrHs: 'CAS: 557-04-0',
      grade: 'USP-NF / BP / EP / IP (BSE/TSE-Free)',
      application: 'Boundary Lubricant & Anti-Adherent in Tableting',
      packaging: '20 kg / 25 kg Poly-lined Kraft Sacks',
      image: 'images/pharma_excipients_powder.jpg',
      synopsis: 'Fine, impalpable vegetable-derived magnesium stearate that prevents formulation sticking to die walls and punches during rotary tablet compression, offering uniform mold release.',
      specifications: [
        { label: 'Stearic Acid in Fatty Acids', value: 'NLT 40.0%' },
        { label: 'Stearic + Palmitic Content', value: 'NLT 90.0%' },
        { label: 'Magnesium Content', value: '4.0% to 5.0%' },
        { label: 'Loss on Drying', value: 'NMT 6.0%' },
        { label: 'Specific Surface Area', value: '2.5 to 4.5 m²/g' }
      ]
    },
    {
      id: 'industrial-chemicals',
      name: 'Specialty Industrial Chemicals',
      latinOrAlt: 'Caustic Soda Flakes, Purified Talc, Citric Acid Monohydrate',
      category: 'chemical',
      casOrHs: 'Multiple CAS Assigned',
      grade: 'Technical & Commercial Pure Grades',
      application: 'Textile Processing, Water Clarification, Detergents & Synthesis',
      packaging: '25 kg / 50 kg HDPE Bags / 200L Steel Drums / ISO Tank',
      image: 'images/industrial_chemicals_drums.jpg',
      synopsis: 'Strategic sourcing and containerized shipment of Gujarat chemical manufacturing products, packaged with batch-tested Certificates of Analysis and complete MSDS/GHS documentation.',
      specifications: [
        { label: 'Origin', value: 'Certified Gujarat Chemical Belts' },
        { label: 'Documentation', value: 'COA, Technical Data Sheet, MSDS' },
        { label: 'Shipping Mode', value: 'FCL 20ft / 40ft Sea Freight via Mundra' },
        { label: 'Quality Verification', value: 'Batch tested against international ISO parameters' }
      ]
    }
  ];

  // =========================================================================
  // 2. DOM INITIALIZATION & STATE
  // =========================================================================
  let currentCategory = 'all';
  let currentSearchQuery = '';

  const elements = {
    productGrid: document.getElementById('productGrid'),
    searchInput: document.getElementById('productSearchInput'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    techTabs: document.querySelectorAll('.tech-tab-btn'),
    techPanes: document.querySelectorAll('.tech-pane'),
    rfqForm: document.getElementById('rfqForm'),
    rfqProductSelect: document.getElementById('rfqProduct'),
    rfqEmailBtn: document.getElementById('rfqEmailBtn'),
    rfqWhatsAppBtn: document.getElementById('rfqWhatsAppBtn'),
    specModal: document.getElementById('specModal'),
    specModalContent: document.getElementById('specModalContent'),
    specModalClose: document.getElementById('specModalClose'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    navLinks: document.getElementById('navLinks'),
    navBackdrop: document.getElementById('navBackdrop'),
    toastNotice: document.getElementById('toastNotice'),
    toastText: document.getElementById('toastText')
  };

  // Populate RFQ product dropdown
  if (elements.rfqProductSelect) {
    PRODUCTS_DATA.forEach(prod => {
      const option = document.createElement('option');
      option.value = prod.name;
      option.textContent = prod.name;
      elements.rfqProductSelect.appendChild(option);
    });
  }

  // =========================================================================
  // 3. PRODUCT CATALOG RENDERING (Minimalist, Zero Overlapping)
  // =========================================================================
  function renderProductCatalog() {
    if (!elements.productGrid) return;

    const query = currentSearchQuery.toLowerCase().trim();
    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchesCategory = (currentCategory === 'all') || (prod.category === currentCategory);
      const searchableString = `${prod.name} ${prod.latinOrAlt} ${prod.casOrHs} ${prod.grade} ${prod.application} ${prod.synopsis}`.toLowerCase();
      const matchesSearch = !query || searchableString.includes(query);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      elements.productGrid.innerHTML = `
        <div style="grid-column: 1 / -1; background: var(--color-bg-surface); border: 1px dashed var(--color-border-light); border-radius: var(--radius-md); padding: 3rem 1.5rem; text-align: center;">
          <h4 style="font-size: 1.15rem; color: var(--color-text-main); margin-bottom: 0.5rem;">No products match your criteria</h4>
          <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">Try searching with an alternative term or switch the category filter to "All Products".</p>
          <button type="button" class="btn btn-outline btn-sm" id="resetCatalogSearchBtn">Reset Filter & Search</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetCatalogSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentSearchQuery = '';
          if (elements.searchInput) elements.searchInput.value = '';
          elements.filterButtons.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
          });
          renderProductCatalog();
        });
      }
      return;
    }

    elements.productGrid.innerHTML = filtered.map(item => {
      const categoryTagClass = item.category === 'spices' ? 'spices' : (item.category === 'chemical' ? 'chemical' : '');
      const categoryLabel = item.category === 'pharma' ? 'Pharma Excipient' : (item.category === 'spices' ? 'Gujarat Agro Spice' : 'Specialty Chemical');

      return `
        <article class="product-card" data-id="${item.id}">
          <div class="product-media">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>

          <div class="product-meta-strip">
            <span class="product-category-tag ${categoryTagClass}">${categoryLabel}</span>
            <span class="product-cas-tag">${item.casOrHs}</span>
          </div>

          <div class="product-body">
            <h3 class="product-title">${item.name}</h3>
            <p class="product-latin-name">${item.latinOrAlt}</p>

            <div class="product-specs-list">
              <div class="product-spec-row">
                <span class="spec-key">Standard:</span>
                <span class="spec-val">${item.grade}</span>
              </div>
              <div class="product-spec-row">
                <span class="spec-key">Application:</span>
                <span class="spec-val">${item.application}</span>
              </div>
              <div class="product-spec-row">
                <span class="spec-key">Packaging:</span>
                <span class="spec-val">${item.packaging}</span>
              </div>
            </div>

            <p class="product-synopsis">${item.synopsis}</p>
          </div>

          <div class="product-footer">
            <button type="button" class="btn btn-outline btn-sm view-spec-btn" data-id="${item.id}">
              Full Spec Sheet
            </button>
            <button type="button" class="btn btn-primary btn-sm quote-product-btn" data-name="${item.name}">
              Request Quote
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach event listeners to new card buttons
    elements.productGrid.querySelectorAll('.view-spec-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openSpecModal(id);
      });
    });

    elements.productGrid.querySelectorAll('.quote-product-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodName = e.currentTarget.getAttribute('data-name');
        if (elements.rfqProductSelect) {
          elements.rfqProductSelect.value = prodName;
        }
        const rfqSection = document.getElementById('rfq');
        if (rfqSection) {
          rfqSection.scrollIntoView({ behavior: 'smooth' });
          const buyerInput = document.getElementById('rfqBuyerName');
          if (buyerInput) setTimeout(() => buyerInput.focus(), 400);
        }
      });
    });
  }

  // =========================================================================
  // 4. SPECIFICATION MODAL (Readable, Print-ready parameters)
  // =========================================================================
  function openSpecModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product || !elements.specModal || !elements.specModalContent) return;

    let specsHtml = '';
    if (product.specifications && product.specifications.length > 0) {
      specsHtml = `
        <table class="spec-table" style="margin-top: 1rem;">
          <thead>
            <tr>
              <th>Physicochemical Parameter</th>
              <th>Monograph Standard</th>
            </tr>
          </thead>
          <tbody>
            ${product.specifications.map(s => `
              <tr>
                <td>${s.label}</td>
                <td>${s.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    elements.specModalContent.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="eyebrow" style="margin-bottom: 0.25rem;">Product Technical Sheet</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: 0.25rem;">${product.name}</h2>
        <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 0.75rem;">${product.latinOrAlt}</p>
        <p style="font-size: 0.925rem; color: var(--color-text-secondary); line-height: 1.6;">${product.synopsis}</p>
      </div>

      <div style="background: var(--color-bg-subtle); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle); margin-bottom: 1.25rem;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; font-size: 0.85rem;">
          <div><strong style="color: var(--color-text-main);">Grade / Standard:</strong> <br><span style="color: var(--color-text-secondary);">${product.grade}</span></div>
          <div><strong style="color: var(--color-text-main);">Registration / CAS:</strong> <br><span style="color: var(--color-text-secondary); font-family: var(--font-mono);">${product.casOrHs}</span></div>
          <div><strong style="color: var(--color-text-main);">Standard Packing:</strong> <br><span style="color: var(--color-text-secondary);">${product.packaging}</span></div>
          <div><strong style="color: var(--color-text-main);">Export Port:</strong> <br><span style="color: var(--color-text-secondary);">Mundra Port / Kandla (Gujarat)</span></div>
        </div>
      </div>

      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Laboratory Specifications & COA Limits</h4>
      ${specsHtml}

      <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap;">
        <button type="button" class="btn btn-outline btn-sm" id="modalCloseActionBtn">Close</button>
        <button type="button" class="btn btn-primary btn-sm" id="modalInquireActionBtn" data-name="${product.name}">Request COA & Sample Dispatch</button>
      </div>
    `;

    elements.specModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook internal modal buttons
    const closeBtn = document.getElementById('modalCloseActionBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeSpecModal);

    const inquireBtn = document.getElementById('modalInquireActionBtn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', (e) => {
        const prodName = e.currentTarget.getAttribute('data-name');
        closeSpecModal();
        if (elements.rfqProductSelect) elements.rfqProductSelect.value = prodName;
        const rfqSection = document.getElementById('rfq');
        if (rfqSection) {
          rfqSection.scrollIntoView({ behavior: 'smooth' });
          const buyerInput = document.getElementById('rfqBuyerName');
          if (buyerInput) setTimeout(() => buyerInput.focus(), 400);
        }
      });
    }
  }

  function closeSpecModal() {
    if (!elements.specModal) return;
    elements.specModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 5. TOAST NOTIFICATION UTILITY
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (!elements.toastNotice || !elements.toastText) return;
    elements.toastText.textContent = message;
    elements.toastNotice.classList.add('active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toastNotice.classList.remove('active');
    }, 3200);
  }

  // Copy email utility
  window.copyTradeEmail = function () {
    const email = 'daxxaglobal11@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast('Email copied to clipboard: ' + email))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  };

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Email copied: ' + text);
  }

  // =========================================================================
  // 6. COMMERCIAL RFQ & INQUIRY ENGINES
  // =========================================================================
  function collectRfqFormData() {
    const buyerName = document.getElementById('rfqBuyerName')?.value.trim() || '';
    const company = document.getElementById('rfqCompany')?.value.trim() || '';
    const email = document.getElementById('rfqEmail')?.value.trim() || '';
    const phone = document.getElementById('rfqPhone')?.value.trim() || '';
    const product = document.getElementById('rfqProduct')?.value.trim() || 'Sodium Starch Glycolate';
    const quantity = document.getElementById('rfqQuantity')?.value.trim() || 'FCL Container Trial';
    const incoterm = document.getElementById('rfqIncoterm')?.value.trim() || 'FOB Mundra Port';
    const destination = document.getElementById('rfqDestination')?.value.trim() || '';
    const notes = document.getElementById('rfqNotes')?.value.trim() || '';

    return { buyerName, company, email, phone, product, quantity, incoterm, destination, notes };
  }

  function validateRfqData(data) {
    if (!data.buyerName) {
      alert('Please enter your contact or representative name.');
      document.getElementById('rfqBuyerName')?.focus();
      return false;
    }
    if (!data.email || !data.email.includes('@')) {
      alert('Please provide a valid trade email address so our export desk can send your formal quotation.');
      document.getElementById('rfqEmail')?.focus();
      return false;
    }
    return true;
  }

  // A. Generate Formal Email RFQ
  function handleEmailRfq(e) {
    if (e) e.preventDefault();
    const data = collectRfqFormData();
    if (!validateRfqData(data)) return;

    const subject = encodeURIComponent(`Commercial Export RFQ: ${data.product} - ${data.company || data.buyerName}`);
    const bodyText = [
      `To: Daxatej Global - Export Trade Desk (Rajkot, Gujarat, India)`,
      `Email: daxxaglobal11@gmail.com`,
      `----------------------------------------------------------------------`,
      `COMMERCIAL EXPORT QUOTATION INQUIRY`,
      `----------------------------------------------------------------------`,
      `Buyer / Contact Name: ${data.buyerName}`,
      `Company / Entity:     ${data.company || 'Not Specified'}`,
      `Buyer Email:          ${data.email}`,
      `Buyer Phone / Tel:    ${data.phone || 'Not Specified'}`,
      ``,
      `Requested Product:    ${data.product}`,
      `Target Quantity:      ${data.quantity}`,
      `Preferred IncoTerm:   ${data.incoterm}`,
      `Discharge / Sea Port: ${data.destination || 'To be specified'}`,
      ``,
      `Special Technical / Monograph Requirements:`,
      data.notes || 'Please provide current FOB Mundra / CIF quote along with standard COA & Technical Data Sheet.',
      `----------------------------------------------------------------------`,
      `Sent via Daxatej Global Corporate Trade Portal`
    ].join('\n');

    const mailtoUrl = `mailto:daxxaglobal11@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
    showToast('Drafting official quotation email...');
  }

  // B. Generate Instant WhatsApp RFQ
  function handleWhatsAppRfq(e) {
    if (e) e.preventDefault();
    const data = collectRfqFormData();
    if (!validateRfqData(data)) return;

    const message = [
      `*EXPORT INQUIRY - DAXATEJ GLOBAL*`,
      `• *Buyer:* ${data.buyerName} (${data.company || 'Direct Importer'})`,
      `• *Email:* ${data.email}`,
      `• *Product:* ${data.product}`,
      `• *Quantity:* ${data.quantity}`,
      `• *IncoTerm:* ${data.incoterm}`,
      `• *Destination Port:* ${data.destination || 'Origin Quote Requested'}`,
      data.notes ? `• *Notes:* ${data.notes}` : ''
    ].filter(Boolean).join('\n');

    // Official WhatsApp dispatch link
    const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    showToast('Redirecting to WhatsApp inquiry desk...');
  }

  // =========================================================================
  // 7. EVENT LISTENERS SETUP
  // =========================================================================
  function initEventListeners() {
    // Search input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        renderProductCatalog();
      });
    }

    // Category filter tabs
    elements.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        elements.filterButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.getAttribute('data-filter') || 'all';
        renderProductCatalog();
      });
    });

    // Technical tabs
    elements.techTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-target');
        elements.techTabs.forEach(t => t.classList.remove('active'));
        elements.techPanes.forEach(p => p.classList.remove('active'));

        e.currentTarget.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    // Modal close triggers
    if (elements.specModalClose) {
      elements.specModalClose.addEventListener('click', closeSpecModal);
    }
    if (elements.specModal) {
      elements.specModal.addEventListener('click', (e) => {
        if (e.target === elements.specModal) closeSpecModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.specModal && elements.specModal.classList.contains('active')) {
        closeSpecModal();
      }
    });

    // RFQ form buttons
    if (elements.rfqEmailBtn) {
      elements.rfqEmailBtn.addEventListener('click', handleEmailRfq);
    }
    if (elements.rfqWhatsAppBtn) {
      elements.rfqWhatsAppBtn.addEventListener('click', handleWhatsAppRfq);
    }

    // Mobile navigation toggle with backdrop & body scroll lock
    if (elements.mobileMenuBtn && elements.navLinks) {
      function toggleMobileMenu(open) {
        const isOpen = typeof open === 'boolean' ? open : !elements.navLinks.classList.contains('open');
        elements.navLinks.classList.toggle('open', isOpen);
        if (elements.navBackdrop) elements.navBackdrop.classList.toggle('active', isOpen);
        elements.mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }

      elements.mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
      if (elements.navBackdrop) {
        elements.navBackdrop.addEventListener('click', () => toggleMobileMenu(false));
      }

      // Close mobile menu on nav link click
      elements.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggleMobileMenu(false);
        });
      });

      // Close mobile menu on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.navLinks.classList.contains('open')) {
          toggleMobileMenu(false);
        }
      });
    }

    // Active link highlighting on scroll
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { passive: true });
  }

  // =========================================================================
  // 8. BOOTSTRAP APPLICATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    renderProductCatalog();
    initEventListeners();
  });

})();
