import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from 'react-router-dom'

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)
    let navigate = useNavigate();
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get('/')
                console.log(response)
                setRestaurants(response.data.data.restaurant)
             } catch (err) {
                console.log(err)
             }
        } 

        fetchData()
       
    },[setRestaurants])

    const handleDelete = async (e, id) => {
        // understand the delete functionality 
        // filter method 
        // boolean 
        e.stopPropagation();
        try {
           const response = await RestaurantFinder.delete(`/${id}`)
           console.log(response)
           setRestaurants(restaurants.filter((restaurant) => {
            return restaurant.id !== id
           }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${id}`)
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
                        <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}> 
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>review</td>
                        <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className='btn btn-warning'>Update</button></td>
                        <td><button onClick={(e) => handleDelete(e, restaurant.id)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList
