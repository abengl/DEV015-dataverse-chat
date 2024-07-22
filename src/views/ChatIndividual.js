import { Nav } from "../components/Nav.js";
export function ChatIndividual(props) {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  const viewEl = document.createElement("h1");
  viewEl.textContent = `Bienvenido al chat individual ${props.id}!`;
  return viewEl;
}
