import {getRgbaColor} from "./getRgbaColor";

const getRandomColor= () => {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return getRgbaColor (color,',0.5')

 };

export  {getRandomColor};




