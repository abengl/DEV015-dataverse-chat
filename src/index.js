import { Home } from "./views/Home.js";
import { ApiKey } from "./views/ApiKey.js";
import { NotFound } from "./views/NotFound.js";
import { Chat } from "./views/Chat.js";
import { ChatGroup } from "./views/ChatGroup.js";
import { setRoutes, setRootEl, onUrlChange } from "./router.js";

const rootElement = document.querySelector('.root');

const routes = {
  '/': Home,
  '/api-key': ApiKey,
  '/chat': Chat,
  '/chat-group': ChatGroup,
  '/404': NotFound,
}

setRoutes(routes);


// set the root element where the views will be rendered y render the view based on the URL load.
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootElement);
  onUrlChange();
});

window.addEventListener("popstate", () => {
  onUrlChange();
});