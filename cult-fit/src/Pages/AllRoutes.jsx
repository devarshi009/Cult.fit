import {Routes,Route} from "react-router-dom"

import React from 'react'
import Home from "./Home"
import Fitness from "./Fitness"
import Care from "./Care"
import Cart from "./Cart"
import Mind from "./Mind"
import Store from "./Store"
import User from "./User"
import Location from "./Location"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/fitness" element={<Fitness/>}></Route>
        <Route path="/care" element={<Care/>}></Route>
        <Route path="/mind" element={<Mind/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
        <Route path="/location" element={<Location/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default AllRoutes