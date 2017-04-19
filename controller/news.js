var db = require('../modules/database.js');

exports.randomNews = function(req, res) {

  var
  response_data = {},
  news_count;

  // 處理 query string
  if (req.query !== {}) {

    news_count = Number(req.query.news_count);
  }

  // 查詢 隨機排序的新聞列表
  var sql = `
  SELECT news_id, main_image, title
  FROM news
  ORDER BY RAND()
  LIMIT ${news_count}`;

  db.query(sql, function (err, rows, fields) {

    response_data.data = rows;

    res.send(response_data);
  });

}


exports.newsContent = function(req, res) {

  var
  response_data = {},
  news_id;

  // 處理 query string
  if (req.query !== {}) {

    news_id = Number(req.query.news_id);
  }

  // 查詢 隨機排序的新聞列表
  var sql = `
  SELECT main_image, main_image_figcation, title, author, publish_date, content
  FROM news
  WHERE news_id = ${news_id}`;

  db.query(sql, function (err, rows, fields) {

    response_data.data = rows;

    res.send(response_data);
  });

}
