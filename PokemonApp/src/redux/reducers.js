import { GET_POKEMONS} from './actions';

const initialState = {
  pokemons: [],
};

function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
     case GET_POKEMONS:
      return {...state, pokemons: action.payload, limit: state.limit};
    default:
      return state;
  }
}

export default pokemonsReducer;
