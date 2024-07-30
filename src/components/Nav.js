import { navigateTo } from "../router.js";

export const Nav = () => {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav");

  navContainer.innerHTML = `
    <div class="nav__logo">
      <img class="nav__logo__image" src="../assets/logos/logo.svg" alt="Dataverse" />
      <h2>TechGenius</h2>
    </div>
    <div class="nav__btn">
      <button class="nav__btn__panel" id="btn__panel">Panel</button>
      <button class="nav__btn__api" id="btn__api">Api</button>
    </div>
    `;

  navContainer.querySelector(".nav__logo").addEventListener("click", () => {
    navigateTo("/");
  });

  navContainer.querySelector("#btn__panel").addEventListener("click", () => {
    navigateTo("/chat-group");
  });

  navContainer.querySelector("#btn__api").addEventListener("click", () => {
    navigateTo("/api-key");
  });
  return navContainer;
};