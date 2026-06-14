// data de las skills, la usan el orbe y la lista de la pagina skills
// level va de 1 a 4 (principiante -> experto) y mueve la barrita.
// levelLabel es el texto, a veces pongo cosas como "conceptual" igual

export const CATEGORIES = {
  security: { label: 'Seguridad', color: '#00ff9d' },
  backend: { label: 'Backend', color: '#7c3aed' },
  frontend: { label: 'Frontend', color: '#e2e8f0' },
  database: { label: 'Base de datos', color: '#8892a4' },
  infra: { label: 'Infraestructura', color: 'rgba(0, 255, 157, 0.55)' }
};

export const SKILLS = [
  {
    id: 'python',
    name: 'Python',
    abbr: 'Py',
    category: 'backend',
    level: 3,
    levelLabel: 'Avanzado',
    bullets: [
      'Escáner de puertos CLI como proyecto final de CS50P.',
      'Scripting y automatización de tareas repetitivas.',
      'Base para herramientas ofensivas y defensivas propias.'
    ],
    related: ['Django', 'Bash', 'APIs']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    abbr: 'JS',
    category: 'frontend',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Juegos de navegador con Canvas API y físicas propias.',
      'Manipulación del DOM sin frameworks.',
      'Consumo de APIs REST (PokéAPI) desde el cliente.'
    ],
    related: ['Node.js', 'HTML/CSS']
  },
  {
    id: 'htmlcss',
    name: 'HTML/CSS',
    abbr: 'H/C',
    category: 'frontend',
    level: 3,
    levelLabel: 'Avanzado',
    bullets: [
      'Sitios de portafolio y layouts estructurados.',
      'Interfaces tipo terminal construidas solo con CSS.',
      'Diseño responsivo sin librerías externas.'
    ],
    related: ['Astro', 'JavaScript']
  },
  {
    id: 'sql',
    name: 'SQL',
    abbr: 'SQL',
    category: 'database',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Diseño de bases de datos relacionales.',
      'Consultas y modelado sobre MySQL.'
    ],
    related: ['Django ORM', 'MongoDB']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    abbr: 'Mgo',
    category: 'database',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Modelado NoSQL orientado a documentos.',
      'Persistencia en proyectos full stack.'
    ],
    related: ['Python', 'APIs REST']
  },
  {
    id: 'django',
    name: 'Django',
    abbr: 'Dj',
    category: 'backend',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Aplicaciones web con patrón MVC.',
      'ORM para capa de datos y vistas REST.'
    ],
    related: ['Python', 'SQL', 'HTML']
  },
  {
    id: 'bash',
    name: 'Bash/Linux',
    abbr: 'sh',
    category: 'infra',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Máquinas de Hack The Box: enumeración y explotación.',
      'Scripting de shell, SSH y túneles OpenVPN.',
      'Administración básica de sistemas Linux.'
    ],
    related: ['Python', 'Redes']
  },
  {
    id: 'networking',
    name: 'Redes',
    abbr: 'Net',
    category: 'infra',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Subnetting VLSM y enrutamiento estático.',
      'Laboratorios en Cisco Packet Tracer.',
      'Análisis del stack TCP/IP aplicado a seguridad.'
    ],
    related: ['Bash', 'Seguridad']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    abbr: 'No',
    category: 'backend',
    level: 2,
    levelLabel: 'Intermedio',
    bullets: [
      'Base del tooling de Astro y proyectos JS.',
      'Gestión de dependencias y scripts con npm.'
    ],
    related: ['JavaScript', 'npm', 'Astro']
  },
  {
    id: 'git',
    name: 'Git',
    abbr: 'Git',
    category: 'infra',
    level: 3,
    levelLabel: 'Avanzado',
    bullets: [
      'Control de versiones en todos los proyectos.',
      'Portafolio público en GitHub bajo arielbosquez.'
    ],
    related: ['CLI', 'GitHub Actions']
  },
  {
    id: 'ley21663',
    name: 'Ley 21.663',
    abbr: '21.6',
    category: 'security',
    level: 2,
    levelLabel: 'Conceptual / Aplicado',
    bullets: [
      'Ley Marco de Ciberseguridad de Chile.',
      'Obligaciones de reporte para Operadores de Importancia Vital.',
      'Base regulatoria para trabajo en GRC.'
    ],
    related: ['GRC', 'NIST']
  },
  {
    id: 'nist',
    name: 'NIST SP 800-61',
    abbr: '800',
    category: 'security',
    level: 2,
    levelLabel: 'Aplicado',
    bullets: [
      'Ciclo de vida de respuesta a incidentes.',
      'Preparación, detección, contención, erradicación y recuperación.'
    ],
    related: ['SOC', 'Blue Team']
  },
  {
    id: 'mitre',
    name: 'MITRE ATT&CK',
    abbr: 'ATT',
    category: 'security',
    level: 2,
    levelLabel: 'Conceptual',
    bullets: [
      'Modelado de amenazas con matrices de TTPs.',
      'Clasificación de técnicas en análisis de incidentes.'
    ],
    related: ['SOC', 'Threat Intel']
  }
];
