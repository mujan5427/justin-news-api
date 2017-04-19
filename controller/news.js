var db = require('../modules/database.js');

exports.randomNews = function(req, res) {

  var
  response_data = {};

  // 查詢 id 大於 隨機數 的 5 筆新聞
  var sql = `
  SELECT news_id, main_image, title
  FROM news
  WHERE id > FLOOR(RAND() * (SELECT COUNT(*) FROM news))
  LIMIT 5`;

  db.query(sql, function (err, rows, fields) {

    response_data.data = rows;

    res.send(response_data);
  });

}
