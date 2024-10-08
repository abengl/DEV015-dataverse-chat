import { data } from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { navigateTo } from "../router.js";

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
    <div class="chat__title">
      <img class="chat__title__arrow" src="../assets/icons/arrow-left.svg" alt="back arrow" itemprop="image"/>
      <div class="chat__title__text">
        <img class="chat__title__logo" src="${itemData.extraInfo.logoUrl}" alt="chat technology logo" itemprop="image"/>
        <div class="chat_details">
          <h1 class="chat__details__name">${itemData.name}</h1>
          <span class="chat__details__status">En linea</span>
        </div>
      </div>
    </div>
    <div class="overflow">
      <div class="chat__reply">
        <img class="chat__message__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
        <div class="chat__reply__text">
          ¡Hola, soy ${itemData.name}! ${itemData.shortDescription}
        </div>
      </div>
    </div>
    <div class="chat__input">
      <textarea class="chat__input__field" name="user-input" placeholder="Escribe un mensaje..."></textarea>
      <button class="chat__input__button">
        <span class="material-symbols-outlined">arrow_upward_alt</span>
      </button>
    </div>
    `;
  containerChat.querySelector(".chat__title__arrow").addEventListener("click", () => {
    navigateTo("/");
  });
  
  const inputField = containerChat.querySelector(".chat__input__field");
  const sendButton = containerChat.querySelector(".chat__input__button");
  const chatContainer = containerChat.querySelector(".overflow"); 

  // Función para añadir el mensaje del usuario en el chat
  const addMessageToChat = (message, role, logoUrl = null) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add(
      role === "user" ? "chat__send" : "chat__reply"
    );
    messageElement.innerHTML = `
    ${role === "user"? `
      <div class="chat__message__text">${message}</div>
      <img class="chat__message__image" src="../assets/icons/user.svg" alt="chat user icon" itemprop="image">`: `
      <img class="chat__message__image" src="${logoUrl}" alt="chat icon" itemprop="image"/>
      <div class="chat__reply__text">${message}</div>
    `}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; 
  };

  const chatHistory = [
    {
      role: "system",
      content: `Estamos haciendo un role-play para un chat. Tú eres ${itemData.name}, responde las preguntas en base a ese rol. Aquí tienes una descripción inicial como referencia: ${itemData.description}. Asegúrate de responder en primera persona con un máximo de 50 palabras.`,
    },
  ];

  // Función que envía obtiene el mensaje del usuario, genera la solicitud a OpenAI y muestra la información en el chat
  const sendMessage = () => {
    const userMessage = inputField.value.trim();
    if (userMessage === "") return;

    // Añadir mensaje del usuario a la interfaz
    addMessageToChat(userMessage, "user");
    chatHistory.push({ role: "user", content: userMessage });
    inputField.value = "";

    // Comunicación con OpenAI
    communicateWithOpenAI(chatHistory)
      .then((response) => {
        // Añadir respuesta de la tecnología al chat
        const techMessage = response.choices[0].message.content;
        addMessageToChat(techMessage, "tech", itemData.extraInfo.logoUrl);
        chatHistory.push({ role: "assistant", content: techMessage });
      })
      .catch((error) => {
        //Añadir el error retornado de OpenAI al chat
        addMessageToChat(
          `Lo siento, no pude responder tu pregunta. ${error}`,
          "tech",
          itemData.extraInfo.logoUrl
        );
      });
  };

  // Obtenemos el input y botón de envío del chat y añadimos eventos de escucha
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
  });
  sendButton.addEventListener("click", sendMessage);

  return containerChat;
};
