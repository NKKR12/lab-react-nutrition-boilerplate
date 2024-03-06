import React from 'react'

export default function Search(props) {
    const {setSearch} = props
  return (
    <div className='search-comp'>
        <h3>Search</h3>
        <input className='search-input' type="text" onChange={(e)=>{setSearch(e.target.value)}}/>

    </div>
  )
}
