const baseUrl = 'https://dog.ceo/api';

export const fetchBreeds = (method = 'GET') => {
  const url = `${baseUrl}/breeds/list/all`;
  return fetch(url);
};

export const fetchImageDog = (endpoint: string, method = 'GET') => {
  const url = `${baseUrl}/breed${endpoint}images/random/10`;
  return fetch(url);
};
