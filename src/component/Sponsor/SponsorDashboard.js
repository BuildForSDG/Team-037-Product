import React, { Component } from 'react';
import ProductInfo from './Product_Info';
import SponsorItem from './SponsorItem'; 
import './sponsor.css';   

 class SponsorDashboard extends Component {
    render() {
        return (
            <div className ="container-fluid" style = {{marginTop: '70px', paddingTop: '1em'}}>
               <div className ="row">
                    <div className = "col-md-2 row_small">
                       <ul className="nav flex-column">
                         <li className="nav-item">
                            <a className="nav-link nav_link active" href="#">Edit</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link nav_link" href="#">Account</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link nav_link" href="#">Sponsor History</a>
                         </li>
                       </ul> 
                      </div>
                   <div className ="col-md-10 text-center">
                        <div className ="row reduced-width mb-4 mt-2" id ="reduced-width">
                            {ProductInfo.map((product, index) =>{
                                return <SponsorItem key = {index} {...product}/>
                            })}
                        </div>     
                    </div>
               </div> 
            </div>
        )
    }
}


export default SponsorDashboard;
