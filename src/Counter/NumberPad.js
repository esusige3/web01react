import React, {Component} from 'react';

const NumberPad =props=>{
        return (
            <div>
                <div>

                    <button>2</button>
                    <button>3</button>
                </div>
                <div>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <button >0</button>
                <button onClick={props.clearClick}>C</button>
            </div>

        );
    }


export default NumberPad;