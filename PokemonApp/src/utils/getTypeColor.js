import {getRgbaColor} from "./getRgbaColor";

import {POKEMON_TYPE_COLORS} from '../constants';

const getTypeColor = (type) => {
    const typeColor = (POKEMON_TYPE_COLORS[type.toLowerCase()]);
    return getRgbaColor(type, typeColor)
}

export {getTypeColor};
