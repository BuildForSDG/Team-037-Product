import React from 'react';

const ProductItem = (props) => {
    return (
        <div className ='col-sm-6 col-lg-3 pt-3' >
         <div className="card" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.price}</p>
               <a href="#" className="btn btn-success px-4">{props.buttonText}</a>
            </div>
         </div>
       </div>
    );
};

export default ProductItem;