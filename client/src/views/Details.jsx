import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Chart from '../components/Chart'

const Details = () => {
  const { id } = useParams()
  const [stock, setStock] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [desc, setDesc] = useState('')
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(JSON.parse(userId));

    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        setStock(res.data);
        setLoaded(true)
        setDesc(stock.description?.en.slice(0, 501))
      })

      .catch(err => console.log(err))
  }, [loaded])

  const navigate = useNavigate()

  const addFavorite = () => {
    axios.post(`http://localhost:8000/api/favorites/${userId}`, {
      name: stock.name,
      price: stock.market_data.current_price.usd,
      change: stock.market_data.price_change_24h
    })
      .then(res => {
        navigate(`/favorites`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    (loaded ?
      <div className='backgroundStyle'>
        <div className='h1' style={{ color: 'white', padding: '15px' }}>{stock.name}</div>
        <div className='h5' style={{ color: 'white' }}>Current Market Price: ${stock.market_data.current_price.usd} </div>
        <br />
        <button onClick={() => addFavorite()} className='btn btn-outline-success'>Add to Favorites!</button>
        <div className='description' style={{ color: 'white' }}>{desc}... </div>
        <Chart id={id} name={stock.name} />
      </div>
      : "listen listen listen... i gotchu "
    ))
}

export default Details