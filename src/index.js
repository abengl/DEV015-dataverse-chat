import { onURLChange, setRootEl, setRoutes } from "./router.js";
import { Home } from "./views/Home.js";
import { ChatIndividual } from "./views/ChatIndividual.js";
import { ChatGrupal } from "./views/ChatGrupal.js";
import { ErrorRutas } from "./views/ErrorRutas.js";
import { ApiKey } from "./views/ApiKey.js";

const rootElement = document.querySelector("#root");

const routes = {
  "/": Home,
  "/chatIndividual": ChatIndividual,
  "/chatGrupal": ChatGrupal,
  "/errorRutas": ErrorRutas,
  "/apiKey": ApiKey,
};

// Sets the routes for the ROUTES global variable in router.js
setRoutes(routes);

// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  setRootEl(rootElement);
  // invoke onURLChange
  onURLChange();
});

window.addEventListener("popstate", () => {
  onURLChange();
});
