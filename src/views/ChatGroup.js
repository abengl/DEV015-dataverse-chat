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

  const chatGroup = document.createElement("div");
  chatGroup.classList.add("group__container");
  mainElement.appendChild(chatGroup);

  // contenedor de logos tecnológicos
  const logoTecnological = document.createElement("div");
  logoTecnological.classList.add("logo__tecnological");
  chatGroup.appendChild(logoTecnological);
  const imageLogo = document.createElement("div");
  imageLogo.classList.add("image__logo");
  logoTecnological.appendChild(imageLogo);

  // Selecciona solo los primeros 10 elementos del array
  const dataLimitada = data.slice(0, 10);

  dataLimitada.forEach((objeto) => {
    const logoTech = document.createElement("img");
    logoTech.classList.add("image__logo__tech");
    logoTech.src = objeto.imageUrl;
    logoTech.alt = objeto.name;
    imageLogo.appendChild(logoTech);
  });

  // crear un contenedor de details de logo
  const details = document.createElement("div");
  details.classList.add("details__logo");
  details.innerHTML = `
      <h3>Chat grupal de TechGenius</h3>
      <h4>¡Bienvenida al Chat Grupal de TechGenius! 🚀 Conecta y aprende 
      con 24 tecnologías de programación en tiempo real. 🌟</h4>
  `;
  logoTecnological.appendChild(details);
    

  // contenedor de chat
  const chat = document.createElement("div");
  chat.classList.add("chat_tecnologic");
  
  chat.innerHTML = `
    <div class="details__overflow">
    </div>
    <div class="chat__input">
      <input type="text" placeholder="Escribe tu mensaje..."class="chat__input__field"/>
      <button class="chat__input__button">Enviar</button>
    </div>
    `;

  chatGroup.appendChild(chat);

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
