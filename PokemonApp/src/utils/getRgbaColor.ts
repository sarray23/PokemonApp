const getRgbaColor = (type: string, typeColor : string) => {
    let color : string;
    if (type.charAt(0) !== "#") color = typeColor;
    else color = type;
    let c : any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
        c = color.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.6' + ')';
    }
    throw new Error('Bad Hex');
};

export {getRgbaColor};
