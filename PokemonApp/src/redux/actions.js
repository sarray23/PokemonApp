import axios from 'axios';

export const GET_POKEMONS = 'FETCH_POKEMONS';
//url
export const getPokemons = (offset) => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset="+ offset;
    try {
        return async dispatch => {
            const res = await axios.get(URL);
            if (res.data) {
                let newData = [];
                let results = res.data.results;
                for (let i = 0; i < results.length; i++) {
                    const rest = await axios.get(results[i].url);
                    newData.push(rest.data)
                }

                res.data.results = newData
                console.log("res.data.",res.data)
                dispatch({
                    type: GET_POKEMONS,
                    payload: newData,
                });
            } else {
            }
        }
    } catch (error) {
    }
};


