# TESTS.md - Estrategia de Pruebas y Validación Documental

Este archivo establece los criterios de verificación que debe seguir cualquier colaborador o agente de IA para asegurar la calidad de las lecciones y la aplicación web.

---

## 1. Reglas de Validación de Lecciones Markdown

Antes de marcar una lección como terminada, ejecuta las siguientes comprobaciones:

1. **Sintaxis de Bloques de Código**: Verifica que los bloques de código cierren correctamente con ````.
2. **Sintaxis de Alertas**: Confirma el uso correcto del encabezado:
   ```md
   > [!NOTE]
   > Texto...
   ```
3. **Validación de Enlaces Relativos**: Comprueba que todos los enlaces Markdown `[Texto](file:///...)` o relativos `[Texto](./ruta.md)` apunten a archivos existentes en el sistema de archivos.

---

## 2. Validación Automatizada con Script Python

Ejecuta el siguiente script auxiliar desde la raíz para verificar que todas las lecciones listadas en `courseData` de `assets/js/app.js` existan físicamente:

```bash
python -c "
import os, json, re

with open('assets/js/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract paths
paths = re.findall(r\"path:\s*'([^']+)'\", content)
missing = [p for p in paths if not os.path.exists(p)]

if missing:
    print('❌ ARCHIVOS FALTANTES:', missing)
else:
    print(f'✅ TODOS LOS ARCHIVOS EXISTEN ({len(paths)} lecciones verificadas)')
"
```

---

## 3. Prohibiciones en la Suite de Pruebas

- **NUNCA** elimines o saltes lecciones registradas solo para pasar una prueba.
- **NUNCA** modifiques la ruta de un archivo Markdown en `assets/js/app.js` sin renombrar o mover el archivo correspondiente en el disco.
