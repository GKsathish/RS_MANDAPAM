import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css';

const Login = () => {
  return (
    <div className='container-fluid  vh-100'>
   
         <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">RS MANDAPAM </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Events          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link  className="dropdown-item" to="/">Sangeeth Event</Link></li>
            <li><Link className="dropdown-item" to="/">Mehindi Event</Link></li>
            <li><Link className="dropdown-item" to="/">Game Event</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">   
        <button className="btn btn-outline-success m-d-2" type="submit">Log out</button>
      </form>
    </div>
  </div>
</nav>   
      
        
    </div>
  )
}

export default Login