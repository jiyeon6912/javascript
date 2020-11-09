const weather = document.querySelector('.weather')

//b9b03d0e304d71b6679f5e07215b44ba

const API = 'b9b03d0e304d71b6679f5e07215b44ba'

//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`  //&units=metric 화씨를 섭씨로 변경함.
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const name = json.name
      const temp = json.main.temp

      weather.innerText = `${temp}도 ${name}`
    })
}

 function saveCoords(coords) {
   localStorage.setItem('coords',JSON.stringify(coords))
 }

function geoSuccess(position) {
  console.log('성공')
  console.log(position)
  console.log(position.latitude)
  console.log(position.longitude)

  const latitude = position.latitude
  const longitude = position.longitude

  const coords = {
    latitude:latitude,
    longitude:longitude
  }

saveCoords(coords)
getWeather(latitude,longitude
  )
}

function geoError() {
  alert('위치 정보를 허용하지 않았습니다.')
  // console.log('위치 정보를 허용하지 않았습니다.')
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}

function loadCoords() {
  // const loadedCoords = localStorage.getItem('coords')
  askCoords()
}

function init() {
loadCoords()
}

init()