import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Top25Table from '../components/Top25Table'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'


const Top25 = () => {



    return (
        <div className="searchPage backgroundStyle">
            <SideNav/>
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Hello User!</h2>
                    <Datetime />
                </div>
            <Top25Table/>
            </div>
            
        </div>
    )
}

export default Top25