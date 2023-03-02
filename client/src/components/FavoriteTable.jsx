import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FavoriteTable = () => {
    const [favList, setFavList] = useState([])

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`http://localhost:8000/api/favorites/${JSON.parse(userId)}`)
            .then(res => {
                // console.log(res.data)
                setFavList(res.data)
            })
            .catch(err => console.error(err))
    }, [favList.length])

    const handleDelete = (deletedId) => {
        axios.delete(`http://localhost:8000/api/favorites/${deletedId}`)
            .then(res => {
                console.log(res)
                removeFromDom(deletedId)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // updates list after deletion
    const removeFromDom = deletedId => {
        setFavList(favList.filter(favorite => deletedId !== favorite._id))
    }
    return (
        <div>

            <div className="d-flex justify-content-center">
                <table className="table table-striped m-2 w-75 table-bordered">
                    <thead className="thead-dark text-white">
                        <tr>
                            <th scope="col" className="h5">Stock/Crypto</th>
                            <th scope="col" className="h5">Price</th>
                            <th scope="col" className="h5">Change</th>
                            <th scope="col" className="h5">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        favList?.map((fav, index) => {
                            return (
                                <tr key={index}>
                                    <td className='text-white'>{fav.name}</td>
                                    <td className='text-white'>{fav.price}</td>
                                    <td className='text-white'>{fav.change}</td>
                                    <td><button onClick={(e)=> handleDelete(fav._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FavoriteTable