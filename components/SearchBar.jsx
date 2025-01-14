import React from 'react'

export const SearchBar = ({setQuery}) => {
  return (
    <div className='searchBar'>
        <i className="fa fa-search"></i>
        <input 
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase()) }
          type='text' placeholder='Serach Here' />
    </div>
  )
}
