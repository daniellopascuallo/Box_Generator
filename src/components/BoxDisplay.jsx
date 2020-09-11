import React from 'react';

const BoxDisplay = props => {

    const { color, dimension} = props;

    return (
        <div
        className="m-2"
            style={{ width: dimension, height: dimension, backgroundColor: color }}>
        </div>
    );
}

export default BoxDisplay;
