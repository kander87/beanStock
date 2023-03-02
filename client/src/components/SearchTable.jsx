import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SearchTable = (props) => {
    const [stocks, setStocks] = useState([])
    const [query, setQuery] = useState("")


    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
                setStocks(data.coins)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [query])

    return (
        <div className='searchTable d-flex justify-content-center flex-column p-2' >
            <div className="search">
                <input type="text"
                    placeholder={"Search Cryptos"}
                    className={"input"}
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                />
            </div>
            <div className="results">
                {stocks?.map(stock => (
                    <div key={stock.id}>
                        <img src={stock.large} style={{width: '25px', padding: '2px'}}/>
                        {/* {stock.large} */}
                        <Link className={"coinLink2"} to={"/stock/view/" + stock.id}>
                        {stock.name}</Link>
                    </div>
            ))}
            </div>
            </div>

            )
        
}

            export default SearchTable