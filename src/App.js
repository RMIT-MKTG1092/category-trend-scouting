import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { value: "food",       label: "Food and Beverage" },
  { value: "beauty",     label: "Health, Beauty and Personal Care" },
  { value: "petcare",    label: "Pet Care and Animal Wellness" },
  { value: "social",     label: "Social and Societal Challenges" },
  { value: "technology", label: "Technology Trends" },
];

// Field label overrides per category — keeps card language accurate across all types
const fieldLabels = {
  food:       { benefit: "Benefit",        source: "Source",           subcategory: "Sub-category"   },
  beauty:     { benefit: "Benefit",        source: "Source",           subcategory: "Sub-category"   },
  petcare:    { benefit: "Benefit",        source: "Source",           subcategory: "Sub-category"   },
  technology: { benefit: "Enables",        source: "Technology Type",  subcategory: "Domain"         },
  social:     { benefit: "Social Outcome", source: "Sector",           subcategory: "Challenge Area" },
};

const ingredientsData = {

  // ── BEAUTY ──────────────────────────────────────────────────────────────────
  beauty: [
    {
      name: "Sea Fennel Extract",
      benefit: "Hydration",
      subcategory: "Actives and Formulation",
      source: "Marine-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Passport by Euromonitor (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
        { label: "PubMed — marine extract research (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sea+fennel+extract+skin" }
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
        { label: "Google Scholar — moringa oil efficacy (free)", url: "https://scholar.google.com/scholar?q=moringa+oil+skin+benefit" }
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
        { label: "PubMed — postbiotic skin (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=postbiotic+skincare" }
      ]
    },
    {
      name: "Bakuchiol",
      benefit: "Anti-aging",
      subcategory: "Actives and Formulation",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — bakuchiol retinol alternative (free)", url: "https://scholar.google.com/scholar?q=bakuchiol+retinol+alternative" },
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
        { label: "PubMed — astaxanthin antioxidant (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=astaxanthin+skin+antioxidant" }
      ]
    },
    {
      name: "Niacinamide",
      benefit: "Brightening",
      subcategory: "Actives and Formulation",
      source: "Biotech-Derived",
      novelty: "Saturated",
      links: [
        { label: "Google Scholar — niacinamide skin brightening (free)", url: "https://scholar.google.com/scholar?q=niacinamide+brightening+efficacy" }
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
        { label: "Google Scholar — tremella hyaluronic (free)", url: "https://scholar.google.com/scholar?q=tremella+mushroom+hyaluronic+acid" }
      ]
    }
  ],

  // ── FOOD AND BEVERAGE ────────────────────────────────────────────────────────
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
        { label: "Google Scholar — postbiotic food gut health (free)", url: "https://scholar.google.com/scholar?q=postbiotic+food+gut+health" },
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
      source: "Sustainable / Circular",
      novelty: "Emerging",
      links: [
        { label: "Packaging Europe — compostable packaging (free)", url: "https://packagingeurope.com" },
        { label: "Ellen MacArthur Foundation (free)", url: "https://www.ellenmacarthurfoundation.org" }
      ]
    }
  ],

  // ── PET CARE ─────────────────────────────────────────────────────────────────
  petcare: [
    {
      name: "L-Theanine",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Plant-Derived",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — L-theanine anxiolytic animal (free)", url: "https://scholar.google.com/scholar?q=L-theanine+anxiolytic+animal" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
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
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" }
      ]
    },
    {
      name: "Synthetic Dog-Appeasing Pheromone (DAP)",
      benefit: "Calming and Anxiety Relief",
      subcategory: "Calming and Anxiety Relief",
      source: "Synthetic / Biotech",
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
      source: "Physical / Mechanical",
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
      source: "Physical / Mechanical",
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
      source: "Physical / Mechanical",
      novelty: "Emerging",
      links: [
        { label: "PSFK — consumer product innovation (free — register)", url: "https://www.psfk.com" },
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
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        { label: "APVMA — product regulatory guidance (free)", url: "https://www.apvma.gov.au" }
      ]
    },
    {
      name: "Probiotics (Lactobacillus and Bifidobacterium)",
      benefit: "Daily Wellness",
      subcategory: "Wellness and Daily Supplements",
      source: "Fermentation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — probiotics gut health dogs (free)", url: "https://scholar.google.com/scholar?q=probiotics+gut+health+dogs" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" }
      ]
    },
    {
      name: "Microencapsulation Delivery System",
      benefit: "Daily Wellness",
      subcategory: "Wellness and Daily Supplements",
      source: "Biotech-Derived",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — microencapsulation supplement bioavailability (free)", url: "https://scholar.google.com/scholar?q=microencapsulation+supplement+bioavailability" },
        { label: "Lens.org — delivery mechanism patents (free)", url: "https://www.lens.org" },
        { label: "Google Patents — pet supplement delivery (free)", url: "https://patents.google.com/?q=pet+supplement+controlled+release" }
      ]
    },
    {
      name: "QR-Enabled Packaging and Digital Transparency",
      benefit: "Packaging and Format Innovation",
      subcategory: "Packaging and Format Innovation",
      source: "Digital / Connected",
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
      source: "Sustainable / Circular",
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
      source: "Commercial / Format",
      novelty: "Emerging",
      links: [
        { label: "PSFK — DTC innovation case studies (free — register)", url: "https://www.psfk.com" },
        { label: "TrendWatching — subscription consumer trends (free plan)", url: "https://www.trendwatching.com" }
      ]
    }
  ],

  // ── SOCIAL AND SOCIETAL CHALLENGES ───────────────────────────────────────────
  social: [
    {
      name: "Homelessness and Housing Insecurity",
      benefit: "Safe and Stable Housing Access",
      subcategory: "Community and Housing",
      source: "Social / Government",
      novelty: "Mainstream",
      links: [
        { label: "AHURI — Australian housing research (free)", url: "https://www.ahuri.edu.au" },
        { label: "Homelessness Australia — policy and data (free)", url: "https://www.homelessnessaustralia.org.au" },
        { label: "Google Scholar — homelessness intervention evidence (free)", url: "https://scholar.google.com/scholar?q=homelessness+intervention+evidence+Australia" }
      ]
    },
    {
      name: "Food Insecurity and Hunger",
      benefit: "Reliable Nutrition Access",
      subcategory: "Food and Economic Security",
      source: "Social / Environmental",
      novelty: "Mainstream",
      links: [
        { label: "Foodbank Australia — hunger report (free)", url: "https://www.foodbank.org.au/research" },
        { label: "FAO — global food security data (free)", url: "https://www.fao.org/hunger/en" },
        { label: "Google Scholar — food insecurity consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=food+insecurity+consumer+behaviour" }
      ]
    },
    {
      name: "Mental Health and Psychological Wellbeing",
      benefit: "Improved Mental Health Outcomes",
      subcategory: "Health and Wellbeing",
      source: "Health and Social",
      novelty: "Mainstream",
      links: [
        { label: "AIHW — mental health in Australia (free)", url: "https://www.aihw.gov.au/mental-health" },
        { label: "Black Dog Institute — research and data (free)", url: "https://www.blackdoginstitute.org.au/research" },
        { label: "Beyond Blue — consumer insight reports (free)", url: "https://www.beyondblue.org.au" }
      ]
    },
    {
      name: "Ageing Population and Aged Care",
      benefit: "Quality of Life for Older Adults",
      subcategory: "Health and Wellbeing",
      source: "Demographic / Policy",
      novelty: "Mainstream",
      links: [
        { label: "AIHW — aged care data and statistics (free)", url: "https://www.aihw.gov.au/aged-care" },
        { label: "Australian Government — aged care reform (free)", url: "https://www.agedcare.gov.au" },
        { label: "Google Scholar — innovation ageing population (free)", url: "https://scholar.google.com/scholar?q=product+innovation+ageing+population" }
      ]
    },
    {
      name: "Loneliness and Social Isolation",
      benefit: "Social Connection and Belonging",
      subcategory: "Health and Wellbeing",
      source: "Social / Community",
      novelty: "Emerging",
      links: [
        { label: "Ending Loneliness Together — Australian research (free)", url: "https://endingloneliness.com.au" },
        { label: "AIHW — social isolation and loneliness (free)", url: "https://www.aihw.gov.au" },
        { label: "Google Scholar — loneliness intervention product design (free)", url: "https://scholar.google.com/scholar?q=loneliness+social+isolation+product+design+intervention" }
      ]
    },
    {
      name: "Digital Inclusion and Literacy",
      benefit: "Equitable Access to Technology",
      subcategory: "Inclusion and Access",
      source: "Social / Technology",
      novelty: "Emerging",
      links: [
        { label: "Australian Digital Inclusion Alliance — ADII report (free)", url: "https://www.digitalinclusionindex.org.au" },
        { label: "Google Scholar — digital divide access equity (free)", url: "https://scholar.google.com/scholar?q=digital+divide+inclusion+equity+Australia" }
      ]
    },
    {
      name: "Disability and Accessibility",
      benefit: "Inclusive Product and Service Design",
      subcategory: "Inclusion and Access",
      source: "Social / Regulatory",
      novelty: "Mainstream",
      links: [
        { label: "Australian Human Rights Commission — disability standards (free)", url: "https://humanrights.gov.au/our-work/disability-rights" },
        { label: "W3C — web accessibility guidelines (free)", url: "https://www.w3.org/WAI" },
        { label: "Google Scholar — universal design inclusive product (free)", url: "https://scholar.google.com/scholar?q=universal+design+inclusive+product+development" }
      ]
    },
    {
      name: "Youth Disengagement and Unemployment",
      benefit: "Economic Participation and Purpose",
      subcategory: "Food and Economic Security",
      source: "Social / Economic",
      novelty: "Emerging",
      links: [
        { label: "Foundation for Young Australians — FYA research (free)", url: "https://www.fya.org.au/research" },
        { label: "ABS — youth employment statistics (free)", url: "https://www.abs.gov.au/statistics/labour/employment-and-unemployment" },
        { label: "Google Scholar — youth unemployment intervention (free)", url: "https://scholar.google.com/scholar?q=youth+unemployment+intervention+Australia" }
      ]
    },
    {
      name: "Climate Anxiety and Environmental Stress",
      benefit: "Psychological Resilience",
      subcategory: "Environmental and Climate",
      source: "Environmental / Social",
      novelty: "Emerging",
      links: [
        { label: "APA — climate change and mental health (free)", url: "https://www.apa.org/news/press/releases/stress/2021/climate-change" },
        { label: "Google Scholar — eco-anxiety consumer response (free)", url: "https://scholar.google.com/scholar?q=eco-anxiety+climate+change+consumer+behaviour" },
        { label: "CSIRO — climate futures Australia (free)", url: "https://www.csiro.au/en/research/environmental-impacts/climate-change" }
      ]
    },
    {
      name: "Waste and Circular Economy Transition",
      benefit: "Reduced Waste and Resource Efficiency",
      subcategory: "Environmental and Climate",
      source: "Environmental / Policy",
      novelty: "Mainstream",
      links: [
        { label: "Ellen MacArthur Foundation — circular economy (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Australian Government — National Waste Policy (free)", url: "https://www.dcceew.gov.au/environment/protection/waste/national-waste-policy" },
        { label: "GreenBiz — circular economy business cases (free)", url: "https://www.greenbiz.com" }
      ]
    }
  ],

  // ── TECHNOLOGY TRENDS ────────────────────────────────────────────────────────
  technology: [
    {
      name: "Artificial Intelligence for Personalisation",
      benefit: "Tailored Consumer Experiences at Scale",
      subcategory: "Artificial Intelligence and Data",
      source: "Artificial Intelligence",
      novelty: "Emerging",
      links: [
        { label: "MIT Technology Review — AI in consumer products (free)", url: "https://www.technologyreview.com" },
        { label: "Google Scholar — AI personalisation consumer products (free)", url: "https://scholar.google.com/scholar?q=artificial+intelligence+personalisation+consumer+products" },
        { label: "Harvard Business Review — AI product strategy (free articles)", url: "https://hbr.org" }
      ]
    },
    {
      name: "Machine Learning for Demand Forecasting",
      benefit: "Supply Chain Efficiency and Waste Reduction",
      subcategory: "Artificial Intelligence and Data",
      source: "Artificial Intelligence",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — machine learning demand forecasting (free)", url: "https://scholar.google.com/scholar?q=machine+learning+demand+forecasting+supply+chain" },
        { label: "McKinsey — AI in supply chain (free articles)", url: "https://www.mckinsey.com/capabilities/operations/our-insights" }
      ]
    },
    {
      name: "Blockchain for Supply Chain Transparency",
      benefit: "Consumer Trust and Traceability",
      subcategory: "Artificial Intelligence and Data",
      source: "Blockchain / Distributed Ledger",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — blockchain food traceability (free)", url: "https://scholar.google.com/scholar?q=blockchain+supply+chain+transparency+consumer+trust" },
        { label: "Ellen MacArthur Foundation — transparency and circularity (free)", url: "https://www.ellenmacarthurfoundation.org" }
      ]
    },
    {
      name: "Internet of Things (IoT) Connected Packaging",
      benefit: "Consumer Engagement Beyond Purchase",
      subcategory: "Connected Devices and IoT",
      source: "Connected Technology",
      novelty: "Emerging",
      links: [
        { label: "Packaging Digest — smart and connected packaging (free)", url: "https://www.packagingdigest.com" },
        { label: "IEEE Spectrum — IoT applications (free)", url: "https://spectrum.ieee.org" },
        { label: "Google Scholar — IoT packaging consumer engagement (free)", url: "https://scholar.google.com/scholar?q=IoT+smart+packaging+consumer+engagement" }
      ]
    },
    {
      name: "Wearable Biosensors for Health Monitoring",
      benefit: "Real-Time Health and Behavioural Insight",
      subcategory: "Connected Devices and IoT",
      source: "Wearable Technology",
      novelty: "Emerging",
      links: [
        { label: "PubMed — wearable biosensor health monitoring (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=wearable+biosensor+health+monitoring" },
        { label: "IEEE Spectrum — wearable technology (free)", url: "https://spectrum.ieee.org" }
      ]
    },
    {
      name: "Augmented Reality for Consumer Decision-Making",
      benefit: "Informed Purchase Confidence",
      subcategory: "Connected Devices and IoT",
      source: "Augmented Reality",
      novelty: "Emerging",
      links: [
        { label: "PSFK — AR in retail and consumer goods (free — register)", url: "https://www.psfk.com" },
        { label: "Google Scholar — augmented reality retail consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=augmented+reality+retail+consumer+decision" }
      ]
    },
    {
      name: "Synthetic Biology and Precision Fermentation",
      benefit: "Sustainable and Scalable Ingredient Production",
      subcategory: "Biotechnology and Science",
      source: "Biotechnology",
      novelty: "Emerging",
      links: [
        { label: "SynBioBeta — synthetic biology news (free)", url: "https://synbiobeta.com" },
        { label: "Google Scholar — precision fermentation food ingredients (free)", url: "https://scholar.google.com/scholar?q=precision+fermentation+food+ingredient+production" },
        { label: "The Spoon — food and biotech innovation (free)", url: "https://thespoon.tech" }
      ]
    },
    {
      name: "Biodegradable and Compostable Materials",
      benefit: "Reduced End-of-Life Environmental Impact",
      subcategory: "Sustainable Technology",
      source: "Materials Science",
      novelty: "Emerging",
      links: [
        { label: "Packaging Europe — compostable materials (free)", url: "https://packagingeurope.com" },
        { label: "Ellen MacArthur Foundation — material innovation (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Google Scholar — biodegradable packaging consumer acceptance (free)", url: "https://scholar.google.com/scholar?q=biodegradable+packaging+consumer+acceptance" }
      ]
    },
    {
      name: "Refillable System Design",
      benefit: "Plastic Waste Reduction and Habit Formation",
      subcategory: "Sustainable Technology",
      source: "Circular Economy Design",
      novelty: "Mainstream",
      links: [
        { label: "Ellen MacArthur Foundation — refillable models (free)", url: "https://www.ellenmacarthurfoundation.org/resources/design/design-to-last" },
        { label: "GreenBiz — refill and reuse business cases (free)", url: "https://www.greenbiz.com" },
        { label: "Packaging Europe — refill formats (free)", url: "https://packagingeurope.com" }
      ]
    },
    {
      name: "GPS and Activity Tracking Wearables for Pets",
      benefit: "Pet Health Monitoring and Owner Reassurance",
      subcategory: "Pet Care Applications",
      source: "Wearable Technology",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — GPS pet tracking consumer adoption (free)", url: "https://scholar.google.com/scholar?q=GPS+pet+tracking+wearable+consumer+adoption" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        { label: "Lens.org — pet wearable patents (free)", url: "https://www.lens.org" }
      ]
    },
    {
      name: "AI-Powered Pet Behaviour Analysis",
      benefit: "Early Detection of Distress and Health Changes",
      subcategory: "Pet Care Applications",
      source: "Artificial Intelligence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI animal behaviour detection (free)", url: "https://scholar.google.com/scholar?q=artificial+intelligence+animal+behaviour+detection" },
        { label: "PetMD — technology and pet health (free)", url: "https://www.petmd.com" },
        { label: "IAABC — behaviour resources (free)", url: "https://iaabc.org/resources" }
      ]
    },
    {
      name: "Automated Enrichment and Dispensing Systems",
      benefit: "Mental Stimulation Without Owner Presence",
      subcategory: "Pet Care Applications",
      source: "Automation / Robotics",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — automated pet enrichment welfare (free)", url: "https://scholar.google.com/scholar?q=automated+enrichment+pet+welfare" },
        { label: "RSPCA Australia — enrichment guidance (free)", url: "https://kb.rspca.org.au" },
        { label: "PSFK — connected pet product innovation (free — register)", url: "https://www.psfk.com" }
      ]
    }
  ]
};

// ─── FILTER OPTIONS ──────────────────────────────────────────────────────────

const filterOptions = {
  beauty: {
    benefits: ["Hydration", "Oil Control", "Barrier Support", "Soothing", "Brightening", "Anti-aging", "Antioxidant Protection"],
    sources: ["Marine-Derived", "Plant-Derived", "Biotech-Derived", "Fermentation", "Fungal Extract", "Upcycled Ingredient"],
    subcategories: ["Actives and Formulation", "Sustainability"]
  },
  food: {
    benefits: ["Sugar Reduction", "Gut Health", "Plant-Based Protein", "Sustainable Format"],
    sources: ["Plant-Derived", "Fermentation", "Sustainable / Circular"],
    subcategories: ["Functional Ingredients", "Sustainable Packaging"]
  },
  petcare: {
    benefits: ["Calming and Anxiety Relief", "Mental Stimulation and Enrichment", "Daily Wellness", "Packaging and Format Innovation"],
    sources: ["Plant-Derived", "Synthetic / Biotech", "Biotech-Derived", "Physical / Mechanical", "Marine-Derived", "Fermentation", "Digital / Connected", "Sustainable / Circular", "Commercial / Format"],
    subcategories: ["Calming and Anxiety Relief", "Enrichment and Mental Stimulation", "Wellness and Daily Supplements", "Packaging and Format Innovation"]
  },
  social: {
    benefits: ["Safe and Stable Housing Access", "Reliable Nutrition Access", "Improved Mental Health Outcomes", "Quality of Life for Older Adults", "Social Connection and Belonging", "Equitable Access to Technology", "Inclusive Product and Service Design", "Economic Participation and Purpose", "Psychological Resilience", "Reduced Waste and Resource Efficiency"],
    sources: ["Social / Government", "Social / Environmental", "Health and Social", "Demographic / Policy", "Social / Community", "Social / Technology", "Social / Regulatory", "Social / Economic", "Environmental / Social", "Environmental / Policy"],
    subcategories: ["Community and Housing", "Food and Economic Security", "Health and Wellbeing", "Inclusion and Access", "Environmental and Climate"]
  },
  technology: {
    benefits: ["Tailored Consumer Experiences at Scale", "Supply Chain Efficiency and Waste Reduction", "Consumer Trust and Traceability", "Consumer Engagement Beyond Purchase", "Real-Time Health and Behavioural Insight", "Informed Purchase Confidence", "Sustainable and Scalable Ingredient Production", "Reduced End-of-Life Environmental Impact", "Plastic Waste Reduction and Habit Formation", "Pet Health Monitoring and Owner Reassurance", "Early Detection of Distress and Health Changes", "Mental Stimulation Without Owner Presence"],
    sources: ["Artificial Intelligence", "Blockchain / Distributed Ledger", "Connected Technology", "Wearable Technology", "Augmented Reality", "Biotechnology", "Materials Science", "Circular Economy Design", "Automation / Robotics"],
    subcategories: ["Artificial Intelligence and Data", "Connected Devices and IoT", "Biotechnology and Science", "Sustainable Technology", "Pet Care Applications"]
  }
};

// ─── RESOURCES ───────────────────────────────────────────────────────────────

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
  food: [
    { label: "FoodNavigator — ingredient, science and regulation news (free)", url: "https://www.foodnavigator.com" },
    { label: "The Spoon — food technology and innovation (free)", url: "https://thespoon.tech" },
    { label: "IFT Food Technology Magazine (free)", url: "https://www.ift.org/food-technology-magazine" },
    { label: "Mintel Food and Drink Blog (free articles)", url: "https://www.mintel.com/blog/food-drink" },
    { label: "Packaging Europe — sustainable packaging formats (free)", url: "https://packagingeurope.com" },
    { label: "Google Scholar — functional food ingredient efficacy (free)", url: "https://scholar.google.com/scholar?q=functional+food+ingredient+efficacy" },
    { label: "RMIT Library A-Z Databases — Mintel, IBISWorld, Passport", url: "https://rmit.libguides.com/az.php" }
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
    { label: "TrendWatching — consumer trend reports (free plan — register)", url: "https://www.trendwatching.com" },
    { label: "PSFK — consumer innovation case studies (free — register)", url: "https://www.psfk.com" },
    { label: "RMIT Library A-Z Databases — Mintel, IBISWorld, Passport", url: "https://rmit.libguides.com/az.php" }
  ],
  social: [
    { label: "AIHW — Australian Institute of Health and Welfare — data and reports (free)", url: "https://www.aihw.gov.au" },
    { label: "AHURI — Australian Housing and Urban Research Institute (free)", url: "https://www.ahuri.edu.au" },
    { label: "Foodbank Australia — food insecurity research (free)", url: "https://www.foodbank.org.au/research" },
    { label: "Black Dog Institute — mental health research (free)", url: "https://www.blackdoginstitute.org.au/research" },
    { label: "Australian Human Rights Commission — equity and access (free)", url: "https://humanrights.gov.au" },
    { label: "Australian Digital Inclusion Alliance — digital equity data (free)", url: "https://www.digitalinclusionindex.org.au" },
    { label: "Foundation for Young Australians — youth and work research (free)", url: "https://www.fya.org.au/research" },
    { label: "Ending Loneliness Together — Australian loneliness research (free)", url: "https://endingloneliness.com.au" },
    { label: "ABS — Australian Bureau of Statistics — social data (free)", url: "https://www.abs.gov.au" },
    { label: "CSIRO — climate and environmental futures (free)", url: "https://www.csiro.au/en/research/environmental-impacts/climate-change" },
    { label: "Ellen MacArthur Foundation — circular economy and waste (free)", url: "https://www.ellenmacarthurfoundation.org" },
    { label: "Google Scholar — social innovation product design (free)", url: "https://scholar.google.com/scholar?q=social+innovation+product+design" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" }
  ],
  technology: [
    { label: "MIT Technology Review — technology trends and analysis (free)", url: "https://www.technologyreview.com" },
    { label: "IEEE Spectrum — engineering and technology news (free)", url: "https://spectrum.ieee.org" },
    { label: "Wired — technology and innovation reporting (free articles)", url: "https://www.wired.com" },
    { label: "TechCrunch — startup and technology news (free)", url: "https://techcrunch.com" },
    { label: "SynBioBeta — synthetic biology and biotech (free)", url: "https://synbiobeta.com" },
    { label: "Packaging Digest — packaging technology and materials (free)", url: "https://www.packagingdigest.com" },
    { label: "Packaging Europe — sustainable materials and formats (free)", url: "https://packagingeurope.com" },
    { label: "Ellen MacArthur Foundation — circular and sustainable technology (free)", url: "https://www.ellenmacarthurfoundation.org" },
    { label: "PSFK — consumer technology and product innovation (free — register)", url: "https://www.psfk.com" },
    { label: "Lens.org — open patent search (free)", url: "https://www.lens.org" },
    { label: "Google Patents — technology innovation search (free)", url: "https://patents.google.com" },
    { label: "Google Scholar — technology adoption consumer products (free)", url: "https://scholar.google.com/scholar?q=technology+adoption+consumer+products+innovation" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" }
  ]
};

// ─── NOVELTY BADGE COLOURS ───────────────────────────────────────────────────

const noveltyStyle = {
  "Saturated":  { background: "#e9ecef", color: "#495057" },
  "Mainstream": { background: "#cfe2ff", color: "#084298" },
  "Emerging":   { background: "#d1e7dd", color: "#0a3622" },
};

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  const [category, setCategory] = useState("food");
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
  const hasFilters = benefit || source || subcategory;
  const labels = fieldLabels[category] || fieldLabels.food;

  const filtered = currentData.filter((item) =>
    (benefit ? item.benefit === benefit : true) &&
    (source ? item.source === source : true) &&
    (subcategory ? item.subcategory === subcategory : true)
  );

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", maxWidth: "1100px", margin: "0 auto", padding: "32px 24px", color: "#222", fontSize: "15px", lineHeight: "1.6" }}>

      {/* ── Header ── */}
      <h1 style={{ color: "#ba372a", fontSize: "28px", fontWeight: "bold", marginBottom: "6px", marginTop: "0" }}>
        Category Trend Scouting Tool
      </h1>
      <p style={{ color: "#2c3e50", fontSize: "15px", marginTop: "0", marginBottom: "28px" }}>
        Explore ingredients, technologies, formats, and societal trends by category. All linked sources are free or accessible through your RMIT student login.
      </p>

      {/* ── Category selector ── */}
      <div style={{ background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: "10px", padding: "16px 18px", marginBottom: "22px" }}>
        <span style={{ fontWeight: "bold", marginBottom: "10px", display: "block", color: "#222" }}>
          Select your category
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              style={{
                padding: "9px 18px",
                borderRadius: "8px",
                border: category === cat.value ? "2px solid #ba372a" : "1px solid #ccc",
                background: category === cat.value ? "#ba372a" : "#fff",
                color: category === cat.value ? "#fff" : "#333",
                fontWeight: category === cat.value ? "bold" : "normal",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Filters ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "14px", alignItems: "flex-end" }}>
        {[
          { label: labels.subcategory, value: subcategory, setter: setSubcategory, options: currentFilters.subcategories, placeholder: "All sub-categories" },
          { label: `Filter by ${labels.benefit.toLowerCase()}`, value: benefit, setter: setBenefit, options: currentFilters.benefits, placeholder: `All ${labels.benefit.toLowerCase()}s` },
          { label: `Filter by ${labels.source.toLowerCase()}`, value: source, setter: setSource, options: currentFilters.sources, placeholder: `All ${labels.source.toLowerCase()}s` },
        ].map(({ label, value, setter, options, placeholder }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
            <span style={{ fontSize: "13px", fontWeight: "bold", color: "#555", marginBottom: "5px" }}>{label}</span>
            <select
              value={value}
              onChange={(e) => setter(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #bcbcbc", borderRadius: "6px", fontSize: "14px", background: "#fff", color: "#222" }}
            >
              <option value="">{placeholder}</option>
              {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
        {hasFilters && (
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <button
              onClick={() => { setBenefit(""); setSource(""); setSubcategory(""); }}
              style={{ padding: "8px 14px", border: "1px solid #ba372a", borderRadius: "6px", background: "#fff", color: "#ba372a", fontSize: "13px", cursor: "pointer" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* ── Results count ── */}
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "18px" }}>
        Showing {filtered.length} of {currentData.length} entries{hasFilters ? " — filtered" : ""}
      </p>

      {/* ── Cards ── */}
      {filtered.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "36px" }}>
          {filtered.map((item, index) => (
            <div key={index} style={{ background: "#fff", border: "1px solid #dde3e6", borderRadius: "10px", padding: "18px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "8px" }}>
                <span style={{ fontWeight: "bold", fontSize: "15px", color: "#222", lineHeight: "1.3" }}>{item.name}</span>
                <span style={{
                  ...(noveltyStyle[item.novelty] || { background: "#e9ecef", color: "#495057" }),
                  fontSize: "11px", padding: "3px 8px", borderRadius: "12px", fontWeight: "bold", whiteSpace: "nowrap", flexShrink: 0
                }}>
                  {item.novelty}
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "#555", marginBottom: "3px", marginTop: "0" }}>
                <strong style={{ color: "#333" }}>{labels.benefit}:</strong> {item.benefit}
              </p>
              <p style={{ fontSize: "13px", color: "#555", marginBottom: "3px", marginTop: "0" }}>
                <strong style={{ color: "#333" }}>{labels.source}:</strong> {item.source}
              </p>
              <p style={{ fontSize: "13px", color: "#555", marginBottom: "10px", marginTop: "0" }}>
                <strong style={{ color: "#333" }}>{labels.subcategory}:</strong> {item.subcategory}
              </p>
              <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                {item.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: "4px" }}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ba372a", textDecoration: "none", fontSize: "13px" }}>
                      → {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "48px 0", color: "#aaa" }}>
          <p style={{ fontSize: "16px", margin: "0 0 8px" }}>No entries match your current filters.</p>
          <p style={{ fontSize: "13px", margin: "0" }}>Try clearing a filter or selecting a different sub-category.</p>
        </div>
      )}

      {/* ── Resources section ── */}
      <div style={{ background: "#f6f6f6", border: "1px solid #dde3e6", borderRadius: "10px", padding: "22px", marginTop: "8px" }}>
        <h3 style={{ fontSize: "17px", fontWeight: "bold", color: "#222", marginTop: "0", marginBottom: "4px" }}>
          Free research resources — {categories.find(c => c.value === category)?.label}
        </h3>
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "14px", marginTop: "0" }}>
          All sources below are free or accessible through your RMIT student login.
          Library databases are available on the{" "}
          <a href="https://rmit.libguides.com/az.php" target="_blank" rel="noopener noreferrer" style={{ color: "#ba372a" }}>
            RMIT Library A-Z Databases page
          </a>.
        </p>
        <div style={{ background: "#f7fbff", border: "1px solid #cfe3f6", borderRadius: "8px", padding: "10px 14px", marginBottom: "14px", fontSize: "13px", color: "#2c3e50" }}>
          <strong>Access key:</strong> Sources marked <strong>[free]</strong> require no login.
          Sources marked <strong>[free — register]</strong> require a free account.
          Sources marked <strong>(RMIT login)</strong> require your student credentials.
        </div>
        {currentResources.map((res, i) => (
          <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
            style={{ color: "#ba372a", textDecoration: "none", fontSize: "14px", display: "block", marginBottom: "6px" }}>
            → {res.label}
          </a>
        ))}
      </div>

      {/* ── Footer ── */}
      <p style={{ textAlign: "center", fontSize: "12px", color: "#bbb", paddingTop: "20px", marginTop: "24px", borderTop: "1px solid #eee" }}>
        © RMIT University 2026 — MKTG1092 Product Innovation and Management
      </p>

    </div>
  );
}

export default App;
