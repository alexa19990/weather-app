import React, { useState } from 'react'
import axios from 'axios'
import classes from './modules/App.module.scss'

const App = () => {

  const [weather, setWeather] = useState()
  const [value, setValue] = useState()

  const clickHandler = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=2f0ad3953411bdfb6c2964fa864b71d0`)
      .then(res => {
        setWeather(res.data)
        console.log(res.data)
      })
  }  
  
  return (
    <div className={classes['container']}>
      <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)} />
        <button onClick={clickHandler}>search</button>
      </div>
      <h1>{weather && `weather in ${weather.name}`}</h1>
      <h1>{weather && `${weather.main.temp}C` }</h1>
      <div className={classes['clouds']}>
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <p>{weather && weather.weather[0].description}</p>
      </div>
      <p>Humidity: {weather && weather.main.humidity}%</p>
      <p>Wind speed: {weather && weather.wind.speed} km/h</p>
    </div>
  )
}

export default App