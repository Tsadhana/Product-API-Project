import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './ProductDetail.css'
import { ProductDetailsShimmer } from './ProductDetailsShimmer';
import { useTheme } from '../hooks/useTheme';

export default function ProductDetail() {
  const location = useLocation();
  const productName = new URLSearchParams(location.search).get('name');

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDark] =useTheme()

  // useEffect(() => {
  //   if (productName) {
  //     fetch(`https://dummyjson.com/products/search?q=${productName}`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error('Failed to fetch product');
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         if (data.products && data.products.length > 0) {
  //           setProductData(data.products[0]); // Assuming the first result is the desired product
  //         } else {
  //           setError('Product not found');
  //         }
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(false);
  //       });
  //   } else {
  //     setError('No product name specified');
  //     setLoading(false);
  //   }
  // }, [productName]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  useEffect( () => {
    fetch(`https://dummyjson.com/products/search?q=${productName}`)
    .then((res) => res.json())
    .then((data) => {
      setProductData(
        data.products[0]
      )
      console.log(data)
    })
  },[])

  return productData === null ? <ProductDetailsShimmer /> : (
    <main className={` ${isDark? 'dark': ''}`}>
      {/* <div className="product-details-container">
        <h1>Product Details</h1>
        <div className="product-details">
          <img
            src={productData.thumbnail}
            alt={productData.title}
            className="product-image"
          />
          <div className="product-info">
            <h2>{productData.title}</h2>
            <p><strong>Price:</strong> ${productData.price}</p>
            <p><strong>Description:</strong> {productData.description}</p>
          </div>
        </div>
      </div> */}
      <div className='product-details-container'>
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className='product-details'>
          <img src={productData.thumbnail} alt={productData.title} />
          <div className='details-text-container'>
            <h1> Product Name : {productData.title}</h1>
            <p><b>Description : </b>{productData.description}</p>
            <p><b>Category :</b> {productData.category}</p>
            <p><b>Price : </b>{productData.price}</p>
            <p><b>Stock :</b>{productData.stock}</p>
          </div>
        </div>
      </div>
    </main>
  ) 
}
