(function(d, w, u){

    'use strict';

    /* **********************************************************
     * ********************* Mousewheel.js **********************
     * **********************************************************
     *
     * Copyright (c) 2014 Serkan Sipahi <serkan.sipahi@yahoo.de>;
     * Licensed under the MIT license
     *
     * **********************************************************
     * **********************************************************
     *
     * *** Crossbrowser Support --> IE8,9,10,11, Chrome, FF,
     * *** Opera, Safari
     *
     * Simple Usage
     * *****************
     *
     * var instance = new Mousewheel('#some-id', function(e){
     *     e.preventDefault();
     *     console.dir(e);
     * });
     *
     */

    Classy('Mousewheel', {

        __constructor : function(){
            this._init.apply(this, arguments);
        },

        _VERSION : 'v0.1',

        /**
         * @default options
         */
        _defaults : {
            prevenDefault : false,
            stopPropagation : false,
            //**** behaviors ***
            smooth : false,
            unit : 'px',
            distance : null,
            duration : 500,
            //***********************
            // > same behavior in all browser
            //   see wrapped _defaults options
            sameBehavoior : false
        },

       /**
        * @selector matcher
        * use this method for matching elements on dom tree
        * it works on IE8,9,10,11, chrome, firefox, safari, opera
        * _$('#test-id)
        */
        _$ : null,

        /**
         * feature detecting without navigator.userAgent
         */
        _feature : {
            addEventListener : !!Element.prototype.addEventListener,
            preventDefault   : !!Event.prototype.preventDefault,
            stopPropagation  : !!Event.prototype.stopPropagation,
            querySelectorAll : !!document.querySelectorAll,
            functionBind     : !!Function.prototype.bind,
            // >= IE8, Chrome, Safari, Opera ansonsten 'DOMMouseScroll'
            mousewheel       : !!('onmousewheel' in d.createElement('div'))
        },

        /**
         * _c = Alisas prefix for constructor
         */
        _cElement  : null,
        _cFunction : null,
        _cArgs     : null,

        /**
         * its depends to _initQuerySelector
         */
        _eventListeners : [],
        _addEventListener : null,
        _removeEventListener : null,

        /**
         * detected mousewheel type
         * default value is mousewheel
         */
        _mousewheel : 'mousewheel',

        /**
         * direction mousewheel(up/down)
         */
        _direction : {
            mousewheel : null
        },

        /**
         * @Helper functions
         */

        // > check typeof an object
        _is : function(typeName, value){
            return {}.toString.apply(value) === '[object ' + typeName + ']';
        },
        // > check if property in object exists
        _isset : function(prop, obj){
            return ( prop in obj );
        },
        // > check if object a dom node
        _isDomNode : function(obj){
            return obj.nodeType > 0;
        },
        // > check if element exists on dom tree
        _elementExists : function(value){
            return true;
        },

        /**
         * Custom exceptions
         */
        _Exception : function(name, message){
            this.name = name+'Exception';
            this.message = message || 'Default Message';
        },
        _initCustomErrorExceptions : function(){
            this._Exception.prototype = new Error();
            this._Exception.prototype.constructor = this._Exception;
        },

        /**
         * @core logic
         * private methods
         **/
        _init : function(){

            this._initCustomErrorExceptions();

            /*
             * prepare constructor vars
             */
            this._cArgs     = [].slice.apply(arguments) || null;
            this._cElement  = this._cArgs[0] || null;
            this._cFunction = this._cArgs[1] || null;

            if(this._cElement===null && this._cFunction===null) {
                throw { name:'Null', message:'do not pass any arguments ( constructor )'};
            } else if(this._cFunction===null){
                throw { name:'Null', message:'you forget to pass the callback function ( constructor )'};
            }

            if(!this._elementExists(this._cElement)){
                throw { name:'Exists', message:'Element not exists on dom tree'};
            }
            if(!this._is('Function', this._cFunction)){
                throw { name:'Exists', message:'Could not find callback function'};
            }

            // > init cross browser supports
            this._initEventListener();
            this._initQuerySelector();
            this._mapEventListenersToOnOff();
            this._initMousewheelEventType();

            /**
             * return if we already have instantiated the element
             */
            if(this._isElementInstantiated()){
                throw { name:'Exists', message:'Element "'+this._cElement+'" is already instantiated'};
            }

            // > start mousewheel eventhandler
            this._start();


        },
        _start : function(){

            var res = this._$(this._cElement),
                item= 0, length= 0, self=this,
                directionMW=null;

            for(item=0, length=res.length; item<length; item++){

                // > we can check( this._isElementInstantiated() ) later
                //   whether the element is instantiated
                res[item].__mousewheelInstance = true;
                // > bind mouswheel event on element
                res[item].on(self._mousewheel, function(e){
                    // > bind on this.__context__ the self/this scope of mousewheel class
                    this.__context__ = self;

                    self._afterEventBeforeCallback.apply(this, [e]);
                    self._cFunction.apply(this, arguments);
                });
            }

        },
        // > determine the direction( up/down/left/right ) of
        //   mousewheel in firefox browser
        _determineDirection : function(value){
            return value < 0 ? -1 : + 1;
        },
        // > hook callback between event and callback function
        _afterEventBeforeCallback : function(e){

            /**
             * Crossbrowser mousewheel calibration
             */

            // > this.__context__ is equal to self/this scope of mousewheel class
            var context=this.__context__, directionMW=null;
            context._direction.mousewheel = context._determineDirection(e.deltaY);

            if(!e.deltaX && !e.deltaY &&!e.deltaZ){

                // > determine direction for Firefox, IE(>=8 && <=11)
                // > notice: FF=Firefox, IE=Internet-Explorer
                //   this.__context = this/self of mousewheel class
                var FFreverse = context._determineDirection(e.detail),
                    IEreverse = -1;

                // > firefox has not e.deltaX, e.deltaY, e.deltaZ
                //   and e.wheelDelta, too. So we give them tmpValue of 40
                //   and assign it to new props e.deltaY, ..., ...
                e.deltaX = ( e.wheelDelta /3 * IEreverse ) || ( 40 * FFreverse );
                e.deltaY = ( e.wheelDelta /3 * IEreverse ) || ( 40 * FFreverse );
                e.deltaZ = ( e.wheelDelta /3 * IEreverse ) || ( 40 * FFreverse );

                context._direction.mousewheel = context._determineDirection(e.deltaY);
            }

            /**
             * collect useful properties
             */

            // > determined direction of mousewheel
            directionMW = context._direction.mousewheel;

            e.__mousewheel__ = {};
            e.__mousewheel__.currentTarget=this;
            e.__mousewheel__.instance=context;

            e.__mousewheel__.deltaX = e.deltaX;
            e.__mousewheel__.deltaY = e.deltaY;
            e.__mousewheel__.deltaZ = e.deltaZ;

            e.__mousewheel__.intDirectionX = directionMW;
            e.__mousewheel__.intDirectionY = directionMW;

            e.__mousewheel__.speackDirectionX = directionMW < 0 ? 'left' : 'right';
            e.__mousewheel__.speackDirectionY = directionMW < 0 ? 'up'  : 'down';

        },
        // > determine mousewheel eventhandler type
        _initMousewheelEventType : function(){
            if(!this._feature.mousewheel){
                this._mousewheel = 'DOMMouseScroll';
            }
        },
        // > init crossbrowser querySelector
        _initQuerySelector : function(){

            if(this._feature.querySelectorAll && this._feature.functionBind){
                this._$ = d.querySelectorAll.bind(d);
            } else {
                // > simulate querySelectorAll for ie7, ie8
                // > http://www.codecouch.com/2012/05/adding-document-queryselectorall-support-to-ie-7/
                var s = d.createStyleSheet();
                d.querySelectorAll = function(r, c, i, j, a) {
                    a=d.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                    for (i=r.length; i--;) {
                        s.addRule(r[i], 'k:v');
                        for (j=a.length; j--;) { a[j].currentStyle.k && c.push(a[j]); }
                        s.removeRule(0);
                    }
                    return c;
                };
                // > simulate functionBind for ie7, ie8
                // > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== 'function') {
                        throw { name:'TypeError', message:'Function.prototype.bind - what is trying to be bound is not callable'};
                    }
                    var aArgs = Array.prototype.slice.call(arguments, 1),
                        fToBind = this,
                        fNOP = function () {},
                        fBound = function () {
                            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                aArgs.concat(Array.prototype.slice.call(arguments)));
                        };

                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP();

                    return fBound;
                };
                this._$ = d.querySelectorAll.bind(d);
            }
        },
        _mapEventListenersToOnOff : function(){

            var self                    = this,
                addEventListener        = Element.prototype.addEventListener,
                removeEventListener     = Element.prototype.removeEventListener,
                addEventListenerCain    = function(){
                    addEventListener.apply(this, arguments); return this;
                },
                removeEventListenerCain = function(){
                    removeEventListener.apply(this, arguments); return this;
                };

            Element.prototype.on  = addEventListenerCain;
            Element.prototype.off = removeEventListenerCain;

            if (Window) {
                Window.prototype.on  = addEventListenerCain;
                Window.prototype.off = removeEventListenerCain;
            }

        },
        /**
         * check if passed constructor element var instantiated
         * @return {bool}
         */
        _isElementInstantiated : function(){
            var elements = this._$(this._cElement), i=0, length=0;
            for(i=0, length=elements.length;i<length;i++){
                if(!elements[i].__mousewheelInstance) { continue; } return true;
            }
        },
        // > init crossbrowser eventHandler
        _initEventListener : function(){

            var context = this;

            if(!this._feature.preventDefault){
                Event.prototype.preventDefault=function(){
                    this.returnValue=false;
                };
            }
            if(!this._feature.stopPropagation){
                Event.prototype.stopPropagation=function(){
                    this.cancelBubble=true;
                };
            }

            if(!this._feature.addEventListener){

                this._eventListeners=[];
                this._addEventListener=function(type, listener){

                    var self=this,
                        wrapper=function(e){

                            e = window.event || e;

                            e.target= e.srcElement;
                            e.currentTarget=self;

                            if(listener.handleEvent){
                                listener.handleEvent(e);
                            } else {
                                listener.call(self, e);
                            }
                        };

                    this.attachEvent('on'+type, wrapper);
                    context._eventListeners.push({object:this, type:type, listener:listener, wrapper:wrapper});

                };
                this._removeEventListener=function(type, listener){

                    var counter=0,i= 0,eListener;
                    for(i=0,counter=context._eventListeners.length;i<counter;i++){
                        eListener=context._eventListeners[i];

                        if(eListener.object===this && eListener.type===type && eListener.listener===listener){
                            this.detachEvent('on'+type, eListener.wrapper); delete context._eventListeners[i];
                        }

                    }
                };

                Element.prototype.addEventListener = this._addEventListener;
                Element.prototype.removeEventListener = this._removeEventListener;

                if (Window) {
                    Window.prototype.addEventListener = this._addEventListener;
                    Window.prototype.removeEventListener = this._removeEventListener;
                }

            }

        },

        ////// > public methods

        /**
         * smoothwheel for none smoothscroll browers
         * @param {bool} value
         * @return {object} this
         */
        smoothWheel : function(value){
            return this;
        },
        /**
         * this method related to this.smoothWheel
         * set the max triggered e.deltaY, e.deltaZ, ... values
         * @param {string} value
         * @return {object} this
         */
        setDistance : function(value){
            return this;
        },
        /**
         * get reached distance
         * @return {string}
         */
        getDistance : function(){

        },
        /**
         * reaching distances in milliseconds
         * @param {int} int
         */
        setDuration : function(value){
            return this;
        },
        /**
         * get current event.preventDefault()
         * @return {bool} false/true
         */
        getPreventDefault : function(){

        },
        /**
         * set event.preventDefault()
         * @param {book} int
         */
        setPreventDefault : function(value){

        },
        /**
         * set event.stopPropagation()
         * @param {book} int
         */
        setStopPropagation : function(){

        },
        /**
         * get current event.stopPropagation()
         * @return {bool} false/true
         */
        getStopPropagation : function(){

        },
        /**
         * destroy mousewheel instance
         * @return {null}
         */
        destroy : function(){

        }

    }, true);

}(document, this, void(0)));
