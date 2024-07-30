import { Nav } from "./Nav.js";

/**
 * Header function creates and returns a header element.
 * @returns {HTMLElement} - The HTML element representing the Header.
 */
export const Header = () => {
  //Creamos el header
  const headerElement = document.createElement("header");
  headerElement.classList.add("header");

  //Definimos la estructura del header
  headerElement.innerHTML = `
      <div class="header__hero">
      <h1 class="header__hero__title">Explora y Conquista las Tendencias Tecnológicas</h1>
      <p class="header__hero__introduction">
      Descubre y domina las últimas tendencias tecnológicas. Explora
      tecnologías por tipo de lenguaje o campo de aplicación, ordena
          resultados y accede al ranking de lenguajes más populares. Limpia
          filtros con un clic. TechGenius, tu puerta al futuro tecnológico.
      </p>
      </div>

    <div class="header__select">
    <label for="type-select"></label>
      <select name="type" id="type-select" data-testid="select-filter">
        <option value="" disabled selected>Filtrar por tipo</option>
        <option value="Language">Language</option>
        <option value="Framework">Framework</option>
        <option value="Markup">Markup</option>
      </select>

      <label for="applicationField-select"></label>
      <select
        name="applicationField"
        id="applicationField-select"
        data-testid="select-filter-2"
        >
        <option value="" disabled selected>Filtrar por aplicación</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Data">Data</option>
        </select>

      <label for="order-select"></label>
      <select name="name" id="order-select" data-testid="select-sort">
        <option value="" disabled selected>Ordenar</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        </select>
        
        <button class="header__btn__clear" data-testid="button-clear">Limpiar</button>
        
      <button class="header__btn__ranking">
      Ranking<img
          src="assets/icons/ranking.svg"
          height="16"
          width="16"
          alt="top icon"
          />
          </button>
          </div>
          `;
  //Añadimos el componente de navegación
  headerElement.insertBefore(Nav(), headerElement.firstChild);

  return headerElement;
};
