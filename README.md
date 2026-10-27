# Redonix Entertainment — Sitio web

Sitio informativo estático de una sola página para captar clientes de **Redonix Entertainment**.

- [Astro](https://astro.build) 7 + [Tailwind CSS](https://tailwindcss.com) 4
- Fuente Outfit autoalojada (`@fontsource/outfit`), sin Google Fonts
- Sin frameworks de JS: solo dos scripts mínimos (menú móvil y formulario de WhatsApp)
- Imágenes optimizadas (WebP) con `astro:assets`

## Requisitos

Node.js 20 o superior (probado con Node 24).

## Comandos

| Comando           | Acción                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`   | Genera el sitio estático en `dist/`             |
| `npm run preview` | Sirve `dist/` localmente para probar el build   |

## Estructura

```
src/
├── assets/          Imágenes (equipo/, logos/, servicios/)
├── components/      Encabezado, Hero, Nosotros, Equipo, Servicios, Alianzas, Contacto, Pie...
├── data/            equipo.ts, servicios.ts, contacto.ts (editar aquí los contenidos)
├── layouts/         Layout.astro (SEO y Open Graph)
├── pages/           index.astro
└── styles/          global.css (colores de marca, fuente y animaciones)
public/              favicon.png y og.png (imagen al compartir en redes)
```

## Cómo editar contenidos

- **Equipo:** `src/data/equipo.ts` (fotos en `src/assets/equipo/`).
- **Servicios:** `src/data/servicios.ts`. Para agregar la imagen de un servicio, copia el archivo a
  `src/assets/servicios/` con el nombre indicado en el campo `imagen` (por ejemplo `gestion-eventos.jpg`).
  Si no existe, la tarjeta muestra el degradado rojo/negro.
- **Teléfono, redes y WhatsApp:** `src/data/contacto.ts`.
- **Colores de marca:** `src/styles/global.css`, dentro de `@theme`
  (`marca-negro`, `marca-rojo`, `marca-vino`, `marca-rojo-claro`).
- **Logo de Makroz 13 Records:** agrega `src/assets/logos/makroz13.png` y reemplaza el texto de respaldo en
  `src/components/Alianzas.astro`.

## Despliegue en Vercel

1. Sube el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Sitio Redonix"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/redonix-landing.git
   git push -u origin main
   ```
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repositorio.
3. Vercel detecta Astro automáticamente (build `npm run build`, salida `dist`). No necesita configuración extra.
4. Pulsa **Deploy**.

La URL pública se toma sola de Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) para las etiquetas Open Graph.
Si usas otro dominio, define la variable de entorno `SITE_URL` (por ejemplo `https://redonix.com`).
