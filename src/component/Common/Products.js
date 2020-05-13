import React, { Component } from 'react';
import ProductItem from './ProductItem';
import img1 from '../Images/Products/rice.jpg';
import img2 from '../Images/Products/Chicken.jpg';
import img3 from '../Images/Products/egg.jpg';
import img4 from '../Images/Products/fish.jpg';


    const products = [
        {
            image: img1,
            title: 'Rice',
            price: '₦250',
            buttonText: 'Buy',
        },
        {
            image: img2,
            title: 'Birds',
            price: '₦250',
            buttonText: 'Buy',
        },
        {
            image: img3,
            title: 'Egg',
            price: '₦250',
            buttonText: 'Buy',
        },
        {
            image: img4,
            title: 'Fishes',
            price: '₦250',
            buttonText: 'Buy',
        },
    ];

export class Products extends Component {
    render() {
        return (
            <div className ='container text-center'>
                <div className ='row'>
                    <div className ='col-lg-12 text-success'>
                        <h2>Products</h2>
                    </div>
                </div>
                <div className ='row mb-4 mt-3'>
                    {products.map((product, index) => {
                        return <ProductItem {...product} key = {index} />
                    })}
                </div>
                <div className ='row'>
                    <div className ='col-lg-12 text-center'>
                    <h5><a href = '#' className ='card-link'>More Products → </a></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;
