import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const SearchTable = () => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setStocks(res.data);
        })
        .catch(err => console.log(err))
    },[])

    const top25Stocks = stocks.slice(0,25)

    // "id": "bitcoin",
    // "symbol": "btc",
    // "name": "Bitcoin",
    // "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    // "current_price": 23191,
    // "market_cap": 447341043582,
    // "market_cap_rank": 1,
    // "fully_diluted_valuation": 486658105584,
    // "total_volume": 30809731494,
    // "high_24h": 23868,
    // "low_24h": 23174,
    // "price_change_24h": -152.86180407810025,
    // "price_change_percentage_24h": -0.65484,
    // "market_cap_change_24h": -2464418154.6047363,
    // "market_cap_change_percentage_24h": -0.54789,
    // "circulating_supply": 19303412.0,
    // "total_supply": 21000000.0,
    // "max_supply": 21000000.0,
    // "ath": 69045,
    // "ath_change_percentage": -66.43599,
    // "ath_date": "2021-11-10T14:24:11.849Z",
    // "atl": 67.81,
    // "atl_change_percentage": 34075.69276,
    // "atl_date": "2013-07-06T00:00:00.000Z",
    // "roi": null,
    // "last_updated": "2023-02-27T18:45:47.587Z"

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
                                        <Link to={"/stock/view/" + stock.id}>
                                            <img src={stock.image} style={{width: '25px'}}/> {stock.name}
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