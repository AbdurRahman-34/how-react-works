import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h2>Device Name: {props.name}</h2>
            <p>Price : {props.price}</p>
        </div>
    );
};

export default Device;