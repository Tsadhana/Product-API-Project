import React from 'react'
import '../App.css'
import { Link } from 'react-router'

export const ClothCards = ({ image ,title , price , category ,brand }) => {
  return (
    <div className='card'>
      <Link className="CardBody" to={`/productdetail?name=${title}`}>
        <div className='image-container'>
            <img src={image} alt={image} />
        </div>
        <div className='content'>
          <h2>{title}</h2>
          <p><b>Price : </b>${price}</p>
          <p><b>Category : </b>{category}</p>
          <p><b>Brand  : </b>{brand}</p>
        </div>
      </Link>



    </div>
  )
}

