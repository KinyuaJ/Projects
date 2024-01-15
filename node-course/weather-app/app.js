 const request = require('request'); 
const geocode=require('./utils/geocode')
const forecast= require('./utils/forecast')

const address=process.argv[2]

if(!address){
  console.log("Please provide an address")
}else{
  geocode(address, (error, data)=>{
    if(error){
      return console.log(error)
    }
  forecast(data.lat, data.lon, (error, forecastdata)=>{
   if(error){
   return console.log( error)
  }
  console.log(data.location)
  console.log(forecastdata)  
  })
  })
}


//  const url = 'http://api.weatherstack .com/current?access_key=df2a87253feea9cb64d91adb5b54aec8&query=37.8267,-122.4233&units=m';
//  request({url: url, json: true}, (error, response)=>{
//    if (error){
//       console.log("Unable to connect to weather services")
//    }
//     else {console.log(`${response.body.current.weather_descriptions[0]} .It is currently ${response.body.current.temperature} degrees out,it feels ${response.body.current.feelslike} degrees out`)
//  }})
//  const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2lueXVhIiwiYSI6ImNsM2xkcGcyMjA0eHozZHBtODYxdGgxdW0ifQ.iDYQHPIkhgsKGFlqh5Kk0Q&limit=1';
//  request({url:geocodeurl, json: true}, (error, response)=>{
//    if (error){
//       console.log("Unable to connect to weather services")
//    }else if(response.body.error){
//       console.log("Unable to find location")
//    }else{
//     console.log(response.body.features[0].center)
//    }
//  })
