import { navigateTo } from "../router.js";

export function ErrorRutas() {
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