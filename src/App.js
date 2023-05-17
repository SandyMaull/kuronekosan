import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Default from './pages/Default';
import Homepage from './pages/Homepage';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Router>
  )
}

export default App;