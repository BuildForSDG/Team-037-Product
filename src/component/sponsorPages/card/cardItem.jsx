import React from 'react';
import farmProduct from '../../Images/fruitFarm.jpg';

const CardItems = () => {
    return (
        <div className="card">
            <img src={farmProduct} alt="farm product not showing"/>
            <h5>Carrot and Tomatoes</h5>
            <div className="card_feature">
                <div className="farm">
                    <p>farm</p>
                </div>
                <div className="price">
                    <p>$6500</p>
                </div>
            </div>
            <div className="sponsor_btn">
                <a href="#">Sponsor</a>
            </div>
        </div>
    )
}

export default CardItems;