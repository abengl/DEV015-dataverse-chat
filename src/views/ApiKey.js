import { navigateTo } from "../router.js";
import { setApiKey } from "../lib/apiKey.js";

export function ApiKey() {
  const apiKeyView = document.createElement("div");
  apiKeyView.classList.add("apiKey");
  apiKeyView.innerHTML = `
      <div class="containerForm">
        <div class="containerForm__logo">
            <img src="../assets/logos/logo-color.svg" class="containerForm__logo__image" alt="Logo" />
            <h1 class="containerForm__logo__title">TechGenius</h1>
        </div>
        <p class="containerForm__description">Conversa con la tecnología de programación preferida. 
        Ingresa tu API KEY y descubre mucho más sobre la tecnología.</p>
        <label for="apikey" class="containerForm__label">API KEY</label>
        <input type="text" class="containerForm__input" id="apikey" placeholder="Ingresa tu API KEY" required/>
        <div class="containerForm__button">
            <button id="button__clear">Borrar</button>
            <button id="button__save">Guardar</button>
        </div>
        <button id="containerForm__back">Volver a Inicio</button>
        <div class="containerForm__link">
            <p class="containerForm__link__text">¿Aún no tienes tu ApiKey?</p>
            <a class="containerForm__link__open" href="https://openai.com/" target="_blank">Genera tu ApiKey</a>
        </div>
    </div>
  `;
  const getElementsAndEvents = () => {    
    const apiKey = document.getElementById("apikey");
    const buttonSave = document.getElementById("button__save");
    const buttonBack = document.getElementById("containerForm__back");
    const buttonClear = document.getElementById("button__clear");

    buttonSave.addEventListener("click", () => {
      const apiKeyValue = apiKey.value;
      setApiKey(apiKeyValue);
    });

    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });

    buttonClear.addEventListener("click", () => {
      apiKey.value = "";
    });
  }
  
  return {view: apiKeyView, getElementsAndEvents};
}