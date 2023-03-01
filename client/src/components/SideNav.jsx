import { slide as Menu } from 'react-burger-menu'
import { Link, useNavigate, useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SideNav = (props) => {
  const navigate = useNavigate();

  const {id, firstName} = props

  const [user, setUser] = useState([])
  
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/getUser')
//         .then(res=> {
//           console.log(res.data)
//           setUser(res.data)});
// }, [])
  
  const handleLogout = () => {
    // localStorage.removeItem("username");
    navigate("/");
  };

    return (
      <Menu  width={'150px'} className="sideNav">
        {console.log(firstName,id)}
        <Link to={'/search/'+ id + "/" + firstName} className={"link-styles searchLink"}> Search</Link>
        <Link to={'/favorites/'+ id + "/" + firstName} className={"link-styles favlink"}> Favorites</Link>
        <button className='signOutBtn' onClick={handleLogout}>Logout</button>
      </Menu>
    );
  
}
export default SideNav