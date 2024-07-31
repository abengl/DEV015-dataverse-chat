import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages) => {
  const APIKEY = getApiKey();
  const url = "https://api.openai.com/v1/chat/completions";

  if (!APIKEY) {
    return Promise.reject(
      new Error(
        "API KEY no ha sido encontrada, por favor ingrese una API KEY desde el botón Api."
      )
    );
  }
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: messages,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error en la petición a OpenAI: ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error en la petición a OpenAI: ${error}`);
      throw error;
    });
};
