const fastify = require('fastify')()

const apiKey = "3dbe221d0f697f86309f087587d017cb"

fastify.get('/weather', async function(request, reply){
    const city = request.query.city || 'Motihari'
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + encodeURIComponent(city) 
    + "&appid=" + apiKey 
    + "&units=metric"

    const response = await fetch(url)
    const data = await response.json()

    return{
        city: data.name,
        temp: data.main.temp,
        time: new Date().toLocaleString()
    }

})

fastify.listen({port:3000}, function(err){
    if (err) throw err
    console.log('Server running at http://localhost:3000')
})