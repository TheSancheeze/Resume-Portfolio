import React from 'react'
import './weather.css'
//import Image from '../../assets'

const Weather = () => {
  const [city, setCity] = React.useState("Canyon Country")
  const [name, setName] = React.useState()
  const [imgIcon, setImgIcon] = React.useState()
  const [conditions, setConditions] = React.useState()
  const [temp, setTemp] = React.useState()
  const [high, setHigh] = React.useState()
  const [weather, setWeather] = React.useState()
  const [low, setLow] = React.useState()
  const WEATHERAPI_API_KEY = '273ede59ddfc4407bad51910221605'
  
  React.useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
      .then(res => res.json())
      .then(data => setWeather(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if(weather !== undefined){
      setImgIcon(weather.current.condition.icon)
      setConditions(weather.current.condition.text)
      setTemp(weather.current.temp_f)
      setHigh(weather.forecast.forecastday[0].day.maxtemp_f)
      setImgIcon(weather.current.condition.icon)
      setLow(weather.forecast.forecastday[0].day.mintemp_f)
      setName(weather.location.name)
    }
  }, [weather])


  const onKeyPressSubmit = (event) => {
    if(event.code === 'Enter' || event.code === 'NumpadEnter'){
      submitCity()
      event.target.value = ''
    }
  }

  const submitCity = () => {
    if(city === null || city === ''){return}
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    fetch(url)
      .then(res => {
        if (res.ok) {return res.json()}
        else{return}
      })
      .then(data => setWeather(data))
  }

  return (
    <div className="weather__container">
      <div className="weather__header">
        <div className="icon__container">
          <div className="icon">
            <img src={imgIcon} alt=''/>
          </div>
        </div>
        <div className="location">{name}</div>
        <div className="temperature">{temp} °f</div>
      </div>
      <div className="content">
        <div className="detail__section">
          <div className="detail">
            {/* <div className="title">Conditions:</div> */}
            <div className="value">{conditions}</div>
          </div>
          <div className="detail">
            <div className="title">H:</div>
            <div className="value">{high} °f</div>
          </div>
          <div className="detail">
            <div className="title">L:</div>
            <div className="value">{low} °f</div>
          </div>
        </div>
        <div className="city-search-container">
          <input type="text" className="city-search" placeholder="Enter Location" onChange={(event) => setCity(event.target.value)} onKeyPress={onKeyPressSubmit}/>
        </div>
      </div>
      <div className="link__back">
      Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
      {/* <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a> */}
      </div>
    </div>
  )
}

export default Weather