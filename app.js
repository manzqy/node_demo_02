const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use('/node_modules', express.static('node_modules'))

app.listen(3000, '127.0.0.1', () => {
    console.log('server is running at: http://127.0.0.1:3000');
    
})

app.use(router)

