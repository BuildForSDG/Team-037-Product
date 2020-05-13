import React, { Component } from 'react';
import Header from '../Common/Header';
import img from '../Images/About/about_home.jpg';
import About1 from '../About/About1';
import Team from '../About/Team';
import Footer from '../Common/Footer';

export class About extends Component {
    render() {
        return (
            <div>
                <Header 
                   image = {img} 
                   showButton = {false}
                   subtitle = 'How Teams Help to empower farmer'
                   color = {true}
                />
                <About1 />
                <Team />
                <Footer />
            </div>
        )
    }
}

export default About;
