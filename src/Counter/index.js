import React, {Component} from 'react';
import './counter.scss';
import './Delta'
import Delta from "./Delta";

import './SymbolPad'
import SymbolPad from "./SymbolPad";

class Counter extends Component {

    //가상 DOM?
    //메모리를 감시하고 변경이 감지되면 render()를 다시 호출해서 리 드로우
    //메모리에 state가 올라감...
    state = {
        value: 0,
        delta: 0
    };

    render() {
        let {value, delta} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <Delta delta={delta} handleChange={this.handleChange}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleCross}>X</button>
                <button onClick={this.handleDiv}>÷</button>


            </div>
        );
    }

    clearClick = () => this.setState({
        value: this.state.value = 0
    });
    numpadClick = (num) => this.setState({
        delta: this.state.delta = parseInt(num)
    });

    handleChange = event => this.setState({
        delta: parseInt(event.target.value)
    });

    handlePlus = () =>
        this.setState({
            value: this.state.value + this.state.delta

        });


    handleMinus = () =>
        this.setState({
            value: this.state.value - this.state.delta

        });

    handleCross = ()=>
        this.setState({
            value: this.state.value * this.state.delta
        });
    handleDiv = ()=>this.setState({
        value:this.state.value / this.state.delta
    });
}

export default Counter;