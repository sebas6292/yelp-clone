import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import StarRating  from '../components/StarRating'
import Reviews from '../components/Reviews'

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
     { selectedRestaurant && (
      <>
      <div className="mt-3">
        <Reviews />
      </div>
      </>
     )/>}
    </div>
  )
}

export default RestaurantDetailPage
