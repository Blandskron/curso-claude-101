# CLAUDE.md - Contexto y Directrices para Claude (Anthropic)

> [!NOTE]
> Este archivo proporciona directrices optimizadas para **Claude 3.5 Sonnet, Claude 3 Opus y agentes basados en el ecosistema Anthropic** al operar en este repositorio.

---

## Directrices Principales para Claude

1. **Alineación con IA Constitucional (HHH)**:
   - Mantén respuestas procesables, útiles y fundamentadas en los documentos del curso.
   - En la redacción de lecciones, conserva el estilo de **compañero de pensamiento** (*Thinking Partner*).

2. **Formato de Código y Bloques**:
   - Todo bloque de código debe incluir el distintivo de lenguaje adecuado (ej. ```xml, ```javascript, ```python).
   - Utiliza etiquetas XML (`<contexto>`, `<instrucciones>`, `<formato>`) cuando ejemplifiques técnicas de Prompt Engineering avanzado.

3. **Arquitectura del Proyecto**:
   - Las lecciones viven en Markdown dentro de los directorios numerados (`00-`, `01-`, `02-`, `03-`, `04-`).
   - La aplicación SPA lee las lecciones desde `assets/js/app.js`. Al crear o renombrar una lección, **actualiza la matriz `courseData` en `assets/js/app.js`**.

4. **Preservación del Diseño Web**:
   - Mantén la separación estricta: `index.html` (Estructura), `assets/css/index.css` (Estilos) y `assets/js/app.js` (Lógica).
   - Respeta el soporte dual de **Modo Oscuro** (`data-theme="dark"`) y **Modo Claro** (`data-theme="light"`).
