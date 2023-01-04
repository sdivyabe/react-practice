/* import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // this.state.counter = this.state.counter + 1      directly update the counter
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => { 
        //     console.log("Callback value = ", this.state.count) 
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log("count = ", this.state.count)       //value is always 0
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <>
                <div>Count = {this.state.count}</div>
                <button onClick={() => { this.incrementFive() }}>Increment</button>
            </>
        )
    }
}

export default Counter */
 
import React, { useState } from "react";

const Counter = () => {
    const [count, setState] = useState(0);
    const increment = () => {
        setState(count + 1)
    }
    const incrementFive = () => {
        increment()
        increment()
        increment()
        increment()
        increment()
    }
    return (
        <>
            <h4>Count = {count}</h4>
            {/* <button onClick={() => { incrementFive() }}>Increment</button> */}
            <button onClick={() => setState(count +1)}>Increment</button>
        </>
    );
}

export default Counter;
