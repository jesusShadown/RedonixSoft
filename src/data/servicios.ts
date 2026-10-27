export interface Servicio {
  nombre: string;
  detalle?: string;
  responsables: string[];
  /** Nombre del archivo dentro de src/assets/servicios/ (opcional). Sin archivo se muestra el degradado. */
  imagen?: string;
}

export const servicios: Servicio[] = [
  {
    nombre: 'Gestión para Eventos',
    detalle: 'Logística, talento, operación y catering',
    responsables: ['Sofía Rojas'],
    imagen: 'gestion-eventos',
  },
  { nombre: 'Community Management', responsables: ['Sofía Rojas'], imagen: 'community-management' },
  {
    nombre: 'Diseño y Creación de Visuales',
    responsables: ['Ronin Giner', 'Ana Sofía Caraveo'],
    imagen: 'diseno-visuales',
  },
  { nombre: 'Identidad de Marca', responsables: ['Ana Sofía Caraveo'], imagen: 'identidad-marca' },
  { nombre: 'Animación de Videos', responsables: ['Ronin Giner'], imagen: 'animacion-videos' },
  {
    nombre: 'Edición de Video',
    responsables: ['Ronin Giner', 'Daniel Olmos (Energize Media)'],
    imagen: 'edicion-video',
  },
  { nombre: 'Dirección (Realizador)', responsables: ['Sofía Rojas', 'Ronin Giner'], imagen: 'direccion' },
  {
    nombre: 'Cobertura Fotográfica y Videográfica para Eventos',
    responsables: ['Daniel Olmos (Energize Media)', 'Team Redonix'],
    imagen: 'cobertura-eventos',
  },
  {
    nombre: 'Creación de Contenido para Redes Sociales',
    responsables: ['Daniel Olmos (Energize Media)'],
    imagen: 'contenido-redes',
  },
  {
    nombre: 'Videograbaciones Profesionales',
    responsables: ['Daniel Olmos (Energize Media)'],
    imagen: 'videograbaciones',
  },
  {
    nombre: 'Producción y Masterización de Audio',
    responsables: ['Osmar Ortiz (Makroz 13 Records)', 'Daniel Olmos (Energize Media)'],
    imagen: 'produccion-audio',
  },
];
