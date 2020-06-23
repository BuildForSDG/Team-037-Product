import React from 'react';
import './navbar.css';

const NavbarSponsor = () => {
    return (
        <div>
            {/* --header area start -- */}
            <header>
                <div className="left_area">
                 <h2>Empower <span>Farmer</span></h2>
                </div>
                <div className="right_area">
                    <a href="#" className="donate_btn">Donates</a>
                </div>
            </header>
        </div>
    )
}

export default NavbarSponsor;