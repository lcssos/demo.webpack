/**
 * Created by lcssos on 2017/7/1.
 */
// Greeter.js

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
// };

// var config = require('./config.json');
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };

import React, {Component} from 'react'
import config from './config.json';
import styles from './stylesheets/Greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
    </div>
    );
    }
}

export default Greeter