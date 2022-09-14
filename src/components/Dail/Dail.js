import React from 'react';

const Dail = (props) => {
    return (
        <div style={{border:'2px solid yellow', margin : '10px'}}>
            <h2>Dail Name : Hero Dail</h2>
            <p><p>Dail Num : {props.steps}</p></p>
        </div>
    );
};

export default Dail;