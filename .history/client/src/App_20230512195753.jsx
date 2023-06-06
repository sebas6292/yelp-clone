import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx'
import RestaurantDetailPage from './routes/RestaurantDetailPage.jsx'
import UpdatePage from './routes/UpdatePage.jsx'

const App = () => {
  return (
  <div>
    <Router>
        <Routes>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/restaurants/:id/update" component={UpdatePage}/>
            <Route exact path ="/restaurants/:id" component={RestaurantDetailPage}/>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
