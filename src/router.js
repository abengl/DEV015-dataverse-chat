let ROUTES = {};
let ROOT;

export const setRootEl = (el) => {
  ROOT = el;
};

export const setRoutes = (routes) => {
  ROUTES = routes;
};

export const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlParams);
};

export const renderView = (pathname, props = {}) => {
  ROOT.innerHTML = "";
  const viewFunction = ROUTES[pathname]; // viewFunction = ROUTES["/"];

  if (!viewFunction) {
    navigateTo("/errorRutas", props);
    return;
  }

  const componentHTML = viewFunction(props);
  ROOT.append(componentHTML);
};

export const navigateTo = (pathname, props = {}) => {
  const queryString = Object.keys(props).length
    ? `?${new URLSearchParams(props)}`
    : "";
  const url = `${window.location.origin}${pathname}${queryString}`;

  window.history.pushState(props, "", url);
  renderView(pathname, props);
};

export const onURLChange = () => {
  const { pathname, search } = window.location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};

export const __TEST__ = {
  get ROOT() {
    return ROOT;
  },
};
export const __TEST2__ = {
  get ROUTES() {
    return ROUTES;
  },
};
