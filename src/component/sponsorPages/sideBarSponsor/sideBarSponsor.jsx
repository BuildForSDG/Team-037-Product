import React from 'react';
import profileImage from '../../Images/agreement.png';
import { Link } from 'react-router-dom';
import './sideBarSponsor.css';

const SideBarSponsor = () => {
    return (
        <div className="sidebar">
            <center>
                <img src={profileImage} className="profile_image" alt="not working"/>
                <h4>Jessica dove</h4>
            </center>
            <Link to="/sponsorDashboard"><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
            <Link to="/sponsorEditProfile"><i class="fa fa-user" aria-hidden="true"></i><span>Edit Profile</span></Link>
            <Link to="/sponsorEditProfile"><i class="fa fa-id-card" aria-hidden="true"></i><span>Account Details</span></Link>
            <a href="#"><i class="fa fa-book" aria-hidden="true"></i><span>Sponsor History</span></a>
        </div>
    )
}

export default SideBarSponsor;
