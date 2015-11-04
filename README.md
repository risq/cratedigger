cratedigger.js
===========

3D vinyl records exploration & crate digging plugin, using WebGL with Three.js.

[![cratedigger.js demo](http://risq.github.io/cratedigger/img/demo.gif)](http://risq.github.io/cratedigger.js)

**demo** : [http://risq.github.io/cratedigger.js](http://risq.github.io/cratedigger)


Screenshots
-----------

![cratedigger.js screenshot #1](http://risq.github.io/cratedigger/img/screenshot1.png)
![cratedigger.js screenshot #2](http://risq.github.io/cratedigger/img/screenshot2.png)


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
