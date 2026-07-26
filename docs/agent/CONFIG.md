# CONFIG.md - Configuración de Entorno y GitHub Pages

Este archivo detalla la infraestructura de despliegue y los parámetros de configuración de la plataforma **Aula Virtual**.

---

## 1. Configuración de GitHub Pages

- **Rama de Despliegue**: `main` / `master`.
- **Directorio Raíz**: `/` (Raíz del proyecto).
- **Archivo de Entrada**: `index.html`.
- **Ruta Canónica de Producción**: `https://blandskron.github.io/curso-claude-101/`

---

## 2. Parámetros de Personalización de la SPA

Los ajustes visuales de la aplicación SPA se gestionan desde `assets/css/index.css` mediante variables `:root`:

- `--accent-amber`: Color primario de acento (`#d97706`).
- `--accent-indigo`: Color secundario de acento (`#6366f1`).
- `[data-theme="dark"]`: Variables del Modo Oscuro.
- `[data-theme="light"]`: Variables del Modo Claro.

---

## 3. Claves de Almacenamiento Local (LocalStorage)

- `claude101_theme`: Almacena la preferencia de tema del usuario (`'dark'` o `'light'`).
