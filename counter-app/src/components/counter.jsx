import React, { Component } from 'react';

export default class Counter extends Component {  

    constructor(props) {
        super(props);
        this.style = { 
            fontSize: 20,
            fontWeight: 'bold'
        };
    }

    formatCount() {
        const zeroFormat = <span>Zero</span>
        return this.props.counter.value === 0 ? zeroFormat : this.props.counter.value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }


    render() { 
        return (  
            <React.Fragment>
                <h4>ITEM #{this.props.counter.id}</h4>
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {' '}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }
}