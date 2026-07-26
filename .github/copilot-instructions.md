# Copilot Instructions for curso-claude-101

This repository contains educational course material and a static Single Page Application (SPA) for **Claude 101 by Anthropic**, hosted on GitHub Pages.

## Core Rules for Copilot
- **No Heavy Frameworks**: Do NOT suggest installing React, Vue, Next.js, Tailwind, or Vite. The project strictly uses **Vanilla HTML5, CSS3, and ES6+ JavaScript**.
- **File Structure**:
  - `index.html`: Entry point for GitHub Pages.
  - `assets/css/index.css`: Styling for both Light & Dark modes (`data-theme="dark"` and `data-theme="light"`).
  - `assets/js/app.js`: Main SPA logic, custom block-level Markdown parser, and course data array (`courseData`).
  - Markdown lessons live in `00-introduccion/`, `01-claude/`, `02-organiza-tu-trabajo/`, `03-ampliando-el-alcance-de-claude/`, `04-conclusion/`.
- **Markdown Rules**:
  - Always keep GFM alert blockquotes (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`).
  - Ensure links inside Markdown files use valid relative file paths.
