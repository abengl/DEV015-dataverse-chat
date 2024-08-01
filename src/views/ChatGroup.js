import { Nav } from "../components/Nav.js";
import { data } from "../data/dataset.js";
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

  const ulTechnologies = document.createElement("ul");
  ulTechnologies.classList.add("technologies");
  mainElement.appendChild(ulTechnologies);

  data.forEach((objeto) => {
    const liTechnologies = document.createElement("li");
    liTechnologies.classList.add("technologies__info");

    liTechnologies.innerHTML = `
      <div class="technologies__info__lateral">
        <img id="info__lateral__image" src="${objeto.imageUrl}" alt="${objeto.name}"/>
        <div id="info__lateral__text">
          <h3 id="lateral__text__name">${objeto.name}</h3>
          <p id="lateral__text__description">${objeto.shortDescription}</p>
        </div>
      </div>
    `;

    ulTechnologies.appendChild(liTechnologies);
  })

  //getElementsAndEvents is a function that sets up the necessary events and behaviors for the elements within the component's view
  const getElementsAndEvents = () => {};

  return { view: viewGroup, getElementsAndEvents };
}
