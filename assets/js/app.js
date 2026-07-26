/* ==========================================================================
   AULA VIRTUAL CLAUDE 101 - APPLICATION LOGIC (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. DATA MAP: MODULES, LESSONS & MULTIMEDIA
  // ------------------------------------------------------------------------
  const courseData = [
    {
      id: 'mod-00',
      folder: '00-introduccion',
      title: 'Módulo 00: Introducción al Curso',
      video: '00-introduccion/00-introduccion-claude.mp4',
      audio: '00-introduccion/00-introduccion-claude.m4a',
      lessons: [
        { id: 'l00', title: '00. Bienvenida y Guía del Curso', path: '00-introduccion/00-introduccion.md' }
      ]
    },
    {
      id: 'mod-01',
      folder: '01-claude',
      title: 'Módulo 01: Claude y sus Fundamentos',
      video: '01-claude/01-claude.mp4',
      audio: '01-claude/01-claude.m4a',
      lessons: [
        { id: 'l01', title: '01. ¿Qué es Claude?', path: '01-claude/01-que-es-claude.md' },
        { id: 'l02', title: '02. Tu primera conversación con Claude', path: '01-claude/02-tu-primera-conversacion-con-claude.md' },
        { id: 'l03', title: '03. Obtener mejores resultados', path: '01-claude/03-obtener-mejores-resultados.md' },
        { id: 'l04', title: '04. Cómo trabajarás con Claude en tu ordenador', path: '01-claude/04-como-trabajaras-con-claude-en-tu-ordenador.md' }
      ]
    },
    {
      id: 'mod-02',
      folder: '02-organiza-tu-trabajo',
      title: 'Módulo 02: Organiza tu Trabajo',
      video: '02-organiza-tu-trabajo/02-organiza-tu-trabajo.mp4',
      audio: '02-organiza-tu-trabajo/02-organiza-tu-trabajo.m4a',
      lessons: [
        { id: 'l05', title: '05. Introducción a los proyectos', path: '02-organiza-tu-trabajo/05-introduccion-a-los-proyectos.md' },
        { id: 'l06', title: '06. Creación con artefactos', path: '02-organiza-tu-trabajo/06-creacion-con-artefactos.md' },
        { id: 'l07', title: '07. Trabajar con habilidades', path: '02-organiza-tu-trabajo/07-trabajar-con-habilidades.md' }
      ]
    },
    {
      id: 'mod-03',
      folder: '03-ampliando-el-alcance-de-claude',
      title: 'Módulo 03: Ampliando el Alcance de Claude',
      video: '03-ampliando-el-alcance-de-claude/03-ampliando-el-alcance-de-claude.mp4',
      audio: '03-ampliando-el-alcance-de-claude/03-ampliando-el-alcance-de-claude.m4a',
      lessons: [
        { id: 'l08', title: '08. Conectando tus herramientas', path: '03-ampliando-el-alcance-de-claude/08-conectando-tus-herramientas.md' },
        { id: 'l09', title: '09. Búsqueda empresarial', path: '03-ampliando-el-alcance-de-claude/09-busqueda-empresarial.md' },
        { id: 'l10', title: '10. Investigación para análisis en profundidad', path: '03-ampliando-el-alcance-de-claude/10-investigacion-para-analisis-en-profundidad.md' }
      ]
    },
    {
      id: 'mod-04',
      folder: '04-conclusion',
      title: 'Módulo 04: Conclusión',
      video: '04-conclusion/04-conclusion.mp4',
      audio: '04-conclusion/04-conclusion.m4a',
      lessons: [
        { id: 'l11', title: '11. Claude en acción: casos de uso por rol', path: '04-conclusion/11-claude-en-accion-casos-de-uso-por-rol.md' },
        { id: 'l12', title: '12. Otras formas de trabajar con Claude', path: '04-conclusion/12-otras-formas-de-trabajar-con-claude.md' }
      ]
    }
  ];

  // State Management
  let currentModule = courseData[0];
  let currentLesson = courseData[0].lessons[0];
  let activeTab = 'reading'; // 'reading' | 'video' | 'audio'
  let currentTheme = localStorage.getItem('claude101_theme') || 'dark';

  // DOM Elements
  const modulesNav = document.getElementById('modulesNav');
  const activeModuleTitle = document.getElementById('activeModuleTitle');
  const activeLessonTitle = document.getElementById('activeLessonTitle');
  const readingView = document.getElementById('readingView');
  const videoView = document.getElementById('videoView');
  const audioView = document.getElementById('audioView');
  const tabReadingBtn = document.getElementById('tabReadingBtn');
  const tabVideoBtn = document.getElementById('tabVideoBtn');
  const tabAudioBtn = document.getElementById('tabAudioBtn');
  const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const brandIconImg = document.getElementById('brandIconImg');
  const footerLogoImg = document.getElementById('footerLogoImg');
  const sidebar = document.getElementById('sidebar');
  const toastNotification = document.getElementById('toastNotification');

  // Apply Initial Theme & Assets
  applyTheme(currentTheme);

  // ------------------------------------------------------------------------
  // 2. THEME, ICON & LOGO SWITCHING LOGIC
  // ------------------------------------------------------------------------
  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('claude101_theme', currentTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon();

    // Switch Icon in Header (ico-white for Dark / ico-black for Light)
    if (brandIconImg) {
      brandIconImg.src = theme === 'dark' ? 'assets/img/ico-white.png' : 'assets/img/ico-black.png';
    }

    // Switch Logo in Footer (logo-white for Dark / logo-black for Light)
    if (footerLogoImg) {
      footerLogoImg.src = theme === 'dark' ? 'assets/img/logo-white.png' : 'assets/img/logo-black.png';
    }
  }

  function updateThemeIcon() {
    themeToggleBtn.innerHTML = currentTheme === 'dark'
      ? `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
      : `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }

  // ------------------------------------------------------------------------
  // 3. RENDER SIDEBAR MODULES & LESSONS
  // ------------------------------------------------------------------------
  function renderSidebar() {
    modulesNav.innerHTML = '';

    courseData.forEach(module => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'module-group';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'module-title';
      titleDiv.textContent = module.title;
      groupDiv.appendChild(titleDiv);

      const ul = document.createElement('ul');
      ul.className = 'lessons-list';

      module.lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.className = `lesson-item ${lesson.id === currentLesson.id ? 'active' : ''}`;

        const span = document.createElement('span');
        span.className = 'lesson-title-text';
        span.textContent = lesson.title;

        li.appendChild(span);

        li.addEventListener('click', () => {
          selectLesson(module, lesson);
          if (window.innerWidth <= 900) {
            sidebar.classList.remove('open');
          }
        });

        ul.appendChild(li);
      });

      groupDiv.appendChild(ul);
      modulesNav.appendChild(groupDiv);
    });
  }

  // ------------------------------------------------------------------------
  // 4. SELECT LESSON & MEDIA LOAD
  // ------------------------------------------------------------------------
  function selectLesson(module, lesson) {
    currentModule = module;
    currentLesson = lesson;

    activeModuleTitle.textContent = module.title;
    activeLessonTitle.textContent = lesson.title;

    renderSidebar();
    loadActiveView();
  }

  function loadActiveView() {
    readingView.style.display = 'none';
    videoView.style.display = 'none';
    audioView.style.display = 'none';

    tabReadingBtn.classList.remove('active');
    tabVideoBtn.classList.remove('active');
    tabAudioBtn.classList.remove('active');

    if (activeTab === 'reading') {
      readingView.style.display = 'block';
      tabReadingBtn.classList.add('active');
      fetchMarkdown(currentLesson.path);
    } else if (activeTab === 'video') {
      videoView.style.display = 'block';
      tabVideoBtn.classList.add('active');
      renderVideoPlayer(currentModule.video);
    } else if (activeTab === 'audio') {
      audioView.style.display = 'block';
      tabAudioBtn.classList.add('active');
      renderAudioPlayer(currentModule.audio);
    }
  }

  // ------------------------------------------------------------------------
  // 5. BULLETPROOF BLOCK-LEVEL MARKDOWN PARSER
  // ------------------------------------------------------------------------
  function fetchMarkdown(filePath) {
    readingView.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);">Cargando lección...</div>';

    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar la lección');
        return res.text();
      })
      .then(mdText => {
        readingView.innerHTML = parseMarkdownToHTML(mdText);
        attachCodeCopyEvents();
      })
      .catch(err => {
        readingView.innerHTML = `
          <div class="media-placeholder">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <h3>Error al cargar el contenido</h3>
            <p>${err.message}</p>
            <div class="media-path-tag">${filePath}</div>
          </div>
        `;
      });
  }

  function parseMarkdownToHTML(md) {
    const placeholders = [];
    let text = md.replace(/\r\n/g, '\n');

    // STEP A: Extract Code Blocks (```) into Placeholders
    text = text.replace(/```([a-z0-9_]*)\n([\s\S]*?)```/gim, (match, lang, code) => {
      const index = placeholders.length;
      const language = lang.trim() || 'código';
      const cleanCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
      const codeHTML = `
        <div class="code-block-container">
          <div class="code-block-header">
            <span>${language}</span>
            <button class="copy-code-btn" data-code="${encodeURIComponent(code)}">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copiar
            </button>
          </div>
          <pre><code>${cleanCode}</code></pre>
        </div>
      `;
      placeholders.push(codeHTML);
      return `\n\n___PLACEHOLDER_${index}___\n\n`;
    });

    // STEP B: Extract Callout Alerts (> [!NOTE]) into Placeholders
    text = text.replace(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:^>.*$\n?)+)/gim, (match, type, body) => {
      const index = placeholders.length;
      const cleanContent = body.replace(/^>\s?/gim, '').trim();
      const alertHTML = `
        <div class="markdown-alert markdown-alert-${type.toLowerCase()}">
          <div class="markdown-alert-header">${type.toUpperCase()}</div>
          <div class="markdown-alert-content">${parseInlineMarkdown(cleanContent)}</div>
        </div>
      `;
      placeholders.push(alertHTML);
      return `\n\n___PLACEHOLDER_${index}___\n\n`;
    });

    // STEP C: Extract Markdown Tables into Placeholders
    text = text.replace(/(?:^\|.+\|\n)+/gm, (match) => {
      const lines = match.trim().split('\n');
      if (lines.length < 2) return match;

      const index = placeholders.length;
      let tableHTML = '<div class="table-wrapper"><table>';

      // Header row
      const headerCells = lines[0].split('|').map(c => c.trim()).filter(c => c !== '');
      tableHTML += '<thead><tr>' + headerCells.map(c => `<th>${parseInlineMarkdown(c)}</th>`).join('') + '</tr></thead>';

      // Data rows (skip line 1 separator |---|)
      tableHTML += '<tbody>';
      for (let i = 2; i < lines.length; i++) {
        const cells = lines[i].split('|').map(c => c.trim()).filter(c => c !== '');
        if (cells.length > 0) {
          tableHTML += '<tr>' + cells.map(c => `<td>${parseInlineMarkdown(c)}</td>`).join('') + '</tr>';
        }
      }
      tableHTML += '</tbody></table></div>';

      placeholders.push(tableHTML);
      return `\n\n___PLACEHOLDER_${index}___\n\n`;
    });

    // STEP D: Parse Blocks (Headings, Lists, Paragraphs)
    const blocks = text.split(/\n\n+/);
    const parsedBlocks = blocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      if (trimmed.startsWith('___PLACEHOLDER_')) {
        return trimmed;
      }

      // Headings
      if (trimmed.startsWith('# ')) return `<h1>${parseInlineMarkdown(trimmed.substring(2))}</h1>`;
      if (trimmed.startsWith('## ')) return `<h2>${parseInlineMarkdown(trimmed.substring(3))}</h2>`;
      if (trimmed.startsWith('### ')) return `<h3>${parseInlineMarkdown(trimmed.substring(4))}</h3>`;
      if (trimmed.startsWith('#### ')) return `<h4>${parseInlineMarkdown(trimmed.substring(5))}</h4>`;

      // Horizontal rule
      if (trimmed === '---' || trimmed === '***') return '<hr style="border:none; border-top:1px solid var(--border-color); margin:36px 0;">';

      // Unordered Lists
      if (trimmed.split('\n').every(line => line.trim().startsWith('- ') || line.trim().startsWith('* '))) {
        const items = trimmed.split('\n').map(line => `<li>${parseInlineMarkdown(line.trim().substring(2))}</li>`).join('');
        return `<ul>${items}</ul>`;
      }

      // Ordered Lists
      if (trimmed.split('\n').every(line => /^\d+\.\s/.test(line.trim()))) {
        const items = trimmed.split('\n').map(line => `<li>${parseInlineMarkdown(line.trim().replace(/^\d+\.\s/, ''))}</li>`).join('');
        return `<ol>${items}</ol>`;
      }

      // Default Paragraph
      return `<p>${parseInlineMarkdown(trimmed)}</p>`;
    });

    let finalHTML = parsedBlocks.join('');

    // STEP E: Re-insert Placeholders
    placeholders.forEach((phHTML, idx) => {
      finalHTML = finalHTML.replace(`___PLACEHOLDER_${idx}___`, phHTML);
    });

    return `<div class="markdown-body">${finalHTML}</div>`;
  }

  function parseInlineMarkdown(str) {
    return str
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color:var(--accent-amber); font-weight:600; text-decoration:none;">$1</a>');
  }

  function attachCodeCopyEvents() {
    document.querySelectorAll('.copy-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rawCode = decodeURIComponent(btn.getAttribute('data-code'));
        navigator.clipboard.writeText(rawCode).then(() => {
          showToast('¡Código copiado al portapapeles!');
        });
      });
    });
  }

  function showToast(msg) {
    toastNotification.textContent = msg;
    toastNotification.classList.add('show');
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2500);
  }

  // ------------------------------------------------------------------------
  // 6. MEDIA PLAYERS
  // ------------------------------------------------------------------------
  function renderVideoPlayer(videoPath) {
    videoView.innerHTML = `
      <div class="media-player-wrapper">
        <video controls controlsList="nodownload" preload="metadata" id="mainVideoPlayer">
          <source src="${videoPath}" type="video/mp4">
        </video>
        <div id="videoFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          <h3>Vídeo en Proceso de Carga</h3>
          <p>El recurso multimedia en vídeo para este módulo aún no se encuentra disponible. Puedes revisar la lección en la pestaña de lectura.</p>
          <div class="media-path-tag">${videoPath}</div>
        </div>
      </div>
    `;

    const vid = document.getElementById('mainVideoPlayer');
    vid.onerror = () => {
      vid.style.display = 'none';
      document.getElementById('videoFallback').style.display = 'flex';
    };
  }

  function renderAudioPlayer(audioPath) {
    audioView.innerHTML = `
      <div class="media-player-wrapper">
        <div style="width:100%; margin-bottom: 24px; text-align:center;">
          <h3 style="font-size:1.3rem; margin-bottom:8px; color:var(--text-primary);">Audio Resumen del Módulo</h3>
          <p style="color:var(--text-secondary); font-size:0.9rem;">Escucha el podcast explicativo del módulo mientras estudias.</p>
        </div>
        <audio controls controlsList="nodownload" id="mainAudioPlayer">
          <source src="${audioPath}" type="audio/mp4">
          <source src="${audioPath}" type="audio/aac">
        </audio>
        <div id="audioFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"/>
          </svg>
          <h3>Audio en Proceso de Carga</h3>
          <p>El archivo de audio para este módulo se encuentra mapeado y estará disponible en breve.</p>
          <div class="media-path-tag">${audioPath}</div>
        </div>
      </div>
    `;

    const aud = document.getElementById('mainAudioPlayer');
    aud.onerror = () => {
      aud.style.display = 'none';
      document.getElementById('audioFallback').style.display = 'flex';
    };
  }

  // ------------------------------------------------------------------------
  // 7. EVENT LISTENERS
  // ------------------------------------------------------------------------
  tabReadingBtn.addEventListener('click', () => { activeTab = 'reading'; loadActiveView(); });
  tabVideoBtn.addEventListener('click', () => { activeTab = 'video'; loadActiveView(); });
  tabAudioBtn.addEventListener('click', () => { activeTab = 'audio'; loadActiveView(); });

  toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Initial Load
  selectLesson(courseData[0], courseData[0].lessons[0]);
});
