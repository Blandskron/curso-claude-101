# Lección 08: Conectando tus Herramientas y Protocolo MCP

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Comprender la función estratégica de los Conectores**: Transformar a Claude de un asistente aislado a un nodo operativo capaz de consultar y actuar sobre aplicaciones externas.
- **Masterizar el Modelo MCP (*Model Context Protocol*)**: Comprender el estándar abierto que permite la interoperabilidad universal entre modelos de IA y fuentes de datos.
- **Gestionar e instalar Conectores**: Navegar por el directorio oficial de integraciones y configurar servicios web (Google Drive, Notion, Slack, Asana) y extensiones de escritorio.
- **Aplicar protocolos de seguridad y gobernanza**: Configurar permisos de acceso granular, autenticación OAuth y revocar accesos en cualquier momento.

---

## 1. Fundamentos de los Conectores y el Protocolo MCP

Los **Conectores** permiten a Claude romper las barreras del chat tradicional. En lugar de copiar y pegar manualmente fragmentos de información, los conectores otorgan a Claude **acceso directo en tiempo real** a los sistemas, bases de datos y herramientas de software donde vive el trabajo de tu empresa.

```
       +-------------------------------------------------------------+
       |             MODEL CONTEXT PROTOCOL (MCP)                    |
       +-------------------------------------------------------------+
       |                                                             |
       |                         +-----------------> Google Drive    |
       |                         |                                   |
       |   [ CLAUDE ] <==== MCP ====> +-------------> Notion / Slack  |
       |                         |                                   |
       |                         +-----------------> Asana / Jira    |
       |                                                             |
       +-------------------------------------------------------------+
```

### ¿Qué es MCP (Model Context Protocol)?
Es un **estándar abierto universal** desarrollado por Anthropic que actúa como un "puerto USB-C para aplicaciones de IA". Permite que cualquier sistema de IA se conecte de forma segura y estandarizada a cualquier fuente de datos o API externa sin necesidad de integraciones propietarias frágiles.

---

## 2. Tipología de Conectores

Existen dos modalidades principales de integración:

### 1. Conectores Web (Nube)
Operan directamente en la infraestructura en la nube de Claude.ai.
- **Servicios Soportados**: Google Drive, Notion, Slack, Asana, GitHub, Jira, HubSpot.
- **Casos de Uso**: Consulta de documentación de proyecto en Notion, búsqueda de archivos en Google Drive, publicación de resúmenes en canales de Slack.

### 2. Extensiones de Escritorio (Locales)
Operan de manera local a través de la **aplicación de escritorio de Claude**.
- **Servicios Soportados**: Archivos locales del sistema operativo, bases de datos PostgreSQL/MySQL locales, terminal del sistema, herramientas de desarrollo nativas.
- **Casos de Uso**: Ejecución de consultas SQL sobre bases de datos locales, análisis de directorios del ordenador, automatización de scripts de sistema.

---

## 3. Configuración y Gestión de Conectores

El directorio oficial de conectores está disponible en `claude.ai/directory` o directamente desde la interfaz de chat.

```
  +--------------------+     +---------------------+     +--------------------+     +-------------------+
  | 1. Seleccionar     | --> | 2. Autenticar       | --> | 3. Autorizar       | --> | 4. Validar        |
  |    Conector en Chat|     |    mediante OAuth   |     |    Permisos        |     |    con Consulta   |
  +--------------------+     +---------------------+     +--------------------+     +-------------------+
```

### Pasos de Configuración:
1. En la barra de chat de Claude, haz clic en el icono **`+`** y selecciona **Conectores / Integraciones**.
2. Explora el catálogo y selecciona la herramienta deseada (ej. *Google Drive*).
3. Haz clic en **Conectar** e inicia sesión en la plataforma de origen mediante el flujo de autenticación OAuth seguro.
4. Concede los permisos granulares solicitados.
5. **Validación**: Comprueba la conexión en el chat haciendo una consulta simple: *"¿Puedes listar los últimos 3 archivos modificados en mi Google Drive?"*

---

## 4. Casos de Uso Empresariales Prácticos

- **Gestión de Proyectos en Asana/Jira**:
  - *"Revisa mis tareas pendientes de Asana para esta semana e identifica aquellas que tienen fecha de vencimiento hoy."*
- **Comunicación en Slack**:
  - *"Busca en el canal `#lanzamiento-producto` las últimas decisiones tomadas sobre los precios y redacta un resumen."*
- **Búsqueda Documental en Notion/Drive**:
  - *"Consulta la guía de diseño en Notion y verifica si la propuesta comercial adjunta cumple con la paleta de colores de marca."*

---

## 5. Seguridad, Privacidad y Gobernanza de Datos

Al conectar herramientas de software externas, Claude opera bajo estrictos protocolos de protección de la información:

> [!CAUTION]
> **Principios de Seguridad Integrados**:
> - **Permisos Identitarios**: Claude solo puede acceder a la información a la que **tú personalmente tienes acceso**. No puede sobrepasar las reglas de permisos del sistema de origen.
> - **Control de Revocación**: Puedes desconectar o pausar cualquier integración en cualquier momento desde **Ajustes > Integraciones**.
> - **Aislamiento de Tokens**: Las credenciales de acceso se cifran utilizando estándares bancarios y nunca se comparten con el modelo de lenguaje de forma legible.

---

## Ejercicio Práctico

1. Accede al menú de conectores desde el botón **`+`** en la ventana de chat.
2. Configura un conector web de prueba (ej. Google Drive o Notion).
3. Ejecuta una consulta integrada: *"Resume en 3 puntos clave el contenido del documento X que se encuentra en mi cuenta conectada."*

---

## Resumen y Próximos Pasos

> [!TIP]
> **Conclusión Clave**
> Los conectores impulsados por el protocolo MCP eliminan la necesidad de actuar como puente manual de copiar y pegar entre tus herramientas de software y Claude.

En la **[Lección 09: Búsqueda empresarial](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/03-ampliando-el-alcance-de-claude/09-busqueda-empresarial.md)**, analizaremos el panorama del software empresarial en Latinoamérica (ERP, CRM, POS, HR) y cómo orquestar búsquedas sobre bases de conocimiento corporativas de gran escala.


## Fuentes y recursos relacionados

- Documentación oficial de Anthropic: [docs.anthropic.com](https://docs.anthropic.com/)
- Centro de ayuda de Claude: [support.anthropic.com](https://support.anthropic.com/)
- Material de referencia del curso Claude 101 de Anthropic.

**Última revisión:** 2026-07-26

> [!NOTE]
> Las funciones, límites y capacidades de Claude pueden cambiar según el modelo utilizado, el plan de suscripción y las actualizaciones del producto. Este material es un recurso educativo independiente elaborado para facilitar el estudio en español.
