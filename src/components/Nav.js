import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle ={
	color:'blue',
}

export default function Nav () {
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink to='/' exact className='nav-link'  activeStyle = {activeStyle} >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/Properties' className='nav-link'  activeStyle = {activeStyle}>
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink to='/Client' className='nav-link'  activeStyle = {activeStyle}>
            Client
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}