import React from 'react';

const SectionInfo = (props) => {
        return (
            <div className = 'col-md-4'>
              <div className="row no-gutters">
               <div className="col-md-4">
                <img src= {props.image} className="card-img" alt="..."  />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                </div>
            </div>
            </div>
        )
}

export default SectionInfo
