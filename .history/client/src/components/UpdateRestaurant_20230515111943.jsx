import React from 'react'
import { useParams } from 'react-router'

const UpdateRestaurant = () => {
    let test = useParams()
    console.log(test)
  return (
    <div>
      <form action="">
        <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input id="name" className='form-control' type='text' />
        </div>
      </form>
    </div>
  )
}

export default UpdateRestaurant
