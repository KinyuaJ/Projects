 const request= require('request')
const geocode =(address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoia2lueXVhIiwiYSI6ImNsM2xkcGcyMjA0eHozZHBtODYxdGgxdW0ifQ.iDYQHPIkhgsKGFlqh5Kk0Q&limit=1'
    
    request({url, json: true}, (error,{body})=>{
       if(error){
          callback("cant reach weather services", undefined)
         }else if(body.error) {
            callback("Unable to find location try another search",undefined)
         }else{
            callback(undefined,{
              lat: body.features[0].center[1], 
               lon: body.features[0].center[0],
               location: body.features[0].place_name

            })
         }
    }
    )
 }
 


 module.exports=geocode
 