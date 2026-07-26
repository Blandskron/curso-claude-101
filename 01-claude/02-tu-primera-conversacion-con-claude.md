# Lección 02: Tu Primera Conversación con Claude

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Navegar con fluidez por la interfaz**: Dominar los elementos clave de la plataforma Claude.ai y la app de escritorio.
- **Estructurar prompts profesionales**: Aplicar la fórmula estándar para construir instrucciones precisas y de alto impacto.
- **Integrar contexto multimodal y archivos**: Incorporar documentación técnica, imágenes y hojas de cálculo para maximizar la calidad de las respuestas.
- **Gestionar la iteración conversacional**: Dominar la refinación paso a paso de los entregables mediante diálogo continuo y edición de mensajes.
- **Personalizar el comportamiento de Claude**: Configurar adecuadamente la **Memoria**, las **Preferencias Personales** y los **Estilos de Comunicación**.

---

## 1. La Interfaz de Usuario y Tu Primer Mensaje

Al ingresar a **Claude.ai** o abrir la aplicación de escritorio, serás recibido por una interfaz limpia centrada en el cuadro de entrada de texto.

```
+-----------------------------------------------------------------------+
|  Claude.ai / Desktop UI                                              |
|                                                                       |
|  [ Panel Historial ]  |  Área Principal de Conversación               |
|                       |                                               |
|                       |  "¿En qué puedo ayudarte hoy?"                 |
|                       |                                               |
|                       |  +-----------------------------------------+  |
|                       |  | Escribe tu mensaje aquí...         [📎] |  |
|                       |  +-----------------------------------------+  |
+-----------------------------------------------------------------------+
```

Las interacciones pueden abarcar desde consultas breves hasta proyectos complejos de co-creación de documentos o código. La clave para obtener resultados excepcionales reside en **cómo comunicas tus necesidades**.

---

## 2. Anatomía de una Indicación Profesional (Framework 3C)

La mejor manera de interactuar con Claude es tratarlo como un **colaborador senior de tu equipo**: de forma natural, concisa, profesional y con contexto claro.

Para garantizar la máxima efectividad, toda indicación estructurada debe contener tres elementos esenciales:

```
                  +-----------------------------------+
                  |  1. PREPARAR EL TERRENO (Context) |
                  +-----------------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  |  2. DEFINIR LA TAREA (Action)     |
                  +-----------------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  |  3. ESPECIFICAR REGLAS (Rules)    |
                  +-----------------------------------+
```

### Componentes del Framework:
1. **Preparar el terreno (*Contexto y Rol*)**: Define quién eres, el marco del proyecto y el objetivo de negocio.
2. **Definir la tarea (*Acción Concreta*)**: Especifica con exactitud qué acción debe realizar Claude (analizar, redactar, evaluar, construir).
3. **Especificar las reglas (*Restricciones y Formato*)**: Indica el tono, extensión, estructura esperada, idioma y ejemplos de referencia.

---

### Ejemplo de Prompt Profesional Aplicado

```text
[CONTEXTO]: Soy el responsable de marketing de una startup independiente de streaming y estamos preparando una presentación para inversores de la Serie A.

[TAREA]: ¿Podrías investigar la situación actual del mercado de streaming de cine independiente e identificar las principales tendencias, el posicionamiento de la competencia y las oportunidades de crecimiento?

[REGLAS]: Utiliza información web reciente con sus respectivas referencias y estructura el informe en un formato profesional de hasta 5 páginas, con un resumen ejecutivo, análisis de mercado, panorama competitivo y oportunidades de crecimiento.
```

> [!IMPORTANT]
> **El Marco 4D para la Fluidez en IA**
> Este enfoque de comunicación se alinea con las cuatro competencias clave para trabajar con IA:
> - **Delegación**: Asignar la tarea adecuada a la IA.
> - **Descripción**: Definir con claridad las instrucciones y límites.
> - **Discernimiento**: Evaluar críticamente el resultado.
> - **Diligencia**: Asumir la responsabilidad final sobre la calidad del entregable.

---

## 3. Integración de Contexto Multimodal y Archivos

Subir documentación relevante es el atajo más rápido para que Claude comprenda las particularidades de tu proyecto sin necesidad de redactar prompts kilométricos.

Claude es un modelo **multimodal** capaz de procesar texto, imágenes, diagramas y tablas en múltiples formatos:

### Formatos Compatibles:
- **Documentos de Texto y PDF**: `.pdf`, `.docx`, `.txt`, `.rtf`, `.md`
- **Datos Estructurados**: `.csv`, `.xlsx`, `.json`
- **Imágenes y Diagramas**: `.png`, `.jpeg`, `.webp`, `.svg`

### Casos de Uso Comunes con Archivos:
- **Síntesis de Documentos**: Sube un informe PDF de 50 páginas y solicita un resumen de puntos clave ejecutivos.
- **Análisis Visual**: Adjunta un diagrama de arquitectura o mockups de interfaz para que Claude identifique áreas de mejora.
- **Análisis de Datos**: Sube una hoja `.csv` y solicita detectar patrones, valores atípicos o tendencias.
- **Auditoría de Código**: Adjunta archivos de código fuente para revisión de seguridad o refactorización.

> [!TIP]
> **Consejo Práctico**: Una vez adjuntado el archivo, este aparecerá etiquetado en el chat. Puedes hacer referencia directa a él en tu prompt: *"Revisa la sección 3 del PDF adjunto y compara sus datos con el archivo CSV"*.

---

## 4. Estrategias de Iteración Conversacional

El verdadero potencial de Claude se desbloquea a través de la **comunicación iterativa**, no mediante comandos aislados.

```
       +--------------+      +-------------------+      +----------------+
       | Prompt       | ---> | Respuesta Inicial | ---> | Mensaje de     |
       | Inicial      |      | de Claude         |      | Seguimiento    |
       +--------------+      +-------------------+      +----------------+
                                                                |
                                                                v
                                                        +----------------+
                                                        | Entrega Final  |
                                                        | Refinada       |
                                                        +----------------+
```

Si la primera respuesta de Claude no alcanza el objetivo deseado, aplica estas técnicas:

1. **Haz Preguntas de Seguimiento**: Profundiza en puntos específicos.
   - *Ejemplo*: *"El punto 2 es clave. ¿Podrías expandirlo con dos ejemplos reales del sector B2B?"*
2. **Proporciona Feedback Constructivo**: Redirige el enfoque o tono.
   - *Ejemplo*: *"El análisis es correcto, pero el tono es demasiado académico. Reescríbelo en un estilo directivo y directo."*
3. **Reorienta o Edita el Mensaje**:
   - Haz clic en el **icono del lápiz** en tu mensaje original para modificar las instrucciones iniciales si la conversación se ha desviado. Esto evita arrastrar contexto irrelevante.

---

## 5. Personalización y Persistencia de Contexto

Claude ofrece tres funciones clave para evitar repetir preferencias en cada nueva conversación:

### A. Preferencias Personales (Custom Instructions)
Ubicadas en **Ajustes > General > "¿Qué preferencias personales debería tener en cuenta Claude?"**.
Permite establecer instrucciones permanentes como tu idioma preferido, tu rol profesional, estilo de redacción o restricciones fijas.

### B. Sistema de Memoria (*Memory*)
Claude es capaz de guardar de forma autónoma detalles clave a lo largo de tus conversaciones (rol, proyectos en curso, decisiones tomadas, stack tecnológico utilizado).
- Se sincroniza entre todos tus dispositivos.
- Puedes revisar, editar o borrar recuerdos almacenados en cualquier momento desde los ajustes de la aplicación.

### C. Estilos de Comunicación (*Styles*)
Permite predefinir modos de respuesta (ej. *Conciso*, *Explicativo/Tutor*, *Técnico*) o crear un estilo personalizado describiendo las reglas de tono exactas que debe seguir Claude.

---

## Ejercicio Práctico Guiado

Aplica lo aprendido ejecutando el siguiente flujo en Claude.ai:

1. **Paso 1**: Redacta un prompt utilizando el **Framework 3C** (Contexto + Tarea + Reglas) sobre una necesidad real de tu trabajo.
2. **Paso 2**: Adjunta un archivo de soporte (un documento en PDF, texto o captura de pantalla).
3. **Paso 3**: Ejecuta **dos rondas de iteración**:
   - En la primera ronda, solicita un cambio de tono o formato.
   - En la segunda ronda, edita tu primer mensaje con el icono del lápiz para refinar la petición inicial.

---

## Resumen y Próximos Pasos

> [!NOTE]
> **Conclusión Clave**
> La calidad de las respuestas de Claude es proporcional a la claridad del contexto proporcionado. Definir el terreno, especificar las reglas e iterar sin miedo son los tres hábitos que diferencian a un usuario básico de un profesional fluido en IA.

En la **[Lección 03: Obtener mejores resultados](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/01-claude/03-obtener-mejores-resultados.md)**, estudiaremos técnicas avanzadas de prompt engineering, la matriz de resolución de problemas y cómo implementar evaluaciones (Evals) para medir el rendimiento de Claude.


## Fuentes y recursos relacionados

- Documentación oficial de Anthropic: [docs.anthropic.com](https://docs.anthropic.com/)
- Centro de ayuda de Claude: [support.anthropic.com](https://support.anthropic.com/)
- Material de referencia del curso Claude 101 de Anthropic.

**Última revisión:** 2026-07-26

> [!NOTE]
> Las funciones, límites y capacidades de Claude pueden cambiar según el modelo utilizado, el plan de suscripción y las actualizaciones del producto. Este material es un recurso educativo independiente elaborado para facilitar el estudio en español.
