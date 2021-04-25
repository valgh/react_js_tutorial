import React, { Component } from 'react';

export default class Counter extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            tags: ['tag1', 'tag2', 'tag3']
        };
        this.style = { 
            fontSize: 35,
            fontWeight: 'bold'
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    formatCount() {
        const { count } = this.state;
        const zeroFormat = <span>Zero</span>
        return count === 0 ? zeroFormat : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    renderList() {
        if (this.state.tags.length === 0) {
            return <p>There are no Tags!</p>
        } else {
            return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
        }
    }

    handleIncrement() {
        this.setState({ count: this.state.count+1 });
    }

    render() { 
        return (  
            <React.Fragment>
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {' '}
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <ul>
                    {this.renderList()}
                </ul>
            </React.Fragment>
        );
    }
}