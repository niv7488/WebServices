
var accountSettings = require('./accountSettings');
var http = require('http');

var myArray = [];
var hotel = accountSettings();

hotel.on("ratingChanged", function() {
    console.log("Hotel rating is: " + this.rating);
    myArray.push("Hotel rating is: " + this.rating);
});
hotel.on("ratingChanged", function() {
    if(this.rating < 0) {
        console.log("Hotel under rating in: " + this.rating);
        myArray.push("Hotel under rating in: " + this.rating);
    }
});
hotel.on("ratingChanged", function() {
    if(this.rating > 1000) {
        console.log("goal Achived : " + this.rating);
        myArray.push("goal Achived : " + this.rating);
    }
});

http.createServer(function (req,res) {
    res.writeHeader(200, {'Contenct-Type': 'text/olain'});
    hotel.addStars(220);
    hotel.addStars(320);
    hotel.addStars(600);
    hotel.reduceStars(400);
    var response = "Success\n";
    for(var i = 0; i < myArray.length; ++i){
        response += myArray[i] + "\n";
    }
    res.end(response);
}).listen(3000,'127.0.0.1');

console.log('listening on port 3000.....');