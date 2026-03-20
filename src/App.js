import React, { useState } from "react";

// ─── CATEGORY DEFINITIONS ────────────────────────────────────────────────────

const categories = [
  { value: "food",       label: "Food and Beverage" },
  { value: "beauty",     label: "Health, Beauty and Personal Care" },
  { value: "home",       label: "Home and Household Products" },
  { value: "petcare",    label: "Pet Care and Animal Wellness" },
  { value: "social",     label: "Social and Societal Challenges" },
  { value: "sports",     label: "Sports, Fitness and Active Lifestyle" },
  { value: "technology", label: "Technology Trends" },
];

// ─── FIELD LABEL OVERRIDES ───────────────────────────────────────────────────

const fieldLabels = {
  food:       { benefit: "Consumer Benefit",  source: "Trend Driver",      subcategory: "Sub-category"   },
  beauty:     { benefit: "Consumer Benefit",  source: "Trend Driver",      subcategory: "Sub-category"   },
  home:       { benefit: "Consumer Benefit",  source: "Trend Driver",      subcategory: "Sub-category"   },
  petcare:    { benefit: "Consumer Benefit",  source: "Trend Driver",      subcategory: "Sub-category"   },
  sports:     { benefit: "Consumer Benefit",  source: "Trend Driver",      subcategory: "Sub-category"   },
  technology: { benefit: "Enables",           source: "Technology Type",   subcategory: "Domain"         },
  social:     { benefit: "Social Outcome",    source: "Sector",            subcategory: "Challenge Area" },
};

// ─── SHARED PRIMO LINKS ──────────────────────────────────────────────────────

const primo = {
  euromonitor: { label: "Euromonitor Passport (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
  marketline:  { label: "MarketLine Advantage (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
  ibisworld:   { label: "IBISWorld Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
  warc:        { label: "WARC — marketing strategy and effectiveness (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
};

// ─── TREND DATA ──────────────────────────────────────────────────────────────

const trendsData = {

  // ── FOOD AND BEVERAGE ──────────────────────────────────────────────────────
  food: [
    {
      name: "Gut Health and Probiotic Ingredients",
      benefit: "Digestive wellness and immune support",
      subcategory: "Functional and Health Ingredients",
      source: "Health and Wellness Consumer Shift",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — probiotics functional food evidence (free)", url: "https://scholar.google.com/scholar?q=probiotics+functional+food+health+benefits+evidence" },
        { label: "FoodNavigator — gut health trends (free)", url: "https://www.foodnavigator.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Plant-Based Protein Innovation",
      benefit: "Sustainable high-protein nutrition without animal products",
      subcategory: "Functional and Health Ingredients",
      source: "Sustainability and Health Convergence",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — plant-based protein food application (free)", url: "https://scholar.google.com/scholar?q=plant+based+protein+food+application+consumer+acceptance" },
        { label: "The Good Food Institute — alternative protein data (free)", url: "https://gfi.org/resource/alternative-protein-state-of-the-industry-report/" },
        primo.ibisworld,
      ]
    },
    {
      name: "Functional Adaptogens and Nootropics",
      benefit: "Stress relief, focus, and cognitive performance",
      subcategory: "Functional and Health Ingredients",
      source: "Wellness Consumer Movement",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — adaptogens food beverage consumer trend (free)", url: "https://scholar.google.com/scholar?q=adaptogens+nootropics+food+beverage+consumer+trend" },
        { label: "FoodNavigator — functional ingredients (free)", url: "https://www.foodnavigator.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Sugar Reduction and Alternative Sweeteners",
      benefit: "Lower sugar intake without sacrificing taste",
      subcategory: "Functional and Health Ingredients",
      source: "Regulatory Pressure and Health Awareness",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — sugar reduction food reformulation (free)", url: "https://scholar.google.com/scholar?q=sugar+reduction+food+reformulation+consumer+acceptance" },
        { label: "Food Standards Australia New Zealand — sweetener regulation (free)", url: "https://www.foodstandards.gov.au" },
        primo.marketline,
      ]
    },
    {
      name: "Fortified and Enriched Foods",
      benefit: "Addressing nutritional deficiencies through everyday eating",
      subcategory: "Functional and Health Ingredients",
      source: "Public Health and Regulatory Driver",
      novelty: "Saturated",
      links: [
        { label: "Google Scholar — food fortification consumer health outcomes (free)", url: "https://scholar.google.com/scholar?q=food+fortification+enrichment+consumer+health+outcomes" },
        { label: "FSANZ — fortification standards Australia (free)", url: "https://www.foodstandards.gov.au/consumer/nutrition/fortification" },
        primo.ibisworld,
      ]
    },
    {
      name: "Clean Label and Minimal Processing",
      benefit: "Transparency and trust in what consumers eat",
      subcategory: "Natural and Clean Label",
      source: "Consumer Distrust of Additives",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — clean label consumer perception (free)", url: "https://scholar.google.com/scholar?q=clean+label+minimal+processing+consumer+perception" },
        { label: "CSIRO — food trends Australia (free)", url: "https://www.csiro.au/en/research/health-medical/nutrition" },
        primo.euromonitor,
      ]
    },
    {
      name: "Fermented and Cultured Foods",
      benefit: "Natural preservation with added health credentials",
      subcategory: "Natural and Clean Label",
      source: "Traditional Food Heritage and Science Convergence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — fermented food consumer trend (free)", url: "https://scholar.google.com/scholar?q=fermented+cultured+food+consumer+trend+Australia" },
        { label: "The Spoon — fermentation food technology (free)", url: "https://thespoon.tech" },
        primo.marketline,
      ]
    },
    {
      name: "Whole Food and Minimally Processed Ingredients",
      benefit: "Recognisable ingredients that feel honest and safe",
      subcategory: "Natural and Clean Label",
      source: "Health Consciousness and Label Reading Behaviour",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — whole food ingredient consumer trust (free)", url: "https://scholar.google.com/scholar?q=whole+food+ingredients+consumer+trust+labelling" },
        { label: "Choice Australia — food labelling consumer insights (free)", url: "https://www.choice.com.au/food-and-drink" },
        primo.euromonitor,
      ]
    },
    {
      name: "Sustainable and Compostable Packaging",
      benefit: "Reduced environmental footprint at end of product life",
      subcategory: "Packaging Innovation",
      source: "Environmental Regulation and Consumer Demand",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — compostable packaging food consumer acceptance (free)", url: "https://scholar.google.com/scholar?q=compostable+packaging+food+consumer+acceptance" },
        { label: "Packaging Europe — sustainable food packaging (free)", url: "https://packagingeurope.com" },
        { label: "Australian Packaging Covenant Organisation — APCO (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Portion Control and Single-Serve Formats",
      benefit: "Convenience and reduced food waste for smaller households",
      subcategory: "Packaging Innovation",
      source: "Household Demography Shift",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — single serve packaging consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=single+serve+portion+control+packaging+consumer" },
        { label: "Packaging Digest — format innovation (free)", url: "https://www.packagingdigest.com" },
        primo.ibisworld,
      ]
    },
    {
      name: "Smart and Active Packaging",
      benefit: "Extended shelf life and real-time freshness indicators",
      subcategory: "Packaging Innovation",
      source: "Technology and Food Safety Convergence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — smart packaging food freshness (free)", url: "https://scholar.google.com/scholar?q=smart+active+packaging+food+freshness+shelf+life" },
        { label: "Packaging Digest — smart packaging innovation (free)", url: "https://www.packagingdigest.com" },
        primo.marketline,
      ]
    },
    {
      name: "Global and Fusion Flavour Exploration",
      benefit: "Novel taste experiences driven by cultural curiosity",
      subcategory: "Culinary and Flavour Trends",
      source: "Multicultural Demographics and Social Media",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — global flavour consumer food trend (free)", url: "https://scholar.google.com/scholar?q=global+fusion+flavour+food+consumer+trend" },
        { label: "FoodNavigator — flavour trends (free)", url: "https://www.foodnavigator.com" },
        primo.warc,
      ]
    },
    {
      name: "Comfort and Nostalgic Food Formats",
      benefit: "Emotional connection and familiar eating experiences",
      subcategory: "Culinary and Flavour Trends",
      source: "Post-Pandemic Consumer Psychology",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — comfort food nostalgia consumer psychology (free)", url: "https://scholar.google.com/scholar?q=comfort+food+nostalgia+consumer+psychology" },
        primo.warc,
        primo.euromonitor,
      ]
    },
    {
      name: "Spice, Heat, and Sensory Intensity",
      benefit: "Heightened sensory experience and adventurous eating",
      subcategory: "Culinary and Flavour Trends",
      source: "Social Media and Youth Culture",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — spicy food consumer trend sensory (free)", url: "https://scholar.google.com/scholar?q=spicy+heat+food+consumer+trend+sensory" },
        { label: "FoodNavigator — flavour trends (free)", url: "https://www.foodnavigator.com" },
        primo.warc,
      ]
    },
    {
      name: "Food Waste Reduction and Upcycled Ingredients",
      benefit: "Circular nutrition from ingredients previously discarded",
      subcategory: "Sustainability and Waste Reduction",
      source: "Circular Economy Policy and Consumer Values",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — upcycled food ingredient consumer (free)", url: "https://scholar.google.com/scholar?q=upcycled+food+ingredient+circular+economy+consumer" },
        { label: "OzHarvest — food waste Australia (free)", url: "https://www.ozharvest.org/what-we-do/environment/facts" },
        { label: "Ellen MacArthur Foundation — food and circular economy (free)", url: "https://www.ellenmacarthurfoundation.org/topics/food/overview" },
      ]
    },
    {
      name: "Regenerative and Ethical Sourcing",
      benefit: "Food produced in ways that restore rather than deplete",
      subcategory: "Sustainability and Waste Reduction",
      source: "Environmental Consciousness and Supply Chain Transparency",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — regenerative agriculture food consumer (free)", url: "https://scholar.google.com/scholar?q=regenerative+agriculture+food+supply+chain+consumer" },
        { label: "CSIRO — sustainable food systems (free)", url: "https://www.csiro.au/en/research/natural-environment/land/food-systems" },
        primo.euromonitor,
      ]
    },
  ],

  // ── HEALTH, BEAUTY AND PERSONAL CARE ──────────────────────────────────────
  beauty: [
    {
      name: "Marine and Ocean-Derived Actives",
      benefit: "Hydration, antioxidant protection, and skin barrier support",
      subcategory: "Natural and Botanical Ingredients",
      source: "Blue Beauty Movement",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — marine-derived cosmetic ingredient evidence (free)", url: "https://scholar.google.com/scholar?q=marine+derived+cosmetic+ingredient+skin+benefit+evidence" },
        { label: "PubMed — marine extract skin research (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=marine+extract+skin+cosmetic" },
        primo.euromonitor,
      ]
    },
    {
      name: "Plant Stem Cell and Botanical Extract Technology",
      benefit: "Anti-aging and skin renewal from plant-derived sources",
      subcategory: "Natural and Botanical Ingredients",
      source: "Natural Beauty Consumer Demand",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — plant stem cell cosmetic efficacy (free)", url: "https://scholar.google.com/scholar?q=plant+stem+cell+cosmetic+anti-aging+efficacy" },
        { label: "Cosmetics Design — botanical ingredient trends (free)", url: "https://www.cosmeticsdesign.com" },
        primo.marketline,
      ]
    },
    {
      name: "Adaptogenic Herbs in Skincare and Haircare",
      benefit: "Stress-response protection for skin and scalp",
      subcategory: "Natural and Botanical Ingredients",
      source: "Wellness Beauty Convergence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — adaptogen skincare topical application (free)", url: "https://scholar.google.com/scholar?q=adaptogen+skincare+topical+application+evidence" },
        { label: "Global Cosmetic Industry — adaptogens beauty (free)", url: "https://www.gcimagazine.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Upcycled and By-Product Beauty Ingredients",
      benefit: "Reduced waste and circular sourcing credentials",
      subcategory: "Natural and Botanical Ingredients",
      source: "Circular Economy and Sustainability Values",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — upcycled cosmetic ingredient sustainability (free)", url: "https://scholar.google.com/scholar?q=upcycled+cosmetic+ingredient+circular+beauty+sustainability" },
        { label: "Sustainable Brands — upcycled beauty ingredients (free)", url: "https://sustainablebrands.com" },
        primo.marketline,
      ]
    },
    {
      name: "Precision Fermentation and Biotech Actives",
      benefit: "Highly consistent, scalable actives without agricultural variability",
      subcategory: "Biotech and Lab-Derived Ingredients",
      source: "Biotechnology and Manufacturing Innovation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — precision fermentation cosmetic ingredient (free)", url: "https://scholar.google.com/scholar?q=precision+fermentation+cosmetic+biotech+ingredient" },
        { label: "SynBioBeta — biotech beauty ingredients (free)", url: "https://synbiobeta.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Postbiotic and Microbiome-Balancing Formulations",
      benefit: "Skin barrier restoration and sensitivity reduction",
      subcategory: "Biotech and Lab-Derived Ingredients",
      source: "Microbiome Science Advancement",
      novelty: "Emerging",
      links: [
        { label: "PubMed — postbiotic skin microbiome evidence (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=postbiotic+skin+microbiome+cosmetic" },
        { label: "Google Scholar — microbiome skincare formulation (free)", url: "https://scholar.google.com/scholar?q=microbiome+skincare+formulation+barrier+restoration" },
        primo.marketline,
      ]
    },
    {
      name: "Peptide and Growth Factor Technology",
      benefit: "Targeted anti-aging and skin repair at cellular level",
      subcategory: "Biotech and Lab-Derived Ingredients",
      source: "Dermatology and Cosmetic Science Crossover",
      novelty: "Mainstream",
      links: [
        { label: "PubMed — peptide cosmetic anti-aging clinical evidence (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=peptide+cosmetic+anti-aging+clinical" },
        { label: "Cosmetics Design — peptide ingredient news (free)", url: "https://www.cosmeticsdesign.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Encapsulation and Controlled Release Technology",
      benefit: "Improved ingredient stability and targeted delivery to skin",
      subcategory: "Biotech and Lab-Derived Ingredients",
      source: "Pharmaceutical-Grade Formulation Influence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — encapsulation cosmetic ingredient delivery (free)", url: "https://scholar.google.com/scholar?q=encapsulation+controlled+release+cosmetic+ingredient+delivery" },
        { label: "Lens.org — cosmetic encapsulation patents (free)", url: "https://www.lens.org" },
        primo.marketline,
      ]
    },
    {
      name: "Refillable and Reusable Beauty Packaging",
      benefit: "Significant plastic reduction with premium brand feel retained",
      subcategory: "Sustainable Packaging",
      source: "Sustainability Regulation and Consumer Expectation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — refillable beauty packaging consumer adoption (free)", url: "https://scholar.google.com/scholar?q=refillable+beauty+packaging+consumer+adoption+sustainability" },
        { label: "Packaging Europe — refill beauty formats (free)", url: "https://packagingeurope.com" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Waterless and Concentrated Formulations",
      benefit: "Reduced packaging size, weight, and water consumption",
      subcategory: "Sustainable Packaging",
      source: "Water Scarcity Awareness and Sustainability Values",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — waterless cosmetic formulation consumer (free)", url: "https://scholar.google.com/scholar?q=waterless+concentrated+cosmetic+formulation+consumer+sustainability" },
        { label: "Cosmetics Design — waterless beauty trend (free)", url: "https://www.cosmeticsdesign.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Biodegradable and Post-Consumer Recycled Packaging",
      benefit: "End-of-life environmental responsibility",
      subcategory: "Sustainable Packaging",
      source: "Regulatory Mandate and Brand Sustainability Commitments",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — biodegradable cosmetic packaging consumer (free)", url: "https://scholar.google.com/scholar?q=biodegradable+post+consumer+recycled+cosmetic+packaging" },
        { label: "Ellen MacArthur Foundation — packaging design principles (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Skin Longevity and Preventative Skincare",
      benefit: "Long-term skin health investment rather than short-term fixes",
      subcategory: "Consumer Wellness Trends",
      source: "Preventative Health Consumer Mindset",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — preventative skincare consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=preventative+skincare+longevity+consumer+behaviour" },
        { label: "Mintel Beauty — skincare consumer insight (free articles)", url: "https://www.mintel.com/blog/beauty-market-news" },
        primo.warc,
      ]
    },
    {
      name: "Gender-Neutral and Inclusive Beauty",
      benefit: "Products that serve a broader range of consumers without stereotyping",
      subcategory: "Consumer Wellness Trends",
      source: "Cultural Shift and Expanded Consumer Base",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — gender neutral inclusive beauty consumer trend (free)", url: "https://scholar.google.com/scholar?q=gender+neutral+inclusive+beauty+consumer+trend" },
        primo.warc,
        primo.euromonitor,
      ]
    },
    {
      name: "Ingestible Beauty and Nutricosmetics",
      benefit: "Inside-out approach to skin, hair, and nail health",
      subcategory: "Consumer Wellness Trends",
      source: "Beauty and Nutrition Science Convergence",
      novelty: "Emerging",
      links: [
        { label: "PubMed — nutricosmetics clinical evidence (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=nutricosmetics+ingestible+beauty+clinical" },
        { label: "Google Scholar — ingestible beauty consumer trend (free)", url: "https://scholar.google.com/scholar?q=ingestible+beauty+nutricosmetics+consumer+trend" },
        primo.marketline,
      ]
    },
    {
      name: "AI-Powered Skin Diagnostics and Personalised Recommendations",
      benefit: "Individually matched products based on actual skin condition",
      subcategory: "Personalisation and Technology",
      source: "AI and Consumer Technology Convergence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI skin diagnostic personalised beauty (free)", url: "https://scholar.google.com/scholar?q=AI+skin+diagnostic+personalised+beauty+recommendation" },
        { label: "Cosmetics Design — beauty technology trends (free)", url: "https://www.cosmeticsdesign.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Augmented Reality for Virtual Try-On",
      benefit: "Purchase confidence without physical product testing",
      subcategory: "Personalisation and Technology",
      source: "E-Commerce Growth and Digital Consumer Behaviour",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — augmented reality beauty virtual try-on (free)", url: "https://scholar.google.com/scholar?q=augmented+reality+beauty+virtual+try+on+consumer" },
        primo.warc,
        primo.euromonitor,
      ]
    },
  ],

  // ── HOME AND HOUSEHOLD PRODUCTS ───────────────────────────────────────────
  home: [
    {
      name: "Concentrated and Waterless Cleaning Formats",
      benefit: "Less packaging, lower cost per use, and reduced storage space",
      subcategory: "Cleaning and Laundry Innovation",
      source: "Sustainability and Cost-of-Living Pressure",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — concentrated cleaning product consumer adoption (free)", url: "https://scholar.google.com/scholar?q=concentrated+waterless+cleaning+product+consumer+adoption" },
        { label: "Packaging Europe — concentrated household formats (free)", url: "https://packagingeurope.com" },
        primo.ibisworld,
      ]
    },
    {
      name: "Refillable Household Product Systems",
      benefit: "Ongoing plastic waste reduction with habitual consumer behaviour",
      subcategory: "Cleaning and Laundry Innovation",
      source: "Circular Economy and Plastic Reduction Policy",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — refillable household product consumer barrier (free)", url: "https://scholar.google.com/scholar?q=refillable+household+product+consumer+barrier+adoption" },
        { label: "Ellen MacArthur Foundation — refill at home (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Plant-Based and Naturally Derived Cleaning Actives",
      benefit: "Effective cleaning without harsh synthetic chemicals",
      subcategory: "Cleaning and Laundry Innovation",
      source: "Health-Conscious and Allergy-Aware Consumer",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — plant-based cleaning ingredient efficacy (free)", url: "https://scholar.google.com/scholar?q=plant+based+cleaning+ingredient+efficacy+consumer" },
        { label: "Choice Australia — household cleaning product reviews (free)", url: "https://www.choice.com.au/home-and-living/laundry-and-cleaning" },
        primo.euromonitor,
      ]
    },
    {
      name: "Precision Dosing and Dispensing Mechanisms",
      benefit: "No waste, no mess, and consistent cleaning performance every use",
      subcategory: "Cleaning and Laundry Innovation",
      source: "Consumer Frustration with Traditional Formats",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — precision dosing consumer product design (free)", url: "https://scholar.google.com/scholar?q=precision+dosing+dispensing+consumer+product+design" },
        { label: "Lens.org — dosing mechanism patents (free)", url: "https://www.lens.org" },
        primo.marketline,
      ]
    },
    {
      name: "Wellness-Led Home Fragrance",
      benefit: "Emotional and psychological benefits through scent at home",
      subcategory: "Home Fragrance and Ambience",
      source: "Home as Sanctuary Post-Pandemic Trend",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — home fragrance consumer wellness behaviour (free)", url: "https://scholar.google.com/scholar?q=home+fragrance+wellness+consumer+behaviour+trend" },
        { label: "Mintel — home care consumer trends (free articles)", url: "https://www.mintel.com/blog/home-and-garden" },
        primo.euromonitor,
      ]
    },
    {
      name: "Natural and Non-Toxic Fragrance Ingredients",
      benefit: "Safe indoor air quality for health-conscious households",
      subcategory: "Home Fragrance and Ambience",
      source: "Indoor Air Quality Awareness and Ingredient Scrutiny",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — natural fragrance indoor air quality consumer (free)", url: "https://scholar.google.com/scholar?q=natural+fragrance+indoor+air+quality+non-toxic+consumer" },
        { label: "Choice Australia — air freshener safety (free)", url: "https://www.choice.com.au" },
        primo.marketline,
      ]
    },
    {
      name: "Modular and Adaptable Home Organisation Systems",
      benefit: "Flexible storage that grows and changes with household needs",
      subcategory: "Organisation and Storage",
      source: "Urbanisation and Smaller Living Spaces",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — modular home organisation consumer design (free)", url: "https://scholar.google.com/scholar?q=modular+home+organisation+storage+consumer+design" },
        { label: "PSFK — home innovation consumer trends (free — register)", url: "https://www.psfk.com" },
        primo.ibisworld,
      ]
    },
    {
      name: "Sustainable and Recycled Material Home Products",
      benefit: "Responsible purchasing with lower environmental footprint",
      subcategory: "Organisation and Storage",
      source: "Circular Economy Values and Ethical Consumption",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — recycled material home product consumer (free)", url: "https://scholar.google.com/scholar?q=recycled+sustainable+material+home+product+consumer+acceptance" },
        { label: "GreenBiz — sustainable home goods (free)", url: "https://www.greenbiz.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Connected and Voice-Activated Home Devices",
      benefit: "Convenience and automation of routine household tasks",
      subcategory: "Smart Home Technology",
      source: "IoT Adoption and Consumer Convenience",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — smart home device consumer adoption (free)", url: "https://scholar.google.com/scholar?q=smart+home+connected+device+consumer+adoption+behaviour" },
        { label: "CSIRO — digital home technology Australia (free)", url: "https://www.csiro.au/en/research/technology-space/digital" },
        primo.ibisworld,
      ]
    },
    {
      name: "Energy Monitoring and Efficiency Products",
      benefit: "Reduced energy bills and lower household carbon footprint",
      subcategory: "Smart Home Technology",
      source: "Energy Cost Pressure and Environmental Awareness",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — home energy monitoring consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=home+energy+monitoring+efficiency+consumer+behaviour" },
        { label: "Australian Energy Regulator — consumer energy data (free)", url: "https://www.aer.gov.au" },
        primo.marketline,
      ]
    },
    {
      name: "Compostable and Zero-Waste Household Consumables",
      benefit: "Everyday household tasks with minimal landfill contribution",
      subcategory: "Sustainable Living",
      source: "Waste Reduction Policy and Consumer Values",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — zero waste household consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=zero+waste+household+compostable+consumer+behaviour+Australia" },
        { label: "Sustainability Victoria — household waste reduction (free)", url: "https://www.sustainability.vic.gov.au" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Water-Saving Household Products",
      benefit: "Lower water consumption responding to scarcity and cost",
      subcategory: "Sustainable Living",
      source: "Water Scarcity and Utility Cost Pressure in Australia",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — water saving household product consumer Australia (free)", url: "https://scholar.google.com/scholar?q=water+saving+household+product+consumer+Australia" },
        { label: "Water Corporation Australia — water conservation (free)", url: "https://www.watercorporation.com.au/water-supply/conservation" },
        primo.ibisworld,
      ]
    },
  ],

  // ── PET CARE AND ANIMAL WELLNESS ──────────────────────────────────────────
  petcare: [
    {
      name: "Amino Acid and Botanical Calming Ingredients",
      benefit: "Natural anxiety reduction without sedation",
      subcategory: "Calming and Anxiety Relief",
      source: "Pet Humanisation and Natural Product Preference",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — L-theanine ashwagandha calming animal evidence (free)", url: "https://scholar.google.com/scholar?q=L-theanine+ashwagandha+calming+anxiolytic+animal+evidence" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        { label: "APVMA — pet product regulatory guidance Australia (free)", url: "https://www.apvma.gov.au" },
      ]
    },
    {
      name: "Pheromone and Sensory Calming Technology",
      benefit: "Species-specific calming signals that reduce stress behaviourally",
      subcategory: "Calming and Anxiety Relief",
      source: "Veterinary Behaviour Science",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — pheromone dog cat calming evidence (free)", url: "https://scholar.google.com/scholar?q=pheromone+dog+cat+calming+anxiety+evidence" },
        { label: "RSPCA Australia — anxiety and fear in pets (free)", url: "https://kb.rspca.org.au" },
        primo.marketline,
      ]
    },
    {
      name: "Functional Treat and Food Formats for Anxiety",
      benefit: "Delivery of calming actives through enjoyable consumption",
      subcategory: "Calming and Anxiety Relief",
      source: "Convenience and Compliance in Pet Supplementation",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — functional pet treat calming supplement (free)", url: "https://scholar.google.com/scholar?q=functional+pet+treat+calming+supplement+compliance" },
        { label: "PetMD — calming products for pets (free)", url: "https://www.petmd.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Physical Enrichment and Foraging Products",
      benefit: "Reduced boredom and destructive behaviour through natural instinct expression",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Animal Welfare Science and Pet Humanisation",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — canine feline enrichment welfare evidence (free)", url: "https://scholar.google.com/scholar?q=canine+feline+enrichment+foraging+welfare+evidence" },
        { label: "RSPCA Australia — enrichment for pets (free)", url: "https://kb.rspca.org.au" },
        { label: "IAABC — behaviour and enrichment resources (free)", url: "https://iaabc.org/resources" },
      ]
    },
    {
      name: "Sensory and Cognitive Stimulation Products",
      benefit: "Mental engagement that supports behavioural health and longevity",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Companion Animal Cognitive Research",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — pet cognitive stimulation product welfare (free)", url: "https://scholar.google.com/scholar?q=pet+cognitive+stimulation+product+mental+health+welfare" },
        { label: "IAABC — cognitive enrichment resources (free)", url: "https://iaabc.org/resources" },
        primo.marketline,
      ]
    },
    {
      name: "Modular and Adaptable Enrichment Systems",
      benefit: "Variety and novelty that prevents habituation",
      subcategory: "Enrichment and Mental Stimulation",
      source: "Product Innovation and Design Thinking in Pet Care",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — modular pet product design consumer (free)", url: "https://scholar.google.com/scholar?q=modular+pet+enrichment+product+design+consumer" },
        { label: "PSFK — pet product innovation (free — register)", url: "https://www.psfk.com" },
        primo.ibisworld,
      ]
    },
    {
      name: "Gut Health and Probiotic Supplements for Pets",
      benefit: "Digestive health, immune support, and coat condition",
      subcategory: "Wellness Supplements",
      source: "Human Health Trend Transfer to Pet Category",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — probiotics gut health dog cat evidence (free)", url: "https://scholar.google.com/scholar?q=probiotics+gut+health+dog+cat+supplement+evidence" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        primo.euromonitor,
      ]
    },
    {
      name: "Joint, Mobility, and Longevity Supplements",
      benefit: "Extended healthy lifespan and quality of life for ageing pets",
      subcategory: "Wellness Supplements",
      source: "Pet Longevity and Humanisation Trend",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — joint supplement dog cat clinical evidence (free)", url: "https://scholar.google.com/scholar?q=joint+mobility+supplement+dog+cat+clinical+evidence" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        { label: "APVMA — pet supplement regulation (free)", url: "https://www.apvma.gov.au" },
      ]
    },
    {
      name: "Bioavailability and Advanced Delivery Systems",
      benefit: "More effective absorption of active ingredients",
      subcategory: "Wellness Supplements",
      source: "Pharmaceutical Science Influence on Pet Category",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — microencapsulation pet supplement bioavailability (free)", url: "https://scholar.google.com/scholar?q=microencapsulation+bioavailability+pet+supplement+delivery" },
        { label: "Lens.org — pet supplement delivery patents (free)", url: "https://www.lens.org" },
        primo.marketline,
      ]
    },
    {
      name: "Sustainable and Refillable Pet Product Packaging",
      benefit: "Reduced plastic waste for environmentally motivated pet owners",
      subcategory: "Packaging and Format Innovation",
      source: "Pet Owner Sustainability Values",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — sustainable packaging pet product consumer (free)", url: "https://scholar.google.com/scholar?q=sustainable+packaging+pet+product+consumer+Australia" },
        { label: "Packaging Europe — sustainable pet packaging (free)", url: "https://packagingeurope.com" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Subscription and Direct-to-Consumer Pet Formats",
      benefit: "Routine wellness made easy through automated replenishment",
      subcategory: "Packaging and Format Innovation",
      source: "DTC Commerce Growth and Convenience Demand",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — subscription DTC pet product consumer (free)", url: "https://scholar.google.com/scholar?q=subscription+direct+to+consumer+pet+product+adoption" },
        { label: "TrendWatching — subscription consumer trends (free plan)", url: "https://www.trendwatching.com" },
        primo.ibisworld,
      ]
    },
    {
      name: "GPS and Activity Monitoring Wearables",
      benefit: "Real-time location and health tracking for owner peace of mind",
      subcategory: "Technology and Connected Products",
      source: "IoT and Pet Safety Consumer Demand",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — GPS pet wearable consumer adoption (free)", url: "https://scholar.google.com/scholar?q=GPS+pet+wearable+activity+monitor+consumer+adoption" },
        { label: "Lens.org — pet wearable technology patents (free)", url: "https://www.lens.org" },
        primo.marketline,
      ]
    },
    {
      name: "AI-Powered Behaviour and Health Analysis",
      benefit: "Early detection of health changes and anxiety patterns",
      subcategory: "Technology and Connected Products",
      source: "AI and Veterinary Science Convergence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI animal behaviour analysis detection (free)", url: "https://scholar.google.com/scholar?q=artificial+intelligence+animal+behaviour+health+analysis+detection" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        primo.euromonitor,
      ]
    },
  ],

  // ── SOCIAL AND SOCIETAL CHALLENGES ────────────────────────────────────────
  social: [
    {
      name: "Homelessness and Housing Insecurity",
      benefit: "Safe and stable housing access",
      subcategory: "Community and Housing",
      source: "Social / Government",
      novelty: "Mainstream",
      links: [
        { label: "AHURI — Australian housing research (free)", url: "https://www.ahuri.edu.au" },
        { label: "Homelessness Australia — policy and data (free)", url: "https://www.homelessnessaustralia.org.au" },
        { label: "Google Scholar — homelessness intervention evidence (free)", url: "https://scholar.google.com/scholar?q=homelessness+intervention+evidence+Australia" },
      ]
    },
    {
      name: "Food Insecurity and Hunger",
      benefit: "Reliable nutrition access for vulnerable populations",
      subcategory: "Food and Economic Security",
      source: "Social / Environmental",
      novelty: "Mainstream",
      links: [
        { label: "Foodbank Australia — hunger report (free)", url: "https://www.foodbank.org.au/research" },
        { label: "FAO — global food security data (free)", url: "https://www.fao.org/hunger/en" },
        { label: "Google Scholar — food insecurity consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=food+insecurity+consumer+behaviour+Australia" },
      ]
    },
    {
      name: "Mental Health and Psychological Wellbeing",
      benefit: "Improved mental health outcomes at population level",
      subcategory: "Health and Wellbeing",
      source: "Health and Social",
      novelty: "Mainstream",
      links: [
        { label: "AIHW — mental health in Australia (free)", url: "https://www.aihw.gov.au/mental-health" },
        { label: "Black Dog Institute — research and data (free)", url: "https://www.blackdoginstitute.org.au/research" },
        { label: "Beyond Blue — consumer insight reports (free)", url: "https://www.beyondblue.org.au" },
      ]
    },
    {
      name: "Ageing Population and Aged Care",
      benefit: "Quality of life and independence for older adults",
      subcategory: "Health and Wellbeing",
      source: "Demographic / Policy",
      novelty: "Mainstream",
      links: [
        { label: "AIHW — aged care data and statistics (free)", url: "https://www.aihw.gov.au/aged-care" },
        { label: "Australian Government — aged care reform (free)", url: "https://www.agedcare.gov.au" },
        { label: "Google Scholar — product innovation ageing population (free)", url: "https://scholar.google.com/scholar?q=product+innovation+ageing+population+consumer" },
      ]
    },
    {
      name: "Loneliness and Social Isolation",
      benefit: "Social connection and sense of belonging",
      subcategory: "Health and Wellbeing",
      source: "Social / Community",
      novelty: "Emerging",
      links: [
        { label: "Ending Loneliness Together — Australian research (free)", url: "https://endingloneliness.com.au" },
        { label: "AIHW — social isolation data (free)", url: "https://www.aihw.gov.au" },
        { label: "Google Scholar — loneliness product intervention design (free)", url: "https://scholar.google.com/scholar?q=loneliness+social+isolation+product+design+intervention" },
      ]
    },
    {
      name: "Digital Inclusion and Literacy",
      benefit: "Equitable access to technology for all Australians",
      subcategory: "Inclusion and Access",
      source: "Social / Technology",
      novelty: "Emerging",
      links: [
        { label: "Australian Digital Inclusion Alliance — ADII report (free)", url: "https://www.digitalinclusionindex.org.au" },
        { label: "Google Scholar — digital divide inclusion equity (free)", url: "https://scholar.google.com/scholar?q=digital+divide+inclusion+equity+Australia" },
        primo.ibisworld,
      ]
    },
    {
      name: "Disability and Accessibility",
      benefit: "Inclusive product and service design for all abilities",
      subcategory: "Inclusion and Access",
      source: "Social / Regulatory",
      novelty: "Mainstream",
      links: [
        { label: "Australian Human Rights Commission — disability standards (free)", url: "https://humanrights.gov.au/our-work/disability-rights" },
        { label: "W3C — web accessibility guidelines (free)", url: "https://www.w3.org/WAI" },
        { label: "Google Scholar — universal design inclusive product (free)", url: "https://scholar.google.com/scholar?q=universal+design+inclusive+product+development" },
      ]
    },
    {
      name: "Youth Disengagement and Unemployment",
      benefit: "Economic participation and sense of purpose for young Australians",
      subcategory: "Food and Economic Security",
      source: "Social / Economic",
      novelty: "Emerging",
      links: [
        { label: "Foundation for Young Australians — FYA research (free)", url: "https://www.fya.org.au/research" },
        { label: "ABS — youth employment statistics (free)", url: "https://www.abs.gov.au/statistics/labour/employment-and-unemployment" },
        { label: "Google Scholar — youth unemployment intervention (free)", url: "https://scholar.google.com/scholar?q=youth+unemployment+intervention+Australia" },
      ]
    },
    {
      name: "Climate Anxiety and Environmental Stress",
      benefit: "Psychological resilience in the face of climate uncertainty",
      subcategory: "Environmental and Climate",
      source: "Environmental / Social",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — eco-anxiety climate consumer response (free)", url: "https://scholar.google.com/scholar?q=eco-anxiety+climate+change+consumer+behaviour" },
        { label: "CSIRO — climate futures Australia (free)", url: "https://www.csiro.au/en/research/environmental-impacts/climate-change" },
        { label: "APA — climate change and mental health (free)", url: "https://www.apa.org/news/press/releases/stress/2021/climate-change" },
      ]
    },
    {
      name: "Waste and Circular Economy Transition",
      benefit: "Reduced waste and improved resource efficiency at scale",
      subcategory: "Environmental and Climate",
      source: "Environmental / Policy",
      novelty: "Mainstream",
      links: [
        { label: "Ellen MacArthur Foundation — circular economy (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Australian Government — National Waste Policy (free)", url: "https://www.dcceew.gov.au/environment/protection/waste/national-waste-policy" },
        { label: "GreenBiz — circular economy business cases (free)", url: "https://www.greenbiz.com" },
      ]
    },
  ],

  // ── SPORTS, FITNESS AND ACTIVE LIFESTYLE ──────────────────────────────────
  sports: [
    {
      name: "Plant-Based Sports Nutrition",
      benefit: "Performance nutrition aligned with sustainability and dietary values",
      subcategory: "Sports Nutrition and Supplementation",
      source: "Plant-Based Consumer Movement and Athlete Adoption",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — plant-based protein sports performance (free)", url: "https://scholar.google.com/scholar?q=plant+based+protein+sports+performance+nutrition" },
        { label: "PubMed — vegan athlete nutrition evidence (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=vegan+athlete+nutrition+performance" },
        primo.euromonitor,
      ]
    },
    {
      name: "Functional Recovery Nutrition and Ingredients",
      benefit: "Faster recovery and reduced muscle soreness post-exercise",
      subcategory: "Sports Nutrition and Supplementation",
      source: "Sports Science and Consumer Health Convergence",
      novelty: "Emerging",
      links: [
        { label: "PubMed — recovery nutrition supplement sports evidence (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=recovery+nutrition+supplement+sports+performance" },
        { label: "Google Scholar — post-exercise recovery ingredient consumer (free)", url: "https://scholar.google.com/scholar?q=post+exercise+recovery+ingredient+consumer+sports" },
        primo.marketline,
      ]
    },
    {
      name: "Hydration Innovation and Electrolyte Formats",
      benefit: "Optimised fluid and electrolyte replenishment during activity",
      subcategory: "Sports Nutrition and Supplementation",
      source: "Sports Performance Science and Consumer Convenience",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — electrolyte hydration sports performance (free)", url: "https://scholar.google.com/scholar?q=electrolyte+hydration+sports+performance+evidence" },
        { label: "PubMed — sports drink formulation consumer (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sports+drink+electrolyte+hydration+formulation" },
        primo.ibisworld,
      ]
    },
    {
      name: "Gut Health and Microbiome Support for Athletes",
      benefit: "Improved nutrient absorption and immune resilience under training load",
      subcategory: "Sports Nutrition and Supplementation",
      source: "Sports Nutrition and Microbiome Science Convergence",
      novelty: "Emerging",
      links: [
        { label: "PubMed — probiotic athlete gut health performance (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=probiotic+athlete+gut+health+performance" },
        { label: "Google Scholar — microbiome sports nutrition athlete (free)", url: "https://scholar.google.com/scholar?q=microbiome+gut+health+sports+nutrition+athlete" },
        primo.euromonitor,
      ]
    },
    {
      name: "Biometric Wearables and Performance Tracking",
      benefit: "Real-time physiological data to optimise training and recovery",
      subcategory: "Wearable Technology and Data",
      source: "IoT and Consumer Health Technology",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — biometric wearable sports performance consumer (free)", url: "https://scholar.google.com/scholar?q=biometric+wearable+sports+performance+consumer+adoption" },
        { label: "IEEE Spectrum — wearable sports technology (free)", url: "https://spectrum.ieee.org" },
        primo.ibisworld,
      ]
    },
    {
      name: "AI-Powered Personalised Training and Coaching",
      benefit: "Individually optimised training plans based on actual performance data",
      subcategory: "Wearable Technology and Data",
      source: "AI and Consumer Fitness Technology",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI personalised training coaching consumer (free)", url: "https://scholar.google.com/scholar?q=AI+personalised+training+coaching+consumer+sports+fitness" },
        { label: "MIT Technology Review — AI fitness technology (free)", url: "https://www.technologyreview.com" },
        primo.marketline,
      ]
    },
    {
      name: "Recovery Wearables and Sleep Technology",
      benefit: "Optimised recovery through sleep quality monitoring and intervention",
      subcategory: "Wearable Technology and Data",
      source: "Sleep Science and Athlete Recovery Research",
      novelty: "Emerging",
      links: [
        { label: "PubMed — sleep monitoring athlete recovery wearable (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sleep+monitoring+athlete+recovery+wearable" },
        { label: "Google Scholar — recovery wearable sleep consumer sport (free)", url: "https://scholar.google.com/scholar?q=recovery+wearable+sleep+technology+consumer+sport" },
        primo.euromonitor,
      ]
    },
    {
      name: "Sustainable and Recycled Activewear Materials",
      benefit: "Performance clothing with reduced environmental footprint",
      subcategory: "Activewear and Equipment Innovation",
      source: "Sustainability Values and Fashion Industry Pressure",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — sustainable activewear recycled material consumer (free)", url: "https://scholar.google.com/scholar?q=sustainable+recycled+activewear+material+consumer+acceptance" },
        { label: "GreenBiz — sustainable apparel innovation (free)", url: "https://www.greenbiz.com" },
        primo.marketline,
      ]
    },
    {
      name: "Adaptive and Inclusive Sports Equipment",
      benefit: "Participation in sport and fitness for people of all abilities",
      subcategory: "Activewear and Equipment Innovation",
      source: "Inclusive Design Movement and Paralympic Growth",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — adaptive sports equipment inclusive design (free)", url: "https://scholar.google.com/scholar?q=adaptive+sports+equipment+inclusive+design+disability" },
        { label: "Australian Paralympic Committee — participation data (free)", url: "https://www.paralympic.org.au" },
        primo.ibisworld,
      ]
    },
    {
      name: "Mind-Body and Mindful Movement Formats",
      benefit: "Mental health benefits alongside physical fitness",
      subcategory: "Mental Fitness and Mindful Movement",
      source: "Holistic Wellness and Mental Health Awareness",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — mindful movement mental health consumer trend (free)", url: "https://scholar.google.com/scholar?q=mindful+movement+yoga+mental+health+consumer+trend" },
        { label: "AIHW — physical activity and mental health (free)", url: "https://www.aihw.gov.au" },
        primo.euromonitor,
      ]
    },
    {
      name: "Low-Impact and Functional Fitness for Ageing",
      benefit: "Lifelong mobility and independence through age-appropriate exercise",
      subcategory: "Mental Fitness and Mindful Movement",
      source: "Ageing Population and Preventative Health Focus",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — low impact functional fitness ageing consumer (free)", url: "https://scholar.google.com/scholar?q=low+impact+functional+fitness+ageing+consumer+health" },
        { label: "AIHW — physical activity older Australians (free)", url: "https://www.aihw.gov.au" },
        primo.marketline,
      ]
    },
  ],

  // ── TECHNOLOGY TRENDS ─────────────────────────────────────────────────────
  technology: [
    {
      name: "Artificial Intelligence for Personalisation",
      benefit: "Tailored consumer experiences at scale",
      subcategory: "Artificial Intelligence and Data",
      source: "Artificial Intelligence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI personalisation consumer products (free)", url: "https://scholar.google.com/scholar?q=artificial+intelligence+personalisation+consumer+products" },
        { label: "MIT Technology Review — AI in consumer products (free)", url: "https://www.technologyreview.com" },
        primo.warc,
      ]
    },
    {
      name: "Machine Learning for Demand Forecasting",
      benefit: "Supply chain efficiency and reduced overproduction waste",
      subcategory: "Artificial Intelligence and Data",
      source: "Artificial Intelligence",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — machine learning demand forecasting supply chain (free)", url: "https://scholar.google.com/scholar?q=machine+learning+demand+forecasting+supply+chain" },
        { label: "Google Scholar — AI operations efficiency consumer goods (free)", url: "https://scholar.google.com/scholar?q=AI+operations+efficiency+consumer+goods+manufacturing" },
        primo.ibisworld,
      ]
    },
    {
      name: "Blockchain for Supply Chain Transparency",
      benefit: "Consumer trust through verified provenance and ethical sourcing claims",
      subcategory: "Artificial Intelligence and Data",
      source: "Blockchain and Distributed Ledger",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — blockchain supply chain transparency consumer trust (free)", url: "https://scholar.google.com/scholar?q=blockchain+supply+chain+transparency+consumer+trust" },
        { label: "Ellen MacArthur Foundation — transparency and circularity (free)", url: "https://www.ellenmacarthurfoundation.org" },
        primo.marketline,
      ]
    },
    {
      name: "IoT Connected Packaging and Products",
      benefit: "Consumer engagement and data collection beyond the point of purchase",
      subcategory: "Connected Devices and IoT",
      source: "Connected Technology",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — IoT smart packaging consumer engagement (free)", url: "https://scholar.google.com/scholar?q=IoT+smart+packaging+consumer+engagement" },
        { label: "Packaging Digest — connected packaging (free)", url: "https://www.packagingdigest.com" },
        primo.euromonitor,
      ]
    },
    {
      name: "Wearable Biosensors for Health Monitoring",
      benefit: "Real-time health and behavioural insight for consumers",
      subcategory: "Connected Devices and IoT",
      source: "Wearable Technology",
      novelty: "Emerging",
      links: [
        { label: "PubMed — wearable biosensor health monitoring (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=wearable+biosensor+health+monitoring" },
        { label: "IEEE Spectrum — wearable technology (free)", url: "https://spectrum.ieee.org" },
        primo.marketline,
      ]
    },
    {
      name: "Augmented Reality for Consumer Decision-Making",
      benefit: "Informed purchase confidence without physical product interaction",
      subcategory: "Connected Devices and IoT",
      source: "Augmented Reality",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — augmented reality retail consumer decision (free)", url: "https://scholar.google.com/scholar?q=augmented+reality+retail+consumer+decision" },
        primo.warc,
        primo.euromonitor,
      ]
    },
    {
      name: "Synthetic Biology and Precision Fermentation",
      benefit: "Sustainable and scalable ingredient production at lower environmental cost",
      subcategory: "Biotechnology and Science",
      source: "Biotechnology",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — precision fermentation food ingredients production (free)", url: "https://scholar.google.com/scholar?q=precision+fermentation+food+ingredient+production+sustainability" },
        { label: "SynBioBeta — synthetic biology news (free)", url: "https://synbiobeta.com" },
        { label: "The Spoon — food and biotech innovation (free)", url: "https://thespoon.tech" },
      ]
    },
    {
      name: "Biodegradable and Compostable Materials Science",
      benefit: "Reduced end-of-life environmental impact across product categories",
      subcategory: "Sustainable Technology",
      source: "Materials Science",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — biodegradable packaging consumer acceptance (free)", url: "https://scholar.google.com/scholar?q=biodegradable+compostable+packaging+consumer+acceptance" },
        { label: "Ellen MacArthur Foundation — material innovation (free)", url: "https://www.ellenmacarthurfoundation.org" },
        { label: "Australian Packaging Covenant Organisation (free)", url: "https://www.apco.org.au" },
      ]
    },
    {
      name: "Refillable System Design and Circular Formats",
      benefit: "Plastic waste reduction through consumer habit formation",
      subcategory: "Sustainable Technology",
      source: "Circular Economy Design",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — refillable product system consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=refillable+product+system+circular+consumer+behaviour" },
        { label: "Ellen MacArthur Foundation — refill and reuse (free)", url: "https://www.ellenmacarthurfoundation.org/resources/design/design-to-last" },
        primo.ibisworld,
      ]
    },
    {
      name: "GPS and Activity Tracking Wearables for Pets",
      benefit: "Pet health monitoring and owner reassurance",
      subcategory: "Pet Care Applications",
      source: "Wearable Technology",
      novelty: "Mainstream",
      links: [
        { label: "Google Scholar — GPS pet tracking wearable consumer adoption (free)", url: "https://scholar.google.com/scholar?q=GPS+pet+tracking+wearable+consumer+adoption" },
        { label: "Lens.org — pet wearable patents (free)", url: "https://www.lens.org" },
        primo.marketline,
      ]
    },
    {
      name: "AI-Powered Pet Behaviour and Health Analysis",
      benefit: "Early detection of distress and health changes without vet visit",
      subcategory: "Pet Care Applications",
      source: "Artificial Intelligence",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — AI animal behaviour detection health (free)", url: "https://scholar.google.com/scholar?q=artificial+intelligence+animal+behaviour+detection+health" },
        { label: "Veterinary Evidence Journal — open access (free)", url: "https://veterinaryevidence.org" },
        primo.euromonitor,
      ]
    },
    {
      name: "Automated Enrichment and Dispensing Systems",
      benefit: "Mental stimulation and feeding without requiring owner presence",
      subcategory: "Pet Care Applications",
      source: "Automation and Robotics",
      novelty: "Emerging",
      links: [
        { label: "Google Scholar — automated enrichment dispensing pet welfare (free)", url: "https://scholar.google.com/scholar?q=automated+enrichment+dispensing+pet+welfare" },
        { label: "RSPCA Australia — enrichment guidance (free)", url: "https://kb.rspca.org.au" },
        primo.ibisworld,
      ]
    },
  ],
};

// ─── FILTER OPTIONS ──────────────────────────────────────────────────────────

const filterOptions = {
  food: {
    subcategories: ["Functional and Health Ingredients", "Natural and Clean Label", "Packaging Innovation", "Culinary and Flavour Trends", "Sustainability and Waste Reduction"],
    benefits: [...new Set(trendsData.food.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.food.map(i => i.source))].sort(),
  },
  beauty: {
    subcategories: ["Natural and Botanical Ingredients", "Biotech and Lab-Derived Ingredients", "Sustainable Packaging", "Consumer Wellness Trends", "Personalisation and Technology"],
    benefits: [...new Set(trendsData.beauty.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.beauty.map(i => i.source))].sort(),
  },
  home: {
    subcategories: ["Cleaning and Laundry Innovation", "Home Fragrance and Ambience", "Organisation and Storage", "Smart Home Technology", "Sustainable Living"],
    benefits: [...new Set(trendsData.home.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.home.map(i => i.source))].sort(),
  },
  petcare: {
    subcategories: ["Calming and Anxiety Relief", "Enrichment and Mental Stimulation", "Wellness Supplements", "Packaging and Format Innovation", "Technology and Connected Products"],
    benefits: [...new Set(trendsData.petcare.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.petcare.map(i => i.source))].sort(),
  },
  social: {
    subcategories: ["Community and Housing", "Food and Economic Security", "Health and Wellbeing", "Inclusion and Access", "Environmental and Climate"],
    benefits: [...new Set(trendsData.social.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.social.map(i => i.source))].sort(),
  },
  sports: {
    subcategories: ["Sports Nutrition and Supplementation", "Wearable Technology and Data", "Activewear and Equipment Innovation", "Mental Fitness and Mindful Movement"],
    benefits: [...new Set(trendsData.sports.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.sports.map(i => i.source))].sort(),
  },
  technology: {
    subcategories: ["Artificial Intelligence and Data", "Connected Devices and IoT", "Biotechnology and Science", "Sustainable Technology", "Pet Care Applications"],
    benefits: [...new Set(trendsData.technology.map(i => i.benefit))].sort(),
    sources: [...new Set(trendsData.technology.map(i => i.source))].sort(),
  },
};

// ─── RESOURCES ───────────────────────────────────────────────────────────────

const publicResources = {
  food: [
    { label: "FoodNavigator — ingredient, science and regulation news (free)", url: "https://www.foodnavigator.com" },
    { label: "The Spoon — food technology and innovation (free)", url: "https://thespoon.tech" },
    { label: "IFT Food Technology Magazine (free)", url: "https://www.ift.org/food-technology-magazine" },
    { label: "CSIRO — food and nutrition research Australia (free)", url: "https://www.csiro.au/en/research/health-medical/nutrition" },
    { label: "Food Standards Australia New Zealand — FSANZ (free)", url: "https://www.foodstandards.gov.au" },
    { label: "OzHarvest — food waste and food security data (free)", url: "https://www.ozharvest.org" },
    { label: "Foodbank Australia — food insecurity research (free)", url: "https://www.foodbank.org.au/research" },
    { label: "Google Scholar — functional food ingredient efficacy (free)", url: "https://scholar.google.com/scholar?q=functional+food+ingredient+efficacy" },
    { label: "Euromonitor Passport — Food and Beverage (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "IBISWorld — Food Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "MarketLine Advantage (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
    { label: "WARC — food and beverage marketing (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  beauty: [
    { label: "Cosmetics Design — ingredient and trend news (free)", url: "https://www.cosmeticsdesign.com" },
    { label: "Global Cosmetic Industry — GCI Magazine (free)", url: "https://www.gcimagazine.com" },
    { label: "Premium Beauty News (free)", url: "https://www.premiumbeautynews.com" },
    { label: "PubMed — cosmetic ingredient clinical research (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=cosmetic+ingredient" },
    { label: "SynBioBeta — biotech beauty ingredient news (free)", url: "https://synbiobeta.com" },
    { label: "Australian Packaging Covenant Organisation — APCO (free)", url: "https://www.apco.org.au" },
    { label: "Google Scholar — personal care formulation evidence (free)", url: "https://scholar.google.com/scholar?q=cosmetic+active+ingredient+clinical+evidence" },
    { label: "Euromonitor Passport — Beauty and Personal Care (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "IBISWorld — Beauty Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "MarketLine Advantage (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
    { label: "WARC — beauty and personal care marketing (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  home: [
    { label: "Packaging Digest — household packaging and formats (free)", url: "https://www.packagingdigest.com" },
    { label: "Packaging Europe — sustainable packaging (free)", url: "https://packagingeurope.com" },
    { label: "Australian Packaging Covenant Organisation — APCO (free)", url: "https://www.apco.org.au" },
    { label: "Choice Australia — household product reviews and safety (free)", url: "https://www.choice.com.au/home-and-living" },
    { label: "Sustainability Victoria — household sustainability resources (free)", url: "https://www.sustainability.vic.gov.au" },
    { label: "GreenBiz — sustainable consumer goods (free)", url: "https://www.greenbiz.com" },
    { label: "Ellen MacArthur Foundation — circular economy (free)", url: "https://www.ellenmacarthurfoundation.org" },
    { label: "Google Scholar — household product consumer behaviour (free)", url: "https://scholar.google.com/scholar?q=household+product+consumer+behaviour+innovation" },
    { label: "Euromonitor Passport — Home and Household (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "IBISWorld — Household Products Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "WARC — home care marketing strategy (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  petcare: [
    { label: "RSPCA Australia Knowledge Base — animal behaviour and welfare (free)", url: "https://kb.rspca.org.au" },
    { label: "Veterinary Evidence Journal — open-access peer-reviewed research (free)", url: "https://veterinaryevidence.org" },
    { label: "PetMD — ingredient and health information (free)", url: "https://www.petmd.com" },
    { label: "APVMA — Australian pet product regulatory guidance (free)", url: "https://www.apvma.gov.au" },
    { label: "IAABC — animal behaviour and enrichment resources (free)", url: "https://iaabc.org/resources" },
    { label: "Lens.org — open patent search (free)", url: "https://www.lens.org" },
    { label: "Google Scholar — pet supplement and product efficacy (free)", url: "https://scholar.google.com/scholar?q=pet+supplement+product+efficacy+consumer" },
    { label: "Euromonitor Passport — Pet Care (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "IBISWorld — Pet Care Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "MarketLine Advantage (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  social: [
    { label: "AIHW — Australian Institute of Health and Welfare (free)", url: "https://www.aihw.gov.au" },
    { label: "AHURI — Australian Housing and Urban Research Institute (free)", url: "https://www.ahuri.edu.au" },
    { label: "Foodbank Australia — food insecurity research (free)", url: "https://www.foodbank.org.au/research" },
    { label: "Black Dog Institute — mental health research (free)", url: "https://www.blackdoginstitute.org.au/research" },
    { label: "Australian Human Rights Commission (free)", url: "https://humanrights.gov.au" },
    { label: "Australian Digital Inclusion Alliance (free)", url: "https://www.digitalinclusionindex.org.au" },
    { label: "Foundation for Young Australians — FYA (free)", url: "https://www.fya.org.au/research" },
    { label: "Ending Loneliness Together — Australian research (free)", url: "https://endingloneliness.com.au" },
    { label: "ABS — Australian Bureau of Statistics — social data (free)", url: "https://www.abs.gov.au" },
    { label: "CSIRO — climate and environmental futures (free)", url: "https://www.csiro.au/en/research/environmental-impacts/climate-change" },
    { label: "Ellen MacArthur Foundation — circular economy (free)", url: "https://www.ellenmacarthurfoundation.org" },
    { label: "Google Scholar — social innovation product design (free)", url: "https://scholar.google.com/scholar?q=social+innovation+product+design" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  sports: [
    { label: "PubMed — sports nutrition and supplement research (free)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=sports+nutrition+supplement+performance" },
    { label: "Sports Dietitians Australia — evidence-based nutrition (free)", url: "https://www.sportsdietitians.com.au" },
    { label: "Australian Sports Commission — participation and trends (free)", url: "https://www.ausport.gov.au" },
    { label: "AIHW — physical activity data Australia (free)", url: "https://www.aihw.gov.au/reports/physical-activity" },
    { label: "Australian Paralympic Committee — inclusive sport (free)", url: "https://www.paralympic.org.au" },
    { label: "IEEE Spectrum — wearable sports technology (free)", url: "https://spectrum.ieee.org" },
    { label: "GreenBiz — sustainable activewear and equipment (free)", url: "https://www.greenbiz.com" },
    { label: "Google Scholar — sports performance consumer product (free)", url: "https://scholar.google.com/scholar?q=sports+performance+consumer+product+innovation" },
    { label: "Euromonitor Passport — Sports and Fitness (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" },
    { label: "IBISWorld — Sports and Fitness Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "WARC — sports and active lifestyle marketing (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
  technology: [
    { label: "MIT Technology Review — technology trends (free)", url: "https://www.technologyreview.com" },
    { label: "IEEE Spectrum — engineering and technology news (free)", url: "https://spectrum.ieee.org" },
    { label: "Wired — technology and innovation reporting (free articles)", url: "https://www.wired.com" },
    { label: "SynBioBeta — synthetic biology and biotech (free)", url: "https://synbiobeta.com" },
    { label: "The Spoon — food and biotech innovation (free)", url: "https://thespoon.tech" },
    { label: "Ellen MacArthur Foundation — circular and sustainable technology (free)", url: "https://www.ellenmacarthurfoundation.org" },
    { label: "Australian Packaging Covenant Organisation — APCO (free)", url: "https://www.apco.org.au" },
    { label: "Lens.org — open patent search (free)", url: "https://www.lens.org" },
    { label: "Google Patents — technology innovation search (free)", url: "https://patents.google.com" },
    { label: "Google Scholar — technology adoption consumer products (free)", url: "https://scholar.google.com/scholar?q=technology+adoption+consumer+products+innovation" },
    { label: "IBISWorld — Technology and Digital Industry Reports (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" },
    { label: "WARC — technology and media marketing (RMIT login)", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/70m4cb/alma9914413070001341" },
    { label: "RMIT Library A-Z Databases", url: "https://rmit.libguides.com/az.php" },
  ],
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

  const currentData = trendsData[category] || [];
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

      <h1 style={{ color: "#ba372a", fontSize: "28px", fontWeight: "bold", marginBottom: "6px", marginTop: "0" }}>
        Category Trend Scouting Tool
      </h1>
      <p style={{ color: "#2c3e50", fontSize: "15px", marginTop: "0", marginBottom: "28px" }}>
        Explore trends, technologies, and opportunities by category. All linked sources are free or accessible through your RMIT student login.
      </p>

      {/* ── Category selector ── */}
      <div style={{ background: "#f6f6f6", border: "1px solid #e0e0e0", borderRadius: "10px", padding: "16px 18px", marginBottom: "22px" }}>
        <span style={{ fontWeight: "bold", marginBottom: "10px", display: "block", color: "#222" }}>Select your category</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {categories.map((cat) => (
            <button key={cat.value} onClick={() => handleCategoryChange(cat.value)} style={{
              padding: "9px 18px", borderRadius: "8px",
              border: category === cat.value ? "2px solid #ba372a" : "1px solid #ccc",
              background: category === cat.value ? "#ba372a" : "#fff",
              color: category === cat.value ? "#fff" : "#333",
              fontWeight: category === cat.value ? "bold" : "normal",
              fontSize: "14px", cursor: "pointer",
            }}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Filters ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "14px", alignItems: "flex-end" }}>
        {[
          { label: labels.subcategory,                            value: subcategory, setter: setSubcategory, options: currentFilters.subcategories, placeholder: "All sub-categories" },
          { label: `Filter by ${labels.benefit.toLowerCase()}`,  value: benefit,     setter: setBenefit,     options: currentFilters.benefits,       placeholder: `All ${labels.benefit.toLowerCase()}s` },
          { label: `Filter by ${labels.source.toLowerCase()}`,   value: source,      setter: setSource,      options: currentFilters.sources,        placeholder: `All ${labels.source.toLowerCase()}s` },
        ].map(({ label, value, setter, options, placeholder }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
            <span style={{ fontSize: "13px", fontWeight: "bold", color: "#555", marginBottom: "5px" }}>{label}</span>
            <select value={value} onChange={(e) => setter(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #bcbcbc", borderRadius: "6px", fontSize: "14px", background: "#fff", color: "#222" }}>
              <option value="">{placeholder}</option>
              {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
        {hasFilters && (
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <button onClick={() => { setBenefit(""); setSource(""); setSubcategory(""); }}
              style={{ padding: "8px 14px", border: "1px solid #ba372a", borderRadius: "6px", background: "#fff", color: "#ba372a", fontSize: "13px", cursor: "pointer" }}>
              Clear filters
            </button>
          </div>
        )}
      </div>

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
                <span style={{ ...(noveltyStyle[item.novelty] || { background: "#e9ecef", color: "#495057" }), fontSize: "11px", padding: "3px 8px", borderRadius: "12px", fontWeight: "bold", whiteSpace: "nowrap", flexShrink: 0 }}>
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

      {/* ── Resources ── */}
      <div style={{ background: "#f6f6f6", border: "1px solid #dde3e6", borderRadius: "10px", padding: "22px", marginTop: "8px" }}>
        <h3 style={{ fontSize: "17px", fontWeight: "bold", color: "#222", marginTop: "0", marginBottom: "4px" }}>
          Free research resources — {categories.find(c => c.value === category)?.label}
        </h3>
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "14px", marginTop: "0" }}>
          All sources below are free or accessible through your RMIT student login. Library databases are available on the{" "}
          <a href="https://rmit.libguides.com/az.php" target="_blank" rel="noopener noreferrer" style={{ color: "#ba372a" }}>RMIT Library A-Z Databases page</a>.
        </p>
        <div style={{ background: "#f7fbff", border: "1px solid #cfe3f6", borderRadius: "8px", padding: "10px 14px", marginBottom: "14px", fontSize: "13px", color: "#2c3e50" }}>
          <strong>Access key:</strong> Sources marked <strong>[free]</strong> require no login. Sources marked <strong>[free — register]</strong> require a free account. Sources marked <strong>(RMIT login)</strong> require your student credentials.
        </div>
        {currentResources.map((res, i) => (
          <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
            style={{ color: "#ba372a", textDecoration: "none", fontSize: "14px", display: "block", marginBottom: "6px" }}>
            → {res.label}
          </a>
        ))}
      </div>

      <p style={{ textAlign: "center", fontSize: "12px", color: "#bbb", paddingTop: "20px", marginTop: "24px", borderTop: "1px solid #eee" }}>
        © RMIT University 2026 — MKTG1092 Product Innovation and Management
      </p>

    </div>
  );
}

export default App;
