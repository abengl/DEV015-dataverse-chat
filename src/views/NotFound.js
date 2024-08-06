import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";

/**
 * NotFound is a function component that creates and returns a view element.
 * @returns {HTMLElement} - The HTML element representing the NotFound view.
 */
export function NotFound() {
  //Creamos la vista
  const notFoundView = document.createElement("div");
  notFoundView.classList.add("not__found");

  //Añadimos los componentes a la vista
  notFoundView.appendChild(Nav());
  const mainElement = document.createElement("div");
  mainElement.classList.add("not__found__main");
  notFoundView.appendChild(mainElement);

  //Establecemos la estructura del main
  mainElement.innerHTML = `
    <div class="container">
        <h1 class="container__title">¿Perdida en el espacio?</h1>
        <div class= "container__not__found">
          <img alt="" class="not-found-image space-otto" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165470/website-images/images/404/otto.png">
          <img alt="" class="not-found-image saturn-purple" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165470/website-images/images/404/saturn_purple.png">
          <img alt="" class="not-found-image planet-blue" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165469/website-images/images/404/Planet_blue.png">
          <a aria-hidden="true" class="not-found-image bone" href="https://the-pitch-game.com"><img alt="" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165469/website-images/images/404/Bone.png"></a>
          <img alt="" class="not-found-image moon-pink" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165470/website-images/images/404/Moon_pink.png">
          <img alt="" class="not-found-image sat" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165469/website-images/images/404/Sat.png">
          <img alt="" class="not-found-image planet-yellow" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1600165469/website-images/images/404/Smallplanet_yellow.png">
        </div>
        <p class="container__text">No se pudo encontrar la página que solicitaste.</p>
        <button id="container__back">Volver a Inicio</button>
    </div>
  `;

  //getElementsAndEvents is a function that sets up the necessary events and behaviors for the elements within the component's view
  const getElementsAndEvents = () => {
    const buttonBack = document.querySelector("#container__back");
    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  };
  
  return { view: notFoundView, getElementsAndEvents };
}