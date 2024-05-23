import React from 'react'
// import login from '../../public/assets/user.png'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='part1'>
          <div className='logo'>
            <img src='#' alt='' />{' '}
          </div>
          <div className='name '>
            <h2>
              <span className='s'>S</span>hare<span className='s'>S</span>quare
            </h2>
          </div>
        </div>
        <div className='part2'>
          <NavLink to='/login' className="underline1">
            <div className='login1'>
              <img src="/assets/login.png" alt='' className='logoimg' />
              Login{' '}
            </div>
          </NavLink>
          <div className='seperator'>
            <img src="/assets/icons8-vertical-line-32.png" alt='' />
          </div>
          <NavLink to='/signup' className="underline1">
            <div className='signup'>
              <img src='/assets/add-user.png' alt='' className='logoimg' />
              Sign Up
            </div>
          </NavLink>
        </div>
      </div>
      <div className='navbar1'>
        <div className='home1'>
          <NavLink to='/home' className='navlink-style'>
            <div className='home3'>Home</div>
          </NavLink>
          <NavLink to='/property' className='navlink-style'>
            <div className='home3'>Post your Property</div>
          </NavLink>
          <NavLink to='/aboutus' className='navlink-style'>
            <div className='home3'> About Us</div>
          </NavLink>
          <NavLink to='/contactus' className='navlink-style'>
            <div className='home3'> Contact Us</div>
          </NavLink>
        </div>
        <NavLink to='/account'>
          <div className='profilemain'>
            <div className='profile'>
              {' '}
              <img src="/assets/user.png" alt='' className='user' />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  )
}
export default Navbar
