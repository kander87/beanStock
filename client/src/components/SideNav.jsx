import { slide as Menu } from 'react-burger-menu'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

const SideNav = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    // localStorage.removeItem("username");
    navigate("/");
  };

    return (
      <Menu  width={'150px'} className="sideNav">
        <Link to="/top25" className={"link-styles searchLink"}> Top 25</Link>
        <Link to="/search" className={"link-styles searchLink"}> Search</Link>

        <Link to="/favorites" className={"link-styles favlink"}> Favorites</Link>
        <button className='signOutBtn' onClick={handleLogout}>Logout</button>
      </Menu>
    );
  
}
export default SideNav