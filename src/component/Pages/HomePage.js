import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import Header from '../Common/Header';
import img1 from '../Images/farmer.jpg';
import SectionA from '../Common/SectionA';
import Products from '../Common/Products';
import Statistics from '../Common/Statistcs';
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';


if (location.search){
  const tokenData = location.search.replace('?token=', '');
  const token = jwtDecode(tokenData);
  localStorage.setItem('EmpowerFarmerUser', JSON.stringify(token));
  window.location.href = '/sponsorDashboard';
}
export class HomePage extends Component {
  render() {
    return (
            <div>
                <Navigation />
                <Header
                title = 'Feed the World'
                subtitle = {
                            <div>
                              <p id ='subheading'>Join the platform and help achieve our<br />
                               goal of Global farming practice</p>
                            </div>}
                image ={img1}
                link = '/SignUp'
                buttonText ='Fund a Farmer'
                showButton = {true}
                />
                <SectionA />
                <Products />
                <Statistics />
                <Footer />
            </div>
    );
  }
}

export default HomePage;
