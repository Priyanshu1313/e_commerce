import { NavLink } from 'react-router-dom';
import '../style/header.css';


const Header = () => {
    return(
        
        <div className="header">
          <a href="#default" className="logo">CompanyLogo</a>
          <div className="header-right">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            <NavLink className="nav-link" to="/cart">  <i class="bi bi-cart">  </i></NavLink>
          </div>
        </div>
    )

} 

export default Header;