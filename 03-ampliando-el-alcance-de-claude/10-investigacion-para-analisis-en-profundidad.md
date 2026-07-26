# Lección 10: Investigación para Análisis en Profundidad

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

- **Masterizar la Investigación Sistémica**: Entender la diferencia entre búsquedas puntuales y procesos de investigación iterativa multipaso con IA.
- **Diferenciar los modos de búsqueda en Claude**: Seleccionar adecuadamente entre Investigación Profunda (*Deep Research*), Búsqueda Web, Razonamiento (*Thinking*) y Búsqueda Empresarial.
- **Formular preguntas de investigación de alto nivel**: Estructurar consultas complejas con delimitación geográfica, temporal y metodológica.
- **Integrar datos públicos y privados**: Sintetizar reportes estratégicos que combinen información web abierta con fuentes internas (Google Workspace, Microsoft 365, PDFs corporativos).

---

## 1. Fundamentos de la Investigación Sistémica

La **Investigación Sistémica** transforma la interacción con Claude: el modelo deja de comportarse como un motor de respuestas inmediatas y se convierte en un **analista senior proactivo** capaz de abordar problemas abiertos de alta complejidad.

```
+-----------------------------------------------------------------------+
|                 PROCESO DE INVESTIGACIÓN SISTÉMICA                    |
+-----------------------------------------------------------------------+
|                                                                       |
|   1. PLANIFICACIÓN   --> Desglose de la consulta en subpreguntas.     |
|   2. EJECUCIÓN       --> Múltiples búsquedas simultáneas en la web y   |
|                          conectores internos.                         |
|   3. SÍNTESIS        --> Contraste de hipótesis, eliminación de       |
|                          sesgos y estructuración del informe.         |
|   4. VERIFICACIÓN    --> Citación rigurosa de fuentes y evidencias.   |
|                                                                       |
+-----------------------------------------------------------------------+
```

---

## 2. Matriz de Selección de Modos de Búsqueda

Para optimizar el tiempo de procesamiento y la calidad de los resultados, debes seleccionar la modalidad adecuada según el tipo de problema:

| Modo de Operación | Tipo de Tarea | Prioridad Principal | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| **Investigación Profunda (*Deep Research*)** | Informes exhaustivos, Due Diligence, análisis comparativos de mercado. | **Exhaustividad y trazabilidad** | *"Elabora un estudio comparativo de los marcos regulatorios de IA en la UE y LATAM."* |
| **Búsqueda Web Básica** | Consultas de hechos puntuales, datos recientes, cotizaciones. | **Velocidad de respuesta** | *"¿Cuál fue la tasa de inflación oficial en Chile el mes pasado?"* |
| **Razonamiento (*Extended Thinking*)** | Depuración de algoritmos complejos, demostraciones lógicas o matemáticas. | **Profundidad de razonamiento interno** | *"Analiza esta función recursiva e identifica por qué causa un stack overflow en Python."* |
| **Búsqueda Empresarial** | Consultas sobre normativas internas, contratos o correos de la empresa. | **Seguridad y privacidad interna** | *"¿Qué políticas de reembolso aplican para viajes internacionales según nuestro manual?"* |

---

## 3. Estructura de una Consulta de Investigación Profesional

La calidad de un informe estratégico depende directamente de la claridad del marco entregado a Claude. Aplica el siguiente modelo:

```xml
<investigacion_profunda>
  <objetivo_general>
    Evaluar la factibilidad de desplegar una red de carga para vehículos eléctricos en Colombia y Perú.
  </objetivo_general>

  <componentes_requeridos>
    1. Marco regulatorio e incentivos tributarios en ambos países.
    2. Competidores principales y cuotas de mercado actuales.
    3. Tipos de conectores dominantes y tarifas promedio por kWh.
  </componentes_requeridos>

  <restricciones>
    - Utiliza fuentes publicadas en los últimos 18 meses.
    - Incluye citas directas con enlaces a los organismos oficiales (ej. MinEnergía, Osinergmin).
  </restricciones>

  <formato_entregable>
    Informe ejecutivo estructurado en Markdown con Resumen Ejecutivo, Análisis Comparativo en Tabla y Recomendaciones Estratégicas.
  </formato_entregable>
</investigacion_profunda>
```

---

## 4. Integración de Fuentes Públicas y Privadas

Uno de los usos más potentes de Claude en entornos directivos es la **síntesis híbrida**:

```
 [ Noticias / Datos de Mercado (Web Público) ]
                      +                       ===> [ INFORME DE ESTRATEGIA HÍBRIDA ]
 [ Estados Financieros Internos (Google Drive) ]
```

### Caso de Ejemplo:
Un equipo directivo desea evaluar una fusión o adquisición (*M&A*):
- Claude consulta en la web pública las noticias, litigios y presencia de mercado de la empresa objetivo.
- Simultáneamente, lee los estados financieros confidenciales cargados en el proyecto.
- Genera un reporte de **Due Diligence** que compara el desempeño interno real frente a la percepción pública del mercado.

---

## Ejercicio Práctico

1. Redacta una pregunta de investigación compleja sobre una tendencia tecnológica en tu sector.
2. Aplica las etiquetas XML (`<objetivo_general>`, `<componentes_requeridos>`, `<restricciones>`, `<formato_entregable>`).
3. Solicita a Claude ejecutar la investigación en modo de Análisis en Profundidad y verifica que el reporte contenga citas verificables.

---

## Resumen y Próximos Pasos

> [!TIP]
> **Conclusión Clave**
> La investigación sistémica transforma a Claude de un asistente reactivo a un centro de inteligencia de mercado capaz de generar valor estratégico de nivel ejecutivo.

Con esto concluimos el **Módulo 03: Ampliando el Alcance de Claude**. En el **[Módulo 04 - Lección 11: Claude en acción - casos de uso por rol](file:///c:/Users/BlandskronNotebook/Documents/blandskron/claude/curso-claude-101/04-conclusion/11-claude-en-accion-casos-de-uso-por-rol.md)**, analizaremos la aplicación práctica de Claude en Ventas, Marketing, Finanzas, RRHH y Legal.
