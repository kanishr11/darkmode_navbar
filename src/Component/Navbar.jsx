import React, { useState } from 'react'
import './Navbar.css'
import { GiMountains } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const Navbar = () => {
  const [theme, setTheme] = useState(false)

  return (
    <div>

      <nav className={theme ? 'navbar-dark' : 'navbar-light'}>
        <div className={theme ? 'logo-dark' : 'logo-light'}>
          <i><GiMountains /></i>
          <a href='#'>Logo</a>
        </div>
        <div className={theme ? 'menu-dark' : 'menu-light'}>
          <div className={theme ? 'menu-links-dark' : 'menu-links-light'}>
            <a href='#'>Home</a>
            <a href='#'>Nature</a>
            <a href='#'>Blog</a>
            <a href='#'>About</a>
          </div>
          <dic className={theme ? 'navbar-dark' : 'navbar-light'}>
            <span style={{ color: theme ? 'gray' : 'yellow' }}><MdOutlineDarkMode /></span>
            <div className='switch-checkbox'>
              <label className='switch'>
              <input type='checkbox' 
              onChange={()=> setTheme(!theme)}
              />
              <span className='slider round'></span>
              </label>
            </div>
            <span style={{ color: theme ? 'yellow' : 'gray' }}><MdLightMode /></span>
          </dic>
          <button className={theme ? 'log-in-dark' : 'log-in-light'}>Log In</button>
        </div>
        <div className={theme ? 'menu-btn-dark' : 'menu-btn-light'}>
          <i><TfiMenu /></i>
        </div>
      </nav>

    </div>
  )
}
