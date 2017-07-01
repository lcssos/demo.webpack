/**
 * Created by lcssos on 2017/7/1.
 */
// Greeter.js

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
// };

var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};