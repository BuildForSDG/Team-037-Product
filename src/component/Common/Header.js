import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style = {{backgroundImage: `url(${this.props.image})`}}>
                  <div className="container">
                     <div className="masthead-subheading">{this.props.title}</div>
                     <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                     <NavLink className="btn btn-primary btn-xl text-uppercase" to = {this.props.link}> {this.props.buttonText}</NavLink>
                 </div>
               </header>
           </div> 
        )
    }
}

export default Header;
