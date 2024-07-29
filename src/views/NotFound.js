import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";

export function NotFound() {
  const notFoundView = document.createElement("div");
  notFoundView.classList.add("not__found");
  notFoundView.appendChild(Nav());

  const mainElement = document.createElement("main");
  mainElement.classList.add("not__found__main");
  notFoundView.appendChild(mainElement);

  mainElement.innerHTML = `
    <h1 class="not-found__title">"¿Perdida en el espacio?";</h1>
    <button id="button__back">Ir a Home</button>
  `;
  const getElementsAndEvents = () => {
    const buttonBack = document.querySelector("#button__back");
    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  };
  return { view: notFoundView, getElementsAndEvents };
}