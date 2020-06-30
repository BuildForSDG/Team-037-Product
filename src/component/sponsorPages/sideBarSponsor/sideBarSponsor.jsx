import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import imageProfile from '../../Images/user.png';
import editIcon from '../../Images/pencil.svg';
import './sideBarSponsor.css';
import { SignOut, updateUser } from '../../../api/auth';

const SideBarSponsor = ({ sponsorUser: { imageUrl, firstName, lastName, token } }) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const updateUserImageUrl = async (values, userToken) => {
    try {
      const userDataType = await updateUser(values, userToken);
      const { status, data } = userDataType;
      if (status == 200) {
        localStorage.setItem('EmpowerFarmerUser', JSON.stringify(data));
        return history.push('/sponsorDashboard');
      }
    } catch (e) {
      await setTimeout(() => {
        setError(true);
        setAlertMessage(e);
      }, 500);
    }
  };
  const handleUserImageUrl = (event) => {
    const [imgFile] = event.target.files;
    updateUserImageUrl(imgFile, token);
  };
  return (
    <div className="sidebar">
            <center>
                { error ? <div className="error">{alertMessage} </div> : '' }
                <div className="image-section">
                  <div className="image-profile">
                    <img src={imageUrl || imageProfile} className="profile_image" alt="not working"/>
                  </div>
                  <label htmlFor="upload-photo">
                    <div className="editIcon">
                      <img src={editIcon} alt="editIcon" ></img>
                    </div>
                  </label>
                  <input className="file-input" type="file" name="photo" id="upload-photo" onChange={ handleUserImageUrl }/>
                </div>
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
