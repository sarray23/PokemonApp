import {GET_POKEMONS} from './actions';

const initialState = {
    pokemons: [],
    offset: 0
};

function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, pokemons: [...state.pokemons, ...action.payload], offset: state.offset};
        default:
            return state;
    }
}

export default pokemonsReducer;
