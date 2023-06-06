import React from 'react'
import { useParams } from 'react-router'

const UpdateRestaurant = () => {
    let test = useParams()
    console.log(test)
  return (
    <div>
      <form action="">
        <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input id="name" className='form-control' type='text' />
        </div>
        <div className='form-group'>
            <label htmlFor="location">Location</label>
            <input id="location" className='form-control' type='text' />
        </div>
        <div className='form-group'>
            <label htmlFor="price_range">Price Range</label>
            <input id="price_range" className='form-control' type='number' />
        </div>
      </form>
    </div>
  )
}

export default UpdateRestaurant
