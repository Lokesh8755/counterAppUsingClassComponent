import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        // Initialize the state
        this.state = {
            counter: 0,
        };
    }

    // Method to increment the counter
    Increment = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    // Method to decrement Counter
    Decrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    render(){
        return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.counter}</p>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
        </div>
        )
    }
}

export default Counter;
