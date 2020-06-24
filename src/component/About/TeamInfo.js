import React from 'react';

const TeamInfo = ({ image, title }) => (
    <div className = ' col-sm-8 col-md-3 my-3 mx-2 team'>
        <div className="card">
           <img src={image} className="card-img-top" alt="Our Team" />
           <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
     </div>
);

export default TeamInfo;
