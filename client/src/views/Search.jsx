import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import SearchTable from '../components/SearchTable'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'


const Search = () => {


    return (
        <div className="searchPage backgroundStyle">
            <SideNav firstName = {firstName} id = {id}/>
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Welcome {firstName}!</h2>
                    <Datetime />
                </div>
            <SearchTable/>
            </div>
            
        </div>
    )
}

export default Search