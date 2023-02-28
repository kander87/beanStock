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
        <Link to="/search" className={"link-styles"}> Search</Link>
        <Link to="/favorites" className={"link-styles"}> Favorites</Link>
        <button className='signOutBtn m-4 p-1' onClick={handleLogout}>Logout</button>
      </Menu>
    );
  
}
export default SideNav