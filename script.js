const malla = document.getElementById('malla');

const datosMalla = [
  {
    semestre: "Semestre 1",
    ramos: [
      { nombre: "Bases Moleculares", id: "bases-moleculares" },
      { nombre: "Métodos de cuantificación", id: "metodos-cuantificacion" },
      { nombre: "Inglés Beginner", id: "ingles-beginner" },
      { nombre: "Orientación a la MV", id: "orientacion-mv" },
      { nombre: "Diversidad Animal", id: "diversidad-animal" },
      { nombre: "Int. al Manejo de Información", id: "manejo-info" }
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { nombre: "Bases moleculares y celulares", id: "bases-moleculares-celulares", prerequisitos: ["bases-moleculares"] },
      { nombre: "Bases celulares", id: "bases-celulares", prerequisitos: ["bases-moleculares"] },
      { nombre: "Bioestadísticas", id: "bioestadística", prerequisitos: ["metodos-cuantificacion","manejo-info"] },
      { nombre: "Des. Micro. del Organismo Animal", id: "desarrollo-micro", prerequisitos: ["diversidad-animal"] },
      { nombre: "Práctica general básica", id: "practica-general-basica", prerequisitos: ["orientacion-mv"] },
      { nombre: "Inglés Preintermedio", id: "ingles-pre" },
      { nombre: "Ecología", id: "ecologia" },
      { nombre: "Est. Macro. del organismo Animal", id: "estructura-macro", prerequisitos: ["diversidad-animal"] },
      { nombre: "Seminario espacio A", id: "seminario-a" }
    ]
  },
  {
    semestre: "Semestre 3",
    ramos: [
      { nombre: "Conducta Animal", id: "conducta" },
      { nombre: "Epidemiología general", id: "epidemiologia", prerequisitos: ["manejo-info"] },
      { nombre: "Bases económicas", id: "economia1" },
      { nombre: "Fisiología I", id: "fisiologia1", prerequisitos: ["bases-celulares"] },
      { nombre: "Est. Macro. del organismo Animal", id: "estructura-macro2", prerequisitos: ["estructura-macro"] },
      { nombre: "Práctica clínica básica", id: "practica-clinica", prerequisitos: ["practica-general"] },
      { nombre: "Práctica de campo básica", id: "campo-basica", prerequisitos: ["practica-clinica"] },
      { nombre: "Des. Micro. del Organismo Animal", id: "desarrollo-micro2", prerequisitos: ["desarrollo-micro"] }
    ]
  },
  {
    semestre: "Semestre 4",
    ramos: [
      { nombre: "Bases inmunológicas", id: "inmunologia", prerequisitos: ["bases-moleculares-celulares"] },
      { nombre: "Farmacología general", id: "farmacologia", prerequisitos: ["fisiologia1"] },
      { nombre: "Agentes biológicos patógenos", id: "agentes-patogenos", prerequisitos: ["bases-moleculares-celulares","bases-celulares"] },
      { nombre: "Fisiología II", id: "fisiologia2", prerequisitos: ["fisiologia1"] },
      { nombre: "Int. Producción Animal", id: "intro-produccion" },
      { nombre: "MAEP", id: "maep", prerequisitos: ["ecologia"] },
      { nombre: "Bases económicas", id: "economia2",  prerequisitos: ["economia1"] },
      { nombre: "Módulo Int. Ciclo Básico", id: "modulo-basico", prerequisitos: ["ecologia", "bases-moleculares", "metodos-cuantificacion", "ingles-beginner", "orientacion-mv", "diversidad-animal", "manejo-info", "bases-moleculares-celulares", "bases-celulares", "bioestadística", "desarrollo-micro", "practica-general-básica", "estructura-macro", "seminario-a", "conducta", "epidemiologia", "economia1", "fisiologia1", "estructura-macro2", "desarrollo-micro2", "practica-clinica", "campo-basica"] }
    ]
  },
  {
    semestre: "Semestre 5",
    ramos: [
      { nombre: "Enf. Infecciosas y parasitarias", id: "enfermedades-infecciosas", prerequisitos: ["epidemiologia", "agentes-patogenos"] },
      { nombre: "Nutrición", id: "nutricion", prerequisitos: ["intro-produccion", "fisiologia2"] },
      { nombre: "MAIG", id: "maig", prerequisitos: ["bioestadisticas"] },
      { nombre: "Patología I", id: "patologia1", prerequisitos: ["fisiologia2", "inmunologia"] },
      { nombre: "Bases de tecn. Diagnósticas", id: "tecnicas-diagnosticas", prerequisitos: ["agentes-patogenos", "inmunologia"] }
    ]
  },
  {
    semestre: "Semestre 6",
    ramos: [
      { nombre: "Patología II", id: "patologia2", prerequisitos: ["patologia1"] },
      { nombre: "Alimentación", id: "alimentacion", prerequisitos: ["nutricion"] },
      { nombre: "MAAT", id: "maat", prerequisitos: ["estructura-macro2"] },
      { nombre: "Genética básica", id: "genetica", prerequisitos: ["maig"] },
      { nombre: "Métodos de exploración clínica", id: "exploracion", prerequisitos: ["tecnicas-diagnosticas", "patologia1"] }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { nombre: "Patología III", id: "patologia3", prerequisitos: ["patologia2"] },
      { nombre: "Reproducción", id: "reproduccion", prerequisitos: ["genetica", "patologia2"] },
      { nombre: "Medicina Nivel I", id: "medicina1", prerequisitos: ["exploracion", "patologia3"] },
      { nombre: "Patología Diagnóstica", id: "patologia-diagnostica", prerequisitos: ["patologia3"] },
      { nombre: "Salud Pública Veterinaria", id: "salud-publica", prerequisitos: ["enfermedades-infecciosas"] },
      { nombre: "MACA", id: "maca", prerequisitos: ["conducta", "intro-produccion"] },
      { nombre: "Biotecnología reproductiva", id: "biotecnologia", prerequisitos: ["genetica", "patologia2"] }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { nombre: "Gestión Ambiental", id: "gestion-ambiental", prerequisitos: ["salud-publica"] },
      { nombre: "Manejos productivos", id: "manejo-productivo", prerequisitos: ["alimentacion", "reproduccion"] },
      { nombre: "Inocuidad de los alimentos", id: "inocuidad", prerequisitos: ["salud-publica"] },
      { nombre: "Práctica Preprofesional", id: "preprofesional" },
      { nombre: "Medicina Nivel I", id: "medicina2", prerequisitos: ["medicina1"] },
      { nombre: "MAPLAN", id: "maplan", prerequisitos: ["economia2"] },
      { nombre: "Módulo Int. Ciclo Preprof.", id: "modulo-preprof", prerequisitos: ["patologia3", "reproduccion", "medicina1", "patologia-diagnostica", "salud-publica", "maca", "biotecnologia", "genetica", "exploracion", "maat", "alimentacion", "patologia2", "enfermedades-infecciosas", "maig", "nutricion", "inmunologia", "patologia1", "tecnicas-diagnosticas", "fisiologia2", "farmacologia", "economia2", "maep", "agentes-patogenos", "intro-produccion", "ecologia", "bases-moleculares", "metodos-cuantificacion", "ingles-beginner", "orientacion-mv", "diversidad-animal", "manejo-info", "bases-moleculares-celulares", "bases-celulares", "bioestadística", "desarrollo-micro", "practica-general-básica", "estructura-macro", "seminario-a", "conducta", "epidemiologia", "economia1", "fisiologia1", "estructura-macro2", "desarrollo-micro2", "practica-clinica", "campo-basica"},
      { nombre: "Obstetricia y ginecología", id: "obstetricia", prerequisitos: ["reproduccion", "biotecnologia"] }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { nombre: "Aseg. y calidad de alimentos", id: "calidad-alimentos", prerequisitos: ["inocuidad"] },
      { nombre: "Anestesiología y Cirugía", id: "cirugia", prerequisitos: ["medicina2"] },
      { nombre: "Impacto ambiental", id: "impacto-ambiental", prerequisitos: ["gestion-ambiental"] },
      { nombre: "MABL", id: "mabl", prerequisitos: ["inocuidad"] },
      { nombre: "Patología en explotaciones", id: "patologia-explotaciones", prerequisitos: ["enfermedades-infecciosas", "patologia3"] },
      { nombre: "Manejos productivos", id: "manejos-productivos", prerequisitos: ["reproduccion", "alimentacion"] },
      { nombre: "Medicina Interna Nivel II", id: "medicina2", prerequisitos: ["medicina2", "patologia-diagnostica"] }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { nombre: "Internado Medicina Indiv.", id: "internado-individual", prerequisitos: ["medicina2"] },
      { nombre: "Internado Medicina Prev.", id: "internado-prev", prerequisitos: ["salud-publica"] },
      { nombre: "Taller de titulación", id: "titulacion", prerequisitos: ["modulo-preprof"] },
      { nombre: "Internado Prod. Animal", id: "internado-productivo", prerequisitos: ["manejo-productivo"] },
      { nombre: "Práctica profesional", id: "practica-profesional", prerequisitos: ["modulo-preprof"] }
    ]
  }
];

// Guardar estado en navegador
let estado = JSON.parse(localStorage.getItem('estadoMalla')) || {};

function guardarEstado() {
  localStorage.setItem('estadoMalla', JSON.stringify(estado));
}

function estaDesbloqueado(ramo) {
  if (!ramo.prerequisitos) return true;
  return ramo.prerequisitos.every(pr => estado[pr]);
}

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo';
  div.textContent = ramo.nombre;
  div.dataset.id = ramo.id;

  if (estado[ramo.id]) {
    div.classList.add('aprobado');
  } else if (!estaDesbloqueado(ramo)) {
    div.classList.add('bloqueado');
  }

  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado')) return;

    estado[ramo.id] = !estado[ramo.id];
    guardarEstado();
    actualizarMalla();
  });

  return div;
}

function actualizarMalla() {
  malla.innerHTML = "";

  datosMalla.forEach(bloque => {
    const col = document.createElement('div');
    col.className = 'semestre';

    const titulo = document.createElement('h2');
    titulo.textContent = bloque.semestre;
    col.appendChild(titulo);

    bloque.ramos.forEach(ramo => {
      const ramoEl = crearRamo(ramo);
      col.appendChild(ramoEl);
    });

    malla.appendChild(col);
  });
}

actualizarMalla();
