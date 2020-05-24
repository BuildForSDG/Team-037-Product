import React, { Component } from 'react';
import Header from '../Common/Header';
import img1 from '../Images/nature1.jpg';
import SectionA from '../Common/SectionA';
import Products from '../Common/Products';
import Statistics from '../Common/Statistcs';
import Footer from '../Common/Footer'


export class HomePage extends Component {

    render() {
        return (
            <div>
                <Header
                title = 'Feed the World'
                subtitle  ='Join the platform and help achieve our goal of Global farming practice'
                image ={img1}
                link = '/'
                buttonText ='Fund a Farmer'
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
