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
        <div class="card__overlay">
          <h3 class="card__overlay__title"></h3>
        </div>
      `;
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
