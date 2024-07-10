let ROUTES = {}; // Stores routes of the SPA

let ROOT;

export const setRootEl = (el) => {
  ROOT = el; // Element where the views will be rendered
  //console.log(ROOT);

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  ROUTES = routes; // Routes of the application
  //console.log(ROUTES);
};

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const urlParams = new URLSearchParams(queryString);
  //console.log("type: " + typeof urlParams);
  //console.log("urlParams: " + urlParams);
  // convert URLSearchParams to an object
  // return the object
  return Object.fromEntries(urlParams);
};
//props -> search params
const renderView = (pathname, props = {}) => {
  // clear the root element
  ROOT.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  const viewFunction = ROUTES[pathname];
  // viewFunction = ROUTES["/"];
  // viewFunction = Home();

  if (!viewFunction) {
    navigateTo("/errorRutas", props);
    return;
  }
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const componentHTML = viewFunction(props);
  // componentHTML = Home();
  // componentHTML = <div>
  ROOT.append(componentHTML);
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props
  const queryString = Object.keys(props).length
    ? `?${new URLSearchParams(props)}`
    : "";
  // console.log("Object.keys(props): " + Object.keys(props));
  // console.log("Object.keys(props).length: " + Object.keys(props).length);
  // console.log("new URLSearchParams(props): " + new URLSearchParams(props));
  const url = `${window.location.origin}${pathname}${queryString}`;

  window.history.pushState(props, "", url);
  renderView(pathname, props);
};

export const onURLChange = () => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  const { pathname, search } = window.location;
  //console.log(pathname);
  //console.log(search);
  const props = queryStringToObject(search);
  //console.log(props);
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

export const __TEST3__ = { queryStringToObject, renderView };
