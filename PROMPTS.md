# Historial de Prompts (Rúbrica de Desarrollo)

A continuación, se documentan los prompts lógicos y detallados que estructuran cronológicamente la construcción de la aplicación, elaborados especialmente para cumplir con los requerimientos de evaluación.

### Prompt 1: Estructura Base y Lógica Funcional
> "Actúa como un desarrollador experto en ReactJS. Crea una calculadora básica en React desde cero. Asegúrate de **componentizar adecuadamente la interfaz** usando archivos separados (por ejemplo: `Calculator.jsx`, `Keypad.jsx`, `Display.jsx` y `Button.jsx`). Implementa la lógica fundamental para sumar, restar, multiplicar y dividir. Añade el manejo de precisión en punto flotante (máximo 8 decimales) y captura el error de 'División por cero' para que nunca crashee la aplicación. El display debe poder mostrar la expresión anterior y el resultado actual de forma clara."

### Prompt 2: Restricción de Teclado Físico (Requisito Específico)
> "Añade un requerimiento estricto al componente principal `Calculator`: **el usuario NO debe poder interactuar con la calculadora utilizando el teclado físico** de su computadora. Por favor, implementa un `useEffect` que intercepte y cancele globalmente (`e.preventDefault()`) cualquier evento de teclado (`keydown`). La aplicación debe obligatoriamente reaccionar y recibir órdenes únicamente de manera visual, mediante los clics del mouse sobre los botones del componente."

### Prompt 3: Estilización y UX/UI (Glassmorphism)
> "Diseña la interfaz de toda la calculadora utilizando la estética moderna **'Glassmorphism' (Efecto Cristal)**. No uses frameworks como Tailwind, hazlo empleando CSS Vanilla en un archivo `index.css`. Aplica propiedades como `backdrop-filter: blur()`, fondos translúcidos, sombras suaves (`box-shadow`) y bordes blancos sutiles. Inicialmente, dale un fondo animado atractivo con colores vibrantes a la página y añade micro-animaciones (transformaciones y transiciones) al hacer hover y click sobre los botones."

### Prompt 4: Ajustes Estéticos Finales y Símbolos Matemáticos
> "Vamos a realizar dos ajustes finales sobre lo construido:
> 1. El fondo dinámico animado distrae un poco; por favor **cámbialo a un fondo estático elegante**, utilizando un gradiente enfocado íntegramente en variaciones formales de **azul oscuro**.
> 2. Mejora los textos de la interfaz gráfica y la lógica: reemplaza los clásicos símbolos de programación que incluimos por defecto para multiplicación `*` y división `/`, por los **símbolos matemáticos tradicionales `×` y `÷`**. Asegúrate de que este cambio se vea reflejado tanto en los componentes visuales de los botones como en el mini-display que enlista el historial de la expresión."
