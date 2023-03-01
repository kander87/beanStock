import React, { useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Chart from '../components/Chart'

const Details = (props) => {
  const { id } = useParams()
  const [stock, setStock] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [desc, setDesc]= useState('')
  const { userStatus } = props
  const {firstName} = props

  //{userStatus._id}

  //isAuthenticated

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

    const navigate = useNavigate()
    
    // TODO: need to have user id to send in axios.get request
    const addFavorite = () => {
      axios.post(`http://localhost:8000/api/favorite/${id}`, {
      name: stock.name,
      price: stock.market_data.current_price.usd,
      change: stock.market_data.price_change_24h
      })
        .then(res => {
          console.log('this here')
          navigate(`/favorites`)
        })
        .catch(err => {
          console.log(err)
        })}

  return (
    (loaded?
    <div className='backgroundStyle'>
      <div className='h1' style={{color: 'white' , padding: '15px'}}>{stock.name}</div>
      <div className='h5' style={{color: 'white'}}>Current Market Price: ${stock.market_data.current_price.usd} </div>
      <br/>
      <Link to = {'/favorites/'+ id + "/" + firstName}><button onClick={{addFavorite}} className='btn btn-outline-success'>Add to Favorites!</button></Link>
      <div className='description' style={{color: 'white'}}>{desc}... </div>
      <Chart id = {id} name={stock.name}/>
    </div>
      : "listen listen listen... i gotchu "
    ))
}

export default Details