import axios from 'axios';
import{Pokemon} from "../types/pokemon";

export const GET_POKEMONS = 'FETCH_POKEMONS';

export const getPokemons = (offset : number) => {

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset="+ offset;

    try {
        return async (dispatch: (arg0: { type: string; payload: Array<Pokemon> }) => void) => {
            const res = await axios.get(URL);
            if (res.data) {
                const newData = [];
                const results = res.data.results;
                for (let i = 0; i < results.length; i++) {
                    const rest = await axios.get(results[i].url);
                    newData.push(rest.data)
                }
                res.data.results = newData
                dispatch({
                    type: GET_POKEMONS,
                    payload: newData,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
};


