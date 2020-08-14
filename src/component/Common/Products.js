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
    buttonText: 'Buy'
  },
  {
    image: img2,
    title: 'Birds',
    price: '₦250',
    buttonText: 'Buy'
  },
  {
    image: img3,
    title: 'Egg',
    price: '₦250',
    buttonText: 'Buy'
  },
  {
    image: img4,
    title: 'Fishes',
    price: '₦250',
    buttonText: 'Buy'
  }
];

export class Products extends Component {
  render() {
    return (
      <div className='container-fluid text-center' style={{ backgroundColor: '#F2F2F2' }}>
        <div className="mx-5">
          <div className='row'>
            <div className='col-lg-12 pt-3 text-success'>
              <h2>Products</h2>
            </div>
          </div>
          <div className='row reduced-width mb-4 mt-2'>
            {products.map((product, index) => <ProductItem {...product} key={index} />)}
          </div>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h5><a href='#' className='card-link mb-5'>More Products → </a></h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
