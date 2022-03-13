import LoaderKit from 'react-native-loader-kit'
import React from 'react';

interface Props {
    name: string,
    color: string,
}

const Loader: React.FC<Props> = ({name, color}) => {
    return (
        <LoaderKit style={{width: 50, height: 50, marginLeft: 15}}
            name={name}
            size={50}
            color={color}
        />

    );

}

export default Loader
