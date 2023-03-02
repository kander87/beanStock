import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const SearchTable = (props) => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setStocks(res.data);
        })
        .catch(err => console.log(err))
    },[])

    const top25Stocks = stocks.slice(0,25)


    return (
        <div>
            <input className="search m-4 coin-input" type="search"  name="q" placeholder="Search Here"
                aria-label="Search through available stocks" />
            <div className="d-flex justify-content-center">
            <table className="table table-striped m-2 w-75 table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="h5 p-2">Crypto</th>
                        <th scope="col" className="h5 p-2">Price (USD)</th>
                        <th scope="col" className="h5 p-2">24 Hour Change</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        top25Stocks && top25Stocks.map((stock, index) => {
                            return (
                                <tr key={index}>
                                    <td className="align-middle td">
                                        <Link to={`/stock/view/${stock.id}`}>
                                            <img src={stock.image} style={{width: '25px'}} alt="cyrpto image"/> {stock.name}
                                        </Link>
                                    </td>
                                    <td className="align-middle td" style={{color: 'white'}}>
                                        ${stock.current_price}
                                    </td>
                                    {(stock.price_change_24h < 0) ?<td className="align-middle td" style={{color: 'red'}}>↓ ${stock.price_change_24h.toFixed(4)}</td>: 
                                        <td className="align-middle td " style={{color: 'green'}}> ↑ ${stock.price_change_24h.toFixed(4)}</td>}
                                    
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

export default SearchTable