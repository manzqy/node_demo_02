const mysql = require('mysql')
const moment = require('moment')
const cnt = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'herocrud',
  dateStrings: true
})
cnt.connect()

exports.getAllHero = function(callback) {
  cnt.query(`SELECT * FROM heros`, (err, result) => {
    if (err) return callback(err)
    callback(null, result)
  })
} 

exports.addHeroData = function(obj, callback) {
  obj.date = moment().format('YYYY-MM-DD hh:mm:ss')
  cnt.query(`INSERT INTO heros set ?`, [obj], (err) => {
    if (err) return callback(err)
    callback(null)
  })
}

exports.getOneHero = function(id, callback) {
  let sql = `SELECT * FROM heros WHERE id=?`
  cnt.query(sql, [id], (err, data) => {
    if (err) return callback(err)
    callback(null, data)
  })
}
exports.delOneHero = function(id, callback) {
  let sql = `DELETE FROM heros WHERE id=?`
  cnt.query(sql, [id], (err, data) => {
    if (err) return callback(err)
    callback(null)
  })
}
exports.editHeroInfo = function(obj, callback) {
  let {id} = obj
  delete obj.id
  obj.date = moment().format('YYYY-MM-DD hh:mm:ss')
  let sql = `UPDATE heros SET ? WHERE id=?`
  cnt.query(sql, [obj, id], (err, data) => {
    if (err) return callback(err)
    callback(null)
  })
}