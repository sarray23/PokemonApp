import {GET_POKEMONS} from './actions';

const initialState = {
    pokemons: [],
    offset: 0
};

function pokemonsReducer(state = initialState, action) {
    let tabPokemons = (state.pokemons).concat(action.payload)
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, pokemons: tabPokemons, offset: state.offset};
        default:
            return state;
    }
}

export default pokemonsReducer;
