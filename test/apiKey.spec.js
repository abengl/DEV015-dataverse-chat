import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

beforeEach(() => {
  localStorage.clear();
});
describe("setApiKey", () => {
  it("should set the API key in localStorage", () => {
    const key = "1234567890";
    setApiKey(key);
    expect(localStorage.getItem("APIKEY")).toEqual(key);
  });

  it("should update the API Key in localStorage", () => {
    const initialApiKey = "spf-jwqfjwqf-123";
    const newApiKey = "a29-ahjsyrhnd983-55";
    setApiKey(initialApiKey);
    setApiKey(newApiKey);
    expect(getApiKey()).toBe(newApiKey);
  });
});

describe("getApiKey", () => {
  it("should get the API key from localStorage", () => {
    const key = "1234567890";
    localStorage.setItem("APIKEY", key);
    expect(getApiKey()).toEqual(key);
  });

  it("should return null if the API key is not set", () => {
    expect(getApiKey()).toBeNull();
  });
});

describe("Tests with mocks", () => {
  let getItemSpy, setItemSpy;

  beforeEach(() => {
    getItemSpy = jest
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => null);
    setItemSpy = jest
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });
  describe("getApiKey", () => {
    it("getApiKey should reach the getItem dependency with valid arguments", () => {
      getApiKey();

      // Esperamos que nuestra función llame a getItem
      expect(getItemSpy).toHaveBeenCalled();

      // Esperamos que se llame a getItem con el argumento APIKEY
      expect(getItemSpy).toHaveBeenCalledWith("APIKEY");
    });
  });

  describe("setApiKey", () => {
    it("setApiKey should reach the setItem dependency with valid arguments", () => {
      const key = "tech-genius-test-key";
      setApiKey(key);

      // Esperamos que nuestra función llame a setItem
      expect(setItemSpy).toHaveBeenCalled();

      // Esperamos que se llame a setItem con el argumento APIKEY y el valor de prueba
      expect(setItemSpy).toHaveBeenCalledWith("APIKEY", key);
    });
  });
});
