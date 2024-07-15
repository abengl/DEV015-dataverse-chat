export function Footer() {
  const footerEl = document.createElement("footer");
  footerEl.innerHTML = `
  <div class="logo-container-footer">
    <img class="logo" src="assets/logos/logo-color.svg" alt="Dataverse" />
    <h4>TechGenius</h4>
  </div>
  <div class="text-footer">
    <p>Desarrollado por <a href="https://github.com/LicetLemus">Licet Lemus</a> y <a href="https://github.com/abengl">Alessandra Godoy</a></p>
    <p>&copy; Copyright 2024</p>
  </div>
  <div class="footer-block"></div>
  `;
  return footerEl;
}
