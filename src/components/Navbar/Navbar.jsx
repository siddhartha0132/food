import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../asset/frontend_assets/assets'

const Navbar = () => {
  const [menu,setMenu] = useState("menu")
  return (<>
    <div className='navbar'>
             <img src={assets.logo} alt="" className="logo" />
             <ul className="navbar-menu">
          <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>home</li>
          <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>menu</li>
          <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>mobile-app</li>
          <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact-us</li>
        </ul>  
      <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
        </div>
        <button className='navbar-button'>sign-in</button>
    </div>
   
    </div>
    </>
  )
}

export default Navbar