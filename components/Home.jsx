import React, { useState } from 'react'
import {ClothsList} from './ClothsList'
import { SearchBar } from './SearchBar'
import { Filter } from './Filter'
import { useTheme } from '../hooks/useTheme'

export const Home = () => {
    const [query , setQuery] = useState('')
    const [isDark] =useTheme()
  return (
    <main className= {`main ${isDark? 'dark': ''}`}>
        <div className='search-filter-container' >
            <SearchBar  setQuery={setQuery} />
            <Filter setQuery={setQuery} />
        </div>
        <ClothsList query={query} />
    </main>
  )
}
