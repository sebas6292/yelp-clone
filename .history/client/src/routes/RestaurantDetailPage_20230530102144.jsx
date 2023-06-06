import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import StarRating  from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

const RestaurantDetailPage = () => {

  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
   try {
      const response = await RestaurantFinder.get(`/${id}`)
      console.log(response)
      setSelectedRestaurant(response.data.data)
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
      <h1 className="text-center display-1">{selectedRestaurant.restaurant.name}</h1>
      <div className="mt-3">
        <div className='text-center'>
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning m1-1">
              { selectedRestaurant.restaurant.count ? ` (${selectedRestaurant.restaurant.count})`  
                : "(0)"
              }
            </span>
        </div>
        <Reviews reviews={selectedRestaurant.reviews} />
      </div>
      <AddReview />
      </>
     )}
    </div>
  )
}

export default RestaurantDetailPage
