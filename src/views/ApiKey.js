import { setStyles } from "../lib/styleUtils.js";
import { clearComponents } from "../lib/viewUtils.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

export function ApiKey() {
  //Removemos componentes innecesarios
  clearComponents(["header", "footer", "nav"]);

  //Creamos la estructura de la vista
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("container");
  sectionElement.innerHTML = `
    <div class="container__logo">
      <img src="../assets/logos/logo-color.svg" class="container__logo__image" alt="Logo" />
      <h1 class="container__logo__title">TechGenius</h1>
    </div>
    <p class="container__description">Conversa con la tecnología de programación preferida. 
    Ingresa tu API KEY y descubre mucho más sobre la tecnología.</p>
    <label for="apikey" class="container__label">API KEY</label>
    <input type="text" class="container__input" id="apikey" placeholder="Ingresa tu API KEY" required/>
    <div class="container__button">
      <button id="button__clear">Borrar</button>
      <button id="button__save">Guardar</button>
    </div>
    <button id="button__back">Volver a Inicio</button>
    <div class="container__link">
      <p class="container__link__text">¿Aún no tienes tu ApiKey?</p>
      <a class="container__link__open" href="https://openai.com/" target="_blank">Genera tu ApiKey</a>
    </div>
    `;

  // Manejar eventos después de asegurar que el DOM esté completamente cargado
  setTimeout(() => {
    const buttonSave = document.querySelector("#button__save");
    const buttonClear = document.querySelector("#button__clear");
    const buttonBack = document.querySelector("#button__back");
    const inputElement = document.querySelector(".container__input");
    const inputMessage = document.createElement("span");
    inputMessage.classList.add("input__message");
    sectionElement.insertBefore(inputMessage, inputElement);
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

    // Botón volver
    buttonBack.addEventListener("click", () => {
      navigateTo("/");
    });
  });

  //Actualizamos los estilos según la vista
  setStyles("apiKey");
  
  return sectionElement;
}
