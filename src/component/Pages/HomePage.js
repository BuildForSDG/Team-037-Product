import React, { Component } from 'react';
import Header from '../Common/Header';
import img1 from '../Images/farmer.jpg';
import SectionA from '../Common/SectionA';
import Products from '../Common/Products';
import Statistics from '../Common/Statistcs';
import Footer from '../Common/Footer';


export class HomePage extends Component {

    render() {
        return (
            <div>
                <Header
                title = 'Feed the World'
                subtitle  = {
                            <div>
                              <p>Join the platform and help achieve our<br />
                               goal of Global farming practice</p>
                            </div>}
                image ={img1}
                link = '/'
                buttonText ='Fund a Farmer'
                showButton = {true}
                />
                <SectionA />
                <Products />
                <Statistics />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
