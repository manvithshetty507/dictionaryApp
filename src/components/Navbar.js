import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__left'>
            <h2>Dictionary App</h2>
        </div>
        <div className='navbar__right'>
            <Link to='/'>Home</Link>
            <Link to='/history'>History</Link>
        </div>
    </div>
  )
}

export default Navbar