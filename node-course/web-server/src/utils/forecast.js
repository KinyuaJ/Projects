const request=require('request')
const forecast =(lat, lon, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=df2a87253feea9cb64d91adb5b54aec8&query='+ lon+','+lat +'&units=m'
 
  request({url, json: true}, (error, {body})=>{
      
       if (error){
         callback("Unable to connect to weather services",undefined)
       }else if(body.error){
          callback("unable to find location try another search",undefined)
       }
        else {
            callback(undefined,`${body.current.weather_descriptions[0]} .It is currently ${body.current.temperature} degrees out,it feels ${body.current.feelslike} degrees out`,undefined)
     }})
    }
    
     module.exports=forecast