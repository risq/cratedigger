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
    Stats = require('stats-js');

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

var options = {},
    exports = {}, // Object for public APIs


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
    target,
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

    wood_material,


    /*==========  Default settings  ==========*/

    defaults = {
        debug: true,
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
        infoPanelOpacity: 0.9,
        postprocessing: true,
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
        constants: {
            recordMoveTime: 1000,
            cameraMoveTime: 800,
            infoOpenTime: 800,
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
            cameraMouseMoveSpeedZ: 0.03,
            grabSensitivity: 6
        }
    };


/*===============================
=            CLASSES            =
===============================*/


/*==========  Record Class  ==========*/

var Record = function ( id, crateId, pos ) {

    this.id = id;
    this.crateId = crateId;
    this.pos = pos;
    this.state = 'out';
    this.recordXPos = -62 + ( 135 / options.recordsPerCrate ) * pos;
    this.mesh = new THREE.Mesh( new THREE.BoxGeometry( 100, 1.5, 100, 1, 1, 1 ), new THREE.MeshFaceMaterial( getRecordMaterial( null, false ) ) );
    this.mesh.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 50, 0, 0 ) );
    this.mesh.position.set( this.recordXPos, options.constants.recordBaseY, 0 );
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
                y: options.constants.recordShownY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( target.position )
            .to( {
                x: this.recordXPos,
                y: 50 + options.constants.recordShownY,
                z: this.absolutePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( camera.position )
            .to( {
                x: this.recordXPos + options.constants.cameraFocusPosition.x,
                y: options.constants.cameraFocusPosition.y,
                z: this.absolutePosition.z + options.constants.cameraFocusPosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pushRecord = function () {

    if ( this.state != 'pushed' ) {

        this.state = 'pushed';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    new TWEEN.Tween( this.mesh.position )
        .to( {
            y: options.constants.recordFlippedY
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( this.mesh.rotation )
        .delay( options.constants.infoOpenTime / 4 )
        .to( {
            y: Math.PI
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( target.position )
        .to( {
            x: this.recordXPos,
            y: options.constants.recordFlippedY + 50,
            z: this.absolutePosition.z
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    new TWEEN.Tween( camera.position )
        .to( {
            x: this.recordXPos + options.constants.cameraFocusPosition.x + 80,
            y: options.constants.cameraFocusPosition.y - 50,
        }, options.constants.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        new TWEEN.Tween( this.mesh.position )
            .delay( options.constants.infoOpenTime / 2 )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                y: 0
            }, options.constants.infoOpenTime / 2 )
            .easing( TWEEN.Easing.Quartic.Out ).start()
            .onComplete( done );

        if (!noCameraTween) {
            
            new TWEEN.Tween( target.position )
                .delay( options.constants.infoOpenTime / 2 )
                .to( {
                    x: this.recordXPos,
                    y: 75,
                    z: this.absolutePosition.z
                }, options.constants.infoOpenTime )
                .easing( TWEEN.Easing.Quartic.Out ).start();

            new TWEEN.Tween( camera.position )
                .to( {
                    x: this.recordXPos + options.constants.cameraFocusPosition.x,
                    y: options.constants.cameraFocusPosition.y,
                }, options.constants.cameraMoveTime )
                .easing( TWEEN.Easing.Quartic.Out ).start();
            
        }

    }
};


/*====================================
=            BASE METHODS            =
====================================*/


var extend = function ( defaults, options ) {

    for ( var key in options ) {

        if ( Object.prototype.hasOwnProperty.call( options, key ) ) {

            defaults[ key ] = options[ key ];

        }
    }

    return defaults;
};

var animate = function () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( options.debug ) {

            stats.update();

        }
    }
};

var render = function () {

    TWEEN.update();
    updateShownRecord();

    if ( options.cameraMouseMove ) {

        targetCameraPos.x = ( mouse.x / canvasWidth - 0.5 ) * 0.25; // inverse axis?
        targetCameraPos.y = ( mouse.y / canvasWidth - 0.5 ) * 0.25;
        rootContainer.rotation.y += options.constants.cameraMouseMoveSpeedY * ( targetCameraPos.x - rootContainer.rotation.y );
        rootContainer.rotation.z += options.constants.cameraMouseMoveSpeedZ * ( targetCameraPos.y - rootContainer.rotation.z );

    }

    camera.lookAt( target.position );

    if ( options.postprocessing ) {

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

    showLoading( function () {

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

            hideLoading( loadingContainerElement );
            options.onLoadingEnd();

            if ( done ) {

                done();

            }

        }, 2000 );
    } );
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

        options.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( infoContainerElement, options.infoPanelOpacity );

        }, 300 );
    }
};

var flipBackSelectedRecord = function (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( infoContainerElement );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            options.onInfoPanelClosed();

        }, force );
    }
};

var updateShownRecord = function () {

    if ( infoPanelState === 'closed' && shownRecord != selectedRecord ) {

        //console.log('updateShownRecord..');
        shownRecord = selectedRecord;

        for ( var recordId = 0; recordId < loadedRecords; recordId++ ) {

            if ( selectedRecord == -1 ) {

                records[ recordId ].pushRecord();

            } else if ( recordId > selectedRecord &&
                recordId > records[ selectedRecord ].crateId * options.recordsPerCrate &&
                recordId < ( records[ selectedRecord ].crateId * options.recordsPerCrate ) + options.recordsPerCrate ) {

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
        new TWEEN.Tween( target.position )
            .to( {
                x: options.constants.targetBasePosition.x,
                y: options.constants.targetBasePosition.y,
                z: options.constants.targetBasePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( camera.position )
            .to( {
                x: options.constants.cameraBasePosition.x,
                y: options.constants.cameraBasePosition.y,
                z: options.constants.cameraBasePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();
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

    } else if ( infoPanelState === 'opened' && options.closeInfoPanelOnScroll ) {

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
            //console.log("NEXT RECORD " + delta);
        } else if ( delta < 0 ) {
            selectPrevRecord();
            //console.log("PREV RECORD " + delta);
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
    }
};

var onMouseDownEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( mouse.y );
        mouseDownPos = {
            x: mouse.x,
            y: mouse.y
        };

    } else if ( infoPanelState === 'opened' && options.closeInfoPanelOnClick ) {

        flipBackSelectedRecord();

    }
};

var onMouseUpEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    if ( coordsEqualsApprox( mouseDownPos, mouse, options.constants.grabSensitivity ) ) {

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
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );
    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );

};


/*======================================
=              UI METHODS              =
======================================*/


var showLoading = function ( done ) {

    fadeIn( loadingContainerElement, 1, done );

};

var hideLoading = function ( done ) {

    fadeOut( loadingContainerElement, done );

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
    renderer.setClearColor( options.backgroundColor, 1 );

    camera = new THREE.PerspectiveCamera( 45, canvasWidth / canvasHeight, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
    //        scene.add(target);
    camera.lookAt( target.position );

    var wood_texture = THREE.ImageUtils.loadTexture( options.crateTexture );
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

    light = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 1.1 );
    light.position.set( 300, 80, 0 );
    scene.add( light );

    leftLight = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 0.6 );
    leftLight.position.set( -100, 300, 1000 );
    scene.add( leftLight );

    rightLight = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 0.6 );
    rightLight.position.set( -100, 300, -1000 );
    scene.add( rightLight );

    initPostProcessing();

    rootContainerElement.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousewheel', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousemove', onMouseMoveEvent, false );
    rootContainerElement.addEventListener( 'mousedown', onMouseDownEvent, false );
    rootContainerElement.addEventListener( 'mouseup', onMouseUpEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( options.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }

    // DOM setup
    rootContainerElement.style.position = 'relative';
    canvasContainerElement.style.position = 'absolute';
    infoContainerElement.style.position = 'absolute';
    loadingContainerElement.style.position = 'absolute';

    setCanvasDimensions();

    infoContainerElement.style.display = 'none';

    if ( options.debug ) {

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
    dof.uniforms.maxblur.value = options.blurAmount; //clamp value of max blur (0.0 = no blur,1.0 default)    

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

    if ( options.postprocessing ) {

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

    for ( var crateId = 0; crateId < options.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * options.nbCrates ) ) / 2;

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

        for ( var pos = 0; pos < options.recordsPerCrate; pos++ ) {
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
            sleeve.src = options.sleeveMaskTexture;

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

        color: options.sleeveColor

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

var fadeOut = function ( element, done ) {

    if ( element.style.opacity <= 0.1 ) {
        element.style.display = 'none';
        element.style.opacity = 0;
        if ( isFunction( done ) ) {
            done();
        }
    } else {
        element.style.opacity -= 0.1;
        setTimeout( function () {
            fadeOut( element, done );
        }, 10 );
    }
};

var fadeIn = function ( element, fadeTo, done, op ) {

    if ( !element.style.opacity || element.style.opacity && element.style.opacity < fadeTo ) {

        if ( element.style.display == 'none' ) {

            element.style.display = 'block';
            op = 0;

        } else if ( !element.style.display ) {

            op = element.style.opacity || 1;

        }

        op += 0.03;
        element.style.opacity = op;

        setTimeout( function () {

            fadeIn( element, fadeTo, done, op );

        }, 10 );

    } else {

        element.style.opacity = fadeTo;

        if ( isFunction( done ) ) {

            done();

        }
    }
};

var calculateCanvasSize = function () {

    canvasWidth = options.canvasWidth ? options.canvasWidth : rootContainerElement.clientWidth;
    canvasHeight = options.canvasHeight ? options.canvasHeight : rootContainerElement.clientHeight;

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

    options = extend( defaults, params );

    // feature test
    if ( !Modernizr.webgl ) return;

    console.log( 'Initializing cratedigger.js...' );

    if ( window.devicePixelRatio !== undefined ) {

        dpr = window.devicePixelRatio;

    } else {

        dpr = 1;

    }

    rootContainerElement = document.getElementById( options.elements.rootContainerId );
    if ( !rootContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }
    canvasContainerElement = document.getElementById( options.elements.canvasContainerId );
    if ( !canvasContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }
    loadingContainerElement = document.getElementById( options.elements.loadingContainerId );
    if ( !loadingContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }
    infoContainerElement = document.getElementById( options.elements.infoContainerId );
    if ( !infoContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
        return;

    }
    titleInfoElement = document.getElementById( options.elements.titleContainerId );
    if ( !titleInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record title container element.' );
        return;

    }
    artistInfoElement = document.getElementById( options.elements.artistContainerId );
    if ( !artistInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record artist container element.' );
        return;

    }
    coverInfoElement = document.getElementById( options.elements.coverContainerId );
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

    options.postprocessing = true;

};

exports.disablePostprocessing = function () {

    options.postprocessing = false;

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
exports.selectPrevRecord = selectPrevRecord;
exports.selectNextRecord = selectNextRecord;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/*==================================
=            PUBLIC API            =
==================================*/

module.exports = exports;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3JpcHRzL2NyYXRlZGlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgb3B0aW9ucyA9IHt9LFxyXG4gICAgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRE9NIGNvbnRhaW5lciBlbGVtZW50cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LFxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCxcclxuICAgIHRpdGxlSW5mb0VsZW1lbnQsXHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCxcclxuICAgIGNvdmVySW5mb0VsZW1lbnQsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHRhcmdldCxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE9iamVjdHMgJiBkYXRhIGFycmF5cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY3JhdGVzID0gW10sXHJcbiAgICByZWNvcmRzID0gW10sXHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXSxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzIGNvbnRhaW5lcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXIsXHJcbiAgICBjcmF0ZXNDb250YWluZXIsXHJcbiAgICByZWNvcmRzQ29udGFpbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFN0YXRlcywgdXRpbCB2YXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGRwcixcclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0LFxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgICBpbmZvUGFuZWxTdGF0ZSA9IFwiY2xvc2VkXCIsXHJcbiAgICBpc1Njcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgZG9SZW5kZXIgPSB0cnVlLFxyXG4gICAgbW91c2UgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHRhcmdldENhbWVyYVBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFJlY29yZCA9IC0xLFxyXG4gICAgc2hvd25SZWNvcmQgPSAtMSxcclxuICAgIGxvYWRlZFJlY29yZHMgPSAwLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE1hdGVyaWFscyAgPT09PT09PT09PSovXHJcblxyXG4gICAgd29vZF9tYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZWZhdWx0IHNldHRpbmdzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgICBjYW52YXNXaWR0aDogbnVsbCxcclxuICAgICAgICBjYW52YXNIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgbmJDcmF0ZXM6IDIsXHJcbiAgICAgICAgcmVjb3Jkc1BlckNyYXRlOiAyNCxcclxuICAgICAgICBsaWdodEludGVuc2l0eTogMSxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDExMTExMSxcclxuICAgICAgICBzbGVldmVDb2xvcjogMHgwZDA3MDIsXHJcbiAgICAgICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICAgICAgY3JhdGVUZXh0dXJlOiAnaW1nL3dvb2QuanBnJyxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgICAgICBpbmZvUGFuZWxPcGFjaXR5OiAwLjksXHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgYmx1ckFtb3VudDogMC40LFxyXG4gICAgICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgICAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25JbmZvUGFuZWxDbG9zZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgcm9vdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXInLFxyXG4gICAgICAgICAgICBjYW52YXNDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWNhbnZhcycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1pbmZvJyxcclxuICAgICAgICAgICAgdGl0bGVDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC10aXRsZScsXHJcbiAgICAgICAgICAgIGFydGlzdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgICAgIGNvdmVyQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgcmVjb3JkTW92ZVRpbWU6IDEwMDAsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIGluZm9PcGVuVGltZTogODAwLFxyXG4gICAgICAgICAgICByZWNvcmRCYXNlWTogNSxcclxuICAgICAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICAgICAgcmVjb3JkRmxpcHBlZFk6IDExMCxcclxuICAgICAgICAgICAgdGFyZ2V0QmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgICAgIHo6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhQmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAyODAsXHJcbiAgICAgICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgICAgICB6OiAxODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMTYwLFxyXG4gICAgICAgICAgICAgICAgeTogMTkwLFxyXG4gICAgICAgICAgICAgICAgejogODVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRZOiAwLjA3LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDMsXHJcbiAgICAgICAgICAgIGdyYWJTZW5zaXRpdml0eTogNlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBDTEFTU0VTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFJlY29yZCBDbGFzcyAgPT09PT09PT09PSovXHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIGdldFJlY29yZE1hdGVyaWFsKCBudWxsLCBmYWxzZSApICkgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgeTogNTAgKyBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93blksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24ueiArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdXNoUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPSAncHVzaGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdXNoZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IE1hdGguUElcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZICsgNTAsXHJcbiAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQkFTRSBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBleHRlbmQgPSBmdW5jdGlvbiAoIGRlZmF1bHRzLCBvcHRpb25zICkge1xyXG5cclxuICAgIGZvciAoIHZhciBrZXkgaW4gb3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9wdGlvbnMsIGtleSApICkge1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdHNbIGtleSBdID0gb3B0aW9uc1sga2V5IF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVmYXVsdHM7XHJcbn07XHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgVFdFRU4udXBkYXRlKCk7XHJcbiAgICB1cGRhdGVTaG93blJlY29yZCgpO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5jYW1lcmFNb3VzZU1vdmUgKSB7XHJcblxyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy54ID0gKCBtb3VzZS54IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7IC8vIGludmVyc2UgYXhpcz9cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueSA9ICggbW91c2UueSAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1O1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueSArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFkgKiAoIHRhcmdldENhbWVyYVBvcy54IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICk7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gZGVwdGhNYXRlcmlhbDtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIGRlcHRoVGFyZ2V0ICk7XHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogTG9hZGluZyBtZXRob2RzXHJcbiAqL1xyXG52YXIgdW5sb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IG51bGw7XHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLnNldFVuYWN0aXZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFJlY29yZHMgPSAwO1xyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW107XHJcblxyXG59O1xyXG5cclxuXHJcbnZhciBsb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICggcmVjb3Jkc0RhdGEsIHNodWZmbGVCZWZvcmVMb2FkaW5nLCBkb25lICkge1xyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoIHRydWUgKTtcclxuXHJcbiAgICBzaG93TG9hZGluZyggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkxvYWRpbmdFbmQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9uZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDIwMDAgKTtcclxuICAgIH0gKTtcclxufTtcclxuXHJcbnZhciBzaHVmZmxlUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2h1ZmZsZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGFMaXN0O1xyXG4gICAgc2h1ZmZsZWRSZWNvcmRzID0gc2h1ZmZsZSggc2h1ZmZsZWRSZWNvcmRzICk7XHJcbiAgICBsb2FkUmVjb3Jkcyggc2h1ZmZsZWRSZWNvcmRzICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUkVDT1JEUyBTRUxFQ1RJT04gTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKSB7XHJcblxyXG4gICAgICAgIGZpbGxJbmZvUGFuZWwoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCwgb3B0aW9ucy5pbmZvUGFuZWxPcGFjaXR5ICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggaW5mb0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVTaG93blJlY29yZC4uJyk7XHJcbiAgICAgICAgc2hvd25SZWNvcmQgPSBzZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHJlY29yZElkID0gMDsgcmVjb3JkSWQgPCBsb2FkZWRSZWNvcmRzOyByZWNvcmRJZCsrICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID4gc2VsZWN0ZWRSZWNvcmQgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkID4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICsgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdWxsUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA9PSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnNob3dSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlc2V0U2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoIGZvcmNlICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmICFmb3JjZSApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcbiAgICAgICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IC0xO1xyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBzZWxlY3RQcmV2UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBzZWxlY3ROZXh0UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXROZXh0QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFByZXZBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPCBsb2FkZWRSZWNvcmRzIC0gMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgKyAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA+IDAgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldE5leHRBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcblxyXG59O1xyXG5cclxudmFyIG5hdmlnYXRlUmVjb3JkcyA9IGZ1bmN0aW9uICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PT0gJ3ByZXYnICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgc2Nyb2xsUmVjb3JkcyA9IGZ1bmN0aW9uICggYmFzZVksIG9sZERlbHRhICkge1xyXG5cclxuICAgIG9sZERlbHRhID0gIW9sZERlbHRhIHx8IE1hdGguYWJzKCBvbGREZWx0YSApID4gMC41ID8gMC41IDogTWF0aC5hYnMoIG9sZERlbHRhICk7XHJcbiAgICB2YXIgaW52ZXJzZURlbHRhID0gMSAtIG9sZERlbHRhO1xyXG4gICAgdmFyIHNjcm9sbFNwZWVkID0gaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogMzAwO1xyXG5cclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JhYicpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9ICggYmFzZVkgLSBtb3VzZS55ICkgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5FWFQgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUFJFViBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmlsbEluZm9QYW5lbCA9IGZ1bmN0aW9uICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS5hcnRpc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuY292ZXIgKSB7XHJcblxyXG4gICAgICAgIGNvdmVySW5mb0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIG9uTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG52YXIgb25TY3JvbGxFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgb25DbGlja0V2ZW50ID0gZnVuY3Rpb24gKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWInKTtcclxuXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgb3B0aW9ucy5jb25zdGFudHMuZ3JhYlNlbnNpdGl2aXR5ICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBvbktleURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uV2luZG93UmVzaXplRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIDEsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBpbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBvcHRpb25zLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0LCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIG9wdGlvbnMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcEV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbnZhciBpbml0UG9zdFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IG9wdGlvbnMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLm9uQ2hhbmdlKCB1cGRhdGVDYW1lcmEgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxudmFyIHVwZGF0ZUNhbWVyYSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0Q3JhdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IG9wdGlvbnMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogb3B0aW9ucy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFJlY29yZE1hdGVyaWFsID0gZnVuY3Rpb24gKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBvcHRpb25zLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBvcHRpb25zLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCwgZG9uZSApIHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8PSAwLjEgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtPSAwLjE7XHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWRlT3V0KCBlbGVtZW50LCBkb25lICk7XHJcbiAgICAgICAgfSwgMTAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKSB7XHJcblxyXG4gICAgaWYgKCAhZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSAmJiBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPCBmYWRlVG8gKSB7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIG9wID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggIWVsZW1lbnQuc3R5bGUuZGlzcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIG9wID0gZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3AgKz0gMC4wMztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICk7XHJcblxyXG4gICAgICAgIH0sIDEwICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gZmFkZVRvO1xyXG5cclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBvcHRpb25zLmNhbnZhc1dpZHRoID8gb3B0aW9ucy5jYW52YXNXaWR0aCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gb3B0aW9ucy5jYW52YXNIZWlnaHQgPyBvcHRpb25zLmNhbnZhc0hlaWdodCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbn07XHJcblxyXG52YXIgc2V0Q2FudmFzRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCAgICAgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCAgICAgPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKCB2ICkgeyAvLyBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgLSBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZSBbcmV2LiAjMV1cclxuXHJcbiAgICBmb3IgKCB2YXIgaiwgeCwgaSA9IHYubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBpICksIHggPSB2WyAtLWkgXSwgdlsgaSBdID0gdlsgaiBdLCB2WyBqIF0gPSB4ICk7XHJcbiAgICByZXR1cm4gdjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVhQT1JUUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgTWV0aG9kcyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcclxuXHJcbiAgICBvcHRpb25zID0gZXh0ZW5kKCBkZWZhdWx0cywgcGFyYW1zICk7XHJcblxyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICBpZiAoICFNb2Rlcm5penIud2ViZ2wgKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5sb2coICdJbml0aWFsaXppbmcgY3JhdGVkaWdnZXIuanMuLi4nICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmFydGlzdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFhcnRpc3RJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIGFydGlzdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNvdmVySW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7Il19
},{"./threejs_modules/CopyShader":4,"./threejs_modules/DoFShader":5,"./threejs_modules/EffectComposer":6,"./threejs_modules/FXAAShader":7,"./threejs_modules/MaskPass":8,"./threejs_modules/RenderPass":9,"./threejs_modules/ShaderPass":10,"stats-js":2,"tween.js":3}],2:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmF0ZWRpZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9zdGF0cy1qcy9idWlsZC9zdGF0cy5taW4uanMiLCJub2RlX21vZHVsZXMvdHdlZW4uanMvaW5kZXguanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5bkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgKFZhbGVudGluIExlZHJhcGllcikgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuICAgIFN0YXRzID0gcmVxdWlyZSgnc3RhdHMtanMnKTtcclxuXHJcbi8qPT09PT09PT09PSAgSW5qZWN0IGFsbCBleHRlcm5hbCBtb2R1bGVzIHRvIFRIUkVFLmpzID09PT09PT09PT0qL1xyXG5cclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXInKShUSFJFRSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVkFSSUFCTEVTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxudmFyIG9wdGlvbnMgPSB7fSxcclxuICAgIGV4cG9ydHMgPSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERPTSBjb250YWluZXIgZWxlbWVudHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LFxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LFxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICB0aXRsZUluZm9FbGVtZW50LFxyXG4gICAgYXJ0aXN0SW5mb0VsZW1lbnQsXHJcbiAgICBjb3ZlckluZm9FbGVtZW50LFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHN0YXRzLFxyXG4gICAgc2NlbmUsXHJcbiAgICBjYW1lcmEsXHJcbiAgICB0YXJnZXQsXHJcbiAgICByZW5kZXJlcixcclxuICAgIGxpZ2h0LFxyXG4gICAgbGVmdExpZ2h0LFxyXG4gICAgcmlnaHRMaWdodCxcclxuICAgIGNvbXBvc2VyLFxyXG4gICAgRlhBQSxcclxuICAgIGRvZixcclxuICAgIGd1aSxcclxuICAgIGRlcHRoVGFyZ2V0LFxyXG4gICAgZGVwdGhTaGFkZXIsXHJcbiAgICBkZXB0aFVuaWZvcm1zLFxyXG4gICAgZGVwdGhNYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVmYXVsdCBzZXR0aW5ncyAgPT09PT09PT09PSovXHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgICAgY2FudmFzV2lkdGg6IG51bGwsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgICAgIHJlY29yZHNQZXJDcmF0ZTogMjQsXHJcbiAgICAgICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgxMTExMTEsXHJcbiAgICAgICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgICAgIGNyYXRlVGV4dHVyZTogJ2ltZy93b29kLmpwZycsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgaW5mb1BhbmVsT3BhY2l0eTogMC45LFxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgICAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICAgICAgb25JbmZvUGFuZWxPcGVuZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHJvb3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICAgICAgY2FudmFzQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1jYW52YXMnLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1sb2FkaW5nJyxcclxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgICAgICBhcnRpc3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1hcnRpc3QnLFxyXG4gICAgICAgICAgICBjb3ZlckNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc3RhbnRzOiB7XHJcbiAgICAgICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgICAgICBjYW1lcmFNb3ZlVGltZTogODAwLFxyXG4gICAgICAgICAgICBpbmZvT3BlblRpbWU6IDgwMCxcclxuICAgICAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgICAgIHJlY29yZFNob3duWTogMjUsXHJcbiAgICAgICAgICAgIHJlY29yZEZsaXBwZWRZOiAxMTAsXHJcbiAgICAgICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICAgICAgejogMTgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUZvY3VzUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE2MCxcclxuICAgICAgICAgICAgICAgIHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIHo6IDg1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRaOiAwLjAzLFxyXG4gICAgICAgICAgICBncmFiU2Vuc2l0aXZpdHk6IDZcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQ0xBU1NFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBSZWNvcmQgQ2xhc3MgID09PT09PT09PT0qL1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBnZXRSZWNvcmRNYXRlcmlhbCggbnVsbCwgZmFsc2UgKSApICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgIHk6IDUwICsgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnogKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnggKyA4MCxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcclxuXHJcbiAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvcHRpb25zLCBrZXkgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRzWyBrZXkgXSA9IG9wdGlvbnNbIGtleSBdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59O1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbmUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyMDAwICk7XHJcbiAgICB9ICk7XHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsT3BlbmVkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggaW5mb0NvbnRhaW5lckVsZW1lbnQsIG9wdGlvbnMuaW5mb1BhbmVsT3BhY2l0eSApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxDbG9zZWQoKTtcclxuXHJcbiAgICAgICAgfSwgZm9yY2UgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciB1cGRhdGVTaG93blJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBzaG93blJlY29yZCAhPSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlU2hvd25SZWNvcmQuLicpO1xyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSArIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZXNldFNob3duUmVjb3JkID0gZnVuY3Rpb24gKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgc2VsZWN0UHJldlJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgc2VsZWN0TmV4dFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIGdldE5leHRBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbnZhciBuYXZpZ2F0ZVJlY29yZHMgPSBmdW5jdGlvbiAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJORVhUIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBSRVYgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBiYXNlWSwgZGVsdGEgKTtcclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlRG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIG1vdXNlLnkgKTtcclxuICAgICAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnlcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIG9wdGlvbnMuY29uc3RhbnRzLmdyYWJTZW5zaXRpdml0eSApICkge1xyXG5cclxuICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgb25LZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCAxLCBkb25lICk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCBkb25lICk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgaW5pdFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCwgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAvLyAgICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxMCwgMTAsIDEsIDEsIDEpKTtcclxuICAgIC8vICAgICAgICBzY2VuZS5hZGQodGFyZ2V0KTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBvcHRpb25zLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBvcHRpb25zLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXREZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0R1VJID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbnZhciB1cGRhdGVDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdENyYXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBvcHRpb25zLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIG9wdGlvbnMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ3JhdGUgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0UmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRSZWNvcmRNYXRlcmlhbCA9IGZ1bmN0aW9uICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gb3B0aW9ucy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogb3B0aW9ucy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHdoZWVsRGlzdGFuY2UgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG52YXIgd2hlZWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbnZhciBjb29yZHNFcXVhbHNBcHByb3ggPSBmdW5jdGlvbiAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGRvbmUgKSB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPD0gMC4xICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgLT0gMC4xO1xyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmFkZU91dCggZWxlbWVudCwgZG9uZSApO1xyXG4gICAgICAgIH0sIDEwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFkZUluID0gZnVuY3Rpb24gKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICkge1xyXG5cclxuICAgIGlmICggIWVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgJiYgZWxlbWVudC5zdHlsZS5vcGFjaXR5IDwgZmFkZVRvICkge1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBvcCA9IDA7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoICFlbGVtZW50LnN0eWxlLmRpc3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBvcCA9IGVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wICs9IDAuMDM7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApO1xyXG5cclxuICAgICAgICB9LCAxMCApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IGZhZGVUbztcclxuXHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVDYW52YXNTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbnZhc1dpZHRoID0gb3B0aW9ucy5jYW52YXNXaWR0aCA/IG9wdGlvbnMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IG9wdGlvbnMuY2FudmFzSGVpZ2h0ID8gb3B0aW9ucy5jYW52YXNIZWlnaHQgOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxudmFyIHNldENhbnZhc0RpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IGV4dGVuZCggZGVmYXVsdHMsIHBhcmFtcyApO1xyXG5cclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgaWYgKCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCAnSW5pdGlhbGl6aW5nIGNyYXRlZGlnZ2VyLmpzLi4uJyApO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5yb290Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXJvb3RDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjYW52YXNDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjYW52YXMgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGxvYWRpbmcgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmluZm9Db250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhaW5mb0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0aXRsZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMudGl0bGVDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhdGl0bGVJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIHRpdGxlIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgYXJ0aXN0SW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5hcnRpc3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhYXJ0aXN0SW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCBhcnRpc3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjb3ZlckluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY292ZXJDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY292ZXJJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY292ZXIgaW1hZ2UgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmRpc2FibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgZ2V0dGVycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmdldENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFJlY29yZHNEYXRhTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc0RhdGFMaXN0O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0TG9hZGVkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUmVjb3JkcztcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT0gIE1ldGhvZHMgYWNjZXNzb3JzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMubG9hZFJlY29yZHMgPSBsb2FkUmVjb3JkcztcclxuZXhwb3J0cy51bmxvYWRSZWNvcmRzID0gdW5sb2FkUmVjb3JkcztcclxuZXhwb3J0cy5yZXNldFNob3duUmVjb3JkID0gcmVzZXRTaG93blJlY29yZDtcclxuZXhwb3J0cy5zaHVmZmxlUmVjb3JkcyA9IHNodWZmbGVSZWNvcmRzO1xyXG5leHBvcnRzLmZsaXBTZWxlY3RlZFJlY29yZCA9IGZsaXBTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3RQcmV2UmVjb3JkID0gc2VsZWN0UHJldlJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3ROZXh0UmVjb3JkID0gc2VsZWN0TmV4dFJlY29yZDtcclxuZXhwb3J0cy5zaG93TG9hZGluZyA9IHNob3dMb2FkaW5nO1xyXG5leHBvcnRzLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFBVQkxJQyBBUEkgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5elkzSnBjSFJ6TDJOeVlYUmxaR2xuWjJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOGdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZlgxOWZJQ0FnSUNBZ0lDQWdJQ0FnSUNCZlgxOWZYeUFnSUNBZ0lDQWdJQ0FnSUNCZlgxOWZYMTlmWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0wxeGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDQWdMMXhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQ0FnTDF4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUNBdk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUM4Nk9qbzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQzg2T2pvNk9qbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXZPam82TDF4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDODZPam92WEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQzg2T2pvdmZuNWNYRG82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvdlgxOWNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdMem82T2k5ZlgxeGNPam82WEZ3Z0lDQWdYRndnTHpvNk9pOGdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjSUZ4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNPam82THlBZ0lDQXZJRnhjT2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGeGZYeUFnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRnhmWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGdzZMMTlmWDE4dklDQWdYRnc2T2pwY1hGOWZYMTljWEZ4eVhHNGdJQ0FnSUNBZ0lDQXZPam82TDF4Y09qbzZYRndnSUNCY1hEbzZPbHhjWDE5ZlgxeGNJRnhjSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z1hGdzZPanBjWENBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ2ZDQWdJQ0FnZkRvNk9ud2dJQ0FnZkZ4eVhHNGdJQ0FnSUNBZ0lDODZPam92SUNCY1hEbzZPbHhjSUNBZ1hGdzZPanA4SUNBZ0lId2dYRnd2T2pvNkx5QWdYRnc2T2pwY1hGOWZYMTljWENCY1hEbzZPbHhjSUNBZ1hGdzZPanBjWEY5ZlgxOWNYRjlmWDN3Z0lDQWdJSHc2T2pwOFgxOWZYM3hjY2x4dUlDQWdJQ0FnSUNCY1hEbzZMeUFnSUh3Nk9qbzZYRndnSUM4Nk9qcDhYMTlmWDN3Z0x6bzZPaThnSUNBZ1hGdzZPaThnSUNBZ0x5QWdYRnc2T2pwY1hDQWdJRnhjT2pvdklDQWdJQzhnSUNCZlhGeGZYMTh2T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lGeGNMMTlmWDE5OE9qbzZPanBjWEM4Nk9qb3ZJQ0FnSUM5Y1hDODZPam92SUNBZ0lDOGdYRnd2WDE5Zlh5OWNYQ0FnSUZ4Y09qbzZYRndnSUNCY1hDOWZYMTlmTHpwY1hDQjhPanA4SUM4Nk9qb3ZJQ0FnSUM5Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZEbzZPam82T2pvNk9pOGdJQ0FnTHpvNk9qbzZMeUFnSUNBdklDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJRnhjT2pvNlhGeDhPanA4THpvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhYRnc2T2pvNkx5QWdJQ0F2WEZ3Nk9qbzZMMTlmWDE4dklDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ1hGdzZPanBjWEY5ZlgxOWNYQ0FnWEZ3Nk9qbzZPam82T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh3Nk9ud2dYRnc2T2k5ZlgxOWZMeUFnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDODZPam92SUNBZ0lDOGdJQ0JjWERvNk9qbzZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T253Z0lINThJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRnd2T2pvNkx5QWdJQ0F2SUNBZ0lDQmNYRG82T2pvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhJQ0FnZkNBZ0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pvNk9qb3ZJQ0FnSUM4Z0lDQWdJQ0FnWEZ3Nk9qbzZMMTlmWDE4dlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNPanA4SUNBZ2ZDQWdJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hGOWZYMTljWENBZ0lDQWdJQ0FnSUZ4Y09qbzZPaThnSUNBZ0x5QWdJQ0FnSUNBZ0lIdzZPbndnSUNBZ2ZGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnc2ZkNBZ0lId2dJQ0FnSUNBZ0lDQWdJQ0JjWERvNkx5QWdJQ0F2SUNBZ0lDQWdJQ0FnSUZ4Y09qb3ZJQ0FnSUM4Z0lDQWdJQ0FnSUNBZ2ZEbzZmRjlmWDE5OFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRng4WDE5ZmZDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEM5ZlgxOWZMeUFnSUNBZ0lDQWdJQ0FnSUZ4Y0wxOWZYMTh2SUNBZ0lDQWdJQ0FnSUNBZ2ZuNWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOGdJQ0FnSUNBZ0lDQWdJQ0FnTGw5Zlh5NWZYeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTljY2x4dUlDQWdJQ0FnSUY5ZlgxOWZYMTlmWDE5ZlgxOWZYMThnWHk4Z0lIeGZJQ0JmWDE5ZklDQWdYMTk4SUY4dmZGOWZmQ0JmWDE5ZklDQWdYMTlmWHlBZ0lGOWZYMTlmWDE5ZlgxOWZJQ0FnSUNBZ0lIeGZYM3dnWDE5ZlgxOWZYSEpjYmlBZ0lDQWdYeThnWDE5ZlhGeGZJQ0JmWHlCY1hGOWZJQ0JjWEZ4Y0lDQWdYMTljWEM4Z1gxOGdYRndnTHlCZlh5QjhJSHdnSUh3dklGOWZYMXhjSUM4Z1gxOWZYRnhmTHlCZlh5QmNYRjhnSUY5ZklGeGNJQ0FnSUNBZ2ZDQWdmQzhnSUY5Zlh5OWNjbHh1SUNBZ0lDQmNYQ0FnWEZ4ZlgxOThJQ0I4SUZ4Y0x5OGdYMThnWEZ4OElDQjhJRnhjSUNCZlgxOHZMeUF2WHk4Z2ZDQjhJQ0F2SUM5Zkx5QWdQaUF2WHk4Z0lENGdJRjlmWHk5OElDQjhJRnhjTHlBZ0lDQWdJSHdnSUh4Y1hGOWZYeUJjWEZ4eVhHNGdJQ0FnSUNCY1hGOWZYeUFnUGw5ZmZDQWdLRjlmWDE4Z0lDOWZYM3dnSUZ4Y1gxOWZJQ0ErWDE5Zlh5QjhJSHhmWDF4Y1gxOWZJQ0F2WEZ4ZlgxOGdJQzhnWEZ4ZlgxOGdJRDVmWDN3Z0lDOWNYQ0F2WEZ4Zlgzd2dJQzlmWDE5ZklDQStYSEpjYmlBZ0lDQWdJQ0FnSUNCY1hDOGdJQ0FnSUNBZ0lDQWdJRnhjTHlBZ0lDQWdJQ0FnSUNCY1hDOGdJQ0FnSUZ4Y0x5QWdJQzlmWDE5Zlh5OHZYMTlmWDE4dklDQWdJQ0FnWEZ3dklDQWdJQ0FnWEZ3dklGeGNYMTlmWDE5ZmZDQWdJQ0JjWEM5Y2NseHVYSEpjYmx4eVhHNHFMMXh5WEc1Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnWTNKaGRHVmthV2RuWlhJdWFuTWdkakF1TUM0eElDMGdZbmtnY21semNTQW9WbUZzWlc1MGFXNGdUR1ZrY21Gd2FXVnlLU0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JpZDFjMlVnYzNSeWFXTjBKenRjY2x4dVhISmNiblpoY2lCVVNGSkZSU0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRVU0ZKRlJTZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25WRWhTUlVVblhTQTZJRzUxYkd3cExGeHlYRzRnSUNBZ1ZGZEZSVTRnUFNCeVpYRjFhWEpsS0NkMGQyVmxiaTVxY3ljcExGeHlYRzRnSUNBZ1UzUmhkSE1nUFNCeVpYRjFhWEpsS0NkemRHRjBjeTFxY3ljcE8xeHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlJQ0JKYm1wbFkzUWdZV3hzSUdWNGRHVnlibUZzSUcxdlpIVnNaWE1nZEc4Z1ZFaFNSVVV1YW5NZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNXlaWEYxYVhKbEtDY3VMM1JvY21WbGFuTmZiVzlrZFd4bGN5OVRhR0ZrWlhKUVlYTnpKeWtvVkVoU1JVVXBPMXh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5RGIzQjVVMmhoWkdWeUp5a29WRWhTUlVVcE8xeHlYRzV5WlhGMWFYSmxLQ2N1TDNSb2NtVmxhbk5mYlc5a2RXeGxjeTlTWlc1a1pYSlFZWE56Snlrb1ZFaFNSVVVwTzF4eVhHNXlaWEYxYVhKbEtDY3VMM1JvY21WbGFuTmZiVzlrZFd4bGN5OUViMFpUYUdGa1pYSW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBaWVFVRlRhR0ZrWlhJbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMDFoYzJ0UVlYTnpKeWtvVkVoU1JVVXBPMXh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5RlptWmxZM1JEYjIxd2IzTmxjaWNwS0ZSSVVrVkZLVHRjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQldRVkpKUVVKTVJWTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1MllYSWdiM0IwYVc5dWN5QTlJSHQ5TEZ4eVhHNGdJQ0FnWlhod2IzSjBjeUE5SUh0OUxDQXZMeUJQWW1wbFkzUWdabTl5SUhCMVlteHBZeUJCVUVselhISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdSRTlOSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5Rc1hISmNiaUFnSUNCallXNTJZWE5EYjI1MFlXbHVaWEpGYkdWdFpXNTBMRnh5WEc0Z0lDQWdiRzloWkdsdVowTnZiblJoYVc1bGNrVnNaVzFsYm5Rc1hISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lIUnBkR3hsU1c1bWIwVnNaVzFsYm5Rc1hISmNiaUFnSUNCaGNuUnBjM1JKYm1adlJXeGxiV1Z1ZEN4Y2NseHVJQ0FnSUdOdmRtVnlTVzVtYjBWc1pXMWxiblFzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1ZHaHlaV1V1YW5NZ2IySnFaV04wY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnYzNSaGRITXNYSEpjYmlBZ0lDQnpZMlZ1WlN4Y2NseHVJQ0FnSUdOaGJXVnlZU3hjY2x4dUlDQWdJSFJoY21kbGRDeGNjbHh1SUNBZ0lISmxibVJsY21WeUxGeHlYRzRnSUNBZ2JHbG5hSFFzWEhKY2JpQWdJQ0JzWldaMFRHbG5hSFFzWEhKY2JpQWdJQ0J5YVdkb2RFeHBaMmgwTEZ4eVhHNGdJQ0FnWTI5dGNHOXpaWElzWEhKY2JpQWdJQ0JHV0VGQkxGeHlYRzRnSUNBZ1pHOW1MRnh5WEc0Z0lDQWdaM1ZwTEZ4eVhHNGdJQ0FnWkdWd2RHaFVZWEpuWlhRc1hISmNiaUFnSUNCa1pYQjBhRk5vWVdSbGNpeGNjbHh1SUNBZ0lHUmxjSFJvVlc1cFptOXliWE1zWEhKY2JpQWdJQ0JrWlhCMGFFMWhkR1Z5YVdGc0xGeHlYRzVjY2x4dVhISmNiaUFnSUNBdktqMDlQVDA5UFQwOVBUMGdJRTlpYW1WamRITWdKaUJrWVhSaElHRnljbUY1Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnWTNKaGRHVnpJRDBnVzEwc1hISmNiaUFnSUNCeVpXTnZjbVJ6SUQwZ1cxMHNYSEpjYmlBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQmJYU3hjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCVWFISmxaUzVxY3lCdlltcGxZM1J6SUdOdmJuUmhhVzVsY25NZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSXNYSEpjYmlBZ0lDQmpjbUYwWlhORGIyNTBZV2x1WlhJc1hISmNiaUFnSUNCeVpXTnZjbVJ6UTI5dWRHRnBibVZ5TEZ4eVhHNWNjbHh1WEhKY2JpQWdJQ0F2S2owOVBUMDlQVDA5UFQwZ0lGTjBZWFJsY3l3Z2RYUnBiQ0IyWVhKeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCallXNTJZWE5YYVdSMGFDeGNjbHh1SUNBZ0lHTmhiblpoYzBobGFXZG9kQ3hjY2x4dUlDQWdJR1J3Y2l4Y2NseHVJQ0FnSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMExGeHlYRzRnSUNBZ2FYTk1iMkZrYVc1bklEMGdabUZzYzJVc1hISmNiaUFnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUZ3aVkyeHZjMlZrWENJc1hISmNiaUFnSUNCcGMxTmpjbTlzYkdsdVp5QTlJR1poYkhObExGeHlYRzRnSUNBZ1pHOVNaVzVrWlhJZ1BTQjBjblZsTEZ4eVhHNGdJQ0FnYlc5MWMyVWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdiVzkxYzJWRWIzZHVVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSGc2SURBc1hISmNiaUFnSUNBZ0lDQWdlVG9nTUZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUhSaGNtZGxkRU5oYldWeVlWQnZjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQjRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJQzB4TEZ4eVhHNGdJQ0FnYzJodmQyNVNaV052Y21RZ1BTQXRNU3hjY2x4dUlDQWdJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQXdMRnh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUUxaGRHVnlhV0ZzY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnZDI5dlpGOXRZWFJsY21saGJDeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JFWldaaGRXeDBJSE5sZEhScGJtZHpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQmtaV1poZFd4MGN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNCa1pXSjFaem9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdJQ0JqWVc1MllYTlhhV1IwYURvZ2JuVnNiQ3hjY2x4dUlDQWdJQ0FnSUNCallXNTJZWE5JWldsbmFIUTZJRzUxYkd3c1hISmNiaUFnSUNBZ0lDQWdibUpEY21GMFpYTTZJRElzWEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFCbGNrTnlZWFJsT2lBeU5DeGNjbHh1SUNBZ0lDQWdJQ0JzYVdkb2RFbHVkR1Z1YzJsMGVUb2dNU3hjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZOYjNWelpVMXZkbVU2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkVOdmJHOXlPaUF3ZURFeE1URXhNU3hjY2x4dUlDQWdJQ0FnSUNCemJHVmxkbVZEYjJ4dmNqb2dNSGd3WkRBM01ESXNYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0Z6YTFSbGVIUjFjbVU2SUNkcGJXY3ZjMnhsWlhabExuQnVaeWNzWEhKY2JpQWdJQ0FnSUNBZ1kzSmhkR1ZVWlhoMGRYSmxPaUFuYVcxbkwzZHZiMlF1YW5Cbkp5eGNjbHh1SUNBZ0lDQWdJQ0JqYkc5elpVbHVabTlRWVc1bGJFOXVRMnhwWTJzNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ1kyeHZjMlZKYm1adlVHRnVaV3hQYmxOamNtOXNiRG9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdJQ0JwYm1adlVHRnVaV3hQY0dGamFYUjVPaUF3TGprc1hISmNiaUFnSUNBZ0lDQWdjRzl6ZEhCeWIyTmxjM05wYm1jNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ1lteDFja0Z0YjNWdWREb2dNQzQwTEZ4eVhHNGdJQ0FnSUNBZ0lIVndaR0YwWlVOaGJuWmhjMU5wZW1WUGJsZHBibVJ2ZDFKbGMybDZaVG9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdJQ0J2YmtsdVptOVFZVzVsYkU5d1pXNWxaRG9nWm5WdVkzUnBiMjRnS0NrZ2UzMHNYSEpjYmlBZ0lDQWdJQ0FnYjI1SmJtWnZVR0Z1Wld4RGJHOXpaV1E2SUdaMWJtTjBhVzl1SUNncElIdDlMRnh5WEc0Z0lDQWdJQ0FnSUc5dVRHOWhaR2x1WjBWdVpEb2dablZ1WTNScGIyNGdLQ2tnZTMwc1hISmNiaUFnSUNBZ0lDQWdaV3hsYldWdWRITTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2tsa09pQW5ZM0poZEdWa2FXZG5aWEluTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVc1MllYTkRiMjUwWVdsdVpYSkpaRG9nSjJOeVlYUmxaR2xuWjJWeUxXTmhiblpoY3ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4dllXUnBibWREYjI1MFlXbHVaWEpKWkRvZ0oyTnlZWFJsWkdsbloyVnlMV3h2WVdScGJtY25MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibVp2UTI5dWRHRnBibVZ5U1dRNklDZGpjbUYwWldScFoyZGxjaTFwYm1adkp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1ZEYjI1MFlXbHVaWEpKWkRvZ0oyTnlZWFJsWkdsbloyVnlMWEpsWTI5eVpDMTBhWFJzWlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdGeWRHbHpkRU52Ym5SaGFXNWxja2xrT2lBblkzSmhkR1ZrYVdkblpYSXRjbVZqYjNKa0xXRnlkR2x6ZENjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmRtVnlRMjl1ZEdGcGJtVnlTV1E2SUNkamNtRjBaV1JwWjJkbGNpMXlaV052Y21RdFkyOTJaWEluWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRHRnVkSE02SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtUVzkyWlZScGJXVTZJREV3TURBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJXVnlZVTF2ZG1WVWFXMWxPaUE0TURBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsdVptOVBjR1Z1VkdsdFpUb2dPREF3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkNZWE5sV1RvZ05TeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prVTJodmQyNVpPaUF5TlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtSbXhwY0hCbFpGazZJREV4TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdGeVoyVjBRbUZ6WlZCdmMybDBhVzl1T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUF0TWpBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF4TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJREJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQXlPREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQXlNREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQXhPREJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiam9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dNVFl3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNVGt3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dPRFZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ0WlhKaFRXOTFjMlZOYjNabFUzQmxaV1JaT2lBd0xqQTNMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZVzFsY21GTmIzVnpaVTF2ZG1WVGNHVmxaRm82SURBdU1ETXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHZHlZV0pUWlc1emFYUnBkbWwwZVRvZ05seHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JEVEVGVFUwVlRJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDBnSUZKbFkyOXlaQ0JEYkdGemN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzUyWVhJZ1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDQnBaQ3dnWTNKaGRHVkpaQ3dnY0c5eklDa2dlMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVhV1FnUFNCcFpEdGNjbHh1SUNBZ0lIUm9hWE11WTNKaGRHVkpaQ0E5SUdOeVlYUmxTV1E3WEhKY2JpQWdJQ0IwYUdsekxuQnZjeUE5SUhCdmN6dGNjbHh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuYjNWMEp6dGNjbHh1SUNBZ0lIUm9hWE11Y21WamIzSmtXRkJ2Y3lBOUlDMDJNaUFySUNnZ01UTTFJQzhnYjNCMGFXOXVjeTV5WldOdmNtUnpVR1Z5UTNKaGRHVWdLU0FxSUhCdmN6dGNjbHh1SUNBZ0lIUm9hWE11YldWemFDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURFd01Dd2dNUzQxTENBeE1EQXNJREVzSURFc0lERWdLU3dnYm1WM0lGUklVa1ZGTGsxbGMyaEdZV05sVFdGMFpYSnBZV3dvSUdkbGRGSmxZMjl5WkUxaGRHVnlhV0ZzS0NCdWRXeHNMQ0JtWVd4elpTQXBJQ2tnS1R0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUM1blpXOXRaWFJ5ZVM1aGNIQnNlVTFoZEhKcGVDZ2dibVYzSUZSSVVrVkZMazFoZEhKcGVEUW9LUzV0WVd0bFZISmhibk5zWVhScGIyNG9JRFV3TENBd0xDQXdJQ2tnS1R0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2Ymk1elpYUW9JSFJvYVhNdWNtVmpiM0prV0ZCdmN5d2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1FtRnpaVmtzSURBZ0tUdGNjbHh1SUNBZ0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWNtVmpiM0prU1dRZ1BTQnBaRHRjY2x4dUlDQWdJSFJvYVhNdVlXSnpiMngxZEdWUWIzTnBkR2x2YmlBOUlHNWxkeUJVU0ZKRlJTNVdaV04wYjNJektDazdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NXpaWFJWYm1GamRHbDJaU2dwTzF4eVhHNGdJQ0FnZEdocGN5NXdkWE5vVW1WamIzSmtLQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzVzYjJjZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1kyOXVjMjlzWlM1c2IyY29JRndpVW1WamIzSmtJRzdDc0Z3aUxDQjBhR2x6TG1sa0xGeHlYRzRnSUNBZ0lDQWdJRndpWTNKaGRHVkpaQ0E5WENJc0lIUm9hWE11WTNKaGRHVkpaQ3hjY2x4dUlDQWdJQ0FnSUNCY0luQnZjeUE5WENJc0lIUm9hWE11Y0c5eklDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNXpaWFJCWTNScGRtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1aFkzUnBkbVVnUFNCMGNuVmxPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9MblpwYzJsaWJHVWdQU0IwY25WbE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWMyVjBWVzVoWTNScGRtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1aFkzUnBkbVVnUFNCbVlXeHpaVHRjY2x4dUlDQWdJSFJvYVhNdWJXVnphQzUyYVhOcFlteGxJRDBnWm1Gc2MyVTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNXphRzkzVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2RHaHBjeTV6ZEdGMFpTQWhQVDBnSjNOb2IzZHVKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlDZHphRzkzYmljN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1TG5ObGRFWnliMjFOWVhSeWFYaFFiM05wZEdsdmJpZ2dkR2hwY3k1dFpYTm9MbTFoZEhKcGVGZHZjbXhrSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJUYUc5M2JsbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1RXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV5YjNSaGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nVFdGMGFDNVFTU0F2SURKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTV5WldOdmNtUllVRzl6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dOVEFnS3lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJUYUc5M2Jsa3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHVlbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuSmxZMjl5WkZoUWIzTWdLeUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5nc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5rc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUIwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0dWVpQXJJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNXdkWE5vVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2RHaHBjeTV6ZEdGMFpTQWhQU0FuY0hWemFHVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlDZHdkWE5vWldRbk8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prUW1GelpWbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1RXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV5YjNSaGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nVFdGMGFDNVFTU0F2SURJZ0t5Qk5ZWFJvTGxCSklDOGdOMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1d2RXeHNVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnZEdocGN5NXpkR0YwWlNBaFBUMGdKM0IxYkd4bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnNiR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5SUMwZ1RXRjBhQzVRU1NBdklEZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1RXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1Wm14cGNGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0oyWnNhWEJ3WldRbk8xeHlYRzVjY2x4dUlDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9MbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11Y21WamIzSmtSbXhwY0hCbFpGbGNjbHh1SUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzVrWld4aGVTZ2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUM4Z05DQXBYSEpjYmlBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRTFoZEdndVVFbGNjbHh1SUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbkpsWTI5eVpGaFFiM01zWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRVpzYVhCd1pXUlpJQ3NnTlRBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhvNklIUm9hWE11WVdKemIyeDFkR1ZRYjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncFhISmNiaUFnSUNBZ0lDQWdMbTl1UTI5dGNHeGxkR1VvSUdSdmJtVWdLVHRjY2x4dVhISmNiaUFnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUdOaGJXVnlZUzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVjbVZqYjNKa1dGQnZjeUFySUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVDQXJJRGd3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxua2dMU0ExTUN4Y2NseHVJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbVpzYVhCQ1lXTnJVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDd2dibTlEWVcxbGNtRlVkMlZsYmlBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdQVDA5SUNkbWJHbHdjR1ZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpHVnNZWGtvSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1sdVptOVBjR1Z1VkdsdFpTQXZJRElnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbWx1Wm05UGNHVnVWR2x0WlNBdklESWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1dmJrTnZiWEJzWlhSbEtDQmtiMjVsSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hibTlEWVcxbGNtRlVkMlZsYmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwWVhKblpYUXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG1SbGJHRjVLQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0x5QXlJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdWNtVmpiM0prV0ZCdmN5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQTNOU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUIwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0dWVseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG5KbFkyOXlaRmhRYjNNZ0t5QnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GR2IyTjFjMUJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdRa0ZUUlNCTlJWUklUMFJUSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JuWmhjaUJsZUhSbGJtUWdQU0JtZFc1amRHbHZiaUFvSUdSbFptRjFiSFJ6TENCdmNIUnBiMjV6SUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1p2Y2lBb0lIWmhjaUJyWlhrZ2FXNGdiM0IwYVc5dWN5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b0lHOXdkR2x2Ym5Nc0lHdGxlU0FwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZtWVhWc2RITmJJR3RsZVNCZElEMGdiM0IwYVc5dWMxc2dhMlY1SUYwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z1pHVm1ZWFZzZEhNN1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ1lXNXBiV0YwWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1J2VW1WdVpHVnlJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb0lHRnVhVzFoZEdVZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCdmNIUnBiMjV6TG1SbFluVm5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmhkSE11ZFhCa1lYUmxLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ5Wlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdWRmRGUlU0dWRYQmtZWFJsS0NrN1hISmNiaUFnSUNCMWNHUmhkR1ZUYUc5M2JsSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2IzQjBhVzl1Y3k1allXMWxjbUZOYjNWelpVMXZkbVVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkRU5oYldWeVlWQnZjeTU0SUQwZ0tDQnRiM1Z6WlM1NElDOGdZMkZ1ZG1GelYybGtkR2dnTFNBd0xqVWdLU0FxSURBdU1qVTdJQzh2SUdsdWRtVnljMlVnWVhocGN6OWNjbHh1SUNBZ0lDQWdJQ0IwWVhKblpYUkRZVzFsY21GUWIzTXVlU0E5SUNnZ2JXOTFjMlV1ZVNBdklHTmhiblpoYzFkcFpIUm9JQzBnTUM0MUlDa2dLaUF3TGpJMU8xeHlYRzRnSUNBZ0lDQWdJSEp2YjNSRGIyNTBZV2x1WlhJdWNtOTBZWFJwYjI0dWVTQXJQU0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1Z6WlUxdmRtVlRjR1ZsWkZrZ0tpQW9JSFJoY21kbGRFTmhiV1Z5WVZCdmN5NTRJQzBnY205dmRFTnZiblJoYVc1bGNpNXliM1JoZEdsdmJpNTVJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtOXZkRU52Ym5SaGFXNWxjaTV5YjNSaGRHbHZiaTU2SUNzOUlHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVUxdmRYTmxUVzkyWlZOd1pXVmtXaUFxSUNnZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ0xTQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1kyRnRaWEpoTG14dmIydEJkQ2dnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0J2Y0hScGIyNXpMbkJ2YzNSd2NtOWpaWE56YVc1bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpZMlZ1WlM1dmRtVnljbWxrWlUxaGRHVnlhV0ZzSUQwZ1pHVndkR2hOWVhSbGNtbGhiRHRjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWEpsY2k1eVpXNWtaWElvSUhOalpXNWxMQ0JqWVcxbGNtRXNJR1JsY0hSb1ZHRnlaMlYwSUNrN1hISmNiaUFnSUNBZ0lDQWdjMk5sYm1VdWIzWmxjbkpwWkdWTllYUmxjbWxoYkNBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ1kyOXRjRzl6WlhJdWNtVnVaR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5S0NCelkyVnVaU3dnWTJGdFpYSmhJQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1THlwY2NseHVJQ29nVEc5aFpHbHVaeUJ0WlhSb2IyUnpYSEpjYmlBcUwxeHlYRzUyWVhJZ2RXNXNiMkZrVW1WamIzSmtjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JtYjNJZ0tDQjJZWElnYVNBOUlEQTdJR2tnUENCeVpXTnZjbVJ6TG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnBJRjB1WkdGMFlTQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG5ObGRGVnVZV04wYVhabEtDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHeHZZV1JsWkZKbFkyOXlaSE1nUFNBd08xeHlYRzRnSUNBZ2NtVmpiM0prYzBSaGRHRk1hWE4wSUQwZ1cxMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnNiMkZrVW1WamIzSmtjeUE5SUdaMWJtTjBhVzl1SUNnZ2NtVmpiM0prYzBSaGRHRXNJSE5vZFdabWJHVkNaV1p2Y21WTWIyRmthVzVuTENCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0lIUnlkV1VnS1R0Y2NseHVYSEpjYmlBZ0lDQnphRzkzVEc5aFpHbHVaeWdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR3h2WVdSbFpGSmxZMjl5WkhNZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNXNiMkZrVW1WamIzSmtjeWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2MyaDFabVpzWlVKbFptOXlaVXh2WVdScGJtY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6UkdGMFlTQTlJSE5vZFdabWJHVW9JSEpsWTI5eVpITkVZWFJoSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2dnSmlZZ2FTQThJSEpsWTI5eVpITkVZWFJoTG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnlaV052Y21SelJHRjBZVnNnYVNCZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCcElGMHVjMlYwUVdOMGFYWmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1dFpYTm9MbTFoZEdWeWFXRnNMbTFoZEdWeWFXRnNjeUE5SUdkbGRGSmxZMjl5WkUxaGRHVnlhV0ZzS0NCeVpXTnZjbVJ6UkdGMFlWc2dhU0JkTG1OdmRtVnlMQ0J5WldOdmNtUnpSR0YwWVZzZ2FTQmRMbWhoYzFOc1pXVjJaU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUhkb2VTQS9QMXh5WEc0Z0lDQWdJQ0FnSUM4dklHeHZZV1JsWkZKbFkyOXlaSE1nUFNCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnZ1BDQnlaV052Y21SekxteGxibWQwYUNBL0lISmxZMjl5WkhORVlYUmhMbXhsYm1kMGFDQTZJSEpsWTI5eVpITXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQnlaV052Y21SekxteGxibWQwYUR0Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQnlaV052Y21SelJHRjBZVHRjY2x4dUlDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9hV1JsVEc5aFpHbHVaeWdnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiM0IwYVc5dWN5NXZia3h2WVdScGJtZEZibVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnWkc5dVpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMjVsS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMHNJREl3TURBZ0tUdGNjbHh1SUNBZ0lIMGdLVHRjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ6YUhWbVpteGxVbVZqYjNKa2N5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYzJoMVptWnNaV1JTWldOdmNtUnpJRDBnY21WamIzSmtjMFJoZEdGTWFYTjBPMXh5WEc0Z0lDQWdjMmgxWm1ac1pXUlNaV052Y21SeklEMGdjMmgxWm1ac1pTZ2djMmgxWm1ac1pXUlNaV052Y21SeklDazdYSEpjYmlBZ0lDQnNiMkZrVW1WamIzSmtjeWdnYzJoMVptWnNaV1JTWldOdmNtUnpJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnVWtWRFQxSkVVeUJUUlV4RlExUkpUMDRnVFVWVVNFOUVVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVkbUZ5SUhObGJHVmpkRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyOXdaVzVwYm1jbklDWW1JR2x1Wm05UVlXNWxiRk4wWVhSbElDRTlQU0FuWTJ4dmMybHVaeWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhObGJHVmpkR1ZrVW1WamIzSmtJRDBnYVdRN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR1pzYVhCVFpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnBiR3hKYm1adlVHRnVaV3dvSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjBnS1R0Y2NseHVJQ0FnSUNBZ0lDQnBibVp2VUdGdVpXeFRkR0YwWlNBOUlDZHZjR1Z1YVc1bkp6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFM1bWJHbHdVbVZqYjNKa0tDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUNkdmNHVnVaV1FuTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk11YjI1SmJtWnZVR0Z1Wld4UGNHVnVaV1FvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm1Ga1pVbHVLQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEN3Z2IzQjBhVzl1Y3k1cGJtWnZVR0Z1Wld4UGNHRmphWFI1SUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwc0lETXdNQ0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvWm05eVkyVXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm1Ga1pVOTFkQ2dnYVc1bWIwTnZiblJoYVc1bGNrVnNaVzFsYm5RZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlJQ2RqYkc5emFXNW5KenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTNW1iR2x3UW1GamExSmxZMjl5WkNnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuWTJ4dmMyVmtKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiM0IwYVc5dWN5NXZia2x1Wm05UVlXNWxiRU5zYjNObFpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0JtYjNKalpTQXBPMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSFZ3WkdGMFpWTm9iM2R1VW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDWW1JSE5vYjNkdVVtVmpiM0prSUNFOUlITmxiR1ZqZEdWa1VtVmpiM0prSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LQ2QxY0dSaGRHVlRhRzkzYmxKbFkyOXlaQzR1SnlrN1hISmNiaUFnSUNBZ0lDQWdjMmh2ZDI1U1pXTnZjbVFnUFNCelpXeGxZM1JsWkZKbFkyOXlaRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabTl5SUNnZ2RtRnlJSEpsWTI5eVpFbGtJRDBnTURzZ2NtVmpiM0prU1dRZ1BDQnNiMkZrWldSU1pXTnZjbVJ6T3lCeVpXTnZjbVJKWkNzcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOVBTQXRNU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJ5WldOdmNtUkpaQ0JkTG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvSUhKbFkyOXlaRWxrSUQ0Z2MyVnNaV04wWldSU1pXTnZjbVFnSmlaY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkVsa0lENGdjbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTNWpjbUYwWlVsa0lDb2diM0IwYVc5dWN5NXlaV052Y21SelVHVnlRM0poZEdVZ0ppWmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpFbGtJRHdnS0NCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkTG1OeVlYUmxTV1FnS2lCdmNIUnBiMjV6TG5KbFkyOXlaSE5RWlhKRGNtRjBaU0FwSUNzZ2IzQjBhVzl1Y3k1eVpXTnZjbVJ6VUdWeVEzSmhkR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnY21WamIzSmtTV1FnWFM1d2RXeHNVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NCeVpXTnZjbVJKWkNBOVBTQnpaV3hsWTNSbFpGSmxZMjl5WkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCeVpXTnZjbVJKWkNCZExuTm9iM2RTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2djbVZqYjNKa1NXUWdYUzV3ZFhOb1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhKbGMyVjBVMmh2ZDI1U1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHWnZjbU5sSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDWW1JQ0ZtYjNKalpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJQ0U5UFNBbmIzQmxibWx1WnljZ0ppWWdhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2RqYkc5emFXNW5KeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb2RISjFaU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpXeGxZM1JsWkZKbFkyOXlaQ0E5SUMweE8xeHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NTBZWEpuWlhSQ1lYTmxVRzl6YVhScGIyNHVlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuUmhjbWRsZEVKaGMyVlFiM05wZEdsdmJpNTVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWRHRnlaMlYwUW1GelpWQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GQ1lYTmxVRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVVKaGMyVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCelpXeGxZM1JRY21WMlVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhObGJHVmpkRkpsWTI5eVpDaG5aWFJRY21WMlFYWmhhV3hoWW14bFVtVmpiM0prS0hObGJHVmpkR1ZrVW1WamIzSmtLU2s3WEhKY2JpQWdJQ0JjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ6Wld4bFkzUk9aWGgwVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSE5sYkdWamRGSmxZMjl5WkNoblpYUk9aWGgwUVhaaGFXeGhZbXhsVW1WamIzSmtLSE5sYkdWamRHVmtVbVZqYjNKa0tTazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdkbGRGQnlaWFpCZG1GcGJHRmliR1ZTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvWm5KdmJWSmxZMjl5WkNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1puSnZiVkpsWTI5eVpDQTlQU0F0TVNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJR3h2WVdSbFpGSmxZMjl5WkhNZ0xTQXhPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHWnliMjFTWldOdmNtUWdQQ0JzYjJGa1pXUlNaV052Y21SeklDMGdNU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHWnliMjFTWldOdmNtUWdLeUF4TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQXdPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVmpiM0prYzFzZ1puSnZiVkpsWTI5eVpDQmRMbUZqZEdsMlpTQS9JR1p5YjIxU1pXTnZjbVFnT2lCblpYUlFjbVYyUVhaaGFXeGhZbXhsVW1WamIzSmtLR1p5YjIxU1pXTnZjbVFwTzF4eVhHNGdJQ0FnWEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWjJWMFRtVjRkRUYyWVdsc1lXSnNaVkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2htY205dFVtVmpiM0prS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCbWNtOXRVbVZqYjNKa0lEMDlJQzB4SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdiRzloWkdWa1VtVmpiM0prY3lBdElERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1puSnZiVkpsWTI5eVpDQStJREFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQm1jbTl0VW1WamIzSmtJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdiRzloWkdWa1VtVmpiM0prY3lBdElERTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXTnZjbVJ6V3lCbWNtOXRVbVZqYjNKa0lGMHVZV04wYVhabElEOGdabkp2YlZKbFkyOXlaQ0E2SUdkbGRFNWxlSFJCZG1GcGJHRmliR1ZTWldOdmNtUW9abkp2YlZKbFkyOXlaQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHNWhkbWxuWVhSbFVtVmpiM0prY3lBOUlHWjFibU4wYVc5dUlDZ2daR2x5WldOMGFXOXVJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkamJHOXpaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR1JwY21WamRHbHZiaUE5UFQwZ0ozQnlaWFluSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFVISmxkbEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFRtVjRkRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDWW1JRzl3ZEdsdmJuTXVZMnh2YzJWSmJtWnZVR0Z1Wld4UGJsTmpjbTlzYkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYzJOeWIyeHNVbVZqYjNKa2N5QTlJR1oxYm1OMGFXOXVJQ2dnWW1GelpWa3NJRzlzWkVSbGJIUmhJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHOXNaRVJsYkhSaElEMGdJVzlzWkVSbGJIUmhJSHg4SUUxaGRHZ3VZV0p6S0NCdmJHUkVaV3gwWVNBcElENGdNQzQxSUQ4Z01DNDFJRG9nVFdGMGFDNWhZbk1vSUc5c1pFUmxiSFJoSUNrN1hISmNiaUFnSUNCMllYSWdhVzUyWlhKelpVUmxiSFJoSUQwZ01TQXRJRzlzWkVSbGJIUmhPMXh5WEc0Z0lDQWdkbUZ5SUhOamNtOXNiRk53WldWa0lEMGdhVzUyWlhKelpVUmxiSFJoSUNvZ2FXNTJaWEp6WlVSbGJIUmhJQ29nYVc1MlpYSnpaVVJsYkhSaElDb2dNekF3TzF4eVhHNWNjbHh1SUNBZ0lITmpjbTlzYkZKbFkyOXlaSE5VYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKaFlpY3BPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmtaV3gwWVNBOUlDZ2dZbUZ6WlZrZ0xTQnRiM1Z6WlM1NUlDa2dMeUJqWVc1MllYTklaV2xuYUhRN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0NCa1pXeDBZU0ErSURBZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEU1bGVIUlNaV052Y21Rb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWs1RldGUWdVa1ZEVDFKRUlGd2lJQ3NnWkdWc2RHRXBPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHUmxiSFJoSUR3Z01DQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFVISmxkbEpsWTI5eVpDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVVGSkZWaUJTUlVOUFVrUWdYQ0lnS3lCa1pXeDBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lHSmhjMlZaTENCa1pXeDBZU0FwTzF4eVhHNGdJQ0FnZlN3Z2MyTnliMnhzVTNCbFpXUWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1ptbHNiRWx1Wm05UVlXNWxiQ0E5SUdaMWJtTjBhVzl1SUNnZ2NtVmpiM0prSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2NtVmpiM0prTG1SaGRHRXVkR2wwYkdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUnBkR3hsU1c1bWIwVnNaVzFsYm5RdWFXNXVaWEpJVkUxTUlEMGdjbVZqYjNKa0xtUmhkR0V1ZEdsMGJHVTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnY21WamIzSmtMbVJoZEdFdVlYSjBhWE4wSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCaGNuUnBjM1JKYm1adlJXeGxiV1Z1ZEM1cGJtNWxja2hVVFV3Z1BTQnlaV052Y21RdVpHRjBZUzVoY25ScGMzUTdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnY21WamIzSmtMbVJoZEdFdVkyOTJaWElnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmRtVnlTVzVtYjBWc1pXMWxiblF1YzNSNWJHVXVZbUZqYTJkeWIzVnVaRWx0WVdkbElEMGdKM1Z5YkNnbklDc2djbVZqYjNKa0xtUmhkR0V1WTI5MlpYSWdLeUFuS1NjN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCRlZrVk9WRk1nU0VGT1JFeEpUa2NnSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVkbUZ5SUc5dVRXOTFjMlZOYjNabFJYWmxiblFnUFNCbWRXNWpkR2x2YmlBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRzFmY0c5emVDQTlJREFzWEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ01DeGNjbHh1SUNBZ0lDQWdJQ0JsWDNCdmMzZ2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHVmZjRzl6ZVNBOUlEQXNYSEpjYmlBZ0lDQWdJQ0FnYjJKcUlEMGdkR2hwY3p0Y2NseHVYSEpjYmlBZ0lDQXZMMmRsZENCdGIzVnpaU0J3YjNOcGRHbHZiaUJ2YmlCa2IyTjFiV1Z1ZENCamNtOXpjMkp5YjNkelpYSmNjbHh1SUNBZ0lHbG1JQ2dnSVdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHVWdQU0IzYVc1a2IzY3VaWFpsYm5RN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2daUzV3WVdkbFdDQjhmQ0JsTG5CaFoyVlpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J0WDNCdmMzZ2dQU0JsTG5CaFoyVllPMXh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplU0E5SUdVdWNHRm5aVms3WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCbExtTnNhV1Z1ZEZnZ2ZId2daUzVqYkdsbGJuUlpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J0WDNCdmMzZ2dQU0JsTG1Oc2FXVnVkRmdnS3lCa2IyTjFiV1Z1ZEM1aWIyUjVMbk5qY205c2JFeGxablFnSzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kRHRjY2x4dUlDQWdJQ0FnSUNCdFgzQnZjM2tnUFNCbExtTnNhV1Z1ZEZrZ0t5QmtiMk4xYldWdWRDNWliMlI1TG5OamNtOXNiRlJ2Y0NBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeFViM0E3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2WjJWMElIQmhjbVZ1ZENCbGJHVnRaVzUwSUhCdmMybDBhVzl1SUdsdUlHUnZZM1Z0Wlc1MFhISmNiaUFnSUNCcFppQW9JRzlpYWk1dlptWnpaWFJRWVhKbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2SUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmZjRzl6ZUNBclBTQnZZbW91YjJabWMyVjBUR1ZtZER0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWlY5d2IzTjVJQ3M5SUc5aWFpNXZabVp6WlhSVWIzQTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMGdkMmhwYkdVZ0tDQnZZbW9nUFNCdlltb3ViMlptYzJWMFVHRnlaVzUwSUNrN0lDOHZJR3B6YUdsdWRDQnBaMjV2Y21VNmJHbHVaVnh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZMeUJ0YjNWelpTQndiM05wZEdsdmJpQnRhVzUxY3lCbGJHMGdjRzl6YVhScGIyNGdhWE1nYlc5MWMyVndiM05wZEdsdmJpQnlaV3hoZEdsMlpTQjBieUJsYkdWdFpXNTBPbHh5WEc0Z0lDQWdiVzkxYzJVdWVDQTlJRzFmY0c5emVDQXRJR1ZmY0c5emVEdGNjbHh1SUNBZ0lHMXZkWE5sTG5rZ1BTQnRYM0J2YzNrZ0xTQmxYM0J2YzNrN1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ2IyNVRZM0p2Ykd4RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCM2FHVmxiRVJwY21WamRHbHZiaWdnWlNBcElEd2dNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuY0hKbGRpY2dLVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WVhacFoyRjBaVkpsWTI5eVpITW9JQ2R1WlhoMEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYjI1RGJHbGphMFYyWlc1MElEMGdablZ1WTNScGIyNGdLQ0J0YjNWelpVUnZkMjVRYjNNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCMlpXTjBiM0pRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJQ2dnS0NBb0lHMXZkWE5sUkc5M2JsQnZjeTU0SUMwZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNXZabVp6WlhSTVpXWjBJQ2tnTHlBb0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVkMmxrZEdnZ0tTQXBJQ29nTWlBdElERWdLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nS0NBdEtDQW9JRzF2ZFhObFJHOTNibEJ2Y3k1NUlDMGdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzV2Wm1aelpYUlViM0FnS1NBdklDZ2djbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzVvWldsbmFIUWdLU0FwSUNvZ01pQXJJREVnS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ01DNDFYSEpjYmlBZ0lDQWdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxZM1J2Y2lBOUlHNWxkeUJVU0ZKRlJTNVdaV04wYjNJektDQjJaV04wYjNKUWIzTXVlQ3dnZG1WamRHOXlVRzl6TG5rc0lIWmxZM1J2Y2xCdmN5NTZJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtVmpkRzl5TG5WdWNISnZhbVZqZENnZ1kyRnRaWEpoSUNrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhKaGVXTmhjM1JsY2lBOUlHNWxkeUJVU0ZKRlJTNVNZWGxqWVhOMFpYSW9JR05oYldWeVlTNXdiM05wZEdsdmJpd2dkbVZqZEc5eUxuTjFZaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2t1Ym05eWJXRnNhWHBsS0NrZ0tUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2FXNTBaWEp6WldOMGN5QTlJSEpoZVdOaGMzUmxjaTVwYm5SbGNuTmxZM1JQWW1wbFkzUnpLQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVZMmhwYkdSeVpXNHNJSFJ5ZFdVZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYVc1MFpYSnpaV04wSUhOdmJXVjBhR2x1WjF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVc1MFpYSnpaV04wY3k1c1pXNW5kR2dnUGlBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTnNhV05yWldSU1pXTnZjbVE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkhaWFFnZEdobElHWnBjbk4wSUhacGMybGliR1VnY21WamIzSmtJR2x1ZEdWeWMyVmpkR1ZrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJwSUQwZ01Ec2dhU0E4SUdsdWRHVnljMlZqZEhNdWJHVnVaM1JvT3lCcEt5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2FXNTBaWEpqWlhCMElHRWdiV1Z6YUNCM2FHbGphQ0JwY3lCdWIzUWdZU0J5WldOdmNtUXNJR0p5WldGclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhSNWNHVnZaaWhwYm5SbGNuTmxZM1J6V3lCcElGMHViMkpxWldOMExuSmxZMjl5WkVsa0tTQTlQVDBnSjNWdVpHVm1hVzVsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVkR1Z5YzJWamRITmJJR2tnWFM1dlltcGxZM1F1ZG1semFXSnNaU0FtSmlCcGJuUmxjbk5sWTNSeld5QnBJRjB1YjJKcVpXTjBMbkpsWTI5eVpFbGtJRDQ5SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zYVdOclpXUlNaV052Y21RZ1BTQnlaV052Y21Seld5QnBiblJsY25ObFkzUnpXeUJwSUYwdWIySnFaV04wTG5KbFkyOXlaRWxrSUYwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb1pYSmxJR2x6SUc5dVpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JR05zYVdOclpXUlNaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlQVDBnWTJ4cFkydGxaRkpsWTI5eVpDNXBaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pteHBjRk5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaV04wVW1WamIzSmtLQ0JqYkdsamEyVmtVbVZqYjNKa0xtbGtJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRV3hzSUdsdWRHVnljMlZqZEdWa0lISmxZMjl5WkhNZ1lYSmxJRzV2ZENCMmFYTnBZbXhsYzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2THlCT2J5QnlaV052Y21RZ2FHRnpJR0psWlc0Z2FXNTBaWEp6WldOMFpXUmNjbHh1SUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1VFc5MWMyVkViM2R1UlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDZ2djMk55YjJ4c1VtVmpiM0prYzFScGJXVnZkWFFnS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyTnliMnhzVW1WamIzSmtjeWdnYlc5MWMyVXVlU0FwTzF4eVhHNGdJQ0FnSUNBZ0lHMXZkWE5sUkc5M2JsQnZjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2JXOTFjMlV1ZUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2JXOTFjMlV1ZVZ4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDWW1JRzl3ZEdsdmJuTXVZMnh2YzJWSmJtWnZVR0Z1Wld4UGJrTnNhV05ySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVUVzkxYzJWVmNFVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTnNaV0Z5U1c1MFpYSjJZV3dvSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMElDazdYSEpjYmlBZ0lDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMmR5WVdJbktUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHTnZiM0prYzBWeGRXRnNjMEZ3Y0hKdmVDZ2diVzkxYzJWRWIzZHVVRzl6TENCdGIzVnpaU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WjNKaFlsTmxibk5wZEdsMmFYUjVJQ2tnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc5dVEyeHBZMnRGZG1WdWRDZ2diVzkxYzJWRWIzZHVVRzl6SUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCdmJrdGxlVVJ2ZDI1RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1V1YTJWNVEyOWtaU0E5UFQwZ016Y2dmSHdnWlM1clpYbERiMlJsSUQwOVBTQXpPQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuYm1WNGRDY2dLVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQmxMbXRsZVVOdlpHVWdQVDA5SURNNUlIeDhJR1V1YTJWNVEyOWtaU0E5UFQwZ05EQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVoZG1sbllYUmxVbVZqYjNKa2N5Z2dKM0J5WlhZbklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUc5dVYybHVaRzkzVW1WemFYcGxSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdZMkZzWTNWc1lYUmxRMkZ1ZG1GelUybDZaU2dwTzF4eVhHNGdJQ0FnYzJWMFEyRnVkbUZ6UkdsdFpXNXphVzl1Y3lncE8xeHlYRzVjY2x4dUlDQWdJSEpsYm1SbGNtVnlMbk5sZEZOcGVtVW9JR05oYm5aaGMxZHBaSFJvTENCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dUlDQWdJR05oYldWeVlTNWhjM0JsWTNRZ1BTQmpZVzUyWVhOWGFXUjBhQ0F2SUdOaGJuWmhjMGhsYVdkb2REdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1MWNHUmhkR1ZRY205cVpXTjBhVzl1VFdGMGNtbDRLQ2s3WEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJFWlhCMGFDNTJZV3gxWlNBOUlHUmxjSFJvVkdGeVoyVjBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5OcGVtVXVkbUZzZFdVdWMyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRHVjRkR1ZzTG5aaGJIVmxMbk5sZENnZ01TNHdJQzhnWTJGdWRtRnpWMmxrZEdnc0lERXVNQ0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdSbGhCUVM1MWJtbG1iM0p0Y3k1eVpYTnZiSFYwYVc5dUxuWmhiSFZsTG5ObGRDZ2dNU0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lDQWdWVWtnVFVWVVNFOUVVeUFnSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVkbUZ5SUhOb2IzZE1iMkZrYVc1bklEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdaaFpHVkpiaWdnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUXNJREVzSUdSdmJtVWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FHbGtaVXh2WVdScGJtY2dQU0JtZFc1amRHbHZiaUFvSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ1ptRmtaVTkxZENnZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblFzSUdSdmJtVWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQkpUa2xVU1VGTVNWTkJWRWxQVGlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiblpoY2lCcGJtbDBVMk5sYm1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0x5OGdjMk5sYm1Vc0lISmxibVJsY21WeUxDQmpZVzFsY21Fc0xpNHVYSEpjYmlBZ0lDQnpZMlZ1WlNBOUlHNWxkeUJVU0ZKRlJTNVRZMlZ1WlNncE8xeHlYRzVjY2x4dUlDQWdJSEpsYm1SbGNtVnlJRDBnYm1WM0lGUklVa1ZGTGxkbFlrZE1VbVZ1WkdWeVpYSW9JSHRjY2x4dUlDQWdJQ0FnSUNCaGJuUnBZV3hwWVhNNklIUnlkV1ZjY2x4dUlDQWdJSDBnS1R0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRGTnBlbVVvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVYSEpjYmlBZ0lDQmpZVzUyWVhORGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBJQ2s3WEhKY2JpQWdJQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1sa0lEMGdYQ0pqYjI1MFpYaDBYQ0k3WEhKY2JpQWdJQ0J5Wlc1a1pYSmxjaTV6WlhSRGJHVmhja052Ykc5eUtDQnZjSFJwYjI1ekxtSmhZMnRuY205MWJtUkRiMnh2Y2l3Z01TQXBPMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZU0E5SUc1bGR5QlVTRkpGUlM1UVpYSnpjR1ZqZEdsMlpVTmhiV1Z5WVNnZ05EVXNJR05oYm5aaGMxZHBaSFJvSUM4Z1kyRnVkbUZ6U0dWcFoyaDBMQ0F3TGpFc0lESXdNREF3SUNrN1hISmNiaUFnSUNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnZ1BTQTBOVHRjY2x4dUlDQWdJR05oYldWeVlTNW1jbUZ0WlZOcGVtVWdQU0F6TWp0Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVYSEpjYmlBZ0lDQjBZWEpuWlhRZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0IwWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDaHVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvTVRBc0lERXdMQ0F4TUN3Z01Td2dNU3dnTVNrcE8xeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lITmpaVzVsTG1Ga1pDaDBZWEpuWlhRcE8xeHlYRzRnSUNBZ1kyRnRaWEpoTG14dmIydEJkQ2dnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2s3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSGR2YjJSZmRHVjRkSFZ5WlNBOUlGUklVa1ZGTGtsdFlXZGxWWFJwYkhNdWJHOWhaRlJsZUhSMWNtVW9JRzl3ZEdsdmJuTXVZM0poZEdWVVpYaDBkWEpsSUNrN1hISmNiaUFnSUNCM2IyOWtYM1JsZUhSMWNtVXVZVzVwYzI5MGNtOXdlU0E5SUhKbGJtUmxjbVZ5TG1kbGRFMWhlRUZ1YVhOdmRISnZjSGtvS1R0Y2NseHVJQ0FnSUhkdmIyUmZiV0YwWlhKcFlXd2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFFeGhiV0psY25STllYUmxjbWxoYkNnZ2UxeHlYRzRnSUNBZ0lDQWdJRzFoY0RvZ2QyOXZaRjkwWlhoMGRYSmxYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JseHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxjaUE5SUc1bGR5QlVTRkpGUlM1UFltcGxZM1F6UkNncE8xeHlYRzRnSUNBZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5SUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmlBZ0lDQnpZMlZ1WlM1aFpHUW9JSEp2YjNSRGIyNTBZV2x1WlhJZ0tUdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEl1WVdSa0tDQmpjbUYwWlhORGIyNTBZV2x1WlhJZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwYm1sMFEzSmhkR1Z6S0NrN1hISmNiaUFnSUNCcGJtbDBVbVZqYjNKa2N5Z3BPMXh5WEc1Y2NseHVJQ0FnSUd4cFoyaDBJRDBnYm1WM0lGUklVa1ZGTGxCdmFXNTBUR2xuYUhRb0lEQjRSa1pHUmtaR0xDQnZjSFJwYjI1ekxteHBaMmgwU1c1MFpXNXphWFI1SUNvZ01TNHhJQ2s3WEhKY2JpQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSURNd01Dd2dPREFzSURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2diR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0JzWldaMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRzl3ZEdsdmJuTXViR2xuYUhSSmJuUmxibk5wZEhrZ0tpQXdMallnS1R0Y2NseHVJQ0FnSUd4bFpuUk1hV2RvZEM1d2IzTnBkR2x2Ymk1elpYUW9JQzB4TURBc0lETXdNQ3dnTVRBd01DQXBPMXh5WEc0Z0lDQWdjMk5sYm1VdVlXUmtLQ0JzWldaMFRHbG5hSFFnS1R0Y2NseHVYSEpjYmlBZ0lDQnlhV2RvZEV4cFoyaDBJRDBnYm1WM0lGUklVa1ZGTGxCdmFXNTBUR2xuYUhRb0lEQjRSa1pHUmtaR0xDQnZjSFJwYjI1ekxteHBaMmgwU1c1MFpXNXphWFI1SUNvZ01DNDJJQ2s3WEhKY2JpQWdJQ0J5YVdkb2RFeHBaMmgwTG5CdmMybDBhVzl1TG5ObGRDZ2dMVEV3TUN3Z016QXdMQ0F0TVRBd01DQXBPMXh5WEc0Z0lDQWdjMk5sYm1VdVlXUmtLQ0J5YVdkb2RFeHBaMmgwSUNrN1hISmNibHh5WEc0Z0lDQWdhVzVwZEZCdmMzUlFjbTlqWlhOemFXNW5LQ2s3WEhKY2JseHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMFJQVFUxdmRYTmxVMk55YjJ4c0p5d2diMjVUWTNKdmJHeEZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHRiM1Z6Wlhkb1pXVnNKeXdnYjI1VFkzSnZiR3hGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpXMXZkbVVuTENCdmJrMXZkWE5sVFc5MlpVVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oyMXZkWE5sWkc5M2JpY3NJRzl1VFc5MWMyVkViM2R1UlhabGJuUXNJR1poYkhObElDazdYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuYlc5MWMyVjFjQ2NzSUc5dVRXOTFjMlZWY0VWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc1Y2NseHVJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuYTJWNVpHOTNiaWNzSUc5dVMyVjVSRzkzYmtWMlpXNTBMQ0JtWVd4elpTQXBPeUJjY2x4dVhISmNiaUFnSUNCcFppQW9JRzl3ZEdsdmJuTXVkWEJrWVhSbFEyRnVkbUZ6VTJsNlpVOXVWMmx1Wkc5M1VtVnphWHBsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjNKbGMybDZaU2NzSUc5dVYybHVaRzkzVW1WemFYcGxSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4dklFUlBUU0J6WlhSMWNGeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWNHOXphWFJwYjI0Z1BTQW5jbVZzWVhScGRtVW5PMXh5WEc0Z0lDQWdZMkZ1ZG1GelEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdYSEpjYmlBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNibHh5WEc0Z0lDQWdjMlYwUTJGdWRtRnpSR2x0Wlc1emFXOXVjeWdwTzF4eVhHNWNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCdmNIUnBiMjV6TG1SbFluVm5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwYm1sMFJHVmlkV2NvS1R0Y2NseHVJQ0FnSUNBZ0lDQnBibWwwUjFWSktDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1SUNBZ0lHRnVhVzFoZEdVb0tUdGNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnBibWwwVUc5emRGQnliMk5sYzNOcGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdaR1Z3ZEdoVGFHRmtaWElnUFNCVVNGSkZSUzVUYUdGa1pYSk1hV0l1WkdWd2RHaFNSMEpCTzF4eVhHNGdJQ0FnWkdWd2RHaFZibWxtYjNKdGN5QTlJRlJJVWtWRkxsVnVhV1p2Y20xelZYUnBiSE11WTJ4dmJtVW9JR1JsY0hSb1UyaGhaR1Z5TG5WdWFXWnZjbTF6SUNrN1hISmNibHh5WEc0Z0lDQWdaR1Z3ZEdoTllYUmxjbWxoYkNBOUlHNWxkeUJVU0ZKRlJTNVRhR0ZrWlhKTllYUmxjbWxoYkNnZ2UxeHlYRzRnSUNBZ0lDQWdJR1p5WVdkdFpXNTBVMmhoWkdWeU9pQmtaWEIwYUZOb1lXUmxjaTVtY21GbmJXVnVkRk5vWVdSbGNpeGNjbHh1SUNBZ0lDQWdJQ0IyWlhKMFpYaFRhR0ZrWlhJNklHUmxjSFJvVTJoaFpHVnlMblpsY25SbGVGTm9ZV1JsY2l4Y2NseHVJQ0FnSUNBZ0lDQjFibWxtYjNKdGN6b2daR1Z3ZEdoVmJtbG1iM0p0YzF4eVhHNGdJQ0FnZlNBcE8xeHlYRzRnSUNBZ1pHVndkR2hOWVhSbGNtbGhiQzVpYkdWdVpHbHVaeUE5SUZSSVVrVkZMazV2UW14bGJtUnBibWM3WEhKY2JseHlYRzRnSUNBZ1pHVndkR2hVWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VjJWaVIweFNaVzVrWlhKVVlYSm5aWFFvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFzSUh0Y2NseHVJQ0FnSUNBZ0lDQnRhVzVHYVd4MFpYSTZJRlJJVWtWRkxrNWxZWEpsYzNSR2FXeDBaWElzWEhKY2JpQWdJQ0FnSUNBZ2JXRm5SbWxzZEdWeU9pQlVTRkpGUlM1T1pXRnlaWE4wUm1sc2RHVnlMRnh5WEc0Z0lDQWdJQ0FnSUdadmNtMWhkRG9nVkVoU1JVVXVVa2RDUVVadmNtMWhkRnh5WEc0Z0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lHTnZiWEJ2YzJWeUlEMGdibVYzSUZSSVVrVkZMa1ZtWm1WamRFTnZiWEJ2YzJWeUtDQnlaVzVrWlhKbGNpQXBPMXh5WEc0Z0lDQWdZMjl0Y0c5elpYSXVZV1JrVUdGemN5Z2dibVYzSUZSSVVrVkZMbEpsYm1SbGNsQmhjM01vSUhOalpXNWxMQ0JqWVcxbGNtRWdLU0FwTzF4eVhHNWNjbHh1WEhKY2JpQWdJQ0F2S2owOVBUMDlQVDA5UFQwZ0lFUmxjSFJvSUc5bUlHWnBaV3hrSUhOb1lXUmxjaUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdaRzltSUQwZ2JtVjNJRlJJVWtWRkxsTm9ZV1JsY2xCaGMzTW9JRlJJVWtWRkxrUnZSbE5vWVdSbGNpQXBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SRVpYQjBhQzUyWVd4MVpTQTlJR1JsY0hSb1ZHRnlaMlYwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuTnBlbVV1ZG1Gc2RXVXVjMlYwS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkR1Y0ZEdWc0xuWmhiSFZsTG5ObGRDZ2dNUzR3SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREV1TUNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lDOHZiV0ZyWlNCemRYSmxJSFJvWVhRZ2RHaGxjMlVnZEhkdklIWmhiSFZsY3lCaGNtVWdkR2hsSUhOaGJXVWdabTl5SUhsdmRYSWdZMkZ0WlhKaExDQnZkR2hsY25kcGMyVWdaR2x6ZEdGdVkyVnpJSGRwYkd3Z1ltVWdkM0p2Ym1jdVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVlbTVsWVhJdWRtRnNkV1VnUFNCallXMWxjbUV1Ym1WaGNqc2dMeTlqWVcxbGNtRWdZMnhwY0hCcGJtY2djM1JoY25SY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTZabUZ5TG5aaGJIVmxJRDBnWTJGdFpYSmhMbVpoY2pzZ0x5OWpZVzFsY21FZ1kyeHBjSEJwYm1jZ1pXNWtYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWnZZMkZzUkdWd2RHZ3VkbUZzZFdVZ1BTQTFPeUF2TDJadlkyRnNJR1JwYzNSaGJtTmxJSFpoYkhWbElHbHVJRzFsZEdWeWN5d2dZblYwSUhsdmRTQnRZWGtnZFhObElHRjFkRzltYjJOMWN5QnZjSFJwYjI0Z1ltVnNiM2RjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTmhiRXhsYm1kMGFDNTJZV3gxWlNBOUlHTmhiV1Z5WVM1bWIyTmhiRXhsYm1kMGFEc2dMeTltYjJOaGJDQnNaVzVuZEdnZ2FXNGdiVzFjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWMzUnZjQzUyWVd4MVpTQTlJRGd1TURzZ0x5OW1MWE4wYjNBZ2RtRnNkV1ZjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1emFHOTNSbTlqZFhNdWRtRnNkV1VnUFNCbVlXeHpaVHNnTHk5emFHOTNJR1JsWW5WbklHWnZZM1Z6SUhCdmFXNTBJR0Z1WkNCbWIyTmhiQ0J5WVc1blpTQW9iM0poYm1kbElEMGdabTlqWVd3Z2NHOXBiblFzSUdKc2RXVWdQU0JtYjJOaGJDQnlZVzVuWlNsY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11YldGdWRXRnNaRzltTG5aaGJIVmxJRDBnZEhKMVpUc2dMeTl0WVc1MVlXd2daRzltSUdOaGJHTjFiR0YwYVc5dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVibVJ2Wm5OMFlYSjBMblpoYkhWbElEMGdNVEU3SUM4dmJtVmhjaUJrYjJZZ1lteDFjaUJ6ZEdGeWRGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTVrYjJaa2FYTjBMblpoYkhWbElEMGdPREE3SUM4dmJtVmhjaUJrYjJZZ1lteDFjaUJtWVd4c2IyWm1JR1JwYzNSaGJtTmxJQ0FnSUZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWmtiMlp6ZEdGeWRDNTJZV3gxWlNBOUlEQTdJQzh2Wm1GeUlHUnZaaUJpYkhWeUlITjBZWEowWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptUnZabVJwYzNRdWRtRnNkV1VnUFNBeE1EQTdJQzh2Wm1GeUlHUnZaaUJpYkhWeUlHWmhiR3h2Wm1ZZ1pHbHpkR0Z1WTJVZ1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TGtOdlF5NTJZV3gxWlNBOUlEQXVNRE03SUM4dlkybHlZMnhsSUc5bUlHTnZibVoxYzJsdmJpQnphWHBsSUdsdUlHMXRJQ2d6TlcxdElHWnBiRzBnUFNBd0xqQXpiVzBwSUNBZ0lGeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHVaWFIwYVc1bkxuWmhiSFZsSUQwZ1ptRnNjMlU3SUM4dmRYTmxJRzl3ZEdsallXd2diR1Z1Y3lCMmFXZHVaWFIwYVc1blAxeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1aGRYUnZabTlqZFhNdWRtRnNkV1VnUFNCMGNuVmxPeUF2TDNWelpTQmhkWFJ2Wm05amRYTWdhVzRnYzJoaFpHVnlQeUJrYVhOaFlteGxJR2xtSUhsdmRTQjFjMlVnWlhoMFpYSnVZV3dnWm05allXeEVaWEIwYUNCMllXeDFaVnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1adlkzVnpMblpoYkhWbExuTmxkQ2dnTUM0ek5Td2dNQzR6TlNBcE95QXZMeUJoZFhSdlptOWpkWE1nY0c5cGJuUWdiMjRnYzJOeVpXVnVJQ2d3TGpBc01DNHdJQzBnYkdWbWRDQnNiM2RsY2lCamIzSnVaWElzSURFdU1Dd3hMakFnTFNCMWNIQmxjaUJ5YVdkb2RDa2dYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11YldGNFlteDFjaTUyWVd4MVpTQTlJRzl3ZEdsdmJuTXVZbXgxY2tGdGIzVnVkRHNnTHk5amJHRnRjQ0IyWVd4MVpTQnZaaUJ0WVhnZ1lteDFjaUFvTUM0d0lEMGdibThnWW14MWNpd3hMakFnWkdWbVlYVnNkQ2tnSUNBZ1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5Sb2NtVnphRzlzWkM1MllXeDFaU0E5SURBN0lDOHZhR2xuYUd4cFoyaDBJSFJvY21WemFHOXNaRHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bllXbHVMblpoYkhWbElEMGdNRHNnTHk5b2FXZG9iR2xuYUhRZ1oyRnBianRjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVZbWxoY3k1MllXeDFaU0E5SURBN0lDOHZZbTlyWldnZ1pXUm5aU0JpYVdGeklDQWdJQ0FnSUNCY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1jbWx1WjJVdWRtRnNkV1VnUFNBd095QXZMMkp2YTJWb0lHTm9jbTl0WVhScFl5QmhZbVZ5Y21GMGFXOXVMMlp5YVc1bmFXNW5YSEpjYmx4eVhHNGdJQ0FnUmxoQlFTQTlJRzVsZHlCVVNGSkZSUzVUYUdGa1pYSlFZWE56S0NCVVNGSkZSUzVHV0VGQlUyaGhaR1Z5SUNrN1hISmNibHh5WEc0Z0lDQWdSbGhCUVM1MWJtbG1iM0p0Y3k1eVpYTnZiSFYwYVc5dUxuWmhiSFZsTG5ObGRDZ2dNU0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhJQzhnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmlBZ0lDQkdXRUZCTG5KbGJtUmxjbFJ2VTJOeVpXVnVJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0JqYjIxd2IzTmxjaTVoWkdSUVlYTnpLQ0JrYjJZZ0tUdGNjbHh1SUNBZ0lHTnZiWEJ2YzJWeUxtRmtaRkJoYzNNb0lFWllRVUVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdhVzVwZEVSbFluVm5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSE4wWVhSeklEMGdibVYzSUZOMFlYUnpLQ2s3WEhKY2JpQWdJQ0J6ZEdGMGN5NWtiMjFGYkdWdFpXNTBMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdKMkZpYzI5c2RYUmxKenRjY2x4dUlDQWdJSE4wWVhSekxtUnZiVVZzWlcxbGJuUXVjM1I1YkdVdWJHVm1kQ0E5SUZ3aU1Gd2lPMXh5WEc0Z0lDQWdjM1JoZEhNdVpHOXRSV3hsYldWdWRDNXpkSGxzWlM1MGIzQWdQU0JjSWpCY0lqdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0NCemRHRjBjeTVrYjIxRmJHVnRaVzUwSUNrN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdSbFluVm5JRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ01qQXNJREl3TENBeU1Dd2dNU3dnTVN3Z01TQXBJQ2s3WEhKY2JpQWdJQ0JrWldKMVp5NXdiM05wZEdsdmJpNXpaWFFvWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1ZUN4Y2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEM1d2IzTnBkR2x2Ymk1NUxGeHlYRzRnSUNBZ0lDQWdJR3hwWjJoMExuQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDazdYSEpjYmlBZ0lDQnpZMlZ1WlM1aFpHUW9JR1JsWW5WbklDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUkhWVWtnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHTmhiV1Z5WVVadmJHUmxjaXhjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZHYjJOaGJFeGxibWQwYUN4Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXNYSEpjYmlBZ0lDQWdJQ0FnWDJ4aGMzUTdYSEpjYmx4eVhHNGdJQ0FnWjNWcElEMGdibVYzSUdSaGRDNUhWVWtvS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUc5d2RHbHZibk11Y0c5emRIQnliMk5sYzNOcGJtY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR05oYldWeVlVWnZiR1JsY2lBOUlHZDFhUzVoWkdSR2IyeGtaWElvSUNkRFlXMWxjbUVuSUNrN1hISmNiaUFnSUNBZ0lDQWdZMkZ0WlhKaFJtOWpZV3hNWlc1bmRHZ2dQU0JqWVcxbGNtRkdiMnhrWlhJdVlXUmtLQ0JqWVcxbGNtRXNJQ2RtYjJOaGJFeGxibWQwYUNjc0lESTRMQ0F5TURBZ0tTNXVZVzFsS0NBblJtOWpZV3dnVEdWdVozUm9KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHTmhiV1Z5WVVadlkyRnNUR1Z1WjNSb0xtOXVRMmhoYm1kbEtDQjFjR1JoZEdWRFlXMWxjbUVnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5SUQwZ1ozVnBMbUZrWkVadmJHUmxjaWdnSjBSbGNIUm9JRzltSUVacFpXeGtKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1iMk5oYkVSbGNIUm9MQ0FuZG1Gc2RXVW5MQ0F3TENBeE1DQXBMbTVoYldVb0lDZEdiMk5oYkNCRVpYQjBhQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVabk4wYjNBc0lDZDJZV3gxWlNjc0lEQXNJREl5SUNrdWJtRnRaU2dnSjBZZ1UzUnZjQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXViV0Y0WW14MWNpd2dKM1poYkhWbEp5d2dNQ3dnTXlBcExtNWhiV1VvSUNkdFlYZ2dZbXgxY2ljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuTm9iM2RHYjJOMWN5d2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZFRhRzkzSUVadlkyRnNJRkpoYm1kbEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXViV0Z1ZFdGc1pHOW1MQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMDFoYm5WaGJDQkViMFluSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbTVrYjJaemRHRnlkQ3dnSjNaaGJIVmxKeXdnTUN3Z01qQXdJQ2t1Ym1GdFpTZ2dKMjVsWVhJZ2MzUmhjblFuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbTVrYjJaa2FYTjBMQ0FuZG1Gc2RXVW5MQ0F3TENBeU1EQWdLUzV1WVcxbEtDQW5ibVZoY2lCbVlXeHNiMlptSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVtWkc5bWMzUmhjblFzSUNkMllXeDFaU2NzSURBc0lESXdNQ0FwTG01aGJXVW9JQ2RtWVhJZ2MzUmhjblFuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVprYjJaa2FYTjBMQ0FuZG1Gc2RXVW5MQ0F3TENBeU1EQWdLUzV1WVcxbEtDQW5abUZ5SUdaaGJHeHZabVluSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1RGIwTXNJQ2QyWVd4MVpTY3NJREFzSURBdU1TQXBMbk4wWlhBb0lEQXVNREF4SUNrdWJtRnRaU2dnSjJOcGNtTnNaU0J2WmlCamIyNW1kWE5wYjI0bklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NTJhV2R1WlhSMGFXNW5MQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMVpwWjI1bGRIUnBibWNuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1dmRYUXNJQ2QyWVd4MVpTY3NJREFzSURJZ0tTNXVZVzFsS0NBbmIzVjBaWElnWW05eVpHVnlKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NTJhV2R1YVc0c0lDZDJZV3gxWlNjc0lEQXNJREVnS1M1emRHVndLQ0F3TGpBeElDa3VibUZ0WlNnZ0oybHVibVZ5SUdKdmNtUmxjaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVkbWxuYm1aaFpHVXNJQ2QyWVd4MVpTY3NJREFzSURJeUlDa3VibUZ0WlNnZ0oyWmhaR1VnWVhRbklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NWhkWFJ2Wm05amRYTXNJQ2QyWVd4MVpTY2dLUzV1WVcxbEtDQW5RWFYwYjJadlkzVnpKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1iMk4xY3k1MllXeDFaU3dnSjNnbkxDQXdMQ0F4SUNrdWJtRnRaU2dnSjJadlkzVnpJSGduSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTNWekxuWmhiSFZsTENBbmVTY3NJREFzSURFZ0tTNXVZVzFsS0NBblptOWpkWE1nZVNjZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuUm9jbVZ6YUc5c1pDd2dKM1poYkhWbEp5d2dNQ3dnTVNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5kR2h5WlhOb2IyeGtKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW5ZV2x1TENBbmRtRnNkV1VuTENBd0xDQXhNREFnS1M1dVlXMWxLQ0FuWjJGcGJpY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbUpwWVhNc0lDZDJZV3gxWlNjc0lEQXNJRFFnS1M1emRHVndLQ0F3TGpBeElDa3VibUZ0WlNnZ0oySnBZWE1uSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp5YVc1blpTd2dKM1poYkhWbEp5d2dNQ3dnTlNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5abkpwYm1kbEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVibTlwYzJVc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblZYTmxJRTV2YVhObEp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dVlXMXZkVzUwTENBbmRtRnNkV1VuTENBd0xDQXdMakF3TVNBcExuTjBaWEFvSURBdU1EQXdNU0FwTG01aGJXVW9JQ2RrYVhSb1pYSW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVrWlhCMGFHSnNkWElzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuUW14MWNpQkVaWEIwYUNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11WkdKemFYcGxMQ0FuZG1Gc2RXVW5MQ0F3TENBMUlDa3VibUZ0WlNnZ0oySnNkWElnYzJsNlpTY2dLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdaM1ZwTG1Oc2IzTmxLQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlIVndaR0YwWlVOaGJXVnlZU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqWVcxbGNtRXVjMlYwVEdWdWN5Z2dZMkZ0WlhKaExtWnZZMkZzVEdWdVozUm9MQ0JqWVcxbGNtRXVabkpoYldWVGFYcGxJQ2s3WEhKY2JpQWdJQ0JqWVcxbGNtRXVkWEJrWVhSbFVISnZhbVZqZEdsdmJrMWhkSEpwZUNncE8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1RHVnVaM1JvTG5aaGJIVmxJRDBnWTJGdFpYSmhMbVp2WTJGc1RHVnVaM1JvTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnBibWwwUTNKaGRHVnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR1p2Y2lBb0lIWmhjaUJqY21GMFpVbGtJRDBnTURzZ1kzSmhkR1ZKWkNBOElHOXdkR2x2Ym5NdWJtSkRjbUYwWlhNN0lHTnlZWFJsU1dRckt5QXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZM0poZEdVZ1BTQmpjbVZoZEdWRGNtRjBaU2dnWTNKaGRHVkpaQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lHTnlZWFJsYzBOdmJuUmhhVzVsY2k1aFpHUW9JR055WVhSbElDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmpjbUYwWlhORGIyNTBZV2x1WlhJdWNHOXphWFJwYjI0dWVpQTlJQzBvSURFeE1DQXRJQ2dnTVRFd0lDb2diM0IwYVc5dWN5NXVZa055WVhSbGN5QXBJQ2tnTHlBeU8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJqY21WaGRHVkRjbUYwWlNBOUlHWjFibU4wYVc5dUlDZ2dhV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkSUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHSnZlRjlpYjNSMGIyMGdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBeE1EQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJKdmRIUnZiU0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZmJHVm1kQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lESXdNQ3dnTVRBc0lEZ3dJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJR0p2ZUY5c1pXWjBMbkJ2YzJsMGFXOXVMbk5sZENnZ01Dd2dNelVzSUMwMU5TQXBPMXh5WEc0Z0lDQWdZbTk0WDJ4bFpuUXVjbTkwWVhScGIyNHVlQ0E5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMnhsWm5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbGtJRDA5UFNBd0lDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmliM2hmY21sbmFIUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBNE1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQWdJQ0FnWW05NFgzSnBaMmgwTG5CdmMybDBhVzl1TG5ObGRDZ2dNQ3dnTXpVc0lEVTFJQ2s3WEhKY2JpQWdJQ0FnSUNBZ1ltOTRYM0pwWjJoMExuSnZkR0YwYVc5dUxuZ2dQU0JOWVhSb0xsQkpJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmY21sbmFIUWdLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJKaFkyc2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBNE1Dd2dNVEFzSURFeU1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXdiM05wZEdsdmJpNXpaWFFvSUMweE1EVXNJRE0xTENBd0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZZbUZqYXlBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZabkp2Ym5RZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0EwTUN3Z01UQXNJREV3TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNCaWIzaGZabkp2Ym5RdWNHOXphWFJwYjI0dWMyVjBLQ0E1TlN3Z01qVXNJREFnS1R0Y2NseHVJQ0FnSUdKdmVGOW1jbTl1ZEM1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZlpuSnZiblFnS1R0Y2NseHVYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1Y0c5emFYUnBiMjR1ZWlBOUlDMHhNVEFnS2lCcFpEdGNjbHh1SUNBZ0lISmxkSFZ5YmlCamNtRjBaWE5iSUdsa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUlNaV052Y21SeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJqZFhKeVpXNTBVbVZqYjNKa1NXUWdQU0F3TzF4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdOeVlYUmxTV1FnUFNBd095QmpjbUYwWlVsa0lEd2dZM0poZEdWekxteGxibWQwYURzZ1kzSmhkR1ZKWkNzcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0NCMllYSWdjRzl6SUQwZ01Ec2djRzl6SUR3Z2IzQjBhVzl1Y3k1eVpXTnZjbVJ6VUdWeVEzSmhkR1U3SUhCdmN5c3JJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqY21WaGRHVlNaV052Y21Rb0lHTjFjbkpsYm5SU1pXTnZjbVJKWkN3Z1kzSmhkR1ZKWkN3Z2NHOXpJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlNaV052Y21SSlpDc3JPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCamNtVmhkR1ZTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdsa0xDQmpjbUYwWlVsa0xDQndiM01nS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhKbFkyOXlaQ0E5SUc1bGR5QlNaV052Y21Rb0lHbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tUdGNjbHh1SUNBZ0lHTnlZWFJsYzFzZ1kzSmhkR1ZKWkNCZExtRmtaQ2dnY21WamIzSmtMbTFsYzJnZ0tUdGNjbHh1SUNBZ0lISmxZMjl5WkhNdWNIVnphQ2dnY21WamIzSmtJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHZGxkRkpsWTI5eVpFMWhkR1Z5YVdGc0lEMGdablZ1WTNScGIyNGdLQ0J6Y21Nc0lHaGhjMU5zWldWMlpTQXBJSHRjY2x4dVhISmNiaUFnSUNCMllYSWdhVzFuSUQwZ2JtVjNJRWx0WVdkbEtDazdYSEpjYmlBZ0lDQnBiV2N1WTNKdmMzTlBjbWxuYVc0Z1BTQmNJa0Z1YjI1NWJXOTFjMXdpTzF4eVhHNGdJQ0FnYVcxbkxuTnlZeUE5SUhOeVl5QS9JSE55WXlBNklDY25PMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnBiV2RYYVdSMGFDQTlJRFF3TUN4Y2NseHVJQ0FnSUNBZ0lDQnBiV2RJWldsbmFIUWdQU0EwTURBc1hISmNiaUFnSUNBZ0lDQWdiV0Z3UTJGdWRtRnpJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ2dKMk5oYm5aaGN5Y2dLVHRjY2x4dVhISmNiaUFnSUNCdFlYQkRZVzUyWVhNdWQybGtkR2dnUFNCdFlYQkRZVzUyWVhNdWFHVnBaMmgwSUQwZ05EQXdPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQjBaWGgwZFhKbElEMGdibVYzSUZSSVVrVkZMbFJsZUhSMWNtVW9JRzFoY0VOaGJuWmhjeUFwTzF4eVhHNGdJQ0FnZEdWNGRIVnlaUzV0YVc1R2FXeDBaWElnUFNCVVNGSkZSUzVNYVc1bFlYSkdhV3gwWlhJN1hISmNibHh5WEc0Z0lDQWdhVzFuTG05dWJHOWhaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JvWVhOVGJHVmxkbVVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYzJ4bFpYWmxJRDBnYm1WM0lFbHRZV2RsS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc1pXVjJaUzV6Y21NZ1BTQnZjSFJwYjI1ekxuTnNaV1YyWlUxaGMydFVaWGgwZFhKbE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMnhsWlhabExtOXViRzloWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWTNSNElEMGdiV0Z3UTJGdWRtRnpMbWRsZEVOdmJuUmxlSFFvSUNjeVpDY2dLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNTBjbUZ1YzJ4aGRHVW9JR2x0WjFkcFpIUm9JQzhnTWl3Z2FXMW5TR1ZwWjJoMElDOGdNaUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbkp2ZEdGMFpTZ2dUV0YwYUM1UVNTQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzUwY21GdWMyeGhkR1VvSUMxcGJXZFhhV1IwYUNBdklESXNJQzFwYldkSVpXbG5hSFFnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndVpISmhkMGx0WVdkbEtDQnBiV2NzSURFek1Dd2dNVE13TENBeE16VXNJREV6TlNBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2MyeGxaWFpsTENBd0xDQXdMQ0EwTURBc0lEUXdNQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkSFZ5WlM1dVpXVmtjMVZ3WkdGMFpTQTlJSFJ5ZFdVN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMGVDQTlJRzFoY0VOaGJuWmhjeTVuWlhSRGIyNTBaWGgwS0NBbk1tUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04wZUM1MGNtRnVjMnhoZEdVb0lHbHRaMWRwWkhSb0lDOGdNaXdnYVcxblNHVnBaMmgwSUM4Z01pQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1Y205MFlYUmxLQ0JOWVhSb0xsQkpJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0F0YVcxblYybGtkR2dnTHlBeUxDQXRhVzFuU0dWcFoyaDBJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VaSEpoZDBsdFlXZGxLQ0JwYldjc0lEQXNJREFzSURRd01Dd2dOREF3SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGVIUjFjbVV1Ym1WbFpITlZjR1JoZEdVZ1BTQjBjblZsTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ6YkdWbGRtVk5ZWFJsY21saGJDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb1RHRnRZbVZ5ZEUxaGRHVnlhV0ZzS0NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUJ2Y0hScGIyNXpMbk5zWldWMlpVTnZiRzl5WEhKY2JseHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnRZWFJsY21saGJITWdQU0JiWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdkR1Y0ZEhWeVpWeHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVNGSkZSUzVOWlhOb1RHRnRZbVZ5ZEUxaGRHVnlhV0ZzS0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUF3ZUdabVptWm1aaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Z3T2lCMFpYaDBkWEpsWEhKY2JpQWdJQ0FnSUNBZ2ZTQXBMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNYSEpjYmlBZ0lDQmRPMXh5WEc0Z0lDQWdjbVYwZFhKdUlHMWhkR1Z5YVdGc2N6dGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1ZWUkpURk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNTJZWElnZDJobFpXeEVhWE4wWVc1alpTQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnWlNBOUlHVjJaVzUwTzF4eVhHNGdJQ0FnZG1GeUlIY2dQU0JsTG5kb1pXVnNSR1ZzZEdFc1hISmNiaUFnSUNBZ0lDQWdaQ0E5SUdVdVpHVjBZV2xzTzF4eVhHNGdJQ0FnYVdZZ0tDQmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lIY2dLU0J5WlhSMWNtNGdkeUF2SUdRZ0x5QTBNQ0FxSUdRZ1BpQXdJRDhnTVNBNklDMHhPeUF2THlCUGNHVnlZVnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdjbVYwZFhKdUlDMWtJQzhnTXpzZ0x5OGdSbWx5WldadmVEdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdjbVYwZFhKdUlIY2dMeUF4TWpBN0lDOHZJRWxGTDFOaFptRnlhUzlEYUhKdmJXVmNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQjNhR1ZsYkVScGNtVmpkR2x2YmlBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUNGbElDa2daU0E5SUdWMlpXNTBPMXh5WEc0Z0lDQWdjbVYwZFhKdUlDZ2daUzVrWlhSaGFXd2dQQ0F3SUNrZ1B5QXhJRG9nS0NCbExuZG9aV1ZzUkdWc2RHRWdQaUF3SUNrZ1B5QXhJRG9nTFRFN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR052YjNKa2MwVnhkV0ZzYzBGd2NISnZlQ0E5SUdaMWJtTjBhVzl1SUNnZ1kyOXZjbVF4TENCamIyOXlaRElzSUhKaGJtZGxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlBb0lFMWhkR2d1WVdKektDQmpiMjl5WkRFdWVDQXRJR052YjNKa01pNTRJQ2tnUEQwZ2NtRnVaMlVnS1NBbUppQW9JRTFoZEdndVlXSnpLQ0JqYjI5eVpERXVlU0F0SUdOdmIzSmtNaTU1SUNrZ1BEMGdjbUZ1WjJVZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWm1Ga1pVOTFkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pXeGxiV1Z1ZEN3Z1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQThQU0F3TGpFZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlEQTdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnBjMFoxYm1OMGFXOXVLQ0JrYjI1bElDa2dLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1J2Ym1Vb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQXRQU0F3TGpFN1hISmNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbVlXUmxUM1YwS0NCbGJHVnRaVzUwTENCa2IyNWxJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dNVEFnS1R0Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCbVlXUmxTVzRnUFNCbWRXNWpkR2x2YmlBb0lHVnNaVzFsYm5Rc0lHWmhaR1ZVYnl3Z1pHOXVaU3dnYjNBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUh4OElHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0FtSmlCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQQ0JtWVdSbFZHOGdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ1pXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDA5SUNkdWIyNWxKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWM3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzl3SUQwZ01EdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dJV1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzl3SUQwZ1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJSHg4SURFN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnYjNBZ0t6MGdNQzR3TXp0Y2NseHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnUFNCdmNEdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptRmtaVWx1S0NCbGJHVnRaVzUwTENCbVlXUmxWRzhzSUdSdmJtVXNJRzl3SUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwc0lERXdJQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdabUZrWlZSdk8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x6Um5WdVkzUnBiMjRvSUdSdmJtVWdLU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZibVVvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdOaGJHTjFiR0YwWlVOaGJuWmhjMU5wZW1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1kyRnVkbUZ6VjJsa2RHZ2dQU0J2Y0hScGIyNXpMbU5oYm5aaGMxZHBaSFJvSUQ4Z2IzQjBhVzl1Y3k1allXNTJZWE5YYVdSMGFDQTZJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Oc2FXVnVkRmRwWkhSb08xeHlYRzRnSUNBZ1kyRnVkbUZ6U0dWcFoyaDBJRDBnYjNCMGFXOXVjeTVqWVc1MllYTklaV2xuYUhRZ1B5QnZjSFJwYjI1ekxtTmhiblpoYzBobGFXZG9kQ0E2SUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtTnNhV1Z1ZEVobGFXZG9kRHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2MyVjBRMkZ1ZG1GelJHbHRaVzV6YVc5dWN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQXZMM0p2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbWhsYVdkb2RDQWdJQ0FnUFNCallXNTJZWE5JWldsbmFIUWdLeUFuY0hnbk8xeHlYRzRnSUNBZ1kyRnVkbUZ6UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNW9aV2xuYUhRZ1BTQmpZVzUyWVhOSVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc0Z0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVhR1ZwWjJoMElEMGdZMkZ1ZG1GelNHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dUlDQWdJR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1obGFXZG9kQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNibHh5WEc0Z0lDQWdMeTl5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzUzYVdSMGFDQWdJQ0FnUFNCallXNTJZWE5YYVdSMGFDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCallXNTJZWE5EYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExuZHBaSFJvSUQwZ1kyRnVkbUZ6VjJsa2RHZ2dLeUFuY0hnbk8xeHlYRzRnSUNBZ2FXNW1iME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWQybGtkR2dnUFNCallXNTJZWE5YYVdSMGFDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNTNhV1IwYUNBOUlHTmhiblpoYzFkcFpIUm9JQ3NnSjNCNEp6dGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnphSFZtWm14bEtDQjJJQ2tnZXlBdkx5QktiMjVoY3lCU1lXOXVhU0JUYjJGeVpYTWdVMmxzZG1FZ0xTQm9kSFJ3T2k4dmFuTm1jbTl0YUdWc2JDNWpiMjB2WVhKeVlYa3ZjMmgxWm1ac1pTQmJjbVYyTGlBak1WMWNjbHh1WEhKY2JpQWdJQ0JtYjNJZ0tDQjJZWElnYWl3Z2VDd2dhU0E5SUhZdWJHVnVaM1JvT3lCcE95QnFJRDBnY0dGeWMyVkpiblFvSUUxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUJwSUNrc0lIZ2dQU0IyV3lBdExXa2dYU3dnZGxzZ2FTQmRJRDBnZGxzZ2FpQmRMQ0IyV3lCcUlGMGdQU0I0SUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZGp0Y2NseHVYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdselJuVnVZM1JwYjI0b0lHOWlhaUFwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2RIbHdaVzltSUc5aWFpQTlQU0FuWm5WdVkzUnBiMjRuSUh4OElHWmhiSE5sTzF4eVhHNWNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnUlZoUVQxSlVVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5SUNCUWRXSnNhV01nVFdWMGFHOWtjeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1bGVIQnZjblJ6TG1sdWFYUWdQU0JtZFc1amRHbHZiaUFvSUhCaGNtRnRjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQnZjSFJwYjI1eklEMGdaWGgwWlc1a0tDQmtaV1poZFd4MGN5d2djR0Z5WVcxeklDazdYSEpjYmx4eVhHNGdJQ0FnTHk4Z1ptVmhkSFZ5WlNCMFpYTjBYSEpjYmlBZ0lDQnBaaUFvSUNGTmIyUmxjbTVwZW5JdWQyVmlaMndnS1NCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ1kyOXVjMjlzWlM1c2IyY29JQ2RKYm1sMGFXRnNhWHBwYm1jZ1kzSmhkR1ZrYVdkblpYSXVhbk11TGk0bklDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjNhVzVrYjNjdVpHVjJhV05sVUdsNFpXeFNZWFJwYnlBaFBUMGdkVzVrWldacGJtVmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrY0hJZ1BTQjNhVzVrYjNjdVpHVjJhV05sVUdsNFpXeFNZWFJwYnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2NISWdQU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NCdmNIUnBiMjV6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSkpaQ0FwTzF4eVhHNGdJQ0FnYVdZZ0tDQWhjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJSEp2YjNRZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5RdUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnSUNCallXNTJZWE5EYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRzl3ZEdsdmJuTXVaV3hsYldWdWRITXVZMkZ1ZG1GelEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJR05oYm5aaGN5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUc5d2RHbHZibk11Wld4bGJXVnVkSE11Ykc5aFpHbHVaME52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0ZzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2JHOWhaR2x1WnlCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0lHOXdkR2x2Ym5NdVpXeGxiV1Z1ZEhNdWFXNW1iME52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0ZwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnYVc1bWJ5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lIUnBkR3hsU1c1bWIwVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnZ2IzQjBhVzl1Y3k1bGJHVnRaVzUwY3k1MGFYUnNaVU52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0YwYVhSc1pVbHVabTlGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnlaV052Y21RZ2RHbDBiR1VnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblF1SnlBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JoY25ScGMzUkpibVp2Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0J2Y0hScGIyNXpMbVZzWlcxbGJuUnpMbUZ5ZEdsemRFTnZiblJoYVc1bGNrbGtJQ2s3WEhKY2JpQWdJQ0JwWmlBb0lDRmhjblJwYzNSSmJtWnZSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2NtVmpiM0prSUdGeWRHbHpkQ0JqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR052ZG1WeVNXNW1iMFZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2diM0IwYVc5dWN5NWxiR1Z0Wlc1MGN5NWpiM1psY2tOdmJuUmhhVzVsY2tsa0lDazdYSEpjYmlBZ0lDQnBaaUFvSUNGamIzWmxja2x1Wm05RmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0JqYjNabGNpQnBiV0ZuWlNCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpZV3hqZFd4aGRHVkRZVzUyWVhOVGFYcGxLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXNXBkRk5qWlc1bEtDazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBaQ0E4SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcFpDQStJR3h2WVdSbFpGSmxZMjl5WkhNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNCcFpEdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxuTjBZWEowVW1WdVpHVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR1J2VW1WdVpHVnlJRDBnZEhKMVpUdGNjbHh1SUNBZ0lHRnVhVzFoZEdVb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxuTjBiM0JTWlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdaRzlTWlc1a1pYSWdQU0JtWVd4elpUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxtVnVZV0pzWlZCdmMzUndjbTlqWlhOemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJRzl3ZEdsdmJuTXVjRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQjBjblZsTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WkdsellXSnNaVkJ2YzNSd2NtOWpaWE56YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHOXdkR2x2Ym5NdWNHOXpkSEJ5YjJObGMzTnBibWNnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lGQjFZbXhwWXlCblpYUjBaWEp6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBRMkZ1ZG1GeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1ME8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBVbVZqYjNKa2MwUmhkR0ZNYVhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXTnZjbVJ6UkdGMFlVeHBjM1E3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSTWIyRmtaV1JTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnNiMkZrWldSU1pXTnZjbVJ6TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WjJWMFUyVnNaV04wWldSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdUV1YwYUc5a2N5QmhZMk5sYzNOdmNuTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Wlhod2IzSjBjeTVzYjJGa1VtVmpiM0prY3lBOUlHeHZZV1JTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG5WdWJHOWhaRkpsWTI5eVpITWdQU0IxYm14dllXUlNaV052Y21Sek8xeHlYRzVsZUhCdmNuUnpMbkpsYzJWMFUyaHZkMjVTWldOdmNtUWdQU0J5WlhObGRGTm9iM2R1VW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5Ob2RXWm1iR1ZTWldOdmNtUnpJRDBnYzJoMVptWnNaVkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11Wm14cGNGTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1pteHBjRk5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbk5sYkdWamRGQnlaWFpTWldOdmNtUWdQU0J6Wld4bFkzUlFjbVYyVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRTVsZUhSU1pXTnZjbVFnUFNCelpXeGxZM1JPWlhoMFVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTm9iM2RNYjJGa2FXNW5JRDBnYzJodmQweHZZV1JwYm1jN1hISmNibVY0Y0c5eWRITXVhR2xrWlV4dllXUnBibWNnUFNCb2FXUmxURzloWkdsdVp6dGNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1VGVkNURWxESUVGUVNTQWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdWNGNHOXlkSE03SWwxOSIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG52YXIgU3RhdHM9ZnVuY3Rpb24oKXt2YXIgbD1EYXRlLm5vdygpLG09bCxnPTAsbj1JbmZpbml0eSxvPTAsaD0wLHA9SW5maW5pdHkscT0wLHI9MCxzPTAsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuaWQ9XCJzdGF0c1wiO2YuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt0KCsrcyUyKX0sITEpO2Yuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7b3BhY2l0eTowLjk7Y3Vyc29yOnBvaW50ZXJcIjt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuaWQ9XCJmcHNcIjthLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjAgMCAzcHggM3B4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDJcIjtmLmFwcGVuZENoaWxkKGEpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5pZD1cImZwc1RleHRcIjtpLnN0eWxlLmNzc1RleHQ9XCJjb2xvcjojMGZmO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxNXB4XCI7XG5pLmlubmVySFRNTD1cIkZQU1wiO2EuYXBwZW5kQ2hpbGQoaSk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlkPVwiZnBzR3JhcGhcIjtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmZlwiO2ZvcihhLmFwcGVuZENoaWxkKGMpOzc0PmMuY2hpbGRyZW4ubGVuZ3RoOyl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7ai5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MXB4O2hlaWdodDozMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMTEzXCI7Yy5hcHBlbmRDaGlsZChqKX12YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuaWQ9XCJtc1wiO2Quc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MCAwIDNweCAzcHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzAyMDtkaXNwbGF5Om5vbmVcIjtmLmFwcGVuZENoaWxkKGQpO3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5rLmlkPVwibXNUZXh0XCI7ay5zdHlsZS5jc3NUZXh0PVwiY29sb3I6IzBmMDtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTVweFwiO2suaW5uZXJIVE1MPVwiTVNcIjtkLmFwcGVuZENoaWxkKGspO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1cIm1zR3JhcGhcIjtlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmMFwiO2ZvcihkLmFwcGVuZENoaWxkKGUpOzc0PmUuY2hpbGRyZW4ubGVuZ3RoOylqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGouc3R5bGUuY3NzVGV4dD1cIndpZHRoOjFweDtoZWlnaHQ6MzBweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzEzMVwiLGUuYXBwZW5kQ2hpbGQoaik7dmFyIHQ9ZnVuY3Rpb24oYil7cz1iO3N3aXRjaChzKXtjYXNlIDA6YS5zdHlsZS5kaXNwbGF5PVxuXCJibG9ja1wiO2Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIjticmVhaztjYXNlIDE6YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJ9fTtyZXR1cm57UkVWSVNJT046MTIsZG9tRWxlbWVudDpmLHNldE1vZGU6dCxiZWdpbjpmdW5jdGlvbigpe2w9RGF0ZS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGI9RGF0ZS5ub3coKTtnPWItbDtuPU1hdGgubWluKG4sZyk7bz1NYXRoLm1heChvLGcpO2sudGV4dENvbnRlbnQ9ZytcIiBNUyAoXCIrbitcIi1cIitvK1wiKVwiO3ZhciBhPU1hdGgubWluKDMwLDMwLTMwKihnLzIwMCkpO2UuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKS5zdHlsZS5oZWlnaHQ9YStcInB4XCI7cisrO2I+bSsxRTMmJihoPU1hdGgucm91bmQoMUUzKnIvKGItbSkpLHA9TWF0aC5taW4ocCxoKSxxPU1hdGgubWF4KHEsaCksaS50ZXh0Q29udGVudD1oK1wiIEZQUyAoXCIrcCtcIi1cIitxK1wiKVwiLGE9TWF0aC5taW4oMzAsMzAtMzAqKGgvMTAwKSksYy5hcHBlbmRDaGlsZChjLmZpcnN0Q2hpbGQpLnN0eWxlLmhlaWdodD1cbmErXCJweFwiLG09YixyPTApO3JldHVybiBifSx1cGRhdGU6ZnVuY3Rpb24oKXtsPXRoaXMuZW5kKCl9fX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1TdGF0cyk7XG4iLCIvKipcbiAqIFR3ZWVuLmpzIC0gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qcy9ncmFwaHMvY29udHJpYnV0b3JzIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNvbnRyaWJ1dG9ycy5cbiAqIFRoYW5rIHlvdSBhbGwsIHlvdSdyZSBhd2Vzb21lIVxuICovXG5cbi8vIERhdGUubm93IHNoaW0gZm9yIChhaGVtKSBJbnRlcm5ldCBFeHBsbyhkfHIpZXJcbmlmICggRGF0ZS5ub3cgPT09IHVuZGVmaW5lZCApIHtcblxuXHREYXRlLm5vdyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcblxuXHR9O1xuXG59XG5cbnZhciBUV0VFTiA9IFRXRUVOIHx8ICggZnVuY3Rpb24gKCkge1xuXG5cdHZhciBfdHdlZW5zID0gW107XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAnMTQnLFxuXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBfdHdlZW5zO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRfdHdlZW5zID0gW107XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHRfdHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHR2YXIgaSA9IF90d2VlbnMuaW5kZXhPZiggdHdlZW4gKTtcblxuXHRcdFx0aWYgKCBpICE9PSAtMSApIHtcblxuXHRcdFx0XHRfdHdlZW5zLnNwbGljZSggaSwgMSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHRcdGlmICggX3R3ZWVucy5sZW5ndGggPT09IDAgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblxuXHRcdFx0d2hpbGUgKCBpIDwgX3R3ZWVucy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYgKCBfdHdlZW5zWyBpIF0udXBkYXRlKCB0aW1lICkgKSB7XG5cblx0XHRcdFx0XHRpKys7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdF90d2VlbnMuc3BsaWNlKCBpLCAxICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXHR9O1xuXG59ICkoKTtcblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfeW95byA9IGZhbHNlO1xuXHR2YXIgX2lzUGxheWluZyA9IGZhbHNlO1xuXHR2YXIgX3JldmVyc2VkID0gZmFsc2U7XG5cdHZhciBfZGVsYXlUaW1lID0gMDtcblx0dmFyIF9zdGFydFRpbWUgPSBudWxsO1xuXHR2YXIgX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR2YXIgX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR2YXIgX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHZhciBfb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cblx0Ly8gU2V0IGFsbCBzdGFydGluZyB2YWx1ZXMgcHJlc2VudCBvbiB0aGUgdGFyZ2V0IG9iamVjdFxuXHRmb3IgKCB2YXIgZmllbGQgaW4gb2JqZWN0ICkge1xuXG5cdFx0X3ZhbHVlc1N0YXJ0WyBmaWVsZCBdID0gcGFyc2VGbG9hdChvYmplY3RbZmllbGRdLCAxMCk7XG5cblx0fVxuXG5cdHRoaXMudG8gPSBmdW5jdGlvbiAoIHByb3BlcnRpZXMsIGR1cmF0aW9uICkge1xuXG5cdFx0aWYgKCBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRfZHVyYXRpb24gPSBkdXJhdGlvbjtcblxuXHRcdH1cblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCB0aW1lICkge1xuXG5cdFx0VFdFRU4uYWRkKCB0aGlzICk7XG5cblx0XHRfaXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0X3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKCB2YXIgcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0Ly8gY2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0ubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHRfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdID0gWyBfb2JqZWN0WyBwcm9wZXJ0eSBdIF0uY29uY2F0KCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX29iamVjdFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYoICggX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIGluc3RhbmNlb2YgQXJyYXkgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICggIV9pc1BsYXlpbmcgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRUV0VFTi5yZW1vdmUoIHRoaXMgKTtcblx0XHRfaXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiAoIF9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0X29uU3RvcENhbGxiYWNrLmNhbGwoIF9vYmplY3QgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcENoYWluZWRUd2VlbnMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdF9jaGFpbmVkVHdlZW5zWyBpIF0uc3RvcCgpO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5kZWxheSA9IGZ1bmN0aW9uICggYW1vdW50ICkge1xuXG5cdFx0X2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMucmVwZWF0ID0gZnVuY3Rpb24gKCB0aW1lcyApIHtcblxuXHRcdF9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uKCB5b3lvICkge1xuXG5cdFx0X3lveW8gPSB5b3lvO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblxuXHR0aGlzLmVhc2luZyA9IGZ1bmN0aW9uICggZWFzaW5nICkge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKCBpbnRlcnBvbGF0aW9uICkge1xuXG5cdFx0X2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmNoYWluID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0X2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdG9wID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cblx0XHRpZiAoIHRpbWUgPCBfc3RhcnRUaW1lICkge1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdGlmICggX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0aWYgKCBfb25TdGFydENhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRcdF9vblN0YXJ0Q2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cblx0XHR9XG5cblx0XHR2YXIgZWxhcHNlZCA9ICggdGltZSAtIF9zdGFydFRpbWUgKSAvIF9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhciB2YWx1ZSA9IF9lYXNpbmdGdW5jdGlvbiggZWxhcHNlZCApO1xuXG5cdFx0Zm9yICggcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0dmFyIHN0YXJ0ID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYgKCBlbmQgaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gX2ludGVycG9sYXRpb25GdW5jdGlvbiggZW5kLCB2YWx1ZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kLCAxMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBwcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gc3RhcnQgKyAoIGVuZCAtIHN0YXJ0ICkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIF9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRfb25VcGRhdGVDYWxsYmFjay5jYWxsKCBfb2JqZWN0LCB2YWx1ZSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBlbGFwc2VkID09IDEgKSB7XG5cblx0XHRcdGlmICggX3JlcGVhdCA+IDAgKSB7XG5cblx0XHRcdFx0aWYoIGlzRmluaXRlKCBfcmVwZWF0ICkgKSB7XG5cdFx0XHRcdFx0X3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yKCBwcm9wZXJ0eSBpbiBfdmFsdWVzU3RhcnRSZXBlYXQgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHR5cGVvZiggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdICsgcGFyc2VGbG9hdChfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdLCAxMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKF95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X3N0YXJ0VGltZSA9IHRpbWUgKyBfZGVsYXlUaW1lO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdFx0XHRfY2hhaW5lZFR3ZWVuc1sgaSBdLnN0YXJ0KCB0aW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fTtcblxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoIC0tayAqICggayAtIDIgKSAtIDEgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKCAtLWsgKiBrICogayAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAtIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICogayAtIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKiBrICogayArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoIDEgLSBNYXRoLmNvcyggTWF0aC5QSSAqIGsgKSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KCAxMDI0LCBrIC0gMSApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coIDIsIC0gMTAgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogTWF0aC5wb3coIDEwMjQsIGsgLSAxICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAtIE1hdGgucG93KCAyLCAtIDEwICogKCBrIC0gMSApICkgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoIDEgLSBrICogayApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KCAxIC0gKCAtLWsgKiBrICkgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gLSAwLjUgKiAoIE1hdGguc3FydCggMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggTWF0aC5zcXJ0KCAxIC0gKCBrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gLSAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0gMTAgKiBrKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKyAxICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gLSAwLjUgKiAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KCAyLCAtMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICogMC41ICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblx0XHRcdHJldHVybiBrICogayAqICggKCBzICsgMSApICogayAtIHMgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIGsgKiBrICogKCAoIHMgKyAxICkgKiBrIC0gcyApICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCggMSAtIGsgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgKCAxIC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgMC41ICkgcmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oIGsgKiAyICkgKiAwLjU7XG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoIGsgKiAyIC0gMSApICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIGZuKCB2WyAwIF0sIHZbIDEgXSwgZiApO1xuXHRcdGlmICggayA+IDEgKSByZXR1cm4gZm4oIHZbIG0gXSwgdlsgbSAtIDEgXSwgbSAtIGYgKTtcblxuXHRcdHJldHVybiBmbiggdlsgaSBdLCB2WyBpICsgMSA+IG0gPyBtIDogaSArIDEgXSwgZiAtIGkgKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIGIgPSAwLCBuID0gdi5sZW5ndGggLSAxLCBwdyA9IE1hdGgucG93LCBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluLCBpO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPD0gbjsgaSsrICkge1xuXHRcdFx0YiArPSBwdyggMSAtIGssIG4gLSBpICkgKiBwdyggaywgaSApICogdlsgaSBdICogYm4oIG4sIGkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKCB2WyAwIF0gPT09IHZbIG0gXSApIHtcblxuXHRcdFx0aWYgKCBrIDwgMCApIGkgPSBNYXRoLmZsb29yKCBmID0gbSAqICggMSArIGsgKSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbICggaSAtIDEgKyBtICkgJSBtIF0sIHZbIGkgXSwgdlsgKCBpICsgMSApICUgbSBdLCB2WyAoIGkgKyAyICkgJSBtIF0sIGYgLSBpICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIHZbIDAgXSAtICggZm4oIHZbIDAgXSwgdlsgMCBdLCB2WyAxIF0sIHZbIDEgXSwgLWYgKSAtIHZbIDAgXSApO1xuXHRcdFx0aWYgKCBrID4gMSApIHJldHVybiB2WyBtIF0gLSAoIGZuKCB2WyBtIF0sIHZbIG0gXSwgdlsgbSAtIDEgXSwgdlsgbSAtIDEgXSwgZiAtIG0gKSAtIHZbIG0gXSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbIGkgPyBpIC0gMSA6IDAgXSwgdlsgaSBdLCB2WyBtIDwgaSArIDEgPyBtIDogaSArIDEgXSwgdlsgbSA8IGkgKyAyID8gbSA6IGkgKyAyIF0sIGYgLSBpICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAoIHAwLCBwMSwgdCApIHtcblxuXHRcdFx0cmV0dXJuICggcDEgLSBwMCApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKCBuICwgaSApIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cdFx0XHRyZXR1cm4gZmMoIG4gKSAvIGZjKCBpICkgLyBmYyggbiAtIGkgKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6ICggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsgMSBdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCBuICkge1xuXG5cdFx0XHRcdHZhciBzID0gMSwgaTtcblx0XHRcdFx0aWYgKCBhWyBuIF0gKSByZXR1cm4gYVsgbiBdO1xuXHRcdFx0XHRmb3IgKCBpID0gbjsgaSA+IDE7IGktLSApIHMgKj0gaTtcblx0XHRcdFx0cmV0dXJuIGFbIG4gXSA9IHM7XG5cblx0XHRcdH07XG5cblx0XHR9ICkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uICggcDAsIHAxLCBwMiwgcDMsIHQgKSB7XG5cblx0XHRcdHZhciB2MCA9ICggcDIgLSBwMCApICogMC41LCB2MSA9ICggcDMgLSBwMSApICogMC41LCB0MiA9IHQgKiB0LCB0MyA9IHQgKiB0Mjtcblx0XHRcdHJldHVybiAoIDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEgKSAqIHQzICsgKCAtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxICkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHM9VFdFRU47IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqXHJcbiAqIEZ1bGwtc2NyZWVuIHRleHR1cmVkIHF1YWQgc2hhZGVyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuQ29weVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcIm9wYWNpdHlcIjogIHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcIixcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICk7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSBvcGFjaXR5ICogdGV4ZWw7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG59OyIsIi8qKlxyXG4gKiBAYXV0aG9yIGFuZHJld2JlcmcgLyBodHRwOi8vYW5kcmV3YmVyZy5jb20vXHJcbiAqXHJcbiAqIERlcHRoIG9mIEZpZWxkXHJcbiAqIC0gcG9ydGVkIGZyb21cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLkRvRlNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ0RGVwdGhcIjogICAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ6bmVhclwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiemZhclwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxMDAwLjAgfSxcclxuXHRcdFx0XCJzaXplXCI6ICAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggNTEyLCA1MTIgKSB9LFxyXG5cdFx0XHRcInRleHRlbFwiOlx0XHR7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxLzUxMiwgMS81MTIpfSxcclxuXHRcdFx0XCJmb2NhbERlcHRoXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjAwLjAgfSxcclxuXHRcdFx0XCJmb2NhbExlbmd0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDI4LjAgfSxcclxuXHRcdFx0XCJmc3RvcFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi44IH0sXHJcblx0XHRcdFwic2hvd0ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcIm1hbnVhbGRvZlwiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJuZG9mc3RhcnRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJuZG9mZGlzdFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi4wIH0sXHJcblx0XHRcdFwiZmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiZmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDMuMCB9LFxyXG5cdFx0XHRcIkNvQ1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAzIH0sXHJcblx0XHRcdFwidmlnbmV0dGluZ1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJ2aWdub3V0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjMgfSxcclxuXHRcdFx0XCJ2aWduaW5cIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMCB9LFxyXG5cdFx0XHRcInZpZ25mYWRlXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyMi4wIH0sXHJcblx0XHRcdFwiYXV0b2ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcImZvY3VzXCI6ICAgICAgICB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApIH0sXHJcblx0XHRcdFwibWF4Ymx1clwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwidGhyZXNob2xkXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC44IH0sXHJcblx0XHRcdFwiZ2FpblwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjcgfSxcclxuXHRcdFx0XCJiaWFzXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNSB9LFxyXG5cdFx0XHRcImZyaW5nZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC43IH0sXHJcblx0XHRcdFwibm9pc2VcIjpcdFx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJuYW1vdW50XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAwMDEgfSxcclxuXHRcdFx0XCJkZXB0aGJsdXJcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwiZGJzaXplXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjI1fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxyXG5cdFx0XHRcIiNkZWZpbmUgUEkgIDMuMTQxNTkyNjVcIixcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdC8vdW5pZm9ybSB2YXJpYWJsZXMgZnJvbSBleHRlcm5hbCBzY3JpcHRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBzaXplO1wiLCAvLyB0ZXh0dXJlIHdpZHRoIGFuZCBoZWlnaHRcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgdGV4ZWw7XCIsIC8vIHRleHRlbCBzaXplXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxEZXB0aDtcIiwgIC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmc3RvcDtcIiwgLy9mLXN0b3AgdmFsdWVcclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgc2hvd0ZvY3VzO1wiLCAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuXHRcdFx0Ly9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpuZWFyO1wiLCAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgemZhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3VzZXIgdmFyaWFibGVzIG5vdyBwYXNzZWQgYXMgdW5pZm9ybXNcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG1hbnVhbGRvZjtcIiwgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuZG9mc3RhcnQ7XCIsIC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZmRpc3Q7XCIsIC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mc3RhcnQ7XCIsIC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mZGlzdDtcIiwgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IENvQztcIiwvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgdmlnbmV0dGluZztcIiwgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWdub3V0O1wiLCAvL3ZpZ25ldHRpbmcgb3V0ZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduaW47XCIsIC8vdmlnbmV0dGluZyBpbm5lciBib3JkZXJcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25mYWRlO1wiLCAvL2Ytc3RvcHMgdGlsbCB2aWduZXRlIGZhZGVzXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBhdXRvZm9jdXM7XCIsIC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIGZvY3VzO1wiLCAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodClcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG1heGJsdXI7XCIsIC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdGhyZXNob2xkO1wiLCAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBnYWluO1wiLCAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGJpYXM7XCIsIC8vYm9rZWggZWRnZSBiaWFzXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmcmluZ2U7XCIsIC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG5vaXNlO1wiLCAvL3VzZSBub2lzZSBpbnN0ZWFkIG9mIHBhdHRlcm4gZm9yIHNhbXBsZSBkaXRoZXJpbmdcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5hbW91bnQ7XCIsIC8vZGl0aGVyIGFtb3VudFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgZGVwdGhibHVyO1wiLCAvL2JsdXIgdGhlIGRlcHRoIGJ1ZmZlcj9cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGRic2l6ZTtcIiwgLy9kZXB0aGJsdXJzaXplXHJcblxyXG5cdFx0XHQvLyBzYW1wbGVzIGFuZCByaW5ncyBuZWVkIHRvIGJlIGNvbnN0YW50cy4gbm8gZHluYW1pYyBsb29wIGNvdW50ZXJzIGluIE9wZW5HTCBFU1xyXG5cdFx0XHQvLyBDYW4gc2hhZGVyIGJlIGJyb2tlbiBpbnRvIDIgcGFzcz8gLi4uIFxyXG5cdFx0XHRcImludCBzYW1wbGVzID0gMztcIiwgLy9zYW1wbGVzIG9uIHRoZSBmaXJzdCByaW5nXHJcblx0XHRcdFwiY29uc3QgaW50IHJpbmdzID0gMztcIiwgLy9yaW5nIGNvdW50XHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHRuZXh0IHBhcnQgaXMgZXhwZXJpbWVudGFsXHJcblx0XHRcdG5vdCBsb29raW5nIGdvb2Qgd2l0aCBzbWFsbCBzYW1wbGUgYW5kIHJpbmcgY291bnRcclxuXHRcdFx0bG9va3Mgb2theSBzdGFydGluZyBmcm9tIHNhbXBsZXMgPSA0LCByaW5ncyA9IDRcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdFwiYm9vbCBwZW50YWdvbiA9IGZhbHNlO1wiLCAvL3VzZSBwZW50YWdvbiBhcyBib2tlaCBzaGFwZT9cclxuXHRcdFx0XCJmbG9hdCBmZWF0aGVyID0gMC40O1wiLCAvL3BlbnRhZ29uIHNoYXBlIGZlYXRoZXJcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHQvLyBSR0JBIGRlcHRoXHJcblxyXG5cdFx0XHRcImZsb2F0IHVucGFja0RlcHRoKCBjb25zdCBpbiB2ZWM0IHJnYmFfZGVwdGggKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29uc3QgdmVjNCBiaXRfc2hpZnQgPSB2ZWM0KCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKiAyNTYuMCApLCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gMjU2LjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBkb3QoIHJnYmFfZGVwdGgsIGJpdF9zaGlmdCApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGRlcHRoO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJmbG9hdCBwZW50YSh2ZWMyIGNvb3JkcylcIiwgLy9wZW50YWdvbmFsIHNoYXBlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgc2NhbGUgPSBmbG9hdChyaW5ncykgLSAxLjM7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzAgPSB2ZWM0KCAxLjAsICAgICAgICAgMC4wLCAgICAgICAgIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzEgPSB2ZWM0KCAwLjMwOTAxNjk5NCwgMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzIgPSB2ZWM0KC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzMgPSB2ZWM0KC0wLjgwOTAxNjk5NCwtMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzQgPSB2ZWM0KCAwLjMwOTAxNjk5NCwtMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzUgPSB2ZWM0KCAwLjAgICAgICAgICwwLjAgICAgICAgICAsIDEuMCwgIDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCAgb25lID0gdmVjNCggMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCBQID0gdmVjNCgoY29vcmRzKSx2ZWMyKHNjYWxlLCBzY2FsZSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgZGlzdCA9IHZlYzQoMC4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGlub3JvdXQgPSAtNC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFMwICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBkb3QoIFAsIEhTMSApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC56ID0gZG90KCBQLCBIUzIgKTtcIixcclxuXHRcdFx0XHRcImRpc3QudyA9IGRvdCggUCwgSFMzICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkb3QoIGRpc3QsIG9uZSApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFM0ICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBIUzUudyAtIGFicyggUC56ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblx0XHRcdFx0XCJpbm9yb3V0ICs9IGRpc3QueDtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoIGlub3JvdXQsIDAuMCwgMS4wICk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBiZGVwdGgodmVjMiBjb29yZHMpIC8vYmx1cnJpbmcgZGVwdGhcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkID0gMC4wO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQga2VybmVsWzldO1wiLFxyXG5cdFx0XHRcdFwidmVjMiBvZmZzZXRbOV07XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiB3aCA9IHZlYzIodGV4ZWwueCwgdGV4ZWwueSkgKiBkYnNpemU7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzBdID0gdmVjMigtd2gueCwtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMV0gPSB2ZWMyKCAwLjAsIC13aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFsyXSA9IHZlYzIoIHdoLnggLXdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFszXSA9IHZlYzIoLXdoLngsICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzRdID0gdmVjMiggMC4wLCAgIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbNV0gPSB2ZWMyKCB3aC54LCAgMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbNl0gPSB2ZWMyKC13aC54LCB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs3XSA9IHZlYzIoIDAuMCwgIHdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzhdID0gdmVjMiggd2gueCwgd2gueSk7XCIsXHJcblxyXG5cdFx0XHRcdFwia2VybmVsWzBdID0gMS4wLzE2LjA7ICAga2VybmVsWzFdID0gMi4wLzE2LjA7ICAga2VybmVsWzJdID0gMS4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbM10gPSAyLjAvMTYuMDsgICBrZXJuZWxbNF0gPSA0LjAvMTYuMDsgICBrZXJuZWxbNV0gPSAyLjAvMTYuMDtcIixcclxuXHRcdFx0XHRcImtlcm5lbFs2XSA9IDEuMC8xNi4wOyAgIGtlcm5lbFs3XSA9IDIuMC8xNi4wOyAgIGtlcm5lbFs4XSA9IDEuMC8xNi4wO1wiLFxyXG5cclxuXHJcblx0XHRcdFx0XCJmb3IoIGludCBpPTA7IGk8OTsgaSsrIClcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgdG1wID0gdW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCwgY29vcmRzICsgb2Zmc2V0W2ldKSk7XCIsXHJcblx0XHRcdFx0XHRcImQgKz0gdG1wICoga2VybmVsW2ldO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBkO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblxyXG5cdFx0XHRcInZlYzMgY29sb3IodmVjMiBjb29yZHMsZmxvYXQgYmx1cilcIiwgLy9wcm9jZXNzaW5nIHRoZSBzYW1wbGVcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wuciA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuMCwxLjApKnRleGVsKmZyaW5nZSpibHVyKS5yO1wiLFxyXG5cdFx0XHRcdFwiY29sLmcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigtMC44NjYsLTAuNSkqdGV4ZWwqZnJpbmdlKmJsdXIpLmc7XCIsXHJcblx0XHRcdFx0XCJjb2wuYiA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5iO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzMgbHVtY29lZmYgPSB2ZWMzKDAuMjk5LDAuNTg3LDAuMTE0KTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bSA9IGRvdChjb2wucmdiLCBsdW1jb2VmZik7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCB0aHJlc2ggPSBtYXgoKGx1bS10aHJlc2hvbGQpKmdhaW4sIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sK21peCh2ZWMzKDAuMCksY29sLHRocmVzaCpibHVyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzIgcmFuZCh2ZWMyIGNvb3JkKSAvL2dlbmVyYXRpbmcgbm9pc2UvcGF0dGVybiB0ZXh0dXJlIGZvciBkaXRoZXJpbmdcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVggPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC4yNSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjc1KSkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IG5vaXNlWSA9ICgoZnJhY3QoMS4wLWNvb3JkLnMqKHNpemUueC8yLjApKSowLjc1KSsoZnJhY3QoY29vcmQudCooc2l6ZS55LzIuMCkpKjAuMjUpKSoyLjAtMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChub2lzZSlcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwibm9pc2VYID0gY2xhbXAoZnJhY3Qoc2luKGRvdChjb29yZCAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWSA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKjIuMCkpICogNDM3NTguNTQ1MyksMC4wLDEuMCkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcInJldHVybiB2ZWMyKG5vaXNlWCxub2lzZVkpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidmVjMyBkZWJ1Z0ZvY3VzKHZlYzMgY29sLCBmbG9hdCBibHVyLCBmbG9hdCBkZXB0aClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBlZGdlID0gMC4wMDIqZGVwdGg7IC8vZGlzdGFuY2UgYmFzZWQgZWRnZSBzbW9vdGhpbmdcIixcclxuXHRcdFx0XHRcImZsb2F0IG0gPSBjbGFtcChzbW9vdGhzdGVwKDAuMCxlZGdlLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZSA9IGNsYW1wKHNtb290aHN0ZXAoMS4wLWVkZ2UsMS4wLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygxLjAsMC41LDAuMCksKDEuMC1tKSowLjYpO1wiLFxyXG5cdFx0XHRcdFwiY29sID0gbWl4KGNvbCx2ZWMzKDAuMCwwLjUsMS4wKSwoKDEuMC1lKS0oMS4wLW0pKSowLjIpO1wiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBjb2w7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBsaW5lYXJpemUoZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIC16ZmFyICogem5lYXIgLyAoZGVwdGggKiAoemZhciAtIHpuZWFyKSAtIHpmYXIpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgdmlnbmV0dGUoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGRpc3QgPSBkaXN0YW5jZSh2VXYsIHZlYzIoMC41LDAuNSkpO1wiLFxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAodmlnbm91dCsoZnN0b3AvdmlnbmZhZGUpLCB2aWduaW4rKGZzdG9wL3ZpZ25mYWRlKSwgZGlzdCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoZGlzdCwwLjAsMS4wKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdC8vc2NlbmUgZGVwdGggY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLHZVdikpKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoZGVwdGhibHVyKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJkZXB0aCA9IGxpbmVhcml6ZShiZGVwdGgodlV2KSk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdC8vZm9jYWwgcGxhbmUgY2FsY3VsYXRpb25cIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBmRGVwdGggPSBmb2NhbERlcHRoO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChhdXRvZm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZEZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLGZvY3VzKSkpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2RvZiBibHVyIGZhY3RvciBjYWxjdWxhdGlvblxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGJsdXIgPSAwLjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKG1hbnVhbGRvZilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYSA9IGRlcHRoLWZEZXB0aDtcIiwgLy9mb2NhbCBwbGFuZVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBiID0gKGEtZmRvZnN0YXJ0KS9mZG9mZGlzdDtcIiwgLy9mYXIgRG9GXHJcblx0XHRcdFx0XHRcImZsb2F0IGMgPSAoLWEtbmRvZnN0YXJ0KS9uZG9mZGlzdDtcIiwgLy9uZWFyIERvZlxyXG5cdFx0XHRcdFx0XCJibHVyID0gKGE+MC4wKT9iOmM7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBmID0gZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IGQgPSBmRGVwdGgqMTAwMC4wO1wiLCAvL2ZvY2FsIHBsYW5lIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IG8gPSBkZXB0aCoxMDAwLjA7XCIsIC8vZGVwdGggaW4gbW1cclxuXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSAobypmKS8oby1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChkKmYpLyhkLWYpO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKGQtZikvKGQqZnN0b3AqQ29DKTtcIixcclxuXHJcblx0XHRcdFx0XHRcImJsdXIgPSBhYnMoYS1iKSpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImJsdXIgPSBjbGFtcChibHVyLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBwYXR0ZXJuIGZvciBkaXRlcmluZ1xyXG5cclxuXHRcdFx0XHRcInZlYzIgbm9pc2UgPSByYW5kKHZVdikqbmFtb3VudCpibHVyO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBnZXR0aW5nIGJsdXIgeCBhbmQgeSBzdGVwIGZhY3RvclxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHcgPSAoMS4wL3NpemUueCkqYmx1ciptYXhibHVyK25vaXNlLng7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBoID0gKDEuMC9zaXplLnkpKmJsdXIqbWF4Ymx1citub2lzZS55O1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBmaW5hbCBjb2xvclxyXG5cclxuXHRcdFx0XHRcInZlYzMgY29sID0gdmVjMygwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmKGJsdXIgPCAwLjA1KVwiLCAvL3NvbWUgb3B0aW1pemF0aW9uIHRoaW5neVxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBzID0gMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZm9yIChpbnQgaSA9IDE7IGkgPD0gcmluZ3M7IGkgKz0gMSlcIixcclxuXHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcImZsb2F0IHJpbmdzYW1wbGVzID0gZmxvYXQoaSAqIHNhbXBsZXMpO1wiLFxyXG5cclxuXHRcdFx0XHRcdFx0XCJpZihpID09IDEpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgMyA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDIpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgNiA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDMpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgOSA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFwiY29sIC89IHM7XCIsIC8vZGl2aWRlIGJ5IHNhbXBsZSBjb3VudFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmIChzaG93Rm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IGRlYnVnRm9jdXMoY29sLCBibHVyLCBkZXB0aCk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKHZpZ25ldHRpbmcpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCAqPSB2aWduZXR0ZSgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvci5yZ2IgPSBjb2w7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IuYSA9IDEuMDtcIixcclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxuXHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIgPSBmdW5jdGlvbiAoIHJlbmRlcmVyLCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuXHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDE7XHJcblx0XHRcdHZhciBwYXJhbWV0ZXJzID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBzdGVuY2lsQnVmZmVyOiBmYWxzZSB9O1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB3aWR0aCwgaGVpZ2h0LCBwYXJhbWV0ZXJzICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0dGhpcy5wYXNzZXMgPSBbXTtcclxuXHJcblx0XHRpZiAoIFRIUkVFLkNvcHlTaGFkZXIgPT09IHVuZGVmaW5lZCApXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiVEhSRUUuRWZmZWN0Q29tcG9zZXIgcmVsaWVzIG9uIFRIUkVFLkNvcHlTaGFkZXJcIiApO1xyXG5cclxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuQ29weVNoYWRlciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5FZmZlY3RDb21wb3Nlci5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0c3dhcEJ1ZmZlcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIHRtcCA9IHRoaXMucmVhZEJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRtcDtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGFkZFBhc3M6IGZ1bmN0aW9uICggcGFzcyApIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnB1c2goIHBhc3MgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGluc2VydFBhc3M6IGZ1bmN0aW9uICggcGFzcywgaW5kZXggKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5zcGxpY2UoIGluZGV4LCAwLCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0XHR2YXIgbWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIHBhc3MsIGksIGlsID0gdGhpcy5wYXNzZXMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0cGFzcyA9IHRoaXMucGFzc2VzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggIXBhc3MuZW5hYmxlZCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRwYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MubmVlZHNTd2FwICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWFza0FjdGl2ZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3B5UGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEgKTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zd2FwQnVmZmVycygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLk1hc2tQYXNzICkge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwYXNzIGluc3RhbmNlb2YgVEhSRUUuQ2xlYXJNYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlc2V0OiBmdW5jdGlvbiAoIHJlbmRlclRhcmdldCApIHtcclxuXHJcblx0XHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFNpemU6IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcblx0XHRcdHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldC53aWR0aCA9IHdpZHRoO1xyXG5cdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHRcdFx0dGhpcy5yZXNldCggcmVuZGVyVGFyZ2V0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICogQGF1dGhvciBkYXZpZGVkYyAvIGh0dHA6Ly93d3cuc2tldGNocGF0Y2gubmV0L1xyXG4gKlxyXG4gKiBOVklESUEgRlhBQSBieSBUaW1vdGh5IExvdHRlc1xyXG4gKiBodHRwOi8vdGltb3RoeWxvdHRlcy5ibG9nc3BvdC5jb20vMjAxMS8wNi9meGFhMy1zb3VyY2UtcmVsZWFzZWQuaHRtbFxyXG4gKiAtIFdlYkdMIHBvcnQgYnkgQHN1cGVyZWdnYmVydFxyXG4gKiBodHRwOi8vd3d3LmdsZ2Uub3JnL2RlbW9zL2Z4YWEvXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5GWEFBU2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6ICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJyZXNvbHV0aW9uXCI6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEgLyAxMDI0LCAxIC8gNTEyICkgIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XCIsXHJcblxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8xMjguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAvOC4wKVwiLFxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5XID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAxLjAsIC0xLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU1cgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIC0xLjAsIDEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JTRSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiYU0gID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICk7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk0gID0gcmdiYU0ueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyBsdW1hID0gdmVjMyggMC4yOTksIDAuNTg3LCAwLjExNCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGx1bWFOVyA9IGRvdCggcmdiTlcsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFORSA9IGRvdCggcmdiTkUsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTVyA9IGRvdCggcmdiU1csIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTRSA9IGRvdCggcmdiU0UsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNICA9IGRvdCggcmdiTSwgIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNaW4gPSBtaW4oIGx1bWFNLCBtaW4oIG1pbiggbHVtYU5XLCBsdW1hTkUgKSwgbWluKCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNYXggPSBtYXgoIGx1bWFNLCBtYXgoIG1heCggbHVtYU5XLCBsdW1hTkUpICwgbWF4KCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIGRpcjtcIixcclxuXHRcdFx0XHRcImRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcIixcclxuXHRcdFx0XHRcImRpci55ID0gICgobHVtYU5XICsgbHVtYVNXKSAtIChsdW1hTkUgKyBsdW1hU0UpKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkaXJSZWR1Y2UgPSBtYXgoICggbHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFICkgKiAoIDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwgKSwgRlhBQV9SRURVQ0VfTUlOICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKCBtaW4oIGFicyggZGlyLnggKSwgYWJzKCBkaXIueSApICkgKyBkaXJSZWR1Y2UgKTtcIixcclxuXHRcdFx0XHRcImRpciA9IG1pbiggdmVjMiggRlhBQV9TUEFOX01BWCwgIEZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0ICBcIm1heCggdmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZGlyICogcmNwRGlyTWluKSkgKiByZXNvbHV0aW9uO1wiLFxyXG5cdFx0XHRcdFwidmVjNCByZ2JBID0gKDEuMC8yLjApICogKFwiLFxyXG5cdCAgICAgICAgXHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDEuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0XHRcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgyLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJ2ZWM0IHJnYkIgPSByZ2JBICogKDEuMC8yLjApICsgKDEuMC80LjApICogKFwiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMC4wLzMuMCAtIDAuNSkpICtcIixcclxuXHQgICAgICBcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgzLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJmbG9hdCBsdW1hQiA9IGRvdChyZ2JCLCB2ZWM0KGx1bWEsIDAuMCkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmICggKCBsdW1hQiA8IGx1bWFNaW4gKSB8fCAoIGx1bWFCID4gbHVtYU1heCApICkge1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQTtcIixcclxuXHJcblx0XHRcdFx0XCJ9IGVsc2Uge1wiLFxyXG5cdFx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSByZ2JCO1wiLFxyXG5cclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5NYXNrUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuaW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5NYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHQvLyBkb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSApO1xyXG5cdFx0XHRjb250ZXh0LmRlcHRoTWFzayggZmFsc2UgKTtcclxuXHJcblx0XHRcdC8vIHNldCB1cCBzdGVuY2lsXHJcblxyXG5cdFx0XHR2YXIgd3JpdGVWYWx1ZSwgY2xlYXJWYWx1ZTtcclxuXHJcblx0XHRcdGlmICggdGhpcy5pbnZlcnNlICkge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMDtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdyaXRlVmFsdWUgPSAxO1xyXG5cdFx0XHRcdGNsZWFyVmFsdWUgPSAwO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29udGV4dC5lbmFibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmICk7XHJcblx0XHRcdGNvbnRleHQuY2xlYXJTdGVuY2lsKCBjbGVhclZhbHVlICk7XHJcblxyXG5cdFx0XHQvLyBkcmF3IGludG8gdGhlIHN0ZW5jaWwgYnVmZmVyXHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHQvLyByZS1lbmFibGUgdXBkYXRlIG9mIGNvbG9yIGFuZCBkZXB0aFxyXG5cclxuXHRcdFx0Y29udGV4dC5jb2xvck1hc2soIHRydWUsIHRydWUsIHRydWUsIHRydWUgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIHRydWUgKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgcmVuZGVyIHdoZXJlIHN0ZW5jaWwgaXMgc2V0IHRvIDFcclxuXHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTsgIC8vIGRyYXcgaWYgPT0gMVxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuQ2xlYXJNYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHRjb250ZXh0LmRpc2FibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHJcblx0VEhSRUUuUmVuZGVyUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSBvdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IGNsZWFyQ29sb3I7XHJcblx0XHR0aGlzLmNsZWFyQWxwaGEgPSAoIGNsZWFyQWxwaGEgIT09IHVuZGVmaW5lZCApID8gY2xlYXJBbHBoYSA6IDE7XHJcblxyXG5cdFx0dGhpcy5vbGRDbGVhckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XHJcblx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSAxO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMub2xkQ2xlYXJDb2xvci5jb3B5KCByZW5kZXJlci5nZXRDbGVhckNvbG9yKCkgKTtcclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSByZW5kZXJlci5nZXRDbGVhckFscGhhKCk7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMuY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5vbGRDbGVhckNvbG9yLCB0aGlzLm9sZENsZWFyQWxwaGEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cdFxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlNoYWRlclBhc3MgPSBmdW5jdGlvbiAoIHNoYWRlciwgdGV4dHVyZUlEICkge1xyXG5cclxuXHRcdHRoaXMudGV4dHVyZUlEID0gKCB0ZXh0dXJlSUQgIT09IHVuZGVmaW5lZCApID8gdGV4dHVyZUlEIDogXCJ0RGlmZnVzZVwiO1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblxyXG5cdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyXHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IGZhbHNlO1xyXG5cclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0xLCAxLCAxLCAtMSwgMCwgMSApO1xyXG5cdFx0dGhpcy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoIHRoaXMucXVhZCApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXSApIHtcclxuXHJcblx0XHRcdFx0dGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXS52YWx1ZSA9IHJlYWRCdWZmZXI7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnJlbmRlclRvU2NyZWVuICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIl19
