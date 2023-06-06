import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx'
import RestaurantDetailPage from './routes/RestaurantDetailPage.jsx'
import UpdatePage from './routes/UpdatePage.jsx'

const App = () => {
  return (
  <div className='container'>
    <Router>
        <Routes>
            <Route exact path ="/" element={<Home />}/>
            <Route exact path ="/restaurants/:id/update" element={<UpdatePage />}/>
            <Route exact path ="/restaurants/:id" element={<RestaurantDetailPage />}/>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
