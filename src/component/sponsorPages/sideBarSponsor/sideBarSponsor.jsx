import React from 'react';
import { Link } from 'react-router-dom';
import imageProfile from '../../Images/user.png';
import './sideBarSponsor.css';
import { SignOut } from '../../../api/auth';

const SideBarSponsor = ({ sponsorUser: { imageUrl, firstName, lastName } }) => {
  return (
        <div className="sidebar">
            <center>
                <img src={imageUrl ? imageUrl : imageProfile} className="profile_image" alt="not working"/>
                <h4>{ firstName} { lastName }</h4>
            </center>
            <Link to="/sponsorDashboard"><i className="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
            <Link to="/sponsorEditProfile"><i className="fa fa-user" aria-hidden="true"></i><span>Edit Profile</span></Link>
            <Link to="/sponsorEditProfile"><i className="fa fa-id-card" aria-hidden="true"></i><span>Account Details</span></Link>
            <a href="#"><i className="fa fa-book" aria-hidden="true"></i><span>Sponsor History</span></a>
            <Link to="/login" onClick={ SignOut }><i className="fa fa-window-close" aria-hidden="true"></i><span>Log Out</span></Link>
        </div>
  );
};

export default SideBarSponsor;
