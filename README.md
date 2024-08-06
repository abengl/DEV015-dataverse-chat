# Dataverse Chat

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Diseño de Interfaz y Prototipos](#5-diseño-de-interfaz-y-prototipos)
* [6. Hitos](#6-hitos)
* [7. Responsividad](#7-responsividad)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Resumen del proyecto

**TechGenius** es una SPA (Single Page Application) diseñada para estudiantes de programación que desean estar al tanto de las últimas tendencias tecnológicas y mantener conversaciones con las tecnología de programación.

Nuestra interfaz intuitiva permite explorar tecnologías clasificadas en categorías como _Lenguajes de Programación, Frameworks_ y _Markup_, así como en campos de aplicación como _Frontend, Backend_ y _Data Science_. Los usuarios pueden ordenar los resultados para encontrar información relevante de manera rápida y acceder a un ranking actualizado de las tecnologías más populares. Además, la función de limpieza de filtros con un solo clic simplifica la navegación y personalización de la búsqueda. TechGenius es tu puerta de entrada al futuro tecnológico, ofreciendo una forma fácil y eficiente de descubrir y dominar las tendencias actuales en tecnología.

## 2. Resumen del proyecto

En este proyecto convertirás la aplicación desarrollada
en Dataverse en una
[Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application),
manteniendo las funcionalidades de visualizar, filtrar, ordenar y
calcular alguna estadística, adicionando una nueva vista para
consultar información detallada de cada personaje/entidad y agregando
la posibilidad de interactuar con un personaje/entidad o todos ellos
a través de un sistema de chat impulsado por la
[API de OpenAI](https://openai.com/product).

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Historias de Usuario
### Historia de Usuario 1: 
Como estudiante de programación, quiero que la aplicación sea responsive y funcional para asegurarme de que pueda usarla en diferentes dispositivos y tamaños de pantalla sin problemas, obteniendo una experiencia de usuario consistente y óptima

### Historia de Usuario 2:  
Como estudiante de programación, quiero poder navegar a diferentes vistas dentro de una sola página de la aplicación para poder acceder a distintas funcionalidades y secciones sin necesidad de recargar la página, mejorando la eficiencia y la experiencia de navegación.

### Historia de Usuario 3:  
Como estudiante de programación, quiero ver información detallada sobre una tecnología específica para obtener una comprensión completa y profunda de sus características y funcionalidades, facilitando mi aprendizaje y toma de decisiones.

### Historia de Usuario 4:
Quiero obtener la tecnologías de programación mas usada, mas antiga y más actual, para identificar rápidamente la información proporcionada.

### Historia de Usuario 5:
Como estudiante de programación, quiero configurar mi API Key para interactuar con la API de OpenAI para establecer conversaciones interactivas y utilizar las capacidades avanzadas de la inteligencia artificial en la aplicación.

### Historia de Usuario 6:
Como estudiante de programación, quiero interactuar con una tecnología específica en un chat individual para obtener asistencia personalizada y detalles específicos sobre esa tecnología, mejorando mi aprendizaje y resolución de problemas.

### Historia de Usuario 7:
Como estudiante de programación, quiero que la aplicación maneje errores de manera adecuada para asegurarme de que los problemas se resuelvan de manera eficiente y que la experiencia del usuario sea lo menos afectada posible.

## 4. Funcionalidades

Como entregable final tendrás una Single Page Application (SPA) que permita,
además de **visualizar la data, filtrarla, ordenarla y calcular alguna
estadística** tal como se hizo en Dataverse, acceder a una página de detalle
de cada personaje y poder _interactuar_ con
los personajes o entidades del set de data que utilizaste anteriormente.

Aquí definimos en más detalle las funcionalidades mínimas que debe tener:

* La aplicación debe ser _responsive_
* La aplicación debe ser una SPA con múltiples vistas:
  - Implementar un sistema de enrutamiento que permita la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación debe ser cargada dinámicamente
    mediante JavaScript.
  - Asegurarse de que la URL se actualice de manera acorde a la vista
    cargada al igual que el `title` del documento (la pestaña del navegador).
  - La aplicación debe ser capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* La aplicación debe mantener las funcionalidades de Dataverse: visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación debe
  redirigirse a una vista **con su propia URL** que muestre la información
  detallada sobre ese personaje/entidad en particular
* La aplicación debe permitir a la usuaria configurar la API Key para
  interactuar con la API de Open AI
* Usando la API de Open AI, la aplicación debe permitir al usuario
  interactuar con un personaje/entidad a través de un chat.
  Por ejemplo, si usamos la data de ejemplo de Dataverse, correspondiente
  a las mujeres con mayores contribuciones a la programación en la historia,
  una usuaria puede establecer una conversación
  interactiva con
  [Ada Lovelace](https://es.wikipedia.org/wiki/Ada_Lovelace)
  a través del sistema de chat, obteniendo
  información sobre sus logros, desafíos y contribuciones a la informática.
  La inteligencia artificial de OpenAI permite que las respuestas sean
  informativas y personalizadas según las preguntas de los usuarios.

```text
Usuaria: "Hola, Ada. Cuéntame más sobre tus contribuciones a la informática."

Ada Lovelace (AI de OpenAI): "¡Hola! Claro, estaré encantada de hablar sobre eso.
Mis contribuciones más destacadas se relacionan con el trabajo junto a Charles Babbage
en el diseño de la Máquina Analítica. Además, desarrollé el primer algoritmo destinado
a ser procesado por una máquina, lo que me convierte en la primera programadora de la historia.
¿Hay algo más en particular que te gustaría saber?"

Usuaria: "¡Eso es fascinante! ¿Qué desafíos enfrentaste en ese tiempo?"

Ada Lovelace (AI de OpenAI): "En ese tiempo, enfrenté varios desafíos, uno de los
principales fue la limitación de recursos y la falta de reconocimiento del potencial
de la Máquina Analítica. También tuve que superar las restricciones sociales de
la época, ya que las mujeres tenían un acceso limitado a la educación en
matemáticas y ciencias. Sin embargo, mi pasión por la matemática y la visión
de lo que estas máquinas podrían lograr me impulsaron a seguir adelante."
```

* La aplicación debe  permitir al usuario interactuar de manera simultánea
  con **todos** los personajes/entidades a través de un chat:
  - Esta funcionalidad debe cargarse en la URL `/panel`
  - La usuaria puede ingresar su pregunta o mensaje para todos los
    personajes/entidades en un cuadro de texto y enviarlo con un botón
  - El mensaje de la usuaria debe ser ajustado para cada personaje/entidad,
    con el objetivo que este genere una respuesta basada en su personalidad
    y conocimiento
  - Las respuestas de todos los personajes se muestran de acuerdo al orden
    respuesta.
  - Indicar visualmente cuando uno o varios personajes/entidades esten
    generando una respuesta al mensaje enviado
* La aplicación debe informar a la usuaria los errores que puedan surgir al
  interactuar con la API, como por ejemplo alcanzar la cuota de tokens por
  minuto o cualquier otro error relacionado con la API. Debería
  proporcionarse una descripción clara de la causa del problema y posibles
  soluciones.

Para que los chats anteriores puedan funcionar, es esencial que la aplicación
se integre con la IA a través de la API de OpenAI. Para ello, el equipo de
Laboratoria te proporcionará una API Key que la usuaria deberá poder ingresar
en la aplicación que tu construirás.

_Nota_: puedes revisar esta [implementación](https://laboratoria-dataverse-talks.netlify.app/)
de ejemplo, cuyo principal objetivo es mostrarte cómo se vería la
funcionalidad de chat en tu aplicación, más no tomes el diseño como
referencia para tu proyecto, siente libre de hacer volar tu imaginación
diseñando tu propia interfaz.

## 5. Diseño de Interfaz y Prototipos

La interfaz de **TechGenius** está diseñada para ofrecer una experiencia intuitiva y atractiva, permitiendo a los usuarios explorar, aprender y dominar tecnologías emergentes de manera eficiente y organizada, asi como también chatear con las mismas. Con un enfoque en la usabilidad y la presentación clara de información, el diseño facilita la navegación y la comprensión de los datos sobre las tecnologías.

### Test de Usabilidad: 

Basándonos en los resultados del test de usabilidad realizado con una muestra de usuarios objetivos de la aplicación web, se identifican las siguientes necesidades que se abordaron para mejorar la experiencia del usuario:

* **Mejorar la descripción  del boton Panel:**  El botón "Panel" debería llamarse chat grupal.

* **Modificar los icons de dificultad:**  Los íconos actuales deben ser reemplazados por etiquetas que indiquen claramente el nivel de dificultad, como "Básico" o "Avanzado". 

* **Revisar las etiquetas de información:**   Las etiquetas parecen botones en las tarjetas, quizás quitar el degradado y probar un color plano.

* **Colores en el chat:** El chat da la sensación de que está al revés, el color más fuerte en el usuario (globo), además de ajustar la alineación del icon. .

De acuerdo a lo anterior, a la frecuencia y el impacto de los problemas encontrados, se  priorizó la implementación de las mejoras para optimizar la experiencia del usuario de manera eficiente.

### Prototipos de Alta Fidelidad: 

El prototipo de alta fidelidad de **TechGenius** es la versión más detallada y refinada de la interfaz, integrando todos los estilos visuales y elementos interactivos para ofrecer una experiencia de usuario completa y envolvente. Este prototipo incorpora la estética final, la funcionalidad completa y la interacción intuitiva, sirviendo como una base precisa para el desarrollo final de la aplicación. 
A continuación, se adjuntan algunas imágenes del prototipo de alta fidelidad de la aplicación web.

![prototipo-desktop](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prototipo_desktop.png?v=1719354048951)

![prottotipo-chat-desktop](/src/assets/images/chat.png)

![prototipo-mobile](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prototipo_mobile.png?v=1719354044777)

![prototipo-apikey-mobile](/src/assets/images/apikey.png)

## 6. Hitos

Para resolver un problema,
es importante comprenderlo en profundidad.
Una forma de hacerlo es descomponerlo en problemas más pequeños.
Esto nos ayudará a identificar las causas del problema y
a desarrollar soluciones más efectivas.

En este proyecto, te sugerimos que trabajes por hitos.
Esto te permitirá enfocarte en un problema a la vez y
hacer un seguimiento de tu progreso.
A continuación, te presentamos un cronograma de hitos que
te puede ayudar a organizar tu trabajo.

* [Hito 1](./docs/01-milestone.md)
* [Hito 2](./docs/02-milestone.md)
* [Hito 3](./docs/03-milestone.md)
* [Hito 4](./docs/04-milestone.md)
* [Hito 5](./docs/05-milestone.md)

## 7. Responsividad

En el centro de nuestro diseño se encuentra la experiencia del usuario, y por ello, hemos priorizado la responsividad para garantizar una interacción óptima en cualquier dispositivo. Los elementos de la interfaz se adaptan dinámicamente, ajustándose a las pantallas de móviles, tabletas y ordenadores de escritorio, brindando una visualización clara y una navegación fluida.

Para lograr esta adaptabilidad, hemos implementado diversas técnicas de diseño y desarrollo:

* **Diseño responsive:** Los componentes de la interfaz se reconfiguran automáticamente para una visualización óptima en diferentes tamaños de pantalla, desde móviles compactos hasta pantallas de escritorio amplias.

* **Media Queries:** Empleamos Media Queries en CSS para aplicar estilos específicos según el tamaño de la pantalla, optimizando la presentación de la información y la navegación en cada dispositivo.

* **Pruebas exhaustivas:** Realizamos pruebas meticulosas en una amplia gama de dispositivos y resoluciones para garantizar la compatibilidad y ofrecer una experiencia uniforme en todos ellos.

## 8. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

- [ ] **Browser storage (localStorage, sessionStorage)**

  <details><summary>Links</summary><p>

  * [Window.localStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
</p></details>

- [ ] **Fetch API**

  <details><summary>Links</summary><p>

  * [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
</p></details>

#### DOM (Document Object Model)

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

#### Asincronía

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

#### Tipos de datos

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

#### Testing en Javascript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

### HTTP

- [ ] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

### AI Prompting

- [ ] **Priming Chatbots**

  <details><summary>Links</summary><p>

  * [Priming Chatbots | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/priming_prompt)
</p></details>

- [ ] **OpenAI API**

  <details><summary>Links</summary><p>

  * [Introduction - API Reference - OpenAI API](https://platform.openai.com/docs/introduction)
  * [Authentication - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/authentication)
  * [Making requests - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/making-requests)
  * [The chat completion object - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/chat/object)
</p></details>

### Control de Versiones (Git y GitHub)

#### Git

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 9. Pistas, tips y lecturas complementarias

### Primeros pasos

Súmate al canal de Slack
[#project-dataverse-chat](https://claseslaboratoria.slack.com/archives/C03MV35EP5M)
para conversar y pedir ayuda del proyecto.

Te sugerimos algunas tareas para dar inicio al proyecto. No es necesario
abordarlas de manera secuencial, y puedes llevarlas a cabo en paralelo
mientras avanzas con la planificación de las Historias de Usuario:

#### Diseño de Wireframes o Prototipo de Baja Fidelidad

Comienza por diseñar wireframes o prototipos de baja fidelidad para capturar
los requisitos funcionales de tu proyecto. Es recomendable comenzar con un
enfoque ["mobile first"](https://mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
para garantizar la usabilidad en dispositivos móviles,
y luego extender la atención a pantallas más grandes, como las de escritorio.

#### Comprende los Conceptos de SPA (Single Page Application) y Enrutamiento

Antes de comenzar a codificar, asegúrate de comprender los conceptos de una
Aplicación de Página Única (SPA) y el enrutamiento de páginas. Esto te
permitirá crear una experiencia de usuario fluida y dinámica. Investiga
las mejores prácticas y las herramientas disponibles para implementar un
SPA en tu proyecto.

#### Preparación de la Estructura del Proyecto

Organiza tu proyecto creando la estructura de directorios necesaria y
configurando un sistema de enrutamiento básico para cambiar dinámicamente
entre dos vistas. Asegúrate de que tu proyecto tenga una arquitectura
limpia y escalable.

#### Integración de Dataverse

Si tienes la intención de utilizar código de Dataverse en tu proyecto,
asegúrate de importar los archivos relevantes, como `dataset.js`,
`dataFunctions.js`, `main.js`, y `view.js`, junto con sus respectivas
pruebas. Ten en cuenta que `main.js` y `view.js` requerirán una
refactorización para adaptarse a las vistas y componentes específicos
de tu proyecto.

#### Identifica las funcionalides de Open AI

Consulta la documentación de la
[API de Open AI](https://platform.openai.com/docs/guides/gpt?lang=node.js).
Identifica y prueba las funciones que usarás para construir el chat
de tu aplicación

#### Cuando ya estés lista para codear, te sugerimos empezar de esta manera

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Desarrollo Front-end

* [Topicos en la curricula de sitio Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Promesas](https://es.javascript.info/promise-basics)
* [Haciendo peticiones con Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
* [Almacenamiento con LocalStorage](https://es.javascript.info/localstorage)
* [Creando un router SPA con vanilla Javascript](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md)
* [Delegación de eventos](https://es.javascript.info/event-delegation)

#### Inteligencia Artificial y Prompting

* [Learn Prompting](https://learnprompting.org/es/docs/category/-basic-applications)
* [Prompt Engineering Roadmap](https://roadmap.sh/prompt-engineering)
* [OpenAI Playground](https://beta.openai.com/playground)
* [Making requests](https://platform.openai.com/docs/api-reference/making-requests)
* [Chat with AI](https://platform.openai.com/docs/api-reference/chat)
* [Priming Chatbots](https://learnprompting.org/es/docs/basics/priming_prompt)
* [Build your aplication with AI](https://platform.openai.com/docs/quickstart/build-your-application)

#### Herramientas

* [Jest](https://jestjs.io/)
* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)

## 10. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [ ] Está subido a GitHub y desplegado en Netlify o Vercel.
* Tiene un `README.md` con la siguiente:
  - [ ] _Definición del producto_ clara e informativa
  - [ ] Historias de usuaria
  - [ ] Un _sketch_ de la solución (prototipo de baja fidelidad) y
    _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [ ] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ ] Permite ver toda la data en la pantalla principal con opciones para
    filtrar y ordenar.
  - [ ] Permite ingresar un API Key a través de un formulario.
  - [ ] Permite ver una página con más detalles de cada entidad. En esta página
    se puede iniciar el chat.
  - [ ] Permite conversar con el personaje o entidad de la data a través
    de un chat.
  - [ ] Permite chatear de forma grupal con todas las entidades de la data.
  - [ ] Es responsive y fue realizado usando la metodología mobile first.

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.
