# Prompts Utilizados

A continuación, documentamos los prompts clave durante el desarrollo del proyecto:

1. **Diseño Visual**: "Usa el Glassmorphism. Entonces procede con el plan tal como lo tienes."
2. **Generación de la App Vite**: Inicializar la aplicación con vite (`npx create-vite`) y limpiar el boilerplate original para el espacio de trabajo.
3. **Estructura React**: "Crear y componentizar la app en `Calculator` usando estado de React para manejar cada operación matemática (+, -, *, /) y prever errores como la división por cero."
4. **Diseño UI/UX (Vanilla CSS)**: "Estilizar con modo oscuro (Dark Mode + Glassmorphism), usando degradados animados de fondo, `backdrop-filter: blur()`, y cajas traslúcidas de cristal."
5. **Control de Entrada (Teclado vs. Interacción Visual)**: "Implementar `useEffect` con evento `keydown` que llame a `e.preventDefault()`, forzando al usuario a utilizar únicamente el mouse como exigían los requerimientos del examen."
