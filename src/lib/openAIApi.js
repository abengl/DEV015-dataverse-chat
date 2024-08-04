import { getApiKey } from "./apiKey.js";

/**
 * communicateWithOpenAI permite enviar mensajes a OpenAI de forma asíncrona manejando su respuesta o errores.
 * @param {Array} messages - arreglo de mensajes que se enviarán a la API de OpenAI.
 * @returns un objeto json o un objeto error según corresponda.
 */
export const communicateWithOpenAI = (messages) => {
  // Obtenemos la API KEY del local storage del navegador
  const APIKEY = getApiKey();
  // Declaramos la URL del endpoint de OpenAI usada para las solicitudes para completar los chats
  const url = "https://api.openai.com/v1/chat/completions";

  //Si la APIKEY es null se rechaza la promesa con un error. Este error es capturado con catch.
  if (!APIKEY) {
    return Promise.reject(
      //Usa Promise.reject para devolver explícitamente promesas que ya se encuentran en estado de rechazo, especialmente al principio
      new Error(
        "API KEY no ha sido encontrada, por favor ingrese una API KEY desde el botón Api."
      )
    );
  }
  // Si la APIKEY no es null se retorna la promesa resultante de fetch. Fetch hace una solicitud HTTP a la URL especificada.
  return fetch(url, {
    method: "POST", //método HTTP usado en el request, post envía datos.
    headers: {
      //encabezados HTTP que se envían con el request
      Authorization: `Bearer ${APIKEY}`, //bearer indica el envío de un token de acceso.
      "Content-Type": "application/json", //el cuerpo del request es en formato JSON.
    },
    body: JSON.stringify({
      //Cuerpo del request, el método stringify convierte el objeto en un JSON
      model: "gpt-4", //Modelo OpenAI a usar
      messages: messages, //Array de mensajes del chat
    }),
  })
    .then((response) => {
      //Método que se llama cuando la promesa devuelta por fetch se resuelve exitosamente
      if (!response.ok) {
        //Verifica si la respuesta no es exitosa (el código de estado HTTP no está en el rango 200-299).
        switch (response.status) {
        case 400:
          throw new Error("Solicitud incorrecta: " + response.statusText);
        case 401:
          throw new Error("No autorizado: " + response.statusText);
        case 403:
          throw new Error("Prohibido: " + response.statusText);
        case 404:
          throw new Error("No encontrado: " + response.statusText);
        case 429:
          throw new Error("Demasiadas solicitudes: " + response.statusText);
        case 500:
          throw new Error("Error interno del servidor: " + response.statusText);
        case 502:
          throw new Error("Puerta de enlace incorrecta: " + response.statusText);
        case 503:
          throw new Error("Servicio no disponible: " + response.statusText);
        case 504:
          throw new Error(
            "Tiempo de espera de la puerta de enlace: " + response.statusText);
        default:
          throw new Error(
            "Error en la petición a OpenAI: " + response.statusText);
        }
      }
      return response.json(); //Método que convierte la respuesta de la solicitud de un objeto JSON a un objeto JS
    })
    .catch((error) => {
      //Método que se llama si ocurre un error en cualquier parte de la promesa (incluyendo en then).
      throw error; //detiene la ejecución y retorna el error. Usa throw new Error para lanzar errores en el flujo de promesas que ya están en ejecución.
    });
};

/* Tipos de Errores y sus Códigos de Estado HTTP
------------------------------------------------
Errores del Cliente (4xx):
-400 Bad Request: La solicitud tiene una sintaxis incorrecta o no puede ser procesada.
-401 Unauthorized: La solicitud carece de credenciales de autenticación válidas.
-403 Forbidden: La solicitud es válida, pero el servidor se niega a responder.
-404 Not Found: El recurso solicitado no se encontró en el servidor.
-429 Too Many Requests: Se han realizado demasiadas solicitudes en un corto período (rata limit).

Errores del Servidor (5xx):
-500 Internal Server Error: El servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
-502 Bad Gateway: El servidor, actuando como una puerta de enlace o proxy, recibió una respuesta inválida del servidor ascendente.
-503 Service Unavailable: El servidor no está disponible actualmente (por ejemplo, por mantenimiento o sobrecarga).
-504 Gateway Timeout: El servidor, actuando como una puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor ascendente.
*/
