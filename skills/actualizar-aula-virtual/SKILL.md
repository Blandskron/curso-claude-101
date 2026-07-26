# Skill: Registro de Lecciones en el Aula Virtual SPA

Esta habilidad describe el procedimiento para vincular una nueva lección o recurso multimedia en la aplicación web `index.html`.

---

## Procedimiento de Registro

1. **Abrir `assets/js/app.js`**.
2. **Localizar el objeto del módulo correspondiente** en el array `courseData`.
3. **Insertar el nuevo objeto de lección**:
   ```javascript
   { id: 'l13', title: '13. Nombre de la Lección', path: '04-conclusion/13-nombre-leccion.md' }
   ```
4. **Verificar el Renderizado Local**:
   - Iniciar `python -m http.server 8000`.
   - Navegar a la lección recién añadida en el sidebar.
   - Confirmar que la lección cargue sin errores en la consola.
