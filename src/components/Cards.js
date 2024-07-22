export const cards = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
          <div class="card__image">
            <img class="card__image__background" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
            <span class="card__image__label" itemprop="educationalLevel"><h4 id="label__difficulty">${objeto.facts.difficultyLevel}</h4></span>
          </div>
          <div class="card__text">
            <div class="card__text__title">
              <img id="title__logo" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
              <h3 id="title__name" itemprop="name">${objeto.name}</h3>
            </div>
            <p class="card__text__description" itemprop="description">${objeto.shortDescription}</p>
            <span class="card__text__year" itemprop="dateCreated">
              <span class="text__bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
            <span class="card__text__creator" itemprop="creator">
              <span class="text__bold">Autor:</span> ${objeto.facts.creator}</span>
            <span class="card__text__users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
          </div>
          <div class="card__label">
            <span class="card__label__text" itemprop="additionalType">${objeto.facts.type}</span>
            <span class="card__label__text" itemprop="exampleOfWork">${objeto.facts.applicationField}</span>
          </div>
          <button class="card__button">
            <img class="card__button__icon" src="../assets/icons/chat.svg" alt="chat icon" itemprop="image"/>
          </button>
        `;
    ulElement.appendChild(liElement);
  });
  return ulElement;
};

export const cardsRanking = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
        </div>
        <div class="card-text">
          <div class="content-title">
            <h3 class="title-name" itemprop="name">${objeto.name}</h3>
            <img class="title-logo" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
          </div>
          <p class="card-description" itemprop="description">${objeto.shortDescription}</p>
          <span class="card-year" itemprop="dateCreated"><span class="bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
          <span class="card-creator" itemprop="creator"><span class="bold">Autor:</span> ${objeto.facts.creator}</span>
          <span class="card-users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
        </div>
        <div class="card-label">
            <div class="item-label type">
              <img class="label-icon type" src="${objeto.extraInfo.iconTypeUrl}" alt="Type" itemprop="image"/>
              <span class="label-text type" itemprop="additionalType">Tipo ${objeto.facts.type}</span>
            </div>
            <div class="item-label application">
              <img class="label-icon application" src="${objeto.extraInfo.iconApplicationUrl}" alt="Application" itemprop="image"/>
              <span class="label-text field" itemprop="exampleOfWork">Aplicación ${objeto.facts.applicationField}</span>
            </div>
            <div class="item-label difficulty">
              <img class="label-icon ${objeto.facts.difficultyLevel}" src="./assets/icons/fire.svg" alt="difficulty level" itemprop="image"/>
              <span class="label-text difficulty" itemprop="educationalLevel">Dificultad ${objeto.facts.difficultyLevel}</span>
            </div>
        </div>
        <div class="overlay">
          <h3 class="title-overlay"></h3>
        </div>
      `;
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
