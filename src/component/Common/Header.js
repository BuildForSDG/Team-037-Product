import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
        return (
            <div>
                <header className="masthead" style = {{backgroundImage: `url(${props.image})`}}>
                  <div className="container">
                     <div className = 'row'>
                        <div className ='col-md-6'>
                        <div className="masthead-subheading">{props.title}</div>
                            {props.color ? <div className="masthead-heading text-uppercase">{props.subtitle}</div> :
                            <div className="masthead-heading text-uppercase">{props.subtitle}</div>}
                            {props.showButton ?
                            <NavLink className="btn btn-success btn-xl text-uppercase" id ='btn-link' to = {props.link}> {props.buttonText}</NavLink> : null
                            }
                        </div>
                     </div>
                 </div>
               </header>
           </div> 
        )
   }

export default Header;
