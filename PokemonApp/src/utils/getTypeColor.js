import { POKEMON_TYPE_COLORS } from '../constants';

const getTypeColor = (type) => {
   return (POKEMON_TYPE_COLORS[type.toLowerCase()]);
}

export  {getTypeColor};
