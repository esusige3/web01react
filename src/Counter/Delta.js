import React, {Component} from 'react';
const Delta = props=>{
        return (
                <div>
                    <input id='inputDisplay' value={props.delta} onChange={props.handleChange}/>
                </div>

        );
    };

export default Delta;