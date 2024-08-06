import { data } from "../data/dataset.js";
import { Header } from "../components/Header.js";
import { Cards, CardsRanking } from "../components/Cards.js";
import { Footer } from "../components/Footer.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";

/**
 * Home is a function component that creates and returns a view element.
 * @returns {HTMLElement} - The HTML element representing the Home view.
 */
export function Home() {
  //Creamos la vista
  const homeView = document.createElement("div");
  homeView.classList.add("home");

  //Añadimos los componentes a la vista
  homeView.appendChild(Header());
  const mainElement = document.createElement("main");
  homeView.appendChild(mainElement);
  homeView.appendChild(Footer());

  //Cambiamos el título y el favicon
  document.title = "TechGenius";
  document.querySelector("[type='image/x-icon']").href = "assets/logos/logo-color.svg";

  //Funciones para mostrar las cartas, filtros, ordenar y ranking
  function displayCards(data) {
    mainElement.innerHTML = "";
    mainElement.appendChild(Cards(data));
  }

  displayCards(data);

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

  function renderMetrics(data, homeViewement) {
    homeViewement.innerHTML = "";
    const metricsItems = computeStats(data);
    homeViewement.appendChild(CardsRanking(metricsItems));

    const h3Elements = document.querySelectorAll(".card__overlay__title");
    h3Elements[0].innerText = "Lenguaje De Programación Más Usado";
    h3Elements[1].innerText = "Lenguaje De Programación Más Antiguo";
    h3Elements[2].innerText = "Lenguaje De Programación Más Actual";
  }

  /**
   * getElementsAndEvents is a function that sets up the necessary events and behaviors
   * for the elements within the component's view. This function is called after the view
   * has been added to the DOM to ensure that all elements are available for manipulation.
   *
   * @function
   * @returns {void} - This function does not return any value. Instead, it configures
   *                    the events and behaviors of the elements within the component.
   */
  const getElementsAndEvents = () => {
    const filterSelectType = document.querySelector("#type-select");
    const filterSelectApplication = document.querySelector(
      "#applicationField-select"
    );
    const orderSelect = document.querySelector("#order-select");
    const clearButton = document.querySelector('[data-testid="button-clear"]');
    const metricsButton = document.querySelector(".header__btn__ranking");

    /* Declaramos los eventos de escucha para los filtros */
    filterSelectType.addEventListener("change", () => {
      applyFilterAndSort(
        filterSelectType,
        filterSelectApplication,
        orderSelect
      );
    });

    filterSelectApplication.addEventListener("change", () => {
      applyFilterAndSort(
        filterSelectApplication,
        filterSelectType,
        orderSelect
      );
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
      renderMetrics(data, mainElement);
    });
  };

  return { view: homeView, getElementsAndEvents };
}
