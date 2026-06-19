export const projectFacts = {
  fullName:
    "Terminology-Aware Machine Translation for Accessible Science",
  shortName: "TaMTAS",
  durationMonths: 36,
  domain: "Life Sciences",
  status: "Research and development",
  targetReadiness: "TRL 5–6",
} as const;

export const languages = [
  {
    code: "EN",
    name: "English",
    description:
      "The main source language for a large share of scientific publishing.",
  },
  {
    code: "ES",
    name: "Spanish",
    description:
      "A widely used language for research, education and public communication.",
  },
  {
    code: "CA",
    name: "Catalan",
    description:
      "A language with active scientific communities and a need for richer domain resources.",
  },
  {
    code: "ET",
    name: "Estonian",
    description:
      "A lower-resourced language used to test robust multilingual adaptation.",
  },
  {
    code: "GA",
    name: "Irish",
    description:
      "A lower-resourced language central to equitable access to health and scientific information.",
  },
] as const;

export const partners = [
  {
    short: "UOC",
    name: "Universitat Oberta de Catalunya",
    country: "Spain",
    lead: "Project coordination, corpora and terminology",
    description:
      "Coordinates TaMTAS and leads the creation of domain corpora, terminology extraction and terminology-aware data augmentation.",
    href: "https://www.uoc.edu/",
  },
  {
    short: "BSC",
    name: "Barcelona Supercomputing Center",
    country: "Spain",
    lead: "Terminology-aware machine translation",
    description:
      "Leads the development and fine-tuning of multilingual reasoning-based machine translation for scientific documents.",
    href: "https://www.bsc.es/",
  },
  {
    short: "UoS",
    name: "University of Surrey",
    country: "United Kingdom",
    lead: "Quality estimation and automatic post-editing",
    description:
      "Develops terminology-aware quality estimation and automatic post-editing, and coordinates open-science practice.",
    href: "https://www.surrey.ac.uk/centre-translation-studies",
  },
  {
    short: "DCU",
    name: "Dublin City University",
    country: "Ireland",
    lead: "Evaluation, dissemination and impact",
    description:
      "Leads human-centred evaluation and ensures that results are communicated clearly to research communities and the public.",
    href: "https://www.dcu.ie/",
  },
  {
    short: "UT",
    name: "University of Tartu",
    country: "Estonia",
    lead: "Post-translation text augmentation",
    description:
      "Develops audience-aware simplification and explanation strategies for translated scientific content.",
    href: "https://ut.ee/en",
  },
] as const;

export const stakeholders = [
  {
    name: "Centre for Genomic Regulation",
    short: "CRG",
    role: "Life-sciences pilot, Catalan and Spanish",
    href: "https://www.crg.eu/",
  },
  {
    name: "Institut d’Estudis Catalans",
    short: "IEC",
    role: "Catalan scientific language resources",
    href: "https://www.iec.cat/",
  },
  {
    name: "Institute of Family Medicine and Public Health",
    short: "UT Health",
    role: "Medical research pilot, Estonian",
    href: "https://tervis.ut.ee/en",
  },
  {
    name: "Conradh na Gaeilge",
    short: "CnaG",
    role: "Irish-language public and healthcare perspective",
    href: "https://www.cnag.ie/en/",
  },
] as const;

export const tools = [
  {
    name: "TBXTools",
    kind: "Terminology extraction and management",
    description:
      "An open-source suite for extracting, expanding and managing domain terminology.",
    href: "https://github.com/aoliverg/TBXTools",
  },
  {
    name: "MTUOC",
    kind: "Machine translation framework",
    description:
      "An open framework for training, integrating and deploying machine translation systems.",
    href: "https://mtuoc.github.io/",
  },
  {
    name: "TransQuest",
    kind: "Translation quality estimation",
    description:
      "An open-source framework for predicting machine translation quality without reference translations.",
    href: "https://github.com/TharinduDR/TransQuest",
  },
] as const;

export const researchStages = [
  {
    title: "Build multilingual scientific resources",
    description:
      "Compile parallel and comparable corpora, then extract and enrich terminology for the five project languages.",
    workPackage: "WP2",
  },
  {
    title: "Translate at document level",
    description:
      "Train reasoning-based models to preserve terminology and coherence across complete scientific documents.",
    workPackage: "WP3",
  },
  {
    title: "Detect and correct errors",
    description:
      "Use quality estimation and automatic post-editing to identify terminology problems and refine translations.",
    workPackage: "WP4",
  },
  {
    title: "Adapt text to its audience",
    description:
      "Simplify complex structures and provide explanations while preserving the scientific meaning.",
    workPackage: "WP5",
  },
  {
    title: "Evaluate with real users",
    description:
      "Test the integrated system with scientific experts and language communities in authentic use cases.",
    workPackage: "WP6",
  },
] as const;
