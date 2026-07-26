# AGENTS.md - Guía de Operación para Agentes Autónomos

> [!IMPORTANT]
> Este archivo es el **punto de entrada obligatorio** para cualquier agente de Inteligencia Artificial (Claude, Gemini, Copilot, Codex u otros) que trabaje en este repositorio. Léelo antes de realizar cualquier modificación.

---

## 1. Propósito del Repositorio

El repositorio **`curso-claude-101`** es un proyecto de educación técnica y preparación oficial para el examen de certificación **Claude 101 de Anthropic**. Contiene:
1. **13 Lecciones en Markdown** estructuradas pedagógicamente en 4 módulos.
2. **Aula Virtual SPA**: Aplicación web estática en HTML5/CSS3/JS puro alojada en GitHub Pages.
3. **Mapeo Multimedia**: Vinculación de lecciones con audios (`.m4a`) y vídeos (`.mp4`) por módulo.

---

## 2. Stack Tecnológico Detectado

- **Web Frontend**: HTML5 semántico, Vanilla CSS3 (sin frameworks/Tailwind), JavaScript ES6+ (sin bundlers ni compilers).
- **Contenido**: Markdown (.md) compatible con GitHub Flavored Markdown (GFM).
- **Despliegue**: Servidor estático en **GitHub Pages** (`index.html` en la raíz).
- **Recursos**: Estructurados en la carpeta `assets/` (`assets/css/`, `assets/js/`, `assets/img/`).

---

## 3. Rutas Prioritarias de Lectura

1. `AGENTS.md` (Este documento).
2. `README.md` (Visión general humana del curso).
3. `docs/agent/PERMISSIONS.md` (Permisos de edición y archivos protegidos).
4. `docs/agent/RUNBOOK.md` (Ejecución local y validación).
5. `assets/js/app.js` (Mapeo de datos del curso en la SPA).

---

## 4. Qué Puede Modificar el Agente (Scope Permitido)

- **Lecciones Markdown**: Corrección de erratas, mejoras de formato, adición de ejemplos en `00-introduccion/`, `01-claude/`, `02-organiza-tu-trabajo/`, `03-ampliando-el-alcance-de-claude/` y `04-conclusion/`.
- **Interfaz del Aula Virtual**: Estilos en `assets/css/index.css`, lógica SPA en `assets/js/app.js` y plantilla en `index.html`.
- **Nuevas Habilidades o Documentación de Agentes**: Archivos en `docs/agent/` y `skills/`.

---

## 5. Acciones Prohibidas y Rutas Protegidas

> [!WARNING]
> **Rutas Protegidas que requieren aprobación humana explícita antes de eliminar**:
> - Archivos `.docx` de las carpetas de módulo (son archivos fuente históricos).
> - Archivos de imagen de marca en `assets/img/` (`logo-white.png`, `logo-black.png`, `favicon.png`, `ico-white.png`, `ico-black.png`).
> - Licencias, manifiestos `.git` o archivos de configuración del repositorio.

---

## 6. Comandos Reales para Verificación y Ejecución

Debido a que el proyecto es una aplicación web estática pura en HTML/CSS/JS, no existen comandos de compilación como `npm build` o `cargo build`. 

- **Servidor Local de Previsualización (Python)**:
  ```bash
  python -m http.server 8000
  ```
  *(Abre `http://localhost:8000` en el navegador para verificar la SPA).*

- **Validación de Enlaces e Integridad de Archivos (Python)**:
  ```bash
  python -c "import os, json; print('Archivos MD verificados:', len([f for r,d,fs in os.walk('.') for f in fs if f.endswith('.md')]))"
  ```

---

## 7. Reglas de Formato para Lecciones Markdown

1. Utiliza encabezados jerárquicos (`#`, `##`, `###`).
2. Utiliza alertas estilo GitHub Flavored Markdown:
   ```md
   > [!NOTE]
   > Contexto útil.

   > [!TIP]
   > Consejo de optimización.

   > [!IMPORTANT]
   > Requisito esencial.

   > [!WARNING]
   > Advertencia sobre límites.
   ```
3. Todas las tablas deben ir dentro de la sintaxis estándar de Markdown.
4. Todos los bloques de código deben especificar el lenguaje (ej. ````xml`, ````python`, ````bash`).

---

## 8. Definición de Terminado (Definition of Done)

Una tarea realizada por un agente se considera completada solo cuando:
1. No se rompe la sintaxis de los archivos Markdown modificados.
2. Los enlaces internos entre lecciones y documentos son válidos.
3. Si se añade una lección, esta queda registrada en la matriz `courseData` de `assets/js/app.js`.
4. El visualizador local HTML carga limpiamente en Modo Claro y Oscuro sin errores en la consola del navegador.

---

## 9. Documentos Especializados

- 🔒 **[PERMISSIONS.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/PERMISSIONS.md)**: Matriz detallada de permisos y límites de edición.
- 🚀 **[RUNBOOK.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/RUNBOOK.md)**: Manual operativo para levantar la SPA y validar cambios.
- 🧪 **[TESTS.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/TESTS.md)**: Estrategia de pruebas documentales.
- 🛡️ **[SECURITY.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/SECURITY.md)**: Reglas de seguridad para repositorios públicos.
- ⚙️ **[CONFIG.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/CONFIG.md)**: Configuración de GitHub Pages.
- 📊 **[DATA_SCHEMA.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/docs/agent/DATA_SCHEMA.md)**: Esquema de datos de las lecciones en JS.
