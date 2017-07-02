/**
 * Created by lcssos on 2017/7/1.
 */
//main.js
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './stylesheets/main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('container'));