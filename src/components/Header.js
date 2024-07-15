export function Header() {
  const headerElement = document.createElement("header");
  headerElement.innerHTML = `
    <div class="logo-container">
        <img class="logo" src="../assets/logos/logo.svg" alt="Dataverse" />
        <h2>TechGenius</h2>
      </div>
      <div class="hero-container">
        <h1>Explora y Conquista las Tendencias Tecnológicas</h1>
        <p class="introduction">
          Descubre y domina las últimas tendencias tecnológicas. Explora
          tecnologías por tipo de lenguaje o campo de aplicación, ordena
          resultados y accede al ranking de lenguajes más populares. Limpia
          filtros con un clic. TechGenius, tu puerta al futuro tecnológico.
        </p>
      </div>

      <nav class="select-container">
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
          <option value="Front-End">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Data">Data</option>
        </select>

        <label for="order-select"></label>
        <select name="name" id="order-select" data-testid="select-sort">
          <option value="" disabled selected>Ordenar</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <button data-testid="button-clear">Limpiar</button>

        <button class="metrics">
          Ranking<img
            src="assets/icons/ranking.svg"
            height="16"
            width="16"
            alt="top icon"
          />
        </button>
      </nav>
    `;
  return headerElement;
}
