import React from 'react';

const Footer = () => {
    return(
        <div className ='container-fluid text-center padding' style = {{backgroundColor: '#342F6A'}}>
            <div className ='row text-center'>
               <div className ='col-md-4 mb-5'>
                  <h5><span>Empower</span>farmers</h5>
                  <h4>Empowring Farmers together</h4>
                  <p>info@empowerfarmers.com</p>
                  <a href ='#' className ='btn btn-social mx-2'><i className="fab fa-twitter "></i></a>
                  <a href ='#' className ='btn btn-social mx-2' id ='fab'><i className="fab fa-facebook-f"></i></a>
                  <a href ='#' className ='btn btn-social mx-2' id ='insta'><i className="fab fa-instagram"></i></a>
            </div>
            <div className ='col-md-4 mb-4'>
                <h5>Navigation</h5>
                <p>Home</p>
                <p>About Us</p>
                <p>Donate</p>
                <p>Fund a Farmer</p>
            </div>
            <div className = 'col-md-4 mb-3'>
                <h5 className ='mb-5'>Join our community to help empower farmer</h5>
                <a href ='#' className ='btn btn-success px-4' style = {{borderRadius: '2.5em'}} >Get Started</a>
            </div>
            <div className ='col-lg-12'>
              <hr className="light-100" />
              <h5 id="footer">Copyright &copy; 2020 Empowerfarmers. All rights reserved</h5>
            </div>
         </div>
      </div>
    );
};

export default Footer;