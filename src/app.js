import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About';
import SignIn from './component/SignIn/Login'
import SignUp from './component/SignUp/SignUp';
import './style.css';
import SponsorHomePage from './component/sponsorPages/SponsorHomePage';
import SponsorEditProfile from './component/sponsorPages/EditProfile/SponsorEditProfileHome';
import confirmationPage from './component/confirmationPage/confirmation';
import VerifyStatus from './component/confirmationPage/VerifyStatus';

const App = () => {
    
    return (
       
        <Router>
            <Switch>
                <Route 
                    path = '/' 
                    exact
                    component = {HomePage}
                />
                <Route 
                    path ='/about'
                    component = {About}
                />
                <Route 
                    path ='/login'
                    component = {SignIn}
                />
                <Route
                    path ='/signup'
                    component = {SignUp}
                />
                <Route
                    path ='/sponsorDashboard'
                    component = {SponsorHomePage}
                />
                <Route
                    path ='/sponsorEditProfile'
                    component = {SponsorEditProfile}
                />
                <Route
                    path ='/confirmationPage'
                    exact
                    component = { confirmationPage }
                />
                 <Route
                    path ='/verifyStatus'
                    component = { VerifyStatus }
                />
            </Switch>
       </Router>
    )
}

export default App;