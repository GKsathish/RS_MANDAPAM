import React from 'react'
import {Link} from 'react-router-dom'
 import './Headerm.css';

const Headerm = () => {
  return (
    
   
         <nav className="container-fluid navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#b4245d' ,height:'40px',padding:'10px'}} >
  
    <Link className="navbar-brand " to="/">RS WEDS </Link>
    <input type="search" placeholder='All Cities' name  />
    
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          <Link className="nav-link " to="/About"> <img src="https://image.wedmegood.com/resized/20X/images/icons/write_a_review_new.png" alt="RApp"/>Write A Review</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/Contact"> <img src="https://image.wedmegood.com/resized/20X/images/icons/download_app_new.png" alt="MApp"/>Download App</Link>
        </li>
      </ul>
 
  </div>
</nav>   
      
        
  
  )
}

export default Headerm