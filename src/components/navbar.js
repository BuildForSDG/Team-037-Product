import React from "react";
import './navbar.css'
const Navbar = () => {
    return (
    <div className='navbarDiv'>

      <div className='logoDiv'>
          <h4 className='logoText'>Empower</h4>
          <h4>farmer</h4>
       </div>  

        <div className= 'textName'>
        <h4 className= 'tabName'>Home</h4>

        <h4>AboutUs</h4>
        </div>

        
        <button className= 'buttonName'>Donates
        </button>
        


    </div>
    )
}

export default Navbar;