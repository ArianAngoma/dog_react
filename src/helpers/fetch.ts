const baseUrl = 'https://dog.ceo/api';

export const fetchBreeds = (method = 'GET') => {
  const url = `${baseUrl}/breeds/list/all`;
  return fetch(url);
};

export const fetchSubBreeds = (breed: string, method = 'GET') => {
  const url = `${baseUrl}/${breed}/hound/list`;
  return fetch(url);
};
