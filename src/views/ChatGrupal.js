import { setStyles } from "../lib/styleUtils.js";
import { clearComponents } from "../lib/viewUtils.js";
import { Nav } from "../components/Nav.js";

export function ChatGrupal() {
  clearComponents(["header", "footer"]);

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  const viewEl = document.createElement("h1");
  viewEl.textContent = "Bienvenida al Chat Grupal!";

  setStyles("chatGrupal");

  return viewEl;
}
