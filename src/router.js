let ROUTES = {};
let ROOT;

/**
 * setRootEl sets the root element where the views will be rendered.
 * @param {HTMLElement} el - The DOM element that will be used as the root for rendering views.
 */
export const setRootEl = (el) => {
  ROOT = el;
};

/**
 * setRoutes sets the routes that will be used in the SPA.
 * @param {object} routes - The routes that will be used in the SPA.
 */
export const setRoutes = (routes) => {
  ROUTES = routes;
};

/**
 * queryStringToObject converts an query string to Object.
 * @param {string} queryString - The query string to convert, including the leading "?".
 * @returns {object} - An object with key-value pairs from the query string.
 */
const queryStringToObject = (queryString) => {
  // get the query string from the url
  const params = new URLSearchParams(queryString);
  // create an object from the query string
  const paramsObject = Object.fromEntries(params);
  // return the object
  return paramsObject;
};

/**
 * renderView renders the view associated with the given pathname inside the root element.
 * @param {string} pathname - The path that determines which view to render.
 * @param {object} props = {} - Parameters to pass to the view's render function.
 */
const renderView = (pathname, props) => {
  if (!ROOT) {
    return;
  }
  // clear the current html
  ROOT.innerHTML = "";

  // find the correct (route) to render
  const viewRender = ROUTES[pathname]; // find the route key value (value is a function)
  console.log("renderizar", viewRender);

  // call the view's render function with the prop and get the new html element
  if (viewRender) {
    const { view, getElementsAndEvents } = viewRender(props);
    ROOT.appendChild(view);
    getElementsAndEvents();
  } else {
    navigateTo("/404");
  }
};

/**
 * Navigates to a new route within the SPA.
 * @param {string} pathname - The path to navigate to.
 * @param {object} [props={}] - Additional parameters for the view.
 */
export const navigateTo = (pathname, props = {}) => {
  // Build the query string if there are parameters
  const queryString = Object.keys(props).length
    ? `?${new URLSearchParams(props)}`
    : "";
  // Build the full URL
  const url = `${window.location.origin}${pathname}${queryString}`;

  // Add a new state to the browser history
  window.history.pushState(props, "", url);

  // Render the corresponding view
  renderView(pathname, props);
};

/**
 * onUrlChange handles URL changes by updating the view based on the new location.
 * @param {object} location - The location object representing the current URL.
 * @param {string} location.pathname - The path of the current URL.
 * @param {string} location.search - The query string of the current URL.
 */
// onUrlChange function that will be called when the url changes (popstate event)
export const onUrlChange = () => {
  const { pathname, search } = window.location;
  console.log("cambio de url", pathname, search);
  const props = queryStringToObject(search);
  renderView(pathname, props);
};