import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";

export function ChatGroup() {
  const viewGroup = document.createElement("div");
  viewGroup.classList.add("chatGroup");
  viewGroup.appendChild(Nav());

  const mainElement = document.createElement("main");
  viewGroup.appendChild(mainElement);

  mainElement.innerHTML = `
    <div class="chatGroup__container">
      <p class="chatGroup__container__description">Bienvenida al Chat Grupal! 
      <br>
      Ingresa tu nombre y comienza a chatear con tus compañeros.</p>
      <p>Estamos probando</p>
      <button id="button__back">Back Home</button>
    </div>
  `;

  const getElementsAndEvents = () => {
    const buttonBack = document.querySelector("#button__back");
    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  };

  return { view: viewGroup, getElementsAndEvents };
}