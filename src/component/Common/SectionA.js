import React, { Component } from 'react';
import SectionInfo from './SectionInfo';
import img1 from '../Images/dark_analytics.png';
import img2 from '../Images/make_it_rain.png';
import img3 from '../Images/agreement.png';

const farmInfos = [
    {
        title: 'Empowering Farmers',
        image: img1,
    },
    {
        title: 'Promising returns after Harvests',
        image: img2,
    },
    {
        title: 'Strenghtening Food Security',
        image: img3,
    }
];

 class SectionA extends Component {
    
    render() {
        return (
            <div className="container py-5">
            <div className ='row no-gutters'>
                {farmInfos.map((farmInfo, i) => {
                 return  <SectionInfo {...farmInfo} key ={i}/>
                })}  
            </div>
            </div>
        )
    }
}

export default SectionA
