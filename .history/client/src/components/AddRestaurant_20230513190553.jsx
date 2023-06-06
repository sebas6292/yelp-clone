import e from 'express'
import React, { useState }from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddRestaurant = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPrice_Range] = useState("Price Range")

    const handleSubmit = () => {
        e.preventDefault()
        try {
            RestaurantFinder.post('/', {
                name, 
                location,
                price_range
            })
        } catch (err) {
            console.log(err)
        }

    }
  return (
    <div className='mb-4'>
        <form action="">
            <div className='form-row'>
            <div className='col'>
                <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control' placeholder='Name'/>
            </div>
            <div className='col'>
                <input value={location} onChange={e => setLocation(e.target.value)} className='form-control' type='text' placeholder='Location'/>
            </div>
            <div className='col'>
                <select value={price_range} onChange={e => setPrice_Range(e.target.value)} className='custom-select my-1 mr-sm-2' type='text'>
                    <option disabled>Price Range</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                    <option value="5">$$$$$</option>
                </select>
            </div>
            <button onClick={handleSubmit} type="submit" className='btn btn-primary'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant
