import React, { useEffect } from 'react';
import { useState } from 'react';
import Display from '../../Display/Display';

const Watch = () => {
    const [steps, setSteps]   = useState(0)
    const incressSteps = () => { 
        setSteps(steps + 1)
    }

    useEffect(() => {
        console.log("Hello");
    },[])
    return (
        <div style={{border : '5px solid blue', margin : '20px'}}>
            <h2>This is My Smart Watch</h2>
            <h3>My Current Steps : {steps}</h3>
            <button onClick={incressSteps}>Runing ........</button>
            <Display name = {"Black-Bags"} steps = {steps}></Display>
        </div>
    );
};

export default Watch;