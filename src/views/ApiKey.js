import { navigateTo } from "../router.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";

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
        <button id="button__back">Volver a Inicio</button>
        <div class="containerForm__link">
            <p class="containerForm__link__text">¿Aún no tienes tu ApiKey?</p>
            <a class="containerForm__link__open" href="https://openai.com/" target="_blank">Genera tu ApiKey</a>
        </div>
      </div>
  `;
  const getElementsAndEvents = () => {
    const inputElement = document.getElementById("apikey");
    const buttonSave = document.getElementById("button__save");
    const buttonBack = document.getElementById("button__back");
    const buttonClear = document.getElementById("button__clear");
    const containerForm = document.querySelector(".containerForm");
    const inputMessage = document.createElement("span");
    inputMessage.classList.add("input__message");
    containerForm.insertBefore(inputMessage, inputElement);

    let APIKEY;

    // Obtener y enmascarar la API key guardada
    APIKEY = getApiKey();
    if (APIKEY) {
      const maskedApiKey = `${APIKEY.slice(0, 3)}${"•".repeat(
        APIKEY.length - 6
      )}${APIKEY.slice(-3)}`;
      inputElement.value = maskedApiKey;
    }

    // Botón guardar
    buttonSave.addEventListener("click", () => {
      APIKEY = inputElement.value;

      if (APIKEY.length >= 10) {
        setApiKey(APIKEY);
        const maskedApiKey = `${APIKEY.slice(0, 3)}${"•".repeat(
          APIKEY.length - 6
        )}${APIKEY.slice(-3)}`;
        inputElement.value = maskedApiKey;
        inputMessage.textContent = "¡API key guardada con éxito!";
      } else {
        inputMessage.textContent = `La API key debe tener al menos 10 caracteres.`;
      }
    });

    // Botón borrar
    buttonClear.addEventListener("click", () => {
      localStorage.removeItem("APIKEY");
      inputElement.value = "";
      inputMessage.textContent = "¡API key borrada con éxito!";
    });

    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  };

  return { view: apiKeyView, getElementsAndEvents };
}
