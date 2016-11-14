cratedigger.js
===========

3D vinyl records exploration & crate digging plugin, using WebGL with Three.js.

[![cratedigger.js demo](https://github.com/risq/cratedigger/blob/master/src/images/demo.gif?raw=true)](http://risq.github.io/cratedigger.js)

**demo** : [http://risq.github.io/cratedigger.js](http://risq.github.io/cratedigger)


Screenshots
-----------

![cratedigger.js screenshot #1](https://github.com/risq/cratedigger/blob/master/src/images/screenshot1.png?raw=true)
![cratedigger.js screenshot #2](https://github.com/risq/cratedigger/blob/master/src/images/screenshot2.png?raw=true)


Using with npm
-----------

Install cratedigger.js :

    npm install --save cratedigger.js

Use the library in your app :

`````javascript
var cratedigger = require('cratedigger.js');
cratedigger.init(options);
`````


Building & testing
-----------

Clone repo :

    git clone git@github.com:risq/cratedigger.js.git cratedigger.js
    cd cratedigger.js

Install dependencies :
    
    npm install
    
Build vendors & assets :

    npm run build
    
Run cratedigger.js (with browsersync & watchers) :
    
    npm start
    
Build  :

    gulp build
    
Enjoy !!
