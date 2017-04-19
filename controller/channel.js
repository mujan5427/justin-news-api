var db = require('../modules/database.js');

module.exports = function(req, res) {

  var
  channel_type,
  page_limit,
  page_offset,
  current_page;

  var channel_type_mapping = {
    'international': '國際',
    'finance': '財經',
    'politics': '政治',
    'literature-and-art': '藝文',
  };

  if (req.query !== {}) {

    channel_type = req.query.channel_type;
    channel_type = channel_type_mapping[channel_type];

    page_limit = Number(req.query.news_count_per_page);
    current_page = Number(req.query.current_page);
    page_offset = (current_page * page_limit) - page_limit;
  }

  var sql = `SELECT count(*) AS page_total FROM news`;

  db.query(sql, function (err, rows, fields) {

    var page_total = Math.ceil(rows[0].page_total / page_limit);

    var sql = `
    SELECT news_id, main_image, title, description, author, publish_date
    FROM news
    WHERE channel_type = '${channel_type}'
    ORDER BY publish_date DESC
    LIMIT ${page_offset}, ${page_limit}`;

    db.query(sql, function (err, rows, fields) {

      var response_data = {'page_total': page_total};

      response_data.data = rows;

      res.send(response_data);

    });
  });






  // response data :
  //   news_id
  //   main_photo
  //   title
  //   author
  //   publish_date
  //   description
  //   link_address
  // have_data

}
