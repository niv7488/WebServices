
module.exports.displayRating = function() {
    console.log("Hotel rating is: " + this.rating);
}

module.exports.checkUnderRating = function() {
        if(this.rating < 0) {
        console.log("Hotel under rating in: " + this.rating);
    }
}

module.exports.checkGoal = function(acc,goal) {
    if(acc.rating > goal) {
        console.log("goal Achived : " + acc.rating);
    }
}