var getRouterName_arr = ['/news', '/channel', '/login'];

var channel = require('../controller/channel.js');
var news = require('../controller/news.js');


module.exports = function(app) {

  // app.use(function(req, res, next) {
  //
  //   if (getRouterName_arr.indexOf(req.path) != -1) {
  //
  //     // 判斷是合法的API路徑，執行接下來的 middleware function
  //     next();
  //
  //   } else {
  //
  //     // 判斷是不合法的API路徑，回傳錯誤訊息
  //     res.end('This is a invalid path : ' + req.path);
  //   }
  //
  // });

  /*
   * API Endpoint Lists
   *
   * --------------------------------------------------
   */


  app.get("/channel-news/list", function(req, res) {

    channel.channelNews(req, res);
  });

  app.get("/random-news/list", function(req, res) {

    news.randomNews(req, res);
  });

  app.get("/news-content", function(req, res) {

    news.newsContent(req, res);
  });

}
