import React, { useState } from 'react'
import './Navbar.css'
import { GiMountains } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Home } from './Home';
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [theme, setTheme] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={theme ? 'body-dark' : 'body-light'}>

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
          <div className={theme ? 'theme-dark' : 'theme-light'}>
            <span style={{ color: theme ? 'gray' : 'yellow' }}><MdOutlineDarkMode style={{ fontSize: '20px' }} /></span>
            <div className='switch-checkbox'>
              <label className='switch'>
                <input type='checkbox'
                  onChange={() => setTheme(!theme)}
                />
                <span className='slider round'></span>
              </label>
            </div>
            <span style={{ color: theme ? 'yellow' : 'gray' }}><MdLightMode style={{ fontSize: '20px' }} /></span>
          </div>
          <button className={theme ? 'log-in-dark' : 'log-in-light'}>Log In</button>
        </div>
        <div className={theme ? 'menu-btn-dark toggle-btn' : 'menu-btn-light toggle-btn'}>
          <i onClick={() => setMenuOpen(true)}><TfiMenu /></i>

        </div>
      </nav>{menuOpen ? <div className='dropdown_menu open'>
        <i style={{ fontSize: '30px' }} onClick={() => setMenuOpen(false)}><IoClose /></i>
        <a href='#'>Home</a>
        <a href='#'>Nature</a>
        <a href='#'>Blog</a>
        <a href='#'>About</a>
        <div className={theme ? 'theme-dark' : 'theme-light'}>
          <span style={{ color: theme ? 'white' : 'yellow' }}><MdOutlineDarkMode style={{ fontSize: '20px' }} /></span>
          <div className='switch-checkbox'>
            <label className='switch'>
              <input type='checkbox'
                onChange={() => setTheme(!theme)}
              />
              <span className='slider round'></span>
            </label>
          </div>
          <span style={{ color: theme ? 'yellow' : 'white' }}><MdLightMode style={{ fontSize: '20px' }} /></span>
        </div>
        <button className='log-in-btn open-btn'>Log In</button>
      </div> : <div className='dropdown_menu'>
        <a href='#'>Home</a>
        <a href='#'>Nature</a>
        <a href='#'>Blog</a>
        <a href='#'>About</a>
        <div className={theme ? 'theme-dark' : 'theme-light'}>
          <span style={{ color: theme ? 'white' : 'yellow' }}><MdOutlineDarkMode style={{ fontSize: '20px' }} /></span>
          <div className='switch-checkbox'>
            <label className='switch'>
              <input type='checkbox'
                onChange={() => setTheme(!theme)}
              />
              <span className='slider round'></span>
            </label>
          </div>
          <span style={{ color: theme ? 'yellow' : 'white' }}><MdLightMode style={{ fontSize: '20px' }} /></span>
        </div>
        <button className='log-in-btn'>Log In</button>
      </div>}
      {/* <div className={theme ? 'dropdown_menu' : 'dropdown_menu open'}>
        <a href='#'>Home</a>
            <a href='#'>Nature</a>
            <a href='#'>Blog</a>
            <a href='#'>About</a>
            <button className='log-in-btn'>Log In</button>
        </div> */}

      <Home />
    </div>
  )
}
