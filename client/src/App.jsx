import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Podcast from './Pages/Podcast'
function App() {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        {user && <Route path="/register" exact element={<Navigate replace to='/' />} />}
        {user && <Route path="/login" exact element={<Navigate replace to='/' />} />}
        <Route path="/" exact element={<Navigate replace to='/login' />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/podcast' exact element={<Podcast />} />
      </Routes>
    </>
  )
}

export default App
