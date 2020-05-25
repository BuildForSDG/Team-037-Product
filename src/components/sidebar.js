import React from "react";
import DashB from './dashboard';
import EditP from './editProfile';
import Sponsorshop from './sponsorshop';
import Accountd from './accountdetails';
import Buyp from './buyproducts';
import '../sidebar.css';

const Sidebar = () => {
    return (
    <div className='sidebarDiv'>
        <DashB />
        <EditP />
        <Sponsorshop />
        <Accountd />
        <Buyp />
        


    </div>
    )
}

export default Sidebar;
