import { data } from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

/**
 * ChatIndividual is a function component that creates and returns the chat element.
 * @param {object} [props={}] - Additional parameters for the view
 * @returns containerChat - The HTML element representing the ChatIndividual component.
 */
export const ChatIndividual = (props) => {
  //Vinculamos el id del chat con el objeto correspondiente
  const itemData = data.find((item) => item.id === props.id);

  //Creamos la estructura del componente
  const containerChat = document.createElement("div");
  containerChat.classList.add("chatIndividual");

  containerChat.innerHTML = `
        <div class="chat__container">
            <img class="chat__container__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
            <div class="chat_details">
              <h3 class="chat__details__name">${itemData.name}</h3>
              <h4 class="chat__details__status">En linea</h4>
            </div>
        </div>
        <div class="overflow">
          <div class="chat__send">
            <div class="chat__message__text">
              Hola, ¿podrías indicarme cuál es el principal uso en el mundo de desarrollo web?
            </div>
            <img class="chat__message__image" src="../assets/icons/user.svg" alt="chat icon" itemprop="image"/>
          </div>
          <div class="chat__reply">
            <img class="chat__message__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
            <div class="chat__reply__text">
              ${itemData.shortDescription}
            </div>
          </div>
        </div>
        <div class="chat__input">
          <input 
            type="text" 
            placeholder="Escribe tu mensaje..."
            class="chat__input__field"/>
          <button class="chat__input__button">
            Enviar
          </button>
        </div>
    `;

  const inputField = containerChat.querySelector(".chat__input__field");
  const sendButton = containerChat.querySelector(".chat__input__button");

  const sendMessage = () => {
    const userMessage = inputField.value;
    if (userMessage.trim() === "") return;

    // Añadir mensaje del usuario a la interfaz
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("chat__send");
    userMessageElement.innerHTML = `
      <div class="chat__message__text">
        ${userMessage}
      </div>
      <img class="chat__message__image" src="../assets/icons/user.svg" alt="chat icon" itemprop="image"/>
    `;
    containerChat.querySelector(".overflow").appendChild(userMessageElement);

    // Limpiar el input del texto
    inputField.value = "";

    // Contexto adicional para la comunicación con OpenAI
    const contextMessage = {
      role: "system",
      content: `Responde en primera persona con un máximo de 50 palabras, como si fueras un ser humano. Eres ${itemData.name}. Aquí tienes información sobre ${itemData.name}: ${itemData.description}.`,
    };

    // Comunicación con OpenAI
    communicateWithOpenAI([
      contextMessage,
      { role: "user", content: userMessage },
    ])
      .then((response) => {
        console.log("Respuesta de OpenAI: ", response);

        // Añadir mensaje del bot a la interfaz
        const botMessage = response.choices[0].message.content;
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("chat__reply");
        botMessageElement.innerHTML = `
        <img class="chat__message__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
        <div class="chat__reply__text">
          ${botMessage}
        </div>
      `;
        containerChat.querySelector(".overflow").appendChild(botMessageElement);
      })
      .catch((error) => {
        console.error(`Error en la petición a OpenAI: ${error}`);
        const errorMessageElement = document.createElement("div");
        errorMessageElement.classList.add("chat__reply");
        errorMessageElement.innerHTML = `
        <img class="chat__message__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
        <div class="chat__reply__text">
          Lo siento, no pude responder tu pregunta. ${error}
        </div>
      `;
        containerChat
          .querySelector(".overflow")
          .appendChild(errorMessageElement);
      });
  };
  sendButton.addEventListener("click", sendMessage);
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
  });
  return containerChat;
};
