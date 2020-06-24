import React from 'react';
import {useHistory } from 'react-router-dom';
import NavbarSponsor from '../Navbar/navbar';
import SideBarSponsor from '../sideBarSponsor/sideBarSponsor';
import SponsorEditProfile from './SponsorEditProfile';
import './SponsorEditProfileHome.css';

const SponsorEditProfileHome = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('EmpowerFarmerUser'));
    if (!user) {
        history.push('/');
    }
    return(
        <div className="sponsorHome">
            <NavbarSponsor />
            <SideBarSponsor sponsorUser = { user } />
            <SponsorEditProfile />
        </div>
    )
}
export default SponsorEditProfileHome;
