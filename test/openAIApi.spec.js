/* eslint-disable no-undef */
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import { getApiKey } from '../src/lib/apiKey.js';

// Mocking the getApiKey function
jest.mock('../src/lib/apiKey', () => ({
  getApiKey: jest.fn(),
}));

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    global.fetch = jest.fn();
  });

  it('should reject with an error if API key is not present', () => {
    getApiKey.mockReturnValue(null); // Mock getApiKey to return null

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(
          new Error('API KEY no ha sido encontrada, por favor ingrese una API KEY desde el botón Api.')
        );
      });
  });

  it('should handle fetch errors', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockRejectedValue(new Error('Network error')); // Simulate a fetch error

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Network error'));
      });
  });

  it('should handle 400 Bad Request response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 400,
      statusText: 'Bad Request'
    }); // Simulate a 400 Bad Request response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Solicitud incorrecta: Bad Request'));
      });
  });

  it('should handle 401 Unauthorized response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 401,
      statusText: 'Unauthorized'
    }); // Simulate a 401 Unauthorized response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('No autorizado: Unauthorized'));
      });
  });

  it('should handle 403 Forbidden response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden'
    }); // Simulate a 403 Forbidden response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Prohibido: Forbidden'));
      });
  });

  it('should handle 404 Not Found response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    }); // Simulate a 404 Not Found response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('No encontrado: Not Found'));
      });
  });

  it('should handle 429 Too Many Requests response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests'
    }); // Simulate a 429 Too Many Requests response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Demasiadas solicitudes: Too Many Requests'));
      });
  });

  it('should handle 500 Internal Server Error response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error'
    }); // Simulate a 500 Internal Server Error response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Error interno del servidor: Internal Server Error'));
      });
  });

  it('should handle 502 Bad Gateway response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 502,
      statusText: 'Bad Gateway'
    }); // Simulate a 502 Bad Gateway response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Puerta de enlace incorrecta: Bad Gateway'));
      });
  });

  it('should handle 503 Service Unavailable response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 503,
      statusText: 'Service Unavailable'
    }); // Simulate a 503 Service Unavailable response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Servicio no disponible: Service Unavailable'));
      });
  });

  it('should handle 504 Gateway Timeout response', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: false,
      status: 504,
      statusText: 'Gateway Timeout'
    }); // Simulate a 504 Gateway Timeout response

    return communicateWithOpenAI([])
      .catch(error => {
        expect(error).toEqual(new Error('Tiempo de espera de la puerta de enlace: Gateway Timeout'));
      });
  });

  it('should resolve with JSON data if fetch is successful', () => {
    getApiKey.mockReturnValue('valid-api-key'); // Mock getApiKey to return a valid API key
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ success: true })
    }); // Simulate a successful fetch response

    return communicateWithOpenAI([])
      .then(data => {
        expect(data).toEqual({ success: true });
      });
  });
});
