import React, { useState } from 'react'
import { useParams } from 'react-router'

const UpdateRestaurant = (props) => {
    const { id } = useParams()

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price_range, setPrice_Range] = useState('')
   
  return (
    <div>
      <form action="">
        <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name" className='form-control' type='text' />
        </div>
        <div className='form-group'>
            <label htmlFor="location">Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className='form-control' type='text' />
        </div>
        <div className='form-group'>
            <label htmlFor="price_range">Price Range</label>
            <input value={price_range} onChange={(e) => setPrice_Range(e.target.value)} id="price_range" className='form-control' type='number' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
