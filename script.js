const cases = [
  {
    id: "glioblastoma",
    title: "Glioblastoma",
    category: "glial",
    grade: "WHO grade 4",
    image: "assets/slides/glioblastoma.png",
    alt: "Synthetic glioblastoma H and E slide with necrosis and vascular proliferation",
    pattern: "Palisading necrosis",
    magnification: "Medium power",
    summary:
      "A high-grade diffuse glioma pattern with dense cellularity, necrosis, and vascular proliferation.",
    features: [
      "Pseudopalisading tumor cells bordering necrotic zones",
      "Pleomorphic hyperchromatic nuclei and brisk mitotic activity",
      "Microvascular proliferation with crowded endothelial tufts",
      "Infiltrative glial background at the field edge",
    ],
  },
  {
    id: "pilocytic-astrocytoma",
    title: "Pilocytic Astrocytoma",
    category: "glial",
    grade: "WHO grade 1",
    image: "assets/slides/pilocytic-astrocytoma.png",
    alt: "Synthetic pilocytic astrocytoma H and E slide with Rosenthal fibers",
    pattern: "Biphasic glial tumor",
    magnification: "Medium power",
    summary:
      "A low-grade circumscribed astrocytic tumor with alternating compact and microcystic zones.",
    features: [
      "Compact fibrillary areas beside loose microcystic tissue",
      "Rosenthal fibers in elongated eosinophilic forms",
      "Eosinophilic granular bodies scattered in the glial matrix",
      "Bland elongated nuclei with low mitotic activity",
    ],
  },
  {
    id: "diffuse-astrocytoma",
    title: "Diffuse Astrocytoma",
    category: "glial",
    grade: "WHO grade 2",
    image: "assets/slides/diffuse-astrocytoma.png",
    alt: "Synthetic diffuse astrocytoma H and E slide with infiltrating fibrillary glioma",
    pattern: "Infiltrating fibrillary glioma",
    magnification: "Medium power",
    summary:
      "A lower-grade diffuse astrocytic pattern with infiltrative growth and subtle nuclear atypia.",
    features: [
      "Mildly hypercellular fibrillary glial background",
      "Atypical astrocytic nuclei dispersed through neuropil",
      "Entrapped neurons supporting an infiltrative process",
      "No necrosis or microvascular proliferation in the field",
    ],
  },
  {
    id: "anaplastic-astrocytoma",
    title: "Anaplastic Astrocytoma",
    category: "glial",
    grade: "WHO grade 3",
    image: "assets/slides/anaplastic-astrocytoma.png",
    alt: "Synthetic anaplastic astrocytoma H and E slide with hypercellular atypical glial tumor",
    pattern: "Mitotically active astrocytoma",
    magnification: "Medium-high power",
    summary:
      "An infiltrating astrocytic tumor pattern with increased cellularity, atypia, and mitotic activity.",
    features: [
      "Hypercellular fibrillary glial tumor background",
      "Marked nuclear atypia compared with low-grade astrocytoma",
      "Mitotic figures in an infiltrative astrocytic process",
      "No necrosis or microvascular proliferation in this teaching field",
    ],
  },
  {
    id: "ganglioglioma",
    title: "Ganglioglioma",
    category: "neuronal",
    grade: "WHO grade 1",
    image: "assets/slides/ganglioglioma.png",
    alt: "Synthetic ganglioglioma H and E slide with dysplastic neurons in glial background",
    pattern: "Mixed neuronal-glial tumor",
    magnification: "Medium power",
    summary:
      "A low-grade mixed tumor pattern with dysplastic ganglion cells embedded in a glial matrix.",
    features: [
      "Large dysplastic neurons with irregular clustering",
      "Binucleation and abundant eosinophilic neuronal cytoplasm",
      "Fibrillary glial background surrounding neuronal elements",
      "Scattered lymphocytes may be seen in the lesion",
    ],
  },
  {
    id: "central-neurocytoma",
    title: "Central Neurocytoma",
    category: "neuronal",
    grade: "WHO grade 2",
    image: "assets/slides/central-neurocytoma.png",
    alt: "Synthetic central neurocytoma H and E slide with uniform neurocytic cells and neuropil islands",
    pattern: "Uniform neurocytic cells",
    magnification: "Medium power",
    summary:
      "A neuronal tumor pattern with monomorphic round cells, neuropil-rich islands, and delicate vessels.",
    features: [
      "Uniform round cells with finely speckled chromatin",
      "Perinuclear halos resembling an oligodendroglioma-like look",
      "Neuropil-rich islands and rosette-like areas",
      "Branching capillary network between tumor cells",
    ],
  },
  {
    id: "meningioma",
    title: "Meningioma",
    category: "meningeal",
    grade: "WHO grade 1",
    image: "assets/slides/meningioma.png",
    alt: "Synthetic meningioma H and E slide with whorls and psammoma bodies",
    pattern: "Whorled meningothelial nests",
    magnification: "Medium power",
    summary:
      "A transitional meningioma-like field emphasizing syncytial nests, whorls, and calcification.",
    features: [
      "Concentric meningothelial whorls",
      "Psammoma bodies with laminated calcified centers",
      "Oval nuclei with delicate chromatin and subtle grooves",
      "Collagenous background between tumor nests",
    ],
  },
  {
    id: "schwannoma",
    title: "Schwannoma",
    category: "nerve-sheath",
    grade: "WHO grade 1",
    image: "assets/slides/schwannoma.png",
    alt: "Synthetic schwannoma H and E slide with Antoni A and Antoni B areas",
    pattern: "Antoni A/B architecture",
    magnification: "Medium power",
    summary:
      "A benign nerve sheath tumor pattern with alternating compact and loose spindle-cell areas.",
    features: [
      "Compact Antoni A regions beside loose Antoni B regions",
      "Nuclear palisading with Verocay body-like zones",
      "Bland spindle cells in a fibrillary background",
      "Hyalinized vessels often seen in schwannoma",
    ],
  },
  {
    id: "hemangioblastoma",
    title: "Hemangioblastoma",
    category: "vascular",
    grade: "WHO grade 1",
    image: "assets/slides/hemangioblastoma.png",
    alt: "Synthetic hemangioblastoma H and E slide with capillaries and vacuolated stromal cells",
    pattern: "Capillary-rich stromal tumor",
    magnification: "Medium power",
    summary:
      "A cerebellar-region tumor pattern with dense capillary networks and lipidized stromal cells.",
    features: [
      "Numerous thin-walled capillaries throughout the field",
      "Vacuolated stromal cells with pale clear cytoplasm",
      "Scattered erythrocytes in delicate vascular spaces",
      "Reticulated background separating stromal cells",
    ],
  },
  {
    id: "medulloblastoma",
    title: "Medulloblastoma",
    category: "embryonal",
    grade: "WHO grade 4",
    image: "assets/slides/medulloblastoma.png",
    alt: "Synthetic medulloblastoma H and E slide with small round blue cells",
    pattern: "Small round blue cells",
    magnification: "High cellularity",
    summary:
      "An embryonal tumor pattern with primitive blue cells and rosette-like architecture.",
    features: [
      "Sheets of densely packed hyperchromatic cells",
      "High nuclear-to-cytoplasmic ratio with scant cytoplasm",
      "Homer Wright-like rosette formations",
      "Apoptotic bodies and brisk proliferative appearance",
    ],
  },
  {
    id: "pineoblastoma",
    title: "Pineoblastoma",
    category: "embryonal",
    grade: "WHO grade 4",
    image: "assets/slides/pineoblastoma.png",
    alt: "Synthetic pineoblastoma H and E slide with primitive small blue cells and rosettes",
    pattern: "Primitive pineal tumor",
    magnification: "High cellularity",
    summary:
      "A highly cellular embryonal tumor pattern of the pineal region with primitive blue cells.",
    features: [
      "Sheets of small hyperchromatic primitive cells",
      "Scant cytoplasm and frequent mitotic activity",
      "Necrotic foci in a densely cellular field",
      "Pineocytomatous rosette-like structures may be present",
    ],
  },
  {
    id: "primary-cns-lymphoma",
    title: "Primary CNS Lymphoma",
    category: "lymphoid",
    grade: "High grade",
    image: "assets/slides/primary-cns-lymphoma.png",
    alt: "Synthetic primary CNS lymphoma H and E slide with angiocentric lymphoid cells",
    pattern: "Angiocentric lymphoma",
    magnification: "Medium-high power",
    summary:
      "A dense large-cell lymphoid pattern with prominent angiocentric cuffing in brain tissue.",
    features: [
      "Large atypical lymphoid cells arranged around vessels",
      "Hyperchromatic nuclei with scant intervening brain tissue",
      "Apoptotic debris in a densely cellular background",
      "Perivascular distribution as a major diagnostic clue",
    ],
  },
  {
    id: "metastatic-adenocarcinoma",
    title: "Metastatic Adenocarcinoma",
    category: "metastatic",
    grade: "Metastatic tumor",
    image: "assets/slides/metastatic-adenocarcinoma.png",
    alt: "Synthetic metastatic adenocarcinoma H and E slide with malignant glands in brain",
    pattern: "Malignant gland formation",
    magnification: "Medium power",
    summary:
      "A metastatic epithelial tumor pattern contrasting malignant glands with surrounding CNS tissue.",
    features: [
      "Irregular malignant glands infiltrating brain parenchyma",
      "Pale mucin-like lumina within glandular structures",
      "Desmoplastic stromal response around tumor nests",
      "Adjacent gliotic brain tissue at the interface",
    ],
  },
  {
    id: "oligodendroglioma",
    title: "Oligodendroglioma",
    category: "glial",
    grade: "WHO grade 2 or 3",
    image: "assets/slides/oligodendroglioma.png",
    alt: "Synthetic oligodendroglioma H and E slide with perinuclear halos and branching capillaries",
    pattern: "Fried-egg cells",
    magnification: "Medium power",
    summary:
      "A diffuse glioma pattern with uniform round nuclei, clear halos, and delicate branching vessels.",
    features: [
      "Round regular nuclei with perinuclear clearing",
      "Chicken-wire capillary network between tumor cells",
      "Scattered calcification-like deposits",
      "Relatively uniform cytology compared with high-grade glioma",
    ],
  },
  {
    id: "ependymoma",
    title: "Ependymoma",
    category: "glial",
    grade: "WHO grade 2 or 3",
    image: "assets/slides/ependymoma.png",
    alt: "Synthetic ependymoma H and E slide with perivascular pseudorosettes",
    pattern: "Perivascular pseudorosettes",
    magnification: "Medium power",
    summary:
      "A glial tumor pattern organized around vessels with fibrillary anuclear zones.",
    features: [
      "Tumor cells radially arranged around blood vessels",
      "Fibrillary processes forming perivascular anuclear zones",
      "Round to oval nuclei in a glial background",
      "Rosette-like architecture distinct from embryonal rosettes",
    ],
  },
  {
    id: "pituitary-adenoma",
    title: "Pituitary Adenoma",
    category: "sellar",
    grade: "PitNET",
    image: "assets/slides/pituitary-adenoma.png",
    alt: "Synthetic pituitary adenoma H and E slide with neuroendocrine sheets and trabeculae",
    pattern: "Neuroendocrine sheets",
    magnification: "Medium power",
    summary:
      "A sellar neuroendocrine tumor pattern with monotonous cells and delicate sinusoidal vessels.",
    features: [
      "Sheets and trabeculae of uniform neuroendocrine cells",
      "Round nuclei with salt-and-pepper chromatin",
      "Delicate vascular channels between cell nests",
      "Loss of normal pituitary acinar architecture",
    ],
  },
  {
    id: "craniopharyngioma",
    title: "Adamantinomatous Craniopharyngioma",
    category: "sellar",
    grade: "WHO grade 1",
    image: "assets/slides/craniopharyngioma.png",
    alt: "Synthetic adamantinomatous craniopharyngioma H and E slide with wet keratin",
    pattern: "Wet keratin and palisading epithelium",
    magnification: "Medium power",
    summary:
      "A sellar epithelial tumor pattern with palisaded squamous nests, keratin, and calcification.",
    features: [
      "Peripheral palisading of squamous epithelial nests",
      "Wet keratin-like eosinophilic material",
      "Stellate reticulum-like loose epithelial regions",
      "Calcification-like deposits and cholesterol cleft-like spaces",
    ],
  },
  {
    id: "demyelinating-plaque",
    title: "Demyelinating Plaque",
    category: "inflammatory",
    grade: "Non-neoplastic",
    image: "assets/slides/demyelinating-plaque.png",
    alt: "Synthetic demyelinating plaque H and E slide with macrophages and perivascular lymphocytes",
    pattern: "Macrophage-rich plaque",
    magnification: "Low-medium power",
    summary:
      "A demyelinating injury pattern with pale white matter, macrophages, and reactive gliosis.",
    features: [
      "Pale myelin-poor plaque compared with adjacent white matter",
      "Macrophage-rich infiltrate in the lesion",
      "Perivascular lymphocytes and reactive astrocytes",
      "Relative axonal preservation is suggested by architecture",
    ],
  },
  {
    id: "viral-encephalitis",
    title: "Viral Encephalitis",
    category: "inflammatory",
    grade: "Infectious",
    image: "assets/slides/viral-encephalitis.png",
    alt: "Synthetic viral encephalitis H and E slide with microglial nodules",
    pattern: "Microglial nodules",
    magnification: "Medium power",
    summary:
      "An inflammatory gray matter injury pattern with perivascular lymphocytes and neuronophagia.",
    features: [
      "Microglial nodules scattered through neuron-rich gray matter",
      "Perivascular lymphocytic cuffing",
      "Neuronophagia around injured neurons",
      "Reactive astrocytes in the affected neuropil",
    ],
  },
  {
    id: "tuberculous-meningitis",
    title: "Tuberculous Meningitis",
    category: "inflammatory",
    grade: "Infectious",
    image: "assets/slides/tuberculous-meningitis.png",
    alt: "Synthetic tuberculous meningitis H and E slide with granulomatous inflammation",
    pattern: "Caseating granulomas",
    magnification: "Medium power",
    summary:
      "A granulomatous meningeal inflammation pattern with necrosis and giant-cell reaction.",
    features: [
      "Caseating granuloma-like necrotic centers",
      "Epithelioid histiocytes and Langhans-type giant cells",
      "Lymphocytic rim within inflamed meninges",
      "Adjacent brain edge helps localize the meningeal process",
    ],
  },
  {
    id: "acute-bacterial-meningitis",
    title: "Acute Bacterial Meningitis",
    category: "inflammatory",
    grade: "Infectious",
    image: "assets/slides/acute-bacterial-meningitis.png",
    alt: "Synthetic acute bacterial meningitis H and E slide with neutrophilic exudate",
    pattern: "Neutrophilic meningeal exudate",
    magnification: "Low-medium power",
    summary:
      "An acute suppurative meningitis pattern with neutrophils filling the subarachnoid space.",
    features: [
      "Leptomeninges packed with neutrophils",
      "Fibrinous exudate along the cortical surface",
      "Congested meningeal vessels",
      "Adjacent cortex emphasizes subarachnoid localization",
    ],
  },
  {
    id: "toxoplasmosis",
    title: "Toxoplasmosis Abscess",
    category: "inflammatory",
    grade: "Infectious",
    image: "assets/slides/toxoplasmosis.png",
    alt: "Synthetic toxoplasmosis H and E slide with necrotizing abscess and parasite-like cyst forms",
    pattern: "Necrotizing parasitic abscess",
    magnification: "Medium-high power",
    summary:
      "A parasitic abscess pattern with necrosis, inflammation, and organism-like cyst clusters.",
    features: [
      "Necrotizing inflammation with macrophages and lymphocytes",
      "Tiny tachyzoite-like forms near the lesion edge",
      "Rounded bradyzoite cyst-like clusters",
      "Reactive gliosis and vascular cuffing",
    ],
  },
  {
    id: "cerebral-infarct",
    title: "Subacute Cerebral Infarct",
    category: "vascular",
    grade: "Non-neoplastic",
    image: "assets/slides/cerebral-infarct.png",
    alt: "Synthetic subacute cerebral infarct H and E slide with necrotic neurons and macrophages",
    pattern: "Ischemic necrosis",
    magnification: "Medium power",
    summary:
      "A vascular injury pattern showing necrotic neurons, vacuolated neuropil, and macrophage cleanup.",
    features: [
      "Eosinophilic necrotic neurons in injured brain tissue",
      "Vacuolated neuropil with tissue rarefaction",
      "Macrophages and reactive gliosis in subacute repair",
      "Congested small vessels in the affected field",
    ],
  },
  {
    id: "brain-abscess",
    title: "Bacterial Brain Abscess",
    category: "inflammatory",
    grade: "Infectious",
    image: "assets/slides/brain-abscess.png",
    alt: "Synthetic bacterial brain abscess H and E slide with neutrophils and granulation tissue",
    pattern: "Suppurative necrosis",
    magnification: "Medium power",
    summary:
      "An infectious CNS lesion pattern with neutrophil-rich necrosis and a reactive abscess wall.",
    features: [
      "Necrotic center packed with neutrophils and debris",
      "Granulation tissue rim with congested small vessels",
      "Reactive gliosis around the abscess edge",
      "Cavity-like inflammatory architecture",
    ],
  },
  {
    id: "arteriovenous-malformation",
    title: "Arteriovenous Malformation",
    category: "vascular",
    grade: "Vascular malformation",
    image: "assets/slides/arteriovenous-malformation.png",
    alt: "Synthetic arteriovenous malformation H and E slide with tangled abnormal vessels",
    pattern: "Tangled arteries and veins",
    magnification: "Low-medium power",
    summary:
      "A vascular malformation pattern with abnormal vessels of variable wall thickness in gliotic brain.",
    features: [
      "Clustered malformed arteries and veins",
      "Variable vessel wall thickness and hyalinization",
      "Gliotic brain parenchyma between vascular channels",
      "Hemosiderin-like pigment suggesting prior microhemorrhage",
    ],
  },
  {
    id: "cerebral-amyloid-angiopathy",
    title: "Cerebral Amyloid Angiopathy",
    category: "vascular",
    grade: "Vascular degenerative",
    image: "assets/slides/cerebral-amyloid-angiopathy.png",
    alt: "Synthetic cerebral amyloid angiopathy H and E slide with glassy vessel walls",
    pattern: "Amyloid-thickened vessels",
    magnification: "Medium power",
    summary:
      "A cortical and leptomeningeal vascular pattern with glassy eosinophilic vessel-wall thickening.",
    features: [
      "Small vessels with thick glassy eosinophilic walls",
      "Cortical and leptomeningeal vessel involvement",
      "Old microhemorrhage pigment-like deposits may be present",
      "Sparse inflammation compared with vasculitis patterns",
    ],
  },
  {
    id: "cavernous-malformation",
    title: "Cavernous Malformation",
    category: "vascular",
    grade: "Vascular malformation",
    image: "assets/slides/cavernous-malformation.png",
    alt: "Synthetic cavernous malformation H and E slide with dilated vascular spaces",
    pattern: "Back-to-back cavernous vessels",
    magnification: "Low-medium power",
    summary:
      "A cavernous vascular lesion pattern with dilated thin-walled channels and little intervening brain.",
    features: [
      "Back-to-back dilated vascular spaces",
      "Thin vessel walls with minimal intervening parenchyma",
      "Organizing thrombus-like material in some channels",
      "Gliotic rim and hemosiderin-like pigment at the edge",
    ],
  },
  {
    id: "alzheimer-disease",
    title: "Alzheimer Disease",
    category: "degenerative",
    grade: "Neurodegenerative",
    image: "assets/slides/alzheimer-disease.png",
    alt: "Synthetic Alzheimer disease silver-stain-like slide with plaques and tangles",
    pattern: "Plaques and tangles",
    magnification: "Medium power",
    summary:
      "A neurodegenerative teaching field using a silver-stain-like look to emphasize plaques and tangles.",
    features: [
      "Neuritic plaque-like deposits scattered in cortex",
      "Dark neurofibrillary tangle-like neuronal inclusions",
      "Neuropil thread-like dark processes",
      "Mild neuronal loss in the cortical background",
    ],
  },
  {
    id: "lewy-body-disease",
    title: "Lewy Body Disease",
    category: "degenerative",
    grade: "Neurodegenerative",
    image: "assets/slides/lewy-body-disease.png",
    alt: "Synthetic Lewy body disease H and E slide with eosinophilic neuronal inclusions",
    pattern: "Lewy body-like inclusions",
    magnification: "Medium-high power",
    summary:
      "A neurodegenerative brainstem-pattern field highlighting neuronal cytoplasmic inclusions.",
    features: [
      "Round eosinophilic intracytoplasmic inclusion-like bodies",
      "Pale halos around inclusions in pigmented neurons",
      "Neuromelanin-like pigment in brainstem-type neurons",
      "Mild neuronal loss and gliosis in the background",
    ],
  },
  {
    id: "prion-disease",
    title: "Prion Disease",
    category: "degenerative",
    grade: "Neurodegenerative",
    image: "assets/slides/prion-disease.png",
    alt: "Synthetic prion disease H and E slide with spongiform change",
    pattern: "Spongiform change",
    magnification: "Medium power",
    summary:
      "A spongiform encephalopathy pattern with widespread neuropil vacuolation and gliosis.",
    features: [
      "Fine vacuolation throughout cortical neuropil",
      "Neuronal loss with reactive astrocytosis",
      "Sparse inflammation despite marked tissue change",
      "Microvacuoles create a spongiform texture",
    ],
  },
];

const cardContainer = document.querySelector("#caseCards");
const searchInput = document.querySelector("#searchInput");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const viewerImage = document.querySelector("#viewerImage");
const viewerCategory = document.querySelector("#viewerCategory");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerGrade = document.querySelector("#viewerGrade");
const viewerSummary = document.querySelector("#viewerSummary");
const viewerPattern = document.querySelector("#viewerPattern");
const viewerMag = document.querySelector("#viewerMag");
const viewerFeatures = document.querySelector("#viewerFeatures");

let activeFilter = "all";
let activeCaseId = cases[0].id;

function categoryLabel(category) {
  const labels = {
    glial: "Glial tumor",
    embryonal: "Embryonal tumor",
    neuronal: "Neuronal tumor",
    meningeal: "Meningeal tumor",
    "nerve-sheath": "Nerve sheath tumor",
    vascular: "Vascular lesion",
    inflammatory: "Inflammatory lesion",
    degenerative: "Degenerative disease",
    sellar: "Sellar lesion",
    metastatic: "Metastatic tumor",
    lymphoid: "Lymphoid tumor",
  };

  return labels[category] ?? category;
}

function matchesCase(item, query) {
  const haystack = [
    item.title,
    item.category,
    item.grade,
    item.pattern,
    item.summary,
    ...item.features,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}

function filteredCases() {
  const query = searchInput.value;
  return cases.filter((item) => {
    const filterMatch = activeFilter === "all" || item.category === activeFilter;
    const searchMatch = !query.trim() || matchesCase(item, query);
    return filterMatch && searchMatch;
  });
}

function setActiveCase(id) {
  const item = cases.find((entry) => entry.id === id) ?? cases[0];
  activeCaseId = item.id;

  viewerImage.src = item.image;
  viewerImage.alt = item.alt;
  viewerCategory.textContent = categoryLabel(item.category);
  viewerTitle.textContent = item.title;
  viewerGrade.textContent = item.grade;
  viewerSummary.textContent = item.summary;
  viewerPattern.textContent = item.pattern;
  viewerMag.textContent = item.magnification;
  viewerFeatures.replaceChildren(
    ...item.features.map((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      return li;
    }),
  );

  document.querySelectorAll(".case-card").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeCaseId);
  });
}

function renderCards() {
  const visibleCases = filteredCases();

  cardContainer.replaceChildren(
    ...visibleCases.map((item) => {
      const button = document.createElement("button");
      button.className = "case-card";
      button.type = "button";
      button.dataset.id = item.id;
      button.innerHTML = `
        <img src="${item.image}" alt="" loading="lazy">
        <span>
          <strong>${item.title}</strong>
          <span>${categoryLabel(item.category)} · ${item.pattern}</span>
        </span>
      `;
      button.addEventListener("click", () => setActiveCase(item.id));
      return button;
    }),
  );

  if (!visibleCases.some((item) => item.id === activeCaseId)) {
    setActiveCase(visibleCases[0]?.id ?? cases[0].id);
  } else {
    setActiveCase(activeCaseId);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);

renderCards();
