import React, { Component } from 'react';
import SectionInfo from './SectionInfo';
import img1 from '../Images/dark_analytics.png';
import img2 from '../Images/make_it_rain.png';
import img3 from '../Images/agreement.png';

const farmInfos = [
  {
    title: <div><h6>Empowering</h6><h6> Farmers</h6></div>,
    image: img1
  },
  {
    title: <div><h6>Promising returns</h6><h6> after Harvests</h6></div>,
    image: img2
  },
  {
    title: <div><h6>Strenghtening </h6><h6>Food Security</h6></div>,
    image: img3
  }
];

class SectionA extends Component {
  render() {
    return (
           <div>
               <div className="container-fluid py-5 section" style ={{ backgroundColor: '#E0E0E0' }}>
                    <div className ='row d-flex justify-content-around text-center no-gutters'>
                        {farmInfos.map((farmInfo, i) => <SectionInfo {...farmInfo} key ={i}/>)}
                    </div>
                </div>
           </div>
    );
  }
}

export default SectionA;
