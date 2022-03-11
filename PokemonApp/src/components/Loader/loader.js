import LoaderKit from 'react-native-loader-kit'
import React from 'react';

const Loader = ({name, color}) => {
    return (
        <LoaderKit style={{width: 50, height: 50, marginLeft: 15}}
                   name={name}
                   size={50}
                   color={color}
        />

    );

}

export default Loader
