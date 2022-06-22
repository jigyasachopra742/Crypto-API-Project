import React from 'react'
import { FaCoins } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbar.css';

function Navbar() {
  return (
    <Link to='/'>
        
      <div className="navbar">
        <FaCoins classname = "icon"/>
          <h1> Coin <span classname="green">Search</span></h1>
      </div>

    </Link>
  )
}

export default Navbar;