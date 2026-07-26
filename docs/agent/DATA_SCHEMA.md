# DATA_SCHEMA.md - Esquema de Datos de Lecciones y Schema.org

Este documento describe las estructuras de datos que gobiernan el contenido del curso tanto en el frontend como en los metadatos SEO.

---

## 1. Esquema del Dataset de Lecciones (`courseData` en `assets/js/app.js`)

El mapa de contenido se define en el array JavaScript `courseData` con el siguiente esquema JSON:

```json
[
  {
    "id": "string (único)",
    "folder": "string (nombre de carpeta de módulo)",
    "title": "string (título del módulo)",
    "video": "string (ruta del video mp4)",
    "audio": "string (ruta del audio m4a)",
    "lessons": [
      {
        "id": "string (único por lección)",
        "title": "string (título visible de la lección)",
        "path": "string (ruta relativa del archivo markdown)"
      }
    ]
  }
]
```

---

## 2. Esquema de Metadatos SEO (Schema.org / JSON-LD)

El marcado de datos estructurados para Google Rich Snippets está insertado en `index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso Profesional Claude 101 de Anthropic",
  "description": "Curso completo e interactivo sobre la arquitectura, prompting, proyectos, artefactos y protocolo MCP en Claude de Anthropic.",
  "provider": {
    "@type": "Organization",
    "name": "Blandskron",
    "sameAs": "https://blandskron.github.io/curso-claude-101/"
  },
  "educationalLevel": "Intermediate to Advanced",
  "inLanguage": "es",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "PT10H"
  }
}
```
