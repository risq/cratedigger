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


    /*==========  DOM container elements  ==========*/

    rootContainerElement,
    canvasContainerElement,
    loadingContainerElement,
    infoContainerElement,
    titleInfoElement,
    artistInfoElement,
    coverInfoElement,


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

var animate = function () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( Constants.debug ) {

            stats.update();

        }
    }
};

var render = function () {

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
var unloadRecords = function () {

    for ( var i = 0; i < records.length; i++ ) {

        records[ i ].data = null;
        records[ i ].setUnactive();

    }

    loadedRecords = 0;
    recordsDataList = [];

};


var loadRecords = function ( recordsData, shuffleBeforeLoading, done ) {

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

var shuffleRecords = function () {

    var shuffledRecords = recordsDataList;
    shuffledRecords = shuffle( shuffledRecords );
    loadRecords( shuffledRecords );

};


/*=================================================
=            RECORDS SELECTION METHODS            =
=================================================*/


var selectRecord = function ( id ) {

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        selectedRecord = id;

    }
};

var flipSelectedRecord = function () {

    if ( records[ selectedRecord ] ) {

        fillInfoPanel( records[ selectedRecord ] );
        infoPanelState = 'opening';

        records[ selectedRecord ].flipRecord( function () {

            infoPanelState = 'opened';

        } );

        Constants.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( infoContainerElement );

        }, 300 );
    }
};

var flipBackSelectedRecord = function (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( infoContainerElement );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            Constants.onInfoPanelClosed();

        }, force );
    }
};

var updateShownRecord = function () {

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

var resetShownRecord = function ( force ) {

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

var selectPrevRecord = function () {

    selectRecord(getPrevAvailableRecord(selectedRecord));
    
};

var selectNextRecord = function () {

    selectRecord(getNextAvailableRecord(selectedRecord));

};

var getPrevAvailableRecord = function (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord < loadedRecords - 1 ) {

        fromRecord = fromRecord + 1;

    } else {

        fromRecord = 0;

    }

    return records[ fromRecord ].active ? fromRecord : getPrevAvailableRecord(fromRecord);
    
};

var getNextAvailableRecord = function (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord > 0 ) {

        fromRecord = fromRecord - 1;

    } else {

        fromRecord = loadedRecords - 1;

    }

    return records[ fromRecord ].active ? fromRecord : getNextAvailableRecord(fromRecord);

};

var navigateRecords = function ( direction ) {

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

var scrollRecords = function ( baseY, oldDelta ) {

    oldDelta = !oldDelta || Math.abs( oldDelta ) > 0.5 ? 0.5 : Math.abs( oldDelta );
    var inverseDelta = 1 - oldDelta;
    var scrollSpeed = inverseDelta * inverseDelta * inverseDelta * 300;

    scrollRecordsTimeout = setTimeout( function () {
        renderer.domElement.classList.add('grab');
        var delta = ( baseY - mouse.y ) / canvasHeight;

        if ( delta > 0 ) {

            selectNextRecord();

        } else if ( delta < 0 ) {

            selectPrevRecord();

        }

        scrollRecords( baseY, delta );

    }, scrollSpeed );

};

var fillInfoPanel = function ( record ) {

    if ( record.data.title ) {

        titleInfoElement.innerHTML = record.data.title;

    }

    if ( record.data.artist ) {

        artistInfoElement.innerHTML = record.data.artist;

    }

    if ( record.data.cover ) {

        coverInfoElement.style.backgroundImage = 'url(' + record.data.cover + ')';

    }
};


/*=======================================
=            EVENTS HANDLING            =
=======================================*/


var onMouseMoveEvent = function ( e ) {

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

var onScrollEvent = function ( e ) {


    if ( wheelDirection( e ) < 0 ) {

        navigateRecords( 'prev' );

    } else {

        navigateRecords( 'next' );

    }

    return false;
};

var onClickEvent = function ( mouseDownPos ) {

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

var onMouseDownEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( mouse.y );

    } 

    mouseDownPos = {
        x: mouse.x,
        y: mouse.y
    };
};

var onMouseUpEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
    if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

        onClickEvent( mouseDownPos );

    }

};

var onKeyDownEvent = function ( e ) {

    if ( e.keyCode === 37 || e.keyCode === 38 ) {

        navigateRecords( 'next' );

    } else if ( e.keyCode === 39 || e.keyCode === 40 ) {

        navigateRecords( 'prev' );

    }
};

var onWindowResizeEvent = function ( e ) {

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


var showLoading = function ( done ) {

    fadeIn( loadingContainerElement );
    setTimeout(done, 1000);

};

var hideLoading = function ( done ) {

    fadeOut( loadingContainerElement );
    setTimeout(done, 1000);

};




/*======================================
=            INITIALISATION            =
======================================*/


var initScene = function () {

    // scene, renderer, camera,...
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( {
        antialias: true
    } );
    renderer.setSize( canvasWidth, canvasHeight );

    canvasContainerElement.appendChild( renderer.domElement );
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

    rootContainerElement.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousewheel', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousemove', onMouseMoveEvent, false );
    rootContainerElement.addEventListener( 'mousedown', onMouseDownEvent, false );
    rootContainerElement.addEventListener( 'mouseup', onMouseUpEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( Constants.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }

    // DOM setup
    rootContainerElement.style.position = 'relative';
    canvasContainerElement.style.position = 'absolute';
    infoContainerElement.style.position = 'absolute';
    loadingContainerElement.style.position = 'absolute';

    setCanvasDimensions();

    hideElement(infoContainerElement);

    if ( Constants.debug ) {

        initDebug();
        initGUI();

    }

    resetShownRecord();
    animate();
};

var initPostProcessing = function () {

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

var initDebug = function () {

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = "0";
    stats.domElement.style.top = "0";
    rootContainerElement.appendChild( stats.domElement );

    var debug = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20, 1, 1, 1 ) );
    debug.position.set(
        light.position.x,
        light.position.y,
        light.position.z
    );
    scene.add( debug );

};

var initGUI = function () {

    var cameraFolder,
        cameraFocalLength,
        dofFolder,
        _last;

    gui = new dat.GUI();

    if ( Constants.postprocessing ) {

        cameraFolder = gui.addFolder( 'Camera' );
        cameraFocalLength = cameraFolder.add( camera, 'focalLength', 28, 200 ).name( 'Focal Length' );
        cameraFocalLength.onChange( updateCamera );

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

var updateCamera = function () {

    camera.setLens( camera.focalLength, camera.frameSize );
    camera.updateProjectionMatrix();
    dof.uniforms.focalLength.value = camera.focalLength;

};

var initCrates = function () {

    for ( var crateId = 0; crateId < Constants.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * Constants.nbCrates ) ) / 2;

};

var createCrate = function ( id ) {

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

var initRecords = function () {

    var currentRecordId = 0;
    for ( var crateId = 0; crateId < crates.length; crateId++ ) {

        for ( var pos = 0; pos < Constants.recordsPerCrate; pos++ ) {
            createRecord( currentRecordId, crateId, pos );
            currentRecordId++;
        }
    }
};

var createRecord = function ( id, crateId, pos ) {

    var record = new Record( id, crateId, pos );
    crates[ crateId ].add( record.mesh );
    records.push( record );

};

var getRecordMaterial = function ( src, hasSleeve ) {

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


var wheelDistance = function ( e ) {

    if ( !e ) e = event;
    var w = e.wheelDelta,
        d = e.detail;
    if ( d ) {

        if ( w ) return w / d / 40 * d > 0 ? 1 : -1; // Opera
        else return -d / 3; // Firefox;

    } else return w / 120; // IE/Safari/Chrome
};

var wheelDirection = function ( e ) {

    if ( !e ) e = event;
    return ( e.detail < 0 ) ? 1 : ( e.wheelDelta > 0 ) ? 1 : -1;

};

var coordsEqualsApprox = function ( coord1, coord2, range ) {

    return ( Math.abs( coord1.x - coord2.x ) <= range ) && ( Math.abs( coord1.y - coord2.y ) <= range );

};

var fadeOut = function ( element ) {

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

var fadeIn = function ( element ) {

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

function onFadeComplete( e ) {

    e.target.removeEventListener(e.type, onFadeComplete);
    if ( e.target.style.opacity === '0' ) {

        e.target.style.display = 'none';

    } else {

        e.target.style.display = 'block';

    }
}


var hideElement = function( element ) {

    element.style.opacity = 0;
    element.style.display = 'none';

}

var showElement = function( element ) {

    element.style.display = 'block';
    element.style.opacity = 1;

}

var getTransitionEvent = function () {
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

var calculateCanvasSize = function () {

    canvasWidth = Constants.canvasWidth ? Constants.canvasWidth : rootContainerElement.clientWidth;
    canvasHeight = Constants.canvasHeight ? Constants.canvasHeight : rootContainerElement.clientHeight;

};

var setCanvasDimensions = function () {

    //rootContainerElement.style.height     = canvasHeight + 'px';
    canvasContainerElement.style.height = canvasHeight + 'px';
    infoContainerElement.style.height = canvasHeight + 'px';
    loadingContainerElement.style.height = canvasHeight + 'px';

    //rootContainerElement.style.width     = canvasWidth + 'px';
    canvasContainerElement.style.width = canvasWidth + 'px';
    infoContainerElement.style.width = canvasWidth + 'px';
    loadingContainerElement.style.width = canvasWidth + 'px';

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

    rootContainerElement = document.getElementById( Constants.elements.rootContainerId );
    if ( !rootContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }
    canvasContainerElement = document.getElementById( Constants.elements.canvasContainerId );
    if ( !canvasContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }
    loadingContainerElement = document.getElementById( Constants.elements.loadingContainerId );
    if ( !loadingContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }
    infoContainerElement = document.getElementById( Constants.elements.infoContainerId );
    if ( !infoContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
        return;

    }
    titleInfoElement = document.getElementById( Constants.elements.titleContainerId );
    if ( !titleInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record title container element.' );
        return;

    }
    artistInfoElement = document.getElementById( Constants.elements.artistContainerId );
    if ( !artistInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record artist container element.' );
        return;

    }
    coverInfoElement = document.getElementById( Constants.elements.coverContainerId );
    if ( !coverInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find cover image container element.' );
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICsgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5yZXNldENhbWVyYSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG5cclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBzY2VuZSBjbGljayBldmVudCBvbmx5IGlmIG1vdXNldXAgZXZlbnQgaXMgbm90IGEgZHJhZyBlbmQgZXZlbnQgJiBub3QgYSBjbGljayBvbiBhIGxpbmtcclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIG9uS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25XaW5kb3dSZXNpemVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGhpZGVFbGVtZW50KGluZm9Db250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBDb25zdGFudHMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG52YXIgdXBkYXRlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRDcmF0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UmVjb3JkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSApIHtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG4gICAgaWYgKCBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgKSB7XHJcblxyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxudmFyIGhpZGVFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbn1cclxuXHJcbnZhciBzaG93RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxufVxyXG5cclxudmFyIGdldFRyYW5zaXRpb25FdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0LFxyXG4gICAgICAgIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5ib2R5LnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBDb25zdGFudHMuY2FudmFzV2lkdGggPyBDb25zdGFudHMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IENvbnN0YW50cy5jYW52YXNIZWlnaHQgPyBDb25zdGFudHMuY2FudmFzSGVpZ2h0IDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbnZhciBzZXRDYW52YXNEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIENvbnN0YW50cy5leHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXJvb3RDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhaW5mb0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0aXRsZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY292ZXJDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY292ZXJJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY292ZXIgaW1hZ2UgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiXX0=
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
	target;

function init(ratio) {

	camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
    //        scene.add(target);
    camera.lookAt( target.position );

}

function focusRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
	    .to( {
	        x: recordXPos,
	        y: 50 + Constants.scene.recordShownY,
	        z: recordAbsolutePos.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();

	new TWEEN.Tween( camera.position )
	    .to( {
	        x: recordXPos + Constants.scene.cameraFocusPosition.x,
	        y: Constants.scene.cameraFocusPosition.y,
	        z: recordAbsolutePos.z + Constants.scene.cameraFocusPosition.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomInRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
        .to( {
            x: recordXPos,
            y: Constants.scene.recordFlippedY + 50,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()

    new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x + 80,
            y: Constants.scene.cameraFocusPosition.y - 50,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomOutRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
        .delay( Constants.scene.infoOpenTime / 2 )
        .to( {
            x: recordXPos,
            y: 75,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x,
            y: Constants.scene.cameraFocusPosition.y,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function resetCamera() {
	new TWEEN.Tween( target.position )
        .to( {
            x: Constants.scene.targetBasePosition.x,
            y: Constants.scene.targetBasePosition.y,
            z: Constants.scene.targetBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( camera.position )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9DYW1lcmFNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcblx0VFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuXHRDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxudmFyIGNhbWVyYSxcclxuXHR0YXJnZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2N1c1JlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuXHQgICAgLnRvKCB7XHJcblx0ICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG5cdCAgICAgICAgeTogNTAgKyBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZLFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG5cdCAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG5cdCAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuXHRuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcblx0ICAgIC50bygge1xyXG5cdCAgICAgICAgeDogcmVjb3JkWFBvcyArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcblx0ICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MueiArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuXHQgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuXHQgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gem9vbUluUmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21PdXRSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDYW1lcmEoKSB7XHJcblx0bmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhQXNwZWN0KHJhdGlvKSB7XHJcblx0Y2FtZXJhLmFzcGVjdCA9IHJhdGlvO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9va0F0VGFyZ2V0KCkge1xyXG5cdGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbml0OiBpbml0LFxyXG5cdGZvY3VzUmVjb3JkOiBmb2N1c1JlY29yZCxcclxuXHR6b29tSW5SZWNvcmQ6IHpvb21JblJlY29yZCxcclxuXHR6b29tT3V0UmVjb3JkOiB6b29tT3V0UmVjb3JkLFxyXG5cdHJlc2V0Q2FtZXJhOiByZXNldENhbWVyYSxcclxuXHR1cGRhdGVDYW1lcmFBc3BlY3Q6IHVwZGF0ZUNhbWVyYUFzcGVjdCxcclxuXHRsb29rQXRUYXJnZXQ6IGxvb2tBdFRhcmdldCxcclxuXHRcclxuXHRnZXRDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGNhbWVyYTtcclxuXHR9LFxyXG5cdGdldFRhcmdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufSJdfQ==
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
        rootContainerId: 'cratedigger',
        canvasContainerId: 'cratedigger-canvas',
        loadingContainerId: 'cratedigger-loading',
        infoContainerId: 'cratedigger-info',
        titleContainerId: 'cratedigger-record-title',
        artistContainerId: 'cratedigger-record-artist',
        coverContainerId: 'cratedigger-record-cover'
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
            x: 160,
            y: 190,
            z: 85
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

    if ( this.state !== 'shown' ) {

        this.state = 'shown';
        this.absolutePosition.setFromMatrixPosition( this.mesh.matrixWorld );

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordShownY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
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

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    new TWEEN.Tween( this.mesh.position )
        .to( {
            y: Constants.scene.recordFlippedY
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( this.mesh.rotation )
        .delay( Constants.scene.infoOpenTime / 4 )
        .to( {
            y: Math.PI
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    CameraManager.zoomInRecord(this.recordXPos, this.absolutePosition);
};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        new TWEEN.Tween( this.mesh.position )
            .delay( Constants.scene.infoOpenTime / 2 )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9SZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuXHJcbiAgICBDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpLFxyXG4gICAgQ2FtZXJhTWFuYWdlciA9IHJlcXVpcmUoJy4vQ2FtZXJhTWFuYWdlcicpO1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBcclxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBDb25zdGFudHMuc2xlZXZlQ29sb3JcclxuICAgICAgICB9KSlcclxuICAgICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIENhbWVyYU1hbmFnZXIuZm9jdXNSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci56b29tSW5SZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDYW1lcmFNYW5hZ2VyLnpvb21PdXRSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY29yZDsiXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3JhdGVkaWdnZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3RhdHMtanMvYnVpbGQvc3RhdHMubWluLmpzIiwibm9kZV9tb2R1bGVzL3R3ZWVuLmpzL2luZGV4LmpzIiwic3JjL2NyYXRlZGlnZ2VyL0NhbWVyYU1hbmFnZXIuanMiLCJzcmMvY3JhdGVkaWdnZXIvQ29uc3RhbnRzLmpzIiwic3JjL2NyYXRlZGlnZ2VyL1JlY29yZC5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3Nlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2g0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKlxyXG4gICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgIC86OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgIC86Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgLzo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgLzo6Ojo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgIC86OjovXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgLzo6Oi9+flxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAvOjo6L19fXFw6OjpcXCAgICBcXCAvOjo6LyAgICBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgLzo6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6OjovICAgIC8gXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgLzo6Ojo6OlxcICAgXFw6OjpcXCAgICBcXF9fICAgIC86Ojo6OjpcXCAgICBcXF9cXDo6OlxcICAgXFw6OjpcXCAgICBcXDovX19fXy8gICBcXDo6OlxcX19fX1xcXHJcbiAgICAgICAgIC86OjovXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgXFwgIC86OjovXFw6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgICB8ICAgICB8Ojo6fCAgICB8XHJcbiAgICAgICAgLzo6Oi8gIFxcOjo6XFwgICBcXDo6OnwgICAgfCBcXC86OjovICBcXDo6OlxcX19fX1xcIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcX19ffCAgICAgfDo6OnxfX19ffFxyXG4gICAgICAgIFxcOjovICAgfDo6OjpcXCAgLzo6OnxfX19ffCAvOjo6LyAgICBcXDo6LyAgICAvICBcXDo6OlxcICAgXFw6Oi8gICAgLyAgIF9cXF9fXy86OjovICAgIC9cclxuICAgICAgICAgXFwvX19fX3w6Ojo6OlxcLzo6Oi8gICAgL1xcLzo6Oi8gICAgLyBcXC9fX19fL1xcICAgXFw6OjpcXCAgIFxcL19fX18vOlxcIHw6OnwgLzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojo6Ojo6Ojo6LyAgICAvOjo6OjovICAgIC8gICAgICBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgXFw6OjpcXHw6OnwvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnxcXDo6OjovICAgIC9cXDo6OjovX19fXy8gICAgICAgIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcICBcXDo6Ojo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCBcXDo6L19fX18vICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgLzo6Oi8gICAgLyAgIFxcOjo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgfnwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXC86OjovICAgIC8gICAgIFxcOjo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgICB8ICAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6Ojo6Oi8gICAgLyAgICAgICBcXDo6OjovX19fXy9cclxuICAgICAgICAgICAgICAgXFw6OnwgICB8ICAgICAgICAgICBcXDo6OlxcX19fX1xcICAgICAgICAgXFw6Ojo6LyAgICAvICAgICAgICAgfDo6fCAgICB8XHJcbiAgICAgICAgICAgICAgICBcXDp8ICAgfCAgICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICB8Ojp8X19fX3xcclxuICAgICAgICAgICAgICAgICBcXHxfX198ICAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICB+flxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAuX19fLl9fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX1xyXG4gICAgICAgX19fX19fX19fX19fX19fXyBfLyAgfF8gIF9fX18gICBfX3wgXy98X198IF9fX18gICBfX19fICAgX19fX19fX19fX18gICAgICAgfF9ffCBfX19fX19cclxuICAgICBfLyBfX19cXF8gIF9fIFxcX18gIFxcXFwgICBfX1xcLyBfXyBcXCAvIF9fIHwgfCAgfC8gX19fXFwgLyBfX19cXF8vIF9fIFxcXyAgX18gXFwgICAgICB8ICB8LyAgX19fL1xyXG4gICAgIFxcICBcXF9fX3wgIHwgXFwvLyBfXyBcXHwgIHwgXFwgIF9fXy8vIC9fLyB8IHwgIC8gL18vICA+IC9fLyAgPiAgX19fL3wgIHwgXFwvICAgICAgfCAgfFxcX19fIFxcXHJcbiAgICAgIFxcX19fICA+X198ICAoX19fXyAgL19ffCAgXFxfX18gID5fX19fIHwgfF9fXFxfX18gIC9cXF9fXyAgLyBcXF9fXyAgPl9ffCAgL1xcIC9cXF9ffCAgL19fX18gID5cclxuICAgICAgICAgIFxcLyAgICAgICAgICAgXFwvICAgICAgICAgIFxcLyAgICAgXFwvICAgL19fX19fLy9fX19fXy8gICAgICBcXC8gICAgICBcXC8gXFxfX19fX198ICAgIFxcL1xyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBjcmF0ZWRpZ2dlci5qcyB2MC4wLjEgLSBieSByaXNxIChWYWxlbnRpbiBMZWRyYXBpZXIpICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcbiAgICBUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcbiAgICBTdGF0cyA9IHJlcXVpcmUoJ3N0YXRzLWpzJyksXHJcbiAgICBNb2Rlcm5penIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snTW9kZXJuaXpyJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydNb2Rlcm5penInXSA6IG51bGwpLFxyXG4gICAgZGF0ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2RhdCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnZGF0J10gOiBudWxsKSxcclxuXHJcbiAgICBSZWNvcmQgPSByZXF1aXJlKCcuL1JlY29yZCcpLFxyXG4gICAgQ2FtZXJhTWFuYWdlciA9IHJlcXVpcmUoJy4vQ2FtZXJhTWFuYWdlcicpLFxyXG4gICAgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcclxuXHJcbi8qPT09PT09PT09PSAgSW5qZWN0IGFsbCBleHRlcm5hbCBtb2R1bGVzIHRvIFRIUkVFLmpzID09PT09PT09PT0qL1xyXG5cclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXInKShUSFJFRSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVkFSSUFCTEVTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxudmFyIGV4cG9ydHMgPSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERPTSBjb250YWluZXIgZWxlbWVudHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LFxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LFxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICB0aXRsZUluZm9FbGVtZW50LFxyXG4gICAgYXJ0aXN0SW5mb0VsZW1lbnQsXHJcbiAgICBjb3ZlckluZm9FbGVtZW50LFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHN0YXRzLFxyXG4gICAgc2NlbmUsXHJcbiAgICBjYW1lcmEsXHJcbiAgICByZW5kZXJlcixcclxuICAgIGxpZ2h0LFxyXG4gICAgbGVmdExpZ2h0LFxyXG4gICAgcmlnaHRMaWdodCxcclxuICAgIGNvbXBvc2VyLFxyXG4gICAgRlhBQSxcclxuICAgIGRvZixcclxuICAgIGd1aSxcclxuICAgIGRlcHRoVGFyZ2V0LFxyXG4gICAgZGVwdGhTaGFkZXIsXHJcbiAgICBkZXB0aFVuaWZvcm1zLFxyXG4gICAgZGVwdGhNYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWw7XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggZG9SZW5kZXIgKSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmUgKSB7XHJcblxyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy54ID0gKCBtb3VzZS54IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7IC8vIGludmVyc2UgYXhpcz9cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueSA9ICggbW91c2UueSAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1O1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueSArPSBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW91c2VNb3ZlU3BlZWRaICogKCB0YXJnZXRDYW1lcmFQb3MueSAtIHJvb3RDb250YWluZXIucm90YXRpb24ueiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmxvb2tBdFRhcmdldCgpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gZGVwdGhNYXRlcmlhbDtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIGRlcHRoVGFyZ2V0ICk7XHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogTG9hZGluZyBtZXRob2RzXHJcbiAqL1xyXG52YXIgdW5sb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IG51bGw7XHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLnNldFVuYWN0aXZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFJlY29yZHMgPSAwO1xyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW107XHJcblxyXG59O1xyXG5cclxuXHJcbnZhciBsb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICggcmVjb3Jkc0RhdGEsIHNodWZmbGVCZWZvcmVMb2FkaW5nLCBkb25lICkge1xyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoIHRydWUgKTtcclxuXHJcbiAgICBzaG93TG9hZGluZyggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGlmICggbG9hZGVkUmVjb3JkcyA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmxvYWRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzaHVmZmxlQmVmb3JlTG9hZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZHNEYXRhID0gc2h1ZmZsZSggcmVjb3Jkc0RhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aCAmJiBpIDwgcmVjb3Jkc0RhdGEubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IHJlY29yZHNEYXRhWyBpIF07XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLm1lc2gubWF0ZXJpYWwubWF0ZXJpYWxzID0gZ2V0UmVjb3JkTWF0ZXJpYWwoIHJlY29yZHNEYXRhWyBpIF0uY292ZXIsIHJlY29yZHNEYXRhWyBpIF0uaGFzU2xlZXZlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2h5ID8/XHJcbiAgICAgICAgLy8gbG9hZGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhLmxlbmd0aCA8IHJlY29yZHMubGVuZ3RoID8gcmVjb3Jkc0RhdGEubGVuZ3RoIDogcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgbG9hZGVkUmVjb3JkcyA9IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIHJlY29yZHNEYXRhTGlzdCA9IHJlY29yZHNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKGRvbmUpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgIH0sIDMwMDAgKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbnZhciBzaHVmZmxlUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2h1ZmZsZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGFMaXN0O1xyXG4gICAgc2h1ZmZsZWRSZWNvcmRzID0gc2h1ZmZsZSggc2h1ZmZsZWRSZWNvcmRzICk7XHJcbiAgICBsb2FkUmVjb3Jkcyggc2h1ZmZsZWRSZWNvcmRzICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUkVDT1JEUyBTRUxFQ1RJT04gTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKSB7XHJcblxyXG4gICAgICAgIGZpbGxJbmZvUGFuZWwoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggaW5mb0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgdXBkYXRlU2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZXNldFNob3duUmVjb3JkID0gZnVuY3Rpb24gKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBcclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLnJlc2V0Q2FtZXJhKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgc2VsZWN0UHJldlJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgc2VsZWN0TmV4dFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIGdldE5leHRBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbnZhciBuYXZpZ2F0ZVJlY29yZHMgPSBmdW5jdGlvbiAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgc2Nyb2xsUmVjb3JkcyA9IGZ1bmN0aW9uICggYmFzZVksIG9sZERlbHRhICkge1xyXG5cclxuICAgIG9sZERlbHRhID0gIW9sZERlbHRhIHx8IE1hdGguYWJzKCBvbGREZWx0YSApID4gMC41ID8gMC41IDogTWF0aC5hYnMoIG9sZERlbHRhICk7XHJcbiAgICB2YXIgaW52ZXJzZURlbHRhID0gMSAtIG9sZERlbHRhO1xyXG4gICAgdmFyIHNjcm9sbFNwZWVkID0gaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogMzAwO1xyXG5cclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JhYicpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9ICggYmFzZVkgLSBtb3VzZS55ICkgLyBjYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggYmFzZVksIGRlbHRhICk7XHJcblxyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmlsbEluZm9QYW5lbCA9IGZ1bmN0aW9uICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS5hcnRpc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuY292ZXIgKSB7XHJcblxyXG4gICAgICAgIGNvdmVySW5mb0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIG9uTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG52YXIgb25TY3JvbGxFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgb25DbGlja0V2ZW50ID0gZnVuY3Rpb24gKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIENvbnN0YW50cy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBtb3VzZS55ICk7XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICB5OiBtb3VzZS55XHJcbiAgICB9O1xyXG59O1xyXG5cclxudmFyIG9uTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWInKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIHNjZW5lIGNsaWNrIGV2ZW50IG9ubHkgaWYgbW91c2V1cCBldmVudCBpcyBub3QgYSBkcmFnIGVuZCBldmVudCAmIG5vdCBhIGNsaWNrIG9uIGEgbGlua1xyXG4gICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIENvbnN0YW50cy5zY2VuZS5ncmFiU2Vuc2l0aXZpdHkgKSAmJiAhKCBlLnRhcmdldCAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSApICkge1xyXG5cclxuICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgb25LZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBDYW1lcmFNYW5hZ2VyLnVwZGF0ZUNhbWVyYUFzcGVjdCggY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgICBVSSBNRVRIT0RTICAgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZUluKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgc2V0VGltZW91dChkb25lLCAxMDAwKTtcclxuXHJcbn07XHJcblxyXG52YXIgaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgaW5pdFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggQ29uc3RhbnRzLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIENhbWVyYU1hbmFnZXIuaW5pdChjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCk7XHJcbiAgICBjYW1lcmEgPSBDYW1lcmFNYW5hZ2VyLmdldENhbWVyYSgpO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBDb25zdGFudHMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAxLjEgKTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCggMzAwLCA4MCwgMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsaWdodCApO1xyXG5cclxuICAgIGxlZnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcEV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy51cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemUgKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRE9NIHNldHVwXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaGlkZUVsZW1lbnQoaW5mb0NvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbnZhciBpbml0UG9zdFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IENvbnN0YW50cy5ibHVyQW1vdW50OyAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudGhyZXNob2xkLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG4gICAgZG9mLnVuaWZvcm1zLmdhaW4udmFsdWUgPSAwOyAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5iaWFzLnZhbHVlID0gMDsgLy9ib2tlaCBlZGdlIGJpYXMgICAgICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZyaW5nZS52YWx1ZSA9IDA7IC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcbiAgICBGWEFBID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkZYQUFTaGFkZXIgKTtcclxuXHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIGRvZiApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggRlhBQSApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0RGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICB2YXIgZGVidWcgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMCwgMjAsIDIwLCAxLCAxLCAxICkgKTtcclxuICAgIGRlYnVnLnBvc2l0aW9uLnNldChcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi54LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uelxyXG4gICAgKTtcclxuICAgIHNjZW5lLmFkZCggZGVidWcgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdEdVSSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY2FtZXJhRm9sZGVyLFxyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLFxyXG4gICAgICAgIGRvZkZvbGRlcixcclxuICAgICAgICBfbGFzdDtcclxuXHJcbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbnZhciB1cGRhdGVDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdENyYXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBDb25zdGFudHMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogQ29uc3RhbnRzLm5iQ3JhdGVzICkgKSAvIDI7XHJcblxyXG59O1xyXG5cclxudmFyIGNyZWF0ZUNyYXRlID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcbiAgICB2YXIgYm94X2JvdHRvbSA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYm90dG9tICk7XHJcblxyXG4gICAgdmFyIGJveF9sZWZ0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2xlZnQucG9zaXRpb24uc2V0KCAwLCAzNSwgLTU1ICk7XHJcbiAgICBib3hfbGVmdC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfbGVmdCApO1xyXG5cclxuICAgIGlmICggaWQgPT09IDAgKSB7XHJcbiAgICAgICAgdmFyIGJveF9yaWdodCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgICAgICBib3hfcmlnaHQucG9zaXRpb24uc2V0KCAwLCAzNSwgNTUgKTtcclxuICAgICAgICBib3hfcmlnaHQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9yaWdodCApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBib3hfYmFjayA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDgwLCAxMCwgMTIwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9iYWNrLnBvc2l0aW9uLnNldCggLTEwNSwgMzUsIDAgKTtcclxuICAgIGJveF9iYWNrLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9iYWNrICk7XHJcblxyXG4gICAgdmFyIGJveF9mcm9udCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDQwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9mcm9udC5wb3NpdGlvbi5zZXQoIDk1LCAyNSwgMCApO1xyXG4gICAgYm94X2Zyb250LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9mcm9udCApO1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXS5wb3NpdGlvbi56ID0gLTExMCAqIGlkO1xyXG4gICAgcmV0dXJuIGNyYXRlc1sgaWQgXTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRSZWNvcmRJZCA9IDA7XHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBjcmF0ZXMubGVuZ3RoOyBjcmF0ZUlkKysgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBwb3MgPSAwOyBwb3MgPCBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRSZWNvcmRNYXRlcmlhbCA9IGZ1bmN0aW9uICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gQ29uc3RhbnRzLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBDb25zdGFudHMuc2xlZXZlQ29sb3JcclxuXHJcbiAgICB9ICk7XHJcblxyXG4gICAgdmFyIG1hdGVyaWFscyA9IFtcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICAvLyB0ZXh0dXJlXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBtYXA6IHRleHR1cmVcclxuICAgICAgICB9ICksXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWxcclxuICAgIF07XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxzO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBVVElMUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciB3aGVlbERpc3RhbmNlID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICB2YXIgdyA9IGUud2hlZWxEZWx0YSxcclxuICAgICAgICBkID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoIGQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdyApIHJldHVybiB3IC8gZCAvIDQwICogZCA+IDAgPyAxIDogLTE7IC8vIE9wZXJhXHJcbiAgICAgICAgZWxzZSByZXR1cm4gLWQgLyAzOyAvLyBGaXJlZm94O1xyXG5cclxuICAgIH0gZWxzZSByZXR1cm4gdyAvIDEyMDsgLy8gSUUvU2FmYXJpL0Nocm9tZVxyXG59O1xyXG5cclxudmFyIHdoZWVsRGlyZWN0aW9uID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICByZXR1cm4gKCBlLmRldGFpbCA8IDAgKSA/IDEgOiAoIGUud2hlZWxEZWx0YSA+IDAgKSA/IDEgOiAtMTtcclxuXHJcbn07XHJcblxyXG52YXIgY29vcmRzRXF1YWxzQXBwcm94ID0gZnVuY3Rpb24gKCBjb29yZDEsIGNvb3JkMiwgcmFuZ2UgKSB7XHJcblxyXG4gICAgcmV0dXJuICggTWF0aC5hYnMoIGNvb3JkMS54IC0gY29vcmQyLnggKSA8PSByYW5nZSApICYmICggTWF0aC5hYnMoIGNvb3JkMS55IC0gY29vcmQyLnkgKSA8PSByYW5nZSApO1xyXG5cclxufTtcclxuXHJcbnZhciBmYWRlT3V0ID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGlmIChlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09IDApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uRXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZhZGVJbiA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnJyB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09ICcxJykge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IGdldFRyYW5zaXRpb25FdmVudChlbGVtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfSwgMTUpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uRmFkZUNvbXBsZXRlKCBlICkge1xyXG5cclxuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50eXBlLCBvbkZhZGVDb21wbGV0ZSk7XHJcbiAgICBpZiAoIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPT09ICcwJyApIHtcclxuXHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG52YXIgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxufVxyXG5cclxudmFyIHNob3dFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG59XHJcblxyXG52YXIgZ2V0VHJhbnNpdGlvbkV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHQsXHJcbiAgICAgICAgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LmJvZHkuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY2FsY3VsYXRlQ2FudmFzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IENvbnN0YW50cy5jYW52YXNXaWR0aCA/IENvbnN0YW50cy5jYW52YXNXaWR0aCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gQ29uc3RhbnRzLmNhbnZhc0hlaWdodCA/IENvbnN0YW50cy5jYW52YXNIZWlnaHQgOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxudmFyIHNldENhbnZhc0RpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLmV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgaWYgKCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY2FudmFzQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGxvYWRpbmcgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLnRpdGxlQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXRpdGxlSW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCB0aXRsZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGFydGlzdEluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5hcnRpc3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhYXJ0aXN0SW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCBhcnRpc3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjb3ZlckluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgZ2V0dGVycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmdldENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFJlY29yZHNEYXRhTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc0RhdGFMaXN0O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0TG9hZGVkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUmVjb3JkcztcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT0gIE1ldGhvZHMgYWNjZXNzb3JzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMubG9hZFJlY29yZHMgPSBsb2FkUmVjb3JkcztcclxuZXhwb3J0cy51bmxvYWRSZWNvcmRzID0gdW5sb2FkUmVjb3JkcztcclxuZXhwb3J0cy5yZXNldFNob3duUmVjb3JkID0gcmVzZXRTaG93blJlY29yZDtcclxuZXhwb3J0cy5zaHVmZmxlUmVjb3JkcyA9IHNodWZmbGVSZWNvcmRzO1xyXG5leHBvcnRzLmZsaXBTZWxlY3RlZFJlY29yZCA9IGZsaXBTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5mbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZmxpcEJhY2tTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3RQcmV2UmVjb3JkID0gc2VsZWN0UHJldlJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3ROZXh0UmVjb3JkID0gc2VsZWN0TmV4dFJlY29yZDtcclxuZXhwb3J0cy5zaG93TG9hZGluZyA9IHNob3dMb2FkaW5nO1xyXG5leHBvcnRzLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFBVQkxJQyBBUEkgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTlmWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZklDQWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5ZlgxOWZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTDF4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUNBZ0wxeGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDQWdMMXhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQ0F2T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDODZPam82T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRndnSUNBZ0lDODZPam82T2pvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUM4Nk9qb3ZYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDODZPam92Zm41Y1hEbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDODZPam92WDE5Y1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0x6bzZPaTlmWDF4Y09qbzZYRndnSUNBZ1hGd2dMem82T2k4Z0lDQWdYRnc2T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQzg2T2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y09qbzZMeUFnSUNBdklGeGNPam82WEZ3Z0lDQWdYRnhjY2x4dUlDQWdJQ0FnSUNBZ0lDODZPam82T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ4Zlh5QWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGeGZYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3NkwxOWZYMTh2SUNBZ1hGdzZPanBjWEY5ZlgxOWNYRnh5WEc0Z0lDQWdJQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0JjWERvNk9seGNYMTlmWDF4Y0lGeGNJQ0F2T2pvNkwxeGNPam82WEZ3Z0lDQWdYRndnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnZkNBZ0lDQWdmRG82T253Z0lDQWdmRnh5WEc0Z0lDQWdJQ0FnSUM4Nk9qb3ZJQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcDhJQ0FnSUh3Z1hGd3ZPam82THlBZ1hGdzZPanBjWEY5ZlgxOWNYQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hGOWZYM3dnSUNBZ0lIdzZPanA4WDE5ZlgzeGNjbHh1SUNBZ0lDQWdJQ0JjWERvNkx5QWdJSHc2T2pvNlhGd2dJQzg2T2pwOFgxOWZYM3dnTHpvNk9pOGdJQ0FnWEZ3Nk9pOGdJQ0FnTHlBZ1hGdzZPanBjWENBZ0lGeGNPam92SUNBZ0lDOGdJQ0JmWEZ4ZlgxOHZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUZ4Y0wxOWZYMTk4T2pvNk9qcGNYQzg2T2pvdklDQWdJQzljWEM4Nk9qb3ZJQ0FnSUM4Z1hGd3ZYMTlmWHk5Y1hDQWdJRnhjT2pvNlhGd2dJQ0JjWEM5ZlgxOWZMenBjWENCOE9qcDhJQzg2T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNk9qbzZPam82T2k4Z0lDQWdMem82T2pvNkx5QWdJQ0F2SUNBZ0lDQWdYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lGeGNPam82WEZ4OE9qcDhMem82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOFhGdzZPam82THlBZ0lDQXZYRnc2T2pvNkwxOWZYMTh2SUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hDQWdYRnc2T2pvNk9qbzZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T253Z1hGdzZPaTlmWDE5Zkx5QWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUM4Nk9qb3ZJQ0FnSUM4Z0lDQmNYRG82T2pvNk9qbzZMeUFnSUNBdlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lIdzZPbndnSUg1OElDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd3ZPam82THlBZ0lDQXZJQ0FnSUNCY1hEbzZPam82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOElDQWdmQ0FnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPam82T2pvdklDQWdJQzhnSUNBZ0lDQWdYRnc2T2pvNkwxOWZYMTh2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4Y09qcDhJQ0FnZkNBZ0lDQWdJQ0FnSUNBZ1hGdzZPanBjWEY5ZlgxOWNYQ0FnSUNBZ0lDQWdJRnhjT2pvNk9pOGdJQ0FnTHlBZ0lDQWdJQ0FnSUh3Nk9ud2dJQ0FnZkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGdzZmQ0FnSUh3Z0lDQWdJQ0FnSUNBZ0lDQmNYRG82THlBZ0lDQXZJQ0FnSUNBZ0lDQWdJRnhjT2pvdklDQWdJQzhnSUNBZ0lDQWdJQ0FnZkRvNmZGOWZYMTk4WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeDhYMTlmZkNBZ0lDQWdJQ0FnSUNBZ0lDQmNYQzlmWDE5Zkx5QWdJQ0FnSUNBZ0lDQWdJRnhjTDE5ZlgxOHZJQ0FnSUNBZ0lDQWdJQ0FnZm41Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdMbDlmWHk1Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOWNjbHh1SUNBZ0lDQWdJRjlmWDE5ZlgxOWZYMTlmWDE5ZlgxOGdYeThnSUh4ZklDQmZYMTlmSUNBZ1gxOThJRjh2ZkY5ZmZDQmZYMTlmSUNBZ1gxOWZYeUFnSUY5ZlgxOWZYMTlmWDE5ZklDQWdJQ0FnSUh4Zlgzd2dYMTlmWDE5ZlhISmNiaUFnSUNBZ1h5OGdYMTlmWEZ4ZklDQmZYeUJjWEY5ZklDQmNYRnhjSUNBZ1gxOWNYQzhnWDE4Z1hGd2dMeUJmWHlCOElId2dJSHd2SUY5ZlgxeGNJQzhnWDE5ZlhGeGZMeUJmWHlCY1hGOGdJRjlmSUZ4Y0lDQWdJQ0FnZkNBZ2ZDOGdJRjlmWHk5Y2NseHVJQ0FnSUNCY1hDQWdYRnhmWDE5OElDQjhJRnhjTHk4Z1gxOGdYRng4SUNCOElGeGNJQ0JmWDE4dkx5QXZYeThnZkNCOElDQXZJQzlmTHlBZ1BpQXZYeThnSUQ0Z0lGOWZYeTk4SUNCOElGeGNMeUFnSUNBZ0lId2dJSHhjWEY5Zlh5QmNYRnh5WEc0Z0lDQWdJQ0JjWEY5Zlh5QWdQbDlmZkNBZ0tGOWZYMThnSUM5Zlgzd2dJRnhjWDE5ZklDQStYMTlmWHlCOElIeGZYMXhjWDE5ZklDQXZYRnhmWDE4Z0lDOGdYRnhmWDE4Z0lENWZYM3dnSUM5Y1hDQXZYRnhmWDN3Z0lDOWZYMTlmSUNBK1hISmNiaUFnSUNBZ0lDQWdJQ0JjWEM4Z0lDQWdJQ0FnSUNBZ0lGeGNMeUFnSUNBZ0lDQWdJQ0JjWEM4Z0lDQWdJRnhjTHlBZ0lDOWZYMTlmWHk4dlgxOWZYMTh2SUNBZ0lDQWdYRnd2SUNBZ0lDQWdYRnd2SUZ4Y1gxOWZYMTlmZkNBZ0lDQmNYQzljY2x4dVhISmNibHh5WEc0cUwxeHlYRzVjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdZM0poZEdWa2FXZG5aWEl1YW5NZ2RqQXVNQzR4SUMwZ1lua2djbWx6Y1NBb1ZtRnNaVzUwYVc0Z1RHVmtjbUZ3YVdWeUtTQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYmlkMWMyVWdjM1J5YVdOMEp6dGNjbHh1WEhKY2JuWmhjaUJVU0ZKRlJTQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdkMmx1Wkc5M1d5ZFVTRkpGUlNkZElEb2dkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lHZHNiMkpoYkZzblZFaFNSVVVuWFNBNklHNTFiR3dwTEZ4eVhHNGdJQ0FnVkZkRlJVNGdQU0J5WlhGMWFYSmxLQ2QwZDJWbGJpNXFjeWNwTEZ4eVhHNGdJQ0FnVTNSaGRITWdQU0J5WlhGMWFYSmxLQ2R6ZEdGMGN5MXFjeWNwTEZ4eVhHNGdJQ0FnVFc5a1pYSnVhWHB5SUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSjAxdlpHVnlibWw2Y2lkZElEb2dkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lHZHNiMkpoYkZzblRXOWtaWEp1YVhweUoxMGdPaUJ1ZFd4c0tTeGNjbHh1SUNBZ0lHUmhkQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRrWVhRblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkoyUmhkQ2RkSURvZ2JuVnNiQ2tzWEhKY2JseHlYRzRnSUNBZ1VtVmpiM0prSUQwZ2NtVnhkV2x5WlNnbkxpOVNaV052Y21RbktTeGNjbHh1SUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWElnUFNCeVpYRjFhWEpsS0NjdUwwTmhiV1Z5WVUxaGJtRm5aWEluS1N4Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3lBOUlISmxjWFZwY21Vb0p5NHZRMjl1YzNSaGJuUnpKeWs3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lFbHVhbVZqZENCaGJHd2daWGgwWlhKdVlXd2diVzlrZFd4bGN5QjBieUJVU0ZKRlJTNXFjeUE5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDFOb1lXUmxjbEJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMME52Y0hsVGFHRmtaWEluS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwxSmxibVJsY2xCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBSdlJsTm9ZV1JsY2ljcEtGUklVa1ZGS1R0Y2NseHVjbVZ4ZFdseVpTZ25MaTkwYUhKbFpXcHpYMjF2WkhWc1pYTXZSbGhCUVZOb1lXUmxjaWNwS0ZSSVVrVkZLVHRjY2x4dWNtVnhkV2x5WlNnbkxpOTBhSEpsWldwelgyMXZaSFZzWlhNdlRXRnphMUJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFZtWm1WamRFTnZiWEJ2YzJWeUp5a29WRWhTUlVVcE8xeHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZaQlVrbEJRa3hGVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiblpoY2lCbGVIQnZjblJ6SUQwZ2UzMHNJQzh2SUU5aWFtVmpkQ0JtYjNJZ2NIVmliR2xqSUVGUVNYTmNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JFVDAwZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5SeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFzWEhKY2JpQWdJQ0JzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMRnh5WEc0Z0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDeGNjbHh1SUNBZ0lHRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MExGeHlYRzRnSUNBZ1kyOTJaWEpKYm1adlJXeGxiV1Z1ZEN4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlVhSEpsWlM1cWN5QnZZbXBsWTNSeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCemRHRjBjeXhjY2x4dUlDQWdJSE5qWlc1bExGeHlYRzRnSUNBZ1kyRnRaWEpoTEZ4eVhHNGdJQ0FnY21WdVpHVnlaWElzWEhKY2JpQWdJQ0JzYVdkb2RDeGNjbHh1SUNBZ0lHeGxablJNYVdkb2RDeGNjbHh1SUNBZ0lISnBaMmgwVEdsbmFIUXNYSEpjYmlBZ0lDQmpiMjF3YjNObGNpeGNjbHh1SUNBZ0lFWllRVUVzWEhKY2JpQWdJQ0JrYjJZc1hISmNiaUFnSUNCbmRXa3NYSEpjYmlBZ0lDQmtaWEIwYUZSaGNtZGxkQ3hjY2x4dUlDQWdJR1JsY0hSb1UyaGhaR1Z5TEZ4eVhHNGdJQ0FnWkdWd2RHaFZibWxtYjNKdGN5eGNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3dzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1QySnFaV04wY3lBbUlHUmhkR0VnWVhKeVlYbHpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQmpjbUYwWlhNZ1BTQmJYU3hjY2x4dUlDQWdJSEpsWTI5eVpITWdQU0JiWFN4Y2NseHVJQ0FnSUhKbFkyOXlaSE5FWVhSaFRHbHpkQ0E5SUZ0ZExGeHlYRzVjY2x4dVhISmNiaUFnSUNBdktqMDlQVDA5UFQwOVBUMGdJRlJvY21WbExtcHpJRzlpYW1WamRITWdZMjl1ZEdGcGJtVnljeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2l4Y2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaXhjY2x4dUlDQWdJSEpsWTI5eVpITkRiMjUwWVdsdVpYSXNYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVTNSaGRHVnpMQ0IxZEdsc0lIWmhjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJR05oYm5aaGMxZHBaSFJvTEZ4eVhHNGdJQ0FnWTJGdWRtRnpTR1ZwWjJoMExGeHlYRzRnSUNBZ1pIQnlMRnh5WEc0Z0lDQWdjMk55YjJ4c1VtVmpiM0prYzFScGJXVnZkWFFzWEhKY2JpQWdJQ0JwYzB4dllXUnBibWNnUFNCbVlXeHpaU3hjY2x4dUlDQWdJR2x1Wm05UVlXNWxiRk4wWVhSbElEMGdYQ0pqYkc5elpXUmNJaXhjY2x4dUlDQWdJR2x6VTJOeWIyeHNhVzVuSUQwZ1ptRnNjMlVzWEhKY2JpQWdJQ0JrYjFKbGJtUmxjaUE5SUhSeWRXVXNYSEpjYmlBZ0lDQnRiM1Z6WlNBOUlIdGNjbHh1SUNBZ0lDQWdJQ0I0T2lBd0xGeHlYRzRnSUNBZ0lDQWdJSGs2SURCY2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCdGIzVnpaVVJ2ZDI1UWIzTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdkR0Z5WjJWMFEyRnRaWEpoVUc5eklEMGdlMXh5WEc0Z0lDQWdJQ0FnSUhnNklEQXNYSEpjYmlBZ0lDQWdJQ0FnZVRvZ01GeHlYRzRnSUNBZ2ZTeGNjbHh1SUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ0xURXNYSEpjYmlBZ0lDQnphRzkzYmxKbFkyOXlaQ0E5SUMweExGeHlYRzRnSUNBZ2JHOWhaR1ZrVW1WamIzSmtjeUE5SURBc1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdUV0YwWlhKcFlXeHpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQjNiMjlrWDIxaGRHVnlhV0ZzTzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQkNRVk5GSUUxRlZFaFBSRk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzUyWVhJZ1lXNXBiV0YwWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1J2VW1WdVpHVnlJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb0lHRnVhVzFoZEdVZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCRGIyNXpkR0Z1ZEhNdVpHVmlkV2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR0YwY3k1MWNHUmhkR1VvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhKbGJtUmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JVVjBWRlRpNTFjR1JoZEdVb0tUdGNjbHh1SUNBZ0lIVndaR0YwWlZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTFjMlZOYjNabElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBZWEpuWlhSRFlXMWxjbUZRYjNNdWVDQTlJQ2dnYlc5MWMyVXVlQ0F2SUdOaGJuWmhjMWRwWkhSb0lDMGdNQzQxSUNrZ0tpQXdMakkxT3lBdkx5QnBiblpsY25ObElHRjRhWE0vWEhKY2JpQWdJQ0FnSUNBZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ1BTQW9JRzF2ZFhObExua2dMeUJqWVc1MllYTlhhV1IwYUNBdElEQXVOU0FwSUNvZ01DNHlOVHRjY2x4dUlDQWdJQ0FnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS3owZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZFhObFRXOTJaVk53WldWa1dTQXFJQ2dnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmdnTFNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS1R0Y2NseHVJQ0FnSUNBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0t6MGdRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRYTmxUVzkyWlZOd1pXVmtXaUFxSUNnZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ0xTQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTVzYjI5clFYUlVZWEpuWlhRb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lFTnZibk4wWVc1MGN5NXdiM04wY0hKdlkyVnpjMmx1WnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyTmxibVV1YjNabGNuSnBaR1ZOWVhSbGNtbGhiQ0E5SUdSbGNIUm9UV0YwWlhKcFlXdzdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlaWEl1Y21WdVpHVnlLQ0J6WTJWdVpTd2dZMkZ0WlhKaExDQmtaWEIwYUZSaGNtZGxkQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lITmpaVzVsTG05MlpYSnlhV1JsVFdGMFpYSnBZV3dnUFNCdWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJYQnZjMlZ5TG5KbGJtUmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjbVZ5TG5KbGJtUmxjaWdnYzJObGJtVXNJR05oYldWeVlTQXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiaThxWEhKY2JpQXFJRXh2WVdScGJtY2diV1YwYUc5a2MxeHlYRzRnS2k5Y2NseHVkbUZ5SUhWdWJHOWhaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR2tnUFNBd095QnBJRHdnY21WamIzSmtjeTVzWlc1bmRHZzdJR2tyS3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzV6WlhSVmJtRmpkR2wyWlNncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnTUR0Y2NseHVJQ0FnSUhKbFkyOXlaSE5FWVhSaFRHbHpkQ0E5SUZ0ZE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUyWVhJZ2JHOWhaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvSUhKbFkyOXlaSE5FWVhSaExDQnphSFZtWm14bFFtVm1iM0psVEc5aFpHbHVaeXdnWkc5dVpTQXBJSHRjY2x4dVhISmNiaUFnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NCMGNuVmxJQ2s3WEhKY2JseHlYRzRnSUNBZ2MyaHZkMHh2WVdScGJtY29JR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHeHZZV1JsWkZKbFkyOXlaSE1nUGlBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFc1c2IyRmtVbVZqYjNKa2N5Z3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYzJoMVptWnNaVUpsWm05eVpVeHZZV1JwYm1jZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpSR0YwWVNBOUlITm9kV1ptYkdVb0lISmxZMjl5WkhORVlYUmhJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdabTl5SUNnZ2RtRnlJR2tnUFNBd095QnBJRHdnY21WamIzSmtjeTVzWlc1bmRHZ2dKaVlnYVNBOElISmxZMjl5WkhORVlYUmhMbXhsYm1kMGFEc2dhU3NySUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYVNCZExtUmhkR0VnUFNCeVpXTnZjbVJ6UkdGMFlWc2dhU0JkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJwSUYwdWMyVjBRV04wYVhabEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzV0WlhOb0xtMWhkR1Z5YVdGc0xtMWhkR1Z5YVdGc2N5QTlJR2RsZEZKbFkyOXlaRTFoZEdWeWFXRnNLQ0J5WldOdmNtUnpSR0YwWVZzZ2FTQmRMbU52ZG1WeUxDQnlaV052Y21SelJHRjBZVnNnYVNCZExtaGhjMU5zWldWMlpTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZJSGRvZVNBL1AxeHlYRzRnSUNBZ0lDQWdJQzh2SUd4dllXUmxaRkpsWTI5eVpITWdQU0J5WldOdmNtUnpSR0YwWVM1c1pXNW5kR2dnUENCeVpXTnZjbVJ6TG14bGJtZDBhQ0EvSUhKbFkyOXlaSE5FWVhSaExteGxibWQwYUNBNklISmxZMjl5WkhNdWJHVnVaM1JvTzF4eVhHNGdJQ0FnSUNBZ0lHeHZZV1JsWkZKbFkyOXlaSE1nUFNCeVpXTnZjbVJ6TG14bGJtZDBhRHRjY2x4dUlDQWdJQ0FnSUNCeVpXTnZjbVJ6UkdGMFlVeHBjM1FnUFNCeVpXTnZjbVJ6UkdGMFlUdGNjbHh1SUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCb2FXUmxURzloWkdsdVp5aGtiMjVsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnUTI5dWMzUmhiblJ6TG05dVRHOWhaR2x1WjBWdVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0F6TURBd0lDazdYSEpjYmlBZ0lDQjlLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2MyaDFabVpzWlZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlITm9kV1ptYkdWa1VtVmpiM0prY3lBOUlISmxZMjl5WkhORVlYUmhUR2x6ZER0Y2NseHVJQ0FnSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUE5SUhOb2RXWm1iR1VvSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUFwTzF4eVhHNGdJQ0FnYkc5aFpGSmxZMjl5WkhNb0lITm9kV1ptYkdWa1VtVmpiM0prY3lBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lGSkZRMDlTUkZNZ1UwVk1SVU5VU1U5T0lFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnpaV3hsWTNSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2R2Y0dWdWFXNW5KeUFtSmlCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyTnNiM05wYm1jbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOUlHbGtPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCbWJHbHdVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYVd4c1NXNW1iMUJoYm1Wc0tDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZElDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuYjNCbGJtbHVaeWM3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVabXhwY0ZKbFkyOXlaQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5iM0JsYm1Wa0p6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQkRiMjV6ZEdGdWRITXViMjVKYm1adlVHRnVaV3hQY0dWdVpXUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabUZrWlVsdUtDQnBibVp2UTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBek1EQWdLVHRjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLR1p2Y21ObEtTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1poWkdWUGRYUW9JR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrN1hISmNiaUFnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5ZMnh2YzJsdVp5YzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVpteHBjRUpoWTJ0U1pXTnZjbVFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2x1Wm05UVlXNWxiRk4wWVhSbElEMGdKMk5zYjNObFpDYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZibk4wWVc1MGN5NXZia2x1Wm05UVlXNWxiRU5zYjNObFpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0JtYjNKalpTQXBPMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSFZ3WkdGMFpWTm9iM2R1VW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDWW1JSE5vYjNkdVVtVmpiM0prSUNFOUlITmxiR1ZqZEdWa1VtVmpiM0prSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCemFHOTNibEpsWTI5eVpDQTlJSE5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2NtVmpiM0prU1dRZ1BTQXdPeUJ5WldOdmNtUkpaQ0E4SUd4dllXUmxaRkpsWTI5eVpITTdJSEpsWTI5eVpFbGtLeXNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhObGJHVmpkR1ZrVW1WamIzSmtJRDA5SUMweElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjSFZ6YUZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2djbVZqYjNKa1NXUWdQaUJ6Wld4bFkzUmxaRkpsWTI5eVpDQW1KbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtTV1FnUGlCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkTG1OeVlYUmxTV1FnS2lCRGIyNXpkR0Z1ZEhNdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNZbVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SSlpDQThJQ2dnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYUzVqY21GMFpVbGtJQ29nUTI5dWMzUmhiblJ6TG5KbFkyOXlaSE5RWlhKRGNtRjBaU0FwSUNzZ1EyOXVjM1JoYm5SekxuSmxZMjl5WkhOUVpYSkRjbUYwWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCeVpXTnZjbVJKWkNCZExuQjFiR3hTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lISmxZMjl5WkVsa0lEMDlJSE5sYkdWamRHVmtVbVZqYjNKa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjMmh2ZDFKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJ5WldOdmNtUkpaQ0JkTG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2NtVnpaWFJUYUc5M2JsSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2dabTl5WTJVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnSVdadmNtTmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnSVQwOUlDZHZjR1Z1YVc1bkp5QW1KaUJwYm1adlVHRnVaV3hUZEdGMFpTQWhQVDBnSjJOc2IzTnBibWNuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDaDBjblZsS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ0xURTdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTV5WlhObGRFTmhiV1Z5WVNncE8xeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlITmxiR1ZqZEZCeVpYWlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2MyVnNaV04wVW1WamIzSmtLR2RsZEZCeVpYWkJkbUZwYkdGaWJHVlNaV052Y21Rb2MyVnNaV04wWldSU1pXTnZjbVFwS1R0Y2NseHVJQ0FnSUZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhObGJHVmpkRTVsZUhSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzJWc1pXTjBVbVZqYjNKa0tHZGxkRTVsZUhSQmRtRnBiR0ZpYkdWU1pXTnZjbVFvYzJWc1pXTjBaV1JTWldOdmNtUXBLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNobWNtOXRVbVZqYjNKa0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRDA5SUMweElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnYkc5aFpHVmtVbVZqYjNKa2N5QXRJREU3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dabkp2YlZKbFkyOXlaQ0E4SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdabkp2YlZKbFkyOXlaQ0FySURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJREE3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaV052Y21Seld5Qm1jbTl0VW1WamIzSmtJRjB1WVdOMGFYWmxJRDhnWm5KdmJWSmxZMjl5WkNBNklHZGxkRkJ5WlhaQmRtRnBiR0ZpYkdWU1pXTnZjbVFvWm5KdmJWSmxZMjl5WkNrN1hISmNiaUFnSUNCY2NseHVmVHRjY2x4dVhISmNiblpoY2lCblpYUk9aWGgwUVhaaGFXeGhZbXhsVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0daeWIyMVNaV052Y21RcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHWnliMjFTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJR1p5YjIxU1pXTnZjbVFnTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxZMjl5WkhOYklHWnliMjFTWldOdmNtUWdYUzVoWTNScGRtVWdQeUJtY205dFVtVmpiM0prSURvZ1oyVjBUbVY0ZEVGMllXbHNZV0pzWlZKbFkyOXlaQ2htY205dFVtVmpiM0prS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdibUYyYVdkaGRHVlNaV052Y21SeklEMGdablZ1WTNScGIyNGdLQ0JrYVhKbFkzUnBiMjRnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnWkdseVpXTjBhVzl1SUQwOVBTQW5jSEpsZGljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUlFjbVYyVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUk9aWGgwVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnUTI5dWMzUmhiblJ6TG1Oc2IzTmxTVzVtYjFCaGJtVnNUMjVUWTNKdmJHd2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlITmpjbTlzYkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0lHSmhjMlZaTENCdmJHUkVaV3gwWVNBcElIdGNjbHh1WEhKY2JpQWdJQ0J2YkdSRVpXeDBZU0E5SUNGdmJHUkVaV3gwWVNCOGZDQk5ZWFJvTG1GaWN5Z2diMnhrUkdWc2RHRWdLU0ErSURBdU5TQS9JREF1TlNBNklFMWhkR2d1WVdKektDQnZiR1JFWld4MFlTQXBPMXh5WEc0Z0lDQWdkbUZ5SUdsdWRtVnljMlZFWld4MFlTQTlJREVnTFNCdmJHUkVaV3gwWVR0Y2NseHVJQ0FnSUhaaGNpQnpZM0p2Ykd4VGNHVmxaQ0E5SUdsdWRtVnljMlZFWld4MFlTQXFJR2x1ZG1WeWMyVkVaV3gwWVNBcUlHbHVkbVZ5YzJWRVpXeDBZU0FxSURNd01EdGNjbHh1WEhKY2JpQWdJQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHlZV0luS1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRWdQU0FvSUdKaGMyVlpJQzBnYlc5MWMyVXVlU0FwSUM4Z1kyRnVkbUZ6U0dWcFoyaDBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdSbGJIUmhJRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFNWxlSFJTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2dnWkdWc2RHRWdQQ0F3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFVISmxkbEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmpjbTlzYkZKbFkyOXlaSE1vSUdKaGMyVlpMQ0JrWld4MFlTQXBPMXh5WEc1Y2NseHVJQ0FnSUgwc0lITmpjbTlzYkZOd1pXVmtJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHWnBiR3hKYm1adlVHRnVaV3dnUFNCbWRXNWpkR2x2YmlBb0lISmxZMjl5WkNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkM1a1lYUmhMblJwZEd4bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhWFJzWlVsdVptOUZiR1Z0Wlc1MExtbHVibVZ5U0ZSTlRDQTlJSEpsWTI5eVpDNWtZWFJoTG5ScGRHeGxPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhKbFkyOXlaQzVrWVhSaExtRnlkR2x6ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1lYSjBhWE4wU1c1bWIwVnNaVzFsYm5RdWFXNXVaWEpJVkUxTUlEMGdjbVZqYjNKa0xtUmhkR0V1WVhKMGFYTjBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhKbFkyOXlaQzVrWVhSaExtTnZkbVZ5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIzWmxja2x1Wm05RmJHVnRaVzUwTG5OMGVXeGxMbUpoWTJ0bmNtOTFibVJKYldGblpTQTlJQ2QxY213b0p5QXJJSEpsWTI5eVpDNWtZWFJoTG1OdmRtVnlJQ3NnSnlrbk8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1JWWkZUbFJUSUVoQlRrUk1TVTVISUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiblpoY2lCdmJrMXZkWE5sVFc5MlpVVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ0WDNCdmMzZ2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHMWZjRzl6ZVNBOUlEQXNYSEpjYmlBZ0lDQWdJQ0FnWlY5d2IzTjRJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQmxYM0J2YzNrZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUc5aWFpQTlJSFJvYVhNN1hISmNibHh5WEc0Z0lDQWdMeTluWlhRZ2JXOTFjMlVnY0c5emFYUnBiMjRnYjI0Z1pHOWpkVzFsYm5RZ1kzSnZjM05pY205M2MyVnlYSEpjYmlBZ0lDQnBaaUFvSUNGbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmxJRDBnZDJsdVpHOTNMbVYyWlc1ME8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JR1V1Y0dGblpWZ2dmSHdnWlM1d1lXZGxXU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjRJRDBnWlM1d1lXZGxXRHRjY2x4dUlDQWdJQ0FnSUNCdFgzQnZjM2tnUFNCbExuQmhaMlZaTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pTNWpiR2xsYm5SWUlIeDhJR1V1WTJ4cFpXNTBXU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjRJRDBnWlM1amJHbGxiblJZSUNzZ1pHOWpkVzFsYm5RdVltOWtlUzV6WTNKdmJHeE1aV1owSUN0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbk5qY205c2JFeGxablE3WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNWpiR2xsYm5SWklDc2daRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hVYjNBZ0sxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2TDJkbGRDQndZWEpsYm5RZ1pXeGxiV1Z1ZENCd2IzTnBkR2x2YmlCcGJpQmtiMk4xYldWdWRGeHlYRzRnSUNBZ2FXWWdLQ0J2WW1vdWIyWm1jMlYwVUdGeVpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYnlCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxYM0J2YzNnZ0t6MGdiMkpxTG05bVpuTmxkRXhsWm5RN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWZmNHOXplU0FyUFNCdlltb3ViMlptYzJWMFZHOXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDZ2diMkpxSUQwZ2IySnFMbTltWm5ObGRGQmhjbVZ1ZENBcE95QXZMeUJxYzJocGJuUWdhV2R1YjNKbE9teHBibVZjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeThnYlc5MWMyVWdjRzl6YVhScGIyNGdiV2x1ZFhNZ1pXeHRJSEJ2YzJsMGFXOXVJR2x6SUcxdmRYTmxjRzl6YVhScGIyNGdjbVZzWVhScGRtVWdkRzhnWld4bGJXVnVkRHBjY2x4dUlDQWdJRzF2ZFhObExuZ2dQU0J0WDNCdmMzZ2dMU0JsWDNCdmMzZzdYSEpjYmlBZ0lDQnRiM1Z6WlM1NUlEMGdiVjl3YjNONUlDMGdaVjl3YjNONU8xeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVVMk55YjJ4c1JYWmxiblFnUFNCbWRXNWpkR2x2YmlBb0lHVWdLU0I3WEhKY2JseHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2QyaGxaV3hFYVhKbFkzUnBiMjRvSUdVZ0tTQThJREFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1aGRtbG5ZWFJsVW1WamIzSmtjeWdnSjNCeVpYWW5JQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuYm1WNGRDY2dLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUc5dVEyeHBZMnRGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dnYlc5MWMyVkViM2R1VUc5eklDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2RqYkc5elpXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVmpkRzl5VUc5eklEMGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUFvSUNnZ0tDQnRiM1Z6WlVSdmQyNVFiM011ZUNBdElISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXViMlptYzJWMFRHVm1kQ0FwSUM4Z0tDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbmRwWkhSb0lDa2dLU0FxSURJZ0xTQXhJQ2tzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUNnZ0xTZ2dLQ0J0YjNWelpVUnZkMjVRYjNNdWVTQXRJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1YjJabWMyVjBWRzl3SUNrZ0x5QW9JSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1YUdWcFoyaDBJQ2tnS1NBcUlESWdLeUF4SUNrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhvNklEQXVOVnh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQjJaV04wYjNJZ1BTQnVaWGNnVkVoU1JVVXVWbVZqZEc5eU15Z2dkbVZqZEc5eVVHOXpMbmdzSUhabFkzUnZjbEJ2Y3k1NUxDQjJaV04wYjNKUWIzTXVlaUFwTzF4eVhHNGdJQ0FnSUNBZ0lIWmxZM1J2Y2k1MWJuQnliMnBsWTNRb0lHTmhiV1Z5WVNBcE8xeHlYRzRnSUNBZ0lDQWdJSFpoY2lCeVlYbGpZWE4wWlhJZ1BTQnVaWGNnVkVoU1JVVXVVbUY1WTJGemRHVnlLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNHNJSFpsWTNSdmNpNXpkV0lvSUdOaGJXVnlZUzV3YjNOcGRHbHZiaUFwTG01dmNtMWhiR2w2WlNncElDazdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHbHVkR1Z5YzJWamRITWdQU0J5WVhsallYTjBaWEl1YVc1MFpYSnpaV04wVDJKcVpXTjBjeWdnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMbU5vYVd4a2NtVnVMQ0IwY25WbElDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdsdWRHVnljMlZqZENCemIyMWxkR2hwYm1kY2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdsdWRHVnljMlZqZEhNdWJHVnVaM1JvSUQ0Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpiR2xqYTJWa1VtVmpiM0prTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSMlYwSUhSb1pTQm1hWEp6ZENCMmFYTnBZbXhsSUhKbFkyOXlaQ0JwYm5SbGNuTmxZM1JsWkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tDQjJZWElnYVNBOUlEQTdJR2tnUENCcGJuUmxjbk5sWTNSekxteGxibWQwYURzZ2FTc3JJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlHbHVkR1Z5WTJWd2RDQmhJRzFsYzJnZ2QyaHBZMmdnYVhNZ2JtOTBJR0VnY21WamIzSmtMQ0JpY21WaGExeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NCMGVYQmxiMllvYVc1MFpYSnpaV04wYzFzZ2FTQmRMbTlpYW1WamRDNXlaV052Y21SSlpDa2dQVDA5SUNkMWJtUmxabWx1WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDQnBiblJsY25ObFkzUnpXeUJwSUYwdWIySnFaV04wTG5acGMybGliR1VnSmlZZ2FXNTBaWEp6WldOMGMxc2dhU0JkTG05aWFtVmpkQzV5WldOdmNtUkpaQ0ErUFNBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdsamEyVmtVbVZqYjNKa0lEMGdjbVZqYjNKa2Mxc2dhVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1eVpXTnZjbVJKWkNCZE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHVnlaU0JwY3lCdmJtVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0JqYkdsamEyVmtVbVZqYjNKa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnYzJWc1pXTjBaV1JTWldOdmNtUWdQVDA5SUdOc2FXTnJaV1JTWldOdmNtUXVhV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnNhWEJUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEZKbFkyOXlaQ2dnWTJ4cFkydGxaRkpsWTI5eVpDNXBaQ0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZzYkNCcGJuUmxjbk5sWTNSbFpDQnlaV052Y21SeklHRnlaU0J1YjNRZ2RtbHphV0pzWlhOY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpaWFJUYUc5M2JsSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk4Z1RtOGdjbVZqYjNKa0lHaGhjeUJpWldWdUlHbHVkR1Z5YzJWamRHVmtYSEpjYmlBZ0lDQWdJQ0FnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQkRiMjV6ZEdGdWRITXVZMnh2YzJWSmJtWnZVR0Z1Wld4UGJrTnNhV05ySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVUVzkxYzJWRWIzZHVSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdZMnhsWVhKSmJuUmxjblpoYkNnZ2MyTnliMnhzVW1WamIzSmtjMVJwYldWdmRYUWdLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJOeWIyeHNVbVZqYjNKa2N5Z2diVzkxYzJVdWVTQXBPMXh5WEc1Y2NseHVJQ0FnSUgwZ1hISmNibHh5WEc0Z0lDQWdiVzkxYzJWRWIzZHVVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSGc2SUcxdmRYTmxMbmdzWEhKY2JpQWdJQ0FnSUNBZ2VUb2diVzkxYzJVdWVWeHlYRzRnSUNBZ2ZUdGNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZiazF2ZFhObFZYQkZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQmpiR1ZoY2tsdWRHVnlkbUZzS0NCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDQXBPMXh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RuY21GaUp5azdYSEpjYmx4eVhHNGdJQ0FnTHk4Z1ZISnBaMmRsY2lCelkyVnVaU0JqYkdsamF5QmxkbVZ1ZENCdmJteDVJR2xtSUcxdmRYTmxkWEFnWlhabGJuUWdhWE1nYm05MElHRWdaSEpoWnlCbGJtUWdaWFpsYm5RZ0ppQnViM1FnWVNCamJHbGpheUJ2YmlCaElHeHBibXRjY2x4dUlDQWdJR2xtSUNnZ1kyOXZjbVJ6UlhGMVlXeHpRWEJ3Y205NEtDQnRiM1Z6WlVSdmQyNVFiM01zSUcxdmRYTmxMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVaM0poWWxObGJuTnBkR2wyYVhSNUlDa2dKaVlnSVNnZ1pTNTBZWEpuWlhRZ0ppWWdaUzUwWVhKblpYUXVhR0Z6UVhSMGNtbGlkWFJsS0Nkb2NtVm1KeWtnS1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2IyNURiR2xqYTBWMlpXNTBLQ0J0YjNWelpVUnZkMjVRYjNNZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVTMlY1Ukc5M2JrVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWlM1clpYbERiMlJsSUQwOVBTQXpOeUI4ZkNCbExtdGxlVU52WkdVZ1BUMDlJRE00SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVlYWnBaMkYwWlZKbFkyOXlaSE1vSUNkdVpYaDBKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR1V1YTJWNVEyOWtaU0E5UFQwZ016a2dmSHdnWlM1clpYbERiMlJsSUQwOVBTQTBNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuY0hKbGRpY2dLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2IyNVhhVzVrYjNkU1pYTnBlbVZGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsS0NrN1hISmNiaUFnSUNCelpYUkRZVzUyWVhORWFXMWxibk5wYjI1ektDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWEl1YzJWMFUybDZaU2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUTJGdFpYSmhUV0Z1WVdkbGNpNTFjR1JoZEdWRFlXMWxjbUZCYzNCbFkzUW9JR05oYm5aaGMxZHBaSFJvSUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJFWlhCMGFDNTJZV3gxWlNBOUlHUmxjSFJvVkdGeVoyVjBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5OcGVtVXVkbUZzZFdVdWMyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRHVjRkR1ZzTG5aaGJIVmxMbk5sZENnZ01TNHdJQzhnWTJGdWRtRnpWMmxrZEdnc0lERXVNQ0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdSbGhCUVM1MWJtbG1iM0p0Y3k1eVpYTnZiSFYwYVc5dUxuWmhiSFZsTG5ObGRDZ2dNU0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lDQWdWVWtnVFVWVVNFOUVVeUFnSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVkbUZ5SUhOb2IzZE1iMkZrYVc1bklEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdaaFpHVkpiaWdnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdLVHRjY2x4dUlDQWdJSE5sZEZScGJXVnZkWFFvWkc5dVpTd2dNVEF3TUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2hwWkdWTWIyRmthVzVuSUQwZ1puVnVZM1JwYjI0Z0tDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1poWkdWUGRYUW9JR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDazdYSEpjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLR1J2Ym1Vc0lERXdNREFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRWxPU1ZSSlFVeEpVMEZVU1U5T0lDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1ZG1GeUlHbHVhWFJUWTJWdVpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQXZMeUJ6WTJWdVpTd2djbVZ1WkdWeVpYSXNJR05oYldWeVlTd3VMaTVjY2x4dUlDQWdJSE5qWlc1bElEMGdibVYzSUZSSVVrVkZMbE5qWlc1bEtDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWElnUFNCdVpYY2dWRWhTUlVVdVYyVmlSMHhTWlc1a1pYSmxjaWdnZTF4eVhHNGdJQ0FnSUNBZ0lHRnVkR2xoYkdsaGN6b2dkSEoxWlZ4eVhHNGdJQ0FnZlNBcE8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBVMmw2WlNnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9JSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblFnS1R0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWFXUWdQU0JjSW1OdmJuUmxlSFJjSWp0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRFTnNaV0Z5UTI5c2IzSW9JRU52Ym5OMFlXNTBjeTVpWVdOclozSnZkVzVrUTI5c2IzSXNJREVnS1R0Y2NseHVYSEpjYmlBZ0lDQkRZVzFsY21GTllXNWhaMlZ5TG1sdWFYUW9ZMkZ1ZG1GelYybGtkR2dnTHlCallXNTJZWE5JWldsbmFIUXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaElEMGdRMkZ0WlhKaFRXRnVZV2RsY2k1blpYUkRZVzFsY21Fb0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2QyOXZaRjkwWlhoMGRYSmxJRDBnVkVoU1JVVXVTVzFoWjJWVmRHbHNjeTVzYjJGa1ZHVjRkSFZ5WlNnZ1EyOXVjM1JoYm5SekxtTnlZWFJsVkdWNGRIVnlaU0FwTzF4eVhHNGdJQ0FnZDI5dlpGOTBaWGgwZFhKbExtRnVhWE52ZEhKdmNIa2dQU0J5Wlc1a1pYSmxjaTVuWlhSTllYaEJibWx6YjNSeWIzQjVLQ2s3WEhKY2JpQWdJQ0IzYjI5a1gyMWhkR1Z5YVdGc0lEMGdibVYzSUZSSVVrVkZMazFsYzJoTVlXMWlaWEowVFdGMFpYSnBZV3dvSUh0Y2NseHVJQ0FnSUNBZ0lDQnRZWEE2SUhkdmIyUmZkR1Y0ZEhWeVpWeHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaUE5SUc1bGR5QlVTRkpGUlM1UFltcGxZM1F6UkNncE8xeHlYRzRnSUNBZ2MyTmxibVV1WVdSa0tDQnliMjkwUTI5dWRHRnBibVZ5SUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkNnZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5SUNrN1hISmNibHh5WEc0Z0lDQWdhVzVwZEVOeVlYUmxjeWdwTzF4eVhHNGdJQ0FnYVc1cGRGSmxZMjl5WkhNb0tUdGNjbHh1WEhKY2JpQWdJQ0JzYVdkb2RDQTlJRzVsZHlCVVNGSkZSUzVRYjJsdWRFeHBaMmgwS0NBd2VFWkdSa1pHUml3Z1EyOXVjM1JoYm5SekxteHBaMmgwU1c1MFpXNXphWFI1SUNvZ01TNHhJQ2s3WEhKY2JpQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSURNd01Dd2dPREFzSURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2diR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0JzWldaMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRU52Ym5OMFlXNTBjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2JHVm1kRXhwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTFRFd01Dd2dNekF3TENBeE1EQXdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUd4bFpuUk1hV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRU52Ym5OMFlXNTBjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2NtbG5hSFJNYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSUMweE1EQXNJRE13TUN3Z0xURXdNREFnS1R0Y2NseHVJQ0FnSUhOalpXNWxMbUZrWkNnZ2NtbG5hSFJNYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUdsdWFYUlFiM04wVUhKdlkyVnpjMmx1WnlncE8xeHlYRzVjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkRVQwMU5iM1Z6WlZOamNtOXNiQ2NzSUc5dVUyTnliMnhzUlhabGJuUXNJR1poYkhObElDazdYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuYlc5MWMyVjNhR1ZsYkNjc0lHOXVVMk55YjJ4c1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmJXOTFjMlZ0YjNabEp5d2diMjVOYjNWelpVMXZkbVZGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpXUnZkMjRuTENCdmJrMXZkWE5sUkc5M2JrVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oyMXZkWE5sZFhBbkxDQnZiazF2ZFhObFZYQkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVYSEpjYmlBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oydGxlV1J2ZDI0bkxDQnZia3RsZVVSdmQyNUZkbVZ1ZEN3Z1ptRnNjMlVnS1RzZ1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCRGIyNXpkR0Z1ZEhNdWRYQmtZWFJsUTJGdWRtRnpVMmw2WlU5dVYybHVaRzkzVW1WemFYcGxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKM0psYzJsNlpTY3NJRzl1VjJsdVpHOTNVbVZ6YVhwbFJYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2SUVSUFRTQnpaWFIxY0Z4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBbmNtVnNZWFJwZG1Vbk8xeHlYRzRnSUNBZ1kyRnVkbUZ6UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2RoWW5OdmJIVjBaU2M3WEhKY2JpQWdJQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNiaUFnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2RoWW5OdmJIVjBaU2M3WEhKY2JseHlYRzRnSUNBZ2MyVjBRMkZ1ZG1GelJHbHRaVzV6YVc5dWN5Z3BPMXh5WEc1Y2NseHVJQ0FnSUdocFpHVkZiR1Z0Wlc1MEtHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JRU52Ym5OMFlXNTBjeTVrWldKMVp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhVzVwZEVSbFluVm5LQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNXBkRWRWU1NncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNiaUFnSUNCaGJtbHRZWFJsS0NrN1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkRkJ2YzNSUWNtOWpaWE56YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHUmxjSFJvVTJoaFpHVnlJRDBnVkVoU1JVVXVVMmhoWkdWeVRHbGlMbVJsY0hSb1VrZENRVHRjY2x4dUlDQWdJR1JsY0hSb1ZXNXBabTl5YlhNZ1BTQlVTRkpGUlM1VmJtbG1iM0p0YzFWMGFXeHpMbU5zYjI1bEtDQmtaWEIwYUZOb1lXUmxjaTUxYm1sbWIzSnRjeUFwTzF4eVhHNWNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVUyaGhaR1Z5VFdGMFpYSnBZV3dvSUh0Y2NseHVJQ0FnSUNBZ0lDQm1jbUZuYldWdWRGTm9ZV1JsY2pvZ1pHVndkR2hUYUdGa1pYSXVabkpoWjIxbGJuUlRhR0ZrWlhJc1hISmNiaUFnSUNBZ0lDQWdkbVZ5ZEdWNFUyaGhaR1Z5T2lCa1pYQjBhRk5vWVdSbGNpNTJaWEowWlhoVGFHRmtaWElzWEhKY2JpQWdJQ0FnSUNBZ2RXNXBabTl5YlhNNklHUmxjSFJvVlc1cFptOXliWE5jY2x4dUlDQWdJSDBnS1R0Y2NseHVJQ0FnSUdSbGNIUm9UV0YwWlhKcFlXd3VZbXhsYm1ScGJtY2dQU0JVU0ZKRlJTNU9iMEpzWlc1a2FXNW5PMXh5WEc1Y2NseHVJQ0FnSUdSbGNIUm9WR0Z5WjJWMElEMGdibVYzSUZSSVVrVkZMbGRsWWtkTVVtVnVaR1Z5VkdGeVoyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBMQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXbHVSbWxzZEdWeU9pQlVTRkpGUlM1T1pXRnlaWE4wUm1sc2RHVnlMRnh5WEc0Z0lDQWdJQ0FnSUcxaFowWnBiSFJsY2pvZ1ZFaFNSVVV1VG1WaGNtVnpkRVpwYkhSbGNpeGNjbHh1SUNBZ0lDQWdJQ0JtYjNKdFlYUTZJRlJJVWtWRkxsSkhRa0ZHYjNKdFlYUmNjbHh1SUNBZ0lIMGdLVHRjY2x4dVhISmNiaUFnSUNCamIyMXdiM05sY2lBOUlHNWxkeUJVU0ZKRlJTNUZabVpsWTNSRGIyMXdiM05sY2lnZ2NtVnVaR1Z5WlhJZ0tUdGNjbHh1SUNBZ0lHTnZiWEJ2YzJWeUxtRmtaRkJoYzNNb0lHNWxkeUJVU0ZKRlJTNVNaVzVrWlhKUVlYTnpLQ0J6WTJWdVpTd2dZMkZ0WlhKaElDa2dLVHRjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCRVpYQjBhQ0J2WmlCbWFXVnNaQ0J6YUdGa1pYSWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1SUNBZ0lHUnZaaUE5SUc1bGR5QlVTRkpGUlM1VGFHRmtaWEpRWVhOektDQlVTRkpGUlM1RWIwWlRhR0ZrWlhJZ0tUdGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwUkdWd2RHZ3VkbUZzZFdVZ1BTQmtaWEIwYUZSaGNtZGxkRHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1emFYcGxMblpoYkhWbExuTmxkQ2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUmxlSFJsYkM1MllXeDFaUzV6WlhRb0lERXVNQ0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhMakFnTHlCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNBdkwyMWhhMlVnYzNWeVpTQjBhR0YwSUhSb1pYTmxJSFIzYnlCMllXeDFaWE1nWVhKbElIUm9aU0J6WVcxbElHWnZjaUI1YjNWeUlHTmhiV1Z5WVN3Z2IzUm9aWEozYVhObElHUnBjM1JoYm1ObGN5QjNhV3hzSUdKbElIZHliMjVuTGx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxucHVaV0Z5TG5aaGJIVmxJRDBnWTJGdFpYSmhMbTVsWVhJN0lDOHZZMkZ0WlhKaElHTnNhWEJ3YVc1bklITjBZWEowWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWVtWmhjaTUyWVd4MVpTQTlJR05oYldWeVlTNW1ZWEk3SUM4dlkyRnRaWEpoSUdOc2FYQndhVzVuSUdWdVpGeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTmhiRVJsY0hSb0xuWmhiSFZsSUQwZ05Uc2dMeTltYjJOaGJDQmthWE4wWVc1alpTQjJZV3gxWlNCcGJpQnRaWFJsY25Nc0lHSjFkQ0I1YjNVZ2JXRjVJSFZ6WlNCaGRYUnZabTlqZFhNZ2IzQjBhVzl1SUdKbGJHOTNYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeE1aVzVuZEdndWRtRnNkV1VnUFNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnN0lDOHZabTlqWVd3Z2JHVnVaM1JvSUdsdUlHMXRYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm5OMGIzQXVkbUZzZFdVZ1BTQTRMakE3SUM4dlppMXpkRzl3SUhaaGJIVmxYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11YzJodmQwWnZZM1Z6TG5aaGJIVmxJRDBnWm1Gc2MyVTdJQzh2YzJodmR5QmtaV0oxWnlCbWIyTjFjeUJ3YjJsdWRDQmhibVFnWm05allXd2djbUZ1WjJVZ0tHOXlZVzVuWlNBOUlHWnZZMkZzSUhCdmFXNTBMQ0JpYkhWbElEMGdabTlqWVd3Z2NtRnVaMlVwWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTFoYm5WaGJHUnZaaTUyWVd4MVpTQTlJSFJ5ZFdVN0lDOHZiV0Z1ZFdGc0lHUnZaaUJqWVd4amRXeGhkR2x2Ymx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtNWtiMlp6ZEdGeWRDNTJZV3gxWlNBOUlERXhPeUF2TDI1bFlYSWdaRzltSUdKc2RYSWdjM1JoY25SY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXVaRzltWkdsemRDNTJZV3gxWlNBOUlEZ3dPeUF2TDI1bFlYSWdaRzltSUdKc2RYSWdabUZzYkc5bVppQmthWE4wWVc1alpTQWdJQ0JjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bVpHOW1jM1JoY25RdWRtRnNkV1VnUFNBd095QXZMMlpoY2lCa2IyWWdZbXgxY2lCemRHRnlkRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1aa2IyWmthWE4wTG5aaGJIVmxJRDBnTVRBd095QXZMMlpoY2lCa2IyWWdZbXgxY2lCbVlXeHNiMlptSUdScGMzUmhibU5sSUZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVEYjBNdWRtRnNkV1VnUFNBd0xqQXpPeUF2TDJOcGNtTnNaU0J2WmlCamIyNW1kWE5wYjI0Z2MybDZaU0JwYmlCdGJTQW9NelZ0YlNCbWFXeHRJRDBnTUM0d00yMXRLU0FnSUNCY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtVjBkR2x1Wnk1MllXeDFaU0E5SUdaaGJITmxPeUF2TDNWelpTQnZjSFJwWTJGc0lHeGxibk1nZG1sbmJtVjBkR2x1Wno5Y2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WVhWMGIyWnZZM1Z6TG5aaGJIVmxJRDBnZEhKMVpUc2dMeTkxYzJVZ1lYVjBiMlp2WTNWeklHbHVJSE5vWVdSbGNqOGdaR2x6WVdKc1pTQnBaaUI1YjNVZ2RYTmxJR1Y0ZEdWeWJtRnNJR1p2WTJGc1JHVndkR2dnZG1Gc2RXVmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOMWN5NTJZV3gxWlM1elpYUW9JREF1TXpVc0lEQXVNelVnS1RzZ0x5OGdZWFYwYjJadlkzVnpJSEJ2YVc1MElHOXVJSE5qY21WbGJpQW9NQzR3TERBdU1DQXRJR3hsWm5RZ2JHOTNaWElnWTI5eWJtVnlMQ0F4TGpBc01TNHdJQzBnZFhCd1pYSWdjbWxuYUhRcElGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTFoZUdKc2RYSXVkbUZzZFdVZ1BTQkRiMjV6ZEdGdWRITXVZbXgxY2tGdGIzVnVkRHNnTHk5amJHRnRjQ0IyWVd4MVpTQnZaaUJ0WVhnZ1lteDFjaUFvTUM0d0lEMGdibThnWW14MWNpd3hMakFnWkdWbVlYVnNkQ2tnSUNBZ1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5Sb2NtVnphRzlzWkM1MllXeDFaU0E5SURBN0lDOHZhR2xuYUd4cFoyaDBJSFJvY21WemFHOXNaRHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bllXbHVMblpoYkhWbElEMGdNRHNnTHk5b2FXZG9iR2xuYUhRZ1oyRnBianRjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVZbWxoY3k1MllXeDFaU0E5SURBN0lDOHZZbTlyWldnZ1pXUm5aU0JpYVdGeklDQWdJQ0FnSUNCY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1jbWx1WjJVdWRtRnNkV1VnUFNBd095QXZMMkp2YTJWb0lHTm9jbTl0WVhScFl5QmhZbVZ5Y21GMGFXOXVMMlp5YVc1bmFXNW5YSEpjYmx4eVhHNGdJQ0FnUmxoQlFTQTlJRzVsZHlCVVNGSkZSUzVUYUdGa1pYSlFZWE56S0NCVVNGSkZSUzVHV0VGQlUyaGhaR1Z5SUNrN1hISmNibHh5WEc0Z0lDQWdSbGhCUVM1MWJtbG1iM0p0Y3k1eVpYTnZiSFYwYVc5dUxuWmhiSFZsTG5ObGRDZ2dNU0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmlBZ0lDQkdXRUZCTG5KbGJtUmxjbFJ2VTJOeVpXVnVJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0JqYjIxd2IzTmxjaTVoWkdSUVlYTnpLQ0JrYjJZZ0tUdGNjbHh1SUNBZ0lHTnZiWEJ2YzJWeUxtRmtaRkJoYzNNb0lFWllRVUVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdhVzVwZEVSbFluVm5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSE4wWVhSeklEMGdibVYzSUZOMFlYUnpLQ2s3WEhKY2JpQWdJQ0J6ZEdGMGN5NWtiMjFGYkdWdFpXNTBMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdKMkZpYzI5c2RYUmxKenRjY2x4dUlDQWdJSE4wWVhSekxtUnZiVVZzWlcxbGJuUXVjM1I1YkdVdWJHVm1kQ0E5SUZ3aU1Gd2lPMXh5WEc0Z0lDQWdjM1JoZEhNdVpHOXRSV3hsYldWdWRDNXpkSGxzWlM1MGIzQWdQU0JjSWpCY0lqdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0NCemRHRjBjeTVrYjIxRmJHVnRaVzUwSUNrN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdSbFluVm5JRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ01qQXNJREl3TENBeU1Dd2dNU3dnTVN3Z01TQXBJQ2s3WEhKY2JpQWdJQ0JrWldKMVp5NXdiM05wZEdsdmJpNXpaWFFvWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1ZUN4Y2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEM1d2IzTnBkR2x2Ymk1NUxGeHlYRzRnSUNBZ0lDQWdJR3hwWjJoMExuQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDazdYSEpjYmlBZ0lDQnpZMlZ1WlM1aFpHUW9JR1JsWW5WbklDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUkhWVWtnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHTmhiV1Z5WVVadmJHUmxjaXhjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZHYjJOaGJFeGxibWQwYUN4Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXNYSEpjYmlBZ0lDQWdJQ0FnWDJ4aGMzUTdYSEpjYmx4eVhHNGdJQ0FnWjNWcElEMGdibVYzSUdSaGRDNUhWVWtvS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUVOdmJuTjBZVzUwY3k1d2IzTjBjSEp2WTJWemMybHVaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlzWkdWeUlEMGdaM1ZwTG1Ga1pFWnZiR1JsY2lnZ0owTmhiV1Z5WVNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqWVcxbGNtRkdiMk5oYkV4bGJtZDBhQ0E5SUdOaGJXVnlZVVp2YkdSbGNpNWhaR1FvSUdOaGJXVnlZU3dnSjJadlkyRnNUR1Z1WjNSb0p5d2dNamdzSURJd01DQXBMbTVoYldVb0lDZEdiMk5oYkNCTVpXNW5kR2duSUNrN1hISmNiaUFnSUNBZ0lDQWdZMkZ0WlhKaFJtOWpZV3hNWlc1bmRHZ3ViMjVEYUdGdVoyVW9JSFZ3WkdGMFpVTmhiV1Z5WVNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJZ1BTQm5kV2t1WVdSa1JtOXNaR1Z5S0NBblJHVndkR2dnYjJZZ1JtbGxiR1FuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1JHVndkR2dzSUNkMllXeDFaU2NzSURBc0lERXdJQ2t1Ym1GdFpTZ2dKMFp2WTJGc0lFUmxjSFJvSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVtYzNSdmNDd2dKM1poYkhWbEp5d2dNQ3dnTWpJZ0tTNXVZVzFsS0NBblJpQlRkRzl3SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV0WVhoaWJIVnlMQ0FuZG1Gc2RXVW5MQ0F3TENBeklDa3VibUZ0WlNnZ0oyMWhlQ0JpYkhWeUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVjMmh2ZDBadlkzVnpMQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMU5vYjNjZ1JtOWpZV3dnVW1GdVoyVW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV0WVc1MVlXeGtiMllzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVFdGdWRXRnNJRVJ2UmljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym1SdlpuTjBZWEowTENBbmRtRnNkV1VuTENBd0xDQXlNREFnS1M1dVlXMWxLQ0FuYm1WaGNpQnpkR0Z5ZENjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym1SdlptUnBjM1FzSUNkMllXeDFaU2NzSURBc0lESXdNQ0FwTG01aGJXVW9JQ2R1WldGeUlHWmhiR3h2Wm1ZbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1aa2IyWnpkR0Z5ZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNakF3SUNrdWJtRnRaU2dnSjJaaGNpQnpkR0Z5ZENjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm1SdlptUnBjM1FzSUNkMllXeDFaU2NzSURBc0lESXdNQ0FwTG01aGJXVW9JQ2RtWVhJZ1ptRnNiRzltWmljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxrTnZReXdnSjNaaGJIVmxKeXdnTUN3Z01DNHhJQ2t1YzNSbGNDZ2dNQzR3TURFZ0tTNXVZVzFsS0NBblkybHlZMnhsSUc5bUlHTnZibVoxYzJsdmJpY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1bGRIUnBibWNzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVm1sbmJtVjBkR2x1WnljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtOTFkQ3dnSjNaaGJIVmxKeXdnTUN3Z01pQXBMbTVoYldVb0lDZHZkWFJsY2lCaWIzSmtaWEluSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1cGJpd2dKM1poYkhWbEp5d2dNQ3dnTVNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5hVzV1WlhJZ1ltOXlaR1Z5SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTUyYVdkdVptRmtaU3dnSjNaaGJIVmxKeXdnTUN3Z01qSWdLUzV1WVcxbEtDQW5abUZrWlNCaGRDY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbUYxZEc5bWIyTjFjeXdnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RCZFhSdlptOWpkWE1uSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTNWekxuWmhiSFZsTENBbmVDY3NJREFzSURFZ0tTNXVZVzFsS0NBblptOWpkWE1nZUNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm05amRYTXVkbUZzZFdVc0lDZDVKeXdnTUN3Z01TQXBMbTVoYldVb0lDZG1iMk4xY3lCNUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVkR2h5WlhOb2IyeGtMQ0FuZG1Gc2RXVW5MQ0F3TENBeElDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2QwYUhKbGMyaHZiR1FuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbWRoYVc0c0lDZDJZV3gxWlNjc0lEQXNJREV3TUNBcExtNWhiV1VvSUNkbllXbHVKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11WW1saGN5d2dKM1poYkhWbEp5d2dNQ3dnTkNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5ZbWxoY3ljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm5KcGJtZGxMQ0FuZG1Gc2RXVW5MQ0F3TENBMUlDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2RtY21sdVoyVW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV1YjJselpTd2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZFZjMlVnVG05cGMyVW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtNWhiVzkxYm5Rc0lDZDJZV3gxWlNjc0lEQXNJREF1TURBeElDa3VjM1JsY0NnZ01DNHdNREF4SUNrdWJtRnRaU2dnSjJScGRHaGxjaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1SbGNIUm9ZbXgxY2l3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkQ2JIVnlJRVJsY0hSb0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1a1luTnBlbVVzSUNkMllXeDFaU2NzSURBc0lEVWdLUzV1WVcxbEtDQW5ZbXgxY2lCemFYcGxKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JuZFdrdVkyeHZjMlVvS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdkWEJrWVhSbFEyRnRaWEpoSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzUxY0dSaGRHVlFjbTlxWldOMGFXOXVUV0YwY21sNEtDazdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeE1aVzVuZEdndWRtRnNkV1VnUFNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2x1YVhSRGNtRjBaWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdOeVlYUmxTV1FnUFNBd095QmpjbUYwWlVsa0lEd2dRMjl1YzNSaGJuUnpMbTVpUTNKaGRHVnpPeUJqY21GMFpVbGtLeXNnS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOeVlYUmxJRDBnWTNKbFlYUmxRM0poZEdVb0lHTnlZWFJsU1dRZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVZV1JrS0NCamNtRjBaU0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMbkJ2YzJsMGFXOXVMbm9nUFNBdEtDQXhNVEFnTFNBb0lERXhNQ0FxSUVOdmJuTjBZVzUwY3k1dVlrTnlZWFJsY3lBcElDa2dMeUF5TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQmpjbVZoZEdWRGNtRjBaU0E5SUdaMWJtTjBhVzl1SUNnZ2FXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRJRDBnYm1WM0lGUklVa1ZGTGs5aWFtVmpkRE5FS0NrN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdKdmVGOWliM1IwYjIwZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F5TURBc0lERXdMQ0F4TURBZ0tTd2dkMjl2WkY5dFlYUmxjbWxoYkNBcE8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMkp2ZEhSdmJTQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmliM2hmYkdWbWRDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURJd01Dd2dNVEFzSURnd0lDa3NJSGR2YjJSZmJXRjBaWEpwWVd3Z0tUdGNjbHh1SUNBZ0lHSnZlRjlzWldaMExuQnZjMmwwYVc5dUxuTmxkQ2dnTUN3Z016VXNJQzAxTlNBcE8xeHlYRzRnSUNBZ1ltOTRYMnhsWm5RdWNtOTBZWFJwYjI0dWVDQTlJRTFoZEdndVVFa2dMeUF5TzF4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgyeGxablFnS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsa0lEMDlQU0F3SUNrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCaWIzaGZjbWxuYUhRZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F5TURBc0lERXdMQ0E0TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNBZ0lDQWdZbTk0WDNKcFoyaDBMbkJ2YzJsMGFXOXVMbk5sZENnZ01Dd2dNelVzSURVMUlDazdYSEpjYmlBZ0lDQWdJQ0FnWW05NFgzSnBaMmgwTG5KdmRHRjBhVzl1TG5nZ1BTQk5ZWFJvTGxCSklDOGdNanRjY2x4dUlDQWdJQ0FnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZjbWxuYUhRZ0tUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1ltOTRYMkpoWTJzZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0E0TUN3Z01UQXNJREV5TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNCaWIzaGZZbUZqYXk1d2IzTnBkR2x2Ymk1elpYUW9JQzB4TURVc0lETTFMQ0F3SUNrN1hISmNiaUFnSUNCaWIzaGZZbUZqYXk1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZlltRmpheUFwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZlpuSnZiblFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQTBNQ3dnTVRBc0lERXdNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0JpYjNoZlpuSnZiblF1Y0c5emFYUnBiMjR1YzJWMEtDQTVOU3dnTWpVc0lEQWdLVHRjY2x4dUlDQWdJR0p2ZUY5bWNtOXVkQzV5YjNSaGRHbHZiaTU2SUQwZ1RXRjBhQzVRU1NBdklESTdYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmWm5KdmJuUWdLVHRjY2x4dVhISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVjRzl6YVhScGIyNHVlaUE5SUMweE1UQWdLaUJwWkR0Y2NseHVJQ0FnSUhKbGRIVnliaUJqY21GMFpYTmJJR2xrSUYwN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2x1YVhSU1pXTnZjbVJ6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmpkWEp5Wlc1MFVtVmpiM0prU1dRZ1BTQXdPMXh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR055WVhSbFNXUWdQU0F3T3lCamNtRjBaVWxrSUR3Z1kzSmhkR1Z6TG14bGJtZDBhRHNnWTNKaGRHVkpaQ3NySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2NHOXpJRDBnTURzZ2NHOXpJRHdnUTI5dWMzUmhiblJ6TG5KbFkyOXlaSE5RWlhKRGNtRjBaVHNnY0c5ekt5c2dLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR055WldGMFpWSmxZMjl5WkNnZ1kzVnljbVZ1ZEZKbFkyOXlaRWxrTENCamNtRjBaVWxrTENCd2IzTWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGSmxZMjl5WkVsa0t5czdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdOeVpXRjBaVkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRc0lHTnlZWFJsU1dRc0lIQnZjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnY21WamIzSmtJRDBnYm1WM0lGSmxZMjl5WkNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcE8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCamNtRjBaVWxrSUYwdVlXUmtLQ0J5WldOdmNtUXViV1Z6YUNBcE8xeHlYRzRnSUNBZ2NtVmpiM0prY3k1d2RYTm9LQ0J5WldOdmNtUWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1oyVjBVbVZqYjNKa1RXRjBaWEpwWVd3Z1BTQm1kVzVqZEdsdmJpQW9JSE55WXl3Z2FHRnpVMnhsWlhabElDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnBiV2NnUFNCdVpYY2dTVzFoWjJVb0tUdGNjbHh1SUNBZ0lHbHRaeTVqY205emMwOXlhV2RwYmlBOUlGd2lRVzV2Ym5sdGIzVnpYQ0k3WEhKY2JpQWdJQ0JwYldjdWMzSmpJRDBnYzNKaklEOGdjM0pqSURvZ0p5YzdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHbHRaMWRwWkhSb0lEMGdOREF3TEZ4eVhHNGdJQ0FnSUNBZ0lHbHRaMGhsYVdkb2RDQTlJRFF3TUN4Y2NseHVJQ0FnSUNBZ0lDQnRZWEJEWVc1MllYTWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDQW5ZMkZ1ZG1Gekp5QXBPMXh5WEc1Y2NseHVJQ0FnSUcxaGNFTmhiblpoY3k1M2FXUjBhQ0E5SUcxaGNFTmhiblpoY3k1b1pXbG5hSFFnUFNBME1EQTdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlIUmxlSFIxY21VZ1BTQnVaWGNnVkVoU1JVVXVWR1Y0ZEhWeVpTZ2diV0Z3UTJGdWRtRnpJQ2s3WEhKY2JpQWdJQ0IwWlhoMGRYSmxMbTFwYmtacGJIUmxjaUE5SUZSSVVrVkZMa3hwYm1WaGNrWnBiSFJsY2p0Y2NseHVYSEpjYmlBZ0lDQnBiV2N1YjI1c2IyRmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2hoYzFOc1pXVjJaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ6YkdWbGRtVWdQU0J1WlhjZ1NXMWhaMlVvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJ4bFpYWmxMbk55WXlBOUlFTnZibk4wWVc1MGN5NXpiR1ZsZG1WTllYTnJWR1Y0ZEhWeVpUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5zWldWMlpTNXZibXh2WVdRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMGVDQTlJRzFoY0VOaGJuWmhjeTVuWlhSRGIyNTBaWGgwS0NBbk1tUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0JwYldkWGFXUjBhQ0F2SURJc0lHbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzV5YjNSaGRHVW9JRTFoZEdndVVFa2dMeUF5SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NBdGFXMW5WMmxrZEdnZ0x5QXlMQ0F0YVcxblNHVnBaMmgwSUM4Z01pQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExtUnlZWGRKYldGblpTZ2dhVzFuTENBeE16QXNJREV6TUN3Z01UTTFMQ0F4TXpVZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04wZUM1a2NtRjNTVzFoWjJVb0lITnNaV1YyWlN3Z01Dd2dNQ3dnTkRBd0xDQTBNREFnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmxlSFIxY21VdWJtVmxaSE5WY0dSaGRHVWdQU0IwY25WbE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamRIZ2dQU0J0WVhCRFlXNTJZWE11WjJWMFEyOXVkR1Y0ZENnZ0p6SmtKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQnBiV2RYYVdSMGFDQXZJRElzSUdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5KdmRHRjBaU2dnVFdGMGFDNVFTU0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMblJ5WVc1emJHRjBaU2dnTFdsdFoxZHBaSFJvSUM4Z01pd2dMV2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbVJ5WVhkSmJXRm5aU2dnYVcxbkxDQXdMQ0F3TENBME1EQXNJRFF3TUNBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpYaDBkWEpsTG01bFpXUnpWWEJrWVhSbElEMGdkSEoxWlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYzJ4bFpYWmxUV0YwWlhKcFlXd2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFFeGhiV0psY25STllYUmxjbWxoYkNnZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nUTI5dWMzUmhiblJ6TG5Oc1pXVjJaVU52Ykc5eVhISmNibHh5WEc0Z0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ0WVhSbGNtbGhiSE1nUFNCYlhISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdMeThnZEdWNGRIVnlaVnh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVTRkpGUlM1TlpYTm9UR0Z0WW1WeWRFMWhkR1Z5YVdGc0tDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBd2VHWm1abVptWml4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldGd09pQjBaWGgwZFhKbFhISmNiaUFnSUNBZ0lDQWdmU0FwTEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlUxaGRHVnlhV0ZzTEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlUxaGRHVnlhV0ZzWEhKY2JpQWdJQ0JkTzF4eVhHNGdJQ0FnY21WMGRYSnVJRzFoZEdWeWFXRnNjenRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdWVlJKVEZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2QyaGxaV3hFYVhOMFlXNWpaU0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ1pTQTlJR1YyWlc1ME8xeHlYRzRnSUNBZ2RtRnlJSGNnUFNCbExuZG9aV1ZzUkdWc2RHRXNYSEpjYmlBZ0lDQWdJQ0FnWkNBOUlHVXVaR1YwWVdsc08xeHlYRzRnSUNBZ2FXWWdLQ0JrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JSGNnS1NCeVpYUjFjbTRnZHlBdklHUWdMeUEwTUNBcUlHUWdQaUF3SUQ4Z01TQTZJQzB4T3lBdkx5QlBjR1Z5WVZ4eVhHNGdJQ0FnSUNBZ0lHVnNjMlVnY21WMGRYSnVJQzFrSUM4Z016c2dMeThnUm1seVpXWnZlRHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnY21WMGRYSnVJSGNnTHlBeE1qQTdJQzh2SUVsRkwxTmhabUZ5YVM5RGFISnZiV1ZjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUIzYUdWbGJFUnBjbVZqZEdsdmJpQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnWlNBOUlHVjJaVzUwTzF4eVhHNGdJQ0FnY21WMGRYSnVJQ2dnWlM1a1pYUmhhV3dnUENBd0lDa2dQeUF4SURvZ0tDQmxMbmRvWldWc1JHVnNkR0VnUGlBd0lDa2dQeUF4SURvZ0xURTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdOdmIzSmtjMFZ4ZFdGc2MwRndjSEp2ZUNBOUlHWjFibU4wYVc5dUlDZ2dZMjl2Y21ReExDQmpiMjl5WkRJc0lISmhibWRsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQW9JRTFoZEdndVlXSnpLQ0JqYjI5eVpERXVlQ0F0SUdOdmIzSmtNaTU0SUNrZ1BEMGdjbUZ1WjJVZ0tTQW1KaUFvSUUxaGRHZ3VZV0p6S0NCamIyOXlaREV1ZVNBdElHTnZiM0prTWk1NUlDa2dQRDBnY21GdVoyVWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1ptRmtaVTkxZENBOUlHWjFibU4wYVc5dUlDZ2daV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9aV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwOVBTQXdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkSEpoYm5OcGRHbHZia1YyWlc1MElEMGdaMlYwVkhKaGJuTnBkR2x2YmtWMlpXNTBLR1ZzWlcxbGJuUXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEhKaGJuTnBkR2x2YmtWMlpXNTBLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvZEhKaGJuTnBkR2x2YmtWMlpXNTBMQ0J2YmtaaFpHVkRiMjF3YkdWMFpTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1ZV1JsU1c0Z1BTQm1kVzVqZEdsdmJpQW9JR1ZzWlcxbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOVBUMGdKeWNnZkh3Z1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRDA5UFNBbk1TY3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUhaaGNpQjBjbUZ1YzJsMGFXOXVSWFpsYm5RZ1BTQm5aWFJVY21GdWMybDBhVzl1UlhabGJuUW9aV3hsYldWdWRDazdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjJKc2IyTnJKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0hSeVlXNXphWFJwYjI1RmRtVnVkQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0hSeVlXNXphWFJwYjI1RmRtVnVkQ3dnYjI1R1lXUmxRMjl0Y0d4bGRHVXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh5WEc0Z0lDQWdJQ0FnSUgwc0lERTFLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ2YmtaaFpHVkRiMjF3YkdWMFpTZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQmxMblJoY21kbGRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLR1V1ZEhsd1pTd2diMjVHWVdSbFEyOXRjR3hsZEdVcE8xeHlYRzRnSUNBZ2FXWWdLQ0JsTG5SaGNtZGxkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMDlQU0FuTUNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHVXVkR0Z5WjJWMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbmJtOXVaU2M3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWlM1MFlYSm5aWFF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2RpYkc5amF5YzdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWNjbHh1ZG1GeUlHaHBaR1ZGYkdWdFpXNTBJRDBnWm5WdVkzUnBiMjRvSUdWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01EdGNjbHh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjY2x4dVhISmNibjFjY2x4dVhISmNiblpoY2lCemFHOTNSV3hsYldWdWRDQTlJR1oxYm1OMGFXOXVLQ0JsYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWM3WEhKY2JpQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh5WEc1Y2NseHVmVnh5WEc1Y2NseHVkbUZ5SUdkbGRGUnlZVzV6YVhScGIyNUZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJSFpoY2lCMExGeHlYRzRnSUNBZ0lDQWdJSFJ5WVc1emFYUnBiMjV6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBbmRISmhibk5wZEdsdmJpYzZKM1J5WVc1emFYUnBiMjVsYm1RbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBblQxUnlZVzV6YVhScGIyNG5PaWR2VkhKaGJuTnBkR2x2YmtWdVpDY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZE5iM3BVY21GdWMybDBhVzl1SnpvbmRISmhibk5wZEdsdmJtVnVaQ2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2RYWldKcmFYUlVjbUZ1YzJsMGFXOXVKem9uZDJWaWEybDBWSEpoYm5OcGRHbHZia1Z1WkNkY2NseHVJQ0FnSUNBZ0lDQjlPMXh5WEc1Y2NseHVJQ0FnSUdadmNpaDBJR2x1SUhSeVlXNXphWFJwYjI1ektTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1LQ0JrYjJOMWJXVnVkQzVpYjJSNUxuTjBlV3hsVzNSZElDRTlQU0IxYm1SbFptbHVaV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISmhibk5wZEdsdmJuTmJkRjA3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dWRtRnlJR05oYkdOMWJHRjBaVU5oYm5aaGMxTnBlbVVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJGdWRtRnpWMmxrZEdnZ1BTQkRiMjV6ZEdGdWRITXVZMkZ1ZG1GelYybGtkR2dnUHlCRGIyNXpkR0Z1ZEhNdVkyRnVkbUZ6VjJsa2RHZ2dPaUJ5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1amJHbGxiblJYYVdSMGFEdGNjbHh1SUNBZ0lHTmhiblpoYzBobGFXZG9kQ0E5SUVOdmJuTjBZVzUwY3k1allXNTJZWE5JWldsbmFIUWdQeUJEYjI1emRHRnVkSE11WTJGdWRtRnpTR1ZwWjJoMElEb2djbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1WTJ4cFpXNTBTR1ZwWjJoME8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ6WlhSRFlXNTJZWE5FYVcxbGJuTnBiMjV6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUM4dmNtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWFHVnBaMmgwSUNBZ0lDQTlJR05oYm5aaGMwaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JpQWdJQ0JqWVc1MllYTkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1obGFXZG9kQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1b1pXbG5hSFFnUFNCallXNTJZWE5JWldsbmFIUWdLeUFuY0hnbk8xeHlYRzRnSUNBZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVhR1ZwWjJoMElEMGdZMkZ1ZG1GelNHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dVhISmNiaUFnSUNBdkwzSnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExuZHBaSFJvSUNBZ0lDQTlJR05oYm5aaGMxZHBaSFJvSUNzZ0ozQjRKenRjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1ZDJsa2RHZ2dQU0JqWVc1MllYTlhhV1IwYUNBcklDZHdlQ2M3WEhKY2JpQWdJQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzUzYVdSMGFDQTlJR05oYm5aaGMxZHBaSFJvSUNzZ0ozQjRKenRjY2x4dUlDQWdJR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5kcFpIUm9JRDBnWTJGdWRtRnpWMmxrZEdnZ0t5QW5jSGduTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUhOb2RXWm1iR1VvSUhZZ0tTQjdJQzh2SUVwdmJtRnpJRkpoYjI1cElGTnZZWEpsY3lCVGFXeDJZU0F0SUdoMGRIQTZMeTlxYzJaeWIyMW9aV3hzTG1OdmJTOWhjbkpoZVM5emFIVm1abXhsSUZ0eVpYWXVJQ014WFZ4eVhHNWNjbHh1SUNBZ0lHWnZjaUFvSUhaaGNpQnFMQ0I0TENCcElEMGdkaTVzWlc1bmRHZzdJR2s3SUdvZ1BTQndZWEp6WlVsdWRDZ2dUV0YwYUM1eVlXNWtiMjBvS1NBcUlHa2dLU3dnZUNBOUlIWmJJQzB0YVNCZExDQjJXeUJwSUYwZ1BTQjJXeUJxSUYwc0lIWmJJR29nWFNBOUlIZ2dLVHRjY2x4dUlDQWdJSEpsZEhWeWJpQjJPMXh5WEc1Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhWE5HZFc1amRHbHZiaWdnYjJKcUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUIwZVhCbGIyWWdiMkpxSUQwOUlDZG1kVzVqZEdsdmJpY2dmSHdnWm1Gc2MyVTdYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQkZXRkJQVWxSVElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRkIxWW14cFl5Qk5aWFJvYjJSeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibVY0Y0c5eWRITXVhVzVwZENBOUlHWjFibU4wYVc5dUlDZ2djR0Z5WVcxeklDa2dlMXh5WEc1Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGVIUmxibVFvY0dGeVlXMXpLVHRjY2x4dVhISmNiaUFnSUNBdkx5Qm1aV0YwZFhKbElIUmxjM1JjY2x4dUlDQWdJR2xtSUNnZ0lVMXZaR1Z5Ym1sNmNpNTNaV0puYkNBcElISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhkcGJtUnZkeTVrWlhacFkyVlFhWGhsYkZKaGRHbHZJQ0U5UFNCMWJtUmxabWx1WldRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUndjaUE5SUhkcGJtUnZkeTVrWlhacFkyVlFhWGhsYkZKaGRHbHZPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J3Y2lBOUlERTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lYSnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnliMjkwSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTJGdWRtRnpRMjl1ZEdGcGJtVnlSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVZMkZ1ZG1GelEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJR05oYm5aaGN5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5U1dRZ0tUdGNjbHh1SUNBZ0lHbG1JQ2dnSVd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnNiMkZrYVc1bklHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2FXNW1iME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2dRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbWx1Wm05RGIyNTBZV2x1WlhKSlpDQXBPMXh5WEc0Z0lDQWdhV1lnS0NBaGFXNW1iME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0lDZGpjbUYwWldScFoyZGxjaTVxY3lBdElFbHVhWFFnWm1GcGJHVmtJRG9nWTJGdUlHNXZkQ0JtYVc1a0lHbHVabThnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblF1SnlBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0IwYVhSc1pVbHVabTlGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTUwYVhSc1pVTnZiblJoYVc1bGNrbGtJQ2s3WEhKY2JpQWdJQ0JwWmlBb0lDRjBhWFJzWlVsdVptOUZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCeVpXTnZjbVFnZEdsMGJHVWdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUXVKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmhjblJwYzNSSmJtWnZSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVZWEowYVhOMFEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCeVpXTnZjbVFnWVhKMGFYTjBJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdZMjkyWlhKSmJtWnZSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVZMjkyWlhKRGIyNTBZV2x1WlhKSlpDQXBPMXh5WEc0Z0lDQWdhV1lnS0NBaFkyOTJaWEpKYm1adlJXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnWTI5MlpYSWdhVzFoWjJVZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5RdUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZMkZzWTNWc1lYUmxRMkZ1ZG1GelUybDZaU2dwTzF4eVhHNWNjbHh1SUNBZ0lHbHVhWFJUWTJWdVpTZ3BPMXh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1elpXeGxZM1JTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdsa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dhV1FnUENBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXUWdQaUJzYjJGa1pXUlNaV052Y21SeklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOUlHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ2FXUTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NXpkR0Z5ZEZKbGJtUmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JrYjFKbGJtUmxjaUE5SUhSeWRXVTdYSEpjYmlBZ0lDQmhibWx0WVhSbEtDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NXpkRzl3VW1WdVpHVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR1J2VW1WdVpHVnlJRDBnWm1Gc2MyVTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NWxibUZpYkdWUWIzTjBjSEp2WTJWemMybHVaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Y0c5emRIQnliMk5sYzNOcGJtY2dQU0IwY25WbE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVpHbHpZV0pzWlZCdmMzUndjbTlqWlhOemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTV3YjNOMGNISnZZMlZ6YzJsdVp5QTlJR1poYkhObE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQU0FnVUhWaWJHbGpJR2RsZEhSbGNuTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSRFlXNTJZWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblE3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSU1pXTnZjbVJ6UkdGMFlVeHBjM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITkVZWFJoVEdsemREdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxtZGxkRXh2WVdSbFpGSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUd4dllXUmxaRkpsWTI5eVpITTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NW5aWFJUWld4bFkzUmxaRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5SUNCTlpYUm9iMlJ6SUdGalkyVnpjMjl5Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWxlSEJ2Y25SekxteHZZV1JTWldOdmNtUnpJRDBnYkc5aFpGSmxZMjl5WkhNN1hISmNibVY0Y0c5eWRITXVkVzVzYjJGa1VtVmpiM0prY3lBOUlIVnViRzloWkZKbFkyOXlaSE03WEhKY2JtVjRjRzl5ZEhNdWNtVnpaWFJUYUc5M2JsSmxZMjl5WkNBOUlISmxjMlYwVTJodmQyNVNaV052Y21RN1hISmNibVY0Y0c5eWRITXVjMmgxWm1ac1pWSmxZMjl5WkhNZ1BTQnphSFZtWm14bFVtVmpiM0prY3p0Y2NseHVaWGh3YjNKMGN5NW1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUWdQU0JtYkdsd1UyVnNaV04wWldSU1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdVpteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJWc1pXTjBVSEpsZGxKbFkyOXlaQ0E5SUhObGJHVmpkRkJ5WlhaU1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdWMyVnNaV04wVG1WNGRGSmxZMjl5WkNBOUlITmxiR1ZqZEU1bGVIUlNaV052Y21RN1hISmNibVY0Y0c5eWRITXVjMmh2ZDB4dllXUnBibWNnUFNCemFHOTNURzloWkdsdVp6dGNjbHh1Wlhod2IzSjBjeTVvYVdSbFRHOWhaR2x1WnlBOUlHaHBaR1ZNYjJGa2FXNW5PMXh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQlFWVUpNU1VNZ1FWQkpJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1pYaHdiM0owY3pzaVhYMD0iLCIvLyBzdGF0cy5qcyAtIGh0dHA6Ly9naXRodWIuY29tL21yZG9vYi9zdGF0cy5qc1xudmFyIFN0YXRzPWZ1bmN0aW9uKCl7dmFyIGw9RGF0ZS5ub3coKSxtPWwsZz0wLG49SW5maW5pdHksbz0wLGg9MCxwPUluZmluaXR5LHE9MCxyPTAscz0wLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmLmlkPVwic3RhdHNcIjtmLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCk7dCgrK3MlMil9LCExKTtmLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDo4MHB4O29wYWNpdHk6MC45O2N1cnNvcjpwb2ludGVyXCI7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmlkPVwiZnBzXCI7YS5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowIDAgM3B4IDNweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMDAyXCI7Zi5hcHBlbmRDaGlsZChhKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuaWQ9XCJmcHNUZXh0XCI7aS5zdHlsZS5jc3NUZXh0PVwiY29sb3I6IzBmZjtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTVweFwiO1xuaS5pbm5lckhUTUw9XCJGUFNcIjthLmFwcGVuZENoaWxkKGkpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5pZD1cImZwc0dyYXBoXCI7Yy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NzRweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiMwZmZcIjtmb3IoYS5hcHBlbmRDaGlsZChjKTs3ND5jLmNoaWxkcmVuLmxlbmd0aDspe3ZhciBqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2ouc3R5bGUuY3NzVGV4dD1cIndpZHRoOjFweDtoZWlnaHQ6MzBweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzExM1wiO2MuYXBwZW5kQ2hpbGQoail9dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmlkPVwibXNcIjtkLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjAgMCAzcHggM3B4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMwMjA7ZGlzcGxheTpub25lXCI7Zi5hcHBlbmRDaGlsZChkKTt2YXIgaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuay5pZD1cIm1zVGV4dFwiO2suc3R5bGUuY3NzVGV4dD1cImNvbG9yOiMwZjA7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE1cHhcIjtrLmlubmVySFRNTD1cIk1TXCI7ZC5hcHBlbmRDaGlsZChrKTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9XCJtc0dyYXBoXCI7ZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NzRweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiMwZjBcIjtmb3IoZC5hcHBlbmRDaGlsZChlKTs3ND5lLmNoaWxkcmVuLmxlbmd0aDspaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxqLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDoxcHg7aGVpZ2h0OjMwcHg7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMxMzFcIixlLmFwcGVuZENoaWxkKGopO3ZhciB0PWZ1bmN0aW9uKGIpe3M9Yjtzd2l0Y2gocyl7Y2FzZSAwOmEuc3R5bGUuZGlzcGxheT1cblwiYmxvY2tcIjtkLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7YnJlYWs7Y2FzZSAxOmEuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wifX07cmV0dXJue1JFVklTSU9OOjEyLGRvbUVsZW1lbnQ6ZixzZXRNb2RlOnQsYmVnaW46ZnVuY3Rpb24oKXtsPURhdGUubm93KCl9LGVuZDpmdW5jdGlvbigpe3ZhciBiPURhdGUubm93KCk7Zz1iLWw7bj1NYXRoLm1pbihuLGcpO289TWF0aC5tYXgobyxnKTtrLnRleHRDb250ZW50PWcrXCIgTVMgKFwiK24rXCItXCIrbytcIilcIjt2YXIgYT1NYXRoLm1pbigzMCwzMC0zMCooZy8yMDApKTtlLmFwcGVuZENoaWxkKGUuZmlyc3RDaGlsZCkuc3R5bGUuaGVpZ2h0PWErXCJweFwiO3IrKztiPm0rMUUzJiYoaD1NYXRoLnJvdW5kKDFFMypyLyhiLW0pKSxwPU1hdGgubWluKHAsaCkscT1NYXRoLm1heChxLGgpLGkudGV4dENvbnRlbnQ9aCtcIiBGUFMgKFwiK3ArXCItXCIrcStcIilcIixhPU1hdGgubWluKDMwLDMwLTMwKihoLzEwMCkpLGMuYXBwZW5kQ2hpbGQoYy5maXJzdENoaWxkKS5zdHlsZS5oZWlnaHQ9XG5hK1wicHhcIixtPWIscj0wKTtyZXR1cm4gYn0sdXBkYXRlOmZ1bmN0aW9uKCl7bD10aGlzLmVuZCgpfX19O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9U3RhdHMpO1xuIiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NvbGUvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NvbGUvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG4vLyBEYXRlLm5vdyBzaGltIGZvciAoYWhlbSkgSW50ZXJuZXQgRXhwbG8oZHxyKWVyXG5pZiAoIERhdGUubm93ID09PSB1bmRlZmluZWQgKSB7XG5cblx0RGF0ZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG5cblx0fTtcblxufVxuXG52YXIgVFdFRU4gPSBUV0VFTiB8fCAoIGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgX3R3ZWVucyA9IFtdO1xuXG5cdHJldHVybiB7XG5cblx0XHRSRVZJU0lPTjogJzE0JyxcblxuXHRcdGdldEFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gX3R3ZWVucztcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0X3R3ZWVucyA9IFtdO1xuXG5cdFx0fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKCB0d2VlbiApIHtcblxuXHRcdFx0X3R3ZWVucy5wdXNoKCB0d2VlbiApO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gKCB0d2VlbiApIHtcblxuXHRcdFx0dmFyIGkgPSBfdHdlZW5zLmluZGV4T2YoIHR3ZWVuICk7XG5cblx0XHRcdGlmICggaSAhPT0gLTEgKSB7XG5cblx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoIGksIDEgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCB0aW1lICkge1xuXG5cdFx0XHRpZiAoIF90d2VlbnMubGVuZ3RoID09PSAwICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdHRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpICk7XG5cblx0XHRcdHdoaWxlICggaSA8IF90d2VlbnMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGlmICggX3R3ZWVuc1sgaSBdLnVwZGF0ZSggdGltZSApICkge1xuXG5cdFx0XHRcdFx0aSsrO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRfdHdlZW5zLnNwbGljZSggaSwgMSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH1cblx0fTtcblxufSApKCk7XG5cblRXRUVOLlR3ZWVuID0gZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cblx0dmFyIF9vYmplY3QgPSBvYmplY3Q7XG5cdHZhciBfdmFsdWVzU3RhcnQgPSB7fTtcblx0dmFyIF92YWx1ZXNFbmQgPSB7fTtcblx0dmFyIF92YWx1ZXNTdGFydFJlcGVhdCA9IHt9O1xuXHR2YXIgX2R1cmF0aW9uID0gMTAwMDtcblx0dmFyIF9yZXBlYXQgPSAwO1xuXHR2YXIgX3lveW8gPSBmYWxzZTtcblx0dmFyIF9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dmFyIF9yZXZlcnNlZCA9IGZhbHNlO1xuXHR2YXIgX2RlbGF5VGltZSA9IDA7XG5cdHZhciBfc3RhcnRUaW1lID0gbnVsbDtcblx0dmFyIF9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dmFyIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dmFyIF9jaGFpbmVkVHdlZW5zID0gW107XG5cdHZhciBfb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR2YXIgX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXG5cdC8vIFNldCBhbGwgc3RhcnRpbmcgdmFsdWVzIHByZXNlbnQgb24gdGhlIHRhcmdldCBvYmplY3Rcblx0Zm9yICggdmFyIGZpZWxkIGluIG9iamVjdCApIHtcblxuXHRcdF92YWx1ZXNTdGFydFsgZmllbGQgXSA9IHBhcnNlRmxvYXQob2JqZWN0W2ZpZWxkXSwgMTApO1xuXG5cdH1cblxuXHR0aGlzLnRvID0gZnVuY3Rpb24gKCBwcm9wZXJ0aWVzLCBkdXJhdGlvbiApIHtcblxuXHRcdGlmICggZHVyYXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0X2R1cmF0aW9uID0gZHVyYXRpb247XG5cblx0XHR9XG5cblx0XHRfdmFsdWVzRW5kID0gcHJvcGVydGllcztcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uICggdGltZSApIHtcblxuXHRcdFRXRUVOLmFkZCggdGhpcyApO1xuXG5cdFx0X2lzUGxheWluZyA9IHRydWU7XG5cblx0XHRfb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblxuXHRcdF9zdGFydFRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpICk7XG5cdFx0X3N0YXJ0VGltZSArPSBfZGVsYXlUaW1lO1xuXG5cdFx0Zm9yICggdmFyIHByb3BlcnR5IGluIF92YWx1ZXNFbmQgKSB7XG5cblx0XHRcdC8vIGNoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdIGluc3RhbmNlb2YgQXJyYXkgKSB7XG5cblx0XHRcdFx0aWYgKCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0X3ZhbHVlc0VuZFsgcHJvcGVydHkgXSA9IFsgX29iamVjdFsgcHJvcGVydHkgXSBdLmNvbmNhdCggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSA9IF9vYmplY3RbIHByb3BlcnR5IF07XG5cblx0XHRcdGlmKCAoIF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSBpbnN0YW5jZW9mIEFycmF5ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXSA9IF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSB8fCAwO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoICFfaXNQbGF5aW5nICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0VFdFRU4ucmVtb3ZlKCB0aGlzICk7XG5cdFx0X2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKCBfb25TdG9wQ2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdF9vblN0b3BDYWxsYmFjay5jYWxsKCBfb2JqZWN0ICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrICkge1xuXG5cdFx0XHRfY2hhaW5lZFR3ZWVuc1sgaSBdLnN0b3AoKTtcblxuXHRcdH1cblxuXHR9O1xuXG5cdHRoaXMuZGVsYXkgPSBmdW5jdGlvbiAoIGFtb3VudCApIHtcblxuXHRcdF9kZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnJlcGVhdCA9IGZ1bmN0aW9uICggdGltZXMgKSB7XG5cblx0XHRfcmVwZWF0ID0gdGltZXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnlveW8gPSBmdW5jdGlvbiggeW95byApIHtcblxuXHRcdF95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cblx0dGhpcy5lYXNpbmcgPSBmdW5jdGlvbiAoIGVhc2luZyApIHtcblxuXHRcdF9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuaW50ZXJwb2xhdGlvbiA9IGZ1bmN0aW9uICggaW50ZXJwb2xhdGlvbiApIHtcblxuXHRcdF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5jaGFpbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdF9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0YXJ0ID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25VcGRhdGUgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uVXBkYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RvcCA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCB0aW1lICkge1xuXG5cdFx0dmFyIHByb3BlcnR5O1xuXG5cdFx0aWYgKCB0aW1lIDwgX3N0YXJ0VGltZSApIHtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHR9XG5cblx0XHRpZiAoIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdGlmICggX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRfb25TdGFydENhbGxiYWNrLmNhbGwoIF9vYmplY3QgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRfb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0dmFyIGVsYXBzZWQgPSAoIHRpbWUgLSBfc3RhcnRUaW1lICkgLyBfZHVyYXRpb247XG5cdFx0ZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cblx0XHR2YXIgdmFsdWUgPSBfZWFzaW5nRnVuY3Rpb24oIGVsYXBzZWQgKTtcblxuXHRcdGZvciAoIHByb3BlcnR5IGluIF92YWx1ZXNFbmQgKSB7XG5cblx0XHRcdHZhciBzdGFydCA9IF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IF92YWx1ZXNFbmRbIHByb3BlcnR5IF07XG5cblx0XHRcdGlmICggZW5kIGluc3RhbmNlb2YgQXJyYXkgKSB7XG5cblx0XHRcdFx0X29iamVjdFsgcHJvcGVydHkgXSA9IF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oIGVuZCwgdmFsdWUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXG5cdFx0XHRcdGlmICggdHlwZW9mKGVuZCkgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0ZW5kID0gc3RhcnQgKyBwYXJzZUZsb2F0KGVuZCwgMTApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICggdHlwZW9mKGVuZCkgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0X29iamVjdFsgcHJvcGVydHkgXSA9IHN0YXJ0ICsgKCBlbmQgLSBzdGFydCApICogdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBfb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0X29uVXBkYXRlQ2FsbGJhY2suY2FsbCggX29iamVjdCwgdmFsdWUgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZWxhcHNlZCA9PSAxICkge1xuXG5cdFx0XHRpZiAoIF9yZXBlYXQgPiAwICkge1xuXG5cdFx0XHRcdGlmKCBpc0Zpbml0ZSggX3JlcGVhdCApICkge1xuXHRcdFx0XHRcdF9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciggcHJvcGVydHkgaW4gX3ZhbHVlc1N0YXJ0UmVwZWF0ICkge1xuXG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXSA9IF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXSArIHBhcnNlRmxvYXQoX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSwgMTApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXTtcblx0XHRcdFx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXSA9IF92YWx1ZXNFbmRbIHByb3BlcnR5IF07XG5cdFx0XHRcdFx0XHRfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSA9IF92YWx1ZXNTdGFydFJlcGVhdFsgcHJvcGVydHkgXTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF95b3lvKSB7XG5cdFx0XHRcdFx0X3JldmVyc2VkID0gIV9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9zdGFydFRpbWUgPSB0aW1lICsgX2RlbGF5VGltZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIF9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRfb25Db21wbGV0ZUNhbGxiYWNrLmNhbGwoIF9vYmplY3QgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrICkge1xuXG5cdFx0XHRcdFx0X2NoYWluZWRUd2VlbnNbIGkgXS5zdGFydCggdGltZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH07XG5cbn07XG5cblxuVFdFRU4uRWFzaW5nID0ge1xuXG5cdExpbmVhcjoge1xuXG5cdFx0Tm9uZTogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gaztcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YWRyYXRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqICggMiAtIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIC0gMC41ICogKCAtLWsgKiAoIGsgLSAyICkgLSAxICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDdWJpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAwLjUgKiAoICggayAtPSAyICkgKiBrICogayArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YXJ0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtICggLS1rICogayAqIGsgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoICggayAtPSAyICkgKiBrICogayAqIGsgLSAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWludGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICogayAqIGsgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRTaW51c29pZGFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguY29zKCBrICogTWF0aC5QSSAvIDIgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc2luKCBrICogTWF0aC5QSSAvIDIgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKCAxIC0gTWF0aC5jb3MoIE1hdGguUEkgKiBrICkgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEV4cG9uZW50aWFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdyggMTAyNCwgayAtIDEgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KCAyLCAtIDEwICogayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIE1hdGgucG93KCAxMDI0LCBrIC0gMSApO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggLSBNYXRoLnBvdyggMiwgLSAxMCAqICggayAtIDEgKSApICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5zcXJ0KCAxIC0gayAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSkgcmV0dXJuIC0gMC41ICogKCBNYXRoLnNxcnQoIDEgLSBrICogaykgLSAxKTtcblx0XHRcdHJldHVybiAwLjUgKiAoIE1hdGguc3FydCggMSAtICggayAtPSAyKSAqIGspICsgMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFbGFzdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcblx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRpZiAoICFhIHx8IGEgPCAxICkgeyBhID0gMTsgcyA9IHAgLyA0OyB9XG5cdFx0XHRlbHNlIHMgPSBwICogTWF0aC5hc2luKCAxIC8gYSApIC8gKCAyICogTWF0aC5QSSApO1xuXHRcdFx0cmV0dXJuIC0gKCBhICogTWF0aC5wb3coIDIsIDEwICogKCBrIC09IDEgKSApICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcblx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRpZiAoICFhIHx8IGEgPCAxICkgeyBhID0gMTsgcyA9IHAgLyA0OyB9XG5cdFx0XHRlbHNlIHMgPSBwICogTWF0aC5hc2luKCAxIC8gYSApIC8gKCAyICogTWF0aC5QSSApO1xuXHRcdFx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtIDEwICogaykgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgMSApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIC0gMC41ICogKCBhICogTWF0aC5wb3coIDIsIDEwICogKCBrIC09IDEgKSApICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApO1xuXHRcdFx0cmV0dXJuIGEgKiBNYXRoLnBvdyggMiwgLTEwICogKCBrIC09IDEgKSApICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSAqIDAuNSArIDE7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCYWNrOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRyZXR1cm4gayAqIGsgKiAoICggcyArIDEgKSAqIGsgLSBzICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblx0XHRcdHJldHVybiAtLWsgKiBrICogKCAoIHMgKyAxICkgKiBrICsgcyApICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogKCBrICogayAqICggKCBzICsgMSApICogayAtIHMgKSApO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCb3VuY2U6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoIDEgLSBrICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggayA8ICggMSAvIDIuNzUgKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIgLyAyLjc1ICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDEuNSAvIDIuNzUgKSApICogayArIDAuNzU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIuNSAvIDIuNzUgKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi4yNSAvIDIuNzUgKSApICogayArIDAuOTM3NTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIGsgKyAwLjk4NDM3NTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggayA8IDAuNSApIHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLkluKCBrICogMiApICogMC41O1xuXHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KCBrICogMiAtIDEgKSAqIDAuNSArIDAuNTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cblRXRUVOLkludGVycG9sYXRpb24gPSB7XG5cblx0TGluZWFyOiBmdW5jdGlvbiAoIHYsIGsgKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMSwgZiA9IG0gKiBrLCBpID0gTWF0aC5mbG9vciggZiApLCBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xuXG5cdFx0aWYgKCBrIDwgMCApIHJldHVybiBmbiggdlsgMCBdLCB2WyAxIF0sIGYgKTtcblx0XHRpZiAoIGsgPiAxICkgcmV0dXJuIGZuKCB2WyBtIF0sIHZbIG0gLSAxIF0sIG0gLSBmICk7XG5cblx0XHRyZXR1cm4gZm4oIHZbIGkgXSwgdlsgaSArIDEgPiBtID8gbSA6IGkgKyAxIF0sIGYgLSBpICk7XG5cblx0fSxcblxuXHRCZXppZXI6IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBiID0gMCwgbiA9IHYubGVuZ3RoIC0gMSwgcHcgPSBNYXRoLnBvdywgYm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbiwgaTtcblxuXHRcdGZvciAoIGkgPSAwOyBpIDw9IG47IGkrKyApIHtcblx0XHRcdGIgKz0gcHcoIDEgLSBrLCBuIC0gaSApICogcHcoIGssIGkgKSAqIHZbIGkgXSAqIGJuKCBuLCBpICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGI7XG5cblx0fSxcblxuXHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAoIHYsIGsgKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMSwgZiA9IG0gKiBrLCBpID0gTWF0aC5mbG9vciggZiApLCBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcblxuXHRcdGlmICggdlsgMCBdID09PSB2WyBtIF0gKSB7XG5cblx0XHRcdGlmICggayA8IDAgKSBpID0gTWF0aC5mbG9vciggZiA9IG0gKiAoIDEgKyBrICkgKTtcblxuXHRcdFx0cmV0dXJuIGZuKCB2WyAoIGkgLSAxICsgbSApICUgbSBdLCB2WyBpIF0sIHZbICggaSArIDEgKSAlIG0gXSwgdlsgKCBpICsgMiApICUgbSBdLCBmIC0gaSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKCBrIDwgMCApIHJldHVybiB2WyAwIF0gLSAoIGZuKCB2WyAwIF0sIHZbIDAgXSwgdlsgMSBdLCB2WyAxIF0sIC1mICkgLSB2WyAwIF0gKTtcblx0XHRcdGlmICggayA+IDEgKSByZXR1cm4gdlsgbSBdIC0gKCBmbiggdlsgbSBdLCB2WyBtIF0sIHZbIG0gLSAxIF0sIHZbIG0gLSAxIF0sIGYgLSBtICkgLSB2WyBtIF0gKTtcblxuXHRcdFx0cmV0dXJuIGZuKCB2WyBpID8gaSAtIDEgOiAwIF0sIHZbIGkgXSwgdlsgbSA8IGkgKyAxID8gbSA6IGkgKyAxIF0sIHZbIG0gPCBpICsgMiA/IG0gOiBpICsgMiBdLCBmIC0gaSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0VXRpbHM6IHtcblxuXHRcdExpbmVhcjogZnVuY3Rpb24gKCBwMCwgcDEsIHQgKSB7XG5cblx0XHRcdHJldHVybiAoIHAxIC0gcDAgKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uICggbiAsIGkgKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXHRcdFx0cmV0dXJuIGZjKCBuICkgLyBmYyggaSApIC8gZmMoIG4gLSBpICk7XG5cblx0XHR9LFxuXG5cdFx0RmFjdG9yaWFsOiAoIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGEgPSBbIDEgXTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggbiApIHtcblxuXHRcdFx0XHR2YXIgcyA9IDEsIGk7XG5cdFx0XHRcdGlmICggYVsgbiBdICkgcmV0dXJuIGFbIG4gXTtcblx0XHRcdFx0Zm9yICggaSA9IG47IGkgPiAxOyBpLS0gKSBzICo9IGk7XG5cdFx0XHRcdHJldHVybiBhWyBuIF0gPSBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSApKCksXG5cblx0XHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAoIHAwLCBwMSwgcDIsIHAzLCB0ICkge1xuXG5cdFx0XHR2YXIgdjAgPSAoIHAyIC0gcDAgKSAqIDAuNSwgdjEgPSAoIHAzIC0gcDEgKSAqIDAuNSwgdDIgPSB0ICogdCwgdDMgPSB0ICogdDI7XG5cdFx0XHRyZXR1cm4gKCAyICogcDEgLSAyICogcDIgKyB2MCArIHYxICkgKiB0MyArICggLSAzICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSApICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzPVRXRUVOOyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG5cdFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuXHJcblx0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcclxuXHJcbnZhciBjYW1lcmEsXHJcblx0dGFyZ2V0O1xyXG5cclxuZnVuY3Rpb24gaW5pdChyYXRpbykge1xyXG5cclxuXHRjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCByYXRpbywgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAvLyAgICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxMCwgMTAsIDEsIDEsIDEpKTtcclxuICAgIC8vICAgICAgICBzY2VuZS5hZGQodGFyZ2V0KTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcblx0ICAgIC50bygge1xyXG5cdCAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuXHQgICAgICAgIHk6IDUwICsgQ29uc3RhbnRzLnNjZW5lLnJlY29yZFNob3duWSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuXHQgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuXHQgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcblx0bmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG5cdCAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnogKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21JblJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEZsaXBwZWRZICsgNTAsXHJcbiAgICAgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0UmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FtZXJhKCkge1xyXG5cdG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB6OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNhbWVyYUFzcGVjdChyYXRpbykge1xyXG5cdGNhbWVyYS5hc3BlY3QgPSByYXRpbztcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb2tBdFRhcmdldCgpIHtcclxuXHRjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aW5pdDogaW5pdCxcclxuXHRmb2N1c1JlY29yZDogZm9jdXNSZWNvcmQsXHJcblx0em9vbUluUmVjb3JkOiB6b29tSW5SZWNvcmQsXHJcblx0em9vbU91dFJlY29yZDogem9vbU91dFJlY29yZCxcclxuXHRyZXNldENhbWVyYTogcmVzZXRDYW1lcmEsXHJcblx0dXBkYXRlQ2FtZXJhQXNwZWN0OiB1cGRhdGVDYW1lcmFBc3BlY3QsXHJcblx0bG9va0F0VGFyZ2V0OiBsb29rQXRUYXJnZXQsXHJcblx0XHJcblx0Z2V0Q2FtZXJhOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBjYW1lcmE7XHJcblx0fSxcclxuXHRnZXRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9XHJcbn1cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpjbUYwWldScFoyZGxjaTlEWVcxbGNtRk5ZVzVoWjJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJRlJJVWtWRklEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkoxUklVa1ZGSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lkVVNGSkZSU2RkSURvZ2JuVnNiQ2tzWEhKY2JseDBWRmRGUlU0Z1BTQnlaWEYxYVhKbEtDZDBkMlZsYmk1cWN5Y3BMRnh5WEc1Y2NseHVYSFJEYjI1emRHRnVkSE1nUFNCeVpYRjFhWEpsS0NjdUwwTnZibk4wWVc1MGN5Y3BPMXh5WEc1Y2NseHVkbUZ5SUdOaGJXVnlZU3hjY2x4dVhIUjBZWEpuWlhRN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCcGJtbDBLSEpoZEdsdktTQjdYSEpjYmx4eVhHNWNkR05oYldWeVlTQTlJRzVsZHlCVVNGSkZSUzVRWlhKemNHVmpkR2wyWlVOaGJXVnlZU2dnTkRVc0lISmhkR2x2TENBd0xqRXNJREl3TURBd0lDazdYSEpjYmlBZ0lDQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZ2dQU0EwTlR0Y2NseHVJQ0FnSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnUFNBek1qdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1elpYUk1aVzV6S0NCallXMWxjbUV1Wm05allXeE1aVzVuZEdnc0lHTmhiV1Z5WVM1bWNtRnRaVk5wZW1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0IwWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNCMFlYSm5aWFFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2h1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb01UQXNJREV3TENBeE1Dd2dNU3dnTVN3Z01Ta3BPMXh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJSE5qWlc1bExtRmtaQ2gwWVhKblpYUXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaExteHZiMnRCZENnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNrN1hISmNibHh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCbWIyTjFjMUpsWTI5eVpDaHlaV052Y21SWVVHOXpMQ0J5WldOdmNtUkJZbk52YkhWMFpWQnZjeWtnZTF4eVhHNWNjbHh1SUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNsY2NseHVYSFFnSUNBZ0xuUnZLQ0I3WEhKY2JseDBJQ0FnSUNBZ0lDQjRPaUJ5WldOdmNtUllVRzl6TEZ4eVhHNWNkQ0FnSUNBZ0lDQWdlVG9nTlRBZ0t5QkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prVTJodmQyNVpMRnh5WEc1Y2RDQWdJQ0FnSUNBZ2Vqb2djbVZqYjNKa1FXSnpiMngxZEdWUWIzTXVlbHh5WEc1Y2RDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc1Y2RDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVYSFJ1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmx4MElDQWdJQzUwYnlnZ2UxeHlYRzVjZENBZ0lDQWdJQ0FnZURvZ2NtVmpiM0prV0ZCdmN5QXJJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNWpZVzFsY21GR2IyTjFjMUJ2YzJsMGFXOXVMbmdzWEhKY2JseDBJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU1TEZ4eVhHNWNkQ0FnSUNBZ0lDQWdlam9nY21WamIzSmtRV0p6YjJ4MWRHVlFiM011ZWlBcklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxucGNjbHh1WEhRZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1WEhRZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnZW05dmJVbHVVbVZqYjNKa0tISmxZMjl5WkZoUWIzTXNJSEpsWTI5eVpFRmljMjlzZFhSbFVHOXpLU0I3WEhKY2JseHlYRzRnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCeVpXTnZjbVJZVUc5ekxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prUm14cGNIQmxaRmtnS3lBMU1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2djbVZqYjNKa1FXSnpiMngxZEdWUWIzTXVlbHh5WEc0Z0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2xjY2x4dVhISmNiaUFnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUdOaGJXVnlZUzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNZ0t5QkRiMjV6ZEdGdWRITXVjMk5sYm1VdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTRJQ3NnT0RBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxua2dMU0ExTUN4Y2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhwdmIyMVBkWFJTWldOdmNtUW9jbVZqYjNKa1dGQnZjeXdnY21WamIzSmtRV0p6YjJ4MWRHVlFiM01wSUh0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMbVJsYkdGNUtDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQzhnTWlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklISmxZMjl5WkZoUWIzTXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRGMxTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I2T2lCeVpXTnZjbVJCWW5OdmJIVjBaVkJ2Y3k1NlhISmNiaUFnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbWx1Wm05UGNHVnVWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01nS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTVMRnh5WEc0Z0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjbVZ6WlhSRFlXMWxjbUVvS1NCN1hISmNibHgwYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwWVhKblpYUXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUJEYjI1emRHRnVkSE11YzJObGJtVXVkR0Z5WjJWMFFtRnpaVkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzUwWVhKblpYUkNZWE5sVUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG5SaGNtZGxkRUpoYzJWUWIzTnBkR2x2Ymk1NlhISmNiaUFnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVSmhjMlZRYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhRbUZ6WlZCdmMybDBhVzl1TG5rc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhvNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZDWVhObFVHOXphWFJwYjI0dWVseHlYRzRnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2RYQmtZWFJsUTJGdFpYSmhRWE53WldOMEtISmhkR2x2S1NCN1hISmNibHgwWTJGdFpYSmhMbUZ6Y0dWamRDQTlJSEpoZEdsdk8xeHlYRzRnSUNBZ1kyRnRaWEpoTG5Wd1pHRjBaVkJ5YjJwbFkzUnBiMjVOWVhSeWFYZ29LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2JHOXZhMEYwVkdGeVoyVjBLQ2tnZTF4eVhHNWNkR05oYldWeVlTNXNiMjlyUVhRb0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcE8xeHlYRzU5WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjY2x4dVhIUnBibWwwT2lCcGJtbDBMRnh5WEc1Y2RHWnZZM1Z6VW1WamIzSmtPaUJtYjJOMWMxSmxZMjl5WkN4Y2NseHVYSFI2YjI5dFNXNVNaV052Y21RNklIcHZiMjFKYmxKbFkyOXlaQ3hjY2x4dVhIUjZiMjl0VDNWMFVtVmpiM0prT2lCNmIyOXRUM1YwVW1WamIzSmtMRnh5WEc1Y2RISmxjMlYwUTJGdFpYSmhPaUJ5WlhObGRFTmhiV1Z5WVN4Y2NseHVYSFIxY0dSaGRHVkRZVzFsY21GQmMzQmxZM1E2SUhWd1pHRjBaVU5oYldWeVlVRnpjR1ZqZEN4Y2NseHVYSFJzYjI5clFYUlVZWEpuWlhRNklHeHZiMnRCZEZSaGNtZGxkQ3hjY2x4dVhIUmNjbHh1WEhSblpYUkRZVzFsY21FNklHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RGeDBjbVYwZFhKdUlHTmhiV1Z5WVR0Y2NseHVYSFI5TEZ4eVhHNWNkR2RsZEZSaGNtZGxkRG9nWm5WdVkzUnBiMjRvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnZEdGeVoyVjBPMXh5WEc1Y2RIMWNjbHh1ZlNKZGZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICBjYW52YXNXaWR0aDogbnVsbCxcclxuICAgIGNhbnZhc0hlaWdodDogbnVsbCxcclxuICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgcmVjb3Jkc1BlckNyYXRlOiAyNCxcclxuICAgIGxpZ2h0SW50ZW5zaXR5OiAxLFxyXG4gICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAweDExMTExMSxcclxuICAgIHNsZWV2ZUNvbG9yOiAweDBkMDcwMixcclxuICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgY3JhdGVUZXh0dXJlOiAnaW1nL3dvb2QuanBnJyxcclxuICAgIGNsb3NlSW5mb1BhbmVsT25DbGljazogdHJ1ZSxcclxuICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICBwb3N0cHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgICBibHVyQW1vdW50OiAwLjQsXHJcbiAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgZWxlbWVudHM6IHtcclxuICAgICAgICByb290Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlcicsXHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1jYW52YXMnLFxyXG4gICAgICAgIGxvYWRpbmdDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgIGluZm9Db250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWluZm8nLFxyXG4gICAgICAgIHRpdGxlQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgIGFydGlzdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgY292ZXJDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1jb3ZlcidcclxuICAgIH0sXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgaW5mb09wZW5UaW1lOiA3MDAsXHJcbiAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAxNjAsXHJcbiAgICAgICAgICAgIHk6IDE5MCxcclxuICAgICAgICAgICAgejogODVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDQsXHJcbiAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZDogZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpc1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyksXHJcbiAgICBDYW1lcmFNYW5hZ2VyID0gcmVxdWlyZSgnLi9DYW1lcmFNYW5hZ2VyJyk7XHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIFxyXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IENvbnN0YW50cy5zbGVldmVDb2xvclxyXG4gICAgICAgIH0pKVxyXG4gICAgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZFNob3duWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5mb2N1c1JlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdXNoUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPSAncHVzaGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdXNoZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IE1hdGguUElcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLnpvb21JblJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENhbWVyYU1hbmFnZXIuem9vbU91dFJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVjb3JkO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOVNaV052Y21RdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKMllYSWdWRWhTUlVVZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lIZHBibVJ2ZDFzblZFaFNSVVVuWFNBNklIUjVjR1Z2WmlCbmJHOWlZV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCbmJHOWlZV3hiSjFSSVVrVkZKMTBnT2lCdWRXeHNLU3hjY2x4dUlDQWdJRlJYUlVWT0lEMGdjbVZ4ZFdseVpTZ25kSGRsWlc0dWFuTW5LU3hjY2x4dVhISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMME52Ym5OMFlXNTBjeWNwTEZ4eVhHNGdJQ0FnUTJGdFpYSmhUV0Z1WVdkbGNpQTlJSEpsY1hWcGNtVW9KeTR2UTJGdFpYSmhUV0Z1WVdkbGNpY3BPMXh5WEc1Y2NseHVkbUZ5SUZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtbGtJRDBnYVdRN1hISmNiaUFnSUNCMGFHbHpMbU55WVhSbFNXUWdQU0JqY21GMFpVbGtPMXh5WEc0Z0lDQWdkR2hwY3k1d2IzTWdQU0J3YjNNN1hISmNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdKMjkxZENjN1hISmNiaUFnSUNCMGFHbHpMbkpsWTI5eVpGaFFiM01nUFNBdE5qSWdLeUFvSURFek5TQXZJRU52Ym5OMFlXNTBjeTV5WldOdmNtUnpVR1Z5UTNKaGRHVWdLU0FxSUhCdmN6dGNjbHh1SUNBZ0lIUm9hWE11YldWemFDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQmNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lERXdNQ3dnTVM0MUxDQXhNREFzSURFc0lERXNJREVnS1N3Z1hISmNiaUFnSUNBZ0lDQWdibVYzSUZSSVVrVkZMazFsYzJoR1lXTmxUV0YwWlhKcFlXd29JRzVsZHlCVVNGSkZSUzVOWlhOb1RHRnRZbVZ5ZEUxaGRHVnlhV0ZzS0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUJEYjI1emRHRnVkSE11YzJ4bFpYWmxRMjlzYjNKY2NseHVJQ0FnSUNBZ0lDQjlLU2xjY2x4dUlDQWdJQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1WjJWdmJXVjBjbmt1WVhCd2JIbE5ZWFJ5YVhnb0lHNWxkeUJVU0ZKRlJTNU5ZWFJ5YVhnMEtDa3ViV0ZyWlZSeVlXNXpiR0YwYVc5dUtDQTFNQ3dnTUN3Z01DQXBJQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjR1YzJWMEtDQjBhR2x6TG5KbFkyOXlaRmhRYjNNc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJDWVhObFdTd2dNQ0FwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1TG5vZ1BTQk5ZWFJvTGxCSklDOGdNanRjY2x4dUlDQWdJSFJvYVhNdWJXVnphQzV5WldOdmNtUkpaQ0E5SUdsa08xeHlYRzRnSUNBZ2RHaHBjeTVoWW5OdmJIVjBaVkJ2YzJsMGFXOXVJRDBnYm1WM0lGUklVa1ZGTGxabFkzUnZjak1vS1R0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGRGVnVZV04wYVhabEtDazdYSEpjYmlBZ0lDQjBhR2x6TG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExteHZaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqYjI1emIyeGxMbXh2WnlnZ1hDSlNaV052Y21RZ2JzS3dYQ0lzSUhSb2FYTXVhV1FzWEhKY2JpQWdJQ0FnSUNBZ1hDSmpjbUYwWlVsa0lEMWNJaXdnZEdocGN5NWpjbUYwWlVsa0xGeHlYRzRnSUNBZ0lDQWdJRndpY0c5eklEMWNJaXdnZEdocGN5NXdiM01nS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5ObGRFRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJSFJ5ZFdVN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWRtbHphV0pzWlNBOUlIUnlkV1U3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzV6WlhSVmJtRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJR1poYkhObE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5Ob2IzZFNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IwYUdsekxuTjBZWFJsSUNFOVBTQW5jMmh2ZDI0bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnSjNOb2IzZHVKenRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHVjMlYwUm5KdmJVMWhkSEpwZUZCdmMybDBhVzl1S0NCMGFHbHpMbTFsYzJndWJXRjBjbWw0VjI5eWJHUWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21SVGFHOTNibGxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbkpsWTI5eVpFMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y205MFlYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUUxaGRHZ3VVRWtnTHlBeVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWEl1Wm05amRYTlNaV052Y21Rb2RHaHBjeTV5WldOdmNtUllVRzl6TENCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjSFZ6YUZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDBnSjNCMWMyaGxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQW5jSFZ6YUdWa0p6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJDWVhObFdWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dUV0YwYUM1UVNTQXZJRElnS3lCTllYUm9MbEJKSUM4Z04xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjSFZzYkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDA5SUNkd2RXeHNaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdKM0IxYkd4bFpDYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prUW1GelpWbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5SUMwZ1RXRjBhQzVRU1NBdklEZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbVpzYVhCU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHUnZibVVnS1NCN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1emRHRjBaU0E5SUNkbWJHbHdjR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21SR2JHbHdjR1ZrV1Z4eVhHNGdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXBibVp2VDNCbGJsUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1a1pXeGhlU2dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbWx1Wm05UGNHVnVWR2x0WlNBdklEUWdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJOWVhSb0xsQkpYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1sdVptOVBjR1Z1VkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVnh5WEc0Z0lDQWdJQ0FnSUM1dmJrTnZiWEJzWlhSbEtDQmtiMjVsSUNrN1hISmNibHh5WEc0Z0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1NmIyOXRTVzVTWldOdmNtUW9kR2hwY3k1eVpXTnZjbVJZVUc5ekxDQjBhR2x6TG1GaWMyOXNkWFJsVUc5emFYUnBiMjRwTzF4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNW1iR2x3UW1GamExSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2daRzl1WlNBc0lHNXZRMkZ0WlhKaFZIZGxaVzRnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCMGFHbHpMbk4wWVhSbElEMDlQU0FuWm14cGNIQmxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1SbGJHRjVLQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUM4Z01pQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkVKaGMyVlpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXBibVp2VDNCbGJsUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUM4Z01pQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG05dVEyOXRjR3hsZEdVb0lHUnZibVVnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnViME5oYldWeVlWUjNaV1Z1S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JEWVcxbGNtRk5ZVzVoWjJWeUxucHZiMjFQZFhSU1pXTnZjbVFvZEdocGN5NXlaV052Y21SWVVHOXpMQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0cE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUZKbFkyOXlaRHNpWFgwPSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKlxyXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkNvcHlTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbmRyZXdiZXJnIC8gaHR0cDovL2FuZHJld2JlcmcuY29tL1xyXG4gKlxyXG4gKiBEZXB0aCBvZiBGaWVsZFxyXG4gKiAtIHBvcnRlZCBmcm9tXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5Eb0ZTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwidERlcHRoXCI6ICAgICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwiem5lYXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInpmYXJcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMTAwMC4wIH0sXHJcblx0XHRcdFwic2l6ZVwiOiAgICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDUxMiwgNTEyICkgfSxcclxuXHRcdFx0XCJ0ZXh0ZWxcIjpcdFx0eyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMS81MTIsIDEvNTEyKX0sXHJcblx0XHRcdFwiZm9jYWxEZXB0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIwMC4wIH0sXHJcblx0XHRcdFwiZm9jYWxMZW5ndGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyOC4wIH0sXHJcblx0XHRcdFwiZnN0b3BcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuOCB9LFxyXG5cdFx0XHRcInNob3dGb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJtYW51YWxkb2ZcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwibmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuMCB9LFxyXG5cdFx0XHRcImZkb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcImZkb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAzLjAgfSxcclxuXHRcdFx0XCJDb0NcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMyB9LFxyXG5cdFx0XHRcInZpZ25ldHRpbmdcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwidmlnbm91dFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4zIH0sXHJcblx0XHRcdFwidmlnbmluXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcclxuXHRcdFx0XCJ2aWduZmFkZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjIuMCB9LFxyXG5cdFx0XHRcImF1dG9mb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJmb2N1c1wiOiAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKSB9LFxyXG5cdFx0XHRcIm1heGJsdXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInRocmVzaG9sZFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuOCB9LFxyXG5cdFx0XHRcImdhaW5cIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS43IH0sXHJcblx0XHRcdFwiYmlhc1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjUgfSxcclxuXHRcdFx0XCJmcmluZ2VcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNyB9LFxyXG5cdFx0XHRcIm5vaXNlXCI6XHRcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwibmFtb3VudFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMDAxIH0sXHJcblx0XHRcdFwiZGVwdGhibHVyXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcImRic2l6ZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4yNX1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcclxuXHRcdFx0XCIjZGVmaW5lIFBJICAzLjE0MTU5MjY1XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHQvL3VuaWZvcm0gdmFyaWFibGVzIGZyb20gZXh0ZXJuYWwgc2NyaXB0XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgc2l6ZTtcIiwgLy8gdGV4dHVyZSB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHRleGVsO1wiLCAvLyB0ZXh0ZWwgc2l6ZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsRGVwdGg7XCIsICAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnN0b3A7XCIsIC8vZi1zdG9wIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHNob3dGb2N1cztcIiwgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcblx0XHRcdC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6bmVhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpmYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly91c2VyIHZhcmlhYmxlcyBub3cgcGFzc2VkIGFzIHVuaWZvcm1zXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBtYW51YWxkb2Y7XCIsIC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZnN0YXJ0O1wiLCAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZkaXN0O1wiLCAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZnN0YXJ0O1wiLCAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZmRpc3Q7XCIsIC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBDb0M7XCIsLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSlcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHZpZ25ldHRpbmc7XCIsIC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbm91dDtcIiwgLy92aWduZXR0aW5nIG91dGVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmluO1wiLCAvL3ZpZ25ldHRpbmcgaW5uZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduZmFkZTtcIiwgLy9mLXN0b3BzIHRpbGwgdmlnbmV0ZSBmYWRlc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgYXV0b2ZvY3VzO1wiLCAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBmb2N1cztcIiwgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBtYXhibHVyO1wiLCAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHRocmVzaG9sZDtcIiwgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZ2FpbjtcIiwgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBiaWFzO1wiLCAvL2Jva2VoIGVkZ2UgYmlhc1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnJpbmdlO1wiLCAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBub2lzZTtcIiwgLy91c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuYW1vdW50O1wiLCAvL2RpdGhlciBhbW91bnRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGRlcHRoYmx1cjtcIiwgLy9ibHVyIHRoZSBkZXB0aCBidWZmZXI/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBkYnNpemU7XCIsIC8vZGVwdGhibHVyc2l6ZVxyXG5cclxuXHRcdFx0Ly8gc2FtcGxlcyBhbmQgcmluZ3MgbmVlZCB0byBiZSBjb25zdGFudHMuIG5vIGR5bmFtaWMgbG9vcCBjb3VudGVycyBpbiBPcGVuR0wgRVNcclxuXHRcdFx0Ly8gQ2FuIHNoYWRlciBiZSBicm9rZW4gaW50byAyIHBhc3M/IC4uLiBcclxuXHRcdFx0XCJpbnQgc2FtcGxlcyA9IDM7XCIsIC8vc2FtcGxlcyBvbiB0aGUgZmlyc3QgcmluZ1xyXG5cdFx0XHRcImNvbnN0IGludCByaW5ncyA9IDM7XCIsIC8vcmluZyBjb3VudFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0bmV4dCBwYXJ0IGlzIGV4cGVyaW1lbnRhbFxyXG5cdFx0XHRub3QgbG9va2luZyBnb29kIHdpdGggc21hbGwgc2FtcGxlIGFuZCByaW5nIGNvdW50XHJcblx0XHRcdGxvb2tzIG9rYXkgc3RhcnRpbmcgZnJvbSBzYW1wbGVzID0gNCwgcmluZ3MgPSA0XHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHRcImJvb2wgcGVudGFnb24gPSBmYWxzZTtcIiwgLy91c2UgcGVudGFnb24gYXMgYm9rZWggc2hhcGU/XHJcblx0XHRcdFwiZmxvYXQgZmVhdGhlciA9IDAuNDtcIiwgLy9wZW50YWdvbiBzaGFwZSBmZWF0aGVyXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8gUkdCQSBkZXB0aFxyXG5cclxuXHRcdFx0XCJmbG9hdCB1bnBhY2tEZXB0aCggY29uc3QgaW4gdmVjNCByZ2JhX2RlcHRoICkge1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbnN0IHZlYzQgYml0X3NoaWZ0ID0gdmVjNCggMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICksIDEuMCAvIDI1Ni4wLCAxLjAgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gZG90KCByZ2JhX2RlcHRoLCBiaXRfc2hpZnQgKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBkZXB0aDtcIixcclxuXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwiZmxvYXQgcGVudGEodmVjMiBjb29yZHMpXCIsIC8vcGVudGFnb25hbCBzaGFwZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IHNjYWxlID0gZmxvYXQocmluZ3MpIC0gMS4zO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMwID0gdmVjNCggMS4wLCAgICAgICAgIDAuMCwgICAgICAgICAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMxID0gdmVjNCggMC4zMDkwMTY5OTQsIDAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMyID0gdmVjNCgtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMzID0gdmVjNCgtMC44MDkwMTY5OTQsLTAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM0ID0gdmVjNCggMC4zMDkwMTY5OTQsLTAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM1ID0gdmVjNCggMC4wICAgICAgICAsMC4wICAgICAgICAgLCAxLjAsICAxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgIG9uZSA9IHZlYzQoIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgUCA9IHZlYzQoKGNvb3JkcyksdmVjMihzY2FsZSwgc2NhbGUpKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IGRpc3QgPSB2ZWM0KDAuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBpbm9yb3V0ID0gLTQuMDtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTMCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gZG90KCBQLCBIUzEgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueiA9IGRvdCggUCwgSFMyICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LncgPSBkb3QoIFAsIEhTMyApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZG90KCBkaXN0LCBvbmUgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTNCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gSFM1LncgLSBhYnMoIFAueiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkaXN0Lng7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKCBpbm9yb3V0LCAwLjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgYmRlcHRoKHZlYzIgY29vcmRzKSAvL2JsdXJyaW5nIGRlcHRoXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZCA9IDAuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGtlcm5lbFs5XTtcIixcclxuXHRcdFx0XHRcInZlYzIgb2Zmc2V0WzldO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgd2ggPSB2ZWMyKHRleGVsLngsIHRleGVsLnkpICogZGJzaXplO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFswXSA9IHZlYzIoLXdoLngsLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzFdID0gdmVjMiggMC4wLCAtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMl0gPSB2ZWMyKCB3aC54IC13aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbM10gPSB2ZWMyKC13aC54LCAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs0XSA9IHZlYzIoIDAuMCwgICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzVdID0gdmVjMiggd2gueCwgIDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzZdID0gdmVjMigtd2gueCwgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbN10gPSB2ZWMyKCAwLjAsICB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs4XSA9IHZlYzIoIHdoLngsIHdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImtlcm5lbFswXSA9IDEuMC8xNi4wOyAgIGtlcm5lbFsxXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFsyXSA9IDEuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzNdID0gMi4wLzE2LjA7ICAga2VybmVsWzRdID0gNC4wLzE2LjA7ICAga2VybmVsWzVdID0gMi4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbNl0gPSAxLjAvMTYuMDsgICBrZXJuZWxbN10gPSAyLjAvMTYuMDsgICBrZXJuZWxbOF0gPSAxLjAvMTYuMDtcIixcclxuXHJcblxyXG5cdFx0XHRcdFwiZm9yKCBpbnQgaT0wOyBpPDk7IGkrKyApXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHRtcCA9IHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsIGNvb3JkcyArIG9mZnNldFtpXSkpO1wiLFxyXG5cdFx0XHRcdFx0XCJkICs9IHRtcCAqIGtlcm5lbFtpXTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gZDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJ2ZWMzIGNvbG9yKHZlYzIgY29vcmRzLGZsb2F0IGJsdXIpXCIsIC8vcHJvY2Vzc2luZyB0aGUgc2FtcGxlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjAsMS4wKSp0ZXhlbCpmcmluZ2UqYmx1cikucjtcIixcclxuXHRcdFx0XHRcImNvbC5nID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoLTAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5nO1wiLFxyXG5cdFx0XHRcdFwiY29sLmIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuYjtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWNvZWZmID0gdmVjMygwLjI5OSwwLjU4NywwLjExNCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW0gPSBkb3QoY29sLnJnYiwgbHVtY29lZmYpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgdGhyZXNoID0gbWF4KChsdW0tdGhyZXNob2xkKSpnYWluLCAwLjApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbCttaXgodmVjMygwLjApLGNvbCx0aHJlc2gqYmx1cik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMyIHJhbmQodmVjMiBjb29yZCkgLy9nZW5lcmF0aW5nIG5vaXNlL3BhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VYID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuMjUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC43NSkpKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVkgPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC43NSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjI1KSkqMi4wLTEuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobm9pc2UpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWCA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVkgPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSoyLjApKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gdmVjMihub2lzZVgsbm9pc2VZKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzMgZGVidWdGb2N1cyh2ZWMzIGNvbCwgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZWRnZSA9IDAuMDAyKmRlcHRoOyAvL2Rpc3RhbmNlIGJhc2VkIGVkZ2Ugc21vb3RoaW5nXCIsXHJcblx0XHRcdFx0XCJmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsZWRnZSxibHVyKSwwLjAsMS4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMC1lZGdlLDEuMCxibHVyKSwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMS4wLDAuNSwwLjApLCgxLjAtbSkqMC42KTtcIixcclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygwLjAsMC41LDEuMCksKCgxLjAtZSktKDEuMC1tKSkqMC4yKTtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInJldHVybiAtemZhciAqIHpuZWFyIC8gKGRlcHRoICogKHpmYXIgLSB6bmVhcikgLSB6ZmFyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IHZpZ25ldHRlKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwwLjUpKTtcIixcclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKHZpZ25vdXQrKGZzdG9wL3ZpZ25mYWRlKSwgdmlnbmluKyhmc3RvcC92aWduZmFkZSksIGRpc3QpO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKGRpc3QsMC4wLDEuMCk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHQvL3NjZW5lIGRlcHRoIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCx2VXYpKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGRlcHRoYmx1cilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZGVwdGggPSBsaW5lYXJpemUoYmRlcHRoKHZVdikpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2ZvY2FsIHBsYW5lIGNhbGN1bGF0aW9uXCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoYXV0b2ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmRGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCxmb2N1cykpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9kb2YgYmx1ciBmYWN0b3IgY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBibHVyID0gMC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChtYW51YWxkb2YpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSBkZXB0aC1mRGVwdGg7XCIsIC8vZm9jYWwgcGxhbmVcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChhLWZkb2ZzdGFydCkvZmRvZmRpc3Q7XCIsIC8vZmFyIERvRlxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKC1hLW5kb2ZzdGFydCkvbmRvZmRpc3Q7XCIsIC8vbmVhciBEb2ZcclxuXHRcdFx0XHRcdFwiYmx1ciA9IChhPjAuMCk/YjpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgZiA9IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBkID0gZkRlcHRoKjEwMDAuMDtcIiwgLy9mb2NhbCBwbGFuZSBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBvID0gZGVwdGgqMTAwMC4wO1wiLCAvL2RlcHRoIGluIG1tXHJcblxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gKG8qZikvKG8tZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoZCpmKS8oZC1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9IChkLWYpLyhkKmZzdG9wKkNvQyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJibHVyID0gYWJzKGEtYikqYztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJibHVyID0gY2xhbXAoYmx1ciwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgcGF0dGVybiBmb3IgZGl0ZXJpbmdcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIG5vaXNlID0gcmFuZCh2VXYpKm5hbW91bnQqYmx1cjtcIixcclxuXHJcblx0XHRcdFx0Ly8gZ2V0dGluZyBibHVyIHggYW5kIHkgc3RlcCBmYWN0b3JcclxuXHJcblx0XHRcdFx0XCJmbG9hdCB3ID0gKDEuMC9zaXplLngpKmJsdXIqbWF4Ymx1citub2lzZS54O1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaCA9ICgxLjAvc2l6ZS55KSpibHVyKm1heGJsdXIrbm9pc2UueTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgZmluYWwgY29sb3JcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZihibHVyIDwgMC4wNSlcIiwgLy9zb21lIG9wdGltaXphdGlvbiB0aGluZ3lcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgcyA9IDEuMDtcIixcclxuXHJcblx0XHRcdFx0XHRcImZvciAoaW50IGkgPSAxOyBpIDw9IHJpbmdzOyBpICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XCJmbG9hdCByaW5nc2FtcGxlcyA9IGZsb2F0KGkgKiBzYW1wbGVzKTtcIixcclxuXHJcblx0XHRcdFx0XHRcdFwiaWYoaSA9PSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDMgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAyKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDYgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAzKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDkgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcImNvbCAvPSBzO1wiLCAvL2RpdmlkZSBieSBzYW1wbGUgY291bnRcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAoc2hvd0ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSBkZWJ1Z0ZvY3VzKGNvbCwgYmx1ciwgZGVwdGgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmICh2aWduZXR0aW5nKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgKj0gdmlnbmV0dGUoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IucmdiID0gY29sO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XCIsXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyID0gZnVuY3Rpb24gKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xyXG5cdFx0XHR2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBUSFJFRS5Db3B5U2hhZGVyID09PSB1bmRlZmluZWQgKVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBcIlRIUkVFLkVmZmVjdENvbXBvc2VyIHJlbGllcyBvbiBUSFJFRS5Db3B5U2hhZGVyXCIgKTtcclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkNvcHlTaGFkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdFx0dmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hc2tBY3RpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5NYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLkNsZWFyTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcblx0XHRcdHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgZGF2aWRlZGMgLyBodHRwOi8vd3d3LnNrZXRjaHBhdGNoLm5ldC9cclxuICpcclxuICogTlZJRElBIEZYQUEgYnkgVGltb3RoeSBMb3R0ZXNcclxuICogaHR0cDovL3RpbW90aHlsb3R0ZXMuYmxvZ3Nwb3QuY29tLzIwMTEvMDYvZnhhYTMtc291cmNlLXJlbGVhc2VkLmh0bWxcclxuICogLSBXZWJHTCBwb3J0IGJ5IEBzdXBlcmVnZ2JlcnRcclxuICogaHR0cDovL3d3dy5nbGdlLm9yZy9kZW1vcy9meGFhL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRlhBQVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwicmVzb2x1dGlvblwiOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxIC8gMTAyNCwgMSAvIDUxMiApICB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1wiLFxyXG5cclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JORSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiApO1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JNICA9IHJnYmFNLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTlcgPSBkb3QoIHJnYk5XLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU0UgPSBkb3QoIHJnYlNFLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWF4ID0gbWF4KCBsdW1hTSwgbWF4KCBtYXgoIGx1bWFOVywgbHVtYU5FKSAsIG1heCggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiBkaXI7XCIsXHJcblx0XHRcdFx0XCJkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XCIsXHJcblx0XHRcdFx0XCJkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGlyUmVkdWNlID0gbWF4KCAoIGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSApICogKCAwLjI1ICogRlhBQV9SRURVQ0VfTVVMICksIEZYQUFfUkVEVUNFX01JTiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XCIsXHJcblx0XHRcdFx0XCJkaXIgPSBtaW4oIHZlYzIoIEZYQUFfU1BBTl9NQVgsICBGWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdCAgXCJtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdFx0XHRcImRpciAqIHJjcERpck1pbikpICogcmVzb2x1dGlvbjtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcIixcclxuXHQgICAgICAgIFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwidmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDAuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0ICAgICAgXHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMy4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwiZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgdmVjNChsdW1hLCAwLjApKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcIixcclxuXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkE7XCIsXHJcblxyXG5cdFx0XHRcdFwifSBlbHNlIHtcIixcclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQjtcIixcclxuXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuTWFza1Bhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Ly8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdXAgc3RlbmNpbFxyXG5cclxuXHRcdFx0dmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaW52ZXJzZSApIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDA7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMTtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xyXG5cdFx0XHRjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xyXG5cclxuXHRcdFx0Ly8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0Ly8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXHJcblxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Y29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xyXG5cclxuXHRcdHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG5cdFx0dGhpcy5vbGRDbGVhckFscGhhID0gMTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHRcclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzID0gZnVuY3Rpb24gKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiJdfQ==
