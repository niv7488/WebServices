var events = require('events');
var util = require('util');
util.inherits(Hotel, events.EventEmitter);


function Hotel () {
    this.rating = 0;
    events.EventEmitter.call(this);
}

Hotel.prototype.addStars = function(amount) {
    this.rating += amount;
    this.emit('ratingChanged');
};
Hotel.prototype.reduceStars = function(amount) {
    this.rating -= amount;
    this.emit('ratingChanged');
};

module.exports = function() {
    var hotel = new Hotel();
    return hotel;
}


