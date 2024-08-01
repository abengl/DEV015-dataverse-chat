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
  const mainElement = document.createElement("main");
  mainElement.classList.add("not__found__main");
  notFoundView.appendChild(mainElement);

  //Establecemos la estructura del main
  mainElement.innerHTML = `
    <div class="container">
        <h1 class="container__title">"¿Perdida en el espacio?";</h1>
        <img class="container__image" src="">
        <button id="container__back">Ir a Home</button>
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