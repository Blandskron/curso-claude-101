# Claude 101 en español | Material independiente de estudio

> **Aviso importante de independencia:**  
> Claude 101 en español es un proyecto educativo independiente que reúne apuntes, lecturas, ejemplos y recursos complementarios para facilitar el estudio de Claude 101 a personas hispanohablantes. No está afiliado, patrocinado ni respaldado oficialmente por Anthropic y no reemplaza el contenido original del curso.

---

## 🎯 1. Descripción y Propósito del Proyecto

Este repositorio es una recopilación de **material de apoyo educativo en español** pensado para ayudar a estudiantes, analistas, desarrolladores y profesionales hispanohablantes que desean comprender y profundizar en los conceptos de **Claude 101 de Anthropic**, especialmente cuando no dominan el inglés.

El proyecto **NO** pretende:
- Reemplazar el curso original de Anthropic.
- Funcionar como una plataforma educativa, academia, sistema LMS o simulador oficial.
- Entregar certificados, diplomas o comprobantes de aprobación.
- Almacenar datos de usuarios, progreso de aprendizaje o puntuaciones.

---

## 👥 2. Público Objetivo

- **Estudiantes e investigadores** que buscan explicaciones en español sobre modelos de IA y Prompt Engineering.
- **Profesionales y analistas** que desean aplicar Claude en sus organizaciones sin barreras de idioma.
- **Desarrolladores** interesados en entender la arquitectura de Proyectos, Artefactos, Habilidades (*Skills*) y el Protocolo MCP (*Model Context Protocol*).

---

## 📚 3. Contenidos Disponibles

1. **13 Lecturas en Markdown**: Organizadas en 4 módulos temáticos.
2. **Glosario Técnico Español–Inglés**: Términos clave (*Ventana de contexto — context window*, *System prompt*, *Artifacts*, *Projects*, *Skills*, *MCP*, *Tool use*, *Hallucination*).
3. **Buscador Local**: Buscador en tiempo real integrado directamente en la interfaz web cliente (sin backend).
4. **Recursos Multimedia**:
   - Vídeo explicativo complementario.
   - Podcast / Audio generado con **NotebookLM** como material sintético de estudio.

---

## 📂 4. Estructura del Repositorio

```
curso-claude-101/
├── 00-introduccion/
│   └── 00-introduccion.md
├── 01-claude/
│   ├── 01-que-es-claude.md
│   ├── 02-tu-primera-conversacion-con-claude.md
│   ├── 03-obtener-mejores-resultados.md
│   └── 04-como-trabajaras-con-claude-en-tu-ordenador.md
├── 02-organiza-tu-trabajo/
│   ├── 05-introduccion-a-los-proyectos.md
│   ├── 06-creacion-con-artefactos.md
│   └── 07-trabajar-con-habilidades.md
├── 03-ampliando-el-alcance-de-claude/
│   ├── 08-conectando-tus-herramientas.md
│   ├── 09-busqueda-empresarial.md
│   └── 10-investigacion-para-analisis-en-profundidad.md
├── 04-conclusion/
│   ├── 11-claude-en-accion-casos-de-uso-por-rol.md
│   └── 12-otras-formas-de-trabajar-con-claude.md
├── assets/
│   ├── css/
│   │   └── index.css
│   ├── js/
│   │   └── app.js
│   └── img/
│       ├── favicon.png
│       ├── ico-black.png
│       ├── ico-white.png
│       ├── logo-black.png
│       └── logo-white.png
├── docs/agent/               # Documentación especializada de gobernanza para agentes de IA
├── skills/                   # Habilidades procedimentales repetibles
├── .github/                  # Copilot instructions y GitHub Actions CI
├── index.html                # Interfaz de lectura estática para GitHub Pages
├── LICENSE                   # Licencia de código y contenido
└── README.md
```

---

## 🚀 5. Cómo Ejecutar Localmente

Dado que el proyecto es una aplicación web estática pura en HTML5/CSS3/JS, puedes visualizarlo abriendo `index.html` en tu navegador o utilizando un servidor local de desarrollo:

```bash
# Ejecutar desde la carpeta raíz del repositorio
python -m http.server 8000
```
Navega en tu explorador web a: `http://localhost:8000`

---

## 🌐 6. Despliegue en GitHub Pages

El proyecto se encuentra desplegado para libre consulta en:
👉 **[https://blandskron.github.io/curso-claude-101/](https://blandskron.github.io/curso-claude-101/)**

---

## 🎙️ 7. Aviso sobre Contenido Generado con IA (NotebookLM)

Los recursos multimedia tipo podcast/audio incluidos en este repositorio fueron generados mediante **NotebookLM** a partir de los apuntes y fuentes del proyecto. El contenido fue creado como material complementario de estudio y puede contener simplificaciones o imprecisiones. Para información oficial, consulta siempre la documentación de Anthropic.

---

## 🔗 8. Fuentes Oficiales

- **Portal Oficial de Anthropic**: [anthropic.com](https://www.anthropic.com/)
- **Documentación de Claude**: [docs.anthropic.com](https://docs.anthropic.com/)
- **Centro de Ayuda de Claude**: [support.anthropic.com](https://support.anthropic.com/)

---

## 🤝 9. Cómo Contribuir y Reportar Errores

Agradecemos las sugerencias, correcciones ortográficas o mejoras pedagógicas:
1. **Haz un Fork** del repositorio.
2. Crea una rama para tu contribución (`git checkout -b mejora-leccion`).
3. Envía un **Pull Request** detallando los cambios.
4. Para reportar erratas o proponer mejoras, abre un **Issue** en la pestaña correspondiente de GitHub.

---

## ⚖️ 10. Licencia y Reconocimiento de Marcas

- **Código Fuente**: Distribuido bajo la Licencia **MIT** (ver `LICENSE`).
- **Notas y Apuntes Educativos**: Distribuidos bajo la Licencia **Creative Commons Atribución 4.0 Internacional (CC BY 4.0)**.
- **Reconocimiento de Marcas**: "Claude", "Anthropic", "Constitutional AI", "Claude Code" y los logotipos asociados son marcas comerciales registradas de **Anthropic, PBC**. Este repositorio es un proyecto comunitario sin vinculación comercial.

---

## 👨‍💻 Autor
Desarrollado por **[Blandskron](https://github.com/Blandskron)**.
- 💼 LinkedIn: [linkedin.com/in/blandskron](https://www.linkedin.com/in/blandskron/)
