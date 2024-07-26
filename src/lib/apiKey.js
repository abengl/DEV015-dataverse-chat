export const getApiKey = () => {
  return localStorage.getItem("APIKEY");
};

export const setApiKey = (key) => {
  localStorage.setItem("APIKEY", key);
};
