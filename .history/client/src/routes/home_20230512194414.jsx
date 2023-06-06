import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RestaurantDetailPage from './RestaurantDetailPage'
import UpdatePage from './UpdatePage'

const home = () => {
  return (
    <Router>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/restaurants/:id/update" component={UpdatePage}/>
        <Route exact path ="/restaurants/:id" component={RestaurantDetailPage}/>

        
    </Router>
  )
}

export default home