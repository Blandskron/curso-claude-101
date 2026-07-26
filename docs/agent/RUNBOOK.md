# RUNBOOK.md - Guía Operativa de Ejecución y Previsualización Local

Este manual describe el procedimiento para levantar la plataforma del **Aula Virtual** en un entorno local y validar el comportamiento de los archivos Markdown y recursos multimedia.

---

## 1. Prerequisitos
- Navegador web moderno (Chrome, Edge, Firefox, Safari).
- Python 3.x (opcional, para servidor HTTP estático local).

---

## 2. Cómo Levantar el Proyecto Localmente

Para probar la SPA sin problemas de políticas CORS en peticiones `fetch()` a los archivos Markdown:

### Opción A: Servidor HTTP con Python (Recomendado)
```bash
# Ejecutar desde la raíz del proyecto
python -m http.server 8000
```
Navega en tu explorador a: `http://localhost:8000`

### Opción B: Extensión Live Server (VS Code / Antigravity)
Abre `index.html` e inicia el servidor de previsualización en vivo.

---

## 3. Comprobaciones Frecuentes de Salud del Proyecto

1. **Prueba de Modo Oscuro / Modo Claro**: Haz clic en el botón conmutador de tema en la esquina superior derecha (`#themeToggleBtn`).
   - Revisa que el logo del footer alterne entre `logo-white.png` y `logo-black.png`.
   - Revisa que el icono del sidebar alterne entre `ico-white.png` y `ico-black.png`.
2. **Prueba de Lectura Markdown**: Haz clic en las lecciones de los 4 módulos en la barra lateral.
   - Confirma que no se muestren etiquetas HTML crudas o desalineadas.
   - Prueba el botón **"Copiar código"** en las cajas de código.
3. **Prueba de Medios (Vídeo y Audio)**: Alterna entre las pestañas *Lectura*, *Vídeo* y *Audio*. Si un archivo de vídeo o audio no existe en el disco, confirma que se despliegue la caja explicativa de respaldo (*placeholder*).
