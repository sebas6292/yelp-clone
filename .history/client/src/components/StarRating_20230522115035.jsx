import React from 'react'

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <=5; i++) {
        if (i <= rating) {
            stars.push(<i clas='fas fa-star'></i>)
        } else {
            stars.push(<i clas='far fa-star'></i>)
        }
    }

  return (
    <>
    
    </>
  )
}

export default StarRating
