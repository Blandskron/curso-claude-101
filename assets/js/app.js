/* ==========================================================================
   AULA VIRTUAL CLAUDE 101 - APPLICATION LOGIC (VANILLA JS & ACCESSIBLE)
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

  // Flat lessons list for linear previous/next navigation
  const allLessons = [];
  courseData.forEach(mod => {
    mod.lessons.forEach(l => {
      allLessons.push({ ...l, moduleTitle: mod.title, module: mod });
    });
  });

  // ------------------------------------------------------------------------
  // 2. GLOSSARY DATASET (SPANISH - ENGLISH TECHNICAL CONCEPTS)
  // ------------------------------------------------------------------------
  const glossaryData = [
    {
      termEs: 'Ventana de contexto',
      termEn: 'Context window',
      def: 'Capacidad máxima de tokens (texto o datos) que el modelo de IA puede procesar y recordar simultáneamente en una misma conversación o consulta.',
      lessonId: 'l01'
    },
    {
      termEs: 'Prompt del sistema',
      termEn: 'System prompt / System instructions',
      def: 'Instrucciones globales de gobernanza que definen el rol, tono, reglas de comportamiento y límites operativos del modelo antes de procesar las consultas del usuario.',
      lessonId: 'l05'
    },
    {
      termEs: 'Artefactos',
      termEn: 'Artifacts',
      def: 'Espacio de trabajo visual e independiente en la interfaz de Claude donde se generan y editan documentos, código, diagramas Mermaid, SVG o aplicaciones React.',
      lessonId: 'l06'
    },
    {
      termEs: 'Proyectos',
      termEn: 'Projects',
      def: 'Unidades de encapsulamiento que organizan conversaciones, archivos de conocimiento de fondo e instrucciones personalizadas para un tema o equipo específico.',
      lessonId: 'l05'
    },
    {
      termEs: 'Habilidades',
      termEn: 'Skills',
      def: 'Paquetes de instrucciones procedimentales ejecutables en entornos de sandbox para realizar tareas técnicas repetibles como análisis de código o procesamiento.',
      lessonId: 'l07'
    },
    {
      termEs: 'Protocolo de Contexto de Modelo',
      termEn: 'Model Context Protocol (MCP)',
      def: 'Estándar abierto cliente-servidor desarrollado por Anthropic para conectar modelos de IA con fuentes de datos locales, bases de datos empresariales y APIs externas.',
      lessonId: 'l08'
    },
    {
      termEs: 'Uso de herramientas',
      termEn: 'Tool use / Function calling',
      def: 'Capacidad del modelo de estructurar llamadas de funciones para interactuar de forma autónoma con software, calculadoras, navegadores o APIs externas.',
      lessonId: 'l08'
    },
    {
      termEs: 'Alucinación',
      termEn: 'Hallucination',
      def: 'Fenómeno en el que un modelo de IA genera información inexacta, inventada o falsa con alta confianza aparente.',
      lessonId: 'l03'
    },
    {
      termEs: 'Tokens',
      termEn: 'Tokens',
      def: 'Unidades básicas de texto (palabras o fragmentos de palabras) que utiliza el modelo para calcular y procesar la entrada y salida de información.',
      lessonId: 'l01'
    },
    {
      termEs: 'Generación Aumentada por Recuperación',
      termEn: 'Retrieval-Augmented Generation (RAG)',
      def: 'Técnica de arquitectura de IA que busca fragmentos de documentos relevantes en una base de conocimiento para alimentar el contexto del modelo antes de responder.',
      lessonId: 'l05'
    },
    {
      termEs: 'Búsqueda empresarial',
      termEn: 'Enterprise search',
      def: 'Integración del modelo con repositorios corporativos de datos (ERPs, CRMs, Google Drive, Notion) manteniendo permisos de seguridad de la organización.',
      lessonId: 'l09'
    },
    {
      termEs: 'IA Constitucional',
      termEn: 'Constitutional AI',
      def: 'Enfoque de entrenamiento de Anthropic basado en una constitución de principios éticos para guiar al modelo a ser Útil, Honesto e Inofensivo (HHH).',
      lessonId: 'l01'
    }
  ];

  // State Management
  let currentModule = courseData[0];
  let currentLesson = courseData[0].lessons[0];
  let activeTab = 'reading'; // 'reading' | 'video' | 'audio' | 'glossary'
  let currentTheme = localStorage.getItem('claude101_theme') || 'dark';

  // DOM Elements
  const modulesNav = document.getElementById('modulesNav');
  const activeModuleTitle = document.getElementById('activeModuleTitle');
  const activeLessonTitle = document.getElementById('activeLessonTitle');
  const readingView = document.getElementById('readingView');
  const videoView = document.getElementById('videoView');
  const audioView = document.getElementById('audioView');
  const glossaryView = document.getElementById('glossaryView');
  const searchResultsView = document.getElementById('searchResultsView');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const tabReadingBtn = document.getElementById('tabReadingBtn');
  const tabVideoBtn = document.getElementById('tabVideoBtn');
  const tabAudioBtn = document.getElementById('tabAudioBtn');
  const tabGlossaryBtn = document.getElementById('tabGlossaryBtn');
  const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const brandIconImg = document.getElementById('brandIconImg');
  const footerLogoImg = document.getElementById('footerLogoImg');
  const sidebar = document.getElementById('sidebar');
  const toastNotification = document.getElementById('toastNotification');

  // Apply Initial Theme & Assets
  applyTheme(currentTheme);

  // ------------------------------------------------------------------------
  // 3. THEME SWITCHER
  // ------------------------------------------------------------------------
  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('claude101_theme', currentTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon();

    if (brandIconImg) {
      brandIconImg.src = theme === 'dark' ? 'assets/img/ico-white.png' : 'assets/img/ico-black.png';
    }
    if (footerLogoImg) {
      footerLogoImg.src = theme === 'dark' ? 'assets/img/logo-white.png' : 'assets/img/logo-black.png';
    }
  }

  function updateThemeIcon() {
    themeToggleBtn.innerHTML = currentTheme === 'dark'
      ? `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
      : `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }

  // ------------------------------------------------------------------------
  // 4. RENDER SIDEBAR MODULES & LESSONS
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

        const btn = document.createElement('button');
        btn.className = `lesson-item ${lesson.id === currentLesson.id && activeTab === 'reading' ? 'active' : ''}`;
        btn.setAttribute('aria-current', lesson.id === currentLesson.id ? 'page' : 'false');

        const span = document.createElement('span');
        span.className = 'lesson-title-text';
        span.textContent = lesson.title;

        btn.appendChild(span);

        btn.addEventListener('click', () => {
          selectLesson(module, lesson);
          if (window.innerWidth <= 900) {
            sidebar.classList.remove('open');
            toggleSidebarBtn.setAttribute('aria-expanded', 'false');
          }
        });

        li.appendChild(btn);
        ul.appendChild(li);
      });

      groupDiv.appendChild(ul);
      modulesNav.appendChild(groupDiv);
    });
  }

  // ------------------------------------------------------------------------
  // 5. SELECT LESSON & MEDIA LOAD
  // ------------------------------------------------------------------------
  function selectLesson(module, lesson, targetTab = 'reading') {
    currentModule = module;
    currentLesson = lesson;
    activeTab = targetTab;

    activeModuleTitle.textContent = module.title;
    activeLessonTitle.textContent = lesson.title;

    window.location.hash = lesson.id;
    searchResultsView.style.display = 'none';

    renderSidebar();
    loadActiveView();
  }

  function loadActiveView() {
    readingView.style.display = 'none';
    videoView.style.display = 'none';
    audioView.style.display = 'none';
    glossaryView.style.display = 'none';

    [tabReadingBtn, tabVideoBtn, tabAudioBtn, tabGlossaryBtn].forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    if (activeTab === 'reading') {
      readingView.style.display = 'block';
      tabReadingBtn.classList.add('active');
      tabReadingBtn.setAttribute('aria-selected', 'true');
      fetchMarkdown(currentLesson.path);
    } else if (activeTab === 'video') {
      videoView.style.display = 'block';
      tabVideoBtn.classList.add('active');
      tabVideoBtn.setAttribute('aria-selected', 'true');
      renderVideoPlayer(currentModule.video);
    } else if (activeTab === 'audio') {
      audioView.style.display = 'block';
      tabAudioBtn.classList.add('active');
      tabAudioBtn.setAttribute('aria-selected', 'true');
      renderAudioPlayer(currentModule.audio);
    } else if (activeTab === 'glossary') {
      glossaryView.style.display = 'block';
      tabGlossaryBtn.classList.add('active');
      tabGlossaryBtn.setAttribute('aria-selected', 'true');
      renderGlossaryView();
    }
  }

  // ------------------------------------------------------------------------
  // 6. SECURE MARKDOWN PARSER (MARKED + DOMPURIFY + GFM ALERT PARSER)
  // ------------------------------------------------------------------------
  function fetchMarkdown(filePath) {
    readingView.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);">Cargando lección...</div>';

    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar la lección');
        return res.text();
      })
      .then(mdText => {
        let rawHTML = '';
        if (window.marked) {
          rawHTML = window.marked.parse(mdText);
        } else {
          rawHTML = parseFallbackMarkdown(mdText);
        }

        // Sanitize HTML with DOMPurify
        let cleanHTML = window.DOMPurify ? window.DOMPurify.sanitize(rawHTML, { ADD_ATTR: ['target'] }) : rawHTML;
        
        // Post-process HTML for GFM Callouts, Alert Callouts, Code Blocks, and Links
        cleanHTML = postProcessHTML(cleanHTML);

        readingView.innerHTML = cleanHTML;
        appendLessonNavigation();
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

  function postProcessHTML(html) {
    // Transform GFM blockquote alerts (> [!NOTE]) into styled callout divs
    let processed = html.replace(/<blockquote>\s*<p>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([\s\S]*?)<\/blockquote>/gim, (match, type, content) => {
      const cleanContent = content.replace(/<\/p>/g, '').replace(/<p>/g, '').trim();
      return `
        <div class="markdown-alert markdown-alert-${type.toLowerCase()}">
          <div class="markdown-alert-header">${type.toUpperCase()}</div>
          <div class="markdown-alert-content">${cleanContent}</div>
        </div>
      `;
    });

    // Wrap tables in responsive wrapper
    processed = processed.replace(/<table>/g, '<div class="table-wrapper"><table>').replace(/<\/table>/g, '</table></div>');

    // Wrap pre code blocks in code block container with copy button
    processed = processed.replace(/<pre><code class="(?:language-)?([a-z0-9_-]+)">([\s\S]*?)<\/code><\/pre>/gim, (match, lang, code) => {
      const language = lang || 'código';
      return `
        <div class="code-block-container">
          <div class="code-block-header">
            <span>${language}</span>
            <button class="copy-code-btn" data-code="${encodeURIComponent(code)}">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copiar
            </button>
          </div>
          <pre><code>${code}</code></pre>
        </div>
      `;
    });

    // Ensure external links have target="_blank" rel="noopener noreferrer"
    processed = processed.replace(/<a href="(http[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');

    return `<div class="markdown-body">${processed}</div>`;
  }

  function parseFallbackMarkdown(md) {
    return md.replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/^## (.*$)/gim, '<h2>$1</h2>').replace(/^### (.*$)/gim, '<h3>$1</h3>').replace(/\n\n/g, '<p></p>');
  }

  // ------------------------------------------------------------------------
  // 7. LESSON NAVIGATION (PREVIOUS & NEXT BUTTONS)
  // ------------------------------------------------------------------------
  function appendLessonNavigation() {
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex === -1) return;

    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    const navDiv = document.createElement('div');
    navDiv.className = 'lesson-nav-footer';

    if (prevLesson) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'nav-lesson-btn';
      prevBtn.innerHTML = `
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span><strong>Lectura anterior:</strong><br>${prevLesson.title}</span>
      `;
      prevBtn.addEventListener('click', () => selectLesson(prevLesson.module, prevLesson));
      navDiv.appendChild(prevBtn);
    } else {
      const emptySpan = document.createElement('span');
      navDiv.appendChild(emptySpan);
    }

    if (nextLesson) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'nav-lesson-btn';
      nextBtn.innerHTML = `
        <span><strong>Lectura siguiente:</strong><br>${nextLesson.title}</span>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      `;
      nextBtn.addEventListener('click', () => selectLesson(nextLesson.module, nextLesson));
      navDiv.appendChild(nextBtn);
    }

    readingView.appendChild(navDiv);
  }

  function attachCodeCopyEvents() {
    document.querySelectorAll('.copy-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rawCode = decodeURIComponent(btn.getAttribute('data-code')).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
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
  // 8. GLOSSARY VIEW RENDER
  // ------------------------------------------------------------------------
  function renderGlossaryView() {
    activeModuleTitle.textContent = 'Recursos de Consulta';
    activeLessonTitle.textContent = 'Glosario Español – Inglés de Conceptos Clave';

    let html = `
      <div class="glossary-container">
        <h2>Glosario Técnico de Términos</h2>
        <p style="color:var(--text-secondary); margin-bottom: 24px;">Conceptos y terminología técnica utilizada a lo largo del material de estudio Claude 101, ordenados para su rápida referencia.</p>
        <div class="glossary-grid">
    `;

    glossaryData.forEach(item => {
      html += `
        <div class="glossary-card">
          <div class="glossary-terms">
            <span class="glossary-es">${item.termEs}</span>
            <span class="glossary-en">${item.termEn}</span>
          </div>
          <p class="glossary-def">${item.def}</p>
        </div>
      `;
    });

    html += `</div></div>`;
    glossaryView.innerHTML = html;
  }

  // ------------------------------------------------------------------------
  // 9. CLIENT-SIDE SEARCH ENGINE
  // ------------------------------------------------------------------------
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length === 0) {
      clearSearchBtn.style.display = 'none';
      searchResultsView.style.display = 'none';
      return;
    }

    clearSearchBtn.style.display = 'block';
    performLocalSearch(query);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    searchResultsView.style.display = 'none';
    searchInput.focus();
  });

  function performLocalSearch(query) {
    const results = [];

    // Search lessons
    allLessons.forEach(lesson => {
      if (lesson.title.toLowerCase().includes(query)) {
        results.push({
          type: 'Lección',
          title: lesson.title,
          snippet: `Ubicado en ${lesson.moduleTitle}`,
          action: () => selectLesson(lesson.module, lesson)
        });
      }
    });

    // Search glossary
    glossaryData.forEach(item => {
      if (item.termEs.toLowerCase().includes(query) || item.termEn.toLowerCase().includes(query) || item.def.toLowerCase().includes(query)) {
        results.push({
          type: 'Glosario',
          title: `${item.termEs} (${item.termEn})`,
          snippet: item.def,
          action: () => {
            activeTab = 'glossary';
            loadActiveView();
            searchResultsView.style.display = 'none';
          }
        });
      }
    });

    renderSearchResults(results, query);
  }

  function renderSearchResults(results, query) {
    searchResultsView.style.display = 'block';
    searchResultsCount.textContent = `${results.length} resultado(s)`;

    if (results.length === 0) {
      searchResultsList.innerHTML = `<p style="color:var(--text-muted); padding:16px;">No se encontraron resultados para "${query}". Intenta buscar otros términos como "MCP", "Ventana", "Artefactos" o "Proyectos".</p>`;
      return;
    }

    searchResultsList.innerHTML = '';
    results.forEach(res => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'search-result-item';

      itemDiv.innerHTML = `
        <div class="search-result-title">${res.title} <span class="badge-lang">${res.type}</span></div>
        <div class="search-result-snippet">${res.snippet}</div>
      `;

      itemDiv.addEventListener('click', res.action);
      searchResultsList.appendChild(itemDiv);
    });
  }

  // ------------------------------------------------------------------------
  // 10. MEDIA PLAYERS WITH NOTEBOOKLM DISCLAIMERS
  // ------------------------------------------------------------------------
  function renderVideoPlayer(videoPath) {
    videoView.innerHTML = `
      <div class="media-player-wrapper">
        <video controls controlsList="nodownload" preload="metadata" id="mainVideoPlayer">
          <source src="${videoPath}" type="video/mp4">
        </video>
        <div class="media-ai-disclaimer">
          <strong>Aviso de Contenido Educativo:</strong> Este recurso en vídeo fue elaborado como material de apoyo complementario para acompañar las lecturas del curso. Para consultar las fuentes y la documentación oficial de Anthropic, visita el portal oficial.
        </div>
        <div id="videoFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          <h3>Vídeo en Proceso de Carga</h3>
          <p>El archivo de vídeo para este módulo se encuentra mapeado y estará disponible en breve.</p>
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
          <h3 style="font-size:1.3rem; margin-bottom:8px; color:var(--text-primary);">Podcast Educativo del Módulo</h3>
          <p style="color:var(--text-secondary); font-size:0.9rem;">Audio explicativo generado como recurso complementario de estudio.</p>
        </div>
        <audio controls controlsList="nodownload" id="mainAudioPlayer">
          <source src="${audioPath}" type="audio/mp4">
          <source src="${audioPath}" type="audio/aac">
        </audio>
        <div class="media-ai-disclaimer">
          <strong>Aviso sobre Generación con Inteligencia Artificial:</strong> Este recurso multimedia fue generado con NotebookLM a partir de los apuntes y fuentes del proyecto. El contenido fue creado como material complementario de estudio y puede contener simplificaciones o imprecisiones. Para información oficial, consulta la documentación de Anthropic.
        </div>
        <div id="audioFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"/>
          </svg>
          <h3>Audio / Podcast en Proceso de Carga</h3>
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
  // 11. HASH NAVIGATION & EVENT LISTENERS
  // ------------------------------------------------------------------------
  tabReadingBtn.addEventListener('click', () => { activeTab = 'reading'; loadActiveView(); });
  tabVideoBtn.addEventListener('click', () => { activeTab = 'video'; loadActiveView(); });
  tabAudioBtn.addEventListener('click', () => { activeTab = 'audio'; loadActiveView(); });
  tabGlossaryBtn.addEventListener('click', () => { activeTab = 'glossary'; loadActiveView(); });

  toggleSidebarBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggleSidebarBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Handle Hash URLs for direct lesson linking
  function checkHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = allLessons.find(l => l.id === hash);
      if (match) {
        selectLesson(match.module, match);
        return;
      }
    }
    selectLesson(courseData[0], courseData[0].lessons[0]);
  }

  window.addEventListener('hashchange', checkHashNavigation);

  // Initial Load
  checkHashNavigation();
});
