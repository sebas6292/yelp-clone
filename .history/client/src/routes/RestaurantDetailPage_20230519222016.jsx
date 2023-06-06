import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantDetailPage = () => {

  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)
  return (
    <div>
      RestaurantDetailPage
    </div>
  )
}

export default RestaurantDetailPage
