import { Nav } from "../components/Nav.js";
//import { navigateTo } from "../router.js";

/**
 * ChatGroup is a function component that creates and returns a view element.
 * @returns {HTMLElement} - The HTML element representing the Home view.
 */
export function ChatGroup() {
  //Creamos la vista
  const viewGroup = document.createElement("div");
  viewGroup.classList.add("chat__group");

  //Añadimos los componentes a la vista
  viewGroup.appendChild(Nav());
  const mainElement = document.createElement("main");
  mainElement.classList.add("chat__group__main");
  viewGroup.appendChild(mainElement);

  //Establecemos la estructura del main element
  // componente chat grupal





































  // vista lateral con usuarios

















  











  


  //getElementsAndEvents is a function that sets up the necessary events and behaviors for the elements within the component's view
  const getElementsAndEvents = () => {};

  return { view: viewGroup, getElementsAndEvents };
}
