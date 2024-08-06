import {
  setRootEl,
  setRoutes,
  navigateTo,
  onUrlChange,
} from "../src/router.js";

let ROOT;

describe("Test on router functions", () => {
  beforeEach(() => {
    // element root of the test
    ROOT = document.createElement("div");
    document.body.appendChild(ROOT);
    setRootEl(ROOT);
  });

  afterEach(() => {
    document.body.removeChild(ROOT);
    ROOT = null;
  });

  describe("navigateTo", () => {
    it("should call renderView with argument pathname and props and render the corresponding view", () => {
      const mockViewChat = jest.fn(() => {
        const viewChat = document.createElement("div");
        viewChat.innerHTML = `
      <div>
        <h1>Chatea con nosotros</h1>
      </div>`;
        return { view: viewChat, getElementsAndEvents: jest.fn() };
      });

      setRoutes({ "/chat": mockViewChat });

      const pathname = "/chat";
      const props = { id: 1, name: "chat" };
      navigateTo(pathname, props);
      expect(mockViewChat).toBeTruthy();
      expect(ROOT.innerHTML).toContain("<div>");
    });

    it("should call renderView with argument pathname and props and render the 404 view", () => {
      const mockView404 = jest.fn(() => {
        const view404 = document.createElement("div");
        view404.innerHTML = `
      <div>
        <h1>error 404</h1>
      </div>`;
        return { view: view404, getElementsAndEvents: jest.fn() };
      });

      setRoutes({ "/404": mockView404 });
      const pathname = "/chat";
      const props = { id: 1, name: "chat" };
      navigateTo(pathname, props);
      expect(mockView404).toBeTruthy();
      expect(ROOT.innerHTML).toContain("error 404");
    });

    it("should call renderView with argument pathname and props and not render the view without ROOT", () => {
      setRootEl(null);
      setRoutes({ "/chat": jest.fn() });

      const pathname = "/chat";
      const props = { id: 1, name: "chat" };
      expect(navigateTo(pathname, props)).toEqual(undefined);
    });
  });

  describe("onUrlChange", () => {
    it("should change the view based on the new location", () => {
      const mockViewChat = jest.fn(() => {
        const viewChat = document.createElement("div");
        viewChat.id = "chatGroup";
        viewChat.innerHTML = `
          <h1>Chatea con nosotros</h1>`;
        return { view: viewChat, getElementsAndEvents: jest.fn() };
      });
  
      setRootEl(ROOT);
      setRoutes({ "/chatGroup": mockViewChat });
  
      const location = {
        pathname: "/chatGroup",
        search: "?id=1&name=chat",
      };

      // mock of window.location
      delete window.location;
      window.location = { ...location, assign: jest.fn() };
  
      onUrlChange();

      // change of DOM
      expect(mockViewChat).toHaveBeenCalled();
      expect(ROOT.innerHTML).toContain("h1");
    });
  });
});
