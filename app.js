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
  let completedLessons = JSON.parse(localStorage.getItem('claude101_completed') || '[]');

  // DOM Elements
  const modulesNav = document.getElementById('modulesNav');
  const searchInput = document.getElementById('searchInput');
  const activeModuleTitle = document.getElementById('activeModuleTitle');
  const activeLessonTitle = document.getElementById('activeLessonTitle');
  const readingView = document.getElementById('readingView');
  const videoView = document.getElementById('videoView');
  const audioView = document.getElementById('audioView');
  const tabReadingBtn = document.getElementById('tabReadingBtn');
  const tabVideoBtn = document.getElementById('tabVideoBtn');
  const tabAudioBtn = document.getElementById('tabAudioBtn');
  const progressBarFill = document.getElementById('progressBarFill');
  const progressText = document.getElementById('progressText');
  const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  // ------------------------------------------------------------------------
  // 2. RENDER SIDEBAR MODULES & LESSONS
  // ------------------------------------------------------------------------
  function renderSidebar(filterText = '') {
    modulesNav.innerHTML = '';

    courseData.forEach(module => {
      // Filter lessons if search query exists
      const filteredLessons = module.lessons.filter(l => 
        l.title.toLowerCase().includes(filterText.toLowerCase())
      );

      if (filterText && filteredLessons.length === 0) return;

      const groupDiv = document.createElement('div');
      groupDiv.className = 'module-group';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'module-title';
      titleDiv.textContent = module.title;
      groupDiv.appendChild(titleDiv);

      const ul = document.createElement('ul');
      ul.className = 'lessons-list';

      const lessonsToDisplay = filterText ? filteredLessons : module.lessons;

      lessonsToDisplay.forEach(lesson => {
        const li = document.createElement('li');
        li.className = `lesson-item ${lesson.id === currentLesson.id ? 'active' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completedLessons.includes(lesson.id);
        checkbox.addEventListener('change', (e) => {
          e.stopPropagation();
          toggleLessonCompleted(lesson.id);
        });

        const span = document.createElement('span');
        span.className = 'lesson-title-text';
        span.textContent = lesson.title;

        li.appendChild(checkbox);
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

    updateProgressBar();
  }

  // ------------------------------------------------------------------------
  // 3. PROGRESS TRACKER (LOCALSTORAGE)
  // ------------------------------------------------------------------------
  function toggleLessonCompleted(lessonId) {
    if (completedLessons.includes(lessonId)) {
      completedLessons = completedLessons.filter(id => id !== lessonId);
    } else {
      completedLessons.push(lessonId);
    }
    localStorage.setItem('claude101_completed', JSON.stringify(completedLessons));
    updateProgressBar();
  }

  function updateProgressBar() {
    const totalLessons = courseData.reduce((acc, m) => acc + m.lessons.length, 0);
    const completedCount = completedLessons.length;
    const percentage = Math.round((completedCount / totalLessons) * 100);

    progressBarFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completado (${completedCount}/${totalLessons})`;
  }

  // ------------------------------------------------------------------------
  // 4. SELECT LESSON & MEDIA LOAD
  // ------------------------------------------------------------------------
  function selectLesson(module, lesson) {
    currentModule = module;
    currentLesson = lesson;

    activeModuleTitle.textContent = module.title;
    activeLessonTitle.textContent = lesson.title;

    renderSidebar(searchInput.value);
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
  // 5. FETCH & PARSE MARKDOWN (VANILLA PARSER)
  // ------------------------------------------------------------------------
  function fetchMarkdown(filePath) {
    readingView.innerHTML = '<div style="text-align:center; padding:40px; color:#94a3b8;">Cargando lección...</div>';

    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo Markdown');
        return res.text();
      })
      .then(mdText => {
        readingView.innerHTML = parseMarkdownToHTML(mdText);
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
    // Basic clean Vanilla Markdown Parser for headings, formatting, tables & callouts
    let html = md
      // Escape unsafe HTML
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '2: <h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Code Blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // GitHub Callouts
      .replace(/^&gt; \[!NOTE\]\s*(.*$)/gim, '<blockquote class="alert alert-note"><strong>NOTA:</strong> $1</blockquote>')
      .replace(/^&gt; \[!TIP\]\s*(.*$)/gim, '<blockquote class="alert alert-tip"><strong>CONSEJO:</strong> $1</blockquote>')
      .replace(/^&gt; \[!IMPORTANT\]\s*(.*$)/gim, '<blockquote class="alert alert-important"><strong>IMPORTANTE:</strong> $1</blockquote>')
      .replace(/^&gt; \[!WARNING\]\s*(.*$)/gim, '<blockquote class="alert alert-warning"><strong>ADVERTENCIA:</strong> $1</blockquote>')
      // Blockquotes
      .replace(/^&gt; (.*$)/gim, '<blockquote>$1</blockquote>')
      // Horizontal Rules
      .replace(/^---$/gim, '<hr style="border:none; border-top:1px solid var(--border-color); margin:24px 0;">')
      // Lists
      .replace(/^\s*-\s*(.*$)/gim, '<li>$1</li>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p>');

    return `<div class="markdown-body"><p>${html}</p></div>`;
  }

  // ------------------------------------------------------------------------
  // 6. VIDEO & AUDIO MEDIA RENDERERS
  // ------------------------------------------------------------------------
  function renderVideoPlayer(videoPath) {
    videoView.innerHTML = `
      <div class="media-player-wrapper">
        <video controls controlsList="nodownload" preload="metadata" id="mainVideoPlayer">
          <source src="${videoPath}" type="video/mp4">
          Tu navegador no soporta la reproducción de video HTML5.
        </video>
        <div id="videoFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          <h3>Vídeo en Proceso de Carga</h3>
          <p>El recurso multimedia para este módulo aún no ha sido cargado en el servidor. Puedes continuar con la lección de lectura.</p>
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
          <h3 style="font-size:1.3rem; margin-bottom:8px;">Audio Resumen del Módulo</h3>
          <p style="color:var(--text-muted); font-size:0.9rem;">Escucha el análisis en audio mientras repasas tus apuntes.</p>
        </div>
        <audio controls controlsList="nodownload" id="mainAudioPlayer">
          <source src="${audioPath}" type="audio/mp4">
          <source src="${audioPath}" type="audio/aac">
          Tu navegador no soporta la reproducción de audio HTML5.
        </audio>
        <div id="audioFallback" style="display:none;" class="media-placeholder">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"/>
          </svg>
          <h3>Audio en Proceso de Carga</h3>
          <p>El archivo de audio para este módulo se encuentra mapeado y estará disponible próximamente.</p>
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
  // 7. EVENT LISTENERS & INITIALIZATION
  // ------------------------------------------------------------------------
  tabReadingBtn.addEventListener('click', () => { activeTab = 'reading'; loadActiveView(); });
  tabVideoBtn.addEventListener('click', () => { activeTab = 'video'; loadActiveView(); });
  tabAudioBtn.addEventListener('click', () => { activeTab = 'audio'; loadActiveView(); });

  searchInput.addEventListener('input', (e) => {
    renderSidebar(e.target.value);
  });

  toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Initial Load
  selectLesson(courseData[0], courseData[0].lessons[0]);
});
