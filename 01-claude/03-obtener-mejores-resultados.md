# Lección 03: Obtener Mejores Resultados y Prompt Engineering Avanzado

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Diagnosticar y resolver desviaciones**: Identificar las causas de respuestas no deseadas y aplicar técnicas de resolución inmediata.
- **Masterizar el Prompt Engineering**: Utilizar etiquetas XML, *few-shot prompting* y delimitadores de contexto para obtener entregables de precisión quirúrgica.
- **Aplicar el Marco 4D en entornos corporativos**: Evaluar los flujos de trabajo bajo las dimensiones de Delegación, Descripción, Discernimiento y Diligencia.
- **Diseñar Evaluaciones Sistemáticas (Evals)**: Implementar una metodología rigurosa para medir la consistencia y calidad de Claude en tareas recurrentes de negocio.

---

## 1. Matriz de Diagnóstico y Resolución de Problemas

Es completamente normal que las primeras interacciones con una IA no alcancen el 100% de tus expectativas. Un profesional de la IA no descarta el modelo; **diagnostica la causa raíz y refina la indicación**.

| Desafío Detectado | Causa Probable | Estrategia de Mejora | Ejemplo de Remediación |
| :--- | :--- | :--- | :--- |
| **Respuesta genérica o superficial** | Falta de contexto específico sobre el negocio o audiencia. | Proporcionar detalles de audiencia, rol y limitaciones explícitas. | *"Actúa como Director de Producto. Escribe un correo al cliente X sobre el retraso de 2 semanas en la API. Explica la causa técnica (migración de BD) y mantén un tono empático."* |
| **Longitud inadecuada (muy corta o larga)** | Ambigüedad en los límites de extensión solicitados. | Definir restricciones cuantitativas o de formato. | *"Resume el documento en máximo 3 párrafos de no más de 80 palabras cada uno."* |
| **Formato incorrecto o desordenado** | Ausencia de estructura explícita en las instrucciones. | Muestra el formato deseado (*Show, don't tell*). | *"Organiza la respuesta en una tabla Markdown con las columnas: [Categoría \| Riesgo \| Acción Requerida]."|
| **Información errónea o implausible** | Ausencia de fuentes o falta de verificación de datos. | Solicitar citas explícitas o activar búsqueda web. | *"Responde únicamente basándote en los documentos adjuntos. Si la información no está presente, indica 'No especificado en la fuente'."* |
| **Tono inapropiado** | Estilo predeterminado no alineado con la cultura de la empresa. | Definir adjetivos de tono o incluir un texto de muestra. | *"Utiliza un tono directo, corporativo e incisivo. Evita clichés de marketing como 'revolucionario' o 'sin precedentes'."* |

---

## 2. Técnicas Avanzadas de Prompt Engineering

Para elevar el rendimiento de Claude al nivel de un curso profesional, debes aplicar patrones de diseño de indicaciones recomendados por Anthropic:

### A. Uso de Etiquetas XML para Estructurar Contexto
Claude está especialmente optimizado para comprender etiquetas XML. Utilízalas para delimitar claramente las diferentes partes de tu prompt:

```xml
<contexto>
  Somos una empresa SaaS B2B en el sector fintech.
</contexto>

<instrucciones>
  Analiza la propuesta comercial adjunta y detecta 3 posibles objeciones que pondría el departamento de riesgos.
</instrucciones>

<formato_salida>
  Presenta cada objeción con:
  1. La objeción (en negrita)
  2. Su nivel de impacto (Alto/Medio/Bajo)
  3. La respuesta recomendada para el equipo de ventas
</formato_salida>
```

### B. Aprendizaje con Ejemplos (*Few-Shot Prompting*)
Proporcionar 1 o 2 ejemplos del resultado esperado incrementa exponencialmente la precisión del modelo:

```text
Por favor clasifica los siguientes tickets de soporte.

Ejemplo 1:
Texto: "No puedo restablecer mi contraseña"
Categoría: Gestión de Accesos | Prioridad: Alta

Ejemplo 2:
Texto: "¿Tienen descuento para estudiantes?"
Categoría: Ventas | Prioridad: Baja

Ahora clasifica el siguiente ticket:
Texto: "La facturación de este mes muestra un cargo duplicado"
Categoría:
```

---

## 3. Profundización en el Marco 4D para la Fluidez en IA

La **fluidez en IA** es la capacidad técnica y ejecutiva de colaborar eficazmente con modelos inteligentes. El **Marco 4D** desglosa las cuatro competencias operativas:

```
               DELEGACIÓN   -->   ¿Qué debe hacer la IA vs el Humano?
               DESCRIPCIÓN  -->   ¿Cómo especificamos los resultados deseados?
               DISCERNIMIENTO -->  ¿Cómo auditamos y verificamos las respuestas?
               DILIGENCIA   -->   ¿Cómo garantizamos ética, cumplimiento y responsabilidad?
```

1. **Delegación**: Evaluar la complejidad y el riesgo de la tarea. Tareas repetitivas o de análisis de datos son ideales para Claude; decisiones estratégicas finales corresponden al humano.
2. **Descripción**: La habilidad de traducir necesidades de negocio ambiguas en instrucciones claras, estructuradas y contextualizadas.
3. **Discernimiento**: El pensamiento crítico aplicado a las respuestas de la IA. Implica auditar cifras, verificar lógica y detectar posibles sesgos o inconsistencias.
4. **Diligencia**: La responsabilidad ética y profesional. El usuario es el único responsable del resultado final publicado o implementado.

---

## 4. Evaluaciones Sistemáticas (Evals) en Flujos de Trabajo

Para procesos de negocio recurrentes (ej. clasificación diaria de correos, generación de resúmenes financieros, auditoría de código), no debes confiar en comprobaciones aleatorias. Debes implementar **Evals**.

> [!NOTE]
> **¿Qué es una Eval?**
> Una evaluación es una metodología cuantitativa o cualitativa para medir el desempeño de Claude de forma repetible a lo largo del tiempo ante distintas variaciones de prompts.

```
  +------------------+     +-------------------+     +------------------+     +-------------------+
  | 1. Recopilar     | --> | 2. Crear Prompts  | --> | 3. Comparar y    | --> | 4. Refinar        |
  |    Casos Reales  |     |    de Prueba      |     |    Puntuar       |     |    Iterativamente |
  +------------------+     +-------------------+     +------------------+     +-------------------+
```

### Proceso de 4 Pasos para Diseñar una Eval:

1. **Recopilar Ejemplos (Dataset)**: Reúne entre 5 y 10 casos reales de tareas pasadas con sus resultados ideales comprobados.
2. **Crear Prompts de Prueba**: Diseña el conjunto de instrucciones estandarizadas que se aplicarán a cada caso.
3. **Ejecutar y Comparar**: Corre las pruebas en Claude y evalúa las respuestas contra tres criterios:
   - **Precisión técnica**: ¿La información clave es correcta?
   - **Consistencia de formato**: ¿Cumple la estructura solicitada?
   - **Alineación de tono**: ¿Mantiene el estilo profesional definido?
4. **Refinar e Iterar**: Ajusta las instrucciones o añade ejemplos al prompt hasta alcanzar un porcentaje de éxito superior al 90%.

---

## Ejercicio Práctico y Caso de Estudio

Diseña una evaluación en tu entorno de trabajo:

1. Elige una tarea repetitiva que realices al menos 3 veces por semana (ej. resumir minutas de reuniones).
2. Selecciona **3 reuniones pasadas** y redacta un prompt estandarizado con etiquetas XML `<instrucciones>` y `<formato>`.
3. Pasa las minutas por Claude y crea una matriz simple de puntuación (1 a 5) evaluando:
   - Precisión en los compromisos acordados.
   - Claridad en los responsables asignados.
   - Formato ejecutivo.

---

## Resumen y Próximos Pasos

> [!TIP]
> **Conclusión Clave**
> Perfeccionar los resultados con Claude requiere pasar de la intuición a la ingeniería: utilizar etiquetas XML, dar ejemplos claros y establecer evaluaciones sistemáticas para garantizar que la IA funcione como un motor predecible de alta calidad.

En la **[Lección 04: Cómo trabajarás con Claude en tu ordenador](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/01-claude/04-como-trabajaras-con-claude-en-tu-ordenador.md)**, analizaremos las tres modalidades operativas de la aplicación de escritorio: **Chat**, **Cowork** y **Claude Code**.
