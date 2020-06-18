import React, { Component } from 'react';
import StatisticsInfo from './StatisticsInfo';

const farmStat = [
  {
    icon: 'fa-tractor',
    number: '66,669',
    info: 'Farmers'
  },
  {
    icon: 'fa-users',
    number: '66,669+',
    info: 'Farmers Sponsorship'
  },
  {
    icon: 'fa-seedling',
    number: '66,669',
    info: 'Acres Available'
  }
];

class Statistcs extends Component {
  render() {
    return (
            <div className ='container-fluid' style = {{ backgroundColor: '#F2F2F2' }}>
              <div className = 'container text-center'>
                <div className ='row'>
                    <div className ='col-lg-12 my-2 text-success'>
                        <h2>Current Numbers</h2>
                    </div>
                </div>
                <div className ='row'>
                    {farmStat.map((stat, index) => <StatisticsInfo {...stat} key = {index} />)}
                </div>
                <div className ='row'>
                    <div className ='col-lg-12'>
                        <a href="#" style = {{ borderRadius: '2.5em' }} className="btn btn-success mb-5 mt-3 px-4">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Statistcs;
