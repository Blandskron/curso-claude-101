# Lección 04: Cómo Trabajarás con Claude en tu Ordenador

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Configurar la App de Escritorio**: Transformar tu ordenador en un hub de productividad centralizado impulsado por Claude.
- **Masterizar las 3 Modalidades de Trabajo**: Comprender la distinción operativa entre **Interacción Iterativa (Chat)**, **Delegación de Tareas (Cowork)** y **Desarrollo de Software (Claude Code)**.
- **Seleccionar la herramienta adecuada**: Utilizar el marco de decisión técnica para elegir el modo correcto según la complejidad y naturaleza del entregable.
- **Optimizar flujos locales**: Utilizar atajos de teclado del sistema, captura de contexto, lectura de archivos locales y tareas programadas.

---

## 1. La Aplicación de Escritorio como Hub Operativo

La aplicación de escritorio de Claude constituye una base operativa centralizada integrada directamente con tu sistema operativo (Windows / macOS). 

A diferencia de la versión web tradicional, la app de escritorio permite una **interacción sin fricciones con tu entorno local**, eliminando la necesidad de cambiar constantemente de ventana o copiar y pegar archivos de forma manual.

```
       +-------------------------------------------------------------+
       |               CLAUDE DESKTOP ECOSYSTEM                      |
       +-------------------------------------------------------------+
       |                                                             |
       |  [ 1. CHAT ]         [ 2. COWORK ]       [ 3. CLAUDE CODE ] |
       |  Conversación        Delegación          Ingeniería de      |
       |  Reflexiva           Autónoma            Software & Terminal|
       |                                                             |
       +-------------------------------------------------------------+
       | Integración Local: Archivos | Atajos | Conectores | Git    |
       +-------------------------------------------------------------+
```

---

## 2. Las Tres Categorías de Trabajo

Para maximizar la eficiencia operativa, es fundamental clasificar las tareas en una de las tres modalidades de trabajo disponibles:

### Modalidad 1: Interacción Iterativa (Chat)

Esta modalidad funciona como una **colaboración reflexiva en tiempo real**. Es el enfoque ideal cuando el resultado final aún no está completamente definido y requiere una guía constante o un diálogo adaptativo.

- **Filosofía**: El valor reside en el proceso de pensamiento conjunto entre el usuario y la IA.
- **Ideal para**:
  - Lluvia de ideas (*brainstorming*) y conceptualización de proyectos.
  - Redacción inicial de correos o propuestas.
  - Resolución de dudas inmediatas sobre documentos o imágenes.
  - Estructuración verbal de presentaciones ejecutivas.
- **Funcionalidades Clave**:
  - Acceso instantáneo mediante atajos de teclado globales del sistema.
  - Captura directa de pantallas y recortes visuales.
  - Dictado por voz e integración con archivos adjuntos.

---

### Modalidad 2: Delegación de Tareas (Cowork)

Este enfoque trasciende la simple consulta conversacional para **delegar la ejecución autónoma de procesos multifase**. El usuario define el objetivo global y Claude asume la recopilación de contexto, el análisis de datos y la producción del entregable final.

- **Filosofía**: En lugar de guiar cada paso, se delega un resultado final de extremo a extremo.
- **Ideal para**:
  - Tareas secuenciales (ej. consolidar cifras de 5 reportes CSV y redactar un informe ejecutivo).
  - Integración de información proveniente de múltiples herramientas (Slack, correo, carpetas locales).
  - Automatización de flujos de trabajo programados o recurrentes.
- **Funcionalidades Clave**:
  - Acceso seguro a directorios y carpetas del disco local.
  - Ejecución mediante subagentes especializados en paralelo.
  - Navegación web autónoma para extracción y contraste de datos.
  - Programación de tareas desatendidas.

> [!IMPORTANT]
> **Diferencia Clave entre Chat y Cowork**
> En **Chat**, tú guías a Claude paso a paso mediante mensajes continuos. En **Cowork**, le entregas la responsabilidad de ejecutar un plan completo, supervisando el entregable al finalizar.

---

### Modalidad 3: Desarrollo de Software (Claude Code)

Es el entorno especializado para **ingeniería de software y manipulación directa de bases de código** (*codebases*). Claude interactúa directamente con el sistema de archivos del proyecto, la terminal y el control de versiones.

- **Filosofía**: Agente de codificación autónomo que lee, modifica, ejecuta pruebas y resuelve incidencias en tu entorno de desarrollo.
- **Ideal para**:
  - Implementación de nuevas funcionalidades (*features*).
  - Depuración (*debugging*) de errores y trazabilidad de logs.
  - Refactorización de código legado y actualización de dependencias.
  - Ejecución de suites de pruebas unitarias e integración.
- **Funcionalidades Clave**:
  - Terminal integrada y ejecutor de comandos de consola.
  - Control de versiones avanzado con Git (commits, branches, diffs).
  - Visualización y aprobación de cambios en tiempo real.

---

## 3. Matriz Comparativa para la Selección de Modo

Utiliza esta guía rápida para seleccionar el entorno adecuado en cada situación:

| Objetivo de la Tarea | Modo Recomendado | Ubicación en App | Tipo de Entrada / Input | Autonomía Requerida |
| :--- | :--- | :--- | :--- | :--- |
| **Intercambiar ideas, redactar borradores, aclarar dudas rápidas** | **Interacción Iterativa** | Pestaña Chat / Pop-up de sistema | Texto, capturas de pantalla, dictado | Baja (Control guiado por el usuario) |
| **Análisis multifase, procesar carpetas completas, reportes integrados** | **Delegación de Tareas** | Pestaña Cowork | Prompts de proyecto, acceso a carpetas locales | Media-Alta (Ejecución por objetivos) |
| **Escribir, probar, refactorizar o solucionar bugs en código fuente** | **Desarrollo de Software** | Claude Code / Pestaña Código | Repositorio local, terminal, instrucciones de código | Alta (Ejecución técnica autónoma con aprobación de diffs) |

---

## 4. Criterios de Selección y Evaluación de Flujos

Para garantizar una gestión eficiente en tu trabajo diario, hazte las siguientes dos preguntas antes de iniciar cualquier tarea:

1. **¿El entregable requiere un pensamiento secuencial conversacional o es una tarea delizable completa?**
   - Si necesitas explorar ideas $\rightarrow$ **Chat**.
   - Si tienes claro el resultado esperado y los insumos $\rightarrow$ **Cowork**.

2. **¿La tarea involucra código fuente, terminal o comandos de sistema?**
   - Si requiere modificar repositorios $\rightarrow$ **Claude Code**.

```
                           ¿Requiere modificar código/terminal?
                                      /         \
                                    SÍ           NO
                                   /               \
                       [ Claude Code ]      ¿Es una tarea multifase
                                              con entregable claro?
                                               /               \
                                             SÍ                 NO
                                            /                     \
                                    [ Cowork ]                 [ Chat ]
```

---

## Ejercicio Práctico de Integración Local

Realiza este ejercicio práctico utilizando la aplicación en tu ordenador:

1. **Prueba de Chat Rápido**: Configura el atajo global de teclado en la app de escritorio de Claude. Abre la ventana emergente, realiza una captura de pantalla de tu escritorio y pídele a Claude que identifique las aplicaciones abiertas.
2. **Evaluación de Delegación**: Identifica un proceso de tu trabajo que requiera procesar más de un archivo. Redacta las instrucciones para ejecutarlo en el modo **Cowork**, definiendo claramente:
   - Los archivos de entrada (*inputs*).
   - El proceso de transformación.
   - El formato final del entregable (*output*).

---

## Resumen Final del Módulo 01

> [!TIP]
> **Conclusión del Módulo 01**
> Has completado el módulo introductorio sobre Claude. Ahora comprendes su naturaleza como *Thinking Partner*, el framework de prompting profesional (3C), la resolución de problemas con Prompt Engineering avanzado y el marco 4D, así como el uso de la app de escritorio y sus 3 modalidades de trabajo (Chat, Cowork y Claude Code).

¡Felicitaciones! Estás listo para avanzar al **Módulo 02: Organiza tu Trabajo**, donde aprenderás a estructurar proyectos complejos, gestionar colecciones de conocimiento y optimizar tus flujos de trabajo profesionales con Claude.


## Fuentes y recursos relacionados

- Documentación oficial de Anthropic: [docs.anthropic.com](https://docs.anthropic.com/)
- Centro de ayuda de Claude: [support.anthropic.com](https://support.anthropic.com/)
- Material de referencia del curso Claude 101 de Anthropic.

**Última revisión:** 2026-07-26

> [!NOTE]
> Las funciones, límites y capacidades de Claude pueden cambiar según el modelo utilizado, el plan de suscripción y las actualizaciones del producto. Este material es un recurso educativo independiente elaborado para facilitar el estudio en español.
