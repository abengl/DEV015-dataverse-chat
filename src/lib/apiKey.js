export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const APIKEY = localStorage.getItem("APIKEY");
  console.log("get key: ", APIKEY);
  return APIKEY;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  console.log("set key: ", key);
  localStorage.setItem("APIKEY", key);
};
