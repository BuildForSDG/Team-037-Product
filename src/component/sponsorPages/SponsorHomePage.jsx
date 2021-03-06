import React from 'react';
import './homePageSponsor.css';
import {useHistory} from 'react-router-dom';
import NavbarSponsor from './Navbar/navbar'
import SideBarSponsor  from './sideBarSponsor/sideBarSponsor';
import Cards from './card/card';

const SponsorHomePage = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('EmpowerFarmerUser'));
    if (!user) {
        history.push('/');
    }
    return(
        <div className="sponsor_dashboard">
            <NavbarSponsor />
            <div className="sponsor_body">
                <SideBarSponsor sponsorUser = { user } />
                <Cards />
            </div>
        </div>
    )
}
export default SponsorHomePage;
