import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = (props) => {

    const { restaurants, setRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get('/')
                setRestaurants(response.data.data.restaurant)
             } catch (err) {
                console.log(err)
             }
        }

        fetchData()
       
    },[setRestaurants])

    const handleDelete = async (id) => {
        // understand the delete functionality 
        try {
           const response = await RestaurantFinder.delete(`/${id}`)
           console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='list-group'>
        <table className='table table-hover table-dark'>
            <thead>
                <tr className='bg-primary'>
                    <th scope='col'>Restaurant</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Ratings</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                { restaurants && restaurants.map((restaurant) => {
                    return (
                        <tr key={restaurant.id}> 
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>review</td>
                        <td><button className='btn btn-warning'>Update</button></td>
                        <td><button onClick={() => handleDelete(restaurant.id)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList
