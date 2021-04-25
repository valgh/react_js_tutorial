import React from 'react';

// This is a stateless Functional Component!
// this.props only work in class, so we need to pass props as argument to the function

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000">
                Items in Chart {' '}
                <span className="badge badge-pill badge-secondary">
                    {props.counters}
                </span>
            </a>
        </nav>
    );
}

export default Navbar;