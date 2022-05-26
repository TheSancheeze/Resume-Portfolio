import React from 'react'
import './weather.css'
import clearGif from '../../assets/weather-animations/clear.gif'
import cloudsGif from '../../assets/weather-animations/clouds.gif'
import fogGif from '../../assets/weather-animations/fog.gif'
import rainGif from '../../assets/weather-animations/rain.gif'
import snowGif from '../../assets/weather-animations/snow.gif'
import thunderGif from '../../assets/weather-animations/thunderstorm.gif'

const Weather = () => {
  const [city, setCity] = React.useState("Canyon Country")
  const [bgImg, setBgImg] = React.useState()
  const [name, setName] = React.useState()
  const [imgIcon, setImgIcon] = React.useState()
  const [conditions, setConditions] = React.useState()
  const [temp, setTemp] = React.useState()
  const [high, setHigh] = React.useState()
  const [weather, setWeather] = React.useState()
  const [low, setLow] = React.useState()
  const WEATHERAPI_API_KEY = '273ede59ddfc4407bad51910221605'
  
  React.useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
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
      selectBgImg(weather.current.condition.code)
    }
  }, [weather])

  const selectBgImg = (code) => {
    switch(code) {
      case 1000:
        setBgImg(clearGif)
        break;
      case 1003:
      case 1006:
      case 1009:
        setBgImg(cloudsGif)
        break;
      case 1030:
      case 1135:
      case 1147:
        setBgImg(fogGif)
        break;
      case 1063:
      case 1072:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1198:
      case 1201:
      case 1240:
      case 1243:
      case 1246:
        setBgImg(rainGif)
        break;
      case 1066:
      case 1069:
      case 1114:
      case 1117:
      case 1204:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1237:
      case 1249:
      case 1252:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
        setBgImg(snowGif)
        break;
      case 1087:
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        setBgImg(thunderGif)
        break;
      default:
        setBgImg(clearGif)
    }
  }

  const onKeyPressSubmit = (event) => {
    if(event.code === 'Enter' || event.code === 'NumpadEnter'){
      submitCity()
      event.target.value = ''
    }
  }

  const submitCity = () => {
    if(city === null || city === ''){return}
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    fetch(url)
      .then(res => {
        if (res.ok) {return res.json()}
        else{return}
      })
      .then(data => setWeather(data))
  }

  return (
    <div className='weather__first'>
      <img src={bgImg} alt=''/>
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
              <div className="value">{conditions}</div>
            </div>
            <div className="detail">
              <div className="title">H:</div>
              <div className="value">{high}°f</div>
            </div>
            <div className="detail">
              <div className="title">L:</div>
              <div className="value">{low}°f</div>
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
    </div>
  )
}

export default Weather