import React, { useEffect, useState } from 'react'
import {ClothCards} from './ClothCards'
//import products from '../Products'
import '../App.css'
//import CountriesData from '../CountriesData'

// console.log(CountriesData)
//console.log(Products)

export const ClothsList = ({query}) => {
  
 const [products , setProducts] = useState([])

useEffect(() =>{
  fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
      setProducts(data.products)
      console.log(data)
  })
}, [])


  return (
    <div className='product-list'>
        {
            // CountriesData.map((country) => {
            //     return(
            //         <ClothCards 
            //             key ={country.name.common}
            //             image={country.flags.svg}
            //             name={country.name.common}
            //             population={country.population}
            //             region={country.region}
            //         />
                    
            //     )
            // }) 

            products.filter((product) => 
              product.category.includes(query.toLocaleLowerCase()) ||
             product.title.toLocaleLowerCase().includes(query)).map((product) =>{
                return(
                    <ClothCards 
                       key={product.id}
                       image={product.thumbnail}
                       title={product.title}
                       price={product.price}
                       category={product.category}
                       brand={product.brand}

                    />
                )
            })
                
        }
       

    </div>
  )
}

