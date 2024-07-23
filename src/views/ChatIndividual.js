import { data } from "../data/dataset.js";
import { loadStylesheet } from "../lib/styleUtils.js";
import { navigateTo } from "../router.js";
import { Nav } from "../components/Nav.js";
import { Chat } from "../components/Chat.js";

export function ChatIndividual(props) {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  // Chat component
  // const chatElement = document.createElement("div");
  // chatElement.classList.add("chat");
  // chatElement.innerHTML = `
  //   <h1>Bienvenido al chat individual de ${props.id}!</h1>
  // `;
  rootElement.appendChild(Chat(props));

  // Info component
  const itemData = data.find((item) => item.id === props.id);

  const dataElement = document.createElement("li");
  dataElement.classList.add("data");
  dataElement.setAttribute("itemscope", "");
  dataElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  dataElement.setAttribute("data-id", itemData.id);

  if (itemData) {
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
        <p class="data__text__description" itemprop="description">${itemData.description}</p>
        <span class="data__text__year" itemprop="dateCreated">
          <span class="text__bold">Creado en:</span> ${itemData.facts.yearOfCreation}</span>
        <span class="data__text__creator" itemprop="creator">
          <span class="text__bold">Autor:</span> ${itemData.facts.creator}</span>
        <span class="data__text__users" itemprop="usageInfo">${itemData.facts.percentageOfUsers}</span>
      </div>
      <div class="data__label">
        <span class="data__label__text" itemprop="additionalType">${itemData.facts.type}</span>
        <span class="data__label__text" itemprop="exampleOfWork">${itemData.facts.applicationField}</span>
      </div>
    `;
    rootElement.appendChild(dataElement);
  } else {
    navigateTo("/errorRutas");
  }

  loadStylesheet("./styles/chatIndividual.css");

  return dataElement;
}
