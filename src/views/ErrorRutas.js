import { setStyles } from "../lib/styleUtils.js";
import { clearComponents } from "../lib/viewUtils.js";
import { navigateTo } from "../router.js";
import { Nav } from "../components/Nav.js";

export function ErrorRutas() {
  clearComponents(["header", "footer"]);

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Nav());

  const viewEl = document.createElement("h1");
  viewEl.textContent = "¿Perdida en el espacio?";

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Ir a Home";

  viewEl.append(buttonEl);

  buttonEl.addEventListener("click", () => {
    navigateTo("/");
  });

  //setStyles("errorRutas");

  return viewEl;
}
