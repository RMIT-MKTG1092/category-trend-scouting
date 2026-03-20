import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { value: "beauty", label: "Health, Beauty and Personal Care" },
  { value: "petcare", label: "Pet Care and Animal Wellness" },
  { value: "food", label: "Food and Beverage" },
];

const ingredientsData = {
  beauty: [
    {
      name: "Sea Fennel Extract",
      benefit: "Hydration",
      subcategory: "Actives and Formulation",
      source: "Marine-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Passport by Euromonitor (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
        { label: "PubMed — marine extract research", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sea+fennel+extract+skin" }
      ]
    },
    {
      name: "Moringa Oil",
      benefit: "Oil Control",
      subcategory: "Actives and Formulation",
      source: "Plant-Derived",
      novelty: "Emerging",
      links: [
        { label: "MarketLine (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
        { label: "Google Scholar — moringa oil efficacy", url: "https://scholar.google.com/scholar?q=moringa+oil+skin+benefit" }
      ]
    },
    {
      name: "Glyceryl Glucoside",
      benefit: "Barrier Support",
      subcategory: "Actives and Formulation",
      source: "Biotech-Derived",
      novelty: "Saturated",
      links: [
        { label: "IBISWorld (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" }
      ]
    },
    {
      name: "Postbiotic Ferment Lysate",
      benefit: "Soothing",
      subcategory: "Actives and Formulation",
      source: "Fermentation",
      novelty: "Emerging",
      links: [
        { label: "Mintel Beauty Blog (free)", url: "https://www.mintel.com/blog/beauty-market-news" },
        { label: "PubMed — postbiotic skin", url: "https://pubmed.ncbi.nlm.nih.gov/?term=postbiotic+skincare" }
      ]
    },
    {
      name: "Bakuchiol",
      benefit: "Anti-aging",
      subcategory: "Actives and Formulation",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — bakuchiol retinol", url: "https://scholar.google.com/scholar?q=bakuchiol+retinol+alternative" },
        { label: "Cosmetics Design — ingredient news (free)", url: "https://www.cosmeticsdesign.com" }
      ]
    },
    {
      name: "Astaxanthin",
      benefit: "Antioxidant Protection",
      subcategory: "Actives and Formulation",
      source: "Marine-Derived",
      novelty: "Emerging",
      links: [
        { label: "PubMed — astaxanthin antioxidant", url: "https://pubmed.ncbi.nlm.nih.gov/?term=astaxanthin+skin+antioxidant" }
      ]
    },
    {
      name: "Niacinamide",
      benefit: "Brightening",
      subcategory: "Actives and Formulation",
      source: "Biotech-Derived",
      novelty: "Saturated",
      links: [
        { label: "Google Scholar — niacinamide skin brightening", url: "https://scholar.google.com/scholar?q=niacinamide+brightening+efficacy" }
      ]
    },
    {
      name: "Upcycled Grape Seed Extract",
      benefit: "Antioxidant Protection",
      subcategory: "Sustainability",
      source: "Upcycled Ingredient",
      novelty: "Emerging",
      links: [
        { label: "Ellen MacArthur Foundation — circular packaging (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Sustainable Brands — upcycled ingredients (free)", url: "https://sustainablebrands.com" }
      ]
    },
    {
      name: "Tremella Mushroom Extract",
      benefit: "Hydration",
      subcategory: "Actives and Formulation",
      source: "Fungal Extract",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — tremella hyaluronic", url: "https://scholar.google.com/scholar?q=tremella+mushroom+hyaluronic+acid" }
      ]
    }
  ],

  petcare: [
    {
      name: "L-Theanine",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — L-theanine anxiolytic animal (free)", url: "https://scholar.google.com/scholar?q=L-theanine+anxiolytic+animal" },
        { label: "Veterinary Evidence Journal (open access, free)", url: "https://veterinaryevidence.org" },
        { label: "PetMD — ingredient overview (free)", url: "https://www.petmd.com" }
      ]
    },
    {
      name: "Ashwagandha (Withania somnifera)",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Plant-Derived",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — ashwagandha adaptogen animal stress (free)", url: "https://scholar.google.com/scholar?q=ashwagandha+adaptogen+animal+stress" },
        { label: "APVMA — regulatory guidance Australia (free)", url: "https://www.apvma.gov.au" }
      ]
    },
    {
      name: "Casein-Derived Alpha-S1 Peptides",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Biotech-Derived",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — casein peptide anxiolytic (free)", url: "https://scholar.google.com/scholar?q=casein+peptide+anxiolytic+dog" },
        { label: "Veterinary Evidence Journal (open access, free)", url: "https://veterinaryevidence.org" }
      ]
    },
    {
      name: "Synthetic Dog-Appeasing Pheromone (DAP)",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Synthetic/Biotech",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — DAP pheromone dog anxiety (free)", url: "https://scholar.google.com/scholar?q=dog+appeasing+pheromone+DAP+evidence" },
        { label: "RSPCA Australia Knowledge Base (free)", url: "https://kb.rspca.org.au" }
      ]
    },
    {
      name: "Valerian Root Extract",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — valerian calming pets (free)", url: "https://scholar.google.com/scholar?q=valerian+root+calming+pets" },
        { label: "PetMD — natural calming ingredients (free)", url: "https://www.petmd.com" }
      ]
    },
    {
      name: "Puzzle Feeder and Slow-Release Dispensing",
      benefit: "Mental Stimulation and Enrichment",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Physical/Mechanical",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — canine cognitive enrichment evidence (free)", url: "https://scholar.google.com/scholar?q=canine+cognitive+enrichment+evidence" },
        { label: "IAABC — behaviour and enrichment resources (free)", url: "https://iaabc.org/resources" },
        { label: "RSPCA Australia — enrichment guidance (free)", url: "https://kb.rspca.org.au" }
      ]
    },
    {
      name: "Lick Mat and Sensory Enrichment Surfaces",
      benefit: "Mental Stimulation and Enrichment",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Physical/Mechanical",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — lick mat dog welfare (free)", url: "https://scholar.google.com/scholar?q=lick+mat+dog+welfare+enrichment" },
        { label: "RSPCA Australia Knowledge Base (free)", url: "https://kb.rspca.org.au" }
      ]
    },
    {
      name: "Modular Enrichment System",
      benefit: "Mental Stimulation and Enrichment",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Physical/Mechanical",
      novelty: "Emerging",
      links: [
        { label: "PSFK — consumer product innovation (free, register)", url: "https://www.psfk.com" },
        { label: "Google Scholar — modular design consumer adoption (free)", url: "https://scholar.google.com/scholar?q=modular+product+design+consumer+adoption" }
      ]
    },
    {
      name: "Omega-3 Fatty Acids (EPA and DHA)",
      benefit: "Daily Wellness",
      subcategory: "Wellness and Daily Supplements",
      source: "Marine-Derived",
      novelty: "Saturated",
      links: [
        { label: "Google Scholar — omega-3 dog health (free)", url: "https://scholar.google.com/scholar?q=omega-3+fatty+acids+dog+health" },
        { label: "Veterinary Evidence Journal (open access, free)", url: "https://veterinaryevidence.org" },
        { label: "APVMA — product regulatory guidance (free)", url: "https://www.apvma.gov.au" }
      ]
    },
    {
      name: "Probiotics (Lactobacillus and Bifidobacterium strains)",
      benefit: "Daily Wellness",
      subcategory: "Wellness and Daily Supplements",
      source: "Fermentation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — probiotics gut health dogs (free)", url: "https://scholar.google.com/scholar?q=probiotics+gut+health+dogs" },
        { label: "Veterinary Evidence Journal (open access, free)", url: "https://veterinaryevidence.org" }
      ]
    },
    {
      name: "Microencapsulation Delivery System",
      benefit: "Daily Wellness",
      subcategory: "Wellness and Daily Supplements",
      source: "Biotech-Derived",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — microencapsulation pet supplement (free)", url: "https://scholar.google.com/scholar?q=microencapsulation+supplement+bioavailability" },
        { label: "Lens.org — delivery mechanism patents (free)", url: "https://www.lens.org" },
        { label: "Google Patents — pet supplement delivery (free)", url: "https://patents.google.com/?q=pet+supplement+controlled+release" }
      ]
    },
    {
      name: "QR-Enabled Packaging and Digital Transparency",
      benefit: "Packaging and Format Innovation",
      subcategory: "Packaging and Format Innovation",
      source: "Digital/Connected",
      novelty: "Emerging",
      links: [
        { label: "Packaging Digest — smart packaging (free)", url: "https://www.packagingdigest.com" },
        { label: "Google Patents — QR packaging innovations (free)", url: "https://patents.google.com/?q=QR+code+packaging+pet+care" },
        { label: "Ellen MacArthur Foundation — circular packaging (free)", url: "https://www.ellenmacarthurfoundation.org" }
      ]
    },
    {
      name: "Refillable and Sustainable Pack Formats",
      benefit: "Packaging and Format Innovation",
      subcategory: "Packaging and Format Innovation",
      source: "Sustainable/Circular",
      novelty: "Emerging",
      links: [
        { label: "Packaging Europe — refillable formats (free)", url: "https://packagingeurope.com" },
        { label: "Ellen MacArthur Foundation — circular design guide (free)", url: "https://www.ellenmacarthurfoundation.org/resources/design/design-to-last" },
        { label: "GreenBiz — sustainable consumer goods (free)", url: "https://www.greenbiz.com" }
      ]
    },
    {
      name: "Subscription and Routine-Based Delivery Format",
      benefit: "Packaging and Format Innovation",
      subcategory: "Packaging and Format Innovation",
      source: "Commercial/Format",
      novelty: "Emerging",
      links: [
        { label: "PSFK — DTC innovation case studies (free, register)", url: "https://www.psfk.com" },
        { label: "TrendWatching — subscription consumer trends (free plan)", url: "https://www.trendwatching.com" }
      ]
    }
  ],

  food: [
    {
      name: "Monk Fruit Sweetener",
      benefit: "Sugar Reduction",
      subcategory: "Functional Ingredients",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — monk fruit sweetener (free)", url: "https://scholar.google.com/scholar?q=monk+fruit+sweetener+food+application" },
        { label: "FoodNavigator — ingredient news (free)", url: "https://www.foodnavigator.com" }
      ]
    },
    {
      name: "Postbiotic Ferment (Food Application)",
      benefit: "Gut Health",
      subcategory: "Functional Ingredients",
      source: "Fermentation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — postbiotic food health (free)", url: "https://scholar.google.com/scholar?q=postbiotic+food+gut+health" },
        { label: "The Spoon — food technology news (free)", url: "https://thespoon.tech" }
      ]
    },
    {
      name: "Pea Protein Isolate",
      benefit: "Plant-Based Protein",
      subcategory: "Functional Ingredients",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — pea protein food application (free)", url: "https://scholar.google.com/scholar?q=pea+protein+isolate+food+application" },
        { label: "IFT Food Technology Magazine (free)", url: "https://www.ift.org/food-technology-magazine" }
      ]
    },
    {
      name: "Compostable Flexible Packaging",
      benefit: "Sustainable Format",
      subcategory: "Sustainable Packaging",
      source: "Sustainable/Circular",
      novelty: "Emerging",
      links: [
        { label: "Packaging Europe — compostable packaging (free)", url: "https://packagingeurope.com" },
        { label: "Ellen MacArthur Foundation (free)", url: "https://www.ellenmacarthurfoundation.org" }
      ]
    }
  ]
};

// ─── FILTER OPTIONS ──────────────────────────────────────────────────────────

const filterOptions = {
  beauty: {
    benefits: ["Hydration", "Oil Control", "Barrier Support", "Soothing", "Brightening", "Anti-aging", "Antioxidant Protection"],
    sources: ["Marine-Derived", "Plant-Derived", "Biotech-Derived", "Fermentation", "Mineral-Based", "Fungal Extract", "Upcycled Ingredient"],
    subcategories: ["Actives and Formulation", "Sustainability"]
  },
  petcare: {
    benefits: ["Calming and Anxiety Relief", "Mental Stimulation and Enrichment", "Daily Wellness", "Packaging and Format Innovation"],
    sources: ["Plant-Derived", "Synthetic/Biotech", "Biotech-Derived", "Physical/Mechanical", "Marine-Derived", "Fermentation", "Digital/Connected", "Sustainable/Circular", "Commercial/Format"],
    subcategories: ["Calming and Anxiety Relief", "Enrichment and Mental Stimulation", "Wellness and Daily Supplements", "Packaging and Format Innovation"]
  },
  food: {
    benefits: ["Sugar Reduction", "Gut Health", "Plant-Based Protein", "Sustainable Format"],
    sources: ["Plant-Derived", "Fermentation", "Sustainable/Circular"],
    subcategories: ["Functional Ingredients", "Sustainable Packaging"]
  }
};

// ─── PUBLIC RESOURCES ────────────────────────────────────────────────────────

const publicResources = {
  beauty: [
    { label: "Cosmetics Design — ingredient and trend news (free)", url: "https://www.cosmeticsdesign.com" },
    { label: "Mintel Beauty Blog (free articles)", url: "https://www.mintel.com/blog/beauty-market-news" },
    { label: "Premium Beauty News (free articles)", url: "https://www.premiumbeautynews.com" },
    { label: "Global Cosmetic Industry — GCI Magazine (free)", url: "https://www.gcimagazine.com" },
    { label: "PubMed — cosmetic ingredient research (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=cosmetic+ingredient" },
    { label: "Google Scholar — personal care formulation (free)", url: "https://scholar.google.com/scholar?q=cosmetic+active+ingredient+clinical+evidence" },
    { label: "Passport by Euromonitor — Beauty (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "MarketLine — Beauty and Personal Care (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
    { label: "IBISWorld — Industry reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" }
  ],
  petcare: [
    { label: "RSPCA Australia Knowledge Base — animal behaviour and welfare (free)", url: "https://kb.rspca.org.au" },
    { label: "Veterinary Evidence Journal — open-access peer-reviewed research (free)", url: "https://veterinaryevidence.org" },
    { label: "PetMD — ingredient and health information (free)", url: "https://www.petmd.com" },
    { label: "APVMA — Australian pet product regulatory guidance (free)", url: "https://www.apvma.gov.au" },
    { label: "IAABC — animal behaviour and enrichment resources (free)", url: "https://iaabc.org/resources" },
    { label: "Google Scholar — pet supplement efficacy (free)", url: "https://scholar.google.com/scholar?q=pet+calming+supplement+efficacy" },
    { label: "Lens.org — open patent search (free)", url: "https://www.lens.org" },
    { label: "Google Patents — pet care innovations (free)", url: "https://patents.google.com/?q=pet+care+calming+supplement" },
    { label: "Packaging Digest — sustainable packaging news (free)", url: "https://www.packagingdigest.com" },
    { label: "TrendWatching — consumer trend reports (free plan, register)", url: "https://www.trendwatching.com" },
    { label: "PSFK — consumer innovation case studies (free, register)", url: "https://www.psfk.com" },
    { label: "RMIT Library A-Z Databases — Mintel, IBISWorld, Passport", url: "https://rmit.libguides.com/az.php" }
  ],
  food: [
    { label: "FoodNavigator — ingredient, science and regulation news (free)", url: "https://www.foodnavigator.com" },
    { label: "The Spoon — food technology and innovation (free)", url: "https://thespoon.tech" },
    { label: "IFT Food Technology Magazine (free)", url: "https://www.ift.org/food-technology-magazine" },
    { label: "Mintel Food and Drink Blog (free articles)", url: "https://www.mintel.com/blog/food-drink" },
    { label: "Packaging Europe — sustainable packaging formats (free)", url: "https://packagingeurope.com" },
    { label: "Google Scholar — functional food ingredient efficacy (free)", url: "https://scholar.google.com/scholar?q=functional+food+ingredient+efficacy" },
    { label: "RMIT Library A-Z Databases — Mintel, IBISWorld, Passport", url: "https://rmit.libguides.com/az.php" }
  ]
};

// ─── NOVELTY BADGE COLOURS ───────────────────────────────────────────────────

const noveltyColour = {
  "Saturated": "bg-gray-200 text-gray-700",
  "Mainstream": "bg-blue-100 text-blue-800",
  "Emerging": "bg-green-100 text-green-800",
};

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  const [category, setCategory] = useState("petcare");
  const [benefit, setBenefit] = useState("");
  const [source, setSource] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleCategoryChange = (val) => {
    setCategory(val);
    setBenefit("");
    setSource("");
    setSubcategory("");
  };

  const currentData = ingredientsData[category] || [];
  const currentFilters = filterOptions[category] || { benefits: [], sources: [], subcategories: [] };
  const currentResources = publicResources[category] || [];

  const filtered = currentData.filter((item) => {
    return (
      (benefit ? item.benefit === benefit : true) &&
      (source ? item.source === source : true) &&
      (subcategory ? item.subcategory === subcategory : true)
    );
  });

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-red-800">Category Trend Scouting Tool</h1>
        <p className="text-gray-600 mt-1">
          Explore ingredients, technologies, and formats by category. All linked sources are free or accessible through your RMIT student login.
        </p>
      </div>

      {/* Category selector */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <label className="block font-semibold mb-2 text-gray-700">Select your product category</label>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                category === cat.value
                  ? "bg-red-800 text-white border-red-800"
                  : "bg-white text-gray-700 border-gray-300 hover:border-red-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Sub-category</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="p-2 border border-gray-300 rounded text-sm min-w-48"
          >
            <option value="">All sub-categories</option>
            {currentFilters.subcategories.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Filter by benefit</label>
          <select
            value={benefit}
            onChange={(e) => setBenefit(e.target.value)}
            className="p-2 border border-gray-300 rounded text-sm min-w-48"
          >
            <option value="">All benefits</option>
            {currentFilters.benefits.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Filter by source</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="p-2 border border-gray-300 rounded text-sm min-w-48"
          >
            <option value="">All sources</option>
            {currentFilters.sources.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {(benefit || source || subcategory) && (
          <div className="flex items-end">
            <button
              onClick={() => { setBenefit(""); setSource(""); setSubcategory(""); }}
              className="p-2 text-sm text-red-700 border border-red-300 rounded hover:bg-red-50"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        Showing {filtered.length} of {currentData.length} entries
      </p>

      {/* Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div key={index} className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-semibold text-gray-900 leading-snug pr-2">{item.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${noveltyColour[item.novelty] || "bg-gray-100 text-gray-600"}`}>
                  {item.novelty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Benefit:</span> {item.benefit}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Source:</span> {item.source}</p>
              <p className="text-sm text-gray-600 mb-3"><span className="font-medium">Sub-category:</span> {item.subcategory}</p>
              <ul className="space-y-1">
                {item.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-red-700 hover:underline"
                    >
                      → {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">No entries match your current filters.</p>
          <p className="text-sm mt-1">Try clearing a filter or selecting a different sub-category.</p>
        </div>
      )}

      {/* Public resources section */}
      <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">
          Free research resources — {categories.find(c => c.value === category)?.label}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          All sources below are free or accessible through your RMIT student login at{" "}
          <a href="https://rmit.libguides.com/az.php" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
            RMIT Library A-Z Databases
          </a>.
        </p>
        <ul className="space-y-2">
          {currentResources.map((res, i) => (
            <li key={i}>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-700 hover:underline"
              >
                → {res.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
        © RMIT University 2026 — MKTG1092 Product Innovation and Management
      </p>

    </div>
  );
}

export default App;
