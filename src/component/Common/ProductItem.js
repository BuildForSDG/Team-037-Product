import React from 'react';

const ProductItem = (props) => (
   <div className='col-sm-6 col-lg-3 pt-3' >
      <div className="card" style={{ borderRadius: '10px', outline: 'none' }}>
         <img src={props.image} className="card-img-top" alt="..." />
         <div className="card-body">
            <h5 className="card-title products-col">{props.title}</h5>
            <p className="card-text font-weight-bold">{props.price}</p>
            <a href="#" className="btn btn-success px-4 btn-product">{props.buttonText}</a>
         </div>
      </div>
   </div>
);

export default ProductItem;
