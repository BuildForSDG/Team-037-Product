import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
        <div className ='container-fluid text-center padding' style = {{ backgroundColor: '#342F6A' }}>
            <div className ='row text-center'>
               <div className ='col-md-4 mb-5'>
                  <h5><span style ={{ color: '#3B7F58' }}>Empower</span>farmers</h5>
                  <h4>Empowring Farmers together</h4>
                  <p style = {{ color: '#219653', lineHeight: '1.5' }}>info@empowerfarmers.com</p>
                  <a href ='#' className ='btn btn-social mx-2'><i className="fab fa-twitter "></i></a>
                  <a href ='#' className ='btn btn-social mx-2' id ='fab'><i className="fab fa-facebook-f"></i></a>
                  <a href ='#' className ='btn btn-social mx-2' id ='insta'><i className="fab fa-instagram"></i></a>
            </div>
            <div className ='col-md-4 mb-4'>
                <h5 className ='mb-3' style = {{ color: 'rgba(81, 171, 120, 0.96)', fontWeight: '500', fontSize: '25px' }}>Navigation</h5>
                <p>Home</p>
                <p>About Us</p>
                <p>Donate</p>
                <p>Fund a Farmer</p>
            </div>
            <div className = 'col-md-4 mb-3 text-justify pl-md-5' id='footer_div'>
                <h5>Join our community</h5>
                <h5> to help empower</h5>
                <h5 className ='mb-md-5 mb-3'> farmer</h5>
                <Link to ='/SignUp' className ='btn btn-success px-4' style = {{ borderRadius: '2.5em' }} >Get Started</Link>
            </div>
            <div className ='col-lg-12'>
              <hr className="light-100" />
              <h5 id="footer">Copyright &copy; 2020 Empowerfarmers. All rights reserved</h5>
            </div>
         </div>
      </div>
);

export default Footer;
