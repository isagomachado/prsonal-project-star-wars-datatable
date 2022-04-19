const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsApi = async () => {
  const response = await fetch(ENDPOINT);
  const responseData = await response.json();

  return responseData;
};

export default fetchPlanetsApi;
