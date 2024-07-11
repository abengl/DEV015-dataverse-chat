import { setRootEl, setRoutes, queryStringToObject, renderView } from "../src/router.js";
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

describe("queryStringToObject", () => {
  it("should convert a query string to an object", () => {
    const queryString = "?name=John&age=30";
    const result = queryStringToObject(queryString);
    expect(result).toEqual({ name: "John", age: "30" });
  });

  it("should return an empty object if the query string is empty", () => {
    const queryString = "";
    const result = queryStringToObject(queryString);
    expect(result).toEqual({});
  });
});

describe("renderView", () => {
  let ROOT;

  beforeEach(() => {
    document.body.innerHTML = '<main id="root"></main>';
    ROOT = document.querySelector("#root");
  });

  it("should call the function for the pathname", () => {
    const view = jest.fn();
    const routes = {
      "/": view,
    };

    setRootEl(ROOT);
    setRoutes(routes);
    renderView("/");
    expect(view).toHaveBeenCalled();
  });

  it("should call the function navigateTo when routes undefined", () => {
    const viewError = jest.fn();
    const routes = {
      "/errorRutas": viewError
    };

    setRootEl(ROOT);
    setRoutes(routes);
    renderView("/admin");
    expect(viewError).toHaveBeenCalled();
  });

  it("should update the view element", () => {
    const view = jest.fn(() => {
      const el = document.createElement("div");
      el.id = "home";
      return el;
    });
    const routes = {
      "/": view,
    };

    setRootEl(ROOT);
    setRoutes(routes);
    renderView("/");
    expect(ROOT.querySelector("#home")).toBeTruthy();
  });
});

// describe("navigateTo", () => { 

// });