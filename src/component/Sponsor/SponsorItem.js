import React from 'react';
import './sponsor.css';

const SponsorItem = ({img, price, buttonText, product_name}) => {

    return (
        <div className ="col-md-6 col-lg-3 mb-4">
          <div className="card" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body card_body">
                <h5 className="card-title products-col">{product_name}</h5>
                <p className="card-text font-weight-bold">{price}</p>
                <a href="#" className="btn btn-success px-4 btn-product">{buttonText}</a>
              </div>
           </div>
        </div>
    )
}

export default SponsorItem;