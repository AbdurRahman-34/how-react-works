import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div style={{border:'2px solid green', margin : '10px'}}>
            <h2>Name : {props.name}</h2>
            <p>So far steps Today : {props.steps}</p>
            <Dail steps = {props.steps}></Dail>
        </div>
    );
};

export default Display;