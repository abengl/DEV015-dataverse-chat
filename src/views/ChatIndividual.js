import { data } from "../data/dataset.js";
import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";

export function ChatIndividual(props) {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  const h1Element = document.createElement("h1");
  h1Element.textContent = `Bienvenido al chat individual de ${props.id}!`;
  rootElement.appendChild(h1Element);

  const itemData = data.find((item) => item.id === props.id);

  const liElement = document.createElement("li");
  liElement.setAttribute("data-id", data.id);

  if (itemData) {
    liElement.innerHTML = ` 
          <div class="card__text">
            <div class="card__text__title">
              <img id="title__logo" src="${itemData.extraInfo.logoUrl}" alt="${itemData.name}" itemprop="image"/>
              <h3 id="title__name" itemprop="name">${itemData.name}</h3>
            </div>
            <p class="card__text__description" itemprop="description">${itemData.shortDescription}</p>
            <span class="card__text__year" itemprop="dateCreated">
              <span class="text__bold">Creado en:</span> ${itemData.facts.yearOfCreation}</span>
            <span class="card__text__creator" itemprop="creator">
              <span class="text__bold">Autor:</span> ${itemData.facts.creator}</span>
            <span class="card__text__users" itemprop="usageInfo">${itemData.facts.percentageOfUsers}</span>
          </div>
        `;
    rootElement.appendChild(liElement);
  } else {
    // Handle the case when no matching data is found
    navigateTo("/errorRutas");
  }
  // Append the view element
  return liElement;
}
