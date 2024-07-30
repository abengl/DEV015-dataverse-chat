import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("setApiKey", () => {
  it("should set the API key in localStorage", () => {
    const key = "1234567890";
    setApiKey(key);
    expect(localStorage.getItem("APIKEY")).toEqual(key);
  });
});

describe("getApiKey", () => {
  it("should get the API key from localStorage", () => {
    const key = "1234567890";
    localStorage.setItem("APIKEY", key);
    expect(getApiKey()).toEqual(key);
  });
});
