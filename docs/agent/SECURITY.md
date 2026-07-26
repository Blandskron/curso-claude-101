# SECURITY.md - Políticas de Seguridad y Manejo de Datos

Este documento define los requisitos de seguridad y privacidad para mantener la integridad del repositorio público **curso-claude-101**.

---

## 1. Reglas de Protección de Secretos

- **Cero Secretos en Repositorio**: No deben incluirse claves API (Anthropic, OpenAI, AWS, GCP), tokens de personalización, datos bancarios ni credenciales de usuario.
- **Sin Datos Sensibles de Producción**: Toda la información corporativa presentada en los ejemplos debe ser ficticia o basada en datos públicos generalizados.

---

## 2. Límites de Ejecución para Agentes

- Los agentes no deben modificar políticas de repositorios, claves SSH ni configuraciones de GitHub Actions sin aprobación humana.
- No se deben descargar o ejecutar archivos binarios ejecutables (`.exe`, `.sh`, `.bat`) no verificados.

---

## 3. Seguridad en Recursos Web (CORS y HTTPS)

- Todos los scripts externos e imágenes enlazadas deben servirse a través del protocolo seguro `https://`.
- Se permite la carga de archivos locales mediante la API nativa de `fetch()` de los navegadores web.
