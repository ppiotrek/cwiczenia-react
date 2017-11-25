import React from 'react'

class Counter extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.state = {
            count: 0
        }
    }

    // dodawanie brzycisku BUTTON
    render() {
        return <div>
            <h1>I have value: {this.state.count}</h1>
            <button>+</button>
            <button>-</button>
        </div>
    }
}

export default Counter
