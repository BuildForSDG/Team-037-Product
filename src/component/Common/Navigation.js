import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <NavLink className="navbar-brand" to="/"><span id='nav-logo'>Empower</span>Farmers</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/about">About Us</NavLink>
                    </li>
                </ul>
                <ul className='nav navbar-nav navbar-right navpadding '>
                    <li><NavLink className='nav-link bg-success px-3 linkcol mr-md-3' to="/signup">Sign Up</NavLink></li>
                    <li><NavLink className='nav-link bg-success px-3 linkcol mr-md-3' to="/login">Login</NavLink></li>
                    <li><NavLink className='nav-link bg-success px-3 linkcol mr-md-3' to="/donate">Donate</NavLink></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Navigation;
