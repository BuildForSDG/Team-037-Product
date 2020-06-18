import React, { Component } from 'react';
import Header from '../Common/Header';
import Navigation from '../Common/Navigation';
import img from '../Images/About/about_home.jpg';
import About1 from '../About/About1';
import Team from '../About/Team';
import Footer from '../Common/Footer';

export class About extends Component {
  render() {
    return (
            <div>
                <Navigation />
                <Header
                   image = {img}
                   showButton = {false}
                   subtitle = {
                       <div>
                            <p className ='about-page'>How Teams <br />
                            Help to empower farmer</p>
                       </div>
                     }
                   color = {true}
                />
                <About1 />
                <Team />
                <Footer />
            </div>
    );
  }
}

export default About;
