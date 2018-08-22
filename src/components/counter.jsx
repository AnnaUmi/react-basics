import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0
    }
    /*  constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this)
     } */
    handleIncrement = product => {
        console.log(product)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <span className={this.getBangeClasses}>{this.formatCount()}</span>
                <button onClick={(product) => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count
    }
    getBangeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }

}