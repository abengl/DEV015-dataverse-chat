import { data } from "../data/dataset.js";

export const Chat = (props) => {
  const itemData = data.find((item) => item.id === props.id);
  const containerChat = document.createElement("div");
  containerChat.classList.add("chat");

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
            <div class="chat__message__text">
              ${itemData.description}
            </div>
          </div>
          <div class="chat__send">
            <div class="chat__message__text">
              ¿Qué otro dato importante me podrías dar?
            </div>
            <img class="chat__message__image" src="../assets/icons/user.svg" alt="chat icon" itemprop="image"/>
          </div>
          <div class="chat__reply">
            <img class="chat__message__image" src="${itemData.extraInfo.logoUrl}" alt="chat icon" itemprop="image"/>
            <div class="chat__message__text">
              ${itemData.description}
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
  return containerChat;
};

