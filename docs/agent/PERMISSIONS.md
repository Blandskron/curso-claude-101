# PERMISSIONS.md - Matriz de Permisos y Control de Modificaciones

Este documento especifica el nivel de autonomía de los agentes de IA al operar sobre los archivos de este repositorio.

---

## 1. Archivos Editables sin Aprobación Humana Previa

Los agentes pueden crear o modificar libremente los siguientes archivos siempre que respeten la sintaxis y los patrones existentes:

- `00-introduccion/*.md`
- `01-claude/*.md`
- `02-organiza-tu-trabajo/*.md`
- `03-ampliando-el-alcance-de-claude/*.md`
- `04-conclusion/*.md`
- `assets/css/index.css`
- `assets/js/app.js`
- `docs/agent/*.md`
- `skills/*/*.md`

---

## 2. Archivos y Rutas Protegidas (Aprobación Humana Requerida)

> [!WARNING]
> Las siguientes rutas requieren **aprobación humana explícita** antes de realizar cambios o eliminaciones:

- `*.docx` (Archivos fuente históricos en cualquier carpeta de módulo).
- `assets/img/*` (`logo-white.png`, `logo-black.png`, `favicon.png`, `ico-white.png`, `ico-black.png`).
- `README.md` (Solo modificaciones mayores de estructura).
- Archivos `.git/` o licencias.

---

## 3. Acciones Totalmente Prohibidas

- Instalar gestores de paquetes pesados (ej. `npm`, `yarn`, `pip`) que alteren el despliegue estático simple en GitHub Pages salvo instrucción explícita.
- Exponer llaves API, tokens OAuth o credenciales reales.
- Modificar el nombre de la rama principal de Git sin confirmación.
