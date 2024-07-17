export function Footer() {
  const footerEl = document.createElement("footer");
  footerEl.innerHTML = `
  <div class="footer__logo">
    <img class="footer__logo__image" src="assets/logos/logo-color.svg" alt="Dataverse" />
    <h4 class="footer__logo__title">TechGenius</h4>
  </div>
  <div class="footer__text">
    <p class="footer__text__name>Desarrollado por <a class="footer__text__link" href="https://github.com/LicetLemus">Licet Lemus</a> y <a class="footer__text__link" href="https://github.com/abengl">Alessandra Godoy</a></p>
    <p class="footer__text__copy">&copy; Copyright 2024</p>
  </div>
  <div class="footer__block"></div>
  `;
  return footerEl;
}
