
var accountSettings = require('./accountSettings');
var fireEvents = require ('./fire_events');
var http = require('http');


var hotel = accountSettings();

hotel.on("ratingChanged", fireEvents.displayRating);
hotel.on("ratingChanged", fireEvents.checkUnderRating);
hotel.on("ratingChanged", function() {
    fireEvents.checkGoal(this,1000);
});


http.createServer(function (req,res) {
    res.writeHeader(200, {'Contenct-Type': 'text/olain'});
    res.end("Success\n");
	hotel.addStars(220);
	hotel.addStars(320);
	hotel.addStars(600);
	hotel.reduceStars(700);
}).listen(3000,'127.0.0.1');

console.log('listening on port 3000.....');