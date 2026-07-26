# Lección 06: Creación con Artefactos

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Comprender la función de los Artefactos**: Identificar cuándo y por qué Claude genera entregables autónomos e interactivos en la interfaz lateral dedicada.
- **Masterizar las tipologías de Artefactos**: Dominar la creación de código, documentos Markdown, aplicaciones web HTML/JS, gráficos SVG, diagramas Mermaid y componentes React.
- **Gestionar e iterar sobre Artefactos**: Alternar entre la vista renderizada y el código fuente, aplicar refinamientos continuos y exportar el contenido.
- **Distribuir y colaborar**: Gestionar permisos de publicación abierta y compartir artefactos de forma segura en entornos corporativos.

---

## 1. ¿Qué es un Artefacto?

Un **Artefacto** es un contenido autónomo, estructurado y reutilizable que Claude genera en una **ventana lateral dedicada**, independiente del hilo de conversación principal.

A diferencia del texto plano generado en el chat, un Artefacto está pensado para ser **visualizado en tiempo real, editado, ejecutado o exportado** directamente a tus proyectos de trabajo.

```
+-----------------------------------------------------------------------+
|  Claude.ai / Desktop UI con Artefacto                                 |
|                                                                       |
|  [ Chat Conversacional ]           |  [ Panel de Artefacto ]          |
|                                    |                                  |
|  Usuario: "Crea un dashboard       |  +----------------------------+  |
|  interactivo en React para         |  |  [Vista Previa] | [Código]  |  |
|  métricas de ventas."              |  +----------------------------+  |
|                                    |  |                            |  |
|  Claude: "He generado el           |  |   [Dashboard Renderizado]  |  |
|  dashboard en el panel lateral."   |  |                            |  |
|                                    |  +----------------------------+  |
+-----------------------------------------------------------------------+
```

### Criterios de Activación Automática:
Claude creará automáticamente un Artefacto cuando la respuesta cumpla con:
1. **Longitud y autosuficiencia**: Contenido significativo (normalmente más de 15 líneas de código o texto).
2. **Reutilización e iteración**: Elementos que el usuario probablemente deseará modificar, copiar o utilizar externamente.
3. **Complejidad estructural**: Información que requiere ser aislada del flujo conversacional para su correcta interpretación.

---

## 2. Tipologías de Artefactos

La arquitectura de Claude soporta 6 clases principales de Artefactos:

| Tipología | Descripción Técnica | Casos de Uso Comunes |
| :--- | :--- | :--- |
| **Documentación (`Markdown`)** | Informes, manuales técnicos, guías y especificaciones de requisitos. | Planes de proyecto, documentación de API, propuestas comerciales. |
| **Código Fuente (`Code`)** | Scripts e implementación en lenguajes como Python, JavaScript, C++, SQL, Go. | Algoritmos de análisis de datos, scripts de automatización, funciones backend. |
| **Despliegue Web (`HTML/CSS/JS`)** | Páginas web completas e integradas en una sola unidad ejecutable. | Landing pages, calculadoras interactivas, prototipos web. |
| **Gráficos Vectoriales (`SVG`)** | Ilustraciones escalables y esquemas visuales. | Logotipos, iconografía técnica, diagramas vectoriales. |
| **Modelado de Procesos (`Mermaid`)** | Diagramación estructurada en sintaxis Mermaid.js. | Diagramas de flujo, diagramas de secuencia, mapas mentales, diagramas de Gantt. |
| **Componentes Interactivos (`React/JSX`)** | Aplicaciones web funcionales con estado (*state*) y componentes UI modernos (Lucide, Tailwind). | Dashboards interactivos, widgets corporativos, simuladores. |

> [!NOTE]
> **Aclaración sobre Archivos de Ofimática**:
> Los archivos estándar de Microsoft Office (`.docx`, `.xlsx`, `.pptx`) o documentos `.pdf` generados dinámicamente se gestionan mediante la capacidad de *Creación de Archivos* (Habilidades), no mediante la interfaz de Artefactos de pantalla.

---

## 3. Dinámicas de Interacción y Control de Versiones

### Formas de Solicitar un Artefacto
Si Claude no genera un Artefacto de forma automática, puedes solicitarlo explícitamente usando comandos directos:
- *"Crea este script de Python como un artefacto."*
- *"Genera un diagrama de flujo en Mermaid dentro de un artefacto para el proceso de compra."*

### Funcionalidades del Panel Lateral:
- **Vista Previa / Código Fuente**: Alterna con un solo clic entre la versión visual renderizada (sitio web, gráfico, dashboard) y el código subyacente.
- **Portabilidad**: Botones dedicados para **Copiar al portapapeles** o **Descargar archivo** localmente.
- **Historial de Versiones**: A medida que pides cambios (*"Añade un botón oscuro"*, *"Aumenta el margen"*), el Artefacto se actualiza creando versiones que puedes revisar y comparar.

---

## 4. Distribución y Colaboración

Claude permite compartir Artefactos de forma flexible:

```
                          [ ARTEFACTO GENERADO ]
                                   |
         +-------------------------+-------------------------+
         |                                                   |
         v                                                   v
 [ Colaboración Interna ]                          [ Publicación Abierta ]
 Visibilidad dentro del                            Enlace público accesible
 Workspace corporativo                             externamente para remix
 (Claude for Work).                                y reutilización comunitaria.
```

- **Uso Interno**: En planes corporativos, los artefactos permanecen dentro del entorno de la organización protegidos por autenticación.
- **Publicación Abierta (*Public Link*)**: Permite generar un enlace público. Cualquier usuario con el enlace puede visualizar y hacer un "remix" del artefacto para evolucionarlo en su propia cuenta de Claude. El chat privado original **nunca** se comparte.

---

## Ejercicio Práctico

1. Solicita a Claude: *"Crea un artefacto React que contenga un convertidor de monedas interactivo (USD a EUR, GBP y MXN) con diseño moderno y soporte para modo oscuro."*
2. Alterna entre la pestaña **Preview** y **Code**.
3. Pide una iteración: *"Añade un gráfico de barras que muestre la variación histórica estimada."*
4. Descarga o copia el código resultante.

---

## Resumen y Próximos Pasos

> [!TIP]
> **Conclusión Clave**
> Los Artefactos transforman la interacción con Claude de una conversación pasiva a un taller de prototipado e ingeniería ágil en tiempo real.

En la **[Lección 07: Trabajar con habilidades](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/02-organiza-tu-trabajo/07-trabajar-con-habilidades.md)**, descubriremos cómo equipar a Claude con paquetes procedimentales ejecutables para automatizar flujos de trabajo repetitivos.
