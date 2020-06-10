import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About';
import SignIn from './component/SignIn/Login'
import SignUp from './component/SignUp/SignUp';
import './style.css';

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
            </Switch>
       </Router>
    )
}

export default App;