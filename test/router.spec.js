import { setRootEl, setRoutes } from "../src/router.js";
import { __TEST__, __TEST2__, __TEST3__ } from "../src/router.js";

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
  const { queryStringToObject } = __TEST3__;
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
  const { renderView } = __TEST3__;
  let ROOT;

  beforeEach(() => {
    ROOT = document.getElementById("root");
    ROOT.innerHTML = "";
    setRootEl(ROOT);
  });

  it("should render the view for the pathname", () => {
    const rootElement = document.querySelector("#root");
    const view = jest.fn();
    const routes = {
      "/": view,
    };
    setRootEl(rootElement);
    setRoutes(routes);
    renderView("/");
    expect(view).toHaveBeenCalled();
  });
});
