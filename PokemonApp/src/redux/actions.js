import axios from 'axios';

export const GET_POKEMONS = 'FETCH_POKEMONS';
//url
const URL = "https://pokeapi.co/api/v2/pokemon?offset=0"+"&limit=";

export const getPokemons= (limit) => {
  try {
    return async dispatch => {
      const res = await axios.get(URL+limit);

      if (res.data) {
      let newData = [];
      let results = res.data.results;
      for(let i=0; i<results.length; i++)
      {
         const rest = await axios.get(results[i].url);
         newData.push(rest.data)
      }

        dispatch({
          type: GET_POKEMONS,
          payload: newData,
        });
      } else {
      }
    };
  } catch (error) {
  }
};



