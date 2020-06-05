import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageWrapper from './component/PageWrapper';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About';
import SignIn from './component/SignIn/Login'
import SignUp from './component/SignUp/SignUp';
import SponsorDashboard from './component/Sponsor/SponsorDashboard';
import './style.css';


const App = () => {

    const [color, setColor] = useState('');
    return (
    <div style = {{backgroundColor: color}}>
        <Router>
          <PageWrapper >
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
                 path ='/dashboard'
                 component = {SponsorDashboard}
            />
           </PageWrapper>
       </Router>
    </div>
    )
}

export default App;