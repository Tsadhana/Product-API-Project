import React from 'react'

export const Filter = ({setQuery}) => {
  return (
    <div className='filter' onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}>
        <select className='filterbyBrand'>
            <option hidden>Filter By Category</option>
            <option value='beauty'>Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
        </select>
    </div>
  )
}
