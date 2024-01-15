const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()  

//define path for express config
const publicDirectoryPath= path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views')  
const partialsPath=path.join(__dirname, '../templates/partials')

//setup hanlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
 
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'John Njau'

    })
})
app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Tabby Kinyua'
    })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
         return res.send({
            error: 'You must provide a search term'
        })
    }
    req.query
    res.send({
        products: []
    }
    )
})
app.get('/help', (req, res)=>{
    res.render('help',{
        title:'Help',
        name: 'Wanjiru'
    })
})

  app.get('',(req,res)=>{
      res.send('<h1>welcome to weather express</h1>')
  })
  app.get('/help',(req, res)=>{
res.send([{
    name: 'john',
    age: 89
    },
    {
        name: 'Jane',
        age: 56
    }
])
  })
  app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'

        })
    }

    geocode(req.query.address, (error, {lat, lon, location}= {})=>{
        if(error){
            return res.send ({error})
        }

        forecast(lat, lon, (error, forecastData)=>{
        if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })
    //   res.send({
    //       forecast: 'its rainny season',
    //       location: 'Nairobi',
    //       address: req.query.address
    //   })
  })
  app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'John Njau',
        errormessage: 'Help article not found'
    })
  })
  app.get("*", (req, res)=>{
res.render('404', {
    title: '404',
    name: 'John Njau',
    errormessage: 'PAge not found'
})
  })

  app.listen(3000, ()=>{
      console.log('Server is up on port 3000.')
  }) 