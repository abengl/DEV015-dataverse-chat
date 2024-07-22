import { navigateTo } from "../router.js";
import { Nav } from "../components/Nav.js";

export function ErrorRutas() {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

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

  return viewEl;
}
