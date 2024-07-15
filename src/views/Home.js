import { navigateTo } from "../router.js";
import { Header } from "../components/Header.js";

export function Home() {
  /*
  const viewEl = document.createElement("h1");
  viewEl.textContent = "Bienvenida al Home!";

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Ir a Chat Individual";

  viewEl.append(buttonEl);

  buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/chatIndividual", { id: "javascript" });
  });
  return viewEl;
  */

  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentElement("beforebegin", Header());
  return viewEl;
}
