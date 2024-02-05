import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    
   
         <nav className="navbar navbar-expand-lg navbar-light  " style={{backgroundColor:'#e72e77' ,height:'40px',padding:'10px' }}> 
  <div className="container-fluid ">
    <Link className="navbar-brand fs-3" to="/">RS WEDS </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-6" aria-current="page" to="/">Venues</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-6" aria-current="page" to="/">Vendors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fs-6" aria-current="page" to="/">Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fs-6 " aria-current="page" to="/">Real Weddings</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link  fs-6"  to="/About">Blog</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link fs-6" to="/Contact">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fs-6" to="/Contact">E-invites</Link>
        </li>
      </ul>
       
      <li className='list-unstyled'>
      <Link className="" type="submit">Log in</Link>
      </li>
       
    
    </div>
  </div>
</nav>   
      
        
  
  )
}

export default Header