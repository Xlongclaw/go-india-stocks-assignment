import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 border border-x-accent-base/30 px-4 rounded-xl'>
      <BiSearch/>
      <input type="text" className='bg-transparent py-4 text-xs font-medium focus:outline-none' placeholder='Search Discussions' />
    </div>
  )
}

export default SearchBar