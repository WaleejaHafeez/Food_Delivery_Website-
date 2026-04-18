import React from 'react'
import {useState} from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
const Navbar = ({setShowlogin}) => {
  const [menu,setmenu]= useState("menu")
  return (
    <div className='Navbar'>
    <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link> 
     <ul className='navbar-menu'>
      <Link to= '/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}> Home</Link>
      <a href="#explore-menu" onClick={()=>setmenu("Menu")} 
      className={menu==="Menu"?"active":""}>Menu</a>
      <a href="#app-download" onClick={()=>setmenu("Mobile-app")} 
      className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
      <a href="#footer" onClick={()=>setmenu("Contact Us") }  
      className={menu==="Contact Us"?"active":""}>Contact Us</a>
     </ul>
     <div className="navbar-right">
      <img src={assets.search_icon}alt="" className="search-icon" />
      <div className="navbar-search-icon">
       <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
        <div className="dot"></div>
      </div>
      <button onClick={()=> setShowlogin(true)}>Sign in</button>
     </div>



    </div>
  )
}

export default Navbar
