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


    return (
        <div>
            <h1 className="display-6">Top 25 Cryptos</h1>
            <div className="d-flex justify-content-center tableWrapper">
            <table className="table m-2 w-75">
                <thead className="thead">
                    <tr style={{color: 'white'}}>
                        <th colSpan="2" scope="col" className="h5 p-2">Crypto</th>
                        <th scope="col" className="h5 p-2">Price (USD)</th>
                        <th scope="col" className="h5 p-2">24 Hour Change</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        top25Stocks && top25Stocks.map((stock, index) => {
                            return (
                                <tr key={index}>                                    
                                <td className="align-middle td"><img src={stock.image} style={{width: '25px'}}/> </td>

                                    <td className="align-middle td name" style={{color: 'white'}}>
                                        <Link className={"coinLink"} to={"/stock/view/" + stock.id}>
                                            {stock.name}
                                        </Link>
                                    </td>                                    

                                    <td className="align-middle td price_col" style={{color: 'white'}}>
                                        ${stock.current_price}
                                    </td>
                                    {(stock.price_change_24h < 0) ?<td className="align-middle td pricedown"><strong>↓ ${stock.price_change_24h.toFixed(4)}</strong></td>: 
                                        <td className="align-middle td priceup" ><strong>↑ ${stock.price_change_24h.toFixed(4)}</strong> </td>}
                                    
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