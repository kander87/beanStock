import React, { useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
const Details = () => {
  const { id } = useParams()
  const [stock, setStock] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [desc, setDesc]= useState('')
//HELLO WORLD!!!
  useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        setStock(res.data);
        console.log(stock)
        setLoaded(true)
        setDesc(stock.description?.en.slice(0,501))
      })
      
      .catch(err => console.log(err))
  },[loaded])

  return (
    (loaded?
    <div className='backgroundStyle'>
      <div className='h1' style={{color: 'white' , padding: '15px'}}>{stock.name}</div>
      <div className='h5' style={{color: 'white'}}>Current Market Price: ${stock.market_data.current_price.usd} </div>
      <div className='description' style={{color: 'white'}}>{desc}... </div>
      <button className='btn btn-outline-success'>Add to Favorites!</button>
    </div>
      : "listen listen listen... i gotchu "
    ))
}

export default Details