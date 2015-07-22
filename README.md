cratedigger.js
===========

3D vinyl records exploration & crate digging plugin, using WebGL with Three.js.

[![cratedigger.js demo](http://risq.github.io/cratedigger.js/img/demo.gif)](http://risq.github.io/cratedigger.js)

**demo** : [http://risq.github.io/cratedigger.js](http://risq.github.io/cratedigger.js)


Screenshots
-----------

![cratedigger.js screenshot #1](http://risq.github.io/cratedigger.js/img/screenshot1.png)
![cratedigger.js screenshot #2](http://risq.github.io/cratedigger.js/img/screenshot2.png)


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

Install `bower` and `gulp` (if not already installed) :
    
    npm install bower -g
    npm install gulp -g

Install dependencies :
    
    npm install
    bower install
    
Run cratedigger.js :
    
    npm start
    
Build  :

    gulp build
    
Enjoy !!
