var db = require('../modules/database.js');

exports.channelNews = function(req, res) {

  var
  response_data = {},
  channel_type,
  page_limit,
  page_offset,
  current_page,
  channel_type_mapping = {
    'international': '國際',
    'finance': '財經',
    'politics': '政治',
    'literature-and-art': '藝文',
  };

  // 處理 query string
  if (req.query !== {}) {

    channel_type = req.query.channel_type;
    channel_type = channel_type_mapping[channel_type];

    page_limit = Number(req.query.news_count_per_page);
    current_page = Number(req.query.current_page);
    page_offset = (current_page * page_limit) - page_limit;
  }

  // 查詢 指定頻道的新聞總數
  var sql = `
  SELECT count(*) AS page_total
  FROM news
  WHERE channel_type = '${channel_type}'`;

  db.query(sql, function (err, rows, fields) {

    // 計算指定頻道的頁數
    var page_total = Math.ceil(rows[0].page_total / page_limit);

    // 查詢 指定頻道、指定頁面的新聞列表
    var sql = `
    SELECT news_id, main_image, title, description, author, publish_date
    FROM news
    WHERE channel_type = '${channel_type}'
    ORDER BY publish_date DESC
    LIMIT ${page_offset}, ${page_limit}`;

    db.query(sql, function (err, rows, fields) {

      response_data.page_total = page_total;
      response_data.data = rows;

      res.send(response_data);

    });
  });

}
