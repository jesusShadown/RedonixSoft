import type { ImageMetadata } from 'astro';
import sofia from '../assets/equipo/sofia-rojas.jpg';
import ronin from '../assets/equipo/ronin-giner.jpg';
import osmar from '../assets/equipo/osmar-ortiz.jpg';
import daniel from '../assets/equipo/daniel-olmos.jpg';

export interface Miembro {
  nombre: string;
  cargo: string;
  empresa?: string;
  descripcion: string;
  foto: ImageMetadata;
}

export const equipo: Miembro[] = [
  {
    nombre: 'Sofía Rojas',
    cargo: 'Fundadora y CEO',
    descripcion:
      'Especializada en administración y comunicación en redes sociales y gestión en distintas áreas básicas para la creación de eventos.',
    foto: sofia,
  },
  {
    nombre: 'Ronin Giner',
    cargo: 'Diseño de visuales',
    descripcion: 'Especializado en ilustración, diseño gráfico, storyboards y dirección visual.',
    foto: ronin,
  },
  {
    nombre: 'Osmar Ortiz',
    cargo: 'Productor de audio',
    empresa: 'Makroz 13 Records',
    descripcion: 'Especializado en grabación, producción y masterización de audio.',
    foto: osmar,
  },
  {
    nombre: 'Daniel Olmos',
    cargo: 'Productor y creador de contenido',
    empresa: 'Energize Media',
    descripcion: 'Especializado en audio y grabación para contenido en redes sociales.',
    foto: daniel,
  },
];
