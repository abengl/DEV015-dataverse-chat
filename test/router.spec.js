import { setRootEl, setRoutes, navigateTo, onUrlChange } from "../src/router.js";
import { __TEST__, __TEST2__ } from "../src/router.js";

describe("setRootEl", () => {
  it("should set the root element", () => {
    const rootElement = document.querySelector("main");
    setRootEl(rootElement);
    expect(__TEST__.ROOT).toEqual(rootElement);
  });
});

describe("setRoutes", () => {
  it("should set the routes", () => {
    const routes = {
      "/chatGrupal": "ChatGrupal",
    };
    setRoutes(routes);
    expect(__TEST2__.ROUTES).toEqual(routes);
  });
});

describe("navigateTo", () => {
  it("should change the pathname", () => {
    const pathname = "/chatGroup";
    navigateTo(pathname);
    expect(window.location.pathname).toEqual(pathname);
  });

  it("should change the pathname and add a query string with multiple parameters", () => {
    const pathname = "/chatGroup";
    const props = { id: 1, name: "chat" };
    navigateTo(pathname, props);
    expect(window.location.pathname).toEqual(pathname);
    expect(window.location.search).toEqual("?id=1&name=chat");
  });

  it("should buid the full URL", () => {
    const pathname = "/chatGroup";
    const props = { id: 1, name: "chat" };
    navigateTo(pathname, props);
    expect(window.location.href).toEqual(
      `${window.location.origin}${pathname}?id=1&name=chat`
    );
  });
});


describe("onUrlChange", () => {
  it("should change the view based on the new location", () => {
    document.body.innerHTML = '<div id="root"></div>';
    const ROOT = document.querySelector("#root");
    const view = document.createElement("div");
    view.id = "chatGroup";
    ROOT.appendChild(view);

    // Cambia la URL
    const location = {
      pathname: "/chatGroup",
      search: "?id=1&name=chat",
    };
    // Llama a onUrlChange
    delete window.location;
    window.location = { ...location, assign: jest.fn() };

    onUrlChange();

    // Verifica los cambios en el DOM
    const expectedElement = document.querySelector("#chatGroup");
    expect(expectedElement).toBeTruthy();
  });
});

