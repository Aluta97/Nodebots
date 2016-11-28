var express = require('express'),
    five = require("johnny-five"),
    board = new five.Board(),
    bodyParser = require('body-parser'),
    exphbs  = require('express-handlebars'),

    app = express();

  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');

  board.on("ready", function() {

  var led1 = new five.Led(12);
  led1.on();

  var led2 = new five.Led(13);
  led2.on();

  var led3 = new five.Led(8);
  led3.on();

  app.get('/', function(req, res){
    res.render('home')
  })

  app.get("/off",function(req, res){
      led1.off();
      res.render('home')
  });

  app.get("/on",function(req, res){
      led1.on();
      res.render('home')
  });

  app.get("/off2",function(req, res){
      led2.off();
      res.render('home')
  });

  app.get("/on2",function(req, res){
      led2.on();
      res.render('home')
  });

  app.get("/off3",function(req, res){
      led3.off();
      res.render('home')
  });

  app.get("/on3",function(req, res){
      //res.render("home");
      led3.on();
      res.render('home')
  });

  app.set('port', (process.env.PORT || 3000));
  //start the app like this:
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });


});
