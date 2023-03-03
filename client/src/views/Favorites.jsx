import React from 'react'
import FavoriteTable from '../components/FavoriteTable'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'
import Share from '../components/Share'

const Favorites = () => {

    return (
        <div className="searchPage backgroundStyle">
            <SideNav />
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Favorites</h2>
                    <Datetime />
                </div>
                <FavoriteTable/>
            </div>
            <div>
                <Share/>
            </div>
        </div>
    )
}

export default Favorites
