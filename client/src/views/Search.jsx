import React, { useEffect, useState } from 'react'
import SearchTable from '../components/SearchTable'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'

const Search = () => {
    const [firstName, setFirstName] = useState("")

    useEffect(() => {
        const firstName = localStorage.getItem('firstName');
        setFirstName(JSON.parse(firstName));
    }, [])

    return (
        <div className="searchPage backgroundStyle">
            <SideNav firstName={firstName} />
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Welcome {firstName}!</h2>
                    <Datetime />
                </div>
                <SearchTable />
            </div>

        </div>
    )
}

export default Search