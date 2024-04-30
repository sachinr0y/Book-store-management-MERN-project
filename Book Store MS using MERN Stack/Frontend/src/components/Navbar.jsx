import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>ShelfSmart</Link>
        </div>
        <div className='navbar-right'>
            <Link to="/books" className='navbar-link'>Books</Link>
            {role === "admin" && <>
              <Link to="/addbook" className="navbar-link">Add Book</Link>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </>
            }
            {role === "" ?
            <span><Link to="/login" className='navbar-link'>Login</Link>
            <Link to="/addstudent" className="navbar-link">sign up</Link></span>
             : <Link to="/logout" className='navbar-link'>Logout</Link>
             }
            
        </div>
    </nav>
  )
}

export default Navbar