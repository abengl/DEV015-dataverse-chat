import { Nav } from "../components/Nav.js";

export function ChatGrupal() {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  const viewEl = document.createElement("h1");
  viewEl.textContent = "Bienvenida al Chat Grupal!";
  return viewEl;
}
