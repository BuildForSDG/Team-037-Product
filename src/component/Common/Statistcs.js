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
    },
];

class Statistcs extends Component {
    render() {
        return (
            <div className = 'container text-center my-4'>
                <div className ='row'>
                    <div className ='col-lg-12 text-success'>
                        <h2>Current Numbers</h2>
                    </div>
                </div>
                <div className ='row'>
                    {farmStat.map((stat, index) => {
                       return <StatisticsInfo {...stat} key = {index} />
                    })}
                </div>
                <div className ='row'>
                    <div className ='col-lg-12'>
                        <a href="#" style = {{borderRadius: '2.5em'}} className="btn btn-success px-4">Get Started</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistcs;;
