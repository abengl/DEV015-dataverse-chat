import { loadStylesheet, removeStylesheet } from "../lib/styleUtils.js";

export function ApiKey() {
  if (document.querySelector("header")) {
    document.querySelector("header").remove();
  }

  if (document.querySelector("footer")) {
    document.querySelector("footer").remove();
  }

  const viewEl = document.createElement("section");
  viewEl.classList.add("container");
  viewEl.innerHTML = `
    <div class="container__logo">
      <img src="../assets/logos/logo-color.svg" class="container__logo__image" alt="Logo" />
      <h1 class="container__logo__title">TechGenius</h1>
    </div>
    <p class="container__description">Conversa con la tecnología de programación preferida. 
    Ingresa tu API KEY y descubre mucho más sobre la tecnología.</p>
    <label for="apikey" class="container__label">API KEY</label>
    <input type="text" class="container__input" id="apikey" placeholder="Ingresa tu API KEY" required readonly/>
    <div class="container__button">
      <button id="button__clear">Borrar</button>
      <button id="button__save">Guardar</button>
    </div>
    <button id="container__back">Volver a Inicio</button>
    <div class="container__link">
      <p class="container__link__text">¿Aún no tienes tu ApiKey?</p>
      <a class="container__link__open" href="https://openai.com/" target="_blank">Genera tu ApiKey</a>
    </div>
    `;

  loadStylesheet("./styles/apiKey.css");
  removeStylesheet(["./styles/apiKey.css", "./styles/style.css"]);
  return viewEl;
}
