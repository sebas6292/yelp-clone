import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantDetailPage = () => {

  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`)
      setSelectedRestaurant(response.data.data)
    }
    fetchData()
  },[])
  return (
    <div>
      RestaurantDetailPage
    </div>
  )
}

export default RestaurantDetailPage
