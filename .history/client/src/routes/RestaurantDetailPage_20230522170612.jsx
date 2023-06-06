import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import StarRating  from '../components/StarRating'

const RestaurantDetailPage = () => {

  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
   try {
      const response = await RestaurantFinder.get(`/${id}`)
      setSelectedRestaurant(response.data.data.restaurant)
   } catch (err) {
    console.log(err)
   }
  }
   fetchData()
  },[])
  return (
    <div>
     { selectedRestaurant && <StarRating rating={2}/>}
    </div>
  )
}

export default RestaurantDetailPage
