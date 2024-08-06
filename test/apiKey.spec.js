import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("setApiKey", () => {
  beforeEach(() => {
    localStorage.clear();
  });

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
  beforeEach(() => {
    localStorage.clear();
  });

  it("should get the API key from localStorage", () => {
    const key = "1234567890";
    localStorage.setItem("APIKEY", key);
    expect(getApiKey()).toEqual(key);
  });

  it("should return null if the API key is not set", () => {
    expect(getApiKey()).toBeNull();
  });
});
