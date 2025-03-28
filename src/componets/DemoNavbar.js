import React from 'react'
import { Link } from 'react-router-dom'
const DemoNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
  <Link className="navbar-brand  text-white" to="#">E-Products</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">Home </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="/About">About</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Product">Product</Link>
      </li>

    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default DemoNavbar
