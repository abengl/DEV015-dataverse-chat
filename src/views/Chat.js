import { data } from "../data/dataset.js";
import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";
import { ChatIndividual } from "../components/ChatIndividual.js";

/**
 * Chat is a function component that creates and returns a view element.
 * @param {object} props - The properties of the view.
 * @returns {HTMLElement} - The HTML element representing the Chat view.
 */
export function Chat(props) {
  // Creamos la vista
  const chatView = document.createElement("div");
  chatView.classList.add("chat");

  // Añadimos los componentes a la vista
  chatView.appendChild(Nav());
  const mainElement = document.createElement("main");
  mainElement.classList.add("chat__main");
  chatView.appendChild(mainElement);
  mainElement.appendChild(ChatIndividual(props));

  // Localizamos el item en el dataset
  const itemData = data.find((item) => item.id === props.id);

  if (!itemData) {
    navigateTo("/404");
    return chatView;
  }

  // Añadimos el título, el favicon y hacemos disponible el ícono del input
  document.title = `Chat con ${itemData.name}`;
  document.querySelector("[type='image/x-icon']").href = itemData.extraInfo.logoUrl;
  document.querySelector("head").innerHTML += `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />
  `;

  // Creamos la estructura de información adicional
  const dataElement = document.createElement("li");
  dataElement.classList.add("data__container");
  dataElement.setAttribute("itemscope", "");
  dataElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  dataElement.setAttribute("data-id", itemData.id);

  dataElement.innerHTML = `
      <div class="data__image">
        <img class="data__image__background" src="${itemData.imageUrl}" alt="${itemData.name}" itemprop="image"/>
        <span class="data__image__label" itemprop="educationalLevel"><h4 id="label__difficulty">${itemData.facts.difficultyLevel}</h4></span>
      </div>
      <div class="data__text">
        <div class="data__text__title">
          <img id="title__logo" src="${itemData.extraInfo.logoUrl}" alt="${itemData.name}" itemprop="image"/>
          <h3 id="title__name" itemprop="name">${itemData.name}</h3>
        </div>
        <p class="data__text__description" itemprop="description">${itemData.shortDescription}</p>
        <span class="data__text__year" itemprop="dateCreated">
          <span class="text__bold">Creado en:</span> ${itemData.facts.yearOfCreation}</span>
        <span class="data__text__creator" itemprop="creator">
          <span class="text__bold">Autor:</span> ${itemData.facts.creator}</span>
        <span class="data__text__users" itemprop="usageInfo">
          <span class="text__bold">Porcentaje de usuarios:</span> ${itemData.facts.percentageOfUsers}</span>
      </div>
      <div class="data__label">
        <span class="data__label__text" itemprop="additionalType">${itemData.facts.type}</span>
        <span class="data__label__text" itemprop="exampleOfWork">${itemData.facts.applicationField}</span>
      </div>
    `;

  mainElement.appendChild(dataElement);

  //getElementsAndEvents is a function that sets up the necessary events and behaviors for the elements within the component's view
  const getElementsAndEvents = () => {};

  return { view: chatView, getElementsAndEvents };
}
