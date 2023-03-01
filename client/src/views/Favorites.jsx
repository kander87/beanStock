import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'
import FavoriteTable from '../components/FavoriteTable'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'
import Share from '../components/Share'

const Favorites = (props) => {
    const navigate = useNavigate();
    const {id, firstName} = useParams()
    // const {id, firstName} = props
    const [coinList, setCoinList] = useState([])
    const [eachCoin, eachSetCoin] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/coins')
    //         .then(response => {
    //             setCoinList(response.data)

    //         })
    //         .catch(err => console.error(err))
    // }, [])
    // const removeFavorite = (deleteId) => {
    //     axios.delete(`http://localhost:8000/api/coin/${deleteId}`)
    //         .then(res => {
    //             handleFilter(deleteId)
    //         })
    //         .catch(err => console.log(err))
    // }

    const handleFilter = (deleteId) => {
        const filteredList = coinList.filter((eachCoin) => deleteId !== eachCoin._id)
        setCoinList(filteredList)
    }

    //************************************ this will check if user is in storage ***********************/
    // useEffect(() => {
    //     const checkUser = () => {
    //         if (!localStorage.getItem("username")) {
    //             navigate("/");
    //         }
    //     };
    //     checkUser();
    // }, [navigate]);

    return (
        <div className="searchPage backgroundStyle">
            <SideNav id={id} firstName= {firstName}/>
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Favorites</h2>
                    <Datetime />
                </div>
                <FavoriteTable id={id} firstName= {firstName}/>
                {/* <button onClick={(e) => removeFavorite(eachCoin._id)} className='btn btn-danger'>Delete</button> */}

            </div>
            <div>
                <Share/>
            </div>

        </div>
    )
}

export default Favorites
