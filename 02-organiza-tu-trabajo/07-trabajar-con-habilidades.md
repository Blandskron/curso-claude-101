# Lección 07: Trabajar con Habilidades (Skills) en Claude

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Definir la arquitectura de Habilidades (*Skills*)**: Entender cómo las Habilidades funcionan como paquetes procedimentales ejecutables que amplían la capacidad de Claude.
- **Diferenciar entre Habilidades Integradas y Personalizadas**: Identificar los casos de uso para las herramientas estándar de Anthropic y las habilidades creadas por el usuario u organización.
- **Configurar el entorno de ejecución**: Habilitar los permisos necesarios de *Ejecución de Código* y *Creación de Archivos* en el panel de administración.
- **Distinguir Proyectos de Habilidades**: Aplicar la matriz arquitectónica que contrapone el conocimiento (*Proyectos*) con el procedimiento (*Habilidades*).

---

## 1. Definición y Valor Operativo de las Habilidades

Las **Habilidades (*Skills*)** representan un salto cualitativo en la arquitectura de Claude. Mientras que las instrucciones estándar le indican a la IA *qué responder*, una Habilidad le proporciona a Claude **metodologías procedimentales ejecutables, scripts auxiliares y recursos estandarizados** para ejecutar tareas complejas con consistencia matemática.

```
       +-------------------------------------------------------------+
       |                  CONCEPTO DE HABILIDAD (SKILL)              |
       +-------------------------------------------------------------+
       |                                                             |
       |  [ Instrucción del Usuario ]                                |
       |              |                                              |
       |              v                                              |
       |  [ Invocación Automática de Skill ]                         |
       |  - Carga de Scripts Python / Bibliotecas                    |
       |  - Ejecución en Entorno Aislado (Sandbox)                   |
       |  - Procesamiento de Archivos (.xlsx, .docx, .pdf)           |
       |              |                                              |
       |              v                                              |
       |  [ Entregable de Grado Profesional Generado ]               |
       |                                                             |
       +-------------------------------------------------------------+
```

> [!NOTE]
> **¿Por qué son críticas las Habilidades?**
> Permiten codificar flujos de trabajo repetitivos de alto nivel —como auditorías de cumplimiento legal, análisis de variaciones presupuestarias o conversión de minutas a presentaciones corporativas— asegurando que Claude ejecute exactamente el mismo procedimiento lógico en cada iteración.

---

## 2. Categorización de Habilidades

La plataforma clasifica las habilidades en dos grupos principales:

### A. Habilidades Integradas de Anthropic
Son capacidades preconfiguradas y mantenidas por Anthropic que permiten a Claude interactuar con documentos y ejecutar código de forma nativa:
- **Creación y manipulación de documentos de Office**: Generación nativa de archivos `.docx` formateados, hojas `.xlsx` con fórmulas complejas y presentaciones `.pptx`.
- **Ejecución de código en sandbox**: Entorno aislado de Python para procesamiento de datos, cálculos estadísticos y generación de gráficos matplot/seaborn.

### B. Habilidades Personalizadas (*Custom Skills*)
Desarrolladas por usuarios o departamentos para empaquetar el conocimiento procedimental de la organización:
- Manuales de marca con scripts de validación de tono.
- Algoritmos de scoring de crédito o evaluación de riesgos.
- Plantillas de ingeniería para análisis de rendimiento de software.

---

## 3. Configuración del Entorno de Ejecución

Para utilizar las Habilidades que requieren manipulación de datos o creación de archivos, se deben activar los permisos correspondientes:

1. Navega a **Configuración > Capacidades**.
2. Asegúrate de tener activadas las siguientes casillas:
   - **Ejecución de Código (*Code Execution*)**: Permite a Claude correr código en un entorno seguro para procesar datos.
   - **Creación de Archivos (*File Creation*)**: Permite a Claude compilar y entregar archivos descargables.

> [!IMPORTANT]
> **Gobernanza Corporativa en Planes Enterprise**
> En organizaciones con planes Enterprise, el administrador del Workspace debe habilitar globalmente la ejecución de código antes de que las Habilidades puedan ser utilizadas por los colaboradores.

---

## 4. Matriz Comparativa: Proyectos vs. Habilidades

Es muy común confundir estas dos herramientas. Utiliza esta tabla para estructurar adecuadamente la arquitectura de conocimiento en tu empresa:

| Criterio | Proyectos (*Projects*) | Habilidades (*Skills*) |
| :--- | :--- | :--- |
| **Función Principal** | Gestión y almacenamiento de conocimiento (**CONTEXTO**). | Ejecución y automatización de algoritmos (**PROCEDIMIENTO**). |
| **Responde a...** | *"¿Qué datos o antecedentes debe conocer Claude?"* | *"¿Cómo debe procesar y ejecutar la tarea Claude?"* |
| **Contenido Típico** | PDFs de políticas, manuales, código fuente, historial de chats. | Scripts ejecutables, listas de cotejo, reglas de procesamiento. |
| **Persistencia** | Disponible de forma continua en todos los chats del proyecto. | Se invoca dinámicamente cuando la tarea específica lo requiere. |
| **Sinergia** | Define el **"Qué"**. | Define el **"Cómo"**. |

```
                       [ PROYECTO: CONTEXTO ]
                       "Manuales Financieros 2026"
                                 +
                       [ HABILIDAD: PROCEDIMIENTO ]
                       "Script de Cálculo de EBITDA"
                                 ||
                                 v
                     [ ENTREGABLE AUTOMATIZADO ]
```

---

## Ejercicio Práctico

1. Ve a **Configuración > Capacidades** y confirma la activación de *Ejecución de Código*.
2. Solicita a Claude en un chat: *"Utiliza tu habilidad de creación de hojas de cálculo para generar un modelo financiero de presupuestos mensuales con 12 pestañas, fórmulas de suma automática y formato corporativo en .xlsx."*
3. Observa cómo Claude notifica en su cadena de pensamiento la invocación de la Habilidad y descarga el archivo resultante.

---

## Resumen y Próximos Pasos

> [!TIP]
> **Conclusión Clave**
> Los Proyectos le otorgan memoria y contexto a Claude; las Habilidades le otorgan manos operativas para ejecutar procedimientos rigurosos y entregar archivos listos para producción.

Con esto concluimos el **Módulo 02: Organiza tu Trabajo**. En el **[Módulo 03 - Lección 08: Conectando tus herramientas](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/03-ampliando-el-alcance-de-claude/08-conectando-tus-herramientas.md)**, aprenderemos a integrar a Claude con aplicaciones externas como Slack, Google Drive, Notion y servicios en la nube mediante el estándar MCP.
