import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <h2 className="navbar-text">Redux</h2>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-items">
                        <li className="navbar-item">Home</li> 
                        <li className="navbar-item">About</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
