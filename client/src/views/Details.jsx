import React, { useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Chart from '../components/Chart'

const Details = () => {
  const { id } = useParams()
  const [stock, setStock] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [desc, setDesc]= useState('')

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
      <button className='btn btn-outline-success mt-3'>Add to Favorites!</button>
      <div className='h1' style={{color: 'white' , padding: '15px'}}>{stock.name}</div>
      <div className='h5' style={{color: 'white'}}>Current Market Price: ${stock.market_data.current_price.usd} </div>
      <div className='description' style={{color: 'white'}}>{desc}... </div>
      <Chart id = {id} name={stock.name}/>
    </div>
      : "listen listen listen... i gotchu "
    ))
}

export default Details