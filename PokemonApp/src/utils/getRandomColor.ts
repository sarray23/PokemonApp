import {getRgbaColor} from "./getRgbaColor";

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color   = '#';
    const type = "";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return getRgbaColor(color, type)
};

export {getRandomColor};




