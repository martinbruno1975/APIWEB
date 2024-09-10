const express = require('express')
const routes = require('./routes')
const { genericMiddleware } = require('./middlewares')
const app = express()
const PORT = 3001

app.use(express.json())

/*app.get('/',(req, res) => {
    res.send('Aplicacion Iniciada ...')
})
*/

app.use(genericMiddleware.requestTime)
app.use(routes.seriesRoute)
app.use(routes.usuariosRoute)

app.listen(PORT, ()=>{
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
})