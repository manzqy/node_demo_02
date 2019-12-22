const ejs = require('ejs')
const heroquery = require('./data_query')
exports.showIndexPage = function(req, res) {
  heroquery.getAllHero((err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '数据获取失败'
    });
    res.render('index', {})
  })
 
}
exports.getHeroData = function(req, res) {
  heroquery.getAllHero((err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '数据获取失败'
    });
    res.json({
      code: 200,
      msg: '获取数据成功',
      data: data
    })
  })
}
exports.delHeroData = function(req, res) {
  let {id} = req.query
  heroquery.delOneHero(id, err => {
    if (err) return res.json({
      code: 201,
      msg: '删除失败'
    })
    res.json({
      code: 200,
      msg: '删除成功'
    })
  })
}
exports.addHeroData = function(req, res){
  let obj = req.body
  heroquery.addHeroData(obj, (err) => {
    if (err) return res.json({
      code:  201,
      msg: '添加失败'
    })
    res.json({
      code: 200,
      msg: '添加成功'
    })
  })
}

exports.showAddPage = function(req, res) {
  res.render('add', {})
}
exports.showEditPage = function(req, res) {
  let {id} = req.query
  heroquery.getOneHero(id, (err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '服务器错误'
    })
    res.render('edit', data[0])
  })
 
}
exports.showInfoPage = function(req, res) {
  let {id} = req.query
  heroquery.getOneHero(id, (err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '服务器错误'
    })
    res.render('info', data[0])
  })
 
}
exports.editHero = function(req, res) {
  let obj = req.body
  heroquery.editHeroInfo(obj, err => {
    if (err) return res.json({
      code: 201,
      msg: '修改失败'
    })
    res.json({
      code: 200,
      msg: '修改成功'
    })
  })
}
