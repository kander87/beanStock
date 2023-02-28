import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)

const Chart = (props) => {
    const [prices,setPrices] = useState([])
    const dates =[]
    const price =[]

    useEffect(()=> {
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=7&interval=daily`)
        .then(res => {
            setPrices(res.data.prices);
        })
        .catch(err => console.log(err))
    },[])

for (let i= 0;i<prices.length;i++){
    dates.push(new Date(prices[i][0]).toDateString().slice(0,3))
    price.push(prices[i][1].toFixed(4))
}

const data = {
    labels: dates,
    datasets: [{
        data: price,
        borderColor: 'black',
        pointBorderColor: 'blue'
    }]
}
    return (
        <div>
            <h1 className='text-white'>{props.name}'s Past Week Market Price</h1>
            <div className='w-50 bg-white mx-auto'>
                <Line data={data}></Line>
            </div>
        </div>
    )
}

export default Chart