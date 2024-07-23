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
    `;
  return containerChat;
};
