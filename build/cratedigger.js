(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*
                  _____              _____              _____             _______
                 /\    \            /\    \            /\    \           /::\    \
                /::\    \          /::\    \          /::\    \         /::::\    \
               /::::\    \         \:::\    \        /::::\    \       /::::::\    \
              /::::::\    \         \:::\    \      /::::::\    \     /::::::::\    \
             /:::/\:::\    \         \:::\    \    /:::/\:::\    \   /:::/~~\:::\    \
            /:::/__\:::\    \         \:::\    \  /:::/__\:::\    \ /:::/    \:::\    \
           /::::\   \:::\    \        /::::\    \ \:::\   \:::\    \:::/    / \:::\    \
          /::::::\   \:::\    \__    /::::::\    \_\:::\   \:::\    \:/____/   \:::\____\
         /:::/\:::\   \:::\____\ \  /:::/\:::\    \ \:::\   \:::\    \    |     |:::|    |
        /:::/  \:::\   \:::|    | \/:::/  \:::\____\ \:::\   \:::\____\___|     |:::|____|
        \::/   |::::\  /:::|____| /:::/    \::/    /  \:::\   \::/    /   _\___/:::/    /
         \/____|:::::\/:::/    /\/:::/    / \/____/\   \:::\   \/____/:\ |::| /:::/    /
               |:::::::::/    /:::::/    /      \:::\   \:::\    \  \:::\|::|/:::/    /
               |::|\::::/    /\::::/____/        \:::\   \:::\____\  \::::::::::/    /
               |::| \::/____/  \:::\    \         \:::\  /:::/    /   \::::::::/    /
               |::|  ~|         \:::\    \         \:::\/:::/    /     \::::::/    /
               |::|   |          \:::\    \         \::::::/    /       \::::/____/
               \::|   |           \:::\____\         \::::/    /         |::|    |
                \:|   |            \::/    /          \::/    /          |::|____|
                 \|___|             \/____/            \/____/            ~~

                          __             .___.__                                   __
       ________________ _/  |_  ____   __| _/|__| ____   ____   ___________       |__| ______
     _/ ___\_  __ \__  \\   __\/ __ \ / __ | |  |/ ___\ / ___\_/ __ \_  __ \      |  |/  ___/
     \  \___|  | \// __ \|  | \  ___// /_/ | |  / /_/  > /_/  >  ___/|  | \/      |  |\___ \
      \___  >__|  (____  /__|  \___  >____ | |__\___  /\___  / \___  >__|  /\ /\__|  /____  >
          \/           \/          \/     \/   /_____//_____/      \/      \/ \______|    \/


*/



/*===========================================================================
=            cratedigger.js v0.0.1 - by risq (Valentin Ledrapier)           =
===========================================================================*/


'use strict';

var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
    TWEEN = require('tween.js'),
    Stats = require('stats-js'),
    Modernizr = (typeof window !== "undefined" ? window['Modernizr'] : typeof global !== "undefined" ? global['Modernizr'] : null),
    dat = (typeof window !== "undefined" ? window['dat'] : typeof global !== "undefined" ? global['dat'] : null),

    Record = require('./Record'),
    CameraManager = require('./CameraManager'),
    Constants = require('./Constants');

/*==========  Inject all external modules to THREE.js ==========*/

require('./threejs_modules/ShaderPass')(THREE);
require('./threejs_modules/CopyShader')(THREE);
require('./threejs_modules/RenderPass')(THREE);
require('./threejs_modules/DoFShader')(THREE);
require('./threejs_modules/FXAAShader')(THREE);
require('./threejs_modules/MaskPass')(THREE);
require('./threejs_modules/EffectComposer')(THREE);

/*=================================
=            VARIABLES            =
=================================*/

var exports = {}, // Object for public APIs


    /*==========  Three.js objects  ==========*/

    stats,
    scene,
    camera,
    renderer,
    light,
    leftLight,
    rightLight,
    composer,
    FXAA,
    dof,
    gui,
    depthTarget,
    depthShader,
    depthUniforms,
    depthMaterial,


    /*==========  Objects & data arrays  ==========*/

    crates = [],
    records = [],
    recordsDataList = [],


    /*==========  Three.js objects containers  ==========*/

    rootContainer,
    cratesContainer,
    recordsContainer,


    /*==========  States, util vars  ==========*/

    canvasWidth,
    canvasHeight,
    dpr,
    scrollRecordsTimeout,
    isLoading = false,
    infoPanelState = "closed",
    isScrolling = false,
    doRender = true,
    mouse = {
        x: 0,
        y: 0
    },
    mouseDownPos = {
        x: 0,
        y: 0
    },
    targetCameraPos = {
        x: 0,
        y: 0
    },
    selectedRecord = -1,
    shownRecord = -1,
    loadedRecords = 0,


    /*==========  Materials  ==========*/

    wood_material;


/*====================================
=            BASE METHODS            =
====================================*/

function animate () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( Constants.debug ) {

            stats.update();

        }
    }
};

function render () {

    TWEEN.update();
    updateShownRecord();

    if ( Constants.cameraMouseMove ) {

        targetCameraPos.x = ( mouse.x / canvasWidth - 0.5 ) * 0.25; // inverse axis?
        targetCameraPos.y = ( mouse.y / canvasWidth - 0.5 ) * 0.25;
        rootContainer.rotation.y += Constants.scene.cameraMouseMoveSpeedY * ( targetCameraPos.x - rootContainer.rotation.y );
        rootContainer.rotation.z += Constants.scene.cameraMouseMoveSpeedZ * ( targetCameraPos.y - rootContainer.rotation.z );

    }

    CameraManager.lookAtTarget();

    if ( Constants.postprocessing ) {

        scene.overrideMaterial = depthMaterial;
        renderer.render( scene, camera, depthTarget );
        scene.overrideMaterial = null;
        composer.render();

    } else {

        renderer.render( scene, camera );

    }
};

/*
 * Loading methods
 */
function unloadRecords () {

    for ( var i = 0; i < records.length; i++ ) {

        records[ i ].data = null;
        records[ i ].setUnactive();

    }

    loadedRecords = 0;
    recordsDataList = [];

};


function loadRecords ( recordsData, shuffleBeforeLoading, done ) {

    resetShownRecord( true );

    showLoading( function() {

        if ( loadedRecords > 0 ) {

            unloadRecords();

        }

        if ( shuffleBeforeLoading ) {

            recordsData = shuffle( recordsData );

        }

        for ( var i = 0; i < records.length && i < recordsData.length; i++ ) {
            
            records[ i ].data = recordsData[ i ];
            records[ i ].setActive();
            records[ i ].mesh.material.materials = getRecordMaterial( recordsData[ i ].cover, recordsData[ i ].hasSleeve );

        }

        // why ??
        // loadedRecords = recordsData.length < records.length ? recordsData.length : records.length;
        loadedRecords = records.length;
        recordsDataList = recordsData;
        
        setTimeout( function () {

            hideLoading(done);
            Constants.onLoadingEnd();

        }, 3000 );
    });

};

function shuffleRecords () {

    var shuffledRecords = recordsDataList;
    shuffledRecords = shuffle( shuffledRecords );
    loadRecords( shuffledRecords );

};


/*=================================================
=            RECORDS SELECTION METHODS            =
=================================================*/


function selectRecord ( id ) {

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        selectedRecord = id;

    }
};

function flipSelectedRecord () {

    if ( records[ selectedRecord ] ) {

        infoPanelState = 'opening';

        records[ selectedRecord ].flipRecord( function () {

            infoPanelState = 'opened';

        } );

        Constants.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( Constants.elements.infoContainer );

        }, 300 );
    }
};

function flipBackSelectedRecord (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( Constants.elements.infoContainer );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            Constants.onInfoPanelClosed();

        }, force );
    }
};

function updateShownRecord () {

    if ( infoPanelState === 'closed' && shownRecord != selectedRecord ) {

        shownRecord = selectedRecord;

        for ( var recordId = 0; recordId < loadedRecords; recordId++ ) {

            if ( selectedRecord == -1 ) {

                records[ recordId ].pushRecord();

            } else if ( recordId > selectedRecord &&
                recordId > records[ selectedRecord ].crateId * Constants.recordsPerCrate &&
                recordId < ( records[ selectedRecord ].crateId * Constants.recordsPerCrate ) + Constants.recordsPerCrate ) {

                records[ recordId ].pullRecord();

            } else if ( recordId == selectedRecord ) {

                records[ recordId ].showRecord();

            } else {

                records[ recordId ].pushRecord();

            }
        }
    }
};

function resetShownRecord ( force ) {

    if ( infoPanelState === 'opened' && !force ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        if ( infoPanelState === 'opened' ) {
            flipBackSelectedRecord(true);
        }

        selectedRecord = -1;
        
        CameraManager.resetCamera();
    }
};

function selectPrevRecord () {

    selectRecord(getPrevAvailableRecord(selectedRecord));
    
};

function selectNextRecord () {

    selectRecord(getNextAvailableRecord(selectedRecord));

};

function getPrevAvailableRecord (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord < loadedRecords - 1 ) {

        fromRecord = fromRecord + 1;

    } else {

        fromRecord = 0;

    }

    return records[ fromRecord ].active ? fromRecord : getPrevAvailableRecord(fromRecord);
    
};

function getNextAvailableRecord (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord > 0 ) {

        fromRecord = fromRecord - 1;

    } else {

        fromRecord = loadedRecords - 1;

    }

    return records[ fromRecord ].active ? fromRecord : getNextAvailableRecord(fromRecord);

};

function navigateRecords ( direction ) {

    if ( infoPanelState === 'closed' ) {

        if ( direction === 'prev' ) {

            selectPrevRecord();

        } else {

            selectNextRecord();

        }

    } else if ( infoPanelState === 'opened' && Constants.closeInfoPanelOnScroll ) {

        flipBackSelectedRecord();

    }

};

function scrollRecords ( touch, baseY, oldDelta ) {

    var scrollSpeed;

    oldDelta = !oldDelta || Math.abs( oldDelta ) > 0.5 ? 0.5 : Math.abs( oldDelta );
    scrollSpeed = touch ? Math.pow(1 - oldDelta, 3) * 200 : Math.pow(1 - oldDelta, 3) * 300;

    scrollRecordsTimeout = setTimeout( function () {

        var delta = ( baseY - mouse.y ) / canvasHeight;
        renderer.domElement.classList.add('grab');

        if ( delta > 0 ) {

            selectNextRecord();

        } else if ( delta < 0 ) {

            selectPrevRecord();

        }

        scrollRecords( touch, baseY, delta );

    }, scrollSpeed );

};

/*=======================================
=            EVENTS HANDLING            =
=======================================*/

function bindEvents() {

    Constants.elements.rootContainer.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousewheel', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousemove', onMouseMoveEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchmove', onTouchMoveEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousedown', onMouseDownEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchstart', onTouchStartEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mouseup', onMouseUpEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchend', onTouchStopEvent, false );
    Constants.elements.rootContainer.addEventListener( 'contextmenu', onRightClickEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( Constants.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }
}


function onMouseMoveEvent ( e ) {

    var m_posx = 0,
        m_posy = 0,
        e_posx = 0,
        e_posy = 0,
        obj = this;

    //get mouse position on document crossbrowser
    if ( !e ) {

        e = window.event;

    }

    if ( e.pageX || e.pageY ) {

        m_posx = e.pageX;
        m_posy = e.pageY;
    } else if ( e.clientX || e.clientY ) {

        m_posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        m_posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;

    }

    //get parent element position in document
    if ( obj.offsetParent ) {

        do {

            e_posx += obj.offsetLeft;
            e_posy += obj.offsetTop;

        } while ( obj = obj.offsetParent ); // jshint ignore:line

    }

    // mouse position minus elm position is mouseposition relative to element:
    mouse.x = m_posx - e_posx;
    mouse.y = m_posy - e_posy;
};

function onTouchMoveEvent ( e ) {

    var m_posx = 0,
        m_posy = 0,
        e_posx = 0,
        e_posy = 0,
        obj = this;

    if (e.changedTouches && e.changedTouches[0]) {

        if ( e.changedTouches[0].pageX || e.changedTouches[0].pageY ) {

            m_posx = e.changedTouches[0].pageX;
            m_posy = e.changedTouches[0].pageY;
        } else if ( e.changedTouches[0].clientX || e.changedTouches[0].clientY ) {

            m_posx = e.changedTouches[0].clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            m_posy = e.changedTouches[0].clientY + document.body.scrollTop +
                document.documentElement.scrollTop;

        }
    }

    //get parent element position in document
    if ( obj && obj.offsetParent ) {

        do {

            e_posx += obj.offsetLeft;
            e_posy += obj.offsetTop;

        } while ( obj = obj.offsetParent ); // jshint ignore:line

    }

    // mouse position minus elm position is mouseposition relative to element:
    mouse.x = m_posx - e_posx;
    mouse.y = m_posy - e_posy;
};

function onScrollEvent ( e ) {


    if ( wheelDirection( e ) < 0 ) {

        navigateRecords( 'prev' );

    } else {

        navigateRecords( 'next' );

    }

    return false;
};

function onClickEvent ( mouseDownPos ) {

    if ( infoPanelState === 'closed' ) {

        var vectorPos = {
            x: ( ( ( mouseDownPos.x - renderer.domElement.offsetLeft ) / ( renderer.domElement.width ) ) * 2 - 1 ),
            y: ( -( ( mouseDownPos.y - renderer.domElement.offsetTop ) / ( renderer.domElement.height ) ) * 2 + 1 ),
            z: 0.5
        };

        var vector = new THREE.Vector3( vectorPos.x, vectorPos.y, vectorPos.z );
        vector.unproject( camera );
        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
        var intersects = raycaster.intersectObjects( cratesContainer.children, true );

        // If intersect something
        if ( intersects.length > 0 ) {

            var clickedRecord;

            // Get the first visible record intersected
            for ( var i = 0; i < intersects.length; i++ ) {

                // If intercept a mesh which is not a record, break
                if ( typeof(intersects[ i ].object.recordId) === 'undefined' ) {

                    break;

                } else if ( intersects[ i ].object.visible && intersects[ i ].object.recordId >= 0 ) {

                    clickedRecord = records[ intersects[ i ].object.recordId ];

                    break;

                }

            }

            // If there is one
            if ( clickedRecord ) {

                if ( selectedRecord === clickedRecord.id ) {

                    flipSelectedRecord();

                } else {

                    selectRecord( clickedRecord.id );

                }

            }

            // All intersected records are not visibles
            else {

                resetShownRecord();

            }
        }

        // No record has been intersected
        else {

            resetShownRecord();

        }

    } else if ( Constants.closeInfoPanelOnClick ) {

        flipBackSelectedRecord();

    }
};

function onMouseDownEvent ( e ) {

    if ( e.button !== 1 && e.button !== 2 ) {

        clearInterval( scrollRecordsTimeout );

        if ( infoPanelState === 'closed' ) {

            scrollRecords( false, mouse.y );

        } 

        mouseDownPos = {
            x: mouse.x,
            y: mouse.y
        };

    }
};

function onTouchStartEvent ( e ) {

    mouseDownPos = {
        x: mouse.x,
        y: mouse.y
    };

    onTouchMoveEvent( e );

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( true, mouse.y );

    } 
};

function onMouseUpEvent ( e ) {

    if ( e.button !== 1 && e.button !== 2 ) {

        clearInterval( scrollRecordsTimeout );
        renderer.domElement.classList.remove('grab');

        // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
        if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

            onClickEvent( mouseDownPos );

        }
    }
};

function onTouchStopEvent ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
    if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

        onClickEvent( mouseDownPos );

    }
};

function onRightClickEvent ( e ) {

    e.preventDefault();

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else {

        resetShownRecord();

    }

    return false;
}

function onKeyDownEvent ( e ) {

    if ( e.keyCode === 37 || e.keyCode === 38 ) {

        navigateRecords( 'next' );

    } else if ( e.keyCode === 39 || e.keyCode === 40 ) {

        navigateRecords( 'prev' );

    } else if ( infoPanelState === 'closed' && e.keyCode === 13 || e.keyCode === 32) {

        flipSelectedRecord();

    } else if ( e.keyCode === 27 ) {

        if ( infoPanelState === 'opened' ) {

            flipBackSelectedRecord();

        } else {

            resetShownRecord();

        }

    }
};

function onWindowResizeEvent ( e ) {

    calculateCanvasSize();
    setCanvasDimensions();

    renderer.setSize( canvasWidth, canvasHeight );
    CameraManager.updateCameraAspect( canvasWidth / canvasHeight );

    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );
    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );

};


/*======================================
=              UI METHODS              =
======================================*/


function showLoading ( done ) {

    fadeIn( Constants.elements.loadingContainer );
    setTimeout(done, 1000);

};

function hideLoading ( done ) {

    fadeOut( Constants.elements.loadingContainer );
    setTimeout(done, 1000);

};




/*======================================
=            INITIALISATION            =
======================================*/


function initScene () {

    // scene, renderer, camera,...
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( {
        antialias: true
    } );
    renderer.setSize( canvasWidth, canvasHeight );

    Constants.elements.canvasContainer.appendChild( renderer.domElement );
    renderer.domElement.id = "context";
    renderer.setClearColor( Constants.backgroundColor, 1 );

    CameraManager.init(canvasWidth / canvasHeight);
    camera = CameraManager.getCamera();

    var wood_texture = THREE.ImageUtils.loadTexture( Constants.crateTexture );
    wood_texture.anisotropy = renderer.getMaxAnisotropy();
    wood_material = new THREE.MeshLambertMaterial( {
        map: wood_texture
    } );

    rootContainer = new THREE.Object3D();
    cratesContainer = new THREE.Object3D();
    scene.add( rootContainer );
    rootContainer.add( cratesContainer );

    initCrates();
    initRecords();

    light = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 1.1 );
    light.position.set( 300, 80, 0 );
    scene.add( light );

    leftLight = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 0.6 );
    leftLight.position.set( -100, 300, 1000 );
    scene.add( leftLight );

    rightLight = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 0.6 );
    rightLight.position.set( -100, 300, -1000 );
    scene.add( rightLight );

    initPostProcessing();

    bindEvents();

    // DOM setup
    Constants.elements.rootContainer.style.position = 'relative';
    Constants.elements.canvasContainer.style.position = 'absolute';
    Constants.elements.infoContainer.style.position = 'absolute';
    Constants.elements.loadingContainer.style.position = 'absolute';

    setCanvasDimensions();

    hideElement(Constants.elements.infoContainer);

    if ( Constants.debug ) {

        initDebug();
        initGUI();

    }

    resetShownRecord();
    animate();
};

function initPostProcessing () {

    depthShader = THREE.ShaderLib.depthRGBA;
    depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

    depthMaterial = new THREE.ShaderMaterial( {
        fragmentShader: depthShader.fragmentShader,
        vertexShader: depthShader.vertexShader,
        uniforms: depthUniforms
    } );
    depthMaterial.blending = THREE.NoBlending;

    depthTarget = new THREE.WebGLRenderTarget( canvasWidth, canvasHeight, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    } );

    composer = new THREE.EffectComposer( renderer );
    composer.addPass( new THREE.RenderPass( scene, camera ) );


    /*==========  Depth of field shader  ==========*/

    dof = new THREE.ShaderPass( THREE.DoFShader );
    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );

    //make sure that these two values are the same for your camera, otherwise distances will be wrong.
    dof.uniforms.znear.value = camera.near; //camera clipping start
    dof.uniforms.zfar.value = camera.far; //camera clipping end

    dof.uniforms.focalDepth.value = 5; //focal distance value in meters, but you may use autofocus option below
    dof.uniforms.focalLength.value = camera.focalLength; //focal length in mm
    dof.uniforms.fstop.value = 8.0; //f-stop value
    dof.uniforms.showFocus.value = false; //show debug focus point and focal range (orange = focal point, blue = focal range)

    dof.uniforms.manualdof.value = true; //manual dof calculation
    dof.uniforms.ndofstart.value = 11; //near dof blur start
    dof.uniforms.ndofdist.value = 80; //near dof blur falloff distance    
    dof.uniforms.fdofstart.value = 0; //far dof blur start
    dof.uniforms.fdofdist.value = 100; //far dof blur falloff distance 

    dof.uniforms.CoC.value = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)    

    dof.uniforms.vignetting.value = false; //use optical lens vignetting?

    dof.uniforms.autofocus.value = true; //use autofocus in shader? disable if you use external focalDepth value
    dof.uniforms.focus.value.set( 0.35, 0.35 ); // autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right) 
    dof.uniforms.maxblur.value = Constants.blurAmount; //clamp value of max blur (0.0 = no blur,1.0 default)    

    dof.uniforms.threshold.value = 0; //highlight threshold;
    dof.uniforms.gain.value = 0; //highlight gain;

    dof.uniforms.bias.value = 0; //bokeh edge bias        
    dof.uniforms.fringe.value = 0; //bokeh chromatic aberration/fringing

    FXAA = new THREE.ShaderPass( THREE.FXAAShader );

    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );
    FXAA.renderToScreen = true;

    composer.addPass( dof );
    composer.addPass( FXAA );

};

function initDebug () {

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = "0";
    stats.domElement.style.top = "0";
    Constants.elements.rootContainer.appendChild( stats.domElement );

    var debug = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20, 1, 1, 1 ) );
    debug.position.set(
        light.position.x,
        light.position.y,
        light.position.z
    );
    scene.add( debug );

};

function initGUI () {

    var cameraFolder,
        cameraFocalLength,
        dofFolder,
        _last;

    gui = new dat.GUI();
    
    cameraFolder = gui.addFolder( 'Camera' );
    cameraFocalLength = cameraFolder.add( camera, 'focalLength', 28, 200 ).name( 'Focal Length' );
    cameraFocalLength.onChange( updateCamera );

    if ( Constants.postprocessing ) {


        dofFolder = gui.addFolder( 'Depth of Field' );
        dofFolder.add( dof.uniforms.focalDepth, 'value', 0, 10 ).name( 'Focal Depth' );
        dofFolder.add( dof.uniforms.fstop, 'value', 0, 22 ).name( 'F Stop' );
        dofFolder.add( dof.uniforms.maxblur, 'value', 0, 3 ).name( 'max blur' );

        dofFolder.add( dof.uniforms.showFocus, 'value' ).name( 'Show Focal Range' );

        dofFolder.add( dof.uniforms.manualdof, 'value' ).name( 'Manual DoF' );
        dofFolder.add( dof.uniforms.ndofstart, 'value', 0, 200 ).name( 'near start' );
        dofFolder.add( dof.uniforms.ndofdist, 'value', 0, 200 ).name( 'near falloff' );
        dofFolder.add( dof.uniforms.fdofstart, 'value', 0, 200 ).name( 'far start' );
        dofFolder.add( dof.uniforms.fdofdist, 'value', 0, 200 ).name( 'far falloff' );

        dofFolder.add( dof.uniforms.CoC, 'value', 0, 0.1 ).step( 0.001 ).name( 'circle of confusion' );

        dofFolder.add( dof.uniforms.vignetting, 'value' ).name( 'Vignetting' );
        dofFolder.add( dof.uniforms.vignout, 'value', 0, 2 ).name( 'outer border' );
        dofFolder.add( dof.uniforms.vignin, 'value', 0, 1 ).step( 0.01 ).name( 'inner border' );
        dofFolder.add( dof.uniforms.vignfade, 'value', 0, 22 ).name( 'fade at' );

        dofFolder.add( dof.uniforms.autofocus, 'value' ).name( 'Autofocus' );
        dofFolder.add( dof.uniforms.focus.value, 'x', 0, 1 ).name( 'focus x' );
        dofFolder.add( dof.uniforms.focus.value, 'y', 0, 1 ).name( 'focus y' );

        dofFolder.add( dof.uniforms.threshold, 'value', 0, 1 ).step( 0.01 ).name( 'threshold' );
        dofFolder.add( dof.uniforms.gain, 'value', 0, 100 ).name( 'gain' );

        dofFolder.add( dof.uniforms.bias, 'value', 0, 4 ).step( 0.01 ).name( 'bias' );
        dofFolder.add( dof.uniforms.fringe, 'value', 0, 5 ).step( 0.01 ).name( 'fringe' );

        dofFolder.add( dof.uniforms.noise, 'value' ).name( 'Use Noise' );
        dofFolder.add( dof.uniforms.namount, 'value', 0, 0.001 ).step( 0.0001 ).name( 'dither' );

        dofFolder.add( dof.uniforms.depthblur, 'value' ).name( 'Blur Depth' );
        dofFolder.add( dof.uniforms.dbsize, 'value', 0, 5 ).name( 'blur size' );

    }

    gui.close();

};

function updateCamera () {

    camera.setLens( camera.focalLength, camera.frameSize );
    camera.updateProjectionMatrix();
    dof.uniforms.focalLength.value = camera.focalLength;

};

function initCrates () {

    for ( var crateId = 0; crateId < Constants.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * Constants.nbCrates ) ) / 2;

};

function createCrate ( id ) {

    crates[ id ] = new THREE.Object3D();

    var box_bottom = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 100 ), wood_material );
    crates[ id ].add( box_bottom );

    var box_left = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 80 ), wood_material );
    box_left.position.set( 0, 35, -55 );
    box_left.rotation.x = Math.PI / 2;
    crates[ id ].add( box_left );

    if ( id === 0 ) {
        var box_right = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 80 ), wood_material );
        box_right.position.set( 0, 35, 55 );
        box_right.rotation.x = Math.PI / 2;
        crates[ id ].add( box_right );
    }

    var box_back = new THREE.Mesh( new THREE.BoxGeometry( 80, 10, 120 ), wood_material );
    box_back.position.set( -105, 35, 0 );
    box_back.rotation.z = Math.PI / 2;
    crates[ id ].add( box_back );

    var box_front = new THREE.Mesh( new THREE.BoxGeometry( 40, 10, 100 ), wood_material );
    box_front.position.set( 95, 25, 0 );
    box_front.rotation.z = Math.PI / 2;
    crates[ id ].add( box_front );

    crates[ id ].position.z = -110 * id;
    return crates[ id ];

};

function initRecords () {

    var currentRecordId = 0;
    for ( var crateId = 0; crateId < crates.length; crateId++ ) {

        for ( var pos = 0; pos < Constants.recordsPerCrate; pos++ ) {
            createRecord( currentRecordId, crateId, pos );
            currentRecordId++;
        }
    }
};

function createRecord ( id, crateId, pos ) {

    var record = new Record( id, crateId, pos );
    crates[ crateId ].add( record.mesh );
    records.push( record );

};

function getRecordMaterial ( src, hasSleeve ) {

    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src ? src : '';

    var imgWidth = 400,
        imgHeight = 400,
        mapCanvas = document.createElement( 'canvas' );

    mapCanvas.width = mapCanvas.height = 400;

    var texture = new THREE.Texture( mapCanvas );
    texture.minFilter = THREE.LinearFilter;

    img.onload = function () {

        if ( hasSleeve ) {

            var sleeve = new Image();
            sleeve.src = Constants.sleeveMaskTexture;

            sleeve.onload = function () {

                var ctx = mapCanvas.getContext( '2d' );
                ctx.translate( imgWidth / 2, imgHeight / 2 );
                ctx.rotate( Math.PI / 2 );
                ctx.translate( -imgWidth / 2, -imgHeight / 2 );
                ctx.drawImage( img, 130, 130, 135, 135 );
                ctx.drawImage( sleeve, 0, 0, 400, 400 );
                texture.needsUpdate = true;

            };

        } else {

            var ctx = mapCanvas.getContext( '2d' );
            ctx.translate( imgWidth / 2, imgHeight / 2 );
            ctx.rotate( Math.PI / 2 );
            ctx.translate( -imgWidth / 2, -imgHeight / 2 );
            ctx.drawImage( img, 0, 0, 400, 400 );
            texture.needsUpdate = true;

        }
    };

    var sleeveMaterial = new THREE.MeshLambertMaterial( {

        color: Constants.sleeveColor

    } );

    var materials = [
        sleeveMaterial,
        sleeveMaterial,
        sleeveMaterial,
        // texture
        new THREE.MeshLambertMaterial( {
            color: 0xffffff,
            map: texture
        } ),
        sleeveMaterial,
        sleeveMaterial
    ];
    return materials;

};


/*=============================
=            UTILS            =
=============================*/


function wheelDistance ( e ) {

    if ( !e ) e = event;
    var w = e.wheelDelta,
        d = e.detail;
    if ( d ) {

        if ( w ) return w / d / 40 * d > 0 ? 1 : -1; // Opera
        else return -d / 3; // Firefox;

    } else return w / 120; // IE/Safari/Chrome
};

function wheelDirection ( e ) {

    if ( !e ) e = event;
    return ( e.detail < 0 ) ? 1 : ( e.wheelDelta > 0 ) ? 1 : -1;

};

function coordsEqualsApprox ( coord1, coord2, range ) {

    return ( Math.abs( coord1.x - coord2.x ) <= range ) && ( Math.abs( coord1.y - coord2.y ) <= range );

};

function fadeOut ( element ) {

    if (element.style.opacity === 0) {

        element.style.display = 'none';

    } else {

        var transitionEvent = getTransitionEvent(element);

        if (transitionEvent) {

            element.addEventListener(transitionEvent, onFadeComplete);

            element.style.opacity = 0;

        }        
    }
};

function fadeIn ( element ) {

    if (element.style.opacity === '' || element.style.opacity === '1') {

        element.style.display = 'block';

    } else {
        
        var transitionEvent = getTransitionEvent(element);
        
        element.style.display = 'block';

        if (transitionEvent) {

            element.addEventListener(transitionEvent, onFadeComplete);

        }

        setTimeout(function () {
            element.style.opacity = 1;
        }, 15);
    }

};

function onFadeComplete( e , e2 ) {

    e.currentTarget.removeEventListener(e.type, onFadeComplete);

    if ( e.currentTarget.style.opacity === '0' ) {

        e.currentTarget.style.display = 'none';

    } else {

        e.currentTarget.style.display = 'block';

    }
}


function hideElement( element ) {

    element.style.opacity = 0;
    element.style.display = 'none';

}

function showElement( element ) {

    element.style.display = 'block';
    element.style.opacity = 1;

}

function getTransitionEvent () {

    var t,
        transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };

    for(t in transitions) {

        if( document.body.style[t] !== undefined ) {

            return transitions[t];

        }
    }
}

function calculateCanvasSize () {

    canvasWidth = Constants.canvasWidth ? Constants.canvasWidth : Constants.elements.rootContainer.clientWidth;
    canvasHeight = Constants.canvasHeight ? Constants.canvasHeight : Constants.elements.rootContainer.clientHeight;

};

function setCanvasDimensions () {

    //Constants.elements.rootContainer.style.height     = canvasHeight + 'px';
    Constants.elements.canvasContainer.style.height = canvasHeight + 'px';
    Constants.elements.infoContainer.style.height = canvasHeight + 'px';
    Constants.elements.loadingContainer.style.height = canvasHeight + 'px';

    //Constants.elements.rootContainer.style.width     = canvasWidth + 'px';
    Constants.elements.canvasContainer.style.width = canvasWidth + 'px';
    Constants.elements.infoContainer.style.width = canvasWidth + 'px';
    Constants.elements.loadingContainer.style.width = canvasWidth + 'px';

};

function shuffle( v ) { // Jonas Raoni Soares Silva - http://jsfromhell.com/array/shuffle [rev. #1]

    for ( var j, x, i = v.length; i; j = parseInt( Math.random() * i ), x = v[ --i ], v[ i ] = v[ j ], v[ j ] = x );
    return v;

}

function isFunction( obj ) {

    return typeof obj == 'function' || false;

}


/*===============================
=            EXPORTS            =
===============================*/


/*==========  Public Methods  ==========*/

exports.init = function ( params ) {

    Constants.extend(params);

    // feature test
    if ( !Modernizr.webgl ) return;

    if ( window.devicePixelRatio !== undefined ) {

        dpr = window.devicePixelRatio;

    } else {

        dpr = 1;

    }

    if ( !Constants.elements.rootContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }

    if ( !Constants.elements.canvasContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }

    if ( !Constants.elements.loadingContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }

    if ( !Constants.elements.infoContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
        return;

    }

    calculateCanvasSize();

    initScene();
};

exports.selectRecord = function ( id ) {

    if ( id < 0 ) {

        resetShownRecord();

    } else if ( id > loadedRecords ) {

        selectedRecord = loadedRecords - 1;

    } else {

        selectedRecord = id;

    }
};

exports.startRender = function () {

    doRender = true;
    animate();

};

exports.stopRender = function () {

    doRender = false;

};

exports.enablePostprocessing = function () {

    Constants.postprocessing = true;

};

exports.disablePostprocessing = function () {

    Constants.postprocessing = false;

};

/*==========  Public getters  ==========*/

exports.getCanvas = function () {

    return renderer.domElement;

};

exports.getRecordsDataList = function () {

    return recordsDataList;

};

exports.getLoadedRecords = function () {

    return loadedRecords;

};

exports.getSelectedRecord = function () {

    return records[ selectedRecord ];

};


/*==========  Methods accessors  ==========*/

exports.loadRecords = loadRecords;
exports.unloadRecords = unloadRecords;
exports.resetShownRecord = resetShownRecord;
exports.shuffleRecords = shuffleRecords;
exports.flipSelectedRecord = flipSelectedRecord;
exports.flipBackSelectedRecord = flipBackSelectedRecord;
exports.selectPrevRecord = selectPrevRecord;
exports.selectNextRecord = selectNextRecord;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/*==================================
=            PUBLIC API            =
==================================*/

module.exports = exports;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBhbmltYXRlICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxuZnVuY3Rpb24gdW5sb2FkUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkUmVjb3JkcyAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFJlY29yZCAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsaXBTZWxlY3RlZFJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmxpcEJhY2tTZWxlY3RlZFJlY29yZCAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaG93blJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0U2hvd25SZWNvcmQgKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBcclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLnJlc2V0Q2FtZXJhKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcmV2UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROZXh0UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByZXZBdmFpbGFibGVSZWNvcmQgKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIG5hdmlnYXRlUmVjb3JkcyAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxSZWNvcmRzICggdG91Y2gsIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQ7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHNjcm9sbFNwZWVkID0gdG91Y2ggPyBNYXRoLnBvdygxIC0gb2xkRGVsdGEsIDMpICogMjAwIDogTWF0aC5wb3coMSAtIG9sZERlbHRhLCAzKSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuXHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCB0b3VjaCwgYmFzZVksIGRlbHRhICk7XHJcblxyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoU3RvcEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25SaWdodENsaWNrRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duRXZlbnQsIGZhbHNlICk7IFxyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VNb3ZlRXZlbnQgKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaE1vdmVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XHJcblxyXG4gICAgICAgIGlmICggZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgbV9wb3N5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBtX3Bvc3kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqICYmIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblNjcm9sbEV2ZW50ICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQgKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIENvbnN0YW50cy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlRG93bkV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUuYnV0dG9uICE9PSAxICYmIGUuYnV0dG9uICE9PSAyICkge1xyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgICAgIHNjcm9sbFJlY29yZHMoIGZhbHNlLCBtb3VzZS55ICk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0RXZlbnQgKCBlICkge1xyXG5cclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgIHk6IG1vdXNlLnlcclxuICAgIH07XHJcblxyXG4gICAgb25Ub3VjaE1vdmVFdmVudCggZSApO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIHRydWUsIG1vdXNlLnkgKTtcclxuXHJcbiAgICB9IFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZVVwRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICAgICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIENvbnN0YW50cy5zY2VuZS5ncmFiU2Vuc2l0aXZpdHkgKSAmJiAhKCBlLnRhcmdldCAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSApICkge1xyXG5cclxuICAgICAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0b3BFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgQ29uc3RhbnRzLnNjZW5lLmdyYWJTZW5zaXRpdml0eSApICYmICEoIGUudGFyZ2V0ICYmIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25SaWdodENsaWNrRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbktleURvd25FdmVudCAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcclxuXHJcbiAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAyNyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdFNjZW5lICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBoaWRlRWxlbWVudChDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgIGluaXREZWJ1ZygpO1xyXG4gICAgICAgIGluaXRHVUkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuXHJcbiAgICBkZXB0aFNoYWRlciA9IFRIUkVFLlNoYWRlckxpYi5kZXB0aFJHQkE7XHJcbiAgICBkZXB0aFVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggZGVwdGhTaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcbiAgICBkZXB0aE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGRlcHRoU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZGVwdGhTaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBkZXB0aFVuaWZvcm1zXHJcbiAgICB9ICk7XHJcbiAgICBkZXB0aE1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHJcbiAgICBkZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwge1xyXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0XHJcbiAgICB9ICk7XHJcblxyXG4gICAgY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBuZXcgVEhSRUUuUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSApICk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVwdGggb2YgZmllbGQgc2hhZGVyICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkb2YgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRG9GU2hhZGVyICk7XHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgLy9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuICAgIGRvZi51bmlmb3Jtcy56bmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyOyAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLnpmYXIudmFsdWUgPSBjYW1lcmEuZmFyOyAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aC52YWx1ZSA9IDU7IC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoOyAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG4gICAgZG9mLnVuaWZvcm1zLmZzdG9wLnZhbHVlID0gOC4wOyAvL2Ytc3RvcCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLnNob3dGb2N1cy52YWx1ZSA9IGZhbHNlOyAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YudmFsdWUgPSB0cnVlOyAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQudmFsdWUgPSAxMTsgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMubmRvZmRpc3QudmFsdWUgPSA4MDsgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LnZhbHVlID0gMDsgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mZGlzdC52YWx1ZSA9IDEwMDsgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuQ29DLnZhbHVlID0gMC4wMzsgLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcudmFsdWUgPSBmYWxzZTsgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmF1dG9mb2N1cy52YWx1ZSA9IHRydWU7IC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUuc2V0KCAwLjM1LCAwLjM1ICk7IC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KSBcclxuICAgIGRvZi51bmlmb3Jtcy5tYXhibHVyLnZhbHVlID0gQ29uc3RhbnRzLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdERlYnVnICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRHVUkgKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcbiAgICBcclxuICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmEgKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdENyYXRlcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNyYXRlICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFJlY29yZHMgKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVjb3JkICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZWNvcmRNYXRlcmlhbCAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiB3aGVlbERpc3RhbmNlICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHdoZWVsRGlyZWN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29vcmRzRXF1YWxzQXBwcm94ICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmYWRlT3V0ICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZhZGVJbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSAsIGUyICkge1xyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LnN0eWxlLm9wYWNpdHkgPT09ICcwJyApIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbWVudCggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25FdmVudCAoKSB7XHJcblxyXG4gICAgdmFyIHQsXHJcbiAgICAgICAgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LmJvZHkuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVDYW52YXNTaXplICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IENvbnN0YW50cy5jYW52YXNXaWR0aCA/IENvbnN0YW50cy5jYW52YXNXaWR0aCA6IENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gQ29uc3RhbnRzLmNhbnZhc0hlaWdodCA/IENvbnN0YW50cy5jYW52YXNIZWlnaHQgOiBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzRGltZW5zaW9ucyAoKSB7XHJcblxyXG4gICAgLy9Db25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLmV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgaWYgKCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmRpc2FibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLmZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmbGlwQmFja1NlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7Il19
},{"./CameraManager":4,"./Constants":5,"./Record":6,"./threejs_modules/CopyShader":7,"./threejs_modules/DoFShader":8,"./threejs_modules/EffectComposer":9,"./threejs_modules/FXAAShader":10,"./threejs_modules/MaskPass":11,"./threejs_modules/RenderPass":12,"./threejs_modules/ShaderPass":13,"stats-js":2,"tween.js":3}],2:[function(require,module,exports){
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:12,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};"object"===typeof module&&(module.exports=Stats);

},{}],3:[function(require,module,exports){
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/sole/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/sole/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

// Date.now shim for (ahem) Internet Explo(d|r)er
if ( Date.now === undefined ) {

	Date.now = function () {

		return new Date().valueOf();

	};

}

var TWEEN = TWEEN || ( function () {

	var _tweens = [];

	return {

		REVISION: '14',

		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function ( tween ) {

			_tweens.push( tween );

		},

		remove: function ( tween ) {

			var i = _tweens.indexOf( tween );

			if ( i !== -1 ) {

				_tweens.splice( i, 1 );

			}

		},

		update: function ( time ) {

			if ( _tweens.length === 0 ) return false;

			var i = 0;

			time = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );

			while ( i < _tweens.length ) {

				if ( _tweens[ i ].update( time ) ) {

					i++;

				} else {

					_tweens.splice( i, 1 );

				}

			}

			return true;

		}
	};

} )();

TWEEN.Tween = function ( object ) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	// Set all starting values present on the target object
	for ( var field in object ) {

		_valuesStart[ field ] = parseFloat(object[field], 10);

	}

	this.to = function ( properties, duration ) {

		if ( duration !== undefined ) {

			_duration = duration;

		}

		_valuesEnd = properties;

		return this;

	};

	this.start = function ( time ) {

		TWEEN.add( this );

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );
		_startTime += _delayTime;

		for ( var property in _valuesEnd ) {

			// check if an Array was provided as property value
			if ( _valuesEnd[ property ] instanceof Array ) {

				if ( _valuesEnd[ property ].length === 0 ) {

					continue;

				}

				// create a local copy of the Array with the start value at the front
				_valuesEnd[ property ] = [ _object[ property ] ].concat( _valuesEnd[ property ] );

			}

			_valuesStart[ property ] = _object[ property ];

			if( ( _valuesStart[ property ] instanceof Array ) === false ) {
				_valuesStart[ property ] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[ property ] = _valuesStart[ property ] || 0;

		}

		return this;

	};

	this.stop = function () {

		if ( !_isPlaying ) {
			return this;
		}

		TWEEN.remove( this );
		_isPlaying = false;

		if ( _onStopCallback !== null ) {

			_onStopCallback.call( _object );

		}

		this.stopChainedTweens();
		return this;

	};

	this.stopChainedTweens = function () {

		for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++ ) {

			_chainedTweens[ i ].stop();

		}

	};

	this.delay = function ( amount ) {

		_delayTime = amount;
		return this;

	};

	this.repeat = function ( times ) {

		_repeat = times;
		return this;

	};

	this.yoyo = function( yoyo ) {

		_yoyo = yoyo;
		return this;

	};


	this.easing = function ( easing ) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function ( interpolation ) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function ( callback ) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function ( callback ) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function ( callback ) {

		_onCompleteCallback = callback;
		return this;

	};

	this.onStop = function ( callback ) {

		_onStopCallback = callback;
		return this;

	};

	this.update = function ( time ) {

		var property;

		if ( time < _startTime ) {

			return true;

		}

		if ( _onStartCallbackFired === false ) {

			if ( _onStartCallback !== null ) {

				_onStartCallback.call( _object );

			}

			_onStartCallbackFired = true;

		}

		var elapsed = ( time - _startTime ) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		var value = _easingFunction( elapsed );

		for ( property in _valuesEnd ) {

			var start = _valuesStart[ property ] || 0;
			var end = _valuesEnd[ property ];

			if ( end instanceof Array ) {

				_object[ property ] = _interpolationFunction( end, value );

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if ( typeof(end) === "string" ) {
					end = start + parseFloat(end, 10);
				}

				// protect against non numeric properties.
				if ( typeof(end) === "number" ) {
					_object[ property ] = start + ( end - start ) * value;
				}

			}

		}

		if ( _onUpdateCallback !== null ) {

			_onUpdateCallback.call( _object, value );

		}

		if ( elapsed == 1 ) {

			if ( _repeat > 0 ) {

				if( isFinite( _repeat ) ) {
					_repeat--;
				}

				// reassign starting values, restart by making startTime = now
				for( property in _valuesStartRepeat ) {

					if ( typeof( _valuesEnd[ property ] ) === "string" ) {
						_valuesStartRepeat[ property ] = _valuesStartRepeat[ property ] + parseFloat(_valuesEnd[ property ], 10);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[ property ];
						_valuesStartRepeat[ property ] = _valuesEnd[ property ];
						_valuesEnd[ property ] = tmp;
					}

					_valuesStart[ property ] = _valuesStartRepeat[ property ];

				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				_startTime = time + _delayTime;

				return true;

			} else {

				if ( _onCompleteCallback !== null ) {

					_onCompleteCallback.call( _object );

				}

				for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++ ) {

					_chainedTweens[ i ].start( time );

				}

				return false;

			}

		}

		return true;

	};

};


TWEEN.Easing = {

	Linear: {

		None: function ( k ) {

			return k;

		}

	},

	Quadratic: {

		In: function ( k ) {

			return k * k;

		},

		Out: function ( k ) {

			return k * ( 2 - k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
			return - 0.5 * ( --k * ( k - 2 ) - 1 );

		}

	},

	Cubic: {

		In: function ( k ) {

			return k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k + 2 );

		}

	},

	Quartic: {

		In: function ( k ) {

			return k * k * k * k;

		},

		Out: function ( k ) {

			return 1 - ( --k * k * k * k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
			return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

		}

	},

	Quintic: {

		In: function ( k ) {

			return k * k * k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

		}

	},

	Sinusoidal: {

		In: function ( k ) {

			return 1 - Math.cos( k * Math.PI / 2 );

		},

		Out: function ( k ) {

			return Math.sin( k * Math.PI / 2 );

		},

		InOut: function ( k ) {

			return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

		}

	},

	Exponential: {

		In: function ( k ) {

			return k === 0 ? 0 : Math.pow( 1024, k - 1 );

		},

		Out: function ( k ) {

			return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

		},

		InOut: function ( k ) {

			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
			return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

		}

	},

	Circular: {

		In: function ( k ) {

			return 1 - Math.sqrt( 1 - k * k );

		},

		Out: function ( k ) {

			return Math.sqrt( 1 - ( --k * k ) );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
			return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

		},

		Out: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

		},

		InOut: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
			return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

		}

	},

	Back: {

		In: function ( k ) {

			var s = 1.70158;
			return k * k * ( ( s + 1 ) * k - s );

		},

		Out: function ( k ) {

			var s = 1.70158;
			return --k * k * ( ( s + 1 ) * k + s ) + 1;

		},

		InOut: function ( k ) {

			var s = 1.70158 * 1.525;
			if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
			return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

		}

	},

	Bounce: {

		In: function ( k ) {

			return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

		},

		Out: function ( k ) {

			if ( k < ( 1 / 2.75 ) ) {

				return 7.5625 * k * k;

			} else if ( k < ( 2 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

			} else if ( k < ( 2.5 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

			} else {

				return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

			}

		},

		InOut: function ( k ) {

			if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
			return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

		if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
		if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

		return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

	},

	Bezier: function ( v, k ) {

		var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

		for ( i = 0; i <= n; i++ ) {
			b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
		}

		return b;

	},

	CatmullRom: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

		if ( v[ 0 ] === v[ m ] ) {

			if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

			return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

		} else {

			if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
			if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

			return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

		}

	},

	Utils: {

		Linear: function ( p0, p1, t ) {

			return ( p1 - p0 ) * t + p0;

		},

		Bernstein: function ( n , i ) {

			var fc = TWEEN.Interpolation.Utils.Factorial;
			return fc( n ) / fc( i ) / fc( n - i );

		},

		Factorial: ( function () {

			var a = [ 1 ];

			return function ( n ) {

				var s = 1, i;
				if ( a[ n ] ) return a[ n ];
				for ( i = n; i > 1; i-- ) s *= i;
				return a[ n ] = s;

			};

		} )(),

		CatmullRom: function ( p0, p1, p2, p3, t ) {

			var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
			return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

		}

	}

};

module.exports=TWEEN;
},{}],4:[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
	TWEEN = require('tween.js'),

	Constants = require('./Constants');

var camera,
	target,
    cameraTween,
    targetTween;

function init(ratio) {

	camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    camera.lookAt( target.position );

    cameraTween = new TWEEN.Tween();
    targetTween = new TWEEN.Tween();

}

function focusRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
	    .to( {
	        x: recordXPos,
	        y: 50 + Constants.scene.recordShownY,
	        z: recordAbsolutePos.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();

	cameraTween = new TWEEN.Tween( camera.position )
	    .to( {
	        x: recordXPos + Constants.scene.cameraFocusPosition.x,
	        y: Constants.scene.cameraFocusPosition.y,
	        z: recordAbsolutePos.z + Constants.scene.cameraFocusPosition.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomInRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
        .to( {
            x: recordXPos,
            y: Constants.scene.recordFlippedY + 50,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x + 80,
            y: Constants.scene.cameraFocusPosition.y - 50,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomOutRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
        .delay( Constants.scene.infoOpenTime / 2 )
        .to( {
            x: recordXPos,
            y: 75,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x,
            y: Constants.scene.cameraFocusPosition.y,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function resetCamera() {
    
    cameraTween.stop();
    targetTween.stop();

	targetTween = new TWEEN.Tween( target.position )
        .to( {
            x: Constants.scene.targetBasePosition.x,
            y: Constants.scene.targetBasePosition.y,
            z: Constants.scene.targetBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: Constants.scene.cameraBasePosition.x,
            y: Constants.scene.cameraBasePosition.y,
            z: Constants.scene.cameraBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function updateCameraAspect(ratio) {
	camera.aspect = ratio;
    camera.updateProjectionMatrix();
}

function lookAtTarget() {
	camera.lookAt( target.position );
}

module.exports = {
	init: init,
	focusRecord: focusRecord,
	zoomInRecord: zoomInRecord,
	zoomOutRecord: zoomOutRecord,
	resetCamera: resetCamera,
	updateCameraAspect: updateCameraAspect,
	lookAtTarget: lookAtTarget,
	
	getCamera: function() {
		return camera;
	},
	getTarget: function() {
		return target;
	}
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9DYW1lcmFNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuXHRUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG5cdENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG52YXIgY2FtZXJhLFxyXG5cdHRhcmdldCxcclxuICAgIGNhbWVyYVR3ZWVuLFxyXG4gICAgdGFyZ2V0VHdlZW47XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcblx0ICAgICAgICB5OiA1MCArIENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93blksXHJcblx0ICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG5cdGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG5cdCAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnogKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21JblJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0UmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcbiAgICBcclxuICAgIGNhbWVyYVR3ZWVuLnN0b3AoKTtcclxuICAgIHRhcmdldFR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FtZXJhKCkge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG5cdHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmFBc3BlY3QocmF0aW8pIHtcclxuXHRjYW1lcmEuYXNwZWN0ID0gcmF0aW87XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29rQXRUYXJnZXQoKSB7XHJcblx0Y2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluaXQ6IGluaXQsXHJcblx0Zm9jdXNSZWNvcmQ6IGZvY3VzUmVjb3JkLFxyXG5cdHpvb21JblJlY29yZDogem9vbUluUmVjb3JkLFxyXG5cdHpvb21PdXRSZWNvcmQ6IHpvb21PdXRSZWNvcmQsXHJcblx0cmVzZXRDYW1lcmE6IHJlc2V0Q2FtZXJhLFxyXG5cdHVwZGF0ZUNhbWVyYUFzcGVjdDogdXBkYXRlQ2FtZXJhQXNwZWN0LFxyXG5cdGxvb2tBdFRhcmdldDogbG9va0F0VGFyZ2V0LFxyXG5cdFxyXG5cdGdldENhbWVyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gY2FtZXJhO1xyXG5cdH0sXHJcblx0Z2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG59Il19
},{"./Constants":5,"tween.js":3}],5:[function(require,module,exports){
module.exports = {

    debug: false,
    canvasWidth: null,
    canvasHeight: null,
    nbCrates: 2,
    recordsPerCrate: 24,
    lightIntensity: 1,
    cameraMouseMove: true,
    backgroundColor: 0x111111,
    sleeveColor: 0x0d0702,
    sleeveMaskTexture: 'img/sleeve.png',
    crateTexture: 'img/wood.jpg',
    closeInfoPanelOnClick: true,
    closeInfoPanelOnScroll: true,
    postprocessing: false,
    blurAmount: 0.4,
    updateCanvasSizeOnWindowResize: true,
    onInfoPanelOpened: function () {},
    onInfoPanelClosed: function () {},
    onLoadingEnd: function () {},
    elements: {
        rootContainer: null,
        canvasContainer: null,
        loadingContainer: null,
        infoContainer: null,
        titleContainer: null,
        artistContainer: null,
        coverContainer: null
    },
    scene: {
        recordMoveTime: 1000,
        cameraMoveTime: 800,
        infoOpenTime: 700,
        recordBaseY: 5,
        recordShownY: 25,
        recordFlippedY: 110,
        targetBasePosition: {
            x: -20,
            y: 10,
            z: 0
        },
        cameraBasePosition: {
            x: 280,
            y: 200,
            z: 180
        },
        cameraFocusPosition: {
            x: 190,
            y: 195,
            z: 93
        },
        cameraMouseMoveSpeedY: 0.07,
        cameraMouseMoveSpeedZ: 0.04,
        grabSensitivity: 6
    },

    extend: function ( options ) {

        for ( var key in options ) {

            if ( Object.prototype.hasOwnProperty.call( options, key ) ) {

                this[ key ] = options[ key ];

            }
        }

        return this;
    }
};
},{}],6:[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
    TWEEN = require('tween.js'),

    Constants = require('./Constants'),
    CameraManager = require('./CameraManager');

var Record = function ( id, crateId, pos ) {

    this.id = id;
    this.crateId = crateId;
    this.pos = pos;
    this.state = 'out';
    this.recordXPos = -62 + ( 135 / Constants.recordsPerCrate ) * pos;
    this.mesh = new THREE.Mesh( 
        new THREE.BoxGeometry( 100, 1.5, 100, 1, 1, 1 ), 
        new THREE.MeshFaceMaterial( new THREE.MeshLambertMaterial( {
            color: Constants.sleeveColor
        }))
    );
    this.mesh.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 50, 0, 0 ) );
    this.mesh.position.set( this.recordXPos, Constants.scene.recordBaseY, 0 );
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.recordId = id;
    this.absolutePosition = new THREE.Vector3();

    this.positionTween = new TWEEN.Tween();
    this.rotationTween = new TWEEN.Tween();

    this.setUnactive();
    this.pushRecord();

};

Record.prototype.log = function () {

    console.log( "Record n°", this.id,
        "crateId =", this.crateId,
        "pos =", this.pos );

};

Record.prototype.setActive = function () {

    this.active = true;
    this.mesh.visible = true;

};

Record.prototype.setUnactive = function () {

    this.active = false;
    this.mesh.visible = false;

};

Record.prototype.showRecord = function () {

    this.positionTween.stop();
    this.rotationTween.stop();

    if ( this.state !== 'shown' ) {

        this.state = 'shown';
        this.absolutePosition.setFromMatrixPosition( this.mesh.matrixWorld );

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordShownY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        CameraManager.focusRecord(this.recordXPos, this.absolutePosition);

    }
};

Record.prototype.pushRecord = function () {

    if ( this.state != 'pushed' ) {

        this.state = 'pushed';

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    this.positionTween.stop();
    this.rotationTween.stop();

    this.positionTween = new TWEEN.Tween( this.mesh.position )
        .to( {
            y: Constants.scene.recordFlippedY
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
        .delay( Constants.scene.infoOpenTime / 4 )
        .to( {
            x: 0,
            y: Math.PI,
            z: Math.PI / 2
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    CameraManager.zoomInRecord(this.recordXPos, this.absolutePosition);
};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .delay( Constants.scene.infoOpenTime / 2 )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                y: 0
            }, Constants.scene.infoOpenTime / 2 )
            .easing( TWEEN.Easing.Quartic.Out ).start()
            .onComplete( done );

        if (!noCameraTween) {
            
            CameraManager.zoomOutRecord(this.recordXPos, this.absolutePosition);
            
        }
    }
};

module.exports = Record;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9SZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcbiAgICBUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG4gICAgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKTtcclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggXHJcbiAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIENhbWVyYU1hbmFnZXIuZm9jdXNSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogTWF0aC5QSSxcclxuICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLnpvb21JblJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ2FtZXJhTWFuYWdlci56b29tT3V0UmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWNvcmQ7Il19
},{"./CameraManager":4,"./Constants":5,"tween.js":3}],7:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */
module.exports = function(THREE) {
	
	THREE.CopyShader = {

		uniforms: {

			"tDiffuse": { type: "t", value: null },
			"opacity":  { type: "f", value: 1.0 }

		},

		vertexShader: [

			"varying vec2 vUv;",

			"void main() {",

				"vUv = uv;",
				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform float opacity;",

			"uniform sampler2D tDiffuse;",

			"varying vec2 vUv;",

			"void main() {",

				"vec4 texel = texture2D( tDiffuse, vUv );",
				"gl_FragColor = opacity * texel;",

			"}"

		].join("\n")

	};
};
},{}],8:[function(require,module,exports){
/**
 * @author andrewberg / http://andrewberg.com/
 *
 * Depth of Field
 * - ported from
 */
module.exports = function(THREE) {
		
	THREE.DoFShader = {

		uniforms: {

			"tDiffuse":     { type: "t", value: null },
			"tDepth":       { type: "t", value: null },
			"znear":		{ type: "f", value: 1.0 },
			"zfar":			{ type: "f", value: 1000.0 },
			"size":         { type: "v2", value: new THREE.Vector2( 512, 512 ) },
			"textel":		{ type: "v2", value: new THREE.Vector2( 1/512, 1/512)},
			"focalDepth":	{ type: "f", value: 200.0 },
			"focalLength":	{ type: "f", value: 28.0 },
			"fstop":		{ type: "f", value: 2.8 },
			"showFocus":	{ type: "i", value: 0 },
			"manualdof":	{ type: "i", value: 0 },
			"ndofstart":	{ type: "f", value: 1.0 },
			"ndofdist":		{ type: "f", value: 2.0 },
			"fdofstart":	{ type: "f", value: 1.0 },
			"fdofdist":		{ type: "f", value: 3.0 },
			"CoC":			{ type: "f", value: 0.03 },
			"vignetting":	{ type: "i", value: 1 },
			"vignout":		{ type: "f", value: 1.3 },
			"vignin":		{ type: "f", value: 0.0 },
			"vignfade":		{ type: "f", value: 22.0 },
			"autofocus":	{ type: "i", value: 1 },
			"focus":        { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
			"maxblur":		{ type: "f", value: 1.0 },
			"threshold":	{ type: "f", value: 0.8 },
			"gain":			{ type: "f", value: 1.7 },
			"bias":			{ type: "f", value: 0.5 },
			"fringe":		{ type: "f", value: 0.7 },
			"noise":		{ type: "i", value: 1 },
			"namount":		{ type: "f", value: 0.0001 },
			"depthblur":	{ type: "i", value: 0 },
			"dbsize":		{ type: "f", value: 1.25}

		},

		vertexShader: [

			"varying vec2 vUv;",

			"void main() {",

				"vUv = uv;",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [
			"precision mediump float;",
			"#define PI  3.14159265",

			"varying vec2 vUv;",

			//uniform variables from external script

			"uniform sampler2D tDiffuse;",
			"uniform sampler2D tDepth;",
			"uniform vec2 size;", // texture width and height
			"uniform vec2 texel;", // textel size

			"uniform float focalDepth;",  //focal distance value in meters, but you may use autofocus option below
			"uniform float focalLength;", //focal length in mm
			"uniform float fstop;", //f-stop value
			"uniform bool showFocus;", //show debug focus point and focal range (orange = focal point, blue = focal range)

			//make sure that these two values are the same for your camera, otherwise distances will be wrong.
			"uniform float znear;", //camera clipping start
			"uniform float zfar;", //camera clipping end

			//------------------------------------------
			//user variables now passed as uniforms

			"uniform bool manualdof;", //manual dof calculation
			"uniform float ndofstart;", //near dof blur start
			"uniform float ndofdist;", //near dof blur falloff distance
			"uniform float fdofstart;", //far dof blur start
			"uniform float fdofdist;", //far dof blur falloff distance

			"uniform float CoC;",//circle of confusion size in mm (35mm film = 0.03mm)

			"uniform bool vignetting;", //use optical lens vignetting?
			"uniform float vignout;", //vignetting outer border
			"uniform float vignin;", //vignetting inner border
			"uniform float vignfade;", //f-stops till vignete fades

			"uniform bool autofocus;", //use autofocus in shader? disable if you use external focalDepth value
			"uniform vec2 focus;", // autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)
			"uniform float maxblur;", //clamp value of max blur (0.0 = no blur,1.0 default)

			"uniform float threshold;", //highlight threshold;
			"uniform float gain;", //highlight gain;

			"uniform float bias;", //bokeh edge bias
			"uniform float fringe;", //bokeh chromatic aberration/fringing

			"uniform bool noise;", //use noise instead of pattern for sample dithering
			"uniform float namount;", //dither amount

			"uniform bool depthblur;", //blur the depth buffer?
			"uniform float dbsize;", //depthblursize

			// samples and rings need to be constants. no dynamic loop counters in OpenGL ES
			// Can shader be broken into 2 pass? ... 
			"int samples = 3;", //samples on the first ring
			"const int rings = 3;", //ring count

			/*
			next part is experimental
			not looking good with small sample and ring count
			looks okay starting from samples = 4, rings = 4
			*/

			"bool pentagon = false;", //use pentagon as bokeh shape?
			"float feather = 0.4;", //pentagon shape feather

			//------------------------------------------

			// RGBA depth

			"float unpackDepth( const in vec4 rgba_depth ) {",

				"const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
				"float depth = dot( rgba_depth, bit_shift );",
				"return depth;",

			"}",


			"float penta(vec2 coords)", //pentagonal shape
			"{",
				"float scale = float(rings) - 1.3;",
				"vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);",
				"vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);",
				"vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);",
				"vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);",
				"vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);",
				"vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);",

				"vec4  one = vec4( 1.0 );",

				"vec4 P = vec4((coords),vec2(scale, scale));",

				"vec4 dist = vec4(0.0);",
				"float inorout = -4.0;",

				"dist.x = dot( P, HS0 );",
				"dist.y = dot( P, HS1 );",
				"dist.z = dot( P, HS2 );",
				"dist.w = dot( P, HS3 );",

				"dist = smoothstep( -feather, feather, dist );",

				"inorout += dot( dist, one );",

				"dist.x = dot( P, HS4 );",
				"dist.y = HS5.w - abs( P.z );",

				"dist = smoothstep( -feather, feather, dist );",
				"inorout += dist.x;",

				"return clamp( inorout, 0.0, 1.0 );",
			"}",

			"float bdepth(vec2 coords) //blurring depth",
			"{",
				"float d = 0.0;",
				"float kernel[9];",
				"vec2 offset[9];",

				"vec2 wh = vec2(texel.x, texel.y) * dbsize;",

				"offset[0] = vec2(-wh.x,-wh.y);",
				"offset[1] = vec2( 0.0, -wh.y);",
				"offset[2] = vec2( wh.x -wh.y);",

				"offset[3] = vec2(-wh.x,  0.0);",
				"offset[4] = vec2( 0.0,   0.0);",
				"offset[5] = vec2( wh.x,  0.0);",

				"offset[6] = vec2(-wh.x, wh.y);",
				"offset[7] = vec2( 0.0,  wh.y);",
				"offset[8] = vec2( wh.x, wh.y);",

				"kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;",
				"kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;",
				"kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;",


				"for( int i=0; i<9; i++ )",
				"{",
					"float tmp = unpackDepth(texture2D(tDepth, coords + offset[i]));",
					"d += tmp * kernel[i];",
				"}",

				"return d;",
			"}",


			"vec3 color(vec2 coords,float blur)", //processing the sample
			"{",
				"vec3 col = vec3(0.0);",

				"col.r = texture2D(tDiffuse,coords + vec2(0.0,1.0)*texel*fringe*blur).r;",
				"col.g = texture2D(tDiffuse,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;",
				"col.b = texture2D(tDiffuse,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;",

				"vec3 lumcoeff = vec3(0.299,0.587,0.114);",
				"float lum = dot(col.rgb, lumcoeff);",
				"float thresh = max((lum-threshold)*gain, 0.0);",
				"return col+mix(vec3(0.0),col,thresh*blur);",
			"}",

			"vec2 rand(vec2 coord) //generating noise/pattern texture for dithering",
			"{",
				"float noiseX = ((fract(1.0-coord.s*(size.x/2.0))*0.25)+(fract(coord.t*(size.y/2.0))*0.75))*2.0-1.0;",
				"float noiseY = ((fract(1.0-coord.s*(size.x/2.0))*0.75)+(fract(coord.t*(size.y/2.0))*0.25))*2.0-1.0;",

				"if (noise)",
				"{",
					"noiseX = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233))) * 43758.5453),0.0,1.0)*2.0-1.0;",
					"noiseY = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233)*2.0)) * 43758.5453),0.0,1.0)*2.0-1.0;",
				"}",
				"return vec2(noiseX,noiseY);",
			"}",

			"vec3 debugFocus(vec3 col, float blur, float depth)",
			"{",
				"float edge = 0.002*depth; //distance based edge smoothing",
				"float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);",
				"float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);",

				"col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);",
				"col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);",

				"return col;",
			"}",

			"float linearize(float depth)",
			"{",
				"return -zfar * znear / (depth * (zfar - znear) - zfar);",
			"}",

			"float vignette()",
			"{",
				"float dist = distance(vUv, vec2(0.5,0.5));",
				"dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);",
				"return clamp(dist,0.0,1.0);",
			"}",

			"void main()",
			"{",
				//scene depth calculation

				"float depth = linearize(unpackDepth(texture2D(tDepth,vUv)));",

				"if (depthblur)",
				"{",
					"depth = linearize(bdepth(vUv));",
				"}",

				//focal plane calculation",

				"float fDepth = focalDepth;",

				"if (autofocus)",
				"{",
					"fDepth = linearize(unpackDepth(texture2D(tDepth,focus)));",
				"}",

				//dof blur factor calculation

				"float blur = 0.0;",

				"if (manualdof)",
				"{",
					"float a = depth-fDepth;", //focal plane
					"float b = (a-fdofstart)/fdofdist;", //far DoF
					"float c = (-a-ndofstart)/ndofdist;", //near Dof
					"blur = (a>0.0)?b:c;",
				"}",

				"else",
				"{",
					"float f = focalLength;", //focal length in mm
					"float d = fDepth*1000.0;", //focal plane in mm
					"float o = depth*1000.0;", //depth in mm

					"float a = (o*f)/(o-f);",
					"float b = (d*f)/(d-f);",
					"float c = (d-f)/(d*fstop*CoC);",

					"blur = abs(a-b)*c;",
				"}",

				"blur = clamp(blur,0.0,1.0);",

				// calculation of pattern for ditering

				"vec2 noise = rand(vUv)*namount*blur;",

				// getting blur x and y step factor

				"float w = (1.0/size.x)*blur*maxblur+noise.x;",
				"float h = (1.0/size.y)*blur*maxblur+noise.y;",

				// calculation of final color

				"vec3 col = vec3(0.0);",

				"if(blur < 0.05)", //some optimization thingy
				"{",
					"col = texture2D(tDiffuse, vUv).rgb;",
				"}",
				"else",
				"{",
					"col = texture2D(tDiffuse, vUv).rgb;",
					"float s = 1.0;",

					"for (int i = 1; i <= rings; i += 1)",
					"{",
						"float ringsamples = float(i * samples);",

						"if(i == 1)",
						"{",
							"for (int j = 0 ; j < 3 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
						"else if(i == 2)",
						"{",
							"for (int j = 0 ; j < 6 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
						"else if(i == 3)",
						"{",
							"for (int j = 0 ; j < 9 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
					"}",
					"col /= s;", //divide by sample count
				"}",

				"if (showFocus)",
				"{",
					"col = debugFocus(col, blur, depth);",
				"}",

				"if (vignetting)",
				"{",
					"col *= vignette();",
				"}",

				"gl_FragColor.rgb = col;",
				"gl_FragColor.a = 1.0;",
			"}"

		].join("\n")

	};

}
},{}],9:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
	
	THREE.EffectComposer = function ( renderer, renderTarget ) {

		this.renderer = renderer;

		if ( renderTarget === undefined ) {

			var width = window.innerWidth || 1;
			var height = window.innerHeight || 1;
			var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

			renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		this.passes = [];

		if ( THREE.CopyShader === undefined )
			console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

		this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

	};

	THREE.EffectComposer.prototype = {

		swapBuffers: function() {

			var tmp = this.readBuffer;
			this.readBuffer = this.writeBuffer;
			this.writeBuffer = tmp;

		},

		addPass: function ( pass ) {

			this.passes.push( pass );

		},

		insertPass: function ( pass, index ) {

			this.passes.splice( index, 0, pass );

		},

		render: function ( delta ) {

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

			var maskActive = false;

			var pass, i, il = this.passes.length;

			for ( i = 0; i < il; i ++ ) {

				pass = this.passes[ i ];

				if ( !pass.enabled ) continue;

				pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

				if ( pass.needsSwap ) {

					if ( maskActive ) {

						var context = this.renderer.context;

						context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

						this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

						context.stencilFunc( context.EQUAL, 1, 0xffffffff );

					}

					this.swapBuffers();

				}

				if ( pass instanceof THREE.MaskPass ) {

					maskActive = true;

				} else if ( pass instanceof THREE.ClearMaskPass ) {

					maskActive = false;

				}

			}

		},

		reset: function ( renderTarget ) {

			if ( renderTarget === undefined ) {

				renderTarget = this.renderTarget1.clone();

				renderTarget.width = window.innerWidth;
				renderTarget.height = window.innerHeight;

			}

			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

		},

		setSize: function ( width, height ) {

			var renderTarget = this.renderTarget1.clone();

			renderTarget.width = width;
			renderTarget.height = height;

			this.reset( renderTarget );

		}

	};
};

},{}],10:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */
module.exports = function(THREE) {
		
	THREE.FXAAShader = {

		uniforms: {

			"tDiffuse":   { type: "t", value: null },
			"resolution": { type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 )  }

		},

		vertexShader: [

			"void main() {",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform sampler2D tDiffuse;",
			"uniform vec2 resolution;",

			"#define FXAA_REDUCE_MIN   (1.0/128.0)",
			"#define FXAA_REDUCE_MUL   (1.0/8.0)",
			"#define FXAA_SPAN_MAX     8.0",

			"void main() {",

				"vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
				"vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
				"vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
				"vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
				"vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
				"vec3 rgbM  = rgbaM.xyz;",
				"vec3 luma = vec3( 0.299, 0.587, 0.114 );",

				"float lumaNW = dot( rgbNW, luma );",
				"float lumaNE = dot( rgbNE, luma );",
				"float lumaSW = dot( rgbSW, luma );",
				"float lumaSE = dot( rgbSE, luma );",
				"float lumaM  = dot( rgbM,  luma );",
				"float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
				"float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

				"vec2 dir;",
				"dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
				"dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

				"float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

				"float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
				"dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
					  "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
							"dir * rcpDirMin)) * resolution;",
				"vec4 rgbA = (1.0/2.0) * (",
	        	"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +",
				"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));",
	    		"vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (",
				"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +",
	      		"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));",
	    		"float lumaB = dot(rgbB, vec4(luma, 0.0));",

				"if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

					"gl_FragColor = rgbA;",

				"} else {",
					"gl_FragColor = rgbB;",

				"}",

			"}"

		].join("\n")

	};

}
},{}],11:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {
		
	THREE.MaskPass = function ( scene, camera ) {

		this.scene = scene;
		this.camera = camera;

		this.enabled = true;
		this.clear = true;
		this.needsSwap = false;

		this.inverse = false;

	};

	THREE.MaskPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			var context = renderer.context;

			// don't update color or depth

			context.colorMask( false, false, false, false );
			context.depthMask( false );

			// set up stencil

			var writeValue, clearValue;

			if ( this.inverse ) {

				writeValue = 0;
				clearValue = 1;

			} else {

				writeValue = 1;
				clearValue = 0;

			}

			context.enable( context.STENCIL_TEST );
			context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
			context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
			context.clearStencil( clearValue );

			// draw into the stencil buffer

			renderer.render( this.scene, this.camera, readBuffer, this.clear );
			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

			// re-enable update of color and depth

			context.colorMask( true, true, true, true );
			context.depthMask( true );

			// only render where stencil is set to 1

			context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
			context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

		}

	};


	THREE.ClearMaskPass = function () {

		this.enabled = true;

	};

	THREE.ClearMaskPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			var context = renderer.context;

			context.disable( context.STENCIL_TEST );

		}

	};

};
},{}],12:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {

	THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

		this.oldClearColor = new THREE.Color();
		this.oldClearAlpha = 1;

		this.enabled = true;
		this.clear = true;
		this.needsSwap = false;

	};

	THREE.RenderPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			this.scene.overrideMaterial = this.overrideMaterial;

			if ( this.clearColor ) {

				this.oldClearColor.copy( renderer.getClearColor() );
				this.oldClearAlpha = renderer.getClearAlpha();

				renderer.setClearColor( this.clearColor, this.clearAlpha );

			}

			renderer.render( this.scene, this.camera, readBuffer, this.clear );

			if ( this.clearColor ) {

				renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

			}

			this.scene.overrideMaterial = null;

		}

	};
	
}
},{}],13:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {

	THREE.ShaderPass = function ( shader, textureID ) {

		this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

		this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		this.material = new THREE.ShaderMaterial( {

			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

		this.renderToScreen = false;

		this.enabled = true;
		this.needsSwap = true;
		this.clear = false;


		this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
		this.scene  = new THREE.Scene();

		this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
		this.scene.add( this.quad );

	};

	THREE.ShaderPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			if ( this.uniforms[ this.textureID ] ) {

				this.uniforms[ this.textureID ].value = readBuffer;

			}

			this.quad.material = this.material;

			if ( this.renderToScreen ) {

				renderer.render( this.scene, this.camera );

			} else {

				renderer.render( this.scene, this.camera, writeBuffer, this.clear );

			}

		}

	};
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3JhdGVkaWdnZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3RhdHMtanMvYnVpbGQvc3RhdHMubWluLmpzIiwibm9kZV9tb2R1bGVzL3R3ZWVuLmpzL2luZGV4LmpzIiwic3JjL2NyYXRlZGlnZ2VyL0NhbWVyYU1hbmFnZXIuanMiLCJzcmMvY3JhdGVkaWdnZXIvQ29uc3RhbnRzLmpzIiwic3JjL2NyYXRlZGlnZ2VyL1JlY29yZC5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3Nlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3I4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKlxyXG4gICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgIC86OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgIC86Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgLzo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgLzo6Ojo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgIC86OjovXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgLzo6Oi9+flxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAvOjo6L19fXFw6OjpcXCAgICBcXCAvOjo6LyAgICBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgLzo6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6OjovICAgIC8gXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgLzo6Ojo6OlxcICAgXFw6OjpcXCAgICBcXF9fICAgIC86Ojo6OjpcXCAgICBcXF9cXDo6OlxcICAgXFw6OjpcXCAgICBcXDovX19fXy8gICBcXDo6OlxcX19fX1xcXHJcbiAgICAgICAgIC86OjovXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgXFwgIC86OjovXFw6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgICB8ICAgICB8Ojo6fCAgICB8XHJcbiAgICAgICAgLzo6Oi8gIFxcOjo6XFwgICBcXDo6OnwgICAgfCBcXC86OjovICBcXDo6OlxcX19fX1xcIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcX19ffCAgICAgfDo6OnxfX19ffFxyXG4gICAgICAgIFxcOjovICAgfDo6OjpcXCAgLzo6OnxfX19ffCAvOjo6LyAgICBcXDo6LyAgICAvICBcXDo6OlxcICAgXFw6Oi8gICAgLyAgIF9cXF9fXy86OjovICAgIC9cclxuICAgICAgICAgXFwvX19fX3w6Ojo6OlxcLzo6Oi8gICAgL1xcLzo6Oi8gICAgLyBcXC9fX19fL1xcICAgXFw6OjpcXCAgIFxcL19fX18vOlxcIHw6OnwgLzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojo6Ojo6Ojo6LyAgICAvOjo6OjovICAgIC8gICAgICBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgXFw6OjpcXHw6OnwvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnxcXDo6OjovICAgIC9cXDo6OjovX19fXy8gICAgICAgIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcICBcXDo6Ojo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCBcXDo6L19fX18vICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgLzo6Oi8gICAgLyAgIFxcOjo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgfnwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXC86OjovICAgIC8gICAgIFxcOjo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgICB8ICAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6Ojo6Oi8gICAgLyAgICAgICBcXDo6OjovX19fXy9cclxuICAgICAgICAgICAgICAgXFw6OnwgICB8ICAgICAgICAgICBcXDo6OlxcX19fX1xcICAgICAgICAgXFw6Ojo6LyAgICAvICAgICAgICAgfDo6fCAgICB8XHJcbiAgICAgICAgICAgICAgICBcXDp8ICAgfCAgICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICB8Ojp8X19fX3xcclxuICAgICAgICAgICAgICAgICBcXHxfX198ICAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICB+flxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAuX19fLl9fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX1xyXG4gICAgICAgX19fX19fX19fX19fX19fXyBfLyAgfF8gIF9fX18gICBfX3wgXy98X198IF9fX18gICBfX19fICAgX19fX19fX19fX18gICAgICAgfF9ffCBfX19fX19cclxuICAgICBfLyBfX19cXF8gIF9fIFxcX18gIFxcXFwgICBfX1xcLyBfXyBcXCAvIF9fIHwgfCAgfC8gX19fXFwgLyBfX19cXF8vIF9fIFxcXyAgX18gXFwgICAgICB8ICB8LyAgX19fL1xyXG4gICAgIFxcICBcXF9fX3wgIHwgXFwvLyBfXyBcXHwgIHwgXFwgIF9fXy8vIC9fLyB8IHwgIC8gL18vICA+IC9fLyAgPiAgX19fL3wgIHwgXFwvICAgICAgfCAgfFxcX19fIFxcXHJcbiAgICAgIFxcX19fICA+X198ICAoX19fXyAgL19ffCAgXFxfX18gID5fX19fIHwgfF9fXFxfX18gIC9cXF9fXyAgLyBcXF9fXyAgPl9ffCAgL1xcIC9cXF9ffCAgL19fX18gID5cclxuICAgICAgICAgIFxcLyAgICAgICAgICAgXFwvICAgICAgICAgIFxcLyAgICAgXFwvICAgL19fX19fLy9fX19fXy8gICAgICBcXC8gICAgICBcXC8gXFxfX19fX198ICAgIFxcL1xyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBjcmF0ZWRpZ2dlci5qcyB2MC4wLjEgLSBieSByaXNxIChWYWxlbnRpbiBMZWRyYXBpZXIpICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcbiAgICBUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcbiAgICBTdGF0cyA9IHJlcXVpcmUoJ3N0YXRzLWpzJyksXHJcbiAgICBNb2Rlcm5penIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snTW9kZXJuaXpyJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydNb2Rlcm5penInXSA6IG51bGwpLFxyXG4gICAgZGF0ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2RhdCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnZGF0J10gOiBudWxsKSxcclxuXHJcbiAgICBSZWNvcmQgPSByZXF1aXJlKCcuL1JlY29yZCcpLFxyXG4gICAgQ2FtZXJhTWFuYWdlciA9IHJlcXVpcmUoJy4vQ2FtZXJhTWFuYWdlcicpLFxyXG4gICAgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcclxuXHJcbi8qPT09PT09PT09PSAgSW5qZWN0IGFsbCBleHRlcm5hbCBtb2R1bGVzIHRvIFRIUkVFLmpzID09PT09PT09PT0qL1xyXG5cclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXInKShUSFJFRSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVkFSSUFCTEVTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxudmFyIGV4cG9ydHMgPSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHN0YXRzLFxyXG4gICAgc2NlbmUsXHJcbiAgICBjYW1lcmEsXHJcbiAgICByZW5kZXJlcixcclxuICAgIGxpZ2h0LFxyXG4gICAgbGVmdExpZ2h0LFxyXG4gICAgcmlnaHRMaWdodCxcclxuICAgIGNvbXBvc2VyLFxyXG4gICAgRlhBQSxcclxuICAgIGRvZixcclxuICAgIGd1aSxcclxuICAgIGRlcHRoVGFyZ2V0LFxyXG4gICAgZGVwdGhTaGFkZXIsXHJcbiAgICBkZXB0aFVuaWZvcm1zLFxyXG4gICAgZGVwdGhNYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWw7XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUgKCkge1xyXG5cclxuICAgIGlmICggZG9SZW5kZXIgKSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXIgKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmUgKSB7XHJcblxyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy54ID0gKCBtb3VzZS54IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7IC8vIGludmVyc2UgYXhpcz9cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueSA9ICggbW91c2UueSAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1O1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueSArPSBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW91c2VNb3ZlU3BlZWRaICogKCB0YXJnZXRDYW1lcmFQb3MueSAtIHJvb3RDb250YWluZXIucm90YXRpb24ueiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmxvb2tBdFRhcmdldCgpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gZGVwdGhNYXRlcmlhbDtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIGRlcHRoVGFyZ2V0ICk7XHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogTG9hZGluZyBtZXRob2RzXHJcbiAqL1xyXG5mdW5jdGlvbiB1bmxvYWRSZWNvcmRzICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IG51bGw7XHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLnNldFVuYWN0aXZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFJlY29yZHMgPSAwO1xyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW107XHJcblxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRSZWNvcmRzICggcmVjb3Jkc0RhdGEsIHNodWZmbGVCZWZvcmVMb2FkaW5nLCBkb25lICkge1xyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoIHRydWUgKTtcclxuXHJcbiAgICBzaG93TG9hZGluZyggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGlmICggbG9hZGVkUmVjb3JkcyA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmxvYWRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzaHVmZmxlQmVmb3JlTG9hZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZHNEYXRhID0gc2h1ZmZsZSggcmVjb3Jkc0RhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aCAmJiBpIDwgcmVjb3Jkc0RhdGEubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IHJlY29yZHNEYXRhWyBpIF07XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLm1lc2gubWF0ZXJpYWwubWF0ZXJpYWxzID0gZ2V0UmVjb3JkTWF0ZXJpYWwoIHJlY29yZHNEYXRhWyBpIF0uY292ZXIsIHJlY29yZHNEYXRhWyBpIF0uaGFzU2xlZXZlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2h5ID8/XHJcbiAgICAgICAgLy8gbG9hZGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhLmxlbmd0aCA8IHJlY29yZHMubGVuZ3RoID8gcmVjb3Jkc0RhdGEubGVuZ3RoIDogcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgbG9hZGVkUmVjb3JkcyA9IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIHJlY29yZHNEYXRhTGlzdCA9IHJlY29yZHNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKGRvbmUpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgIH0sIDMwMDAgKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGVSZWNvcmRzICgpIHtcclxuXHJcbiAgICB2YXIgc2h1ZmZsZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGFMaXN0O1xyXG4gICAgc2h1ZmZsZWRSZWNvcmRzID0gc2h1ZmZsZSggc2h1ZmZsZWRSZWNvcmRzICk7XHJcbiAgICBsb2FkUmVjb3Jkcyggc2h1ZmZsZWRSZWNvcmRzICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUkVDT1JEUyBTRUxFQ1RJT04gTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gc2VsZWN0UmVjb3JkICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmxpcFNlbGVjdGVkUmVjb3JkICgpIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKSB7XHJcblxyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5pbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5lZCc7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLm9uSW5mb1BhbmVsT3BlbmVkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIgKTtcclxuXHJcbiAgICAgICAgfSwgMzAwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmbGlwQmFja1NlbGVjdGVkUmVjb3JkIChmb3JjZSkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmYWRlT3V0KCBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lciApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NpbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBCYWNrUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxDbG9zZWQoKTtcclxuXHJcbiAgICAgICAgfSwgZm9yY2UgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNob3duUmVjb3JkICgpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBzaG93blJlY29yZCAhPSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgc2hvd25SZWNvcmQgPSBzZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHJlY29yZElkID0gMDsgcmVjb3JkSWQgPCBsb2FkZWRSZWNvcmRzOyByZWNvcmRJZCsrICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID4gc2VsZWN0ZWRSZWNvcmQgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkID4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPCAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgKSArIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdWxsUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA9PSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnNob3dSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzZXRTaG93blJlY29yZCAoIGZvcmNlICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmICFmb3JjZSApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcbiAgICAgICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IC0xO1xyXG4gICAgICAgIFxyXG4gICAgICAgIENhbWVyYU1hbmFnZXIucmVzZXRDYW1lcmEoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByZXZSZWNvcmQgKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdE5leHRSZWNvcmQgKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXROZXh0QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJldkF2YWlsYWJsZVJlY29yZCAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPCBsb2FkZWRSZWNvcmRzIC0gMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgKyAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA+IDAgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldE5leHRBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gbmF2aWdhdGVSZWNvcmRzICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PT0gJ3ByZXYnICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIENvbnN0YW50cy5jbG9zZUluZm9QYW5lbE9uU2Nyb2xsICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFJlY29yZHMgKCB0b3VjaCwgYmFzZVksIG9sZERlbHRhICkge1xyXG5cclxuICAgIHZhciBzY3JvbGxTcGVlZDtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgc2Nyb2xsU3BlZWQgPSB0b3VjaCA/IE1hdGgucG93KDEgLSBvbGREZWx0YSwgMykgKiAyMDAgOiBNYXRoLnBvdygxIC0gb2xkRGVsdGEsIDMpICogMzAwO1xyXG5cclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JhYicpO1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIHRvdWNoLCBiYXNlWSwgZGVsdGEgKTtcclxuXHJcbiAgICB9LCBzY3JvbGxTcGVlZCApO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hTdG9wRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvblJpZ2h0Q2xpY2tFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU1vdmVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblRvdWNoTW92ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHtcclxuXHJcbiAgICAgICAgaWYgKCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKSB7XHJcblxyXG4gICAgICAgICAgICBtX3Bvc3ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgICAgICBtX3Bvc3kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgICAgICBtX3Bvc3ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIG1fcG9zeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmogJiYgb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsRXZlbnQgKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudCAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VEb3duRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICAgICAgc2Nyb2xsUmVjb3JkcyggZmFsc2UsIG1vdXNlLnkgKTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblRvdWNoU3RhcnRFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueVxyXG4gICAgfTtcclxuXHJcbiAgICBvblRvdWNoTW92ZUV2ZW50KCBlICk7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggdHJ1ZSwgbW91c2UueSApO1xyXG5cclxuICAgIH0gXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlVXBFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmJ1dHRvbiAhPT0gMSAmJiBlLmJ1dHRvbiAhPT0gMiApIHtcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWInKTtcclxuXHJcbiAgICAgICAgLy8gVHJpZ2dlciBzY2VuZSBjbGljayBldmVudCBvbmx5IGlmIG1vdXNldXAgZXZlbnQgaXMgbm90IGEgZHJhZyBlbmQgZXZlbnQgJiBub3QgYSBjbGljayBvbiBhIGxpbmtcclxuICAgICAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgQ29uc3RhbnRzLnNjZW5lLmdyYWJTZW5zaXRpdml0eSApICYmICEoIGUudGFyZ2V0ICYmIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICkgKSB7XHJcblxyXG4gICAgICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblRvdWNoU3RvcEV2ZW50ICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBzY2VuZSBjbGljayBldmVudCBvbmx5IGlmIG1vdXNldXAgZXZlbnQgaXMgbm90IGEgZHJhZyBlbmQgZXZlbnQgJiBub3QgYSBjbGljayBvbiBhIGxpbmtcclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblJpZ2h0Q2xpY2tFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uS2V5RG93bkV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xyXG5cclxuICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDI3ICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBDYW1lcmFNYW5hZ2VyLnVwZGF0ZUNhbWVyYUFzcGVjdCggY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgICBVSSBNRVRIT0RTICAgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TG9hZGluZyAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZUluKCBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lciApO1xyXG4gICAgc2V0VGltZW91dChkb25lLCAxMDAwKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGluZyAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0U2NlbmUgKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggQ29uc3RhbnRzLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIENhbWVyYU1hbmFnZXIuaW5pdChjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCk7XHJcbiAgICBjYW1lcmEgPSBDYW1lcmFNYW5hZ2VyLmdldENhbWVyYSgpO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBDb25zdGFudHMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAxLjEgKTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCggMzAwLCA4MCwgMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsaWdodCApO1xyXG5cclxuICAgIGxlZnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgYmluZEV2ZW50cygpO1xyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGhpZGVFbGVtZW50KENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBDb25zdGFudHMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0RGVidWcgKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdEdVSSAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuICAgIFxyXG4gICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgIGNhbWVyYUZvY2FsTGVuZ3RoLm9uQ2hhbmdlKCB1cGRhdGVDYW1lcmEgKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNhbWVyYSAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0Q3JhdGVzICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBDb25zdGFudHMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogQ29uc3RhbnRzLm5iQ3JhdGVzICkgKSAvIDI7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3JhdGUgKCBpZCApIHtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcbiAgICB2YXIgYm94X2JvdHRvbSA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYm90dG9tICk7XHJcblxyXG4gICAgdmFyIGJveF9sZWZ0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2xlZnQucG9zaXRpb24uc2V0KCAwLCAzNSwgLTU1ICk7XHJcbiAgICBib3hfbGVmdC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfbGVmdCApO1xyXG5cclxuICAgIGlmICggaWQgPT09IDAgKSB7XHJcbiAgICAgICAgdmFyIGJveF9yaWdodCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgICAgICBib3hfcmlnaHQucG9zaXRpb24uc2V0KCAwLCAzNSwgNTUgKTtcclxuICAgICAgICBib3hfcmlnaHQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9yaWdodCApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBib3hfYmFjayA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDgwLCAxMCwgMTIwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9iYWNrLnBvc2l0aW9uLnNldCggLTEwNSwgMzUsIDAgKTtcclxuICAgIGJveF9iYWNrLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9iYWNrICk7XHJcblxyXG4gICAgdmFyIGJveF9mcm9udCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDQwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9mcm9udC5wb3NpdGlvbi5zZXQoIDk1LCAyNSwgMCApO1xyXG4gICAgYm94X2Zyb250LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9mcm9udCApO1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXS5wb3NpdGlvbi56ID0gLTExMCAqIGlkO1xyXG4gICAgcmV0dXJuIGNyYXRlc1sgaWQgXTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0UmVjb3JkcyAoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRSZWNvcmRJZCA9IDA7XHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBjcmF0ZXMubGVuZ3RoOyBjcmF0ZUlkKysgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBwb3MgPSAwOyBwb3MgPCBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZWNvcmQgKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFJlY29yZE1hdGVyaWFsICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gQ29uc3RhbnRzLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBDb25zdGFudHMuc2xlZXZlQ29sb3JcclxuXHJcbiAgICB9ICk7XHJcblxyXG4gICAgdmFyIG1hdGVyaWFscyA9IFtcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICAvLyB0ZXh0dXJlXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBtYXA6IHRleHR1cmVcclxuICAgICAgICB9ICksXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWxcclxuICAgIF07XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxzO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBVVElMUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHdoZWVsRGlzdGFuY2UgKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICB2YXIgdyA9IGUud2hlZWxEZWx0YSxcclxuICAgICAgICBkID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoIGQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdyApIHJldHVybiB3IC8gZCAvIDQwICogZCA+IDAgPyAxIDogLTE7IC8vIE9wZXJhXHJcbiAgICAgICAgZWxzZSByZXR1cm4gLWQgLyAzOyAvLyBGaXJlZm94O1xyXG5cclxuICAgIH0gZWxzZSByZXR1cm4gdyAvIDEyMDsgLy8gSUUvU2FmYXJpL0Nocm9tZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gd2hlZWxEaXJlY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICByZXR1cm4gKCBlLmRldGFpbCA8IDAgKSA/IDEgOiAoIGUud2hlZWxEZWx0YSA+IDAgKSA/IDEgOiAtMTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb29yZHNFcXVhbHNBcHByb3ggKCBjb29yZDEsIGNvb3JkMiwgcmFuZ2UgKSB7XHJcblxyXG4gICAgcmV0dXJuICggTWF0aC5hYnMoIGNvb3JkMS54IC0gY29vcmQyLnggKSA8PSByYW5nZSApICYmICggTWF0aC5hYnMoIGNvb3JkMS55IC0gY29vcmQyLnkgKSA8PSByYW5nZSApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZhZGVPdXQgKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGlmIChlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09IDApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uRXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmFkZUluICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnJyB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09ICcxJykge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IGdldFRyYW5zaXRpb25FdmVudChlbGVtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfSwgMTUpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uRmFkZUNvbXBsZXRlKCBlICwgZTIgKSB7XHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50eXBlLCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgaWYgKCBlLmN1cnJlbnRUYXJnZXQuc3R5bGUub3BhY2l0eSA9PT0gJzAnICkge1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dFbGVtZW50KCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkV2ZW50ICgpIHtcclxuXHJcbiAgICB2YXIgdCxcclxuICAgICAgICB0cmFuc2l0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ09UcmFuc2l0aW9uJzonb1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgICAgICAnTW96VHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnV2Via2l0VHJhbnNpdGlvbic6J3dlYmtpdFRyYW5zaXRpb25FbmQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBmb3IodCBpbiB0cmFuc2l0aW9ucykge1xyXG5cclxuICAgICAgICBpZiggZG9jdW1lbnQuYm9keS5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUNhbnZhc1NpemUgKCkge1xyXG5cclxuICAgIGNhbnZhc1dpZHRoID0gQ29uc3RhbnRzLmNhbnZhc1dpZHRoID8gQ29uc3RhbnRzLmNhbnZhc1dpZHRoIDogQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICBjYW52YXNIZWlnaHQgPSBDb25zdGFudHMuY2FudmFzSGVpZ2h0ID8gQ29uc3RhbnRzLmNhbnZhc0hlaWdodCA6IENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXRDYW52YXNEaW1lbnNpb25zICgpIHtcclxuXHJcbiAgICAvL0NvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLmhlaWdodCAgICAgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcblxyXG4gICAgLy9Db25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS53aWR0aCAgICAgPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKCB2ICkgeyAvLyBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgLSBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZSBbcmV2LiAjMV1cclxuXHJcbiAgICBmb3IgKCB2YXIgaiwgeCwgaSA9IHYubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBpICksIHggPSB2WyAtLWkgXSwgdlsgaSBdID0gdlsgaiBdLCB2WyBqIF0gPSB4ICk7XHJcbiAgICByZXR1cm4gdjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVhQT1JUUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgTWV0aG9kcyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcclxuXHJcbiAgICBDb25zdGFudHMuZXh0ZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICBpZiAoICFNb2Rlcm5penIud2ViZ2wgKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcm9vdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjYW52YXMgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGxvYWRpbmcgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpjbUYwWldScFoyZGxjaTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOWZYMThnSUNBZ0lDQWdJQ0FnSUNBZ0lGOWZYMTlmSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZYMTlmWHlBZ0lDQWdJQ0FnSUNBZ0lDQmZYMTlmWDE5ZlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMMXhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQ0FnTDF4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUNBZ0wxeGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDQXZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDODZPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDODZPam82T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUM4Nk9qbzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGd2dJQ0FnSUM4Nk9qbzZPam82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0F2T2pvNkwxeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQzg2T2pvdlhGdzZPanBjWENBZ0lDQmNYQ0FnSUM4Nk9qb3ZmbjVjWERvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4Nk9qb3ZYMTljWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnTHpvNk9pOWZYMXhjT2pvNlhGd2dJQ0FnWEZ3Z0x6bzZPaThnSUNBZ1hGdzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDODZPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y0lGeGNPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjT2pvNkx5QWdJQ0F2SUZ4Y09qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUM4Nk9qbzZPanBjWENBZ0lGeGNPam82WEZ3Z0lDQWdYRnhmWHlBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ4ZlhGdzZPanBjWENBZ0lGeGNPam82WEZ3Z0lDQWdYRnc2TDE5ZlgxOHZJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hGeHlYRzRnSUNBZ0lDQWdJQ0F2T2pvNkwxeGNPam82WEZ3Z0lDQmNYRG82T2x4Y1gxOWZYMXhjSUZ4Y0lDQXZPam82TDF4Y09qbzZYRndnSUNBZ1hGd2dYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdmQ0FnSUNBZ2ZEbzZPbndnSUNBZ2ZGeHlYRzRnSUNBZ0lDQWdJQzg2T2pvdklDQmNYRG82T2x4Y0lDQWdYRnc2T2pwOElDQWdJSHdnWEZ3dk9qbzZMeUFnWEZ3Nk9qcGNYRjlmWDE5Y1hDQmNYRG82T2x4Y0lDQWdYRnc2T2pwY1hGOWZYMTljWEY5Zlgzd2dJQ0FnSUh3Nk9qcDhYMTlmWDN4Y2NseHVJQ0FnSUNBZ0lDQmNYRG82THlBZ0lIdzZPam82WEZ3Z0lDODZPanA4WDE5Zlgzd2dMem82T2k4Z0lDQWdYRnc2T2k4Z0lDQWdMeUFnWEZ3Nk9qcGNYQ0FnSUZ4Y09qb3ZJQ0FnSUM4Z0lDQmZYRnhmWDE4dk9qbzZMeUFnSUNBdlhISmNiaUFnSUNBZ0lDQWdJRnhjTDE5ZlgxOThPam82T2pwY1hDODZPam92SUNBZ0lDOWNYQzg2T2pvdklDQWdJQzhnWEZ3dlgxOWZYeTljWENBZ0lGeGNPam82WEZ3Z0lDQmNYQzlmWDE5Zkx6cGNYQ0I4T2pwOElDODZPam92SUNBZ0lDOWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmRG82T2pvNk9qbzZPaThnSUNBZ0x6bzZPam82THlBZ0lDQXZJQ0FnSUNBZ1hGdzZPanBjWENBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUZ4Y09qbzZYRng4T2pwOEx6bzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhPanA4WEZ3Nk9qbzZMeUFnSUNBdlhGdzZPam82TDE5ZlgxOHZJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdYRnc2T2pwY1hGOWZYMTljWENBZ1hGdzZPam82T2pvNk9qbzZMeUFnSUNBdlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lIdzZPbndnWEZ3Nk9pOWZYMTlmTHlBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQzg2T2pvdklDQWdJQzhnSUNCY1hEbzZPam82T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh3Nk9ud2dJSDU4SUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3dk9qbzZMeUFnSUNBdklDQWdJQ0JjWERvNk9qbzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhPanA4SUNBZ2ZDQWdJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qbzZPam92SUNBZ0lDOGdJQ0FnSUNBZ1hGdzZPam82TDE5ZlgxOHZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnhjT2pwOElDQWdmQ0FnSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hDQWdJQ0FnSUNBZ0lGeGNPam82T2k4Z0lDQWdMeUFnSUNBZ0lDQWdJSHc2T253Z0lDQWdmRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ3NmZDQWdJSHdnSUNBZ0lDQWdJQ0FnSUNCY1hEbzZMeUFnSUNBdklDQWdJQ0FnSUNBZ0lGeGNPam92SUNBZ0lDOGdJQ0FnSUNBZ0lDQWdmRG82ZkY5ZlgxOThYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ4OFgxOWZmQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hDOWZYMTlmTHlBZ0lDQWdJQ0FnSUNBZ0lGeGNMMTlmWDE4dklDQWdJQ0FnSUNBZ0lDQWdmbjVjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYMThnSUNBZ0lDQWdJQ0FnSUNBZ0xsOWZYeTVmWHlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDE5Y2NseHVJQ0FnSUNBZ0lGOWZYMTlmWDE5ZlgxOWZYMTlmWDE4Z1h5OGdJSHhmSUNCZlgxOWZJQ0FnWDE5OElGOHZmRjlmZkNCZlgxOWZJQ0FnWDE5Zlh5QWdJRjlmWDE5ZlgxOWZYMTlmSUNBZ0lDQWdJSHhmWDN3Z1gxOWZYMTlmWEhKY2JpQWdJQ0FnWHk4Z1gxOWZYRnhmSUNCZlh5QmNYRjlmSUNCY1hGeGNJQ0FnWDE5Y1hDOGdYMThnWEZ3Z0x5QmZYeUI4SUh3Z0lId3ZJRjlmWDF4Y0lDOGdYMTlmWEZ4Zkx5QmZYeUJjWEY4Z0lGOWZJRnhjSUNBZ0lDQWdmQ0FnZkM4Z0lGOWZYeTljY2x4dUlDQWdJQ0JjWENBZ1hGeGZYMTk4SUNCOElGeGNMeThnWDE4Z1hGeDhJQ0I4SUZ4Y0lDQmZYMTh2THlBdlh5OGdmQ0I4SUNBdklDOWZMeUFnUGlBdlh5OGdJRDRnSUY5Zlh5OThJQ0I4SUZ4Y0x5QWdJQ0FnSUh3Z0lIeGNYRjlmWHlCY1hGeHlYRzRnSUNBZ0lDQmNYRjlmWHlBZ1BsOWZmQ0FnS0Y5ZlgxOGdJQzlmWDN3Z0lGeGNYMTlmSUNBK1gxOWZYeUI4SUh4ZlgxeGNYMTlmSUNBdlhGeGZYMThnSUM4Z1hGeGZYMThnSUQ1Zlgzd2dJQzljWENBdlhGeGZYM3dnSUM5ZlgxOWZJQ0ErWEhKY2JpQWdJQ0FnSUNBZ0lDQmNYQzhnSUNBZ0lDQWdJQ0FnSUZ4Y0x5QWdJQ0FnSUNBZ0lDQmNYQzhnSUNBZ0lGeGNMeUFnSUM5ZlgxOWZYeTh2WDE5ZlgxOHZJQ0FnSUNBZ1hGd3ZJQ0FnSUNBZ1hGd3ZJRnhjWDE5ZlgxOWZmQ0FnSUNCY1hDOWNjbHh1WEhKY2JseHlYRzRxTDF4eVhHNWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1kzSmhkR1ZrYVdkblpYSXVhbk1nZGpBdU1DNHhJQzBnWW5rZ2NtbHpjU0FvVm1Gc1pXNTBhVzRnVEdWa2NtRndhV1Z5S1NBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiaWQxYzJVZ2MzUnlhV04wSnp0Y2NseHVYSEpjYm5aaGNpQlVTRkpGUlNBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z2QybHVaRzkzV3lkVVNGSkZSU2RkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuVkVoU1JVVW5YU0E2SUc1MWJHd3BMRnh5WEc0Z0lDQWdWRmRGUlU0Z1BTQnlaWEYxYVhKbEtDZDBkMlZsYmk1cWN5Y3BMRnh5WEc0Z0lDQWdVM1JoZEhNZ1BTQnlaWEYxYVhKbEtDZHpkR0YwY3kxcWN5Y3BMRnh5WEc0Z0lDQWdUVzlrWlhKdWFYcHlJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKMDF2WkdWeWJtbDZjaWRkSURvZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUdkc2IySmhiRnNuVFc5a1pYSnVhWHB5SjEwZ09pQnVkV3hzS1N4Y2NseHVJQ0FnSUdSaGRDQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdkMmx1Wkc5M1d5ZGtZWFFuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSjJSaGRDZGRJRG9nYm5Wc2JDa3NYSEpjYmx4eVhHNGdJQ0FnVW1WamIzSmtJRDBnY21WeGRXbHlaU2duTGk5U1pXTnZjbVFuS1N4Y2NseHVJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDBOaGJXVnlZVTFoYm1GblpYSW5LU3hjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeUE5SUhKbGNYVnBjbVVvSnk0dlEyOXVjM1JoYm5Sekp5azdYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDBnSUVsdWFtVmpkQ0JoYkd3Z1pYaDBaWEp1WVd3Z2JXOWtkV3hsY3lCMGJ5QlVTRkpGUlM1cWN5QTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMU5vWVdSbGNsQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwTnZjSGxUYUdGa1pYSW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDFKbGJtUmxjbEJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFJ2UmxOb1lXUmxjaWNwS0ZSSVVrVkZLVHRjY2x4dWNtVnhkV2x5WlNnbkxpOTBhSEpsWldwelgyMXZaSFZzWlhNdlJsaEJRVk5vWVdSbGNpY3BLRlJJVWtWRktUdGNjbHh1Y21WeGRXbHlaU2duTGk5MGFISmxaV3B6WDIxdlpIVnNaWE12VFdGemExQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwVm1abVZqZEVOdmJYQnZjMlZ5Snlrb1ZFaFNSVVVwTzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRlpCVWtsQlFreEZVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JuWmhjaUJsZUhCdmNuUnpJRDBnZTMwc0lDOHZJRTlpYW1WamRDQm1iM0lnY0hWaWJHbGpJRUZRU1hOY2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlVhSEpsWlM1cWN5QnZZbXBsWTNSeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCemRHRjBjeXhjY2x4dUlDQWdJSE5qWlc1bExGeHlYRzRnSUNBZ1kyRnRaWEpoTEZ4eVhHNGdJQ0FnY21WdVpHVnlaWElzWEhKY2JpQWdJQ0JzYVdkb2RDeGNjbHh1SUNBZ0lHeGxablJNYVdkb2RDeGNjbHh1SUNBZ0lISnBaMmgwVEdsbmFIUXNYSEpjYmlBZ0lDQmpiMjF3YjNObGNpeGNjbHh1SUNBZ0lFWllRVUVzWEhKY2JpQWdJQ0JrYjJZc1hISmNiaUFnSUNCbmRXa3NYSEpjYmlBZ0lDQmtaWEIwYUZSaGNtZGxkQ3hjY2x4dUlDQWdJR1JsY0hSb1UyaGhaR1Z5TEZ4eVhHNGdJQ0FnWkdWd2RHaFZibWxtYjNKdGN5eGNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3dzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1QySnFaV04wY3lBbUlHUmhkR0VnWVhKeVlYbHpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQmpjbUYwWlhNZ1BTQmJYU3hjY2x4dUlDQWdJSEpsWTI5eVpITWdQU0JiWFN4Y2NseHVJQ0FnSUhKbFkyOXlaSE5FWVhSaFRHbHpkQ0E5SUZ0ZExGeHlYRzVjY2x4dVhISmNiaUFnSUNBdktqMDlQVDA5UFQwOVBUMGdJRlJvY21WbExtcHpJRzlpYW1WamRITWdZMjl1ZEdGcGJtVnljeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2l4Y2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaXhjY2x4dUlDQWdJSEpsWTI5eVpITkRiMjUwWVdsdVpYSXNYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVTNSaGRHVnpMQ0IxZEdsc0lIWmhjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJR05oYm5aaGMxZHBaSFJvTEZ4eVhHNGdJQ0FnWTJGdWRtRnpTR1ZwWjJoMExGeHlYRzRnSUNBZ1pIQnlMRnh5WEc0Z0lDQWdjMk55YjJ4c1VtVmpiM0prYzFScGJXVnZkWFFzWEhKY2JpQWdJQ0JwYzB4dllXUnBibWNnUFNCbVlXeHpaU3hjY2x4dUlDQWdJR2x1Wm05UVlXNWxiRk4wWVhSbElEMGdYQ0pqYkc5elpXUmNJaXhjY2x4dUlDQWdJR2x6VTJOeWIyeHNhVzVuSUQwZ1ptRnNjMlVzWEhKY2JpQWdJQ0JrYjFKbGJtUmxjaUE5SUhSeWRXVXNYSEpjYmlBZ0lDQnRiM1Z6WlNBOUlIdGNjbHh1SUNBZ0lDQWdJQ0I0T2lBd0xGeHlYRzRnSUNBZ0lDQWdJSGs2SURCY2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCdGIzVnpaVVJ2ZDI1UWIzTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdkR0Z5WjJWMFEyRnRaWEpoVUc5eklEMGdlMXh5WEc0Z0lDQWdJQ0FnSUhnNklEQXNYSEpjYmlBZ0lDQWdJQ0FnZVRvZ01GeHlYRzRnSUNBZ2ZTeGNjbHh1SUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ0xURXNYSEpjYmlBZ0lDQnphRzkzYmxKbFkyOXlaQ0E5SUMweExGeHlYRzRnSUNBZ2JHOWhaR1ZrVW1WamIzSmtjeUE5SURBc1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdUV0YwWlhKcFlXeHpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQjNiMjlrWDIxaGRHVnlhV0ZzTzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQkNRVk5GSUUxRlZFaFBSRk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVtZFc1amRHbHZiaUJoYm1sdFlYUmxJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdSdlVtVnVaR1Z5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9JR0Z1YVcxaGRHVWdLVHRjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWElvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVaR1ZpZFdjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGMGN5NTFjR1JoZEdVb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnY21WdVpHVnlJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQlVWMFZGVGk1MWNHUmhkR1VvS1R0Y2NseHVJQ0FnSUhWd1pHRjBaVk5vYjNkdVVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCRGIyNXpkR0Z1ZEhNdVkyRnRaWEpoVFc5MWMyVk5iM1psSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMFlYSm5aWFJEWVcxbGNtRlFiM011ZUNBOUlDZ2diVzkxYzJVdWVDQXZJR05oYm5aaGMxZHBaSFJvSUMwZ01DNDFJQ2tnS2lBd0xqSTFPeUF2THlCcGJuWmxjbk5sSUdGNGFYTS9YSEpjYmlBZ0lDQWdJQ0FnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmtnUFNBb0lHMXZkWE5sTG5rZ0x5QmpZVzUyWVhOWGFXUjBhQ0F0SURBdU5TQXBJQ29nTUM0eU5UdGNjbHh1SUNBZ0lDQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeUxuSnZkR0YwYVc5dUxua2dLejBnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkWE5sVFc5MlpWTndaV1ZrV1NBcUlDZ2dkR0Z5WjJWMFEyRnRaWEpoVUc5ekxuZ2dMU0J5YjI5MFEyOXVkR0ZwYm1WeUxuSnZkR0YwYVc5dUxua2dLVHRjY2x4dUlDQWdJQ0FnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbm9nS3owZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZFhObFRXOTJaVk53WldWa1dpQXFJQ2dnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmtnTFNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbm9nS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnUTJGdFpYSmhUV0Z1WVdkbGNpNXNiMjlyUVhSVVlYSm5aWFFvS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUVOdmJuTjBZVzUwY3k1d2IzTjBjSEp2WTJWemMybHVaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJObGJtVXViM1psY25KcFpHVk5ZWFJsY21saGJDQTlJR1JsY0hSb1RXRjBaWEpwWVd3N1hISmNiaUFnSUNBZ0lDQWdjbVZ1WkdWeVpYSXVjbVZ1WkdWeUtDQnpZMlZ1WlN3Z1kyRnRaWEpoTENCa1pYQjBhRlJoY21kbGRDQXBPMXh5WEc0Z0lDQWdJQ0FnSUhOalpXNWxMbTkyWlhKeWFXUmxUV0YwWlhKcFlXd2dQU0J1ZFd4c08xeHlYRzRnSUNBZ0lDQWdJR052YlhCdmMyVnlMbkpsYm1SbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsYm1SbGNtVnlMbkpsYm1SbGNpZ2djMk5sYm1Vc0lHTmhiV1Z5WVNBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JpOHFYSEpjYmlBcUlFeHZZV1JwYm1jZ2JXVjBhRzlrYzF4eVhHNGdLaTljY2x4dVpuVnVZM1JwYjI0Z2RXNXNiMkZrVW1WamIzSmtjeUFvS1NCN1hISmNibHh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR2tnUFNBd095QnBJRHdnY21WamIzSmtjeTVzWlc1bmRHZzdJR2tyS3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzV6WlhSVmJtRmpkR2wyWlNncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnTUR0Y2NseHVJQ0FnSUhKbFkyOXlaSE5FWVhSaFRHbHpkQ0E5SUZ0ZE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzVtZFc1amRHbHZiaUJzYjJGa1VtVmpiM0prY3lBb0lISmxZMjl5WkhORVlYUmhMQ0J6YUhWbVpteGxRbVZtYjNKbFRHOWhaR2x1Wnl3Z1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDQjBjblZsSUNrN1hISmNibHh5WEc0Z0lDQWdjMmh2ZDB4dllXUnBibWNvSUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR3h2WVdSbFpGSmxZMjl5WkhNZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNXNiMkZrVW1WamIzSmtjeWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2MyaDFabVpzWlVKbFptOXlaVXh2WVdScGJtY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6UkdGMFlTQTlJSE5vZFdabWJHVW9JSEpsWTI5eVpITkVZWFJoSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2dnSmlZZ2FTQThJSEpsWTI5eVpITkVZWFJoTG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnlaV052Y21SelJHRjBZVnNnYVNCZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCcElGMHVjMlYwUVdOMGFYWmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1dFpYTm9MbTFoZEdWeWFXRnNMbTFoZEdWeWFXRnNjeUE5SUdkbGRGSmxZMjl5WkUxaGRHVnlhV0ZzS0NCeVpXTnZjbVJ6UkdGMFlWc2dhU0JkTG1OdmRtVnlMQ0J5WldOdmNtUnpSR0YwWVZzZ2FTQmRMbWhoYzFOc1pXVjJaU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUhkb2VTQS9QMXh5WEc0Z0lDQWdJQ0FnSUM4dklHeHZZV1JsWkZKbFkyOXlaSE1nUFNCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnZ1BDQnlaV052Y21SekxteGxibWQwYUNBL0lISmxZMjl5WkhORVlYUmhMbXhsYm1kMGFDQTZJSEpsWTI5eVpITXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQnlaV052Y21SekxteGxibWQwYUR0Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQnlaV052Y21SelJHRjBZVHRjY2x4dUlDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9hV1JsVEc5aFpHbHVaeWhrYjI1bEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1EyOXVjM1JoYm5SekxtOXVURzloWkdsdVowVnVaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBek1EQXdJQ2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCemFIVm1abXhsVW1WamIzSmtjeUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhOb2RXWm1iR1ZrVW1WamIzSmtjeUE5SUhKbFkyOXlaSE5FWVhSaFRHbHpkRHRjY2x4dUlDQWdJSE5vZFdabWJHVmtVbVZqYjNKa2N5QTlJSE5vZFdabWJHVW9JSE5vZFdabWJHVmtVbVZqYjNKa2N5QXBPMXh5WEc0Z0lDQWdiRzloWkZKbFkyOXlaSE1vSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZKRlEwOVNSRk1nVTBWTVJVTlVTVTlPSUUxRlZFaFBSRk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5sYkdWamRGSmxZMjl5WkNBb0lHbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2R2Y0dWdWFXNW5KeUFtSmlCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyTnNiM05wYm1jbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOUlHbGtPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR1pzYVhCVFpXeGxZM1JsWkZKbFkyOXlaQ0FvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUNkdmNHVnVhVzVuSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYUzVtYkdsd1VtVmpiM0prS0NCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlJQ2R2Y0dWdVpXUW5PMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRU52Ym5OMFlXNTBjeTV2YmtsdVptOVFZVzVsYkU5d1pXNWxaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtWVdSbFNXNG9JRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVwYm1adlEyOXVkR0ZwYm1WeUlDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMHNJRE13TUNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDQW9abTl5WTJVcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabUZrWlU5MWRDZ2dRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbWx1Wm05RGIyNTBZV2x1WlhJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlJQ2RqYkc5emFXNW5KenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTNW1iR2x3UW1GamExSmxZMjl5WkNnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuWTJ4dmMyVmtKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdRMjl1YzNSaGJuUnpMbTl1U1c1bWIxQmhibVZzUTJ4dmMyVmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBzSUdadmNtTmxJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWVGFHOTNibEpsWTI5eVpDQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjJOc2IzTmxaQ2NnSmlZZ2MyaHZkMjVTWldOdmNtUWdJVDBnYzJWc1pXTjBaV1JTWldOdmNtUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5vYjNkdVVtVmpiM0prSUQwZ2MyVnNaV04wWldSU1pXTnZjbVE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJ5WldOdmNtUkpaQ0E5SURBN0lISmxZMjl5WkVsa0lEd2diRzloWkdWa1VtVmpiM0prY3pzZ2NtVmpiM0prU1dRckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2djMlZzWldOMFpXUlNaV052Y21RZ1BUMGdMVEVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnY21WamIzSmtTV1FnWFM1d2RYTm9VbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NCeVpXTnZjbVJKWkNBK0lITmxiR1ZqZEdWa1VtVmpiM0prSUNZbVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SSlpDQStJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVZM0poZEdWSlpDQXFJRU52Ym5OMFlXNTBjeTV5WldOdmNtUnpVR1Z5UTNKaGRHVWdKaVpjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaRWxrSUR3Z0tDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZExtTnlZWFJsU1dRZ0tpQkRiMjV6ZEdGdWRITXVjbVZqYjNKa2MxQmxja055WVhSbElDa2dLeUJEYjI1emRHRnVkSE11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1Y0hWc2JGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2dnY21WamIzSmtTV1FnUFQwZ2MyVnNaV04wWldSU1pXTnZjbVFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnY21WamIzSmtTV1FnWFM1emFHOTNVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjSFZ6YUZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxjMlYwVTJodmQyNVNaV052Y21RZ0tDQm1iM0pqWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QW1KaUFoWm05eVkyVWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyOXdaVzVwYm1jbklDWW1JR2x1Wm05UVlXNWxiRk4wWVhSbElDRTlQU0FuWTJ4dmMybHVaeWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2R2Y0dWdVpXUW5JQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tIUnlkV1VwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNBdE1UdGNjbHh1SUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCRFlXMWxjbUZOWVc1aFoyVnlMbkpsYzJWMFEyRnRaWEpoS0NrN1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6Wld4bFkzUlFjbVYyVW1WamIzSmtJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvWjJWMFVISmxka0YyWVdsc1lXSnNaVkpsWTI5eVpDaHpaV3hsWTNSbFpGSmxZMjl5WkNrcE8xeHlYRzRnSUNBZ1hISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6Wld4bFkzUk9aWGgwVW1WamIzSmtJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvWjJWMFRtVjRkRUYyWVdsc1lXSnNaVkpsWTI5eVpDaHpaV3hsWTNSbFpGSmxZMjl5WkNrcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRkJ5WlhaQmRtRnBiR0ZpYkdWU1pXTnZjbVFnS0daeWIyMVNaV052Y21RcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHWnliMjFTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRHdnYkc5aFpHVmtVbVZqYjNKa2N5QXRJREVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQm1jbTl0VW1WamIzSmtJQ3NnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdNRHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxZMjl5WkhOYklHWnliMjFTWldOdmNtUWdYUzVoWTNScGRtVWdQeUJtY205dFVtVmpiM0prSURvZ1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ2htY205dFVtVmpiM0prS1R0Y2NseHVJQ0FnSUZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdaMlYwVG1WNGRFRjJZV2xzWVdKc1pWSmxZMjl5WkNBb1puSnZiVkpsWTI5eVpDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dabkp2YlZKbFkyOXlaQ0E5UFNBdE1TQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR1p5YjIxU1pXTnZjbVFnUGlBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnWm5KdmJWSmxZMjl5WkNBdElERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdjbVZqYjNKa2Mxc2dabkp2YlZKbFkyOXlaQ0JkTG1GamRHbDJaU0EvSUdaeWIyMVNaV052Y21RZ09pQm5aWFJPWlhoMFFYWmhhV3hoWW14bFVtVmpiM0prS0daeWIyMVNaV052Y21RcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHNWhkbWxuWVhSbFVtVmpiM0prY3lBb0lHUnBjbVZqZEdsdmJpQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQmthWEpsWTNScGIyNGdQVDA5SUNkd2NtVjJKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEZCeVpYWlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEU1bGVIUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBbUppQkRiMjV6ZEdGdWRITXVZMnh2YzJWSmJtWnZVR0Z1Wld4UGJsTmpjbTlzYkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnpZM0p2Ykd4U1pXTnZjbVJ6SUNnZ2RHOTFZMmdzSUdKaGMyVlpMQ0J2YkdSRVpXeDBZU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYzJOeWIyeHNVM0JsWldRN1hISmNibHh5WEc0Z0lDQWdiMnhrUkdWc2RHRWdQU0FoYjJ4a1JHVnNkR0VnZkh3Z1RXRjBhQzVoWW5Nb0lHOXNaRVJsYkhSaElDa2dQaUF3TGpVZ1B5QXdMalVnT2lCTllYUm9MbUZpY3lnZ2IyeGtSR1ZzZEdFZ0tUdGNjbHh1SUNBZ0lITmpjbTlzYkZOd1pXVmtJRDBnZEc5MVkyZ2dQeUJOWVhSb0xuQnZkeWd4SUMwZ2IyeGtSR1ZzZEdFc0lETXBJQ29nTWpBd0lEb2dUV0YwYUM1d2IzY29NU0F0SUc5c1pFUmxiSFJoTENBektTQXFJRE13TUR0Y2NseHVYSEpjYmlBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6VkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUdSbGJIUmhJRDBnS0NCaVlYTmxXU0F0SUcxdmRYTmxMbmtnS1NBdklHTmhiblpoYzBobGFXZG9kRHRjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1MExtTnNZWE56VEdsemRDNWhaR1FvSjJkeVlXSW5LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCa1pXeDBZU0ErSURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUk9aWGgwVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvSUdSbGJIUmhJRHdnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRGQnlaWFpTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6S0NCMGIzVmphQ3dnWW1GelpWa3NJR1JsYkhSaElDazdYSEpjYmx4eVhHNGdJQ0FnZlN3Z2MyTnliMnhzVTNCbFpXUWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1JWWkZUbFJUSUVoQlRrUk1TVTVISUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1ltbHVaRVYyWlc1MGN5Z3BJSHRjY2x4dVhISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuUkU5TlRXOTFjMlZUWTNKdmJHd25MQ0J2YmxOamNtOXNiRVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxuSnZiM1JEYjI1MFlXbHVaWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjIxdmRYTmxkMmhsWld3bkxDQnZibE5qY205c2JFVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMjF2ZFhObGJXOTJaU2NzSUc5dVRXOTFjMlZOYjNabFJYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5kRzkxWTJodGIzWmxKeXdnYjI1VWIzVmphRTF2ZG1WRmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHRiM1Z6WldSdmQyNG5MQ0J2YmsxdmRYTmxSRzkzYmtWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0ozUnZkV05vYzNSaGNuUW5MQ0J2YmxSdmRXTm9VM1JoY25SRmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHRiM1Z6WlhWd0p5d2diMjVOYjNWelpWVndSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuZEc5MVkyaGxibVFuTENCdmJsUnZkV05vVTNSdmNFVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMk52Ym5SbGVIUnRaVzUxSnl3Z2IyNVNhV2RvZEVOc2FXTnJSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNibHh5WEc0Z0lDQWdkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHJaWGxrYjNkdUp5d2diMjVMWlhsRWIzZHVSWFpsYm5Rc0lHWmhiSE5sSUNrN0lGeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1EyOXVjM1JoYm5SekxuVndaR0YwWlVOaGJuWmhjMU5wZW1WUGJsZHBibVJ2ZDFKbGMybDZaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R5WlhOcGVtVW5MQ0J2YmxkcGJtUnZkMUpsYzJsNlpVVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHOXVUVzkxYzJWTmIzWmxSWFpsYm5RZ0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ0WDNCdmMzZ2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHMWZjRzl6ZVNBOUlEQXNYSEpjYmlBZ0lDQWdJQ0FnWlY5d2IzTjRJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQmxYM0J2YzNrZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUc5aWFpQTlJSFJvYVhNN1hISmNibHh5WEc0Z0lDQWdMeTluWlhRZ2JXOTFjMlVnY0c5emFYUnBiMjRnYjI0Z1pHOWpkVzFsYm5RZ1kzSnZjM05pY205M2MyVnlYSEpjYmlBZ0lDQnBaaUFvSUNGbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmxJRDBnZDJsdVpHOTNMbVYyWlc1ME8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JR1V1Y0dGblpWZ2dmSHdnWlM1d1lXZGxXU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjRJRDBnWlM1d1lXZGxXRHRjY2x4dUlDQWdJQ0FnSUNCdFgzQnZjM2tnUFNCbExuQmhaMlZaTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pTNWpiR2xsYm5SWUlIeDhJR1V1WTJ4cFpXNTBXU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjRJRDBnWlM1amJHbGxiblJZSUNzZ1pHOWpkVzFsYm5RdVltOWtlUzV6WTNKdmJHeE1aV1owSUN0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbk5qY205c2JFeGxablE3WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNWpiR2xsYm5SWklDc2daRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hVYjNBZ0sxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2TDJkbGRDQndZWEpsYm5RZ1pXeGxiV1Z1ZENCd2IzTnBkR2x2YmlCcGJpQmtiMk4xYldWdWRGeHlYRzRnSUNBZ2FXWWdLQ0J2WW1vdWIyWm1jMlYwVUdGeVpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYnlCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxYM0J2YzNnZ0t6MGdiMkpxTG05bVpuTmxkRXhsWm5RN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWZmNHOXplU0FyUFNCdlltb3ViMlptYzJWMFZHOXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDZ2diMkpxSUQwZ2IySnFMbTltWm5ObGRGQmhjbVZ1ZENBcE95QXZMeUJxYzJocGJuUWdhV2R1YjNKbE9teHBibVZjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeThnYlc5MWMyVWdjRzl6YVhScGIyNGdiV2x1ZFhNZ1pXeHRJSEJ2YzJsMGFXOXVJR2x6SUcxdmRYTmxjRzl6YVhScGIyNGdjbVZzWVhScGRtVWdkRzhnWld4bGJXVnVkRHBjY2x4dUlDQWdJRzF2ZFhObExuZ2dQU0J0WDNCdmMzZ2dMU0JsWDNCdmMzZzdYSEpjYmlBZ0lDQnRiM1Z6WlM1NUlEMGdiVjl3YjNONUlDMGdaVjl3YjNONU8xeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYjI1VWIzVmphRTF2ZG1WRmRtVnVkQ0FvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHMWZjRzl6ZUNBOUlEQXNYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjVJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQmxYM0J2YzNnZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUdWZmNHOXplU0E5SURBc1hISmNiaUFnSUNBZ0lDQWdiMkpxSUQwZ2RHaHBjenRjY2x4dVhISmNiaUFnSUNCcFppQW9aUzVqYUdGdVoyVmtWRzkxWTJobGN5QW1KaUJsTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2daUzVqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzV3WVdkbFdDQjhmQ0JsTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkTG5CaFoyVlpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNWphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNXdZV2RsV0R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYlY5d2IzTjVJRDBnWlM1amFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1d1lXZGxXVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDQmxMbU5vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGZ2dmSHdnWlM1amFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJaSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiVjl3YjNONElEMGdaUzVqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllJQ3NnWkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4TVpXWjBJQ3RjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeE1aV1owTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J0WDNCdmMza2dQU0JsTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmtnS3lCa2IyTjFiV1Z1ZEM1aWIyUjVMbk5qY205c2JGUnZjQ0FyWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5OW5aWFFnY0dGeVpXNTBJR1ZzWlcxbGJuUWdjRzl6YVhScGIyNGdhVzRnWkc5amRXMWxiblJjY2x4dUlDQWdJR2xtSUNnZ2IySnFJQ1ltSUc5aWFpNXZabVp6WlhSUVlYSmxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdklIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZmY0c5emVDQXJQU0J2WW1vdWIyWm1jMlYwVEdWbWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pWOXdiM041SUNzOUlHOWlhaTV2Wm1aelpYUlViM0E3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnZDJocGJHVWdLQ0J2WW1vZ1BTQnZZbW91YjJabWMyVjBVR0Z5Wlc1MElDazdJQzh2SUdwemFHbHVkQ0JwWjI1dmNtVTZiR2x1WlZ4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2THlCdGIzVnpaU0J3YjNOcGRHbHZiaUJ0YVc1MWN5QmxiRzBnY0c5emFYUnBiMjRnYVhNZ2JXOTFjMlZ3YjNOcGRHbHZiaUJ5Wld4aGRHbDJaU0IwYnlCbGJHVnRaVzUwT2x4eVhHNGdJQ0FnYlc5MWMyVXVlQ0E5SUcxZmNHOXplQ0F0SUdWZmNHOXplRHRjY2x4dUlDQWdJRzF2ZFhObExua2dQU0J0WDNCdmMza2dMU0JsWDNCdmMzazdYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJsTmpjbTlzYkVWMlpXNTBJQ2dnWlNBcElIdGNjbHh1WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IzYUdWbGJFUnBjbVZqZEdsdmJpZ2daU0FwSUR3Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibUYyYVdkaGRHVlNaV052Y21SektDQW5jSEpsZGljZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVZWFpwWjJGMFpWSmxZMjl5WkhNb0lDZHVaWGgwSnlBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJrTnNhV05yUlhabGJuUWdLQ0J0YjNWelpVUnZkMjVRYjNNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCMlpXTjBiM0pRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJQ2dnS0NBb0lHMXZkWE5sUkc5M2JsQnZjeTU0SUMwZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNXZabVp6WlhSTVpXWjBJQ2tnTHlBb0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVkMmxrZEdnZ0tTQXBJQ29nTWlBdElERWdLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nS0NBdEtDQW9JRzF2ZFhObFJHOTNibEJ2Y3k1NUlDMGdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzV2Wm1aelpYUlViM0FnS1NBdklDZ2djbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzVvWldsbmFIUWdLU0FwSUNvZ01pQXJJREVnS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ01DNDFYSEpjYmlBZ0lDQWdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxZM1J2Y2lBOUlHNWxkeUJVU0ZKRlJTNVdaV04wYjNJektDQjJaV04wYjNKUWIzTXVlQ3dnZG1WamRHOXlVRzl6TG5rc0lIWmxZM1J2Y2xCdmN5NTZJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtVmpkRzl5TG5WdWNISnZhbVZqZENnZ1kyRnRaWEpoSUNrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhKaGVXTmhjM1JsY2lBOUlHNWxkeUJVU0ZKRlJTNVNZWGxqWVhOMFpYSW9JR05oYldWeVlTNXdiM05wZEdsdmJpd2dkbVZqZEc5eUxuTjFZaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2t1Ym05eWJXRnNhWHBsS0NrZ0tUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2FXNTBaWEp6WldOMGN5QTlJSEpoZVdOaGMzUmxjaTVwYm5SbGNuTmxZM1JQWW1wbFkzUnpLQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVZMmhwYkdSeVpXNHNJSFJ5ZFdVZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYVc1MFpYSnpaV04wSUhOdmJXVjBhR2x1WjF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVc1MFpYSnpaV04wY3k1c1pXNW5kR2dnUGlBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTnNhV05yWldSU1pXTnZjbVE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkhaWFFnZEdobElHWnBjbk4wSUhacGMybGliR1VnY21WamIzSmtJR2x1ZEdWeWMyVmpkR1ZrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJwSUQwZ01Ec2dhU0E4SUdsdWRHVnljMlZqZEhNdWJHVnVaM1JvT3lCcEt5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2FXNTBaWEpqWlhCMElHRWdiV1Z6YUNCM2FHbGphQ0JwY3lCdWIzUWdZU0J5WldOdmNtUXNJR0p5WldGclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhSNWNHVnZaaWhwYm5SbGNuTmxZM1J6V3lCcElGMHViMkpxWldOMExuSmxZMjl5WkVsa0tTQTlQVDBnSjNWdVpHVm1hVzVsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVkR1Z5YzJWamRITmJJR2tnWFM1dlltcGxZM1F1ZG1semFXSnNaU0FtSmlCcGJuUmxjbk5sWTNSeld5QnBJRjB1YjJKcVpXTjBMbkpsWTI5eVpFbGtJRDQ5SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zYVdOclpXUlNaV052Y21RZ1BTQnlaV052Y21Seld5QnBiblJsY25ObFkzUnpXeUJwSUYwdWIySnFaV04wTG5KbFkyOXlaRWxrSUYwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb1pYSmxJR2x6SUc5dVpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JR05zYVdOclpXUlNaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlQVDBnWTJ4cFkydGxaRkpsWTI5eVpDNXBaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pteHBjRk5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaV04wVW1WamIzSmtLQ0JqYkdsamEyVmtVbVZqYjNKa0xtbGtJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRV3hzSUdsdWRHVnljMlZqZEdWa0lISmxZMjl5WkhNZ1lYSmxJRzV2ZENCMmFYTnBZbXhsYzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2THlCT2J5QnlaV052Y21RZ2FHRnpJR0psWlc0Z2FXNTBaWEp6WldOMFpXUmNjbHh1SUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lFTnZibk4wWVc1MGN5NWpiRzl6WlVsdVptOVFZVzVsYkU5dVEyeHBZMnNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ2YmsxdmRYTmxSRzkzYmtWMlpXNTBJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHVXVZblYwZEc5dUlDRTlQU0F4SUNZbUlHVXVZblYwZEc5dUlDRTlQU0F5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmpjbTlzYkZKbFkyOXlaSE1vSUdaaGJITmxMQ0J0YjNWelpTNTVJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWEhKY2JseHlYRzRnSUNBZ0lDQWdJRzF2ZFhObFJHOTNibEJ2Y3lBOUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2diVzkxYzJVdWVDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2diVzkxYzJVdWVWeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYjI1VWIzVmphRk4wWVhKMFJYWmxiblFnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUcxdmRYTmxSRzkzYmxCdmN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNCNE9pQnRiM1Z6WlM1NExGeHlYRzRnSUNBZ0lDQWdJSGs2SUcxdmRYTmxMbmxjY2x4dUlDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ2IyNVViM1ZqYUUxdmRtVkZkbVZ1ZENnZ1pTQXBPMXh5WEc1Y2NseHVJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29JSE5qY205c2JGSmxZMjl5WkhOVWFXMWxiM1YwSUNrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmpjbTlzYkZKbFkyOXlaSE1vSUhSeWRXVXNJRzF2ZFhObExua2dLVHRjY2x4dVhISmNiaUFnSUNCOUlGeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYjI1TmIzVnpaVlZ3UlhabGJuUWdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1pTNWlkWFIwYjI0Z0lUMDlJREVnSmlZZ1pTNWlkWFIwYjI0Z0lUMDlJRElnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29JSE5qY205c2JGSmxZMjl5WkhOVWFXMWxiM1YwSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RuY21GaUp5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZJRlJ5YVdkblpYSWdjMk5sYm1VZ1kyeHBZMnNnWlhabGJuUWdiMjVzZVNCcFppQnRiM1Z6WlhWd0lHVjJaVzUwSUdseklHNXZkQ0JoSUdSeVlXY2daVzVrSUdWMlpXNTBJQ1lnYm05MElHRWdZMnhwWTJzZ2IyNGdZU0JzYVc1clhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCamIyOXlaSE5GY1hWaGJITkJjSEJ5YjNnb0lHMXZkWE5sUkc5M2JsQnZjeXdnYlc5MWMyVXNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNW5jbUZpVTJWdWMybDBhWFpwZEhrZ0tTQW1KaUFoS0NCbExuUmhjbWRsZENBbUppQmxMblJoY21kbGRDNW9ZWE5CZEhSeWFXSjFkR1VvSjJoeVpXWW5LU0FwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiMjVEYkdsamEwVjJaVzUwS0NCdGIzVnpaVVJ2ZDI1UWIzTWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNVViM1ZqYUZOMGIzQkZkbVZ1ZENBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ1kyeGxZWEpKYm5SbGNuWmhiQ2dnYzJOeWIyeHNVbVZqYjNKa2MxUnBiV1Z2ZFhRZ0tUdGNjbHh1SUNBZ0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25aM0poWWljcE8xeHlYRzVjY2x4dUlDQWdJQzh2SUZSeWFXZG5aWElnYzJObGJtVWdZMnhwWTJzZ1pYWmxiblFnYjI1c2VTQnBaaUJ0YjNWelpYVndJR1YyWlc1MElHbHpJRzV2ZENCaElHUnlZV2NnWlc1a0lHVjJaVzUwSUNZZ2JtOTBJR0VnWTJ4cFkyc2diMjRnWVNCc2FXNXJYSEpjYmlBZ0lDQnBaaUFvSUdOdmIzSmtjMFZ4ZFdGc2MwRndjSEp2ZUNnZ2JXOTFjMlZFYjNkdVVHOXpMQ0J0YjNWelpTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtZHlZV0pUWlc1emFYUnBkbWwwZVNBcElDWW1JQ0VvSUdVdWRHRnlaMlYwSUNZbUlHVXVkR0Z5WjJWMExtaGhjMEYwZEhKcFluVjBaU2duYUhKbFppY3BJQ2tnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc5dVEyeHBZMnRGZG1WdWRDZ2diVzkxYzJWRWIzZHVVRzl6SUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNVNhV2RvZEVOc2FXTnJSWFpsYm5RZ0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJrdGxlVVJ2ZDI1RmRtVnVkQ0FvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQmxMbXRsZVVOdlpHVWdQVDA5SURNM0lIeDhJR1V1YTJWNVEyOWtaU0E5UFQwZ016Z2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVoZG1sbllYUmxVbVZqYjNKa2N5Z2dKMjVsZUhRbklDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pTNXJaWGxEYjJSbElEMDlQU0F6T1NCOGZDQmxMbXRsZVVOdlpHVWdQVDA5SURRd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVZWFpwWjJGMFpWSmxZMjl5WkhNb0lDZHdjbVYySnlBcE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBbUppQmxMbXRsZVVOdlpHVWdQVDA5SURFeklIeDhJR1V1YTJWNVEyOWtaU0E5UFQwZ016SXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0ZObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daUzVyWlhsRGIyUmxJRDA5UFNBeU55QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyOXdaVzVsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnZibGRwYm1SdmQxSmxjMmw2WlVWMlpXNTBJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsS0NrN1hISmNiaUFnSUNCelpYUkRZVzUyWVhORWFXMWxibk5wYjI1ektDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWEl1YzJWMFUybDZaU2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUTJGdFpYSmhUV0Z1WVdkbGNpNTFjR1JoZEdWRFlXMWxjbUZCYzNCbFkzUW9JR05oYm5aaGMxZHBaSFJvSUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJFWlhCMGFDNTJZV3gxWlNBOUlHUmxjSFJvVkdGeVoyVjBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5OcGVtVXVkbUZzZFdVdWMyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRHVjRkR1ZzTG5aaGJIVmxMbk5sZENnZ01TNHdJQzhnWTJGdWRtRnpWMmxrZEdnc0lERXVNQ0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdSbGhCUVM1MWJtbG1iM0p0Y3k1eVpYTnZiSFYwYVc5dUxuWmhiSFZsTG5ObGRDZ2dNU0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lDQWdWVWtnVFVWVVNFOUVVeUFnSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVablZ1WTNScGIyNGdjMmh2ZDB4dllXUnBibWNnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHWmhaR1ZKYmlnZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxteHZZV1JwYm1kRGIyNTBZV2x1WlhJZ0tUdGNjbHh1SUNBZ0lITmxkRlJwYldWdmRYUW9aRzl1WlN3Z01UQXdNQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdsa1pVeHZZV1JwYm1jZ0tDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1poWkdWUGRYUW9JRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVzYjJGa2FXNW5RMjl1ZEdGcGJtVnlJQ2s3WEhKY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0dSdmJtVXNJREV3TURBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUVsT1NWUkpRVXhKVTBGVVNVOU9JQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FXNXBkRk5qWlc1bElDZ3BJSHRjY2x4dVhISmNiaUFnSUNBdkx5QnpZMlZ1WlN3Z2NtVnVaR1Z5WlhJc0lHTmhiV1Z5WVN3dUxpNWNjbHh1SUNBZ0lITmpaVzVsSUQwZ2JtVjNJRlJJVWtWRkxsTmpaVzVsS0NrN1hISmNibHh5WEc0Z0lDQWdjbVZ1WkdWeVpYSWdQU0J1WlhjZ1ZFaFNSVVV1VjJWaVIweFNaVzVrWlhKbGNpZ2dlMXh5WEc0Z0lDQWdJQ0FnSUdGdWRHbGhiR2xoY3pvZ2RISjFaVnh5WEc0Z0lDQWdmU0FwTzF4eVhHNGdJQ0FnY21WdVpHVnlaWEl1YzJWMFUybDZaU2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NWpZVzUyWVhORGIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9JSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblFnS1R0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWFXUWdQU0JjSW1OdmJuUmxlSFJjSWp0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRFTnNaV0Z5UTI5c2IzSW9JRU52Ym5OMFlXNTBjeTVpWVdOclozSnZkVzVrUTI5c2IzSXNJREVnS1R0Y2NseHVYSEpjYmlBZ0lDQkRZVzFsY21GTllXNWhaMlZ5TG1sdWFYUW9ZMkZ1ZG1GelYybGtkR2dnTHlCallXNTJZWE5JWldsbmFIUXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaElEMGdRMkZ0WlhKaFRXRnVZV2RsY2k1blpYUkRZVzFsY21Fb0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2QyOXZaRjkwWlhoMGRYSmxJRDBnVkVoU1JVVXVTVzFoWjJWVmRHbHNjeTVzYjJGa1ZHVjRkSFZ5WlNnZ1EyOXVjM1JoYm5SekxtTnlZWFJsVkdWNGRIVnlaU0FwTzF4eVhHNGdJQ0FnZDI5dlpGOTBaWGgwZFhKbExtRnVhWE52ZEhKdmNIa2dQU0J5Wlc1a1pYSmxjaTVuWlhSTllYaEJibWx6YjNSeWIzQjVLQ2s3WEhKY2JpQWdJQ0IzYjI5a1gyMWhkR1Z5YVdGc0lEMGdibVYzSUZSSVVrVkZMazFsYzJoTVlXMWlaWEowVFdGMFpYSnBZV3dvSUh0Y2NseHVJQ0FnSUNBZ0lDQnRZWEE2SUhkdmIyUmZkR1Y0ZEhWeVpWeHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaUE5SUc1bGR5QlVTRkpGUlM1UFltcGxZM1F6UkNncE8xeHlYRzRnSUNBZ2MyTmxibVV1WVdSa0tDQnliMjkwUTI5dWRHRnBibVZ5SUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkNnZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5SUNrN1hISmNibHh5WEc0Z0lDQWdhVzVwZEVOeVlYUmxjeWdwTzF4eVhHNGdJQ0FnYVc1cGRGSmxZMjl5WkhNb0tUdGNjbHh1WEhKY2JpQWdJQ0JzYVdkb2RDQTlJRzVsZHlCVVNGSkZSUzVRYjJsdWRFeHBaMmgwS0NBd2VFWkdSa1pHUml3Z1EyOXVjM1JoYm5SekxteHBaMmgwU1c1MFpXNXphWFI1SUNvZ01TNHhJQ2s3WEhKY2JpQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSURNd01Dd2dPREFzSURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2diR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0JzWldaMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRU52Ym5OMFlXNTBjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2JHVm1kRXhwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTFRFd01Dd2dNekF3TENBeE1EQXdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUd4bFpuUk1hV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRU52Ym5OMFlXNTBjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2NtbG5hSFJNYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSUMweE1EQXNJRE13TUN3Z0xURXdNREFnS1R0Y2NseHVJQ0FnSUhOalpXNWxMbUZrWkNnZ2NtbG5hSFJNYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUdsdWFYUlFiM04wVUhKdlkyVnpjMmx1WnlncE8xeHlYRzVjY2x4dUlDQWdJR0pwYm1SRmRtVnVkSE1vS1R0Y2NseHVYSEpjYmlBZ0lDQXZMeUJFVDAwZ2MyVjBkWEJjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0ozSmxiR0YwYVhabEp6dGNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NWpZVzUyWVhORGIyNTBZV2x1WlhJdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBbllXSnpiMngxZEdVbk8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxtbHVabTlEYjI1MFlXbHVaWEl1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG14dllXUnBibWREYjI1MFlXbHVaWEl1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNWNjbHh1SUNBZ0lITmxkRU5oYm5aaGMwUnBiV1Z1YzJsdmJuTW9LVHRjY2x4dVhISmNiaUFnSUNCb2FXUmxSV3hsYldWdWRDaERiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVhVzVtYjBOdmJuUmhhVzVsY2lrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCRGIyNXpkR0Z1ZEhNdVpHVmlkV2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsdWFYUkVaV0oxWnlncE8xeHlYRzRnSUNBZ0lDQWdJR2x1YVhSSFZVa29LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc0Z0lDQWdZVzVwYldGMFpTZ3BPMXh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FXNXBkRkJ2YzNSUWNtOWpaWE56YVc1bklDZ3BJSHRjY2x4dVhISmNiaUFnSUNCa1pYQjBhRk5vWVdSbGNpQTlJRlJJVWtWRkxsTm9ZV1JsY2t4cFlpNWtaWEIwYUZKSFFrRTdYSEpjYmlBZ0lDQmtaWEIwYUZWdWFXWnZjbTF6SUQwZ1ZFaFNSVVV1Vlc1cFptOXliWE5WZEdsc2N5NWpiRzl1WlNnZ1pHVndkR2hUYUdGa1pYSXVkVzVwWm05eWJYTWdLVHRjY2x4dVhISmNiaUFnSUNCa1pYQjBhRTFoZEdWeWFXRnNJRDBnYm1WM0lGUklVa1ZGTGxOb1lXUmxjazFoZEdWeWFXRnNLQ0I3WEhKY2JpQWdJQ0FnSUNBZ1puSmhaMjFsYm5SVGFHRmtaWEk2SUdSbGNIUm9VMmhoWkdWeUxtWnlZV2R0Wlc1MFUyaGhaR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lIWmxjblJsZUZOb1lXUmxjam9nWkdWd2RHaFRhR0ZrWlhJdWRtVnlkR1Y0VTJoaFpHVnlMRnh5WEc0Z0lDQWdJQ0FnSUhWdWFXWnZjbTF6T2lCa1pYQjBhRlZ1YVdadmNtMXpYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JpQWdJQ0JrWlhCMGFFMWhkR1Z5YVdGc0xtSnNaVzVrYVc1bklEMGdWRWhTUlVVdVRtOUNiR1Z1WkdsdVp6dGNjbHh1WEhKY2JpQWdJQ0JrWlhCMGFGUmhjbWRsZENBOUlHNWxkeUJVU0ZKRlJTNVhaV0pIVEZKbGJtUmxjbFJoY21kbGRDZ2dZMkZ1ZG1GelYybGtkR2dzSUdOaGJuWmhjMGhsYVdkb2RDd2dlMXh5WEc0Z0lDQWdJQ0FnSUcxcGJrWnBiSFJsY2pvZ1ZFaFNSVVV1VG1WaGNtVnpkRVpwYkhSbGNpeGNjbHh1SUNBZ0lDQWdJQ0J0WVdkR2FXeDBaWEk2SUZSSVVrVkZMazVsWVhKbGMzUkdhV3gwWlhJc1hISmNiaUFnSUNBZ0lDQWdabTl5YldGME9pQlVTRkpGUlM1U1IwSkJSbTl5YldGMFhISmNiaUFnSUNCOUlDazdYSEpjYmx4eVhHNGdJQ0FnWTI5dGNHOXpaWElnUFNCdVpYY2dWRWhTUlVVdVJXWm1aV04wUTI5dGNHOXpaWElvSUhKbGJtUmxjbVZ5SUNrN1hISmNiaUFnSUNCamIyMXdiM05sY2k1aFpHUlFZWE56S0NCdVpYY2dWRWhTUlVVdVVtVnVaR1Z5VUdGemN5Z2djMk5sYm1Vc0lHTmhiV1Z5WVNBcElDazdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnUkdWd2RHZ2diMllnWm1sbGJHUWdjMmhoWkdWeUlDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCa2IyWWdQU0J1WlhjZ1ZFaFNSVVV1VTJoaFpHVnlVR0Z6Y3lnZ1ZFaFNSVVV1Ukc5R1UyaGhaR1Z5SUNrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkRVJsY0hSb0xuWmhiSFZsSUQwZ1pHVndkR2hVWVhKblpYUTdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11YzJsNlpTNTJZV3gxWlM1elpYUW9JR05oYm5aaGMxZHBaSFJvTENCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1MFpYaDBaV3d1ZG1Gc2RXVXVjMlYwS0NBeExqQWdMeUJqWVc1MllYTlhhV1IwYUN3Z01TNHdJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmx4eVhHNGdJQ0FnTHk5dFlXdGxJSE4xY21VZ2RHaGhkQ0IwYUdWelpTQjBkMjhnZG1Gc2RXVnpJR0Z5WlNCMGFHVWdjMkZ0WlNCbWIzSWdlVzkxY2lCallXMWxjbUVzSUc5MGFHVnlkMmx6WlNCa2FYTjBZVzVqWlhNZ2QybHNiQ0JpWlNCM2NtOXVaeTVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1NmJtVmhjaTUyWVd4MVpTQTlJR05oYldWeVlTNXVaV0Z5T3lBdkwyTmhiV1Z5WVNCamJHbHdjR2x1WnlCemRHRnlkRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5wbVlYSXVkbUZzZFdVZ1BTQmpZVzFsY21FdVptRnlPeUF2TDJOaGJXVnlZU0JqYkdsd2NHbHVaeUJsYm1SY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeEVaWEIwYUM1MllXeDFaU0E5SURVN0lDOHZabTlqWVd3Z1pHbHpkR0Z1WTJVZ2RtRnNkV1VnYVc0Z2JXVjBaWEp6TENCaWRYUWdlVzkxSUcxaGVTQjFjMlVnWVhWMGIyWnZZM1Z6SUc5d2RHbHZiaUJpWld4dmQxeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1RHVnVaM1JvTG5aaGJIVmxJRDBnWTJGdFpYSmhMbVp2WTJGc1RHVnVaM1JvT3lBdkwyWnZZMkZzSUd4bGJtZDBhQ0JwYmlCdGJWeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp6ZEc5d0xuWmhiSFZsSUQwZ09DNHdPeUF2TDJZdGMzUnZjQ0IyWVd4MVpWeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbk5vYjNkR2IyTjFjeTUyWVd4MVpTQTlJR1poYkhObE95QXZMM05vYjNjZ1pHVmlkV2NnWm05amRYTWdjRzlwYm5RZ1lXNWtJR1p2WTJGc0lISmhibWRsSUNodmNtRnVaMlVnUFNCbWIyTmhiQ0J3YjJsdWRDd2dZbXgxWlNBOUlHWnZZMkZzSUhKaGJtZGxLVnh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXRZVzUxWVd4a2IyWXVkbUZzZFdVZ1BTQjBjblZsT3lBdkwyMWhiblZoYkNCa2IyWWdZMkZzWTNWc1lYUnBiMjVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1dVpHOW1jM1JoY25RdWRtRnNkV1VnUFNBeE1Uc2dMeTl1WldGeUlHUnZaaUJpYkhWeUlITjBZWEowWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabVJwYzNRdWRtRnNkV1VnUFNBNE1Ec2dMeTl1WldGeUlHUnZaaUJpYkhWeUlHWmhiR3h2Wm1ZZ1pHbHpkR0Z1WTJVZ0lDQWdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm1SdlpuTjBZWEowTG5aaGJIVmxJRDBnTURzZ0x5OW1ZWElnWkc5bUlHSnNkWElnYzNSaGNuUmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtWkc5bVpHbHpkQzUyWVd4MVpTQTlJREV3TURzZ0x5OW1ZWElnWkc5bUlHSnNkWElnWm1Gc2JHOW1aaUJrYVhOMFlXNWpaU0JjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVRMjlETG5aaGJIVmxJRDBnTUM0d016c2dMeTlqYVhKamJHVWdiMllnWTI5dVpuVnphVzl1SUhOcGVtVWdhVzRnYlcwZ0tETTFiVzBnWm1sc2JTQTlJREF1TUROdGJTa2dJQ0FnWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1bGRIUnBibWN1ZG1Gc2RXVWdQU0JtWVd4elpUc2dMeTkxYzJVZ2IzQjBhV05oYkNCc1pXNXpJSFpwWjI1bGRIUnBibWMvWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbUYxZEc5bWIyTjFjeTUyWVd4MVpTQTlJSFJ5ZFdVN0lDOHZkWE5sSUdGMWRHOW1iMk4xY3lCcGJpQnphR0ZrWlhJL0lHUnBjMkZpYkdVZ2FXWWdlVzkxSUhWelpTQmxlSFJsY201aGJDQm1iMk5oYkVSbGNIUm9JSFpoYkhWbFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabTlqZFhNdWRtRnNkV1V1YzJWMEtDQXdMak0xTENBd0xqTTFJQ2s3SUM4dklHRjFkRzltYjJOMWN5QndiMmx1ZENCdmJpQnpZM0psWlc0Z0tEQXVNQ3d3TGpBZ0xTQnNaV1owSUd4dmQyVnlJR052Y201bGNpd2dNUzR3TERFdU1DQXRJSFZ3Y0dWeUlISnBaMmgwS1NCY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXRZWGhpYkhWeUxuWmhiSFZsSUQwZ1EyOXVjM1JoYm5SekxtSnNkWEpCYlc5MWJuUTdJQzh2WTJ4aGJYQWdkbUZzZFdVZ2IyWWdiV0Y0SUdKc2RYSWdLREF1TUNBOUlHNXZJR0pzZFhJc01TNHdJR1JsWm1GMWJIUXBJQ0FnSUZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwYUhKbGMyaHZiR1F1ZG1Gc2RXVWdQU0F3T3lBdkwyaHBaMmhzYVdkb2RDQjBhSEpsYzJodmJHUTdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WjJGcGJpNTJZV3gxWlNBOUlEQTdJQzh2YUdsbmFHeHBaMmgwSUdkaGFXNDdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtSnBZWE11ZG1Gc2RXVWdQU0F3T3lBdkwySnZhMlZvSUdWa1oyVWdZbWxoY3lBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVpuSnBibWRsTG5aaGJIVmxJRDBnTURzZ0x5OWliMnRsYUNCamFISnZiV0YwYVdNZ1lXSmxjbkpoZEdsdmJpOW1jbWx1WjJsdVoxeHlYRzVjY2x4dUlDQWdJRVpZUVVFZ1BTQnVaWGNnVkVoU1JVVXVVMmhoWkdWeVVHRnpjeWdnVkVoU1JVVXVSbGhCUVZOb1lXUmxjaUFwTzF4eVhHNWNjbHh1SUNBZ0lFWllRVUV1ZFc1cFptOXliWE11Y21WemIyeDFkR2x2Ymk1MllXeDFaUzV6WlhRb0lERWdMeUJqWVc1MllYTlhhV1IwYUN3Z01TQXZJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1JsaEJRUzV5Wlc1a1pYSlViMU5qY21WbGJpQTlJSFJ5ZFdVN1hISmNibHh5WEc0Z0lDQWdZMjl0Y0c5elpYSXVZV1JrVUdGemN5Z2daRzltSUNrN1hISmNiaUFnSUNCamIyMXdiM05sY2k1aFpHUlFZWE56S0NCR1dFRkJJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1cGRFUmxZblZuSUNncElIdGNjbHh1WEhKY2JpQWdJQ0J6ZEdGMGN5QTlJRzVsZHlCVGRHRjBjeWdwTzF4eVhHNGdJQ0FnYzNSaGRITXVaRzl0Uld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2RoWW5OdmJIVjBaU2M3WEhKY2JpQWdJQ0J6ZEdGMGN5NWtiMjFGYkdWdFpXNTBMbk4wZVd4bExteGxablFnUFNCY0lqQmNJanRjY2x4dUlDQWdJSE4wWVhSekxtUnZiVVZzWlcxbGJuUXVjM1I1YkdVdWRHOXdJRDBnWENJd1hDSTdYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVjbTl2ZEVOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDZ2djM1JoZEhNdVpHOXRSV3hsYldWdWRDQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmtaV0oxWnlBOUlHNWxkeUJVU0ZKRlJTNU5aWE5vS0NCdVpYY2dWRWhTUlVVdVFtOTRSMlZ2YldWMGNua29JREl3TENBeU1Dd2dNakFzSURFc0lERXNJREVnS1NBcE8xeHlYRzRnSUNBZ1pHVmlkV2N1Y0c5emFYUnBiMjR1YzJWMEtGeHlYRzRnSUNBZ0lDQWdJR3hwWjJoMExuQnZjMmwwYVc5dUxuZ3NYSEpjYmlBZ0lDQWdJQ0FnYkdsbmFIUXVjRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNCc2FXZG9kQzV3YjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCa1pXSjFaeUFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUkhWVWtnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCallXMWxjbUZHYjJ4a1pYSXNYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlqWVd4TVpXNW5kR2dzWEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxGeHlYRzRnSUNBZ0lDQWdJRjlzWVhOME8xeHlYRzVjY2x4dUlDQWdJR2QxYVNBOUlHNWxkeUJrWVhRdVIxVkpLQ2s3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR05oYldWeVlVWnZiR1JsY2lBOUlHZDFhUzVoWkdSR2IyeGtaWElvSUNkRFlXMWxjbUVuSUNrN1hISmNiaUFnSUNCallXMWxjbUZHYjJOaGJFeGxibWQwYUNBOUlHTmhiV1Z5WVVadmJHUmxjaTVoWkdRb0lHTmhiV1Z5WVN3Z0oyWnZZMkZzVEdWdVozUm9KeXdnTWpnc0lESXdNQ0FwTG01aGJXVW9JQ2RHYjJOaGJDQk1aVzVuZEdnbklDazdYSEpjYmlBZ0lDQmpZVzFsY21GR2IyTmhiRXhsYm1kMGFDNXZia05vWVc1blpTZ2dkWEJrWVhSbFEyRnRaWEpoSUNrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCRGIyNXpkR0Z1ZEhNdWNHOXpkSEJ5YjJObGMzTnBibWNnS1NCN1hISmNibHh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSWdQU0JuZFdrdVlXUmtSbTlzWkdWeUtDQW5SR1Z3ZEdnZ2IyWWdSbWxsYkdRbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1adlkyRnNSR1Z3ZEdnc0lDZDJZV3gxWlNjc0lEQXNJREV3SUNrdWJtRnRaU2dnSjBadlkyRnNJRVJsY0hSb0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWMzUnZjQ3dnSjNaaGJIVmxKeXdnTUN3Z01qSWdLUzV1WVcxbEtDQW5SaUJUZEc5d0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dFlYaGliSFZ5TENBbmRtRnNkV1VuTENBd0xDQXpJQ2t1Ym1GdFpTZ2dKMjFoZUNCaWJIVnlKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11YzJodmQwWnZZM1Z6TENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjFOb2IzY2dSbTlqWVd3Z1VtRnVaMlVuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dFlXNTFZV3hrYjJZc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblRXRnVkV0ZzSUVSdlJpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabk4wWVhKMExDQW5kbUZzZFdVbkxDQXdMQ0F5TURBZ0tTNXVZVzFsS0NBbmJtVmhjaUJ6ZEdGeWRDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabVJwYzNRc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkdVpXRnlJR1poYkd4dlptWW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWmtiMlp6ZEdGeWRDd2dKM1poYkhWbEp5d2dNQ3dnTWpBd0lDa3VibUZ0WlNnZ0oyWmhjaUJ6ZEdGeWRDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptUnZabVJwYzNRc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkbVlYSWdabUZzYkc5bVppY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMa052UXl3Z0ozWmhiSFZsSnl3Z01Dd2dNQzR4SUNrdWMzUmxjQ2dnTUM0d01ERWdLUzV1WVcxbEtDQW5ZMmx5WTJ4bElHOW1JR052Ym1aMWMybHZiaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNWxkSFJwYm1jc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblZtbG5ibVYwZEdsdVp5Y2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibTkxZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNaUFwTG01aGJXVW9JQ2R2ZFhSbGNpQmliM0prWlhJbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNXBiaXdnSjNaaGJIVmxKeXdnTUN3Z01TQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuYVc1dVpYSWdZbTl5WkdWeUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHVabUZrWlN3Z0ozWmhiSFZsSnl3Z01Dd2dNaklnS1M1dVlXMWxLQ0FuWm1Ga1pTQmhkQ2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1GMWRHOW1iMk4xY3l3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkQmRYUnZabTlqZFhNbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1adlkzVnpMblpoYkhWbExDQW5lQ2NzSURBc0lERWdLUzV1WVcxbEtDQW5abTlqZFhNZ2VDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpkWE11ZG1Gc2RXVXNJQ2Q1Snl3Z01Dd2dNU0FwTG01aGJXVW9JQ2RtYjJOMWN5QjVKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZEdoeVpYTm9iMnhrTENBbmRtRnNkV1VuTENBd0xDQXhJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkMGFISmxjMmh2YkdRbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1kaGFXNHNJQ2QyWVd4MVpTY3NJREFzSURFd01DQXBMbTVoYldVb0lDZG5ZV2x1SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVltbGhjeXdnSjNaaGJIVmxKeXdnTUN3Z05DQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuWW1saGN5Y2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVpuSnBibWRsTENBbmRtRnNkV1VuTENBd0xDQTFJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkbWNtbHVaMlVuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dWIybHpaU3dnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RWYzJVZ1RtOXBjMlVuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbTVoYlc5MWJuUXNJQ2QyWVd4MVpTY3NJREFzSURBdU1EQXhJQ2t1YzNSbGNDZ2dNQzR3TURBeElDa3VibUZ0WlNnZ0oyUnBkR2hsY2ljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtUmxjSFJvWW14MWNpd2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZENiSFZ5SUVSbGNIUm9KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NWtZbk5wZW1Vc0lDZDJZV3gxWlNjc0lEQXNJRFVnS1M1dVlXMWxLQ0FuWW14MWNpQnphWHBsSnlBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCbmRXa3VZMnh2YzJVb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWRFlXMWxjbUVnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR05oYldWeVlTNXpaWFJNWlc1ektDQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZ3NJR05oYldWeVlTNW1jbUZ0WlZOcGVtVWdLVHRjY2x4dUlDQWdJR05oYldWeVlTNTFjR1JoZEdWUWNtOXFaV04wYVc5dVRXRjBjbWw0S0NrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabTlqWVd4TVpXNW5kR2d1ZG1Gc2RXVWdQU0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2c3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1cGRFTnlZWFJsY3lBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdOeVlYUmxTV1FnUFNBd095QmpjbUYwWlVsa0lEd2dRMjl1YzNSaGJuUnpMbTVpUTNKaGRHVnpPeUJqY21GMFpVbGtLeXNnS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOeVlYUmxJRDBnWTNKbFlYUmxRM0poZEdVb0lHTnlZWFJsU1dRZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVZV1JrS0NCamNtRjBaU0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMbkJ2YzJsMGFXOXVMbm9nUFNBdEtDQXhNVEFnTFNBb0lERXhNQ0FxSUVOdmJuTjBZVzUwY3k1dVlrTnlZWFJsY3lBcElDa2dMeUF5TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVU55WVhSbElDZ2dhV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkSUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHSnZlRjlpYjNSMGIyMGdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBeE1EQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJKdmRIUnZiU0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZmJHVm1kQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lESXdNQ3dnTVRBc0lEZ3dJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJR0p2ZUY5c1pXWjBMbkJ2YzJsMGFXOXVMbk5sZENnZ01Dd2dNelVzSUMwMU5TQXBPMXh5WEc0Z0lDQWdZbTk0WDJ4bFpuUXVjbTkwWVhScGIyNHVlQ0E5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMnhsWm5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbGtJRDA5UFNBd0lDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmliM2hmY21sbmFIUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBNE1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQWdJQ0FnWW05NFgzSnBaMmgwTG5CdmMybDBhVzl1TG5ObGRDZ2dNQ3dnTXpVc0lEVTFJQ2s3WEhKY2JpQWdJQ0FnSUNBZ1ltOTRYM0pwWjJoMExuSnZkR0YwYVc5dUxuZ2dQU0JOWVhSb0xsQkpJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmY21sbmFIUWdLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJKaFkyc2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBNE1Dd2dNVEFzSURFeU1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXdiM05wZEdsdmJpNXpaWFFvSUMweE1EVXNJRE0xTENBd0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZZbUZqYXlBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZabkp2Ym5RZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0EwTUN3Z01UQXNJREV3TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNCaWIzaGZabkp2Ym5RdWNHOXphWFJwYjI0dWMyVjBLQ0E1TlN3Z01qVXNJREFnS1R0Y2NseHVJQ0FnSUdKdmVGOW1jbTl1ZEM1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZlpuSnZiblFnS1R0Y2NseHVYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1Y0c5emFYUnBiMjR1ZWlBOUlDMHhNVEFnS2lCcFpEdGNjbHh1SUNBZ0lISmxkSFZ5YmlCamNtRjBaWE5iSUdsa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdhVzVwZEZKbFkyOXlaSE1nS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCamRYSnlaVzUwVW1WamIzSmtTV1FnUFNBd08xeHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHTnlZWFJsU1dRZ1BTQXdPeUJqY21GMFpVbGtJRHdnWTNKaGRHVnpMbXhsYm1kMGFEc2dZM0poZEdWSlpDc3JJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tDQjJZWElnY0c5eklEMGdNRHNnY0c5eklEd2dRMjl1YzNSaGJuUnpMbkpsWTI5eVpITlFaWEpEY21GMFpUc2djRzl6S3lzZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnlaV0YwWlZKbFkyOXlaQ2dnWTNWeWNtVnVkRkpsWTI5eVpFbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZKbFkyOXlaRWxrS3lzN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsVW1WamIzSmtJQ2dnYVdRc0lHTnlZWFJsU1dRc0lIQnZjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnY21WamIzSmtJRDBnYm1WM0lGSmxZMjl5WkNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcE8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCamNtRjBaVWxrSUYwdVlXUmtLQ0J5WldOdmNtUXViV1Z6YUNBcE8xeHlYRzRnSUNBZ2NtVmpiM0prY3k1d2RYTm9LQ0J5WldOdmNtUWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJuWlhSU1pXTnZjbVJOWVhSbGNtbGhiQ0FvSUhOeVl5d2dhR0Z6VTJ4bFpYWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJwYldjZ1BTQnVaWGNnU1cxaFoyVW9LVHRjY2x4dUlDQWdJR2x0Wnk1amNtOXpjMDl5YVdkcGJpQTlJRndpUVc1dmJubHRiM1Z6WENJN1hISmNiaUFnSUNCcGJXY3VjM0pqSUQwZ2MzSmpJRDhnYzNKaklEb2dKeWM3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR2x0WjFkcFpIUm9JRDBnTkRBd0xGeHlYRzRnSUNBZ0lDQWdJR2x0WjBobGFXZG9kQ0E5SURRd01DeGNjbHh1SUNBZ0lDQWdJQ0J0WVhCRFlXNTJZWE1nUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ0FuWTJGdWRtRnpKeUFwTzF4eVhHNWNjbHh1SUNBZ0lHMWhjRU5oYm5aaGN5NTNhV1IwYUNBOUlHMWhjRU5oYm5aaGN5NW9aV2xuYUhRZ1BTQTBNREE3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSFJsZUhSMWNtVWdQU0J1WlhjZ1ZFaFNSVVV1VkdWNGRIVnlaU2dnYldGd1EyRnVkbUZ6SUNrN1hISmNiaUFnSUNCMFpYaDBkWEpsTG0xcGJrWnBiSFJsY2lBOUlGUklVa1ZGTGt4cGJtVmhja1pwYkhSbGNqdGNjbHh1WEhKY2JpQWdJQ0JwYldjdWIyNXNiMkZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdoaGMxTnNaV1YyWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemJHVmxkbVVnUFNCdVpYY2dTVzFoWjJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyeGxaWFpsTG5OeVl5QTlJRU52Ym5OMFlXNTBjeTV6YkdWbGRtVk5ZWE5yVkdWNGRIVnlaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc1pXVjJaUzV2Ym14dllXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjBlQ0E5SUcxaGNFTmhiblpoY3k1blpYUkRiMjUwWlhoMEtDQW5NbVFuSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NCcGJXZFhhV1IwYUNBdklESXNJR2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04wZUM1eWIzUmhkR1VvSUUxaGRHZ3VVRWtnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQXRhVzFuVjJsa2RHZ2dMeUF5TENBdGFXMW5TR1ZwWjJoMElDOGdNaUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbVJ5WVhkSmJXRm5aU2dnYVcxbkxDQXhNekFzSURFek1Dd2dNVE0xTENBeE16VWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNWtjbUYzU1cxaFoyVW9JSE5zWldWMlpTd2dNQ3dnTUN3Z05EQXdMQ0EwTURBZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSMWNtVXVibVZsWkhOVmNHUmhkR1VnUFNCMGNuVmxPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpkSGdnUFNCdFlYQkRZVzUyWVhNdVoyVjBRMjl1ZEdWNGRDZ2dKekprSnlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0JwYldkWGFXUjBhQ0F2SURJc0lHbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuSnZkR0YwWlNnZ1RXRjBhQzVRU1NBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5SeVlXNXpiR0YwWlNnZ0xXbHRaMWRwWkhSb0lDOGdNaXdnTFdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2FXMW5MQ0F3TENBd0xDQTBNREFzSURRd01DQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbExtNWxaV1J6VlhCa1lYUmxJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2MyeGxaWFpsVFdGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ1EyOXVjM1JoYm5SekxuTnNaV1YyWlVOdmJHOXlYSEpjYmx4eVhHNGdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCdFlYUmxjbWxoYkhNZ1BTQmJYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2RHVjRkSFZ5WlZ4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVU0ZKRlJTNU5aWE5vVEdGdFltVnlkRTFoZEdWeWFXRnNLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQXdlR1ptWm1abVppeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRndPaUIwWlhoMGRYSmxYSEpjYmlBZ0lDQWdJQ0FnZlNBcExGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc0xGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc1hISmNiaUFnSUNCZE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGRHVnlhV0ZzY3p0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnVlZSSlRGTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCM2FHVmxiRVJwYzNSaGJtTmxJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnWlNBOUlHVjJaVzUwTzF4eVhHNGdJQ0FnZG1GeUlIY2dQU0JsTG5kb1pXVnNSR1ZzZEdFc1hISmNiaUFnSUNBZ0lDQWdaQ0E5SUdVdVpHVjBZV2xzTzF4eVhHNGdJQ0FnYVdZZ0tDQmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lIY2dLU0J5WlhSMWNtNGdkeUF2SUdRZ0x5QTBNQ0FxSUdRZ1BpQXdJRDhnTVNBNklDMHhPeUF2THlCUGNHVnlZVnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdjbVYwZFhKdUlDMWtJQzhnTXpzZ0x5OGdSbWx5WldadmVEdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdjbVYwZFhKdUlIY2dMeUF4TWpBN0lDOHZJRWxGTDFOaFptRnlhUzlEYUhKdmJXVmNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUhkb1pXVnNSR2x5WldOMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnWlNBOUlHVjJaVzUwTzF4eVhHNGdJQ0FnY21WMGRYSnVJQ2dnWlM1a1pYUmhhV3dnUENBd0lDa2dQeUF4SURvZ0tDQmxMbmRvWldWc1JHVnNkR0VnUGlBd0lDa2dQeUF4SURvZ0xURTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdZMjl2Y21SelJYRjFZV3h6UVhCd2NtOTRJQ2dnWTI5dmNtUXhMQ0JqYjI5eVpESXNJSEpoYm1kbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUFvSUUxaGRHZ3VZV0p6S0NCamIyOXlaREV1ZUNBdElHTnZiM0prTWk1NElDa2dQRDBnY21GdVoyVWdLU0FtSmlBb0lFMWhkR2d1WVdKektDQmpiMjl5WkRFdWVTQXRJR052YjNKa01pNTVJQ2tnUEQwZ2NtRnVaMlVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCbVlXUmxUM1YwSUNnZ1pXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRDA5UFNBd0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2RISmhibk5wZEdsdmJrVjJaVzUwSUQwZ1oyVjBWSEpoYm5OcGRHbHZia1YyWlc1MEtHVnNaVzFsYm5RcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9kSEpoYm5OcGRHbHZia1YyWlc1MEtTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9kSEpoYm5OcGRHbHZia1YyWlc1MExDQnZia1poWkdWRGIyMXdiR1YwWlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnUFNBd08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUlDQWdJQ0FnSUNCY2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR1poWkdWSmJpQW9JR1ZzWlcxbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOVBUMGdKeWNnZkh3Z1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRDA5UFNBbk1TY3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUhaaGNpQjBjbUZ1YzJsMGFXOXVSWFpsYm5RZ1BTQm5aWFJVY21GdWMybDBhVzl1UlhabGJuUW9aV3hsYldWdWRDazdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjJKc2IyTnJKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0hSeVlXNXphWFJwYjI1RmRtVnVkQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0hSeVlXNXphWFJwYjI1RmRtVnVkQ3dnYjI1R1lXUmxRMjl0Y0d4bGRHVXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh5WEc0Z0lDQWdJQ0FnSUgwc0lERTFLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ2YmtaaFpHVkRiMjF3YkdWMFpTZ2daU0FzSUdVeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUdVdVkzVnljbVZ1ZEZSaGNtZGxkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0dVdWRIbHdaU3dnYjI1R1lXUmxRMjl0Y0d4bGRHVXBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2daUzVqZFhKeVpXNTBWR0Z5WjJWMExuTjBlV3hsTG05d1lXTnBkSGtnUFQwOUlDY3dKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWlM1amRYSnlaVzUwVkdGeVoyVjBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pTNWpkWEp5Wlc1MFZHRnlaMlYwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWW14dlkyc25PMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdocFpHVkZiR1Z0Wlc1MEtDQmxiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQTlJREE3WEhKY2JpQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNibHh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCemFHOTNSV3hsYldWdWRDZ2daV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWW14dlkyc25PMXh5WEc0Z0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01UdGNjbHh1WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxkRlJ5WVc1emFYUnBiMjVGZG1WdWRDQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSFFzWEhKY2JpQWdJQ0FnSUNBZ2RISmhibk5wZEdsdmJuTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2QwY21GdWMybDBhVzl1SnpvbmRISmhibk5wZEdsdmJtVnVaQ2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RQVkhKaGJuTnBkR2x2YmljNkoyOVVjbUZ1YzJsMGFXOXVSVzVrSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSjAxdmVsUnlZVzV6YVhScGIyNG5PaWQwY21GdWMybDBhVzl1Wlc1a0p5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0oxZGxZbXRwZEZSeVlXNXphWFJwYjI0bk9pZDNaV0pyYVhSVWNtRnVjMmwwYVc5dVJXNWtKMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdabTl5S0hRZ2FXNGdkSEpoYm5OcGRHbHZibk1wSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZb0lHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVmJkRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMybDBhVzl1YzF0MFhUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsSUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqWVc1MllYTlhhV1IwYUNBOUlFTnZibk4wWVc1MGN5NWpZVzUyWVhOWGFXUjBhQ0EvSUVOdmJuTjBZVzUwY3k1allXNTJZWE5YYVdSMGFDQTZJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxtTnNhV1Z1ZEZkcFpIUm9PMXh5WEc0Z0lDQWdZMkZ1ZG1GelNHVnBaMmgwSUQwZ1EyOXVjM1JoYm5SekxtTmhiblpoYzBobGFXZG9kQ0EvSUVOdmJuTjBZVzUwY3k1allXNTJZWE5JWldsbmFIUWdPaUJEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNWpiR2xsYm5SSVpXbG5hSFE3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJWMFEyRnVkbUZ6UkdsdFpXNXphVzl1Y3lBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnTHk5RGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTV6ZEhsc1pTNW9aV2xuYUhRZ0lDQWdJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1allXNTJZWE5EYjI1MFlXbHVaWEl1YzNSNWJHVXVhR1ZwWjJoMElEMGdZMkZ1ZG1GelNHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVwYm1adlEyOXVkR0ZwYm1WeUxuTjBlV3hsTG1obGFXZG9kQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWJHOWhaR2x1WjBOdmJuUmhhVzVsY2k1emRIbHNaUzVvWldsbmFIUWdQU0JqWVc1MllYTklaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNWNjbHh1SUNBZ0lDOHZRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJdWMzUjViR1V1ZDJsa2RHZ2dJQ0FnSUQwZ1kyRnVkbUZ6VjJsa2RHZ2dLeUFuY0hnbk8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxtTmhiblpoYzBOdmJuUmhhVzVsY2k1emRIbHNaUzUzYVdSMGFDQTlJR05oYm5aaGMxZHBaSFJvSUNzZ0ozQjRKenRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVwYm1adlEyOXVkR0ZwYm1WeUxuTjBlV3hsTG5kcFpIUm9JRDBnWTJGdWRtRnpWMmxrZEdnZ0t5QW5jSGduTzF4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG14dllXUnBibWREYjI1MFlXbHVaWEl1YzNSNWJHVXVkMmxrZEdnZ1BTQmpZVzUyWVhOWGFXUjBhQ0FySUNkd2VDYzdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdjMmgxWm1ac1pTZ2dkaUFwSUhzZ0x5OGdTbTl1WVhNZ1VtRnZibWtnVTI5aGNtVnpJRk5wYkhaaElDMGdhSFIwY0RvdkwycHpabkp2YldobGJHd3VZMjl0TDJGeWNtRjVMM05vZFdabWJHVWdXM0psZGk0Z0l6RmRYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdvc0lIZ3NJR2tnUFNCMkxteGxibWQwYURzZ2FUc2dhaUE5SUhCaGNuTmxTVzUwS0NCTllYUm9MbkpoYm1SdmJTZ3BJQ29nYVNBcExDQjRJRDBnZGxzZ0xTMXBJRjBzSUhaYklHa2dYU0E5SUhaYklHb2dYU3dnZGxzZ2FpQmRJRDBnZUNBcE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUhZN1hISmNibHh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCcGMwWjFibU4wYVc5dUtDQnZZbW9nS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlIUjVjR1Z2WmlCdlltb2dQVDBnSjJaMWJtTjBhVzl1SnlCOGZDQm1ZV3h6WlR0Y2NseHVYSEpjYm4xY2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUVWWVVFOVNWRk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFNBZ1VIVmliR2xqSUUxbGRHaHZaSE1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpYaHdiM0owY3k1cGJtbDBJRDBnWm5WdVkzUnBiMjRnS0NCd1lYSmhiWE1nS1NCN1hISmNibHh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVY0ZEdWdVpDaHdZWEpoYlhNcE8xeHlYRzVjY2x4dUlDQWdJQzh2SUdabFlYUjFjbVVnZEdWemRGeHlYRzRnSUNBZ2FXWWdLQ0FoVFc5a1pYSnVhWHB5TG5kbFltZHNJQ2tnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkMmx1Wkc5M0xtUmxkbWxqWlZCcGVHVnNVbUYwYVc4Z0lUMDlJSFZ1WkdWbWFXNWxaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkhCeUlEMGdkMmx1Wkc5M0xtUmxkbWxqWlZCcGVHVnNVbUYwYVc4N1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pIQnlJRDBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSUNkamNtRjBaV1JwWjJkbGNpNXFjeUF0SUVsdWFYUWdabUZwYkdWa0lEb2dZMkZ1SUc1dmRDQm1hVzVrSUhKdmIzUWdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUXVKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbU5oYm5aaGMwTnZiblJoYVc1bGNpQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ1kyRnVkbUZ6SUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnSVVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0JzYjJGa2FXNW5JR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dJVU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVwYm1adlEyOXVkR0ZwYm1WeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCcGJtWnZJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdOaGJHTjFiR0YwWlVOaGJuWmhjMU5wZW1Vb0tUdGNjbHh1WEhKY2JpQWdJQ0JwYm1sMFUyTmxibVVvS1R0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVjMlZzWldOMFVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDQnBaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsa0lEd2dNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR2xrSUQ0Z2JHOWhaR1ZrVW1WamIzSmtjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWc1pXTjBaV1JTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJR2xrTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11YzNSaGNuUlNaVzVrWlhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1pHOVNaVzVrWlhJZ1BTQjBjblZsTzF4eVhHNGdJQ0FnWVc1cGJXRjBaU2dwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11YzNSdmNGSmxibVJsY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCa2IxSmxibVJsY2lBOUlHWmhiSE5sTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11Wlc1aFlteGxVRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxuQnZjM1J3Y205alpYTnphVzVuSUQwZ2RISjFaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbVJwYzJGaWJHVlFiM04wY0hKdlkyVnpjMmx1WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdWNHOXpkSEJ5YjJObGMzTnBibWNnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lGQjFZbXhwWXlCblpYUjBaWEp6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBRMkZ1ZG1GeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1ME8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBVbVZqYjNKa2MwUmhkR0ZNYVhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXTnZjbVJ6UkdGMFlVeHBjM1E3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSTWIyRmtaV1JTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnNiMkZrWldSU1pXTnZjbVJ6TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WjJWMFUyVnNaV04wWldSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdUV1YwYUc5a2N5QmhZMk5sYzNOdmNuTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Wlhod2IzSjBjeTVzYjJGa1VtVmpiM0prY3lBOUlHeHZZV1JTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG5WdWJHOWhaRkpsWTI5eVpITWdQU0IxYm14dllXUlNaV052Y21Sek8xeHlYRzVsZUhCdmNuUnpMbkpsYzJWMFUyaHZkMjVTWldOdmNtUWdQU0J5WlhObGRGTm9iM2R1VW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5Ob2RXWm1iR1ZTWldOdmNtUnpJRDBnYzJoMVptWnNaVkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11Wm14cGNGTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1pteHBjRk5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbVpzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTmxiR1ZqZEZCeVpYWlNaV052Y21RZ1BTQnpaV3hsWTNSUWNtVjJVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbk5sYkdWamRFNWxlSFJTWldOdmNtUWdQU0J6Wld4bFkzUk9aWGgwVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5Ob2IzZE1iMkZrYVc1bklEMGdjMmh2ZDB4dllXUnBibWM3WEhKY2JtVjRjRzl5ZEhNdWFHbGtaVXh2WVdScGJtY2dQU0JvYVdSbFRHOWhaR2x1Wnp0Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnVUZWQ1RFbERJRUZRU1NBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1Y0Y0c5eWRITTdJbDE5IiwiLy8gc3RhdHMuanMgLSBodHRwOi8vZ2l0aHViLmNvbS9tcmRvb2Ivc3RhdHMuanNcbnZhciBTdGF0cz1mdW5jdGlvbigpe3ZhciBsPURhdGUubm93KCksbT1sLGc9MCxuPUluZmluaXR5LG89MCxoPTAscD1JbmZpbml0eSxxPTAscj0wLHM9MCxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5pZD1cInN0YXRzXCI7Zi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpO3QoKytzJTIpfSwhMSk7Zi5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtvcGFjaXR5OjAuOTtjdXJzb3I6cG9pbnRlclwiO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5pZD1cImZwc1wiO2Euc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MCAwIDNweCAzcHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzAwMlwiO2YuYXBwZW5kQ2hpbGQoYSk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmlkPVwiZnBzVGV4dFwiO2kuc3R5bGUuY3NzVGV4dD1cImNvbG9yOiMwZmY7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE1cHhcIjtcbmkuaW5uZXJIVE1MPVwiRlBTXCI7YS5hcHBlbmRDaGlsZChpKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuaWQ9XCJmcHNHcmFwaFwiO2Muc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjc0cHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMGZmXCI7Zm9yKGEuYXBwZW5kQ2hpbGQoYyk7NzQ+Yy5jaGlsZHJlbi5sZW5ndGg7KXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtqLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDoxcHg7aGVpZ2h0OjMwcHg7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMxMTNcIjtjLmFwcGVuZENoaWxkKGopfXZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5pZD1cIm1zXCI7ZC5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowIDAgM3B4IDNweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMDIwO2Rpc3BsYXk6bm9uZVwiO2YuYXBwZW5kQ2hpbGQoZCk7dmFyIGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmsuaWQ9XCJtc1RleHRcIjtrLnN0eWxlLmNzc1RleHQ9XCJjb2xvcjojMGYwO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxNXB4XCI7ay5pbm5lckhUTUw9XCJNU1wiO2QuYXBwZW5kQ2hpbGQoayk7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPVwibXNHcmFwaFwiO2Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjc0cHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMGYwXCI7Zm9yKGQuYXBwZW5kQ2hpbGQoZSk7NzQ+ZS5jaGlsZHJlbi5sZW5ndGg7KWo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksai5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MXB4O2hlaWdodDozMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMTMxXCIsZS5hcHBlbmRDaGlsZChqKTt2YXIgdD1mdW5jdGlvbihiKXtzPWI7c3dpdGNoKHMpe2Nhc2UgMDphLnN0eWxlLmRpc3BsYXk9XG5cImJsb2NrXCI7ZC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2JyZWFrO2Nhc2UgMTphLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn19O3JldHVybntSRVZJU0lPTjoxMixkb21FbGVtZW50OmYsc2V0TW9kZTp0LGJlZ2luOmZ1bmN0aW9uKCl7bD1EYXRlLm5vdygpfSxlbmQ6ZnVuY3Rpb24oKXt2YXIgYj1EYXRlLm5vdygpO2c9Yi1sO249TWF0aC5taW4obixnKTtvPU1hdGgubWF4KG8sZyk7ay50ZXh0Q29udGVudD1nK1wiIE1TIChcIituK1wiLVwiK28rXCIpXCI7dmFyIGE9TWF0aC5taW4oMzAsMzAtMzAqKGcvMjAwKSk7ZS5hcHBlbmRDaGlsZChlLmZpcnN0Q2hpbGQpLnN0eWxlLmhlaWdodD1hK1wicHhcIjtyKys7Yj5tKzFFMyYmKGg9TWF0aC5yb3VuZCgxRTMqci8oYi1tKSkscD1NYXRoLm1pbihwLGgpLHE9TWF0aC5tYXgocSxoKSxpLnRleHRDb250ZW50PWgrXCIgRlBTIChcIitwK1wiLVwiK3ErXCIpXCIsYT1NYXRoLm1pbigzMCwzMC0zMCooaC8xMDApKSxjLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCkuc3R5bGUuaGVpZ2h0PVxuYStcInB4XCIsbT1iLHI9MCk7cmV0dXJuIGJ9LHVwZGF0ZTpmdW5jdGlvbigpe2w9dGhpcy5lbmQoKX19fTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPVN0YXRzKTtcbiIsIi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xlL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xlL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91J3JlIGF3ZXNvbWUhXG4gKi9cblxuLy8gRGF0ZS5ub3cgc2hpbSBmb3IgKGFoZW0pIEludGVybmV0IEV4cGxvKGR8cillclxuaWYgKCBEYXRlLm5vdyA9PT0gdW5kZWZpbmVkICkge1xuXG5cdERhdGUubm93ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuXG5cdH07XG5cbn1cblxudmFyIFRXRUVOID0gVFdFRU4gfHwgKCBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIF90d2VlbnMgPSBbXTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0UkVWSVNJT046ICcxNCcsXG5cblx0XHRnZXRBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIF90d2VlbnM7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdF90d2VlbnMgPSBbXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICggdHdlZW4gKSB7XG5cblx0XHRcdF90d2VlbnMucHVzaCggdHdlZW4gKTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICggdHdlZW4gKSB7XG5cblx0XHRcdHZhciBpID0gX3R3ZWVucy5pbmRleE9mKCB0d2VlbiApO1xuXG5cdFx0XHRpZiAoIGkgIT09IC0xICkge1xuXG5cdFx0XHRcdF90d2VlbnMuc3BsaWNlKCBpLCAxICk7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdGltZSApIHtcblxuXHRcdFx0aWYgKCBfdHdlZW5zLmxlbmd0aCA9PT0gMCApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKSApO1xuXG5cdFx0XHR3aGlsZSAoIGkgPCBfdHdlZW5zLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiAoIF90d2VlbnNbIGkgXS51cGRhdGUoIHRpbWUgKSApIHtcblxuXHRcdFx0XHRcdGkrKztcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoIGksIDEgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHR9XG5cdH07XG5cbn0gKSgpO1xuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG5cdHZhciBfb2JqZWN0ID0gb2JqZWN0O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0ID0ge307XG5cdHZhciBfdmFsdWVzRW5kID0ge307XG5cdHZhciBfdmFsdWVzU3RhcnRSZXBlYXQgPSB7fTtcblx0dmFyIF9kdXJhdGlvbiA9IDEwMDA7XG5cdHZhciBfcmVwZWF0ID0gMDtcblx0dmFyIF95b3lvID0gZmFsc2U7XG5cdHZhciBfaXNQbGF5aW5nID0gZmFsc2U7XG5cdHZhciBfcmV2ZXJzZWQgPSBmYWxzZTtcblx0dmFyIF9kZWxheVRpbWUgPSAwO1xuXHR2YXIgX3N0YXJ0VGltZSA9IG51bGw7XG5cdHZhciBfZWFzaW5nRnVuY3Rpb24gPSBUV0VFTi5FYXNpbmcuTGluZWFyLk5vbmU7XG5cdHZhciBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHZhciBfY2hhaW5lZFR3ZWVucyA9IFtdO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dmFyIF9vblVwZGF0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RvcENhbGxiYWNrID0gbnVsbDtcblxuXHQvLyBTZXQgYWxsIHN0YXJ0aW5nIHZhbHVlcyBwcmVzZW50IG9uIHRoZSB0YXJnZXQgb2JqZWN0XG5cdGZvciAoIHZhciBmaWVsZCBpbiBvYmplY3QgKSB7XG5cblx0XHRfdmFsdWVzU3RhcnRbIGZpZWxkIF0gPSBwYXJzZUZsb2F0KG9iamVjdFtmaWVsZF0sIDEwKTtcblxuXHR9XG5cblx0dGhpcy50byA9IGZ1bmN0aW9uICggcHJvcGVydGllcywgZHVyYXRpb24gKSB7XG5cblx0XHRpZiAoIGR1cmF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0X3ZhbHVlc0VuZCA9IHByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHRUV0VFTi5hZGQoIHRoaXMgKTtcblxuXHRcdF9pc1BsYXlpbmcgPSB0cnVlO1xuXG5cdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cblx0XHRfc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKSApO1xuXHRcdF9zdGFydFRpbWUgKz0gX2RlbGF5VGltZTtcblxuXHRcdGZvciAoIHZhciBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kICkge1xuXG5cdFx0XHQvLyBjaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcblx0XHRcdGlmICggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSBpbnN0YW5jZW9mIEFycmF5ICkge1xuXG5cdFx0XHRcdGlmICggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXS5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XG5cdFx0XHRcdF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gPSBbIF9vYmplY3RbIHByb3BlcnR5IF0gXS5jb25jYXQoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gPSBfb2JqZWN0WyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRpZiggKCBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gaW5zdGFuY2VvZiBBcnJheSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCAhX2lzUGxheWluZyApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdFRXRUVOLnJlbW92ZSggdGhpcyApO1xuXHRcdF9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICggX29uU3RvcENhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRfb25TdG9wQ2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAoIHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IF9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKyApIHtcblxuXHRcdFx0X2NoYWluZWRUd2VlbnNbIGkgXS5zdG9wKCk7XG5cblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmRlbGF5ID0gZnVuY3Rpb24gKCBhbW91bnQgKSB7XG5cblx0XHRfZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5yZXBlYXQgPSBmdW5jdGlvbiAoIHRpbWVzICkge1xuXG5cdFx0X3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy55b3lvID0gZnVuY3Rpb24oIHlveW8gKSB7XG5cblx0XHRfeW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXG5cdHRoaXMuZWFzaW5nID0gZnVuY3Rpb24gKCBlYXNpbmcgKSB7XG5cblx0XHRfZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmludGVycG9sYXRpb24gPSBmdW5jdGlvbiAoIGludGVycG9sYXRpb24gKSB7XG5cblx0XHRfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuY2hhaW4gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRfY2hhaW5lZFR3ZWVucyA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdGFydCA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0b3AgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICggdGltZSApIHtcblxuXHRcdHZhciBwcm9wZXJ0eTtcblxuXHRcdGlmICggdGltZSA8IF9zdGFydFRpbWUgKSB7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBfb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlICkge1xuXG5cdFx0XHRpZiAoIF9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0X29uU3RhcnRDYWxsYmFjay5jYWxsKCBfb2JqZWN0ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdHZhciBlbGFwc2VkID0gKCB0aW1lIC0gX3N0YXJ0VGltZSApIC8gX2R1cmF0aW9uO1xuXHRcdGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFyIHZhbHVlID0gX2Vhc2luZ0Z1bmN0aW9uKCBlbGFwc2VkICk7XG5cblx0XHRmb3IgKCBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kICkge1xuXG5cdFx0XHR2YXIgc3RhcnQgPSBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gfHwgMDtcblx0XHRcdHZhciBlbmQgPSBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRpZiAoIGVuZCBpbnN0YW5jZW9mIEFycmF5ICkge1xuXG5cdFx0XHRcdF9vYmplY3RbIHByb3BlcnR5IF0gPSBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKCBlbmQsIHZhbHVlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAoIHR5cGVvZihlbmQpID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQsIDEwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHByb3RlY3QgYWdhaW5zdCBub24gbnVtZXJpYyBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRpZiAoIHR5cGVvZihlbmQpID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdF9vYmplY3RbIHByb3BlcnR5IF0gPSBzdGFydCArICggZW5kIC0gc3RhcnQgKSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdF9vblVwZGF0ZUNhbGxiYWNrLmNhbGwoIF9vYmplY3QsIHZhbHVlICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGVsYXBzZWQgPT0gMSApIHtcblxuXHRcdFx0aWYgKCBfcmVwZWF0ID4gMCApIHtcblxuXHRcdFx0XHRpZiggaXNGaW5pdGUoIF9yZXBlYXQgKSApIHtcblx0XHRcdFx0XHRfcmVwZWF0LS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZWFzc2lnbiBzdGFydGluZyB2YWx1ZXMsIHJlc3RhcnQgYnkgbWFraW5nIHN0YXJ0VGltZSA9IG5vd1xuXHRcdFx0XHRmb3IoIHByb3BlcnR5IGluIF92YWx1ZXNTdGFydFJlcGVhdCApIHtcblxuXHRcdFx0XHRcdGlmICggdHlwZW9mKCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdICkgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gKyBwYXJzZUZsb2F0KF92YWx1ZXNFbmRbIHByb3BlcnR5IF0sIDEwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRcdHZhciB0bXAgPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF07XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdO1xuXHRcdFx0XHRcdFx0X3ZhbHVlc0VuZFsgcHJvcGVydHkgXSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdF9yZXZlcnNlZCA9ICFfcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfc3RhcnRUaW1lID0gdGltZSArIF9kZWxheVRpbWU7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBfb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0X29uQ29tcGxldGVDYWxsYmFjay5jYWxsKCBfb2JqZWN0ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IF9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKyApIHtcblxuXHRcdFx0XHRcdF9jaGFpbmVkVHdlZW5zWyBpIF0uc3RhcnQoIHRpbWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoIDIgLSBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdHJldHVybiAtIDAuNSAqICggLS1rICogKCBrIC0gMiApIC0gMSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSAoIC0tayAqIGsgKiBrICogayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIC0gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKiBrIC0gMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAwLjUgKiAoICggayAtPSAyICkgKiBrICogayAqIGsgKiBrICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyggayAqIE1hdGguUEkgLyAyICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbiggayAqIE1hdGguUEkgLyAyICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDAuNSAqICggMSAtIE1hdGguY29zKCBNYXRoLlBJICogayApICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coIDEwMjQsIGsgLSAxICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdyggMiwgLSAxMCAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBNYXRoLnBvdyggMTAyNCwgayAtIDEgKTtcblx0XHRcdHJldHVybiAwLjUgKiAoIC0gTWF0aC5wb3coIDIsIC0gMTAgKiAoIGsgLSAxICkgKSArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdENpcmN1bGFyOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCggMSAtIGsgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNxcnQoIDEgLSAoIC0tayAqIGsgKSApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEpIHJldHVybiAtIDAuNSAqICggTWF0aC5zcXJ0KCAxIC0gayAqIGspIC0gMSk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCBNYXRoLnNxcnQoIDEgLSAoIGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdHJldHVybiAtICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdHJldHVybiAoIGEgKiBNYXRoLnBvdyggMiwgLSAxMCAqIGspICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSArIDEgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcblx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRpZiAoICFhIHx8IGEgPCAxICkgeyBhID0gMTsgcyA9IHAgLyA0OyB9XG5cdFx0XHRlbHNlIHMgPSBwICogTWF0aC5hc2luKCAxIC8gYSApIC8gKCAyICogTWF0aC5QSSApO1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAtIDAuNSAqICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKTtcblx0XHRcdHJldHVybiBhICogTWF0aC5wb3coIDIsIC0xMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKiAwLjUgKyAxO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0QmFjazoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0cmV0dXJuIGsgKiBrICogKCAoIHMgKyAxICkgKiBrIC0gcyApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRyZXR1cm4gLS1rICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqICggayAqIGsgKiAoICggcyArIDEgKSAqIGsgLSBzICkgKTtcblx0XHRcdHJldHVybiAwLjUgKiAoICggayAtPSAyICkgKiBrICogKCAoIHMgKyAxICkgKiBrICsgcyApICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KCAxIC0gayApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPCAoIDEgLyAyLjc1ICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBrIDwgKCAyIC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAxLjUgLyAyLjc1ICkgKSAqIGsgKyAwLjc1O1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBrIDwgKCAyLjUgLyAyLjc1ICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIGsgKyAwLjkzNzU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuNjI1IC8gMi43NSApICkgKiBrICsgMC45ODQzNzU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPCAwLjUgKSByZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbiggayAqIDIgKSAqIDAuNTtcblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCggayAqIDIgLSAxICkgKiAwLjUgKyAwLjU7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5UV0VFTi5JbnRlcnBvbGF0aW9uID0ge1xuXG5cdExpbmVhcjogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDEsIGYgPSBtICogaywgaSA9IE1hdGguZmxvb3IoIGYgKSwgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmICggayA8IDAgKSByZXR1cm4gZm4oIHZbIDAgXSwgdlsgMSBdLCBmICk7XG5cdFx0aWYgKCBrID4gMSApIHJldHVybiBmbiggdlsgbSBdLCB2WyBtIC0gMSBdLCBtIC0gZiApO1xuXG5cdFx0cmV0dXJuIGZuKCB2WyBpIF0sIHZbIGkgKyAxID4gbSA/IG0gOiBpICsgMSBdLCBmIC0gaSApO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAoIHYsIGsgKSB7XG5cblx0XHR2YXIgYiA9IDAsIG4gPSB2Lmxlbmd0aCAtIDEsIHB3ID0gTWF0aC5wb3csIGJuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW4sIGk7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8PSBuOyBpKysgKSB7XG5cdFx0XHRiICs9IHB3KCAxIC0gaywgbiAtIGkgKSAqIHB3KCBrLCBpICkgKiB2WyBpIF0gKiBibiggbiwgaSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBiO1xuXG5cdH0sXG5cblx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDEsIGYgPSBtICogaywgaSA9IE1hdGguZmxvb3IoIGYgKSwgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAoIHZbIDAgXSA9PT0gdlsgbSBdICkge1xuXG5cdFx0XHRpZiAoIGsgPCAwICkgaSA9IE1hdGguZmxvb3IoIGYgPSBtICogKCAxICsgayApICk7XG5cblx0XHRcdHJldHVybiBmbiggdlsgKCBpIC0gMSArIG0gKSAlIG0gXSwgdlsgaSBdLCB2WyAoIGkgKyAxICkgJSBtIF0sIHZbICggaSArIDIgKSAlIG0gXSwgZiAtIGkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmICggayA8IDAgKSByZXR1cm4gdlsgMCBdIC0gKCBmbiggdlsgMCBdLCB2WyAwIF0sIHZbIDEgXSwgdlsgMSBdLCAtZiApIC0gdlsgMCBdICk7XG5cdFx0XHRpZiAoIGsgPiAxICkgcmV0dXJuIHZbIG0gXSAtICggZm4oIHZbIG0gXSwgdlsgbSBdLCB2WyBtIC0gMSBdLCB2WyBtIC0gMSBdLCBmIC0gbSApIC0gdlsgbSBdICk7XG5cblx0XHRcdHJldHVybiBmbiggdlsgaSA/IGkgLSAxIDogMCBdLCB2WyBpIF0sIHZbIG0gPCBpICsgMSA/IG0gOiBpICsgMSBdLCB2WyBtIDwgaSArIDIgPyBtIDogaSArIDIgXSwgZiAtIGkgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uICggcDAsIHAxLCB0ICkge1xuXG5cdFx0XHRyZXR1cm4gKCBwMSAtIHAwICkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAoIG4gLCBpICkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblx0XHRcdHJldHVybiBmYyggbiApIC8gZmMoIGkgKSAvIGZjKCBuIC0gaSApO1xuXG5cdFx0fSxcblxuXHRcdEZhY3RvcmlhbDogKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWyAxIF07XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAoIG4gKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxLCBpO1xuXHRcdFx0XHRpZiAoIGFbIG4gXSApIHJldHVybiBhWyBuIF07XG5cdFx0XHRcdGZvciAoIGkgPSBuOyBpID4gMTsgaS0tICkgcyAqPSBpO1xuXHRcdFx0XHRyZXR1cm4gYVsgbiBdID0gcztcblxuXHRcdFx0fTtcblxuXHRcdH0gKSgpLFxuXG5cdFx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKCBwMCwgcDEsIHAyLCBwMywgdCApIHtcblxuXHRcdFx0dmFyIHYwID0gKCBwMiAtIHAwICkgKiAwLjUsIHYxID0gKCBwMyAtIHAxICkgKiAwLjUsIHQyID0gdCAqIHQsIHQzID0gdCAqIHQyO1xuXHRcdFx0cmV0dXJuICggMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSApICogdDMgKyAoIC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEgKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cz1UV0VFTjsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuXHRUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG5cdENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG52YXIgY2FtZXJhLFxyXG5cdHRhcmdldCxcclxuICAgIGNhbWVyYVR3ZWVuLFxyXG4gICAgdGFyZ2V0VHdlZW47XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcblx0ICAgICAgICB5OiA1MCArIENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93blksXHJcblx0ICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG5cdGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG5cdCAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnogKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21JblJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0UmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcbiAgICBcclxuICAgIGNhbWVyYVR3ZWVuLnN0b3AoKTtcclxuICAgIHRhcmdldFR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FtZXJhKCkge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG5cdHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmFBc3BlY3QocmF0aW8pIHtcclxuXHRjYW1lcmEuYXNwZWN0ID0gcmF0aW87XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29rQXRUYXJnZXQoKSB7XHJcblx0Y2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluaXQ6IGluaXQsXHJcblx0Zm9jdXNSZWNvcmQ6IGZvY3VzUmVjb3JkLFxyXG5cdHpvb21JblJlY29yZDogem9vbUluUmVjb3JkLFxyXG5cdHpvb21PdXRSZWNvcmQ6IHpvb21PdXRSZWNvcmQsXHJcblx0cmVzZXRDYW1lcmE6IHJlc2V0Q2FtZXJhLFxyXG5cdHVwZGF0ZUNhbWVyYUFzcGVjdDogdXBkYXRlQ2FtZXJhQXNwZWN0LFxyXG5cdGxvb2tBdFRhcmdldDogbG9va0F0VGFyZ2V0LFxyXG5cdFxyXG5cdGdldENhbWVyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gY2FtZXJhO1xyXG5cdH0sXHJcblx0Z2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqY21GMFpXUnBaMmRsY2k5RFlXMWxjbUZOWVc1aFoyVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SjJZWElnVkVoU1JVVWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25WRWhTUlVVblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkoxUklVa1ZGSjEwZ09pQnVkV3hzS1N4Y2NseHVYSFJVVjBWRlRpQTlJSEpsY1hWcGNtVW9KM1IzWldWdUxtcHpKeWtzWEhKY2JseHlYRzVjZEVOdmJuTjBZVzUwY3lBOUlISmxjWFZwY21Vb0p5NHZRMjl1YzNSaGJuUnpKeWs3WEhKY2JseHlYRzUyWVhJZ1kyRnRaWEpoTEZ4eVhHNWNkSFJoY21kbGRDeGNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVMRnh5WEc0Z0lDQWdkR0Z5WjJWMFZIZGxaVzQ3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYm1sMEtISmhkR2x2S1NCN1hISmNibHh5WEc1Y2RHTmhiV1Z5WVNBOUlHNWxkeUJVU0ZKRlJTNVFaWEp6Y0dWamRHbDJaVU5oYldWeVlTZ2dORFVzSUhKaGRHbHZMQ0F3TGpFc0lESXdNREF3SUNrN1hISmNiaUFnSUNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnZ1BTQTBOVHRjY2x4dUlDQWdJR05oYldWeVlTNW1jbUZ0WlZOcGVtVWdQU0F6TWp0Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVYSEpjYmlBZ0lDQjBZWEpuWlhRZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJR05oYldWeVlTNXNiMjlyUVhRb0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcE8xeHlYRzVjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NrN1hISmNiaUFnSUNCMFlYSm5aWFJVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ3BPMXh5WEc1Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdabTlqZFhOU1pXTnZjbVFvY21WamIzSmtXRkJ2Y3l3Z2NtVmpiM0prUVdKemIyeDFkR1ZRYjNNcElIdGNjbHh1SUNBZ0lGeHlYRzRnSUNBZ1kyRnRaWEpoVkhkbFpXNHVjM1J2Y0NncE8xeHlYRzRnSUNBZ2RHRnlaMlYwVkhkbFpXNHVjM1J2Y0NncE8xeHlYRzVjY2x4dUlDQWdJSFJoY21kbGRGUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNWNkQ0FnSUNBdWRHOG9JSHRjY2x4dVhIUWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01zWEhKY2JseDBJQ0FnSUNBZ0lDQjVPaUExTUNBcklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJUYUc5M2Jsa3NYSEpjYmx4MElDQWdJQ0FnSUNCNk9pQnlaV052Y21SQlluTnZiSFYwWlZCdmN5NTZYSEpjYmx4MElDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmx4MElDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNWNkR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNWNkQ0FnSUNBdWRHOG9JSHRjY2x4dVhIUWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01nS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NExGeHlYRzVjZENBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVTeGNjbHh1WEhRZ0lDQWdJQ0FnSUhvNklISmxZMjl5WkVGaWMyOXNkWFJsVUc5ekxub2dLeUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU2WEhKY2JseDBJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JseDBJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIcHZiMjFKYmxKbFkyOXlaQ2h5WldOdmNtUllVRzl6TENCeVpXTnZjbVJCWW5OdmJIVjBaVkJ2Y3lrZ2UxeHlYRzRnSUNBZ1hISmNiaUFnSUNCallXMWxjbUZVZDJWbGJpNXpkRzl3S0NrN1hISmNiaUFnSUNCMFlYSm5aWFJVZDJWbGJpNXpkRzl3S0NrN1hISmNibHh5WEc0Z0lDQWdkR0Z5WjJWMFZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJHYkdsd2NHVmtXU0FySURVd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNk9pQnlaV052Y21SQlluTnZiSFYwWlZCdmN5NTZYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1sdVptOVBjR1Z1VkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVnh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZVlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQnlaV052Y21SWVVHOXpJQ3NnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZUNBcklEZ3dMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU1SUMwZ05UQXNYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjZiMjl0VDNWMFVtVmpiM0prS0hKbFkyOXlaRmhRYjNNc0lISmxZMjl5WkVGaWMyOXNkWFJsVUc5ektTQjdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lIUmhjbWRsZEZSM1pXVnVMbk4wYjNBb0tUdGNjbHh1WEhKY2JpQWdJQ0IwWVhKblpYUlVkMlZsYmlBOUlHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVaR1ZzWVhrb0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdMeUF5SUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2NtVmpiM0prV0ZCdmN5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dOelVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSG82SUhKbFkyOXlaRUZpYzI5c2RYUmxVRzl6TG5wY2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCeVpXTnZjbVJZVUc5eklDc2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNHVlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGMyVjBRMkZ0WlhKaEtDa2dlMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQmpZVzFsY21GVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmlBZ0lDQjBZWEpuWlhSVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmx4eVhHNWNkSFJoY21kbGRGUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1ZEdGeVoyVjBRbUZ6WlZCdmMybDBhVzl1TG5nc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1MFlYSm5aWFJDWVhObFVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuUmhjbWRsZEVKaGMyVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVUpoYzJWUWIzTnBkR2x2Ymk1NlhISmNiaUFnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCMWNHUmhkR1ZEWVcxbGNtRkJjM0JsWTNRb2NtRjBhVzhwSUh0Y2NseHVYSFJqWVcxbGNtRXVZWE53WldOMElEMGdjbUYwYVc4N1hISmNiaUFnSUNCallXMWxjbUV1ZFhCa1lYUmxVSEp2YW1WamRHbHZiazFoZEhKcGVDZ3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCc2IyOXJRWFJVWVhKblpYUW9LU0I3WEhKY2JseDBZMkZ0WlhKaExteHZiMnRCZENnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNrN1hISmNibjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc1Y2RHbHVhWFE2SUdsdWFYUXNYSEpjYmx4MFptOWpkWE5TWldOdmNtUTZJR1p2WTNWelVtVmpiM0prTEZ4eVhHNWNkSHB2YjIxSmJsSmxZMjl5WkRvZ2VtOXZiVWx1VW1WamIzSmtMRnh5WEc1Y2RIcHZiMjFQZFhSU1pXTnZjbVE2SUhwdmIyMVBkWFJTWldOdmNtUXNYSEpjYmx4MGNtVnpaWFJEWVcxbGNtRTZJSEpsYzJWMFEyRnRaWEpoTEZ4eVhHNWNkSFZ3WkdGMFpVTmhiV1Z5WVVGemNHVmpkRG9nZFhCa1lYUmxRMkZ0WlhKaFFYTndaV04wTEZ4eVhHNWNkR3h2YjJ0QmRGUmhjbWRsZERvZ2JHOXZhMEYwVkdGeVoyVjBMRnh5WEc1Y2RGeHlYRzVjZEdkbGRFTmhiV1Z5WVRvZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUnlaWFIxY200Z1kyRnRaWEpoTzF4eVhHNWNkSDBzWEhKY2JseDBaMlYwVkdGeVoyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEhKbGRIVnliaUIwWVhKblpYUTdYSEpjYmx4MGZWeHlYRzU5SWwxOSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGRlYnVnOiBmYWxzZSxcclxuICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgbmJDcmF0ZXM6IDIsXHJcbiAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgIHBvc3Rwcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGxvYWRpbmdDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICBhcnRpc3RDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgY292ZXJDb250YWluZXI6IG51bGxcclxuICAgIH0sXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgaW5mb09wZW5UaW1lOiA3MDAsXHJcbiAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAxOTAsXHJcbiAgICAgICAgICAgIHk6IDE5NSxcclxuICAgICAgICAgICAgejogOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDQsXHJcbiAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZDogZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpc1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyksXHJcbiAgICBDYW1lcmFNYW5hZ2VyID0gcmVxdWlyZSgnLi9DYW1lcmFNYW5hZ2VyJyk7XHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIFxyXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IENvbnN0YW50cy5zbGVldmVDb2xvclxyXG4gICAgICAgIH0pKVxyXG4gICAgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLmZvY3VzUmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IE1hdGguUEksXHJcbiAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci56b29tSW5SZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENhbWVyYU1hbmFnZXIuem9vbU91dFJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVjb3JkO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOVNaV052Y21RdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJRlJJVWtWRklEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkoxUklVa1ZGSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lkVVNGSkZSU2RkSURvZ2JuVnNiQ2tzWEhKY2JpQWdJQ0JVVjBWRlRpQTlJSEpsY1hWcGNtVW9KM1IzWldWdUxtcHpKeWtzWEhKY2JseHlYRzRnSUNBZ1EyOXVjM1JoYm5SeklEMGdjbVZ4ZFdseVpTZ25MaTlEYjI1emRHRnVkSE1uS1N4Y2NseHVJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDBOaGJXVnlZVTFoYm1GblpYSW5LVHRjY2x4dVhISmNiblpoY2lCU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NXBaQ0E5SUdsa08xeHlYRzRnSUNBZ2RHaHBjeTVqY21GMFpVbGtJRDBnWTNKaGRHVkpaRHRjY2x4dUlDQWdJSFJvYVhNdWNHOXpJRDBnY0c5ek8xeHlYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJQ2R2ZFhRbk8xeHlYRzRnSUNBZ2RHaHBjeTV5WldOdmNtUllVRzl6SUQwZ0xUWXlJQ3NnS0NBeE16VWdMeUJEYjI1emRHRnVkSE11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnS2lCd2IzTTdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXhNREFzSURFdU5Td2dNVEF3TENBeExDQXhMQ0F4SUNrc0lGeHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVNGSkZSUzVOWlhOb1JtRmpaVTFoZEdWeWFXRnNLQ0J1WlhjZ1ZFaFNSVVV1VFdWemFFeGhiV0psY25STllYUmxjbWxoYkNnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nUTI5dWMzUmhiblJ6TG5Oc1pXVjJaVU52Ykc5eVhISmNiaUFnSUNBZ0lDQWdmU2twWEhKY2JpQWdJQ0FwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG1kbGIyMWxkSEo1TG1Gd2NHeDVUV0YwY21sNEtDQnVaWGNnVkVoU1JVVXVUV0YwY21sNE5DZ3BMbTFoYTJWVWNtRnVjMnhoZEdsdmJpZ2dOVEFzSURBc0lEQWdLU0FwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1TG5ObGRDZ2dkR2hwY3k1eVpXTnZjbVJZVUc5ekxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prUW1GelpWa3NJREFnS1R0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUM1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1Y21WamIzSmtTV1FnUFNCcFpEdGNjbHh1SUNBZ0lIUm9hWE11WVdKemIyeDFkR1ZRYjNOcGRHbHZiaUE5SUc1bGR5QlVTRkpGUlM1V1pXTjBiM0l6S0NrN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ2s3WEhKY2JpQWdJQ0IwYUdsekxuSnZkR0YwYVc5dVZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvS1R0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGRGVnVZV04wYVhabEtDazdYSEpjYmlBZ0lDQjBhR2x6TG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExteHZaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqYjI1emIyeGxMbXh2WnlnZ1hDSlNaV052Y21RZ2JzS3dYQ0lzSUhSb2FYTXVhV1FzWEhKY2JpQWdJQ0FnSUNBZ1hDSmpjbUYwWlVsa0lEMWNJaXdnZEdocGN5NWpjbUYwWlVsa0xGeHlYRzRnSUNBZ0lDQWdJRndpY0c5eklEMWNJaXdnZEdocGN5NXdiM01nS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5ObGRFRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJSFJ5ZFdVN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWRtbHphV0pzWlNBOUlIUnlkV1U3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzV6WlhSVmJtRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJR1poYkhObE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5Ob2IzZFNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmk1emRHOXdLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IwYUdsekxuTjBZWFJsSUNFOVBTQW5jMmh2ZDI0bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnSjNOb2IzZHVKenRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHVjMlYwUm5KdmJVMWhkSEpwZUZCdmMybDBhVzl1S0NCMGFHbHpMbTFsYzJndWJXRjBjbWw0VjI5eWJHUWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUlRhRzkzYmxsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV5YjNSaGRHbHZibFIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSXVabTlqZFhOU1pXTnZjbVFvZEdocGN5NXlaV052Y21SWVVHOXpMQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0cE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnphRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMGdKM0IxYzJobFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnphR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJsUjNaV1Z1TG5OMGIzQW9LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkp2ZEdGMGFXOXVWSGRsWlc0dWMzUnZjQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dVZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y205MFlYUnBiMjVVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUJOWVhSb0xsQkpJQzhnTWlBcklFMWhkR2d1VUVrZ0x5QTNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzV3ZFd4c1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkR2hwY3k1emRHRjBaU0FoUFQwZ0ozQjFiR3hsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuY0hWc2JHVmtKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuSnZkR0YwYVc5dVZIZGxaVzR1YzNSdmNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1VkhkbFpXNGdQU0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nUTI5dWMzUmhiblJ6TG5OalpXNWxMbkpsWTI5eVpFSmhjMlZaWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmlBOUlHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQk5ZWFJvTGxCSklDOGdNaUF0SUUxaGRHZ3VVRWtnTHlBM1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNW1iR2x3VW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuWm14cGNIQmxaQ2M3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmk1emRHOXdLQ2s3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVjbVZqYjNKa1JteHBjSEJsWkZsY2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJSFJvYVhNdWNtOTBZWFJwYjI1VWQyVmxiaUE5SUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVaR1ZzWVhrb0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdMeUEwSUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dUV0YwYUM1UVNTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dUV0YwYUM1UVNTQXZJREpjY2x4dUlDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwWEhKY2JpQWdJQ0FnSUNBZ0xtOXVRMjl0Y0d4bGRHVW9JR1J2Ym1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0JEWVcxbGNtRk5ZVzVoWjJWeUxucHZiMjFKYmxKbFkyOXlaQ2gwYUdsekxuSmxZMjl5WkZoUWIzTXNJSFJvYVhNdVlXSnpiMngxZEdWUWIzTnBkR2x2YmlrN1hISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbVpzYVhCQ1lXTnJVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDd2dibTlEWVcxbGNtRlVkMlZsYmlBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdQVDA5SUNkbWJHbHdjR1ZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5KdmRHRjBhVzl1VkhkbFpXNHVjM1J2Y0NncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVWSGRsWlc0Z1BTQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWtaV3hoZVNnZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1sdVptOVBjR1Z1VkdsdFpTQXZJRElnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUkNZWE5sV1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXliM1JoZEdsdmJsUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklEQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0F2SURJZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzV2YmtOdmJYQnNaWFJsS0NCa2IyNWxJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnaGJtOURZVzFsY21GVWQyVmxiaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1NmIyOXRUM1YwVW1WamIzSmtLSFJvYVhNdWNtVmpiM0prV0ZCdmN5d2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JTWldOdmNtUTdJbDE5IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqXHJcbiAqIEZ1bGwtc2NyZWVuIHRleHR1cmVkIHF1YWQgc2hhZGVyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuQ29weVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcIm9wYWNpdHlcIjogIHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcIixcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICk7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSBvcGFjaXR5ICogdGV4ZWw7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG59OyIsIi8qKlxyXG4gKiBAYXV0aG9yIGFuZHJld2JlcmcgLyBodHRwOi8vYW5kcmV3YmVyZy5jb20vXHJcbiAqXHJcbiAqIERlcHRoIG9mIEZpZWxkXHJcbiAqIC0gcG9ydGVkIGZyb21cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLkRvRlNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ0RGVwdGhcIjogICAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ6bmVhclwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiemZhclwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxMDAwLjAgfSxcclxuXHRcdFx0XCJzaXplXCI6ICAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggNTEyLCA1MTIgKSB9LFxyXG5cdFx0XHRcInRleHRlbFwiOlx0XHR7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxLzUxMiwgMS81MTIpfSxcclxuXHRcdFx0XCJmb2NhbERlcHRoXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjAwLjAgfSxcclxuXHRcdFx0XCJmb2NhbExlbmd0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDI4LjAgfSxcclxuXHRcdFx0XCJmc3RvcFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi44IH0sXHJcblx0XHRcdFwic2hvd0ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcIm1hbnVhbGRvZlwiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJuZG9mc3RhcnRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJuZG9mZGlzdFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi4wIH0sXHJcblx0XHRcdFwiZmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiZmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDMuMCB9LFxyXG5cdFx0XHRcIkNvQ1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAzIH0sXHJcblx0XHRcdFwidmlnbmV0dGluZ1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJ2aWdub3V0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjMgfSxcclxuXHRcdFx0XCJ2aWduaW5cIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMCB9LFxyXG5cdFx0XHRcInZpZ25mYWRlXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyMi4wIH0sXHJcblx0XHRcdFwiYXV0b2ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcImZvY3VzXCI6ICAgICAgICB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApIH0sXHJcblx0XHRcdFwibWF4Ymx1clwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwidGhyZXNob2xkXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC44IH0sXHJcblx0XHRcdFwiZ2FpblwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjcgfSxcclxuXHRcdFx0XCJiaWFzXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNSB9LFxyXG5cdFx0XHRcImZyaW5nZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC43IH0sXHJcblx0XHRcdFwibm9pc2VcIjpcdFx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJuYW1vdW50XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAwMDEgfSxcclxuXHRcdFx0XCJkZXB0aGJsdXJcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwiZGJzaXplXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjI1fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxyXG5cdFx0XHRcIiNkZWZpbmUgUEkgIDMuMTQxNTkyNjVcIixcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdC8vdW5pZm9ybSB2YXJpYWJsZXMgZnJvbSBleHRlcm5hbCBzY3JpcHRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBzaXplO1wiLCAvLyB0ZXh0dXJlIHdpZHRoIGFuZCBoZWlnaHRcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgdGV4ZWw7XCIsIC8vIHRleHRlbCBzaXplXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxEZXB0aDtcIiwgIC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmc3RvcDtcIiwgLy9mLXN0b3AgdmFsdWVcclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgc2hvd0ZvY3VzO1wiLCAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuXHRcdFx0Ly9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpuZWFyO1wiLCAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgemZhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3VzZXIgdmFyaWFibGVzIG5vdyBwYXNzZWQgYXMgdW5pZm9ybXNcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG1hbnVhbGRvZjtcIiwgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuZG9mc3RhcnQ7XCIsIC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZmRpc3Q7XCIsIC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mc3RhcnQ7XCIsIC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mZGlzdDtcIiwgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IENvQztcIiwvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgdmlnbmV0dGluZztcIiwgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWdub3V0O1wiLCAvL3ZpZ25ldHRpbmcgb3V0ZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduaW47XCIsIC8vdmlnbmV0dGluZyBpbm5lciBib3JkZXJcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25mYWRlO1wiLCAvL2Ytc3RvcHMgdGlsbCB2aWduZXRlIGZhZGVzXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBhdXRvZm9jdXM7XCIsIC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIGZvY3VzO1wiLCAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodClcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG1heGJsdXI7XCIsIC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdGhyZXNob2xkO1wiLCAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBnYWluO1wiLCAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGJpYXM7XCIsIC8vYm9rZWggZWRnZSBiaWFzXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmcmluZ2U7XCIsIC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG5vaXNlO1wiLCAvL3VzZSBub2lzZSBpbnN0ZWFkIG9mIHBhdHRlcm4gZm9yIHNhbXBsZSBkaXRoZXJpbmdcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5hbW91bnQ7XCIsIC8vZGl0aGVyIGFtb3VudFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgZGVwdGhibHVyO1wiLCAvL2JsdXIgdGhlIGRlcHRoIGJ1ZmZlcj9cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGRic2l6ZTtcIiwgLy9kZXB0aGJsdXJzaXplXHJcblxyXG5cdFx0XHQvLyBzYW1wbGVzIGFuZCByaW5ncyBuZWVkIHRvIGJlIGNvbnN0YW50cy4gbm8gZHluYW1pYyBsb29wIGNvdW50ZXJzIGluIE9wZW5HTCBFU1xyXG5cdFx0XHQvLyBDYW4gc2hhZGVyIGJlIGJyb2tlbiBpbnRvIDIgcGFzcz8gLi4uIFxyXG5cdFx0XHRcImludCBzYW1wbGVzID0gMztcIiwgLy9zYW1wbGVzIG9uIHRoZSBmaXJzdCByaW5nXHJcblx0XHRcdFwiY29uc3QgaW50IHJpbmdzID0gMztcIiwgLy9yaW5nIGNvdW50XHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHRuZXh0IHBhcnQgaXMgZXhwZXJpbWVudGFsXHJcblx0XHRcdG5vdCBsb29raW5nIGdvb2Qgd2l0aCBzbWFsbCBzYW1wbGUgYW5kIHJpbmcgY291bnRcclxuXHRcdFx0bG9va3Mgb2theSBzdGFydGluZyBmcm9tIHNhbXBsZXMgPSA0LCByaW5ncyA9IDRcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdFwiYm9vbCBwZW50YWdvbiA9IGZhbHNlO1wiLCAvL3VzZSBwZW50YWdvbiBhcyBib2tlaCBzaGFwZT9cclxuXHRcdFx0XCJmbG9hdCBmZWF0aGVyID0gMC40O1wiLCAvL3BlbnRhZ29uIHNoYXBlIGZlYXRoZXJcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHQvLyBSR0JBIGRlcHRoXHJcblxyXG5cdFx0XHRcImZsb2F0IHVucGFja0RlcHRoKCBjb25zdCBpbiB2ZWM0IHJnYmFfZGVwdGggKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29uc3QgdmVjNCBiaXRfc2hpZnQgPSB2ZWM0KCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKiAyNTYuMCApLCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gMjU2LjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBkb3QoIHJnYmFfZGVwdGgsIGJpdF9zaGlmdCApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGRlcHRoO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJmbG9hdCBwZW50YSh2ZWMyIGNvb3JkcylcIiwgLy9wZW50YWdvbmFsIHNoYXBlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgc2NhbGUgPSBmbG9hdChyaW5ncykgLSAxLjM7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzAgPSB2ZWM0KCAxLjAsICAgICAgICAgMC4wLCAgICAgICAgIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzEgPSB2ZWM0KCAwLjMwOTAxNjk5NCwgMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzIgPSB2ZWM0KC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzMgPSB2ZWM0KC0wLjgwOTAxNjk5NCwtMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzQgPSB2ZWM0KCAwLjMwOTAxNjk5NCwtMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzUgPSB2ZWM0KCAwLjAgICAgICAgICwwLjAgICAgICAgICAsIDEuMCwgIDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCAgb25lID0gdmVjNCggMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCBQID0gdmVjNCgoY29vcmRzKSx2ZWMyKHNjYWxlLCBzY2FsZSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgZGlzdCA9IHZlYzQoMC4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGlub3JvdXQgPSAtNC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFMwICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBkb3QoIFAsIEhTMSApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC56ID0gZG90KCBQLCBIUzIgKTtcIixcclxuXHRcdFx0XHRcImRpc3QudyA9IGRvdCggUCwgSFMzICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkb3QoIGRpc3QsIG9uZSApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFM0ICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBIUzUudyAtIGFicyggUC56ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblx0XHRcdFx0XCJpbm9yb3V0ICs9IGRpc3QueDtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoIGlub3JvdXQsIDAuMCwgMS4wICk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBiZGVwdGgodmVjMiBjb29yZHMpIC8vYmx1cnJpbmcgZGVwdGhcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkID0gMC4wO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQga2VybmVsWzldO1wiLFxyXG5cdFx0XHRcdFwidmVjMiBvZmZzZXRbOV07XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiB3aCA9IHZlYzIodGV4ZWwueCwgdGV4ZWwueSkgKiBkYnNpemU7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzBdID0gdmVjMigtd2gueCwtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMV0gPSB2ZWMyKCAwLjAsIC13aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFsyXSA9IHZlYzIoIHdoLnggLXdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFszXSA9IHZlYzIoLXdoLngsICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzRdID0gdmVjMiggMC4wLCAgIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbNV0gPSB2ZWMyKCB3aC54LCAgMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbNl0gPSB2ZWMyKC13aC54LCB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs3XSA9IHZlYzIoIDAuMCwgIHdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzhdID0gdmVjMiggd2gueCwgd2gueSk7XCIsXHJcblxyXG5cdFx0XHRcdFwia2VybmVsWzBdID0gMS4wLzE2LjA7ICAga2VybmVsWzFdID0gMi4wLzE2LjA7ICAga2VybmVsWzJdID0gMS4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbM10gPSAyLjAvMTYuMDsgICBrZXJuZWxbNF0gPSA0LjAvMTYuMDsgICBrZXJuZWxbNV0gPSAyLjAvMTYuMDtcIixcclxuXHRcdFx0XHRcImtlcm5lbFs2XSA9IDEuMC8xNi4wOyAgIGtlcm5lbFs3XSA9IDIuMC8xNi4wOyAgIGtlcm5lbFs4XSA9IDEuMC8xNi4wO1wiLFxyXG5cclxuXHJcblx0XHRcdFx0XCJmb3IoIGludCBpPTA7IGk8OTsgaSsrIClcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgdG1wID0gdW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCwgY29vcmRzICsgb2Zmc2V0W2ldKSk7XCIsXHJcblx0XHRcdFx0XHRcImQgKz0gdG1wICoga2VybmVsW2ldO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBkO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblxyXG5cdFx0XHRcInZlYzMgY29sb3IodmVjMiBjb29yZHMsZmxvYXQgYmx1cilcIiwgLy9wcm9jZXNzaW5nIHRoZSBzYW1wbGVcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wuciA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuMCwxLjApKnRleGVsKmZyaW5nZSpibHVyKS5yO1wiLFxyXG5cdFx0XHRcdFwiY29sLmcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigtMC44NjYsLTAuNSkqdGV4ZWwqZnJpbmdlKmJsdXIpLmc7XCIsXHJcblx0XHRcdFx0XCJjb2wuYiA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5iO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzMgbHVtY29lZmYgPSB2ZWMzKDAuMjk5LDAuNTg3LDAuMTE0KTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bSA9IGRvdChjb2wucmdiLCBsdW1jb2VmZik7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCB0aHJlc2ggPSBtYXgoKGx1bS10aHJlc2hvbGQpKmdhaW4sIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sK21peCh2ZWMzKDAuMCksY29sLHRocmVzaCpibHVyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzIgcmFuZCh2ZWMyIGNvb3JkKSAvL2dlbmVyYXRpbmcgbm9pc2UvcGF0dGVybiB0ZXh0dXJlIGZvciBkaXRoZXJpbmdcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVggPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC4yNSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjc1KSkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IG5vaXNlWSA9ICgoZnJhY3QoMS4wLWNvb3JkLnMqKHNpemUueC8yLjApKSowLjc1KSsoZnJhY3QoY29vcmQudCooc2l6ZS55LzIuMCkpKjAuMjUpKSoyLjAtMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChub2lzZSlcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwibm9pc2VYID0gY2xhbXAoZnJhY3Qoc2luKGRvdChjb29yZCAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWSA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKjIuMCkpICogNDM3NTguNTQ1MyksMC4wLDEuMCkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcInJldHVybiB2ZWMyKG5vaXNlWCxub2lzZVkpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidmVjMyBkZWJ1Z0ZvY3VzKHZlYzMgY29sLCBmbG9hdCBibHVyLCBmbG9hdCBkZXB0aClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBlZGdlID0gMC4wMDIqZGVwdGg7IC8vZGlzdGFuY2UgYmFzZWQgZWRnZSBzbW9vdGhpbmdcIixcclxuXHRcdFx0XHRcImZsb2F0IG0gPSBjbGFtcChzbW9vdGhzdGVwKDAuMCxlZGdlLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZSA9IGNsYW1wKHNtb290aHN0ZXAoMS4wLWVkZ2UsMS4wLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygxLjAsMC41LDAuMCksKDEuMC1tKSowLjYpO1wiLFxyXG5cdFx0XHRcdFwiY29sID0gbWl4KGNvbCx2ZWMzKDAuMCwwLjUsMS4wKSwoKDEuMC1lKS0oMS4wLW0pKSowLjIpO1wiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBjb2w7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBsaW5lYXJpemUoZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIC16ZmFyICogem5lYXIgLyAoZGVwdGggKiAoemZhciAtIHpuZWFyKSAtIHpmYXIpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgdmlnbmV0dGUoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGRpc3QgPSBkaXN0YW5jZSh2VXYsIHZlYzIoMC41LDAuNSkpO1wiLFxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAodmlnbm91dCsoZnN0b3AvdmlnbmZhZGUpLCB2aWduaW4rKGZzdG9wL3ZpZ25mYWRlKSwgZGlzdCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoZGlzdCwwLjAsMS4wKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdC8vc2NlbmUgZGVwdGggY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLHZVdikpKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoZGVwdGhibHVyKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJkZXB0aCA9IGxpbmVhcml6ZShiZGVwdGgodlV2KSk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdC8vZm9jYWwgcGxhbmUgY2FsY3VsYXRpb25cIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBmRGVwdGggPSBmb2NhbERlcHRoO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChhdXRvZm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZEZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLGZvY3VzKSkpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2RvZiBibHVyIGZhY3RvciBjYWxjdWxhdGlvblxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGJsdXIgPSAwLjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKG1hbnVhbGRvZilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYSA9IGRlcHRoLWZEZXB0aDtcIiwgLy9mb2NhbCBwbGFuZVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBiID0gKGEtZmRvZnN0YXJ0KS9mZG9mZGlzdDtcIiwgLy9mYXIgRG9GXHJcblx0XHRcdFx0XHRcImZsb2F0IGMgPSAoLWEtbmRvZnN0YXJ0KS9uZG9mZGlzdDtcIiwgLy9uZWFyIERvZlxyXG5cdFx0XHRcdFx0XCJibHVyID0gKGE+MC4wKT9iOmM7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBmID0gZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IGQgPSBmRGVwdGgqMTAwMC4wO1wiLCAvL2ZvY2FsIHBsYW5lIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IG8gPSBkZXB0aCoxMDAwLjA7XCIsIC8vZGVwdGggaW4gbW1cclxuXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSAobypmKS8oby1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChkKmYpLyhkLWYpO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKGQtZikvKGQqZnN0b3AqQ29DKTtcIixcclxuXHJcblx0XHRcdFx0XHRcImJsdXIgPSBhYnMoYS1iKSpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImJsdXIgPSBjbGFtcChibHVyLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBwYXR0ZXJuIGZvciBkaXRlcmluZ1xyXG5cclxuXHRcdFx0XHRcInZlYzIgbm9pc2UgPSByYW5kKHZVdikqbmFtb3VudCpibHVyO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBnZXR0aW5nIGJsdXIgeCBhbmQgeSBzdGVwIGZhY3RvclxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHcgPSAoMS4wL3NpemUueCkqYmx1ciptYXhibHVyK25vaXNlLng7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBoID0gKDEuMC9zaXplLnkpKmJsdXIqbWF4Ymx1citub2lzZS55O1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBmaW5hbCBjb2xvclxyXG5cclxuXHRcdFx0XHRcInZlYzMgY29sID0gdmVjMygwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmKGJsdXIgPCAwLjA1KVwiLCAvL3NvbWUgb3B0aW1pemF0aW9uIHRoaW5neVxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBzID0gMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZm9yIChpbnQgaSA9IDE7IGkgPD0gcmluZ3M7IGkgKz0gMSlcIixcclxuXHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcImZsb2F0IHJpbmdzYW1wbGVzID0gZmxvYXQoaSAqIHNhbXBsZXMpO1wiLFxyXG5cclxuXHRcdFx0XHRcdFx0XCJpZihpID09IDEpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgMyA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDIpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgNiA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDMpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgOSA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFwiY29sIC89IHM7XCIsIC8vZGl2aWRlIGJ5IHNhbXBsZSBjb3VudFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmIChzaG93Rm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IGRlYnVnRm9jdXMoY29sLCBibHVyLCBkZXB0aCk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKHZpZ25ldHRpbmcpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCAqPSB2aWduZXR0ZSgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvci5yZ2IgPSBjb2w7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IuYSA9IDEuMDtcIixcclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxuXHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIgPSBmdW5jdGlvbiAoIHJlbmRlcmVyLCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuXHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDE7XHJcblx0XHRcdHZhciBwYXJhbWV0ZXJzID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBzdGVuY2lsQnVmZmVyOiBmYWxzZSB9O1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB3aWR0aCwgaGVpZ2h0LCBwYXJhbWV0ZXJzICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0dGhpcy5wYXNzZXMgPSBbXTtcclxuXHJcblx0XHRpZiAoIFRIUkVFLkNvcHlTaGFkZXIgPT09IHVuZGVmaW5lZCApXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiVEhSRUUuRWZmZWN0Q29tcG9zZXIgcmVsaWVzIG9uIFRIUkVFLkNvcHlTaGFkZXJcIiApO1xyXG5cclxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuQ29weVNoYWRlciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5FZmZlY3RDb21wb3Nlci5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0c3dhcEJ1ZmZlcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIHRtcCA9IHRoaXMucmVhZEJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRtcDtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGFkZFBhc3M6IGZ1bmN0aW9uICggcGFzcyApIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnB1c2goIHBhc3MgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGluc2VydFBhc3M6IGZ1bmN0aW9uICggcGFzcywgaW5kZXggKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5zcGxpY2UoIGluZGV4LCAwLCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0XHR2YXIgbWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIHBhc3MsIGksIGlsID0gdGhpcy5wYXNzZXMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0cGFzcyA9IHRoaXMucGFzc2VzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggIXBhc3MuZW5hYmxlZCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRwYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MubmVlZHNTd2FwICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWFza0FjdGl2ZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3B5UGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEgKTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zd2FwQnVmZmVycygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLk1hc2tQYXNzICkge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwYXNzIGluc3RhbmNlb2YgVEhSRUUuQ2xlYXJNYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlc2V0OiBmdW5jdGlvbiAoIHJlbmRlclRhcmdldCApIHtcclxuXHJcblx0XHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFNpemU6IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcblx0XHRcdHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldC53aWR0aCA9IHdpZHRoO1xyXG5cdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHRcdFx0dGhpcy5yZXNldCggcmVuZGVyVGFyZ2V0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICogQGF1dGhvciBkYXZpZGVkYyAvIGh0dHA6Ly93d3cuc2tldGNocGF0Y2gubmV0L1xyXG4gKlxyXG4gKiBOVklESUEgRlhBQSBieSBUaW1vdGh5IExvdHRlc1xyXG4gKiBodHRwOi8vdGltb3RoeWxvdHRlcy5ibG9nc3BvdC5jb20vMjAxMS8wNi9meGFhMy1zb3VyY2UtcmVsZWFzZWQuaHRtbFxyXG4gKiAtIFdlYkdMIHBvcnQgYnkgQHN1cGVyZWdnYmVydFxyXG4gKiBodHRwOi8vd3d3LmdsZ2Uub3JnL2RlbW9zL2Z4YWEvXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5GWEFBU2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6ICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJyZXNvbHV0aW9uXCI6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEgLyAxMDI0LCAxIC8gNTEyICkgIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XCIsXHJcblxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8xMjguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAvOC4wKVwiLFxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5XID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAxLjAsIC0xLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU1cgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIC0xLjAsIDEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JTRSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiYU0gID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICk7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk0gID0gcmdiYU0ueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyBsdW1hID0gdmVjMyggMC4yOTksIDAuNTg3LCAwLjExNCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGx1bWFOVyA9IGRvdCggcmdiTlcsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFORSA9IGRvdCggcmdiTkUsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTVyA9IGRvdCggcmdiU1csIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTRSA9IGRvdCggcmdiU0UsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNICA9IGRvdCggcmdiTSwgIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNaW4gPSBtaW4oIGx1bWFNLCBtaW4oIG1pbiggbHVtYU5XLCBsdW1hTkUgKSwgbWluKCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNYXggPSBtYXgoIGx1bWFNLCBtYXgoIG1heCggbHVtYU5XLCBsdW1hTkUpICwgbWF4KCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIGRpcjtcIixcclxuXHRcdFx0XHRcImRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcIixcclxuXHRcdFx0XHRcImRpci55ID0gICgobHVtYU5XICsgbHVtYVNXKSAtIChsdW1hTkUgKyBsdW1hU0UpKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkaXJSZWR1Y2UgPSBtYXgoICggbHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFICkgKiAoIDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwgKSwgRlhBQV9SRURVQ0VfTUlOICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKCBtaW4oIGFicyggZGlyLnggKSwgYWJzKCBkaXIueSApICkgKyBkaXJSZWR1Y2UgKTtcIixcclxuXHRcdFx0XHRcImRpciA9IG1pbiggdmVjMiggRlhBQV9TUEFOX01BWCwgIEZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0ICBcIm1heCggdmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZGlyICogcmNwRGlyTWluKSkgKiByZXNvbHV0aW9uO1wiLFxyXG5cdFx0XHRcdFwidmVjNCByZ2JBID0gKDEuMC8yLjApICogKFwiLFxyXG5cdCAgICAgICAgXHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDEuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0XHRcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgyLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJ2ZWM0IHJnYkIgPSByZ2JBICogKDEuMC8yLjApICsgKDEuMC80LjApICogKFwiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMC4wLzMuMCAtIDAuNSkpICtcIixcclxuXHQgICAgICBcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgzLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJmbG9hdCBsdW1hQiA9IGRvdChyZ2JCLCB2ZWM0KGx1bWEsIDAuMCkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmICggKCBsdW1hQiA8IGx1bWFNaW4gKSB8fCAoIGx1bWFCID4gbHVtYU1heCApICkge1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQTtcIixcclxuXHJcblx0XHRcdFx0XCJ9IGVsc2Uge1wiLFxyXG5cdFx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSByZ2JCO1wiLFxyXG5cclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5NYXNrUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuaW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5NYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHQvLyBkb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSApO1xyXG5cdFx0XHRjb250ZXh0LmRlcHRoTWFzayggZmFsc2UgKTtcclxuXHJcblx0XHRcdC8vIHNldCB1cCBzdGVuY2lsXHJcblxyXG5cdFx0XHR2YXIgd3JpdGVWYWx1ZSwgY2xlYXJWYWx1ZTtcclxuXHJcblx0XHRcdGlmICggdGhpcy5pbnZlcnNlICkge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMDtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdyaXRlVmFsdWUgPSAxO1xyXG5cdFx0XHRcdGNsZWFyVmFsdWUgPSAwO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29udGV4dC5lbmFibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmICk7XHJcblx0XHRcdGNvbnRleHQuY2xlYXJTdGVuY2lsKCBjbGVhclZhbHVlICk7XHJcblxyXG5cdFx0XHQvLyBkcmF3IGludG8gdGhlIHN0ZW5jaWwgYnVmZmVyXHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHQvLyByZS1lbmFibGUgdXBkYXRlIG9mIGNvbG9yIGFuZCBkZXB0aFxyXG5cclxuXHRcdFx0Y29udGV4dC5jb2xvck1hc2soIHRydWUsIHRydWUsIHRydWUsIHRydWUgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIHRydWUgKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgcmVuZGVyIHdoZXJlIHN0ZW5jaWwgaXMgc2V0IHRvIDFcclxuXHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTsgIC8vIGRyYXcgaWYgPT0gMVxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuQ2xlYXJNYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHRjb250ZXh0LmRpc2FibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHJcblx0VEhSRUUuUmVuZGVyUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSBvdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IGNsZWFyQ29sb3I7XHJcblx0XHR0aGlzLmNsZWFyQWxwaGEgPSAoIGNsZWFyQWxwaGEgIT09IHVuZGVmaW5lZCApID8gY2xlYXJBbHBoYSA6IDE7XHJcblxyXG5cdFx0dGhpcy5vbGRDbGVhckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XHJcblx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSAxO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMub2xkQ2xlYXJDb2xvci5jb3B5KCByZW5kZXJlci5nZXRDbGVhckNvbG9yKCkgKTtcclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSByZW5kZXJlci5nZXRDbGVhckFscGhhKCk7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMuY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5vbGRDbGVhckNvbG9yLCB0aGlzLm9sZENsZWFyQWxwaGEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cdFxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlNoYWRlclBhc3MgPSBmdW5jdGlvbiAoIHNoYWRlciwgdGV4dHVyZUlEICkge1xyXG5cclxuXHRcdHRoaXMudGV4dHVyZUlEID0gKCB0ZXh0dXJlSUQgIT09IHVuZGVmaW5lZCApID8gdGV4dHVyZUlEIDogXCJ0RGlmZnVzZVwiO1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblxyXG5cdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyXHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IGZhbHNlO1xyXG5cclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0xLCAxLCAxLCAtMSwgMCwgMSApO1xyXG5cdFx0dGhpcy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoIHRoaXMucXVhZCApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXSApIHtcclxuXHJcblx0XHRcdFx0dGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXS52YWx1ZSA9IHJlYWRCdWZmZXI7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnJlbmRlclRvU2NyZWVuICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIl19
