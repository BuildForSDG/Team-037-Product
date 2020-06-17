import React from 'react';
import {useHistory} from 'react-router-dom';
import './confirmation.css';
import iconImage from '../Images/mail.svg';


const confirmationPage = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('EmpowerFarmerUser'));
    if (!user) {
        history.push('/');
    }
    const { email } = user;
    return(
        <div>
            <div className="header">
                <h1><span>Empower</span>Farmer</h1>
            </div>
            <div className="confirmation_section">
                <div className="confirmation_head">
                    <img src={iconImage} alt="icon-image"/>
                    <div className="font-confirm">
                        <h6>Thanks for Registering</h6>
                    </div> 
                </div>
                <div className="confirmation_body">
                <p>We've emailed a confirmation link to { email }</p>
                    <p>Click on the link to verify your account </p>
                </div>
            </div>
        </div>
    )
}
export default confirmationPage;
