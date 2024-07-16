export function Nav() {
  const navElement = document.createElement("nav");
  navElement.classList.add("nav");
  navElement.innerHTML = `
    <div class="nav__logo">
      <img class="nav__logo__image" src="../assets/logos/logo.svg" alt="Dataverse" />
      <h2>TechGenius</h2>
    </div>
    <div class="nav__btn">
      <button class="nav__btn__panel" id="btn__panel">Panel</button>
      <button class="nav__btn__api" id="btn__api">Api</button>
    </div>
  `;
  return navElement;
}
