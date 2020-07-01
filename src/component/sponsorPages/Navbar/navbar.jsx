import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const NavbarSponsor = () => {
    return (
        <div>
            {/* --header area start -- */}
            <header>
                <div className="left_area">
                 <h2><Link to = '/home'>Empower <span>Farmer</span></Link></h2>
                </div>
                <div className="right_area">
                    <Link to="/donate" className="donate_btn">Donates</Link>
                </div>
            </header>
        </div>
    )
}

export default NavbarSponsor;