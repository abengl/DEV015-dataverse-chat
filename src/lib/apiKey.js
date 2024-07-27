export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
};

export const setApiKey = (key) => {
  window.localStorage.setItem("apiKey", key);
};