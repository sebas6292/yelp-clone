
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder'
// import { RestaurantsContext } from '../context/RestaurantsContext'

const UpdateRestaurant = (props) => {
    const { id } = useParams()
    // const { restaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price_range, setPrice_Range] = useState('')

    useEffect(() => {
        const fetchData =  async () => {
            const response = await RestaurantFinder.get(`/${id}`)
            console.log(response.data.data)
        }
        fetchData()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateRestaurant = await RestaurantFinder.put(`/${id}`, {
            name, 
            location,
            price_range,
        })
        console.log(updateRestaurant)
    }
   
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
        <button type="submit" onClick={handleSubmit}className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
