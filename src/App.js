import React, {Component} from 'react';
import Circle from "./circle/circle";
import './App.css';


function range() {
    const array = [];
    for (let i = 5; i <= 36; i++) {
        array.push(i);
    }
    const five = [];
    for (let i = 0; i <= 4; i++) {
        five.push(array[Math.floor(Math.random() * array.length)]);
    }
    five.sort(function (a, b) {
        return a - b
    });
    const rand = Math.floor(Math.random() * five.length);
    return five[rand];
}

class App extends Component {
    state = {
        numbers: [
            {number: range()},
            {number: range()},
            {number: range()},
            {number: range()},
            {number: range()},
        ]
    };
    handleChangeNumber = () =>
    {
        this.setState({numbers: [
                {number: range()},
                {number: range()},
                {number: range()},
                {number: range()},
                {number: range()},
            ]});
    };
    render()
    {
        return (
            <div className="App">
                <div>
                    <button onClick={this.handleChangeNumber}>range</button>
                    <Circle number={this.state.numbers[0].number}/>
                    <Circle number={this.state.numbers[1].number}/>
                    <Circle number={this.state.numbers[2].number}/>
                    <Circle number={this.state.numbers[3].number}/>
                    <Circle number={this.state.numbers[4].number}/>
                </div>
            </div>
        );
    }
}


export default App;
