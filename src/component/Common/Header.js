import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
            <div>
                <header className="masthead" style = {{ backgroundImage: `url(${props.image})` }}>
                  <div className="container">
                     <div className = 'row'>
                        <div className ='col-md-12'>
                        <div className="masthead-subheading">{props.title}</div>
                            {props.color ? <div className="masthead-heading text-uppercase">{props.subtitle}</div>
                              : <div className="masthead-heading text-uppercase">{props.subtitle}</div>}
                            {props.showButton
                              ? <Link className="btn btn-success btn-xl text-uppercase" id ='btn-link' to = {props.link}> {props.buttonText}</Link> : null
                            }
                        </div>
                     </div>
                 </div>
               </header>
           </div>
);

export default Header;
