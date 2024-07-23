import { data } from "../data/dataset.js";
import { loadStylesheet, removeStylesheet } from "../lib/styleUtils.js";  
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { cards, cardsRanking } from "../components/Cards.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";

export function Home() {
  /* Definimos los elementos del DOM en variables*/
  const rootElement = document.getElementById("root");

  /* Insertamos los componentes header y footer en nuestra vista */
  rootElement.insertAdjacentElement("beforebegin", Header());
  rootElement.insertAdjacentElement("afterend", Footer());

  /* Implementamos las funciones para los filtros de home */
  function displayCards(data) {
    rootElement.innerHTML = "";
    rootElement.appendChild(cards(data));
  }

  function resetSelectIndex(...selectElements) {
    selectElements.forEach((selectElement) => {
      selectElement.selectedIndex = 0;
    });
  }

  function applyFilterAndSort(activeFilter, inactiveFilter, orderSelect) {
    let filteredData = data;
    if (activeFilter.value) {
      filteredData = filterData(
        filteredData,
        activeFilter.name,
        activeFilter.value
      );
      resetSelectIndex(inactiveFilter);
    }

    if (orderSelect.value) {
      filteredData = sortData(filteredData, "name", orderSelect.value);
    }
    displayCards(filteredData);
  }

  function handleOrder(data, orderSelect) {
    let orderedData = data;
    orderedData = sortData(orderedData, "name", orderSelect.value);
    displayCards(orderedData);
  }

  function renderMetrics(data, rootElement) {
    rootElement.innerHTML = "";
    const metricsItems = computeStats(data);
    rootElement.appendChild(cardsRanking(metricsItems));

    const h3Elements = document.querySelectorAll(".card__overlay__title");
    h3Elements[0].innerText = "Lenguaje De Programación Más Usado";
    h3Elements[1].innerText = "Lenguaje De Programación Más Antiguo";
    h3Elements[2].innerText = "Lenguaje De Programación Más Actual";
  }

  /* Usamos setTimeout para esperar a que el DOM se actualice y poder seleccionar los elementos del DOM */
  setTimeout(() => {
    const filterSelectType = document.querySelector("#type-select");
    const filterSelectApplication = document.querySelector(
      "#applicationField-select"
    );
    const orderSelect = document.querySelector("#order-select");
    const clearButton = document.querySelector('[data-testid="button-clear"]');
    const metricsButton = document.querySelector(".header__btn__ranking");

    /* Declaramos los eventos de escucha para los filtros */
    filterSelectType.addEventListener("change", () => {
      applyFilterAndSort(filterSelectType, filterSelectApplication, orderSelect);
    });

    filterSelectApplication.addEventListener("change", () => {
      applyFilterAndSort(filterSelectApplication, filterSelectType, orderSelect);
    });

    orderSelect.addEventListener("change", () => {
      if (filterSelectType.value) {
        applyFilterAndSort(
          filterSelectType,
          filterSelectApplication,
          orderSelect
        );
      } else if (filterSelectApplication.value) {
        applyFilterAndSort(
          filterSelectApplication,
          filterSelectType,
          orderSelect
        );
      } else {
        handleOrder(data, orderSelect);
      }
    });

    clearButton.addEventListener("click", () => {
      resetSelectIndex(filterSelectType, filterSelectApplication, orderSelect);
      displayCards(data);
    });

    metricsButton.addEventListener("click", (event) => {
      event.preventDefault();
      renderMetrics(data, rootElement);
    });
  }, 0);

  loadStylesheet("./styles/home.css");
  removeStylesheet(["./styles/home.css", "./styles/style.css"]);

  return cards(data);
}
