import React, {Component} from 'react';

const SymbolPad=props=>{
        return (
            <div>
                <button onClick={props.handlePlus}>+</button>
                <button onClick={props.handleMinus}>-</button>
                <button onClick={props.handleCross}>X</button>
                <button onClick={props.handleDiv}>÷</button>
            </div>
        );
    };

export default SymbolPad;