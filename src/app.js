import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageWrapper from './component/PageWrapper';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About';
import SignIn from './component/SignIn/Login'
import SignUp from './component/SignUp/SignUp';
import './style.css';

const App = () => {
    
    return (
       
        <Router>
          <PageWrapper>
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
           </PageWrapper>
       </Router>

    )
}

export default App;