var db = require('../modules/database.js');

module.exports = function(req, res) {

  // console.log(req);

  var sql = `
  SELECT news_id, main_image, title, description, author, publish_date
  FROM news
  WHERE channel_type = '國際'
  LIMIT 10`;

  db.query(sql, function (err, rows, fields) {

    var data_count = rows.length;
    var response_data = {'news_amount': 'yes'};

    response_data.data = rows;

    res.send(response_data);
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
