import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageWrapper from './component/PageWrapper';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About';
import './style.css';
import Login from './component/SignIn/Login';

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
                path = '/login'
                component = {Login}
            />
           </PageWrapper>
       </Router>
    )
}

export default App;
