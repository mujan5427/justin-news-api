var channel = require('../controller/channel.js');


var appRouter = function(app) {

  app.get("/", function(req, res) {
    res.send(channel(req));
  });
  
  app.get("/channel", function(req, res) {
    res.send("channel");
  });
  
  app.get("/news", function(req, res) {
    res.send("news");
  });
 
}
 
module.exports = appRouter;