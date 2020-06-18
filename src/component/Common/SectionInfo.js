import React from 'react';

const SectionInfo = (props) => (
            <div className = 'col-md-4 mb-3 md-md-0' style = {{ backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
              <div className="row d-flex justify-content-end align-item-center">
               <div className="col-md-4 text-center">
                <img src= {props.image} className="card-img img-fluid img-style round" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                </div>
            </div>
            </div>
);

export default SectionInfo;
