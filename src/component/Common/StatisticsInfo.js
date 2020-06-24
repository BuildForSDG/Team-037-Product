import React from 'react';

const StatisticsInfo = ({ number, info, icon }) => (
        <div className="col-sm-6 col-md-4">
        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-success"></i><i className={`fa ${icon} fa-stack-1x fa-inverse`}></i></span>
          <h3>{number}</h3>
          <p>{info}</p>
        </div>
);

export default StatisticsInfo;
