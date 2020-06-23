import React from 'react';
import './SponsorEditProfile.css';


const EditProfilePage = () => {
    return(
        <div>
            <div className="editProfile"> 
                <div className="editProfile_form">
                    <form action="">
                        <h4>
                            Personal details:
                        </h4>
                        <div className="grid-container">
                            <div>
                                <label>First Name</label>
                                <input type="text" name="firstName"/>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" name="lastName"/>
                            </div>
                            <div>
                                <label>Date Of Birth</label>
                                <input type="text" name="Date Of Birth"/>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" name="PhoneNumber"/>
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" name="Country"/>
                            </div>
                            <div>
                                <label>State</label>
                                <input type="text" name="state"/>
                            </div>
                        </div>

                        <h4>Bank details:</h4>
                        <div className="grid-container">
                            <div>
                                <label>Account Name</label>
                                <input type="text" name="accountName"/>
                            </div>
                            <div>
                                <label>Account Number</label>
                                <input type="tel" name="accountNumber"/>
                            </div>
                            <div>
                                <label>Bank Name</label>
                                <input type="text" name="bankName"/>
                            </div>
                        </div>
                        <div className="updateButton">
                            <button>Update</button>
                        </div>  
                    </form>
                </div>
            </div>
            <div className="accountType">
                <h4>Switch Account Type</h4>
                <div className="accountType_button">
                    <button>Farmer</button>
                    <button>Sponsor</button>
                    <button>Buyer</button>
                </div> 
            </div>
        </div>
    )
}
export default EditProfilePage;
