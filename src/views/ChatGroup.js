import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";

/**
 * ChatGroup is a function component that creates and returns a view element.
 * @returns {HTMLElement} - The HTML element representing the Home view.
 */
export function ChatGroup() {
  //Creamos la vista
  const viewGroup = document.createElement("div");
  viewGroup.classList.add("chatGroup");

  //Añadimos los componentes a la vista
  viewGroup.appendChild(Nav());
  const mainElement = document.createElement("main");
  mainElement.classList.add("chatGroup__main");
  viewGroup.appendChild(mainElement);

  //Establecemos la estructura de la vista
  mainElement.innerHTML = `
    <div class="chatGroup__container">
      <p class="chatGroup__container__description">Bienvenida al Chat Grupal! 
      <br>
      Ingresa tu nombre y comienza a chatear con tus compañeros.</p>
      <p>Estamos probando</p>
      <button id="button__back">Back Home</button>
    </div>
  `;

  /**
   * getElementsAndEvents is a function that sets up the necessary events and behaviors
   * for the elements within the component's view. This function is called after the view
   * has been added to the DOM to ensure that all elements are available for manipulation.
   *
   * @function
   * @returns {void} - This function does not return any value. Instead, it configures
   *                    the events and behaviors of the elements within the component.
   */
  const getElementsAndEvents = () => {
    const buttonBack = document.querySelector("#button__back");
    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  };

  return { view: viewGroup, getElementsAndEvents };
}
