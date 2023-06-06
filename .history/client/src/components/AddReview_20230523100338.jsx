import React from 'react'

const AddReview = () => {
  return (
    <div className='mb-2'>
        <form action="">
            <div className="form-row">
                <div className="form-group col-8">
                    <label htmlFor='name'>Name</label>
                    <input id="name" placeholder="name" type='text' className='form-control'/>
                </div>
                <div className="form-group col-4">
                    <label htmlFor='rating'>Rating</label>
                    <select name="" id="rating " className="custom-select">
                        <option disabled >Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea name="Review " className='form-control'></textarea>
            </div>
            <button className="btn btn-primary"></button>
        </form>
      
    </div>
  )
}

export default AddReview
