import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";


export function ChatGrupal() {
  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Header());
  rootElement.insertAdjacentElement("afterend", Footer());

  const viewEl = document.createElement("h1");
  viewEl.textContent = "Bienvenida al Chat Grupal!";
  return viewEl;
}
