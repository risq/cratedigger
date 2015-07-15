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



/*=======================================================
=            cratedigger.js v0.0.1 - by risq            =
=======================================================*/
'use strict';

var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null);

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


    /*==========  Feature test  ==========*/

    // TODO: to fix - supports = !!document.querySelector && !!root.addEventListener,


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
        classie.add( renderer.domElement, 'grab' );
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
    classie.remove( renderer.domElement, 'grab' );

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
    // TODO: to fix - if ( !supports || !Modernizr.webgl ) return;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3JpcHRzL2NyYXRlZGlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgIC86OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgIC86Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgLzo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgLzo6Ojo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgIC86OjovXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgLzo6Oi9+flxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAvOjo6L19fXFw6OjpcXCAgICBcXCAvOjo6LyAgICBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgLzo6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6OjovICAgIC8gXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgLzo6Ojo6OlxcICAgXFw6OjpcXCAgICBcXF9fICAgIC86Ojo6OjpcXCAgICBcXF9cXDo6OlxcICAgXFw6OjpcXCAgICBcXDovX19fXy8gICBcXDo6OlxcX19fX1xcXHJcbiAgICAgICAgIC86OjovXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgXFwgIC86OjovXFw6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgICB8ICAgICB8Ojo6fCAgICB8XHJcbiAgICAgICAgLzo6Oi8gIFxcOjo6XFwgICBcXDo6OnwgICAgfCBcXC86OjovICBcXDo6OlxcX19fX1xcIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcX19ffCAgICAgfDo6OnxfX19ffFxyXG4gICAgICAgIFxcOjovICAgfDo6OjpcXCAgLzo6OnxfX19ffCAvOjo6LyAgICBcXDo6LyAgICAvICBcXDo6OlxcICAgXFw6Oi8gICAgLyAgIF9cXF9fXy86OjovICAgIC9cclxuICAgICAgICAgXFwvX19fX3w6Ojo6OlxcLzo6Oi8gICAgL1xcLzo6Oi8gICAgLyBcXC9fX19fL1xcICAgXFw6OjpcXCAgIFxcL19fX18vOlxcIHw6OnwgLzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojo6Ojo6Ojo6LyAgICAvOjo6OjovICAgIC8gICAgICBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgXFw6OjpcXHw6OnwvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnxcXDo6OjovICAgIC9cXDo6OjovX19fXy8gICAgICAgIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcICBcXDo6Ojo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCBcXDo6L19fX18vICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgLzo6Oi8gICAgLyAgIFxcOjo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgfnwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXC86OjovICAgIC8gICAgIFxcOjo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgICB8ICAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6Ojo6Oi8gICAgLyAgICAgICBcXDo6OjovX19fXy9cclxuICAgICAgICAgICAgICAgXFw6OnwgICB8ICAgICAgICAgICBcXDo6OlxcX19fX1xcICAgICAgICAgXFw6Ojo6LyAgICAvICAgICAgICAgfDo6fCAgICB8XHJcbiAgICAgICAgICAgICAgICBcXDp8ICAgfCAgICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICB8Ojp8X19fX3xcclxuICAgICAgICAgICAgICAgICBcXHxfX198ICAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICB+flxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAuX19fLl9fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX1xyXG4gICAgICAgX19fX19fX19fX19fX19fXyBfLyAgfF8gIF9fX18gICBfX3wgXy98X198IF9fX18gICBfX19fICAgX19fX19fX19fX18gICAgICAgfF9ffCBfX19fX19cclxuICAgICBfLyBfX19cXF8gIF9fIFxcX18gIFxcXFwgICBfX1xcLyBfXyBcXCAvIF9fIHwgfCAgfC8gX19fXFwgLyBfX19cXF8vIF9fIFxcXyAgX18gXFwgICAgICB8ICB8LyAgX19fL1xyXG4gICAgIFxcICBcXF9fX3wgIHwgXFwvLyBfXyBcXHwgIHwgXFwgIF9fXy8vIC9fLyB8IHwgIC8gL18vICA+IC9fLyAgPiAgX19fL3wgIHwgXFwvICAgICAgfCAgfFxcX19fIFxcXHJcbiAgICAgIFxcX19fICA+X198ICAoX19fXyAgL19ffCAgXFxfX18gID5fX19fIHwgfF9fXFxfX18gIC9cXF9fXyAgLyBcXF9fXyAgPl9ffCAgL1xcIC9cXF9ffCAgL19fX18gID5cclxuICAgICAgICAgIFxcLyAgICAgICAgICAgXFwvICAgICAgICAgIFxcLyAgICAgXFwvICAgL19fX19fLy9fX19fXy8gICAgICBcXC8gICAgICBcXC8gXFxfX19fX198ICAgIFxcL1xyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgb3B0aW9ucyA9IHt9LFxyXG4gICAgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgdGFyZ2V0LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRmVhdHVyZSB0ZXN0ICA9PT09PT09PT09Ki9cclxuXHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBzdXBwb3J0cyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvciAmJiAhIXJvb3QuYWRkRXZlbnRMaXN0ZW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVmYXVsdCBzZXR0aW5ncyAgPT09PT09PT09PSovXHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgICAgY2FudmFzV2lkdGg6IG51bGwsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgICAgIHJlY29yZHNQZXJDcmF0ZTogMjQsXHJcbiAgICAgICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgxMTExMTEsXHJcbiAgICAgICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgICAgIGNyYXRlVGV4dHVyZTogJ2ltZy93b29kLmpwZycsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgaW5mb1BhbmVsT3BhY2l0eTogMC45LFxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgICAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICAgICAgb25JbmZvUGFuZWxPcGVuZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHJvb3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICAgICAgY2FudmFzQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1jYW52YXMnLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1sb2FkaW5nJyxcclxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgICAgICBhcnRpc3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1hcnRpc3QnLFxyXG4gICAgICAgICAgICBjb3ZlckNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc3RhbnRzOiB7XHJcbiAgICAgICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgICAgICBjYW1lcmFNb3ZlVGltZTogODAwLFxyXG4gICAgICAgICAgICBpbmZvT3BlblRpbWU6IDgwMCxcclxuICAgICAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgICAgIHJlY29yZFNob3duWTogMjUsXHJcbiAgICAgICAgICAgIHJlY29yZEZsaXBwZWRZOiAxMTAsXHJcbiAgICAgICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICAgICAgejogMTgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUZvY3VzUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE2MCxcclxuICAgICAgICAgICAgICAgIHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIHo6IDg1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRaOiAwLjAzLFxyXG4gICAgICAgICAgICBncmFiU2Vuc2l0aXZpdHk6IDZcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQ0xBU1NFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBSZWNvcmQgQ2xhc3MgID09PT09PT09PT0qL1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBnZXRSZWNvcmRNYXRlcmlhbCggbnVsbCwgZmFsc2UgKSApICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgIHk6IDUwICsgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnogKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnggKyA4MCxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcclxuXHJcbiAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvcHRpb25zLCBrZXkgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRzWyBrZXkgXSA9IG9wdGlvbnNbIGtleSBdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59O1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbmUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyMDAwICk7XHJcbiAgICB9ICk7XHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsT3BlbmVkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggaW5mb0NvbnRhaW5lckVsZW1lbnQsIG9wdGlvbnMuaW5mb1BhbmVsT3BhY2l0eSApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxDbG9zZWQoKTtcclxuXHJcbiAgICAgICAgfSwgZm9yY2UgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciB1cGRhdGVTaG93blJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBzaG93blJlY29yZCAhPSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlU2hvd25SZWNvcmQuLicpO1xyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSArIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZXNldFNob3duUmVjb3JkID0gZnVuY3Rpb24gKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgc2VsZWN0UHJldlJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgc2VsZWN0TmV4dFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIGdldE5leHRBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbnZhciBuYXZpZ2F0ZVJlY29yZHMgPSBmdW5jdGlvbiAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGFzc2llLmFkZCggcmVuZGVyZXIuZG9tRWxlbWVudCwgJ2dyYWInICk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTkVYVCBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQUkVWIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggYmFzZVksIGRlbHRhICk7XHJcbiAgICB9LCBzY3JvbGxTcGVlZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBmaWxsSW5mb1BhbmVsID0gZnVuY3Rpb24gKCByZWNvcmQgKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS50aXRsZSApIHtcclxuXHJcbiAgICAgICAgdGl0bGVJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS50aXRsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5hcnRpc3QgKSB7XHJcblxyXG4gICAgICAgIGFydGlzdEluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLmFydGlzdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5jb3ZlciApIHtcclxuXHJcbiAgICAgICAgY292ZXJJbmZvRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyByZWNvcmQuZGF0YS5jb3ZlciArICcpJztcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVWRU5UUyBIQU5ETElORyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgb25Nb3VzZU1vdmVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIC8vZ2V0IG1vdXNlIHBvc2l0aW9uIG9uIGRvY3VtZW50IGNyb3NzYnJvd3NlclxyXG4gICAgaWYgKCAhZSApIHtcclxuXHJcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlLnBhZ2VYIHx8IGUucGFnZVkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUucGFnZVg7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5wYWdlWTtcclxuICAgIH0gZWxzZSBpZiAoIGUuY2xpZW50WCB8fCBlLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG1fcG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbnZhciBvblNjcm9sbEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbnZhciBvbkNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBtb3VzZS55ICk7XHJcbiAgICAgICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZVVwRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIGNsYXNzaWUucmVtb3ZlKCByZW5kZXJlci5kb21FbGVtZW50LCAnZ3JhYicgKTtcclxuXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgb3B0aW9ucy5jb25zdGFudHMuZ3JhYlNlbnNpdGl2aXR5ICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBvbktleURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uV2luZG93UmVzaXplRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIDEsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBpbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBvcHRpb25zLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0LCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIG9wdGlvbnMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcEV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbnZhciBpbml0UG9zdFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IG9wdGlvbnMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLm9uQ2hhbmdlKCB1cGRhdGVDYW1lcmEgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxudmFyIHVwZGF0ZUNhbWVyYSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0Q3JhdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IG9wdGlvbnMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogb3B0aW9ucy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFJlY29yZE1hdGVyaWFsID0gZnVuY3Rpb24gKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBvcHRpb25zLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBvcHRpb25zLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCwgZG9uZSApIHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8PSAwLjEgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtPSAwLjE7XHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWRlT3V0KCBlbGVtZW50LCBkb25lICk7XHJcbiAgICAgICAgfSwgMTAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKSB7XHJcblxyXG4gICAgaWYgKCAhZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSAmJiBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPCBmYWRlVG8gKSB7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIG9wID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggIWVsZW1lbnQuc3R5bGUuZGlzcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIG9wID0gZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3AgKz0gMC4wMztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICk7XHJcblxyXG4gICAgICAgIH0sIDEwICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gZmFkZVRvO1xyXG5cclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBvcHRpb25zLmNhbnZhc1dpZHRoID8gb3B0aW9ucy5jYW52YXNXaWR0aCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gb3B0aW9ucy5jYW52YXNIZWlnaHQgPyBvcHRpb25zLmNhbnZhc0hlaWdodCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbn07XHJcblxyXG52YXIgc2V0Q2FudmFzRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCAgICAgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCAgICAgPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKCB2ICkgeyAvLyBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgLSBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZSBbcmV2LiAjMV1cclxuXHJcbiAgICBmb3IgKCB2YXIgaiwgeCwgaSA9IHYubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBpICksIHggPSB2WyAtLWkgXSwgdlsgaSBdID0gdlsgaiBdLCB2WyBqIF0gPSB4ICk7XHJcbiAgICByZXR1cm4gdjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVhQT1JUUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgTWV0aG9kcyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcclxuXHJcbiAgICBvcHRpb25zID0gZXh0ZW5kKCBkZWZhdWx0cywgcGFyYW1zICk7XHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIC8vIFRPRE86IHRvIGZpeCAtIGlmICggIXN1cHBvcnRzIHx8ICFNb2Rlcm5penIud2ViZ2wgKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyggJ0luaXRpYWxpemluZyBjcmF0ZWRpZ2dlci5qcy4uLicgKTtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMucm9vdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFyb290Q29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcm9vdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jYW52YXNDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY2FudmFzQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5pbmZvQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWluZm9Db250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnRpdGxlQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXRpdGxlSW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCB0aXRsZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGFydGlzdEluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmNvdmVyQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNvdmVySW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNvdmVyIGltYWdlIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiXX0=
},{"./threejs_modules/CopyShader":2,"./threejs_modules/DoFShader":3,"./threejs_modules/EffectComposer":4,"./threejs_modules/FXAAShader":5,"./threejs_modules/MaskPass":6,"./threejs_modules/RenderPass":7,"./threejs_modules/ShaderPass":8}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmF0ZWRpZ2dlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3Nlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNW5EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKTtcclxuXHJcbi8qPT09PT09PT09PSAgSW5qZWN0IGFsbCBleHRlcm5hbCBtb2R1bGVzIHRvIFRIUkVFLmpzID09PT09PT09PT0qL1xyXG5cclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXInKShUSFJFRSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVkFSSUFCTEVTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxudmFyIG9wdGlvbnMgPSB7fSxcclxuICAgIGV4cG9ydHMgPSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cclxuICAgIC8qPT09PT09PT09PSAgRE9NIGNvbnRhaW5lciBlbGVtZW50cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LFxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCxcclxuICAgIHRpdGxlSW5mb0VsZW1lbnQsXHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCxcclxuICAgIGNvdmVySW5mb0VsZW1lbnQsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHRhcmdldCxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIEZlYXR1cmUgdGVzdCAgPT09PT09PT09PSovXHJcblxyXG4gICAgLy8gVE9ETzogdG8gZml4IC0gc3VwcG9ydHMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJiYgISFyb290LmFkZEV2ZW50TGlzdGVuZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlZmF1bHQgc2V0dGluZ3MgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodDogbnVsbCxcclxuICAgICAgICBuYkNyYXRlczogMixcclxuICAgICAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgICAgIGxpZ2h0SW50ZW5zaXR5OiAxLFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZTogdHJ1ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgICAgIHNsZWV2ZUNvbG9yOiAweDBkMDcwMixcclxuICAgICAgICBzbGVldmVNYXNrVGV4dHVyZTogJ2ltZy9zbGVldmUucG5nJyxcclxuICAgICAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25DbGljazogdHJ1ZSxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgIGluZm9QYW5lbE9wYWNpdHk6IDAuOSxcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBibHVyQW1vdW50OiAwLjQsXHJcbiAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplOiB0cnVlLFxyXG4gICAgICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25Mb2FkaW5nRW5kOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICByb290Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlcicsXHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItY2FudmFzJyxcclxuICAgICAgICAgICAgbG9hZGluZ0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItbG9hZGluZycsXHJcbiAgICAgICAgICAgIGluZm9Db250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWluZm8nLFxyXG4gICAgICAgICAgICB0aXRsZUNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLXRpdGxlJyxcclxuICAgICAgICAgICAgYXJ0aXN0Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtYXJ0aXN0JyxcclxuICAgICAgICAgICAgY292ZXJDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1jb3ZlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnN0YW50czoge1xyXG4gICAgICAgICAgICByZWNvcmRNb3ZlVGltZTogMTAwMCxcclxuICAgICAgICAgICAgY2FtZXJhTW92ZVRpbWU6IDgwMCxcclxuICAgICAgICAgICAgaW5mb09wZW5UaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIHJlY29yZEJhc2VZOiA1LFxyXG4gICAgICAgICAgICByZWNvcmRTaG93blk6IDI1LFxyXG4gICAgICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgICAgICB0YXJnZXRCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMCxcclxuICAgICAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICAgICAgejogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDI4MCxcclxuICAgICAgICAgICAgICAgIHk6IDIwMCxcclxuICAgICAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFGb2N1c1Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAxNjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB6OiA4NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFk6IDAuMDcsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWjogMC4wMyxcclxuICAgICAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIENMQVNTRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUmVjb3JkIENsYXNzICA9PT09PT09PT09Ki9cclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggZ2V0UmVjb3JkTWF0ZXJpYWwoIG51bGwsIGZhbHNlICkgKSApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICB5OiA1MCArIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56ICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1bGxSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAncHVsbGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdWxsZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogTWF0aC5QSVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSAtIDUwLFxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcEJhY2tSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgLCBub0NhbWVyYVR3ZWVuICkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gJ2ZsaXBwZWQnICkge1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uICggZGVmYXVsdHMsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGtleSBpbiBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0c1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWZhdWx0cztcclxufTtcclxuXHJcbnZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggZG9SZW5kZXIgKSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbnMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmNhbWVyYU1vdXNlTW92ZSApIHtcclxuXHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnggPSAoIG1vdXNlLnggLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTsgLy8gaW52ZXJzZSBheGlzP1xyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy55ID0gKCBtb3VzZS55IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRaICogKCB0YXJnZXRDYW1lcmFQb3MueSAtIHJvb3RDb250YWluZXIucm90YXRpb24ueiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBkZXB0aE1hdGVyaWFsO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgZGVwdGhUYXJnZXQgKTtcclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuICAgICAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBMb2FkaW5nIG1ldGhvZHNcclxuICovXHJcbnZhciB1bmxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gbnVsbDtcclxuICAgICAgICByZWNvcmRzWyBpIF0uc2V0VW5hY3RpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDA7XHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXTtcclxuXHJcbn07XHJcblxyXG5cclxudmFyIGxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCByZWNvcmRzRGF0YSwgc2h1ZmZsZUJlZm9yZUxvYWRpbmcsIGRvbmUgKSB7XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCggdHJ1ZSApO1xyXG5cclxuICAgIHNob3dMb2FkaW5nKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggbG9hZGVkUmVjb3JkcyA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmxvYWRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzaHVmZmxlQmVmb3JlTG9hZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZHNEYXRhID0gc2h1ZmZsZSggcmVjb3Jkc0RhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aCAmJiBpIDwgcmVjb3Jkc0RhdGEubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IHJlY29yZHNEYXRhWyBpIF07XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLm1lc2gubWF0ZXJpYWwubWF0ZXJpYWxzID0gZ2V0UmVjb3JkTWF0ZXJpYWwoIHJlY29yZHNEYXRhWyBpIF0uY292ZXIsIHJlY29yZHNEYXRhWyBpIF0uaGFzU2xlZXZlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2h5ID8/XHJcbiAgICAgICAgLy8gbG9hZGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhLmxlbmd0aCA8IHJlY29yZHMubGVuZ3RoID8gcmVjb3Jkc0RhdGEubGVuZ3RoIDogcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgbG9hZGVkUmVjb3JkcyA9IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIHJlY29yZHNEYXRhTGlzdCA9IHJlY29yZHNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb25lICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgfSApO1xyXG59O1xyXG5cclxudmFyIHNodWZmbGVSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzaHVmZmxlZFJlY29yZHMgPSByZWNvcmRzRGF0YUxpc3Q7XHJcbiAgICBzaHVmZmxlZFJlY29yZHMgPSBzaHVmZmxlKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuICAgIGxvYWRSZWNvcmRzKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBSRUNPUkRTIFNFTEVDVElPTiBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApIHtcclxuXHJcbiAgICAgICAgZmlsbEluZm9QYW5lbCggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5pbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5lZCc7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGluZm9Db250YWluZXJFbGVtZW50LCBvcHRpb25zLmluZm9QYW5lbE9wYWNpdHkgKTtcclxuXHJcbiAgICAgICAgfSwgMzAwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmYWRlT3V0KCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NpbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBCYWNrUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgdXBkYXRlU2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVNob3duUmVjb3JkLi4nKTtcclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPCAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uU2Nyb2xsICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBzY3JvbGxSZWNvcmRzID0gZnVuY3Rpb24gKCBiYXNlWSwgb2xkRGVsdGEgKSB7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHZhciBpbnZlcnNlRGVsdGEgPSAxIC0gb2xkRGVsdGE7XHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQgPSBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiAzMDA7XHJcblxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xhc3NpZS5hZGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQsICdncmFiJyApO1xyXG4gICAgICAgIHZhciBkZWx0YSA9ICggYmFzZVkgLSBtb3VzZS55ICkgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5FWFQgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUFJFViBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmlsbEluZm9QYW5lbCA9IGZ1bmN0aW9uICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS5hcnRpc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuY292ZXIgKSB7XHJcblxyXG4gICAgICAgIGNvdmVySW5mb0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIG9uTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG52YXIgb25TY3JvbGxFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgb25DbGlja0V2ZW50ID0gZnVuY3Rpb24gKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICBjbGFzc2llLnJlbW92ZSggcmVuZGVyZXIuZG9tRWxlbWVudCwgJ2dyYWInICk7XHJcblxyXG4gICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIG9wdGlvbnMuY29uc3RhbnRzLmdyYWJTZW5zaXRpdml0eSApICkge1xyXG5cclxuICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgb25LZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCAxLCBkb25lICk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCBkb25lICk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgaW5pdFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCwgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAvLyAgICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxMCwgMTAsIDEsIDEsIDEpKTtcclxuICAgIC8vICAgICAgICBzY2VuZS5hZGQodGFyZ2V0KTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBvcHRpb25zLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBvcHRpb25zLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXREZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0R1VJID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbnZhciB1cGRhdGVDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdENyYXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBvcHRpb25zLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIG9wdGlvbnMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ3JhdGUgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0UmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRSZWNvcmRNYXRlcmlhbCA9IGZ1bmN0aW9uICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gb3B0aW9ucy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogb3B0aW9ucy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHdoZWVsRGlzdGFuY2UgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG52YXIgd2hlZWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbnZhciBjb29yZHNFcXVhbHNBcHByb3ggPSBmdW5jdGlvbiAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGRvbmUgKSB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPD0gMC4xICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgLT0gMC4xO1xyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmFkZU91dCggZWxlbWVudCwgZG9uZSApO1xyXG4gICAgICAgIH0sIDEwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFkZUluID0gZnVuY3Rpb24gKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICkge1xyXG5cclxuICAgIGlmICggIWVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgJiYgZWxlbWVudC5zdHlsZS5vcGFjaXR5IDwgZmFkZVRvICkge1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBvcCA9IDA7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoICFlbGVtZW50LnN0eWxlLmRpc3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBvcCA9IGVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wICs9IDAuMDM7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApO1xyXG5cclxuICAgICAgICB9LCAxMCApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IGZhZGVUbztcclxuXHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVDYW52YXNTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbnZhc1dpZHRoID0gb3B0aW9ucy5jYW52YXNXaWR0aCA/IG9wdGlvbnMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IG9wdGlvbnMuY2FudmFzSGVpZ2h0ID8gb3B0aW9ucy5jYW52YXNIZWlnaHQgOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxudmFyIHNldENhbnZhc0RpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IGV4dGVuZCggZGVmYXVsdHMsIHBhcmFtcyApO1xyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBpZiAoICFzdXBwb3J0cyB8fCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coICdJbml0aWFsaXppbmcgY3JhdGVkaWdnZXIuanMuLi4nICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmFydGlzdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFhcnRpc3RJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIGFydGlzdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNvdmVySW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl6WTNKcGNIUnpMMk55WVhSbFpHbG5aMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZYMTlmWHlBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTlmWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZklDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZlgxOWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0FnSUNBdlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBZ0lDQXZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQWdJQzg2T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lDQXZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJQ0F2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDODZPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdMem82T2pvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0x6bzZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUM4Nk9qbzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0x6bzZPam82T2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUM4Nk9qb3ZYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnTHpvNk9pOWNYRG82T2x4Y0lDQWdJRnhjSUNBZ0x6bzZPaTkrZmx4Y09qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x6bzZPaTlmWDF4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBdk9qbzZMMTlmWEZ3Nk9qcGNYQ0FnSUNCY1hDQXZPam82THlBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNBZ1hGd2dYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Nk9qb3ZJQ0FnSUM4Z1hGdzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0x6bzZPam82T2x4Y0lDQWdYRnc2T2pwY1hDQWdJQ0JjWEY5ZklDQWdJQzg2T2pvNk9qcGNYQ0FnSUNCY1hGOWNYRG82T2x4Y0lDQWdYRnc2T2pwY1hDQWdJQ0JjWERvdlgxOWZYeThnSUNCY1hEbzZPbHhjWDE5ZlgxeGNYSEpjYmlBZ0lDQWdJQ0FnSUM4Nk9qb3ZYRnc2T2pwY1hDQWdJRnhjT2pvNlhGeGZYMTlmWEZ3Z1hGd2dJQzg2T2pvdlhGdzZPanBjWENBZ0lDQmNYQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0I4SUNBZ0lDQjhPam82ZkNBZ0lDQjhYSEpjYmlBZ0lDQWdJQ0FnTHpvNk9pOGdJRnhjT2pvNlhGd2dJQ0JjWERvNk9ud2dJQ0FnZkNCY1hDODZPam92SUNCY1hEbzZPbHhjWDE5ZlgxeGNJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNYMTlmWDF4Y1gxOWZmQ0FnSUNBZ2ZEbzZPbnhmWDE5ZmZGeHlYRzRnSUNBZ0lDQWdJRnhjT2pvdklDQWdmRG82T2pwY1hDQWdMem82T254ZlgxOWZmQ0F2T2pvNkx5QWdJQ0JjWERvNkx5QWdJQ0F2SUNCY1hEbzZPbHhjSUNBZ1hGdzZPaThnSUNBZ0x5QWdJRjljWEY5Zlh5ODZPam92SUNBZ0lDOWNjbHh1SUNBZ0lDQWdJQ0FnWEZ3dlgxOWZYM3c2T2pvNk9seGNMem82T2k4Z0lDQWdMMXhjTHpvNk9pOGdJQ0FnTHlCY1hDOWZYMTlmTDF4Y0lDQWdYRnc2T2pwY1hDQWdJRnhjTDE5ZlgxOHZPbHhjSUh3Nk9ud2dMem82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pvNk9qbzZPam82THlBZ0lDQXZPam82T2pvdklDQWdJQzhnSUNBZ0lDQmNYRG82T2x4Y0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ1hGdzZPanBjWEh3Nk9ud3ZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T254Y1hEbzZPam92SUNBZ0lDOWNYRG82T2pvdlgxOWZYeThnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNYMTlmWDF4Y0lDQmNYRG82T2pvNk9qbzZPam92SUNBZ0lDOWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmRG82ZkNCY1hEbzZMMTlmWDE4dklDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnTHpvNk9pOGdJQ0FnTHlBZ0lGeGNPam82T2pvNk9qb3ZJQ0FnSUM5Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZEbzZmQ0FnZm53Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDODZPam92SUNBZ0lDOGdJQ0FnSUZ4Y09qbzZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T253Z0lDQjhJQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPam82T2k4Z0lDQWdMeUFnSUNBZ0lDQmNYRG82T2pvdlgxOWZYeTljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEZ3Nk9ud2dJQ0I4SUNBZ0lDQWdJQ0FnSUNCY1hEbzZPbHhjWDE5ZlgxeGNJQ0FnSUNBZ0lDQWdYRnc2T2pvNkx5QWdJQ0F2SUNBZ0lDQWdJQ0FnZkRvNmZDQWdJQ0I4WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hEcDhJQ0FnZkNBZ0lDQWdJQ0FnSUNBZ0lGeGNPam92SUNBZ0lDOGdJQ0FnSUNBZ0lDQWdYRnc2T2k4Z0lDQWdMeUFnSUNBZ0lDQWdJQ0I4T2pwOFgxOWZYM3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hIeGZYMTk4SUNBZ0lDQWdJQ0FnSUNBZ0lGeGNMMTlmWDE4dklDQWdJQ0FnSUNBZ0lDQWdYRnd2WDE5Zlh5OGdJQ0FnSUNBZ0lDQWdJQ0IrZmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmWHlBZ0lDQWdJQ0FnSUNBZ0lDQXVYMTlmTGw5ZklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZlgxeHlYRzRnSUNBZ0lDQWdYMTlmWDE5ZlgxOWZYMTlmWDE5Zlh5QmZMeUFnZkY4Z0lGOWZYMThnSUNCZlgzd2dYeTk4WDE5OElGOWZYMThnSUNCZlgxOWZJQ0FnWDE5ZlgxOWZYMTlmWDE4Z0lDQWdJQ0FnZkY5ZmZDQmZYMTlmWDE5Y2NseHVJQ0FnSUNCZkx5QmZYMTljWEY4Z0lGOWZJRnhjWDE4Z0lGeGNYRndnSUNCZlgxeGNMeUJmWHlCY1hDQXZJRjlmSUh3Z2ZDQWdmQzhnWDE5ZlhGd2dMeUJmWDE5Y1hGOHZJRjlmSUZ4Y1h5QWdYMThnWEZ3Z0lDQWdJQ0I4SUNCOEx5QWdYMTlmTDF4eVhHNGdJQ0FnSUZ4Y0lDQmNYRjlmWDN3Z0lId2dYRnd2THlCZlh5QmNYSHdnSUh3Z1hGd2dJRjlmWHk4dklDOWZMeUI4SUh3Z0lDOGdMMTh2SUNBK0lDOWZMeUFnUGlBZ1gxOWZMM3dnSUh3Z1hGd3ZJQ0FnSUNBZ2ZDQWdmRnhjWDE5ZklGeGNYSEpjYmlBZ0lDQWdJRnhjWDE5ZklDQStYMTk4SUNBb1gxOWZYeUFnTDE5ZmZDQWdYRnhmWDE4Z0lENWZYMTlmSUh3Z2ZGOWZYRnhmWDE4Z0lDOWNYRjlmWHlBZ0x5QmNYRjlmWHlBZ1BsOWZmQ0FnTDF4Y0lDOWNYRjlmZkNBZ0wxOWZYMThnSUQ1Y2NseHVJQ0FnSUNBZ0lDQWdJRnhjTHlBZ0lDQWdJQ0FnSUNBZ1hGd3ZJQ0FnSUNBZ0lDQWdJRnhjTHlBZ0lDQWdYRnd2SUNBZ0wxOWZYMTlmTHk5ZlgxOWZYeThnSUNBZ0lDQmNYQzhnSUNBZ0lDQmNYQzhnWEZ4ZlgxOWZYMTk4SUNBZ0lGeGNMMXh5WEc1Y2NseHVYSEpjYmlvdlhISmNibHh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1kzSmhkR1ZrYVdkblpYSXVhbk1nZGpBdU1DNHhJQzBnWW5rZ2NtbHpjU0FnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JpZDFjMlVnYzNSeWFXTjBKenRjY2x4dVhISmNiblpoY2lCVVNGSkZSU0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRVU0ZKRlJTZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25WRWhTUlVVblhTQTZJRzUxYkd3cE8xeHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlJQ0JKYm1wbFkzUWdZV3hzSUdWNGRHVnlibUZzSUcxdlpIVnNaWE1nZEc4Z1ZFaFNSVVV1YW5NZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNXlaWEYxYVhKbEtDY3VMM1JvY21WbGFuTmZiVzlrZFd4bGN5OVRhR0ZrWlhKUVlYTnpKeWtvVkVoU1JVVXBPMXh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5RGIzQjVVMmhoWkdWeUp5a29WRWhTUlVVcE8xeHlYRzV5WlhGMWFYSmxLQ2N1TDNSb2NtVmxhbk5mYlc5a2RXeGxjeTlTWlc1a1pYSlFZWE56Snlrb1ZFaFNSVVVwTzF4eVhHNXlaWEYxYVhKbEtDY3VMM1JvY21WbGFuTmZiVzlrZFd4bGN5OUViMFpUYUdGa1pYSW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBaWVFVRlRhR0ZrWlhJbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMDFoYzJ0UVlYTnpKeWtvVkVoU1JVVXBPMXh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5RlptWmxZM1JEYjIxd2IzTmxjaWNwS0ZSSVVrVkZLVHRjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQldRVkpKUVVKTVJWTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1MllYSWdiM0IwYVc5dWN5QTlJSHQ5TEZ4eVhHNGdJQ0FnWlhod2IzSjBjeUE5SUh0OUxDQXZMeUJQWW1wbFkzUWdabTl5SUhCMVlteHBZeUJCVUVselhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCRVQwMGdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5Rc1hISmNiaUFnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwTEZ4eVhHNGdJQ0FnZEdsMGJHVkpibVp2Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR0Z5ZEdsemRFbHVabTlGYkdWdFpXNTBMRnh5WEc0Z0lDQWdZMjkyWlhKSmJtWnZSV3hsYldWdWRDeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JVYUhKbFpTNXFjeUJ2WW1wbFkzUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnpkR0YwY3l4Y2NseHVJQ0FnSUhOalpXNWxMRnh5WEc0Z0lDQWdZMkZ0WlhKaExGeHlYRzRnSUNBZ2RHRnlaMlYwTEZ4eVhHNGdJQ0FnY21WdVpHVnlaWElzWEhKY2JpQWdJQ0JzYVdkb2RDeGNjbHh1SUNBZ0lHeGxablJNYVdkb2RDeGNjbHh1SUNBZ0lISnBaMmgwVEdsbmFIUXNYSEpjYmlBZ0lDQmpiMjF3YjNObGNpeGNjbHh1SUNBZ0lFWllRVUVzWEhKY2JpQWdJQ0JrYjJZc1hISmNiaUFnSUNCbmRXa3NYSEpjYmlBZ0lDQmtaWEIwYUZSaGNtZGxkQ3hjY2x4dUlDQWdJR1JsY0hSb1UyaGhaR1Z5TEZ4eVhHNGdJQ0FnWkdWd2RHaFZibWxtYjNKdGN5eGNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3dzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1JtVmhkSFZ5WlNCMFpYTjBJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQXZMeUJVVDBSUE9pQjBieUJtYVhnZ0xTQnpkWEJ3YjNKMGN5QTlJQ0VoWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpQW1KaUFoSVhKdmIzUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JQWW1wbFkzUnpJQ1lnWkdGMFlTQmhjbkpoZVhNZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUdOeVlYUmxjeUE5SUZ0ZExGeHlYRzRnSUNBZ2NtVmpiM0prY3lBOUlGdGRMRnh5WEc0Z0lDQWdjbVZqYjNKa2MwUmhkR0ZNYVhOMElEMGdXMTBzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1ZHaHlaV1V1YW5NZ2IySnFaV04wY3lCamIyNTBZV2x1WlhKeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMRnh5WEc0Z0lDQWdZM0poZEdWelEyOXVkR0ZwYm1WeUxGeHlYRzRnSUNBZ2NtVmpiM0prYzBOdmJuUmhhVzVsY2l4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlRkR0YwWlhNc0lIVjBhV3dnZG1GeWN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzRnSUNBZ1kyRnVkbUZ6VjJsa2RHZ3NYSEpjYmlBZ0lDQmpZVzUyWVhOSVpXbG5hSFFzWEhKY2JpQWdJQ0JrY0hJc1hISmNiaUFnSUNCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDeGNjbHh1SUNBZ0lHbHpURzloWkdsdVp5QTlJR1poYkhObExGeHlYRzRnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNCY0ltTnNiM05sWkZ3aUxGeHlYRzRnSUNBZ2FYTlRZM0p2Ykd4cGJtY2dQU0JtWVd4elpTeGNjbHh1SUNBZ0lHUnZVbVZ1WkdWeUlEMGdkSEoxWlN4Y2NseHVJQ0FnSUcxdmRYTmxJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lIZzZJREFzWEhKY2JpQWdJQ0FnSUNBZ2VUb2dNRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQWdJRzF2ZFhObFJHOTNibEJ2Y3lBOUlIdGNjbHh1SUNBZ0lDQWdJQ0I0T2lBd0xGeHlYRzRnSUNBZ0lDQWdJSGs2SURCY2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCMFlYSm5aWFJEWVcxbGNtRlFiM01nUFNCN1hISmNiaUFnSUNBZ0lDQWdlRG9nTUN4Y2NseHVJQ0FnSUNBZ0lDQjVPaUF3WEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ0FnYzJWc1pXTjBaV1JTWldOdmNtUWdQU0F0TVN4Y2NseHVJQ0FnSUhOb2IzZHVVbVZqYjNKa0lEMGdMVEVzWEhKY2JpQWdJQ0JzYjJGa1pXUlNaV052Y21SeklEMGdNQ3hjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCTllYUmxjbWxoYkhNZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUhkdmIyUmZiV0YwWlhKcFlXd3NYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnUkdWbVlYVnNkQ0J6WlhSMGFXNW5jeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdaR1ZtWVhWc2RITWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ1pHVmlkV2M2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnWTJGdWRtRnpWMmxrZEdnNklHNTFiR3dzWEhKY2JpQWdJQ0FnSUNBZ1kyRnVkbUZ6U0dWcFoyaDBPaUJ1ZFd4c0xGeHlYRzRnSUNBZ0lDQWdJRzVpUTNKaGRHVnpPaUF5TEZ4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOUVpYSkRjbUYwWlRvZ01qUXNYSEpjYmlBZ0lDQWdJQ0FnYkdsbmFIUkpiblJsYm5OcGRIazZJREVzWEhKY2JpQWdJQ0FnSUNBZ1kyRnRaWEpoVFc5MWMyVk5iM1psT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nTUhneE1URXhNVEVzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsUTI5c2IzSTZJREI0TUdRd056QXlMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoYzJ0VVpYaDBkWEpsT2lBbmFXMW5MM05zWldWMlpTNXdibWNuTEZ4eVhHNGdJQ0FnSUNBZ0lHTnlZWFJsVkdWNGRIVnlaVG9nSjJsdFp5OTNiMjlrTG1wd1p5Y3NYSEpjYmlBZ0lDQWdJQ0FnWTJ4dmMyVkpibVp2VUdGdVpXeFBia05zYVdOck9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lHTnNiM05sU1c1bWIxQmhibVZzVDI1VFkzSnZiR3c2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVDNCaFkybDBlVG9nTUM0NUxGeHlYRzRnSUNBZ0lDQWdJSEJ2YzNSd2NtOWpaWE56YVc1bk9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lHSnNkWEpCYlc5MWJuUTZJREF1TkN4Y2NseHVJQ0FnSUNBZ0lDQjFjR1JoZEdWRFlXNTJZWE5UYVhwbFQyNVhhVzVrYjNkU1pYTnBlbVU2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnYjI1SmJtWnZVR0Z1Wld4UGNHVnVaV1E2SUdaMWJtTjBhVzl1SUNncElIdDlMRnh5WEc0Z0lDQWdJQ0FnSUc5dVNXNW1iMUJoYm1Wc1EyeHZjMlZrT2lCbWRXNWpkR2x2YmlBb0tTQjdmU3hjY2x4dUlDQWdJQ0FnSUNCdmJreHZZV1JwYm1kRmJtUTZJR1oxYm1OMGFXOXVJQ2dwSUh0OUxGeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUnpPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEp2YjNSRGIyNTBZV2x1WlhKSlpEb2dKMk55WVhSbFpHbG5aMlZ5Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGdWRtRnpRMjl1ZEdGcGJtVnlTV1E2SUNkamNtRjBaV1JwWjJkbGNpMWpZVzUyWVhNbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5U1dRNklDZGpjbUYwWldScFoyZGxjaTFzYjJGa2FXNW5KeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tsa09pQW5ZM0poZEdWa2FXZG5aWEl0YVc1bWJ5Y3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBkR3hsUTI5dWRHRnBibVZ5U1dRNklDZGpjbUYwWldScFoyZGxjaTF5WldOdmNtUXRkR2wwYkdVbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNuUnBjM1JEYjI1MFlXbHVaWEpKWkRvZ0oyTnlZWFJsWkdsbloyVnlMWEpsWTI5eVpDMWhjblJwYzNRbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIzWmxja052Ym5SaGFXNWxja2xrT2lBblkzSmhkR1ZrYVdkblpYSXRjbVZqYjNKa0xXTnZkbVZ5SjF4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMzUmhiblJ6T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaRTF2ZG1WVWFXMWxPaUF4TURBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallXMWxjbUZOYjNabFZHbHRaVG9nT0RBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJtWnZUM0JsYmxScGJXVTZJRGd3TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtRbUZ6WlZrNklEVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkZOb2IzZHVXVG9nTWpVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaRVpzYVhCd1pXUlpPaUF4TVRBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSaGNtZGxkRUpoYzJWUWIzTnBkR2x2YmpvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nTFRJd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTVRBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUF3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYldWeVlVSmhjMlZRYjNOcGRHbHZiam9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dNamd3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNakF3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dNVGd3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJREUyTUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREU1TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRGcxWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYldWeVlVMXZkWE5sVFc5MlpWTndaV1ZrV1RvZ01DNHdOeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ0WlhKaFRXOTFjMlZOYjNabFUzQmxaV1JhT2lBd0xqQXpMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5jbUZpVTJWdWMybDBhWFpwZEhrNklEWmNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnUTB4QlUxTkZVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5SUNCU1pXTnZjbVFnUTJ4aGMzTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1ZG1GeUlGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2dhV1FzSUdOeVlYUmxTV1FzSUhCdmN5QXBJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbWxrSUQwZ2FXUTdYSEpjYmlBZ0lDQjBhR2x6TG1OeVlYUmxTV1FnUFNCamNtRjBaVWxrTzF4eVhHNGdJQ0FnZEdocGN5NXdiM01nUFNCd2IzTTdYSEpjYmlBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnSjI5MWRDYzdYSEpjYmlBZ0lDQjBhR2x6TG5KbFkyOXlaRmhRYjNNZ1BTQXROaklnS3lBb0lERXpOU0F2SUc5d2RHbHZibk11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnS2lCd2IzTTdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeE1EQXNJREV1TlN3Z01UQXdMQ0F4TENBeExDQXhJQ2tzSUc1bGR5QlVTRkpGUlM1TlpYTm9SbUZqWlUxaGRHVnlhV0ZzS0NCblpYUlNaV052Y21STllYUmxjbWxoYkNnZ2JuVnNiQ3dnWm1Gc2MyVWdLU0FwSUNrN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndVoyVnZiV1YwY25rdVlYQndiSGxOWVhSeWFYZ29JRzVsZHlCVVNGSkZSUzVOWVhSeWFYZzBLQ2t1YldGclpWUnlZVzV6YkdGMGFXOXVLQ0ExTUN3Z01Dd2dNQ0FwSUNrN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0dWMyVjBLQ0IwYUdsekxuSmxZMjl5WkZoUWIzTXNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFSmhjMlZaTENBd0lDazdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNHVlaUE5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuSmxZMjl5WkVsa0lEMGdhV1E3WEhKY2JpQWdJQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0Z1BTQnVaWGNnVkVoU1JVVXVWbVZqZEc5eU15Z3BPMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVjMlYwVlc1aFkzUnBkbVVvS1R0Y2NseHVJQ0FnSUhSb2FYTXVjSFZ6YUZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1Ykc5bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTnZibk52YkdVdWJHOW5LQ0JjSWxKbFkyOXlaQ0J1d3JCY0lpd2dkR2hwY3k1cFpDeGNjbHh1SUNBZ0lDQWdJQ0JjSW1OeVlYUmxTV1FnUFZ3aUxDQjBhR2x6TG1OeVlYUmxTV1FzWEhKY2JpQWdJQ0FnSUNBZ1hDSndiM01nUFZ3aUxDQjBhR2x6TG5CdmN5QXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjMlYwUVdOMGFYWmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFJvYVhNdVlXTjBhWFpsSUQwZ2RISjFaVHRjY2x4dUlDQWdJSFJvYVhNdWJXVnphQzUyYVhOcFlteGxJRDBnZEhKMVpUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExuTmxkRlZ1WVdOMGFYWmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFJvYVhNdVlXTjBhWFpsSUQwZ1ptRnNjMlU3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1ZG1semFXSnNaU0E5SUdaaGJITmxPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjMmh2ZDFKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDA5SUNkemFHOTNiaWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQW5jMmh2ZDI0bk8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXSnpiMngxZEdWUWIzTnBkR2x2Ymk1elpYUkdjbTl0VFdGMGNtbDRVRzl6YVhScGIyNG9JSFJvYVhNdWJXVnphQzV0WVhSeWFYaFhiM0pzWkNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prVTJodmQyNVpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y205MFlYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUUxaGRHZ3VVRWtnTHlBeVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBZWEpuWlhRdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11Y21WamIzSmtXRkJ2Y3l4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRFV3SUNzZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prVTJodmQyNVpMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ2RHaHBjeTVoWW5OdmJIVjBaVkJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUdOaGJXVnlZUzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NXlaV052Y21SWVVHOXpJQ3NnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUxub2dLeUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5wY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjSFZ6YUZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDBnSjNCMWMyaGxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQW5jSFZ6YUdWa0p6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkVKaGMyVlpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y205MFlYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUUxaGRHZ3VVRWtnTHlBeUlDc2dUV0YwYUM1UVNTQXZJRGRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11Y21WamIzSmtUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnNiRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMDlJQ2R3ZFd4c1pXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0ozQjFiR3hsWkNjN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJDWVhObFdWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUJOWVhSb0xsQkpJQzhnTWlBdElFMWhkR2d1VUVrZ0x5QTNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG1ac2FYQlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9JR1J2Ym1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NXpkR0YwWlNBOUlDZG1iR2x3Y0dWa0p6dGNjbHh1WEhKY2JpQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRVpzYVhCd1pXUlpYSEpjYmlBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWFXNW1iMDl3Wlc1VWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0F1WkdWc1lYa29JRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbWx1Wm05UGNHVnVWR2x0WlNBdklEUWdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJOWVhSb0xsQkpYSEpjYmlBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWFXNW1iMDl3Wlc1VWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTV5WldOdmNtUllVRzl6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJHYkdsd2NHVmtXU0FySURVd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNk9pQjBhR2x6TG1GaWMyOXNkWFJsVUc5emFYUnBiMjR1ZWx4eVhHNGdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbWx1Wm05UGNHVnVWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tWeHlYRzRnSUNBZ0lDQWdJQzV2YmtOdmJYQnNaWFJsS0NCa2IyNWxJQ2s3WEhKY2JseHlYRzRnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbkpsWTI5eVpGaFFiM01nS3lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxuZ2dLeUE0TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTVJQzBnTlRBc1hISmNiaUFnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzVtYkdsd1FtRmphMUpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnWkc5dVpTQXNJRzV2UTJGdFpYSmhWSGRsWlc0Z0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjBhR2x6TG5OMFlYUmxJRDA5UFNBblpteHBjSEJsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtUmxiR0Y1S0NCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdMeUF5SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJDWVhObFdWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXBibVp2VDNCbGJsUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0x5QXlJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWIyNURiMjF3YkdWMFpTZ2daRzl1WlNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JVzV2UTJGdFpYSmhWSGRsWlc0cElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1a1pXeGhlU2dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11YVc1bWIwOXdaVzVVYVcxbElDOGdNaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuSmxZMjl5WkZoUWIzTXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dOelVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1sdVptOVBjR1Z1VkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1eVpXTnZjbVJZVUc5eklDc2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRUpCVTBVZ1RVVlVTRTlFVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNTJZWElnWlhoMFpXNWtJRDBnWm5WdVkzUnBiMjRnS0NCa1pXWmhkV3gwY3l3Z2IzQjBhVzl1Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0JtYjNJZ0tDQjJZWElnYTJWNUlHbHVJRzl3ZEdsdmJuTWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tDQnZjSFJwYjI1ekxDQnJaWGtnS1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUnpXeUJyWlhrZ1hTQTlJRzl3ZEdsdmJuTmJJR3RsZVNCZE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHUmxabUYxYkhSek8xeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHRnVhVzFoZEdVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JrYjFKbGJtUmxjaUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtDQmhibWx0WVhSbElDazdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2IzQjBhVzl1Y3k1a1pXSjFaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZWFJ6TG5Wd1pHRjBaU2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnY21WdVpHVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJRlJYUlVWT0xuVndaR0YwWlNncE8xeHlYRzRnSUNBZ2RYQmtZWFJsVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHOXdkR2x2Ym5NdVkyRnRaWEpoVFc5MWMyVk5iM1psSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMFlYSm5aWFJEWVcxbGNtRlFiM011ZUNBOUlDZ2diVzkxYzJVdWVDQXZJR05oYm5aaGMxZHBaSFJvSUMwZ01DNDFJQ2tnS2lBd0xqSTFPeUF2THlCcGJuWmxjbk5sSUdGNGFYTS9YSEpjYmlBZ0lDQWdJQ0FnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmtnUFNBb0lHMXZkWE5sTG5rZ0x5QmpZVzUyWVhOWGFXUjBhQ0F0SURBdU5TQXBJQ29nTUM0eU5UdGNjbHh1SUNBZ0lDQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeUxuSnZkR0YwYVc5dUxua2dLejBnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkxYzJWTmIzWmxVM0JsWldSWklDb2dLQ0IwWVhKblpYUkRZVzFsY21GUWIzTXVlQ0F0SUhKdmIzUkRiMjUwWVdsdVpYSXVjbTkwWVhScGIyNHVlU0FwTzF4eVhHNGdJQ0FnSUNBZ0lISnZiM1JEYjI1MFlXbHVaWEl1Y205MFlYUnBiMjR1ZWlBclBTQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GTmIzVnpaVTF2ZG1WVGNHVmxaRm9nS2lBb0lIUmhjbWRsZEVOaGJXVnlZVkJ2Y3k1NUlDMGdjbTl2ZEVOdmJuUmhhVzVsY2k1eWIzUmhkR2x2Ymk1NklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVM1c2IyOXJRWFFvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYjNCMGFXOXVjeTV3YjNOMGNISnZZMlZ6YzJsdVp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMk5sYm1VdWIzWmxjbkpwWkdWTllYUmxjbWxoYkNBOUlHUmxjSFJvVFdGMFpYSnBZV3c3WEhKY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5S0NCelkyVnVaU3dnWTJGdFpYSmhMQ0JrWlhCMGFGUmhjbWRsZENBcE8xeHlYRzRnSUNBZ0lDQWdJSE5qWlc1bExtOTJaWEp5YVdSbFRXRjBaWEpwWVd3Z1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lHTnZiWEJ2YzJWeUxuSmxibVJsY2lncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxibVJsY21WeUxuSmxibVJsY2lnZ2MyTmxibVVzSUdOaGJXVnlZU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmk4cVhISmNiaUFxSUV4dllXUnBibWNnYldWMGFHOWtjMXh5WEc0Z0tpOWNjbHh1ZG1GeUlIVnViRzloWkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2c3SUdrckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG1SaGRHRWdQU0J1ZFd4c08xeHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1elpYUlZibUZqZEdsMlpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnNiMkZrWldSU1pXTnZjbVJ6SUQwZ01EdGNjbHh1SUNBZ0lISmxZMjl5WkhORVlYUmhUR2x6ZENBOUlGdGRPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1MllYSWdiRzloWkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0lISmxZMjl5WkhORVlYUmhMQ0J6YUhWbVpteGxRbVZtYjNKbFRHOWhaR2x1Wnl3Z1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDQjBjblZsSUNrN1hISmNibHh5WEc0Z0lDQWdjMmh2ZDB4dllXUnBibWNvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JzYjJGa1pXUlNaV052Y21SeklENGdNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnViRzloWkZKbFkyOXlaSE1vS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lITm9kV1ptYkdWQ1pXWnZjbVZNYjJGa2FXNW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzBSaGRHRWdQU0J6YUhWbVpteGxLQ0J5WldOdmNtUnpSR0YwWVNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9JSFpoY2lCcElEMGdNRHNnYVNBOElISmxZMjl5WkhNdWJHVnVaM1JvSUNZbUlHa2dQQ0J5WldOdmNtUnpSR0YwWVM1c1pXNW5kR2c3SUdrckt5QXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzVrWVhSaElEMGdjbVZqYjNKa2MwUmhkR0ZiSUdrZ1hUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbk5sZEVGamRHbDJaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJwSUYwdWJXVnphQzV0WVhSbGNtbGhiQzV0WVhSbGNtbGhiSE1nUFNCblpYUlNaV052Y21STllYUmxjbWxoYkNnZ2NtVmpiM0prYzBSaGRHRmJJR2tnWFM1amIzWmxjaXdnY21WamIzSmtjMFJoZEdGYklHa2dYUzVvWVhOVGJHVmxkbVVnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2THlCM2FIa2dQejljY2x4dUlDQWdJQ0FnSUNBdkx5QnNiMkZrWldSU1pXTnZjbVJ6SUQwZ2NtVmpiM0prYzBSaGRHRXViR1Z1WjNSb0lEd2djbVZqYjNKa2N5NXNaVzVuZEdnZ1B5QnlaV052Y21SelJHRjBZUzVzWlc1bmRHZ2dPaUJ5WldOdmNtUnpMbXhsYm1kMGFEdGNjbHh1SUNBZ0lDQWdJQ0JzYjJGa1pXUlNaV052Y21SeklEMGdjbVZqYjNKa2N5NXNaVzVuZEdnN1hISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2MwUmhkR0ZNYVhOMElEMGdjbVZqYjNKa2MwUmhkR0U3WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhR2xrWlV4dllXUnBibWNvSUd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXViMjVNYjJGa2FXNW5SVzVrS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzl1WlNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0F5TURBd0lDazdYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYzJoMVptWnNaVkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhOb2RXWm1iR1ZrVW1WamIzSmtjeUE5SUhKbFkyOXlaSE5FWVhSaFRHbHpkRHRjY2x4dUlDQWdJSE5vZFdabWJHVmtVbVZqYjNKa2N5QTlJSE5vZFdabWJHVW9JSE5vZFdabWJHVmtVbVZqYjNKa2N5QXBPMXh5WEc0Z0lDQWdiRzloWkZKbFkyOXlaSE1vSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZKRlEwOVNSRk1nVTBWTVJVTlVTVTlPSUUxRlZFaFBSRk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiblpoY2lCelpXeGxZM1JTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdsa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2R2Y0dWdVpXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnSVQwOUlDZHZjR1Z1YVc1bkp5QW1KaUJwYm1adlVHRnVaV3hUZEdGMFpTQWhQVDBnSjJOc2IzTnBibWNuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdsa08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJtYkdsd1UyVnNaV04wWldSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1hV3hzU1c1bWIxQmhibVZzS0NCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkSUNrN1hISmNiaUFnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5iM0JsYm1sdVp5YzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVpteHBjRkpsWTI5eVpDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBbmIzQmxibVZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6TG05dVNXNW1iMUJoYm1Wc1QzQmxibVZrS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdaaFpHVkpiaWdnYVc1bWIwTnZiblJoYVc1bGNrVnNaVzFsYm5Rc0lHOXdkR2x2Ym5NdWFXNW1iMUJoYm1Wc1QzQmhZMmwwZVNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUxDQXpNREFnS1R0Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0dadmNtTmxLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaaFpHVlBkWFFvSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuWTJ4dmMybHVaeWM3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVabXhwY0VKaFkydFNaV052Y21Rb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsdVptOVFZVzVsYkZOMFlYUmxJRDBnSjJOc2IzTmxaQ2M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXViMjVKYm1adlVHRnVaV3hEYkc5elpXUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU3dnWm05eVkyVWdLVHRjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUIxY0dSaGRHVlRhRzkzYmxKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5ZMnh2YzJWa0p5QW1KaUJ6YUc5M2JsSmxZMjl5WkNBaFBTQnpaV3hsWTNSbFpGSmxZMjl5WkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWduZFhCa1lYUmxVMmh2ZDI1U1pXTnZjbVF1TGljcE8xeHlYRzRnSUNBZ0lDQWdJSE5vYjNkdVVtVmpiM0prSUQwZ2MyVnNaV04wWldSU1pXTnZjbVE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJ5WldOdmNtUkpaQ0E5SURBN0lISmxZMjl5WkVsa0lEd2diRzloWkdWa1VtVmpiM0prY3pzZ2NtVmpiM0prU1dRckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2djMlZzWldOMFpXUlNaV052Y21RZ1BUMGdMVEVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnY21WamIzSmtTV1FnWFM1d2RYTm9VbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NCeVpXTnZjbVJKWkNBK0lITmxiR1ZqZEdWa1VtVmpiM0prSUNZbVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SSlpDQStJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVZM0poZEdWSlpDQXFJRzl3ZEdsdmJuTXVjbVZqYjNKa2MxQmxja055WVhSbElDWW1YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkpaQ0E4SUNnZ2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFM1amNtRjBaVWxrSUNvZ2IzQjBhVzl1Y3k1eVpXTnZjbVJ6VUdWeVEzSmhkR1VnS1NBcklHOXdkR2x2Ym5NdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhKbFkyOXlaRWxrSUYwdWNIVnNiRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ2NtVmpiM0prU1dRZ1BUMGdjMlZzWldOMFpXUlNaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2NtVmpiM0prU1dRZ1hTNXphRzkzVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1Y0hWemFGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCeVpYTmxkRk5vYjNkdVVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDQm1iM0pqWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QW1KaUFoWm05eVkyVWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyOXdaVzVwYm1jbklDWW1JR2x1Wm05UVlXNWxiRk4wWVhSbElDRTlQU0FuWTJ4dmMybHVaeWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2R2Y0dWdVpXUW5JQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tIUnlkV1VwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNBdE1UdGNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJoY21kbGRDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVkR0Z5WjJWMFFtRnpaVkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NTBZWEpuWlhSQ1lYTmxVRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuUmhjbWRsZEVKaGMyVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVSmhjMlZRYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbmtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GQ1lYTmxVRzl6YVhScGIyNHVlbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2MyVnNaV04wVUhKbGRsSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCelpXeGxZM1JTWldOdmNtUW9aMlYwVUhKbGRrRjJZV2xzWVdKc1pWSmxZMjl5WkNoelpXeGxZM1JsWkZKbFkyOXlaQ2twTzF4eVhHNGdJQ0FnWEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYzJWc1pXTjBUbVY0ZEZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0J6Wld4bFkzUlNaV052Y21Rb1oyVjBUbVY0ZEVGMllXbHNZV0pzWlZKbFkyOXlaQ2h6Wld4bFkzUmxaRkpsWTI5eVpDa3BPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCblpYUlFjbVYyUVhaaGFXeGhZbXhsVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0daeWIyMVNaV052Y21RcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHWnliMjFTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRHdnYkc5aFpHVmtVbVZqYjNKa2N5QXRJREVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQm1jbTl0VW1WamIzSmtJQ3NnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdNRHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxZMjl5WkhOYklHWnliMjFTWldOdmNtUWdYUzVoWTNScGRtVWdQeUJtY205dFVtVmpiM0prSURvZ1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ2htY205dFVtVmpiM0prS1R0Y2NseHVJQ0FnSUZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdkbGRFNWxlSFJCZG1GcGJHRmliR1ZTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvWm5KdmJWSmxZMjl5WkNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1puSnZiVkpsWTI5eVpDQTlQU0F0TVNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJR3h2WVdSbFpGSmxZMjl5WkhNZ0xTQXhPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHWnliMjFTWldOdmNtUWdQaUF3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdabkp2YlZKbFkyOXlaQ0F0SURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJR3h2WVdSbFpGSmxZMjl5WkhNZ0xTQXhPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVmpiM0prYzFzZ1puSnZiVkpsWTI5eVpDQmRMbUZqZEdsMlpTQS9JR1p5YjIxU1pXTnZjbVFnT2lCblpYUk9aWGgwUVhaaGFXeGhZbXhsVW1WamIzSmtLR1p5YjIxU1pXTnZjbVFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnVZWFpwWjJGMFpWSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9JR1JwY21WamRHbHZiaUFwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JrYVhKbFkzUnBiMjRnUFQwOUlDZHdjbVYySnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRGQnlaWFpTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFNWxlSFJTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QW1KaUJ2Y0hScGIyNXpMbU5zYjNObFNXNW1iMUJoYm1Wc1QyNVRZM0p2Ykd3Z0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhOamNtOXNiRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvSUdKaGMyVlpMQ0J2YkdSRVpXeDBZU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnZiR1JFWld4MFlTQTlJQ0Z2YkdSRVpXeDBZU0I4ZkNCTllYUm9MbUZpY3lnZ2IyeGtSR1ZzZEdFZ0tTQStJREF1TlNBL0lEQXVOU0E2SUUxaGRHZ3VZV0p6S0NCdmJHUkVaV3gwWVNBcE8xeHlYRzRnSUNBZ2RtRnlJR2x1ZG1WeWMyVkVaV3gwWVNBOUlERWdMU0J2YkdSRVpXeDBZVHRjY2x4dUlDQWdJSFpoY2lCelkzSnZiR3hUY0dWbFpDQTlJR2x1ZG1WeWMyVkVaV3gwWVNBcUlHbHVkbVZ5YzJWRVpXeDBZU0FxSUdsdWRtVnljMlZFWld4MFlTQXFJRE13TUR0Y2NseHVYSEpjYmlBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6VkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCamJHRnpjMmxsTG1Ga1pDZ2djbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQ3dnSjJkeVlXSW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR1JsYkhSaElEMGdLQ0JpWVhObFdTQXRJRzF2ZFhObExua2dLU0F2SUdOaGJuWmhjMGhsYVdkb2REdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHUmxiSFJoSUQ0Z01DQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFRtVjRkRkpsWTI5eVpDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVRrVllWQ0JTUlVOUFVrUWdYQ0lnS3lCa1pXeDBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daR1ZzZEdFZ1BDQXdJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUlFjbVYyVW1WamIzSmtLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSlFVa1ZXSUZKRlEwOVNSQ0JjSWlBcklHUmxiSFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnYzJOeWIyeHNVbVZqYjNKa2N5Z2dZbUZ6WlZrc0lHUmxiSFJoSUNrN1hISmNiaUFnSUNCOUxDQnpZM0p2Ykd4VGNHVmxaQ0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1hV3hzU1c1bWIxQmhibVZzSUQwZ1puVnVZM1JwYjI0Z0tDQnlaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnlaV052Y21RdVpHRjBZUzUwYVhSc1pTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDNXBibTVsY2toVVRVd2dQU0J5WldOdmNtUXVaR0YwWVM1MGFYUnNaVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVF1WkdGMFlTNWhjblJwYzNRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MExtbHVibVZ5U0ZSTlRDQTlJSEpsWTI5eVpDNWtZWFJoTG1GeWRHbHpkRHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVF1WkdGMFlTNWpiM1psY2lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOTJaWEpKYm1adlJXeGxiV1Z1ZEM1emRIbHNaUzVpWVdOclozSnZkVzVrU1cxaFoyVWdQU0FuZFhKc0tDY2dLeUJ5WldOdmNtUXVaR0YwWVM1amIzWmxjaUFySUNjcEp6dGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFVldSVTVVVXlCSVFVNUVURWxPUnlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2IyNU5iM1Z6WlUxdmRtVkZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYlY5d2IzTjRJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUdWZmNHOXplQ0E5SURBc1hISmNiaUFnSUNBZ0lDQWdaVjl3YjNONUlEMGdNQ3hjY2x4dUlDQWdJQ0FnSUNCdlltb2dQU0IwYUdsek8xeHlYRzVjY2x4dUlDQWdJQzh2WjJWMElHMXZkWE5sSUhCdmMybDBhVzl1SUc5dUlHUnZZM1Z0Wlc1MElHTnliM056WW5KdmQzTmxjbHh5WEc0Z0lDQWdhV1lnS0NBaFpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaU0E5SUhkcGJtUnZkeTVsZG1WdWREdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JsTG5CaFoyVllJSHg4SUdVdWNHRm5aVmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdWNHRm5aVmc3WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNXdZV2RsV1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHVXVZMnhwWlc1MFdDQjhmQ0JsTG1Oc2FXVnVkRmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdVkyeHBaVzUwV0NBcklHUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNUR1ZtZENBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeE1aV1owTzF4eVhHNGdJQ0FnSUNBZ0lHMWZjRzl6ZVNBOUlHVXVZMnhwWlc1MFdTQXJJR1J2WTNWdFpXNTBMbUp2WkhrdWMyTnliMnhzVkc5d0lDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRlJ2Y0R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdjR0Z5Wlc1MElHVnNaVzFsYm5RZ2NHOXphWFJwYjI0Z2FXNGdaRzlqZFcxbGJuUmNjbHh1SUNBZ0lHbG1JQ2dnYjJKcUxtOW1abk5sZEZCaGNtVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaVjl3YjNONElDczlJRzlpYWk1dlptWnpaWFJNWldaME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbFgzQnZjM2tnS3owZ2IySnFMbTltWm5ObGRGUnZjRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9JRzlpYWlBOUlHOWlhaTV2Wm1aelpYUlFZWEpsYm5RZ0tUc2dMeThnYW5Ob2FXNTBJR2xuYm05eVpUcHNhVzVsWEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2SUcxdmRYTmxJSEJ2YzJsMGFXOXVJRzFwYm5WeklHVnNiU0J3YjNOcGRHbHZiaUJwY3lCdGIzVnpaWEJ2YzJsMGFXOXVJSEpsYkdGMGFYWmxJSFJ2SUdWc1pXMWxiblE2WEhKY2JpQWdJQ0J0YjNWelpTNTRJRDBnYlY5d2IzTjRJQzBnWlY5d2IzTjRPMXh5WEc0Z0lDQWdiVzkxYzJVdWVTQTlJRzFmY0c5emVTQXRJR1ZmY0c5emVUdGNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZibE5qY205c2JFVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIZG9aV1ZzUkdseVpXTjBhVzl1S0NCbElDa2dQQ0F3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVlYWnBaMkYwWlZKbFkyOXlaSE1vSUNkd2NtVjJKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1aGRtbG5ZWFJsVW1WamIzSmtjeWdnSjI1bGVIUW5JQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCdmJrTnNhV05yUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUcxdmRYTmxSRzkzYmxCdmN5QXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxZM1J2Y2xCdmN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nS0NBb0lDZ2diVzkxYzJWRWIzZHVVRzl6TG5nZ0xTQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbTltWm5ObGRFeGxablFnS1NBdklDZ2djbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzUzYVdSMGFDQXBJQ2tnS2lBeUlDMGdNU0FwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lBb0lDMG9JQ2dnYlc5MWMyVkViM2R1VUc5ekxua2dMU0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG05bVpuTmxkRlJ2Y0NBcElDOGdLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1obGFXZG9kQ0FwSUNrZ0tpQXlJQ3NnTVNBcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNk9pQXdMalZjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkbVZqZEc5eUlEMGdibVYzSUZSSVVrVkZMbFpsWTNSdmNqTW9JSFpsWTNSdmNsQnZjeTU0TENCMlpXTjBiM0pRYjNNdWVTd2dkbVZqZEc5eVVHOXpMbm9nS1R0Y2NseHVJQ0FnSUNBZ0lDQjJaV04wYjNJdWRXNXdjbTlxWldOMEtDQmpZVzFsY21FZ0tUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2NtRjVZMkZ6ZEdWeUlEMGdibVYzSUZSSVVrVkZMbEpoZVdOaGMzUmxjaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVMQ0IyWldOMGIzSXVjM1ZpS0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1M1dWIzSnRZV3hwZW1Vb0tTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnBiblJsY25ObFkzUnpJRDBnY21GNVkyRnpkR1Z5TG1sdWRHVnljMlZqZEU5aWFtVmpkSE1vSUdOeVlYUmxjME52Ym5SaGFXNWxjaTVqYUdsc1pISmxiaXdnZEhKMVpTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCcGJuUmxjbk5sWTNRZ2MyOXRaWFJvYVc1blhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCcGJuUmxjbk5sWTNSekxteGxibWQwYUNBK0lEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZMnhwWTJ0bFpGSmxZMjl5WkR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWRsZENCMGFHVWdabWx5YzNRZ2RtbHphV0pzWlNCeVpXTnZjbVFnYVc1MFpYSnpaV04wWldSY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2FXNTBaWEp6WldOMGN5NXNaVzVuZEdnN0lHa3JLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQnBiblJsY21ObGNIUWdZU0J0WlhOb0lIZG9hV05vSUdseklHNXZkQ0JoSUhKbFkyOXlaQ3dnWW5KbFlXdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ2RIbHdaVzltS0dsdWRHVnljMlZqZEhOYklHa2dYUzV2WW1wbFkzUXVjbVZqYjNKa1NXUXBJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1MmFYTnBZbXhsSUNZbUlHbHVkR1Z5YzJWamRITmJJR2tnWFM1dlltcGxZM1F1Y21WamIzSmtTV1FnUGowZ01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4cFkydGxaRkpsWTI5eVpDQTlJSEpsWTI5eVpITmJJR2x1ZEdWeWMyVmpkSE5iSUdrZ1hTNXZZbXBsWTNRdWNtVmpiM0prU1dRZ1hUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaGxjbVVnYVhNZ2IyNWxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnWTJ4cFkydGxaRkpsWTI5eVpDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhObGJHVmpkR1ZrVW1WamIzSmtJRDA5UFNCamJHbGphMlZrVW1WamIzSmtMbWxrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvSUdOc2FXTnJaV1JTWldOdmNtUXVhV1FnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCYkd3Z2FXNTBaWEp6WldOMFpXUWdjbVZqYjNKa2N5QmhjbVVnYm05MElIWnBjMmxpYkdWelhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklFNXZJSEpsWTI5eVpDQm9ZWE1nWW1WbGJpQnBiblJsY25ObFkzUmxaRnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYjI1TmIzVnpaVVJ2ZDI1RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCamJHVmhja2x1ZEdWeWRtRnNLQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6S0NCdGIzVnpaUzU1SUNrN1hISmNiaUFnSUNBZ0lDQWdiVzkxYzJWRWIzZHVVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQnRiM1Z6WlM1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQnRiM1Z6WlM1NVhISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnYjNCMGFXOXVjeTVqYkc5elpVbHVabTlRWVc1bGJFOXVRMnhwWTJzZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdiMjVOYjNWelpWVndSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdZMnhsWVhKSmJuUmxjblpoYkNnZ2MyTnliMnhzVW1WamIzSmtjMVJwYldWdmRYUWdLVHRjY2x4dUlDQWdJR05zWVhOemFXVXVjbVZ0YjNabEtDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMQ0FuWjNKaFlpY2dLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR052YjNKa2MwVnhkV0ZzYzBGd2NISnZlQ2dnYlc5MWMyVkViM2R1VUc5ekxDQnRiM1Z6WlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVozSmhZbE5sYm5OcGRHbDJhWFI1SUNrZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHOXVRMnhwWTJ0RmRtVnVkQ2dnYlc5MWMyVkViM2R1VUc5eklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZia3RsZVVSdmQyNUZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdVdWEyVjVRMjlrWlNBOVBUMGdNemNnZkh3Z1pTNXJaWGxEYjJSbElEMDlQU0F6T0NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtRjJhV2RoZEdWU1pXTnZjbVJ6S0NBbmJtVjRkQ2NnS1R0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JsTG10bGVVTnZaR1VnUFQwOUlETTVJSHg4SUdVdWEyVjVRMjlrWlNBOVBUMGdOREFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1aGRtbG5ZWFJsVW1WamIzSmtjeWdnSjNCeVpYWW5JQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVWMmx1Wkc5M1VtVnphWHBsUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJGc1kzVnNZWFJsUTJGdWRtRnpVMmw2WlNncE8xeHlYRzRnSUNBZ2MyVjBRMkZ1ZG1GelJHbHRaVzV6YVc5dWN5Z3BPMXh5WEc1Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRGTnBlbVVvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzVoYzNCbFkzUWdQU0JqWVc1MllYTlhhV1IwYUNBdklHTmhiblpoYzBobGFXZG9kRHRjY2x4dUlDQWdJR05oYldWeVlTNTFjR1JoZEdWUWNtOXFaV04wYVc5dVRXRjBjbWw0S0NrN1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SRVpYQjBhQzUyWVd4MVpTQTlJR1JsY0hSb1ZHRnlaMlYwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuTnBlbVV1ZG1Gc2RXVXVjMlYwS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkR1Y0ZEdWc0xuWmhiSFZsTG5ObGRDZ2dNUzR3SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREV1TUNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUmxoQlFTNTFibWxtYjNKdGN5NXlaWE52YkhWMGFXOXVMblpoYkhWbExuTmxkQ2dnTVNBdklHTmhiblpoYzFkcFpIUm9MQ0F4SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJQ0FnVlVrZ1RVVlVTRTlFVXlBZ0lDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1ZG1GeUlITm9iM2RNYjJGa2FXNW5JRDBnWm5WdVkzUnBiMjRnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHWmhaR1ZKYmlnZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblFzSURFc0lHUnZibVVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdhR2xrWlV4dllXUnBibWNnUFNCbWRXNWpkR2x2YmlBb0lHUnZibVVnS1NCN1hISmNibHh5WEc0Z0lDQWdabUZrWlU5MWRDZ2diRzloWkdsdVowTnZiblJoYVc1bGNrVnNaVzFsYm5Rc0lHUnZibVVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JKVGtsVVNVRk1TVk5CVkVsUFRpQWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnBibWwwVTJObGJtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdMeThnYzJObGJtVXNJSEpsYm1SbGNtVnlMQ0JqWVcxbGNtRXNMaTR1WEhKY2JpQWdJQ0J6WTJWdVpTQTlJRzVsZHlCVVNGSkZSUzVUWTJWdVpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5SUQwZ2JtVjNJRlJJVWtWRkxsZGxZa2RNVW1WdVpHVnlaWElvSUh0Y2NseHVJQ0FnSUNBZ0lDQmhiblJwWVd4cFlYTTZJSFJ5ZFdWY2NseHVJQ0FnSUgwZ0tUdGNjbHh1SUNBZ0lISmxibVJsY21WeUxuTmxkRk5wZW1Vb0lHTmhiblpoYzFkcFpIUm9MQ0JqWVc1MllYTklaV2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0JqWVc1MllYTkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwSUNrN1hISmNiaUFnSUNCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1MExtbGtJRDBnWENKamIyNTBaWGgwWENJN1hISmNiaUFnSUNCeVpXNWtaWEpsY2k1elpYUkRiR1ZoY2tOdmJHOXlLQ0J2Y0hScGIyNXpMbUpoWTJ0bmNtOTFibVJEYjJ4dmNpd2dNU0FwTzF4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVNBOUlHNWxkeUJVU0ZKRlJTNVFaWEp6Y0dWamRHbDJaVU5oYldWeVlTZ2dORFVzSUdOaGJuWmhjMWRwWkhSb0lDOGdZMkZ1ZG1GelNHVnBaMmgwTENBd0xqRXNJREl3TURBd0lDazdYSEpjYmlBZ0lDQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZ2dQU0EwTlR0Y2NseHVJQ0FnSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnUFNBek1qdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1elpYUk1aVzV6S0NCallXMWxjbUV1Wm05allXeE1aVzVuZEdnc0lHTmhiV1Z5WVM1bWNtRnRaVk5wZW1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0IwWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNCMFlYSm5aWFFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2h1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb01UQXNJREV3TENBeE1Dd2dNU3dnTVN3Z01Ta3BPMXh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJSE5qWlc1bExtRmtaQ2gwWVhKblpYUXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaExteHZiMnRCZENnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNrN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhkdmIyUmZkR1Y0ZEhWeVpTQTlJRlJJVWtWRkxrbHRZV2RsVlhScGJITXViRzloWkZSbGVIUjFjbVVvSUc5d2RHbHZibk11WTNKaGRHVlVaWGgwZFhKbElDazdYSEpjYmlBZ0lDQjNiMjlrWDNSbGVIUjFjbVV1WVc1cGMyOTBjbTl3ZVNBOUlISmxibVJsY21WeUxtZGxkRTFoZUVGdWFYTnZkSEp2Y0hrb0tUdGNjbHh1SUNBZ0lIZHZiMlJmYldGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc0Z0lDQWdJQ0FnSUcxaGNEb2dkMjl2WkY5MFpYaDBkWEpsWEhKY2JpQWdJQ0I5SUNrN1hISmNibHh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2lBOUlHNWxkeUJVU0ZKRlJTNVBZbXBsWTNRelJDZ3BPMXh5WEc0Z0lDQWdZM0poZEdWelEyOXVkR0ZwYm1WeUlEMGdibVYzSUZSSVVrVkZMazlpYW1WamRETkVLQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUhKdmIzUkRiMjUwWVdsdVpYSWdLVHRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhJdVlXUmtLQ0JqY21GMFpYTkRiMjUwWVdsdVpYSWdLVHRjY2x4dVhISmNiaUFnSUNCcGJtbDBRM0poZEdWektDazdYSEpjYmlBZ0lDQnBibWwwVW1WamIzSmtjeWdwTzF4eVhHNWNjbHh1SUNBZ0lHeHBaMmgwSUQwZ2JtVjNJRlJJVWtWRkxsQnZhVzUwVEdsbmFIUW9JREI0UmtaR1JrWkdMQ0J2Y0hScGIyNXpMbXhwWjJoMFNXNTBaVzV6YVhSNUlDb2dNUzR4SUNrN1hISmNiaUFnSUNCc2FXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lETXdNQ3dnT0RBc0lEQWdLVHRjY2x4dUlDQWdJSE5qWlc1bExtRmtaQ2dnYkdsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNCc1pXWjBUR2xuYUhRZ1BTQnVaWGNnVkVoU1JVVXVVRzlwYm5STWFXZG9kQ2dnTUhoR1JrWkdSa1lzSUc5d2RHbHZibk11YkdsbmFIUkpiblJsYm5OcGRIa2dLaUF3TGpZZ0tUdGNjbHh1SUNBZ0lHeGxablJNYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSUMweE1EQXNJRE13TUN3Z01UQXdNQ0FwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCc1pXWjBUR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0J5YVdkb2RFeHBaMmgwSUQwZ2JtVjNJRlJJVWtWRkxsQnZhVzUwVEdsbmFIUW9JREI0UmtaR1JrWkdMQ0J2Y0hScGIyNXpMbXhwWjJoMFNXNTBaVzV6YVhSNUlDb2dNQzQySUNrN1hISmNiaUFnSUNCeWFXZG9kRXhwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTFRFd01Dd2dNekF3TENBdE1UQXdNQ0FwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCeWFXZG9kRXhwWjJoMElDazdYSEpjYmx4eVhHNGdJQ0FnYVc1cGRGQnZjM1JRY205alpYTnphVzVuS0NrN1hISmNibHh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjBSUFRVMXZkWE5sVTJOeWIyeHNKeXdnYjI1VFkzSnZiR3hGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpYZG9aV1ZzSnl3Z2IyNVRZM0p2Ykd4RmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkdGIzVnpaVzF2ZG1VbkxDQnZiazF2ZFhObFRXOTJaVVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMjF2ZFhObFpHOTNiaWNzSUc5dVRXOTFjMlZFYjNkdVJYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmJXOTFjMlYxY0Njc0lHOXVUVzkxYzJWVmNFVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNWNjbHh1SUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmEyVjVaRzkzYmljc0lHOXVTMlY1Ukc5M2JrVjJaVzUwTENCbVlXeHpaU0FwT3lCY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUc5d2RHbHZibk11ZFhCa1lYUmxRMkZ1ZG1GelUybDZaVTl1VjJsdVpHOTNVbVZ6YVhwbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0ozSmxjMmw2WlNjc0lHOXVWMmx1Wkc5M1VtVnphWHBsUlhabGJuUXNJR1poYkhObElDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHZJRVJQVFNCelpYUjFjRnh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuY21Wc1lYUnBkbVVuTzF4eVhHNGdJQ0FnWTJGdWRtRnpRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdYSEpjYmlBZ0lDQnBibVp2UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2RoWW5OdmJIVjBaU2M3WEhKY2JpQWdJQ0JzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdYSEpjYmx4eVhHNGdJQ0FnYzJWMFEyRnVkbUZ6UkdsdFpXNXphVzl1Y3lncE8xeHlYRzVjY2x4dUlDQWdJR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnZjSFJwYjI1ekxtUmxZblZuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcGJtbDBSR1ZpZFdjb0tUdGNjbHh1SUNBZ0lDQWdJQ0JwYm1sMFIxVkpLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dUlDQWdJR0Z1YVcxaGRHVW9LVHRjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFVHOXpkRkJ5YjJObGMzTnBibWNnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWkdWd2RHaFRhR0ZrWlhJZ1BTQlVTRkpGUlM1VGFHRmtaWEpNYVdJdVpHVndkR2hTUjBKQk8xeHlYRzRnSUNBZ1pHVndkR2hWYm1sbWIzSnRjeUE5SUZSSVVrVkZMbFZ1YVdadmNtMXpWWFJwYkhNdVkyeHZibVVvSUdSbGNIUm9VMmhoWkdWeUxuVnVhV1p2Y20xeklDazdYSEpjYmx4eVhHNGdJQ0FnWkdWd2RHaE5ZWFJsY21saGJDQTlJRzVsZHlCVVNGSkZSUzVUYUdGa1pYSk5ZWFJsY21saGJDZ2dlMXh5WEc0Z0lDQWdJQ0FnSUdaeVlXZHRaVzUwVTJoaFpHVnlPaUJrWlhCMGFGTm9ZV1JsY2k1bWNtRm5iV1Z1ZEZOb1lXUmxjaXhjY2x4dUlDQWdJQ0FnSUNCMlpYSjBaWGhUYUdGa1pYSTZJR1JsY0hSb1UyaGhaR1Z5TG5abGNuUmxlRk5vWVdSbGNpeGNjbHh1SUNBZ0lDQWdJQ0IxYm1sbWIzSnRjem9nWkdWd2RHaFZibWxtYjNKdGMxeHlYRzRnSUNBZ2ZTQXBPMXh5WEc0Z0lDQWdaR1Z3ZEdoTllYUmxjbWxoYkM1aWJHVnVaR2x1WnlBOUlGUklVa1ZGTGs1dlFteGxibVJwYm1jN1hISmNibHh5WEc0Z0lDQWdaR1Z3ZEdoVVlYSm5aWFFnUFNCdVpYY2dWRWhTUlVVdVYyVmlSMHhTWlc1a1pYSlVZWEpuWlhRb0lHTmhiblpoYzFkcFpIUm9MQ0JqWVc1MllYTklaV2xuYUhRc0lIdGNjbHh1SUNBZ0lDQWdJQ0J0YVc1R2FXeDBaWEk2SUZSSVVrVkZMazVsWVhKbGMzUkdhV3gwWlhJc1hISmNiaUFnSUNBZ0lDQWdiV0ZuUm1sc2RHVnlPaUJVU0ZKRlJTNU9aV0Z5WlhOMFJtbHNkR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lHWnZjbTFoZERvZ1ZFaFNSVVV1VWtkQ1FVWnZjbTFoZEZ4eVhHNGdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJR052YlhCdmMyVnlJRDBnYm1WM0lGUklVa1ZGTGtWbVptVmpkRU52YlhCdmMyVnlLQ0J5Wlc1a1pYSmxjaUFwTzF4eVhHNGdJQ0FnWTI5dGNHOXpaWEl1WVdSa1VHRnpjeWdnYm1WM0lGUklVa1ZGTGxKbGJtUmxjbEJoYzNNb0lITmpaVzVsTENCallXMWxjbUVnS1NBcE8xeHlYRzVjY2x4dVhISmNiaUFnSUNBdktqMDlQVDA5UFQwOVBUMGdJRVJsY0hSb0lHOW1JR1pwWld4a0lITm9ZV1JsY2lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnWkc5bUlEMGdibVYzSUZSSVVrVkZMbE5vWVdSbGNsQmhjM01vSUZSSVVrVkZMa1J2UmxOb1lXUmxjaUFwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUkVaWEIwYUM1MllXeDFaU0E5SUdSbGNIUm9WR0Z5WjJWME8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbk5wZW1VdWRtRnNkV1V1YzJWMEtDQmpZVzUyWVhOWGFXUjBhQ3dnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZEdWNGRHVnNMblpoYkhWbExuTmxkQ2dnTVM0d0lDOGdZMkZ1ZG1GelYybGtkR2dzSURFdU1DQXZJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJQzh2YldGclpTQnpkWEpsSUhSb1lYUWdkR2hsYzJVZ2RIZHZJSFpoYkhWbGN5QmhjbVVnZEdobElITmhiV1VnWm05eUlIbHZkWElnWTJGdFpYSmhMQ0J2ZEdobGNuZHBjMlVnWkdsemRHRnVZMlZ6SUhkcGJHd2dZbVVnZDNKdmJtY3VYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZW01bFlYSXVkbUZzZFdVZ1BTQmpZVzFsY21FdWJtVmhjanNnTHk5allXMWxjbUVnWTJ4cGNIQnBibWNnYzNSaGNuUmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTU2Wm1GeUxuWmhiSFZsSUQwZ1kyRnRaWEpoTG1aaGNqc2dMeTlqWVcxbGNtRWdZMnhwY0hCcGJtY2daVzVrWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1JHVndkR2d1ZG1Gc2RXVWdQU0ExT3lBdkwyWnZZMkZzSUdScGMzUmhibU5sSUhaaGJIVmxJR2x1SUcxbGRHVnljeXdnWW5WMElIbHZkU0J0WVhrZ2RYTmxJR0YxZEc5bWIyTjFjeUJ2Y0hScGIyNGdZbVZzYjNkY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1iMk5oYkV4bGJtZDBhQzUyWVd4MVpTQTlJR05oYldWeVlTNW1iMk5oYkV4bGJtZDBhRHNnTHk5bWIyTmhiQ0JzWlc1bmRHZ2dhVzRnYlcxY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1jM1J2Y0M1MllXeDFaU0E5SURndU1Ec2dMeTltTFhOMGIzQWdkbUZzZFdWY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXphRzkzUm05amRYTXVkbUZzZFdVZ1BTQm1ZV3h6WlRzZ0x5OXphRzkzSUdSbFluVm5JR1p2WTNWeklIQnZhVzUwSUdGdVpDQm1iMk5oYkNCeVlXNW5aU0FvYjNKaGJtZGxJRDBnWm05allXd2djRzlwYm5Rc0lHSnNkV1VnUFNCbWIyTmhiQ0J5WVc1blpTbGNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWJXRnVkV0ZzWkc5bUxuWmhiSFZsSUQwZ2RISjFaVHNnTHk5dFlXNTFZV3dnWkc5bUlHTmhiR04xYkdGMGFXOXVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Ym1SdlpuTjBZWEowTG5aaGJIVmxJRDBnTVRFN0lDOHZibVZoY2lCa2IyWWdZbXgxY2lCemRHRnlkRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG01a2IyWmthWE4wTG5aaGJIVmxJRDBnT0RBN0lDOHZibVZoY2lCa2IyWWdZbXgxY2lCbVlXeHNiMlptSUdScGMzUmhibU5sSUNBZ0lGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVprYjJaemRHRnlkQzUyWVd4MVpTQTlJREE3SUM4dlptRnlJR1J2WmlCaWJIVnlJSE4wWVhKMFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabVJ2Wm1ScGMzUXVkbUZzZFdVZ1BTQXhNREE3SUM4dlptRnlJR1J2WmlCaWJIVnlJR1poYkd4dlptWWdaR2x6ZEdGdVkyVWdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxrTnZReTUyWVd4MVpTQTlJREF1TURNN0lDOHZZMmx5WTJ4bElHOW1JR052Ym1aMWMybHZiaUJ6YVhwbElHbHVJRzF0SUNnek5XMXRJR1pwYkcwZ1BTQXdMakF6YlcwcElDQWdJRnh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTJhV2R1WlhSMGFXNW5MblpoYkhWbElEMGdabUZzYzJVN0lDOHZkWE5sSUc5d2RHbGpZV3dnYkdWdWN5QjJhV2R1WlhSMGFXNW5QMXh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NWhkWFJ2Wm05amRYTXVkbUZzZFdVZ1BTQjBjblZsT3lBdkwzVnpaU0JoZFhSdlptOWpkWE1nYVc0Z2MyaGhaR1Z5UHlCa2FYTmhZbXhsSUdsbUlIbHZkU0IxYzJVZ1pYaDBaWEp1WVd3Z1ptOWpZV3hFWlhCMGFDQjJZV3gxWlZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWnZZM1Z6TG5aaGJIVmxMbk5sZENnZ01DNHpOU3dnTUM0ek5TQXBPeUF2THlCaGRYUnZabTlqZFhNZ2NHOXBiblFnYjI0Z2MyTnlaV1Z1SUNnd0xqQXNNQzR3SUMwZ2JHVm1kQ0JzYjNkbGNpQmpiM0p1WlhJc0lERXVNQ3d4TGpBZ0xTQjFjSEJsY2lCeWFXZG9kQ2tnWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWJXRjRZbXgxY2k1MllXeDFaU0E5SUc5d2RHbHZibk11WW14MWNrRnRiM1Z1ZERzZ0x5OWpiR0Z0Y0NCMllXeDFaU0J2WmlCdFlYZ2dZbXgxY2lBb01DNHdJRDBnYm04Z1lteDFjaXd4TGpBZ1pHVm1ZWFZzZENrZ0lDQWdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUm9jbVZ6YUc5c1pDNTJZV3gxWlNBOUlEQTdJQzh2YUdsbmFHeHBaMmgwSUhSb2NtVnphRzlzWkR0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW5ZV2x1TG5aaGJIVmxJRDBnTURzZ0x5OW9hV2RvYkdsbmFIUWdaMkZwYmp0Y2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WW1saGN5NTJZV3gxWlNBOUlEQTdJQzh2WW05clpXZ2daV1JuWlNCaWFXRnpJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtY21sdVoyVXVkbUZzZFdVZ1BTQXdPeUF2TDJKdmEyVm9JR05vY205dFlYUnBZeUJoWW1WeWNtRjBhVzl1TDJaeWFXNW5hVzVuWEhKY2JseHlYRzRnSUNBZ1JsaEJRU0E5SUc1bGR5QlVTRkpGUlM1VGFHRmtaWEpRWVhOektDQlVTRkpGUlM1R1dFRkJVMmhoWkdWeUlDazdYSEpjYmx4eVhHNGdJQ0FnUmxoQlFTNTFibWxtYjNKdGN5NXlaWE52YkhWMGFXOXVMblpoYkhWbExuTmxkQ2dnTVNBdklHTmhiblpoYzFkcFpIUm9MQ0F4SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JHV0VGQkxuSmxibVJsY2xSdlUyTnlaV1Z1SUQwZ2RISjFaVHRjY2x4dVhISmNiaUFnSUNCamIyMXdiM05sY2k1aFpHUlFZWE56S0NCa2IyWWdLVHRjY2x4dUlDQWdJR052YlhCdmMyVnlMbUZrWkZCaGMzTW9JRVpZUVVFZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYVc1cGRFUmxZblZuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhOMFlYUnpJRDBnYm1WM0lGTjBZWFJ6S0NrN1hISmNiaUFnSUNCemRHRjBjeTVrYjIxRmJHVnRaVzUwTG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjJGaWMyOXNkWFJsSnp0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXViR1ZtZENBOUlGd2lNRndpTzF4eVhHNGdJQ0FnYzNSaGRITXVaRzl0Uld4bGJXVnVkQzV6ZEhsc1pTNTBiM0FnUFNCY0lqQmNJanRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tDQnpkR0YwY3k1a2IyMUZiR1Z0Wlc1MElDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHUmxZblZuSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dNakFzSURJd0xDQXlNQ3dnTVN3Z01Td2dNU0FwSUNrN1hISmNiaUFnSUNCa1pXSjFaeTV3YjNOcGRHbHZiaTV6WlhRb1hISmNiaUFnSUNBZ0lDQWdiR2xuYUhRdWNHOXphWFJwYjI0dWVDeGNjbHh1SUNBZ0lDQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNTVMRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUdSbFluVm5JQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHbHVhWFJIVlVrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR05oYldWeVlVWnZiR1JsY2l4Y2NseHVJQ0FnSUNBZ0lDQmpZVzFsY21GR2IyTmhiRXhsYm1kMGFDeGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWElzWEhKY2JpQWdJQ0FnSUNBZ1gyeGhjM1E3WEhKY2JseHlYRzRnSUNBZ1ozVnBJRDBnYm1WM0lHUmhkQzVIVlVrb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHOXdkR2x2Ym5NdWNHOXpkSEJ5YjJObGMzTnBibWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOaGJXVnlZVVp2YkdSbGNpQTlJR2QxYVM1aFpHUkdiMnhrWlhJb0lDZERZVzFsY21FbklDazdYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlqWVd4TVpXNW5kR2dnUFNCallXMWxjbUZHYjJ4a1pYSXVZV1JrS0NCallXMWxjbUVzSUNkbWIyTmhiRXhsYm1kMGFDY3NJREk0TENBeU1EQWdLUzV1WVcxbEtDQW5SbTlqWVd3Z1RHVnVaM1JvSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR05oYldWeVlVWnZZMkZzVEdWdVozUm9MbTl1UTJoaGJtZGxLQ0IxY0dSaGRHVkRZVzFsY21FZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUlEMGdaM1ZwTG1Ga1pFWnZiR1JsY2lnZ0owUmxjSFJvSUc5bUlFWnBaV3hrSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOaGJFUmxjSFJvTENBbmRtRnNkV1VuTENBd0xDQXhNQ0FwTG01aGJXVW9JQ2RHYjJOaGJDQkVaWEIwYUNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm5OMGIzQXNJQ2QyWVd4MVpTY3NJREFzSURJeUlDa3VibUZ0WlNnZ0owWWdVM1J2Y0NjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11YldGNFlteDFjaXdnSjNaaGJIVmxKeXdnTUN3Z015QXBMbTVoYldVb0lDZHRZWGdnWW14MWNpY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbk5vYjNkR2IyTjFjeXdnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RUYUc5M0lFWnZZMkZzSUZKaGJtZGxKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11YldGdWRXRnNaRzltTENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjAxaGJuVmhiQ0JFYjBZbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG01a2IyWnpkR0Z5ZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNakF3SUNrdWJtRnRaU2dnSjI1bFlYSWdjM1JoY25RbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG01a2IyWmthWE4wTENBbmRtRnNkV1VuTENBd0xDQXlNREFnS1M1dVlXMWxLQ0FuYm1WaGNpQm1ZV3hzYjJabUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bVpHOW1jM1JoY25Rc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkbVlYSWdjM1JoY25RbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1aa2IyWmthWE4wTENBbmRtRnNkV1VuTENBd0xDQXlNREFnS1M1dVlXMWxLQ0FuWm1GeUlHWmhiR3h2Wm1ZbklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NURiME1zSUNkMllXeDFaU2NzSURBc0lEQXVNU0FwTG5OMFpYQW9JREF1TURBeElDa3VibUZ0WlNnZ0oyTnBjbU5zWlNCdlppQmpiMjVtZFhOcGIyNG5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTUyYVdkdVpYUjBhVzVuTENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjFacFoyNWxkSFJwYm1jbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNXZkWFFzSUNkMllXeDFaU2NzSURBc0lESWdLUzV1WVcxbEtDQW5iM1YwWlhJZ1ltOXlaR1Z5SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTUyYVdkdWFXNHNJQ2QyWVd4MVpTY3NJREFzSURFZ0tTNXpkR1Z3S0NBd0xqQXhJQ2t1Ym1GdFpTZ2dKMmx1Ym1WeUlHSnZjbVJsY2ljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtWmhaR1VzSUNkMllXeDFaU2NzSURBc0lESXlJQ2t1Ym1GdFpTZ2dKMlpoWkdVZ1lYUW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVoZFhSdlptOWpkWE1zSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuUVhWMGIyWnZZM1Z6SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOMWN5NTJZV3gxWlN3Z0ozZ25MQ0F3TENBeElDa3VibUZ0WlNnZ0oyWnZZM1Z6SUhnbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1adlkzVnpMblpoYkhWbExDQW5lU2NzSURBc0lERWdLUzV1WVcxbEtDQW5abTlqZFhNZ2VTY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblJvY21WemFHOXNaQ3dnSjNaaGJIVmxKeXdnTUN3Z01TQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuZEdoeVpYTm9iMnhrSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVuWVdsdUxDQW5kbUZzZFdVbkxDQXdMQ0F4TURBZ0tTNXVZVzFsS0NBbloyRnBiaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1KcFlYTXNJQ2QyWVd4MVpTY3NJREFzSURRZ0tTNXpkR1Z3S0NBd0xqQXhJQ2t1Ym1GdFpTZ2dKMkpwWVhNbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1aeWFXNW5aU3dnSjNaaGJIVmxKeXdnTUN3Z05TQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuWm5KcGJtZGxKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym05cGMyVXNJQ2QyWVd4MVpTY2dLUzV1WVcxbEtDQW5WWE5sSUU1dmFYTmxKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXVZVzF2ZFc1MExDQW5kbUZzZFdVbkxDQXdMQ0F3TGpBd01TQXBMbk4wWlhBb0lEQXVNREF3TVNBcExtNWhiV1VvSUNka2FYUm9aWEluSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1a1pYQjBhR0pzZFhJc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblFteDFjaUJFWlhCMGFDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVpHSnphWHBsTENBbmRtRnNkV1VuTENBd0xDQTFJQ2t1Ym1GdFpTZ2dKMkpzZFhJZ2MybDZaU2NnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWjNWcExtTnNiM05sS0NrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSFZ3WkdGMFpVTmhiV1Z5WVNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCallXMWxjbUV1YzJWMFRHVnVjeWdnWTJGdFpYSmhMbVp2WTJGc1RHVnVaM1JvTENCallXMWxjbUV1Wm5KaGJXVlRhWHBsSUNrN1hISmNiaUFnSUNCallXMWxjbUV1ZFhCa1lYUmxVSEp2YW1WamRHbHZiazFoZEhKcGVDZ3BPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1adlkyRnNUR1Z1WjNSb0xuWmhiSFZsSUQwZ1kyRnRaWEpoTG1adlkyRnNUR1Z1WjNSb08xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFEzSmhkR1Z6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCamNtRjBaVWxrSUQwZ01Ec2dZM0poZEdWSlpDQThJRzl3ZEdsdmJuTXVibUpEY21GMFpYTTdJR055WVhSbFNXUXJLeUFwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWTNKaGRHVWdQU0JqY21WaGRHVkRjbUYwWlNnZ1kzSmhkR1ZKWkNBcE8xeHlYRzRnSUNBZ0lDQWdJR055WVhSbGMwTnZiblJoYVc1bGNpNWhaR1FvSUdOeVlYUmxJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVjRzl6YVhScGIyNHVlaUE5SUMwb0lERXhNQ0F0SUNnZ01URXdJQ29nYjNCMGFXOXVjeTV1WWtOeVlYUmxjeUFwSUNrZ0x5QXlPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCamNtVmhkR1ZEY21GMFpTQTlJR1oxYm1OMGFXOXVJQ2dnYVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZElEMGdibVYzSUZSSVVrVkZMazlpYW1WamRETkVLQ2s3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR0p2ZUY5aWIzUjBiMjBnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNREFzSURFd0xDQXhNREFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgySnZkSFJ2YlNBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZiR1ZtZENBOUlHNWxkeUJVU0ZKRlJTNU5aWE5vS0NCdVpYY2dWRWhTUlVVdVFtOTRSMlZ2YldWMGNua29JREl3TUN3Z01UQXNJRGd3SUNrc0lIZHZiMlJmYldGMFpYSnBZV3dnS1R0Y2NseHVJQ0FnSUdKdmVGOXNaV1owTG5CdmMybDBhVzl1TG5ObGRDZ2dNQ3dnTXpVc0lDMDFOU0FwTzF4eVhHNGdJQ0FnWW05NFgyeGxablF1Y205MFlYUnBiMjR1ZUNBOUlFMWhkR2d1VUVrZ0x5QXlPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJ4bFpuUWdLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2xrSUQwOVBTQXdJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJpYjNoZmNtbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNREFzSURFd0xDQTRNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0FnSUNBZ1ltOTRYM0pwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTUN3Z016VXNJRFUxSUNrN1hISmNiaUFnSUNBZ0lDQWdZbTk0WDNKcFoyaDBMbkp2ZEdGMGFXOXVMbmdnUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lDQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZmNtbG5hSFFnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjJZWElnWW05NFgySmhZMnNnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQTRNQ3dnTVRBc0lERXlNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0JpYjNoZlltRmpheTV3YjNOcGRHbHZiaTV6WlhRb0lDMHhNRFVzSURNMUxDQXdJQ2s3WEhKY2JpQWdJQ0JpYjNoZlltRmpheTV5YjNSaGRHbHZiaTU2SUQwZ1RXRjBhQzVRU1NBdklESTdYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmWW1GamF5QXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmliM2hmWm5KdmJuUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBME1Dd2dNVEFzSURFd01DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmWm5KdmJuUXVjRzl6YVhScGIyNHVjMlYwS0NBNU5Td2dNalVzSURBZ0tUdGNjbHh1SUNBZ0lHSnZlRjltY205dWRDNXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZabkp2Ym5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdWNHOXphWFJwYjI0dWVpQTlJQzB4TVRBZ0tpQnBaRHRjY2x4dUlDQWdJSEpsZEhWeWJpQmpjbUYwWlhOYklHbGtJRjA3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHbHVhWFJTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCamRYSnlaVzUwVW1WamIzSmtTV1FnUFNBd08xeHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHTnlZWFJsU1dRZ1BTQXdPeUJqY21GMFpVbGtJRHdnWTNKaGRHVnpMbXhsYm1kMGFEc2dZM0poZEdWSlpDc3JJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tDQjJZWElnY0c5eklEMGdNRHNnY0c5eklEd2diM0IwYVc5dWN5NXlaV052Y21SelVHVnlRM0poZEdVN0lIQnZjeXNySUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamNtVmhkR1ZTWldOdmNtUW9JR04xY25KbGJuUlNaV052Y21SSlpDd2dZM0poZEdWSlpDd2djRzl6SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJTWldOdmNtUkpaQ3NyTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQmpjbVZoZEdWU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlISmxZMjl5WkNBOUlHNWxkeUJTWldOdmNtUW9JR2xrTENCamNtRjBaVWxrTENCd2IzTWdLVHRjY2x4dUlDQWdJR055WVhSbGMxc2dZM0poZEdWSlpDQmRMbUZrWkNnZ2NtVmpiM0prTG0xbGMyZ2dLVHRjY2x4dUlDQWdJSEpsWTI5eVpITXVjSFZ6YUNnZ2NtVmpiM0prSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2RsZEZKbFkyOXlaRTFoZEdWeWFXRnNJRDBnWm5WdVkzUnBiMjRnS0NCemNtTXNJR2hoYzFOc1pXVjJaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYVcxbklEMGdibVYzSUVsdFlXZGxLQ2s3WEhKY2JpQWdJQ0JwYldjdVkzSnZjM05QY21sbmFXNGdQU0JjSWtGdWIyNTViVzkxYzF3aU8xeHlYRzRnSUNBZ2FXMW5Mbk55WXlBOUlITnlZeUEvSUhOeVl5QTZJQ2NuTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJwYldkWGFXUjBhQ0E5SURRd01DeGNjbHh1SUNBZ0lDQWdJQ0JwYldkSVpXbG5hSFFnUFNBME1EQXNYSEpjYmlBZ0lDQWdJQ0FnYldGd1EyRnVkbUZ6SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2dnSjJOaGJuWmhjeWNnS1R0Y2NseHVYSEpjYmlBZ0lDQnRZWEJEWVc1MllYTXVkMmxrZEdnZ1BTQnRZWEJEWVc1MllYTXVhR1ZwWjJoMElEMGdOREF3TzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUIwWlhoMGRYSmxJRDBnYm1WM0lGUklVa1ZGTGxSbGVIUjFjbVVvSUcxaGNFTmhiblpoY3lBcE8xeHlYRzRnSUNBZ2RHVjRkSFZ5WlM1dGFXNUdhV3gwWlhJZ1BTQlVTRkpGUlM1TWFXNWxZWEpHYVd4MFpYSTdYSEpjYmx4eVhHNGdJQ0FnYVcxbkxtOXViRzloWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCb1lYTlRiR1ZsZG1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2MyeGxaWFpsSUQwZ2JtVjNJRWx0WVdkbEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNaV1YyWlM1emNtTWdQU0J2Y0hScGIyNXpMbk5zWldWMlpVMWhjMnRVWlhoMGRYSmxPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJ4bFpYWmxMbTl1Ykc5aFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kzUjRJRDBnYldGd1EyRnVkbUZ6TG1kbGRFTnZiblJsZUhRb0lDY3laQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzUwY21GdWMyeGhkR1VvSUdsdFoxZHBaSFJvSUM4Z01pd2dhVzFuU0dWcFoyaDBJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5KdmRHRjBaU2dnVFdGMGFDNVFTU0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04wZUM1MGNtRnVjMnhoZEdVb0lDMXBiV2RYYVdSMGFDQXZJRElzSUMxcGJXZElaV2xuYUhRZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VaSEpoZDBsdFlXZGxLQ0JwYldjc0lERXpNQ3dnTVRNd0xDQXhNelVzSURFek5TQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExtUnlZWGRKYldGblpTZ2djMnhsWlhabExDQXdMQ0F3TENBME1EQXNJRFF3TUNBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZEhWeVpTNXVaV1ZrYzFWd1pHRjBaU0E5SUhSeWRXVTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjBlQ0E5SUcxaGNFTmhiblpoY3k1blpYUkRiMjUwWlhoMEtDQW5NbVFuSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMGVDNTBjbUZ1YzJ4aGRHVW9JR2x0WjFkcFpIUm9JQzhnTWl3Z2FXMW5TR1ZwWjJoMElDOGdNaUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWNtOTBZWFJsS0NCTllYUm9MbEJKSUM4Z01pQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NBdGFXMW5WMmxrZEdnZ0x5QXlMQ0F0YVcxblNHVnBaMmgwSUM4Z01pQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1WkhKaGQwbHRZV2RsS0NCcGJXY3NJREFzSURBc0lEUXdNQ3dnTkRBd0lDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmxlSFIxY21VdWJtVmxaSE5WY0dSaGRHVWdQU0IwY25WbE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOU8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCemJHVmxkbVZOWVhSbGNtbGhiQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9UR0Z0WW1WeWRFMWhkR1Z5YVdGc0tDQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCdmNIUnBiMjV6TG5Oc1pXVjJaVU52Ykc5eVhISmNibHh5WEc0Z0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ0WVhSbGNtbGhiSE1nUFNCYlhISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFRXRjBaWEpwWVd3c1hISmNiaUFnSUNBZ0lDQWdMeThnZEdWNGRIVnlaVnh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVTRkpGUlM1TlpYTm9UR0Z0WW1WeWRFMWhkR1Z5YVdGc0tDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBd2VHWm1abVptWml4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldGd09pQjBaWGgwZFhKbFhISmNiaUFnSUNBZ0lDQWdmU0FwTEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlUxaGRHVnlhV0ZzTEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlUxaGRHVnlhV0ZzWEhKY2JpQWdJQ0JkTzF4eVhHNGdJQ0FnY21WMGRYSnVJRzFoZEdWeWFXRnNjenRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdWVlJKVEZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2QyaGxaV3hFYVhOMFlXNWpaU0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ1pTQTlJR1YyWlc1ME8xeHlYRzRnSUNBZ2RtRnlJSGNnUFNCbExuZG9aV1ZzUkdWc2RHRXNYSEpjYmlBZ0lDQWdJQ0FnWkNBOUlHVXVaR1YwWVdsc08xeHlYRzRnSUNBZ2FXWWdLQ0JrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JSGNnS1NCeVpYUjFjbTRnZHlBdklHUWdMeUEwTUNBcUlHUWdQaUF3SUQ4Z01TQTZJQzB4T3lBdkx5QlBjR1Z5WVZ4eVhHNGdJQ0FnSUNBZ0lHVnNjMlVnY21WMGRYSnVJQzFrSUM4Z016c2dMeThnUm1seVpXWnZlRHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnY21WMGRYSnVJSGNnTHlBeE1qQTdJQzh2SUVsRkwxTmhabUZ5YVM5RGFISnZiV1ZjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUIzYUdWbGJFUnBjbVZqZEdsdmJpQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnWlNBOUlHVjJaVzUwTzF4eVhHNGdJQ0FnY21WMGRYSnVJQ2dnWlM1a1pYUmhhV3dnUENBd0lDa2dQeUF4SURvZ0tDQmxMbmRvWldWc1JHVnNkR0VnUGlBd0lDa2dQeUF4SURvZ0xURTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdOdmIzSmtjMFZ4ZFdGc2MwRndjSEp2ZUNBOUlHWjFibU4wYVc5dUlDZ2dZMjl2Y21ReExDQmpiMjl5WkRJc0lISmhibWRsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQW9JRTFoZEdndVlXSnpLQ0JqYjI5eVpERXVlQ0F0SUdOdmIzSmtNaTU0SUNrZ1BEMGdjbUZ1WjJVZ0tTQW1KaUFvSUUxaGRHZ3VZV0p6S0NCamIyOXlaREV1ZVNBdElHTnZiM0prTWk1NUlDa2dQRDBnY21GdVoyVWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1ptRmtaVTkxZENBOUlHWjFibU4wYVc5dUlDZ2daV3hsYldWdWRDd2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E4UFNBd0xqRWdLU0I3WEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5PMXh5WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQTlJREE3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JwYzBaMWJtTjBhVzl1S0NCa2IyNWxJQ2tnS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmJtVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0F0UFNBd0xqRTdYSEpjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1ZV1JsVDNWMEtDQmxiR1Z0Wlc1MExDQmtiMjVsSUNrN1hISmNiaUFnSUNBZ0lDQWdmU3dnTVRBZ0tUdGNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1ZV1JsU1c0Z1BTQm1kVzVqZEdsdmJpQW9JR1ZzWlcxbGJuUXNJR1poWkdWVWJ5d2daRzl1WlN3Z2IzQWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0FoWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlIeDhJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBbUppQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnUENCbVlXUmxWRzhnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2daV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwOUlDZHViMjVsSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXljN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5d0lEMGdNRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2dnSVdWc1pXMWxiblF1YzNSNWJHVXVaR2x6Y0d4aGVTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5d0lEMGdaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUh4OElERTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2IzQWdLejBnTUM0d016dGNjbHh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQnZjRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabUZrWlVsdUtDQmxiR1Z0Wlc1MExDQm1ZV1JsVkc4c0lHUnZibVVzSUc5d0lDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMHNJREV3SUNrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRDBnWm1Ga1pWUnZPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdselJuVnVZM1JwYjI0b0lHUnZibVVnS1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1J2Ym1Vb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHTmhiR04xYkdGMFpVTmhiblpoYzFOcGVtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdZMkZ1ZG1GelYybGtkR2dnUFNCdmNIUnBiMjV6TG1OaGJuWmhjMWRwWkhSb0lEOGdiM0IwYVc5dWN5NWpZVzUyWVhOWGFXUjBhQ0E2SUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtTnNhV1Z1ZEZkcFpIUm9PMXh5WEc0Z0lDQWdZMkZ1ZG1GelNHVnBaMmgwSUQwZ2IzQjBhVzl1Y3k1allXNTJZWE5JWldsbmFIUWdQeUJ2Y0hScGIyNXpMbU5oYm5aaGMwaGxhV2RvZENBNklISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbU5zYVdWdWRFaGxhV2RvZER0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjMlYwUTJGdWRtRnpSR2x0Wlc1emFXOXVjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0F2TDNKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1obGFXZG9kQ0FnSUNBZ1BTQmpZVzUyWVhOSVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc0Z0lDQWdZMkZ1ZG1GelEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzVvWldsbmFIUWdQU0JqWVc1MllYTklaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNGdJQ0FnYVc1bWIwTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1YUdWcFoyaDBJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVJQ0FnSUd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtaGxhV2RvZENBOUlHTmhiblpoYzBobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4eVhHNGdJQ0FnTHk5eWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1M2FXUjBhQ0FnSUNBZ1BTQmpZVzUyWVhOWGFXUjBhQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQmpZVzUyWVhORGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbmRwWkhSb0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc0Z0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVkMmxrZEdnZ1BTQmpZVzUyWVhOWGFXUjBhQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzUzYVdSMGFDQTlJR05oYm5aaGMxZHBaSFJvSUNzZ0ozQjRKenRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6YUhWbVpteGxLQ0IySUNrZ2V5QXZMeUJLYjI1aGN5QlNZVzl1YVNCVGIyRnlaWE1nVTJsc2RtRWdMU0JvZEhSd09pOHZhbk5tY205dGFHVnNiQzVqYjIwdllYSnlZWGt2YzJoMVptWnNaU0JiY21WMkxpQWpNVjFjY2x4dVhISmNiaUFnSUNCbWIzSWdLQ0IyWVhJZ2Fpd2dlQ3dnYVNBOUlIWXViR1Z1WjNSb095QnBPeUJxSUQwZ2NHRnljMlZKYm5Rb0lFMWhkR2d1Y21GdVpHOXRLQ2tnS2lCcElDa3NJSGdnUFNCMld5QXRMV2tnWFN3Z2Rsc2dhU0JkSUQwZ2Rsc2dhaUJkTENCMld5QnFJRjBnUFNCNElDazdYSEpjYmlBZ0lDQnlaWFIxY200Z2RqdGNjbHh1WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHpSblZ1WTNScGIyNG9JRzlpYWlBcElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhaUE5UFNBblpuVnVZM1JwYjI0bklIeDhJR1poYkhObE8xeHlYRzVjY2x4dWZWeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1JWaFFUMUpVVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQlFkV0pzYVdNZ1RXVjBhRzlrY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWxlSEJ2Y25SekxtbHVhWFFnUFNCbWRXNWpkR2x2YmlBb0lIQmhjbUZ0Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0J2Y0hScGIyNXpJRDBnWlhoMFpXNWtLQ0JrWldaaGRXeDBjeXdnY0dGeVlXMXpJQ2s3WEhKY2JpQWdJQ0F2THlCbVpXRjBkWEpsSUhSbGMzUmNjbHh1SUNBZ0lDOHZJRlJQUkU4NklIUnZJR1pwZUNBdElHbG1JQ2dnSVhOMWNIQnZjblJ6SUh4OElDRk5iMlJsY201cGVuSXVkMlZpWjJ3Z0tTQnlaWFIxY200N1hISmNiaUFnSUNCamIyNXpiMnhsTG14dlp5Z2dKMGx1YVhScFlXeHBlbWx1WnlCamNtRjBaV1JwWjJkbGNpNXFjeTR1TGljZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIZHBibVJ2ZHk1a1pYWnBZMlZRYVhobGJGSmhkR2x2SUNFOVBTQjFibVJsWm1sdVpXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J3Y2lBOUlIZHBibVJ2ZHk1a1pYWnBZMlZRYVhobGJGSmhkR2x2TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSd2NpQTlJREU3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUc5d2RHbHZibk11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNrbGtJQ2s3WEhKY2JpQWdJQ0JwWmlBb0lDRnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ2dKMk55WVhSbFpHbG5aMlZ5TG1weklDMGdTVzVwZENCbVlXbHNaV1FnT2lCallXNGdibTkwSUdacGJtUWdjbTl2ZENCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2diM0IwYVc5dWN5NWxiR1Z0Wlc1MGN5NWpZVzUyWVhORGIyNTBZV2x1WlhKSlpDQXBPMXh5WEc0Z0lDQWdhV1lnS0NBaFkyRnVkbUZ6UTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ2dKMk55WVhSbFpHbG5aMlZ5TG1weklDMGdTVzVwZENCbVlXbHNaV1FnT2lCallXNGdibTkwSUdacGJtUWdZMkZ1ZG1GeklHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2dnYjNCMGFXOXVjeTVsYkdWdFpXNTBjeTVzYjJGa2FXNW5RMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCc2IyRmthVzVuSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVc1bWIwTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnZ2IzQjBhVzl1Y3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0JwYm1adklHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2RHbDBiR1ZKYm1adlJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NCdmNIUnBiMjV6TG1Wc1pXMWxiblJ6TG5ScGRHeGxRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJWFJwZEd4bFNXNW1iMFZzWlcxbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0lDZGpjbUYwWldScFoyZGxjaTVxY3lBdElFbHVhWFFnWm1GcGJHVmtJRG9nWTJGdUlHNXZkQ0JtYVc1a0lISmxZMjl5WkNCMGFYUnNaU0JqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR0Z5ZEdsemRFbHVabTlGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRzl3ZEdsdmJuTXVaV3hsYldWdWRITXVZWEowYVhOMFEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCeVpXTnZjbVFnWVhKMGFYTjBJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdZMjkyWlhKSmJtWnZSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQnZjSFJwYjI1ekxtVnNaVzFsYm5SekxtTnZkbVZ5UTI5dWRHRnBibVZ5U1dRZ0tUdGNjbHh1SUNBZ0lHbG1JQ2dnSVdOdmRtVnlTVzVtYjBWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJR052ZG1WeUlHbHRZV2RsSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTmhiR04xYkdGMFpVTmhiblpoYzFOcGVtVW9LVHRjY2x4dVhISmNiaUFnSUNCcGJtbDBVMk5sYm1Vb0tUdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11YzJWc1pXTjBVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JwWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbGtJRHdnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVnpaWFJUYUc5M2JsSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsa0lENGdiRzloWkdWa1VtVmpiM0prY3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdsa08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdWMzUmhjblJTWlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdaRzlTWlc1a1pYSWdQU0IwY25WbE8xeHlYRzRnSUNBZ1lXNXBiV0YwWlNncE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdWMzUnZjRkpsYm1SbGNpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmtiMUpsYm1SbGNpQTlJR1poYkhObE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVpXNWhZbXhsVUc5emRIQnliMk5sYzNOcGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdiM0IwYVc5dWN5NXdiM04wY0hKdlkyVnpjMmx1WnlBOUlIUnlkV1U3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVrYVhOaFlteGxVRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2IzQjBhVzl1Y3k1d2IzTjBjSEp2WTJWemMybHVaeUE5SUdaaGJITmxPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFNBZ1VIVmliR2xqSUdkbGRIUmxjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUkRZVzUyWVhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUlNaV052Y21SelJHRjBZVXhwYzNRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5FWVhSaFRHbHpkRHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbWRsZEV4dllXUmxaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHeHZZV1JsWkZKbFkyOXlaSE03WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSVFpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdjbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQk5aWFJvYjJSeklHRmpZMlZ6YzI5eWN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVsZUhCdmNuUnpMbXh2WVdSU1pXTnZjbVJ6SUQwZ2JHOWhaRkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11ZFc1c2IyRmtVbVZqYjNKa2N5QTlJSFZ1Ykc5aFpGSmxZMjl5WkhNN1hISmNibVY0Y0c5eWRITXVjbVZ6WlhSVGFHOTNibEpsWTI5eVpDQTlJSEpsYzJWMFUyaHZkMjVTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJoMVptWnNaVkpsWTI5eVpITWdQU0J6YUhWbVpteGxVbVZqYjNKa2N6dGNjbHh1Wlhod2IzSjBjeTVtYkdsd1UyVnNaV04wWldSU1pXTnZjbVFnUFNCbWJHbHdVMlZzWldOMFpXUlNaV052Y21RN1hISmNibVY0Y0c5eWRITXVjMlZzWldOMFVISmxkbEpsWTI5eVpDQTlJSE5sYkdWamRGQnlaWFpTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJWc1pXTjBUbVY0ZEZKbFkyOXlaQ0E5SUhObGJHVmpkRTVsZUhSU1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdWMyaHZkMHh2WVdScGJtY2dQU0J6YUc5M1RHOWhaR2x1Wnp0Y2NseHVaWGh3YjNKMGN5NW9hV1JsVEc5aFpHbHVaeUE5SUdocFpHVk1iMkZrYVc1bk8xeHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCUVZVSk1TVU1nUVZCSklDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWlhod2IzSjBjenNpWFgwPSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKlxyXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkNvcHlTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbmRyZXdiZXJnIC8gaHR0cDovL2FuZHJld2JlcmcuY29tL1xyXG4gKlxyXG4gKiBEZXB0aCBvZiBGaWVsZFxyXG4gKiAtIHBvcnRlZCBmcm9tXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5Eb0ZTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwidERlcHRoXCI6ICAgICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwiem5lYXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInpmYXJcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMTAwMC4wIH0sXHJcblx0XHRcdFwic2l6ZVwiOiAgICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDUxMiwgNTEyICkgfSxcclxuXHRcdFx0XCJ0ZXh0ZWxcIjpcdFx0eyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMS81MTIsIDEvNTEyKX0sXHJcblx0XHRcdFwiZm9jYWxEZXB0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIwMC4wIH0sXHJcblx0XHRcdFwiZm9jYWxMZW5ndGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyOC4wIH0sXHJcblx0XHRcdFwiZnN0b3BcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuOCB9LFxyXG5cdFx0XHRcInNob3dGb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJtYW51YWxkb2ZcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwibmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuMCB9LFxyXG5cdFx0XHRcImZkb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcImZkb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAzLjAgfSxcclxuXHRcdFx0XCJDb0NcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMyB9LFxyXG5cdFx0XHRcInZpZ25ldHRpbmdcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwidmlnbm91dFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4zIH0sXHJcblx0XHRcdFwidmlnbmluXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcclxuXHRcdFx0XCJ2aWduZmFkZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjIuMCB9LFxyXG5cdFx0XHRcImF1dG9mb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJmb2N1c1wiOiAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKSB9LFxyXG5cdFx0XHRcIm1heGJsdXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInRocmVzaG9sZFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuOCB9LFxyXG5cdFx0XHRcImdhaW5cIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS43IH0sXHJcblx0XHRcdFwiYmlhc1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjUgfSxcclxuXHRcdFx0XCJmcmluZ2VcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNyB9LFxyXG5cdFx0XHRcIm5vaXNlXCI6XHRcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwibmFtb3VudFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMDAxIH0sXHJcblx0XHRcdFwiZGVwdGhibHVyXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcImRic2l6ZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4yNX1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcclxuXHRcdFx0XCIjZGVmaW5lIFBJICAzLjE0MTU5MjY1XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHQvL3VuaWZvcm0gdmFyaWFibGVzIGZyb20gZXh0ZXJuYWwgc2NyaXB0XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgc2l6ZTtcIiwgLy8gdGV4dHVyZSB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHRleGVsO1wiLCAvLyB0ZXh0ZWwgc2l6ZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsRGVwdGg7XCIsICAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnN0b3A7XCIsIC8vZi1zdG9wIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHNob3dGb2N1cztcIiwgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcblx0XHRcdC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6bmVhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpmYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly91c2VyIHZhcmlhYmxlcyBub3cgcGFzc2VkIGFzIHVuaWZvcm1zXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBtYW51YWxkb2Y7XCIsIC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZnN0YXJ0O1wiLCAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZkaXN0O1wiLCAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZnN0YXJ0O1wiLCAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZmRpc3Q7XCIsIC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBDb0M7XCIsLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSlcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHZpZ25ldHRpbmc7XCIsIC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbm91dDtcIiwgLy92aWduZXR0aW5nIG91dGVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmluO1wiLCAvL3ZpZ25ldHRpbmcgaW5uZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduZmFkZTtcIiwgLy9mLXN0b3BzIHRpbGwgdmlnbmV0ZSBmYWRlc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgYXV0b2ZvY3VzO1wiLCAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBmb2N1cztcIiwgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBtYXhibHVyO1wiLCAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHRocmVzaG9sZDtcIiwgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZ2FpbjtcIiwgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBiaWFzO1wiLCAvL2Jva2VoIGVkZ2UgYmlhc1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnJpbmdlO1wiLCAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBub2lzZTtcIiwgLy91c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuYW1vdW50O1wiLCAvL2RpdGhlciBhbW91bnRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGRlcHRoYmx1cjtcIiwgLy9ibHVyIHRoZSBkZXB0aCBidWZmZXI/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBkYnNpemU7XCIsIC8vZGVwdGhibHVyc2l6ZVxyXG5cclxuXHRcdFx0Ly8gc2FtcGxlcyBhbmQgcmluZ3MgbmVlZCB0byBiZSBjb25zdGFudHMuIG5vIGR5bmFtaWMgbG9vcCBjb3VudGVycyBpbiBPcGVuR0wgRVNcclxuXHRcdFx0Ly8gQ2FuIHNoYWRlciBiZSBicm9rZW4gaW50byAyIHBhc3M/IC4uLiBcclxuXHRcdFx0XCJpbnQgc2FtcGxlcyA9IDM7XCIsIC8vc2FtcGxlcyBvbiB0aGUgZmlyc3QgcmluZ1xyXG5cdFx0XHRcImNvbnN0IGludCByaW5ncyA9IDM7XCIsIC8vcmluZyBjb3VudFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0bmV4dCBwYXJ0IGlzIGV4cGVyaW1lbnRhbFxyXG5cdFx0XHRub3QgbG9va2luZyBnb29kIHdpdGggc21hbGwgc2FtcGxlIGFuZCByaW5nIGNvdW50XHJcblx0XHRcdGxvb2tzIG9rYXkgc3RhcnRpbmcgZnJvbSBzYW1wbGVzID0gNCwgcmluZ3MgPSA0XHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHRcImJvb2wgcGVudGFnb24gPSBmYWxzZTtcIiwgLy91c2UgcGVudGFnb24gYXMgYm9rZWggc2hhcGU/XHJcblx0XHRcdFwiZmxvYXQgZmVhdGhlciA9IDAuNDtcIiwgLy9wZW50YWdvbiBzaGFwZSBmZWF0aGVyXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8gUkdCQSBkZXB0aFxyXG5cclxuXHRcdFx0XCJmbG9hdCB1bnBhY2tEZXB0aCggY29uc3QgaW4gdmVjNCByZ2JhX2RlcHRoICkge1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbnN0IHZlYzQgYml0X3NoaWZ0ID0gdmVjNCggMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICksIDEuMCAvIDI1Ni4wLCAxLjAgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gZG90KCByZ2JhX2RlcHRoLCBiaXRfc2hpZnQgKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBkZXB0aDtcIixcclxuXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwiZmxvYXQgcGVudGEodmVjMiBjb29yZHMpXCIsIC8vcGVudGFnb25hbCBzaGFwZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IHNjYWxlID0gZmxvYXQocmluZ3MpIC0gMS4zO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMwID0gdmVjNCggMS4wLCAgICAgICAgIDAuMCwgICAgICAgICAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMxID0gdmVjNCggMC4zMDkwMTY5OTQsIDAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMyID0gdmVjNCgtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMzID0gdmVjNCgtMC44MDkwMTY5OTQsLTAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM0ID0gdmVjNCggMC4zMDkwMTY5OTQsLTAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM1ID0gdmVjNCggMC4wICAgICAgICAsMC4wICAgICAgICAgLCAxLjAsICAxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgIG9uZSA9IHZlYzQoIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgUCA9IHZlYzQoKGNvb3JkcyksdmVjMihzY2FsZSwgc2NhbGUpKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IGRpc3QgPSB2ZWM0KDAuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBpbm9yb3V0ID0gLTQuMDtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTMCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gZG90KCBQLCBIUzEgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueiA9IGRvdCggUCwgSFMyICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LncgPSBkb3QoIFAsIEhTMyApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZG90KCBkaXN0LCBvbmUgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTNCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gSFM1LncgLSBhYnMoIFAueiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkaXN0Lng7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKCBpbm9yb3V0LCAwLjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgYmRlcHRoKHZlYzIgY29vcmRzKSAvL2JsdXJyaW5nIGRlcHRoXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZCA9IDAuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGtlcm5lbFs5XTtcIixcclxuXHRcdFx0XHRcInZlYzIgb2Zmc2V0WzldO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgd2ggPSB2ZWMyKHRleGVsLngsIHRleGVsLnkpICogZGJzaXplO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFswXSA9IHZlYzIoLXdoLngsLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzFdID0gdmVjMiggMC4wLCAtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMl0gPSB2ZWMyKCB3aC54IC13aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbM10gPSB2ZWMyKC13aC54LCAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs0XSA9IHZlYzIoIDAuMCwgICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzVdID0gdmVjMiggd2gueCwgIDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzZdID0gdmVjMigtd2gueCwgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbN10gPSB2ZWMyKCAwLjAsICB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs4XSA9IHZlYzIoIHdoLngsIHdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImtlcm5lbFswXSA9IDEuMC8xNi4wOyAgIGtlcm5lbFsxXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFsyXSA9IDEuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzNdID0gMi4wLzE2LjA7ICAga2VybmVsWzRdID0gNC4wLzE2LjA7ICAga2VybmVsWzVdID0gMi4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbNl0gPSAxLjAvMTYuMDsgICBrZXJuZWxbN10gPSAyLjAvMTYuMDsgICBrZXJuZWxbOF0gPSAxLjAvMTYuMDtcIixcclxuXHJcblxyXG5cdFx0XHRcdFwiZm9yKCBpbnQgaT0wOyBpPDk7IGkrKyApXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHRtcCA9IHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsIGNvb3JkcyArIG9mZnNldFtpXSkpO1wiLFxyXG5cdFx0XHRcdFx0XCJkICs9IHRtcCAqIGtlcm5lbFtpXTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gZDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJ2ZWMzIGNvbG9yKHZlYzIgY29vcmRzLGZsb2F0IGJsdXIpXCIsIC8vcHJvY2Vzc2luZyB0aGUgc2FtcGxlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjAsMS4wKSp0ZXhlbCpmcmluZ2UqYmx1cikucjtcIixcclxuXHRcdFx0XHRcImNvbC5nID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoLTAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5nO1wiLFxyXG5cdFx0XHRcdFwiY29sLmIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuYjtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWNvZWZmID0gdmVjMygwLjI5OSwwLjU4NywwLjExNCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW0gPSBkb3QoY29sLnJnYiwgbHVtY29lZmYpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgdGhyZXNoID0gbWF4KChsdW0tdGhyZXNob2xkKSpnYWluLCAwLjApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbCttaXgodmVjMygwLjApLGNvbCx0aHJlc2gqYmx1cik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMyIHJhbmQodmVjMiBjb29yZCkgLy9nZW5lcmF0aW5nIG5vaXNlL3BhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VYID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuMjUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC43NSkpKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVkgPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC43NSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjI1KSkqMi4wLTEuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobm9pc2UpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWCA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVkgPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSoyLjApKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gdmVjMihub2lzZVgsbm9pc2VZKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzMgZGVidWdGb2N1cyh2ZWMzIGNvbCwgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZWRnZSA9IDAuMDAyKmRlcHRoOyAvL2Rpc3RhbmNlIGJhc2VkIGVkZ2Ugc21vb3RoaW5nXCIsXHJcblx0XHRcdFx0XCJmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsZWRnZSxibHVyKSwwLjAsMS4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMC1lZGdlLDEuMCxibHVyKSwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMS4wLDAuNSwwLjApLCgxLjAtbSkqMC42KTtcIixcclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygwLjAsMC41LDEuMCksKCgxLjAtZSktKDEuMC1tKSkqMC4yKTtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInJldHVybiAtemZhciAqIHpuZWFyIC8gKGRlcHRoICogKHpmYXIgLSB6bmVhcikgLSB6ZmFyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IHZpZ25ldHRlKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwwLjUpKTtcIixcclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKHZpZ25vdXQrKGZzdG9wL3ZpZ25mYWRlKSwgdmlnbmluKyhmc3RvcC92aWduZmFkZSksIGRpc3QpO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKGRpc3QsMC4wLDEuMCk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHQvL3NjZW5lIGRlcHRoIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCx2VXYpKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGRlcHRoYmx1cilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZGVwdGggPSBsaW5lYXJpemUoYmRlcHRoKHZVdikpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2ZvY2FsIHBsYW5lIGNhbGN1bGF0aW9uXCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoYXV0b2ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmRGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCxmb2N1cykpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9kb2YgYmx1ciBmYWN0b3IgY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBibHVyID0gMC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChtYW51YWxkb2YpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSBkZXB0aC1mRGVwdGg7XCIsIC8vZm9jYWwgcGxhbmVcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChhLWZkb2ZzdGFydCkvZmRvZmRpc3Q7XCIsIC8vZmFyIERvRlxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKC1hLW5kb2ZzdGFydCkvbmRvZmRpc3Q7XCIsIC8vbmVhciBEb2ZcclxuXHRcdFx0XHRcdFwiYmx1ciA9IChhPjAuMCk/YjpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgZiA9IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBkID0gZkRlcHRoKjEwMDAuMDtcIiwgLy9mb2NhbCBwbGFuZSBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBvID0gZGVwdGgqMTAwMC4wO1wiLCAvL2RlcHRoIGluIG1tXHJcblxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gKG8qZikvKG8tZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoZCpmKS8oZC1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9IChkLWYpLyhkKmZzdG9wKkNvQyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJibHVyID0gYWJzKGEtYikqYztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJibHVyID0gY2xhbXAoYmx1ciwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgcGF0dGVybiBmb3IgZGl0ZXJpbmdcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIG5vaXNlID0gcmFuZCh2VXYpKm5hbW91bnQqYmx1cjtcIixcclxuXHJcblx0XHRcdFx0Ly8gZ2V0dGluZyBibHVyIHggYW5kIHkgc3RlcCBmYWN0b3JcclxuXHJcblx0XHRcdFx0XCJmbG9hdCB3ID0gKDEuMC9zaXplLngpKmJsdXIqbWF4Ymx1citub2lzZS54O1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaCA9ICgxLjAvc2l6ZS55KSpibHVyKm1heGJsdXIrbm9pc2UueTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgZmluYWwgY29sb3JcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZihibHVyIDwgMC4wNSlcIiwgLy9zb21lIG9wdGltaXphdGlvbiB0aGluZ3lcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgcyA9IDEuMDtcIixcclxuXHJcblx0XHRcdFx0XHRcImZvciAoaW50IGkgPSAxOyBpIDw9IHJpbmdzOyBpICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XCJmbG9hdCByaW5nc2FtcGxlcyA9IGZsb2F0KGkgKiBzYW1wbGVzKTtcIixcclxuXHJcblx0XHRcdFx0XHRcdFwiaWYoaSA9PSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDMgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAyKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDYgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAzKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDkgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcImNvbCAvPSBzO1wiLCAvL2RpdmlkZSBieSBzYW1wbGUgY291bnRcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAoc2hvd0ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSBkZWJ1Z0ZvY3VzKGNvbCwgYmx1ciwgZGVwdGgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmICh2aWduZXR0aW5nKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgKj0gdmlnbmV0dGUoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IucmdiID0gY29sO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XCIsXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyID0gZnVuY3Rpb24gKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xyXG5cdFx0XHR2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBUSFJFRS5Db3B5U2hhZGVyID09PSB1bmRlZmluZWQgKVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBcIlRIUkVFLkVmZmVjdENvbXBvc2VyIHJlbGllcyBvbiBUSFJFRS5Db3B5U2hhZGVyXCIgKTtcclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkNvcHlTaGFkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdFx0dmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hc2tBY3RpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5NYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLkNsZWFyTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcblx0XHRcdHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgZGF2aWRlZGMgLyBodHRwOi8vd3d3LnNrZXRjaHBhdGNoLm5ldC9cclxuICpcclxuICogTlZJRElBIEZYQUEgYnkgVGltb3RoeSBMb3R0ZXNcclxuICogaHR0cDovL3RpbW90aHlsb3R0ZXMuYmxvZ3Nwb3QuY29tLzIwMTEvMDYvZnhhYTMtc291cmNlLXJlbGVhc2VkLmh0bWxcclxuICogLSBXZWJHTCBwb3J0IGJ5IEBzdXBlcmVnZ2JlcnRcclxuICogaHR0cDovL3d3dy5nbGdlLm9yZy9kZW1vcy9meGFhL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRlhBQVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwicmVzb2x1dGlvblwiOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxIC8gMTAyNCwgMSAvIDUxMiApICB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1wiLFxyXG5cclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JORSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiApO1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JNICA9IHJnYmFNLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTlcgPSBkb3QoIHJnYk5XLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU0UgPSBkb3QoIHJnYlNFLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWF4ID0gbWF4KCBsdW1hTSwgbWF4KCBtYXgoIGx1bWFOVywgbHVtYU5FKSAsIG1heCggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiBkaXI7XCIsXHJcblx0XHRcdFx0XCJkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XCIsXHJcblx0XHRcdFx0XCJkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGlyUmVkdWNlID0gbWF4KCAoIGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSApICogKCAwLjI1ICogRlhBQV9SRURVQ0VfTVVMICksIEZYQUFfUkVEVUNFX01JTiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XCIsXHJcblx0XHRcdFx0XCJkaXIgPSBtaW4oIHZlYzIoIEZYQUFfU1BBTl9NQVgsICBGWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdCAgXCJtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdFx0XHRcImRpciAqIHJjcERpck1pbikpICogcmVzb2x1dGlvbjtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcIixcclxuXHQgICAgICAgIFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwidmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDAuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0ICAgICAgXHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMy4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwiZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgdmVjNChsdW1hLCAwLjApKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcIixcclxuXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkE7XCIsXHJcblxyXG5cdFx0XHRcdFwifSBlbHNlIHtcIixcclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQjtcIixcclxuXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuTWFza1Bhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Ly8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdXAgc3RlbmNpbFxyXG5cclxuXHRcdFx0dmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaW52ZXJzZSApIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDA7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMTtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xyXG5cdFx0XHRjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xyXG5cclxuXHRcdFx0Ly8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0Ly8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXHJcblxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Y29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xyXG5cclxuXHRcdHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG5cdFx0dGhpcy5vbGRDbGVhckFscGhhID0gMTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHRcclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzID0gZnVuY3Rpb24gKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiJdfQ==
