import React, { Component } from 'react';

export class About1 extends Component {
  render() {
    return (
            <div className ='container mt-5  py-3'>
               <div className ='row text-center text-justify'>
                    <div className ='col-md-4 mb-3'>
                        <h2 id ='about'>About Us</h2>
                        <h2>Who we are</h2>
                    </div>
                    <div className ='col-md-4'>
                        <p className ='text-justify'>Empower is a Agriculture Platform that empowers rural farmers by providing them with improved seeds, farm inputs, training on modern farming techniques and provides a market for the sale of their farm produce. This gives the farmers the capacity to farm more acres and by extension leads to increased food production.</p>
                    </div>
                    <div className ='col-md-4'>
                        <p className ='text-justify'>Our Mission Agriculture to enable everyone participate in the achievement of global security.
                        Our vision is feed the world and help to solve the problem of zero hunger in our community
                        </p>
                    </div>
               </div>
            </div>
    );
  }
}

export default About1;
