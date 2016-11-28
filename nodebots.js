var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(12);
  led.blink(300);

  var led = new five.Led(13);
  led.blink(100);
  //
  var led = new five.Led(8);
  led.blink(500);

});
