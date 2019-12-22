const express = require('express')

let control = require('./control')

const router = express.Router()

router
.get('/', (req, res) => {
    control.showIndexPage(req, res)
})
.get('/add', (req, res) => {
    control.showAddPage(req, res)
})
.get('/edit', (req, res) => {
    control.showEditPage(req, res)
})
.get('/info', (req, res) => {
    control.showInfoPage(req, res)
})
.get((req,res) => {
    res.send('404 not found')
})
.get('/addHero', (req, res) => {
    control.addHero(req, res)
})
.post('/addHeroData', (req, res) => {
    control.addHeroData(req, res)
})
.get('/getAllHero', (req, res) => {
    control.getHeroData(req, res)
})
.get('/delHero', (req, res) => {
    control.delHeroData(req, res)
})
.post('/editHeroInfo', (req, res) => {
    control.editHero(req, res)
})


module.exports = router