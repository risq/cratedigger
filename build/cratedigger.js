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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3JpcHRzL2NyYXRlZGlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBjcmF0ZWRpZ2dlci5qcyB2MC4wLjEgLSBieSByaXNxICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBvcHRpb25zID0ge30sXHJcbiAgICBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgdGFyZ2V0LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRmVhdHVyZSB0ZXN0ICA9PT09PT09PT09Ki9cclxuXHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBzdXBwb3J0cyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvciAmJiAhIXJvb3QuYWRkRXZlbnRMaXN0ZW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVmYXVsdCBzZXR0aW5ncyAgPT09PT09PT09PSovXHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgICAgY2FudmFzV2lkdGg6IG51bGwsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgICAgIHJlY29yZHNQZXJDcmF0ZTogMjQsXHJcbiAgICAgICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgxMTExMTEsXHJcbiAgICAgICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgICAgIGNyYXRlVGV4dHVyZTogJ2ltZy93b29kLmpwZycsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgaW5mb1BhbmVsT3BhY2l0eTogMC45LFxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgICAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICAgICAgb25JbmZvUGFuZWxPcGVuZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHJvb3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICAgICAgY2FudmFzQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1jYW52YXMnLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1sb2FkaW5nJyxcclxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgICAgICBhcnRpc3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1hcnRpc3QnLFxyXG4gICAgICAgICAgICBjb3ZlckNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc3RhbnRzOiB7XHJcbiAgICAgICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgICAgICBjYW1lcmFNb3ZlVGltZTogODAwLFxyXG4gICAgICAgICAgICBpbmZvT3BlblRpbWU6IDgwMCxcclxuICAgICAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgICAgIHJlY29yZFNob3duWTogMjUsXHJcbiAgICAgICAgICAgIHJlY29yZEZsaXBwZWRZOiAxMTAsXHJcbiAgICAgICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICAgICAgejogMTgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUZvY3VzUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE2MCxcclxuICAgICAgICAgICAgICAgIHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIHo6IDg1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRaOiAwLjAzLFxyXG4gICAgICAgICAgICBncmFiU2Vuc2l0aXZpdHk6IDZcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQ0xBU1NFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBSZWNvcmQgQ2xhc3MgID09PT09PT09PT0qL1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBnZXRSZWNvcmRNYXRlcmlhbCggbnVsbCwgZmFsc2UgKSApICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgIHk6IDUwICsgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnogKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnggKyA4MCxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcclxuXHJcbiAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvcHRpb25zLCBrZXkgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRzWyBrZXkgXSA9IG9wdGlvbnNbIGtleSBdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59O1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbmUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyMDAwICk7XHJcbiAgICB9ICk7XHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsT3BlbmVkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggaW5mb0NvbnRhaW5lckVsZW1lbnQsIG9wdGlvbnMuaW5mb1BhbmVsT3BhY2l0eSApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxDbG9zZWQoKTtcclxuXHJcbiAgICAgICAgfSwgZm9yY2UgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciB1cGRhdGVTaG93blJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBzaG93blJlY29yZCAhPSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlU2hvd25SZWNvcmQuLicpO1xyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSArIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZXNldFNob3duUmVjb3JkID0gZnVuY3Rpb24gKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgc2VsZWN0UHJldlJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgc2VsZWN0TmV4dFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIGdldE5leHRBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbnZhciBuYXZpZ2F0ZVJlY29yZHMgPSBmdW5jdGlvbiAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJORVhUIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBSRVYgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBiYXNlWSwgZGVsdGEgKTtcclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlRG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIG1vdXNlLnkgKTtcclxuICAgICAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnlcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIG9wdGlvbnMuY29uc3RhbnRzLmdyYWJTZW5zaXRpdml0eSApICkge1xyXG5cclxuICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgb25LZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCAxLCBkb25lICk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCBkb25lICk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgaW5pdFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCwgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAvLyAgICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxMCwgMTAsIDEsIDEsIDEpKTtcclxuICAgIC8vICAgICAgICBzY2VuZS5hZGQodGFyZ2V0KTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBvcHRpb25zLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBvcHRpb25zLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXREZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0R1VJID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbnZhciB1cGRhdGVDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdENyYXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBvcHRpb25zLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIG9wdGlvbnMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ3JhdGUgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0UmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRSZWNvcmRNYXRlcmlhbCA9IGZ1bmN0aW9uICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gb3B0aW9ucy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogb3B0aW9ucy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHdoZWVsRGlzdGFuY2UgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG52YXIgd2hlZWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbnZhciBjb29yZHNFcXVhbHNBcHByb3ggPSBmdW5jdGlvbiAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGRvbmUgKSB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPD0gMC4xICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgLT0gMC4xO1xyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmFkZU91dCggZWxlbWVudCwgZG9uZSApO1xyXG4gICAgICAgIH0sIDEwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFkZUluID0gZnVuY3Rpb24gKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICkge1xyXG5cclxuICAgIGlmICggIWVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgJiYgZWxlbWVudC5zdHlsZS5vcGFjaXR5IDwgZmFkZVRvICkge1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBvcCA9IDA7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoICFlbGVtZW50LnN0eWxlLmRpc3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBvcCA9IGVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wICs9IDAuMDM7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApO1xyXG5cclxuICAgICAgICB9LCAxMCApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IGZhZGVUbztcclxuXHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVDYW52YXNTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbnZhc1dpZHRoID0gb3B0aW9ucy5jYW52YXNXaWR0aCA/IG9wdGlvbnMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IG9wdGlvbnMuY2FudmFzSGVpZ2h0ID8gb3B0aW9ucy5jYW52YXNIZWlnaHQgOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxudmFyIHNldENhbnZhc0RpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IGV4dGVuZCggZGVmYXVsdHMsIHBhcmFtcyApO1xyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBpZiAoICFzdXBwb3J0cyB8fCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coICdJbml0aWFsaXppbmcgY3JhdGVkaWdnZXIuanMuLi4nICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmFydGlzdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFhcnRpc3RJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIGFydGlzdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNvdmVySW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7Il19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmF0ZWRpZ2dlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3Nlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3bkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKlxyXG4gICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgIC86OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgIC86Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgLzo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgLzo6Ojo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgIC86OjovXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgLzo6Oi9+flxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAvOjo6L19fXFw6OjpcXCAgICBcXCAvOjo6LyAgICBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgLzo6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6OjovICAgIC8gXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgLzo6Ojo6OlxcICAgXFw6OjpcXCAgICBcXF9fICAgIC86Ojo6OjpcXCAgICBcXF9cXDo6OlxcICAgXFw6OjpcXCAgICBcXDovX19fXy8gICBcXDo6OlxcX19fX1xcXHJcbiAgICAgICAgIC86OjovXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgXFwgIC86OjovXFw6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgICB8ICAgICB8Ojo6fCAgICB8XHJcbiAgICAgICAgLzo6Oi8gIFxcOjo6XFwgICBcXDo6OnwgICAgfCBcXC86OjovICBcXDo6OlxcX19fX1xcIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcX19ffCAgICAgfDo6OnxfX19ffFxyXG4gICAgICAgIFxcOjovICAgfDo6OjpcXCAgLzo6OnxfX19ffCAvOjo6LyAgICBcXDo6LyAgICAvICBcXDo6OlxcICAgXFw6Oi8gICAgLyAgIF9cXF9fXy86OjovICAgIC9cclxuICAgICAgICAgXFwvX19fX3w6Ojo6OlxcLzo6Oi8gICAgL1xcLzo6Oi8gICAgLyBcXC9fX19fL1xcICAgXFw6OjpcXCAgIFxcL19fX18vOlxcIHw6OnwgLzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojo6Ojo6Ojo6LyAgICAvOjo6OjovICAgIC8gICAgICBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgXFw6OjpcXHw6OnwvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnxcXDo6OjovICAgIC9cXDo6OjovX19fXy8gICAgICAgIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcICBcXDo6Ojo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCBcXDo6L19fX18vICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgLzo6Oi8gICAgLyAgIFxcOjo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgfnwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXC86OjovICAgIC8gICAgIFxcOjo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgICB8ICAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6Ojo6Oi8gICAgLyAgICAgICBcXDo6OjovX19fXy9cclxuICAgICAgICAgICAgICAgXFw6OnwgICB8ICAgICAgICAgICBcXDo6OlxcX19fX1xcICAgICAgICAgXFw6Ojo6LyAgICAvICAgICAgICAgfDo6fCAgICB8XHJcbiAgICAgICAgICAgICAgICBcXDp8ICAgfCAgICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICB8Ojp8X19fX3xcclxuICAgICAgICAgICAgICAgICBcXHxfX198ICAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICB+flxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAuX19fLl9fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX1xyXG4gICAgICAgX19fX19fX19fX19fX19fXyBfLyAgfF8gIF9fX18gICBfX3wgXy98X198IF9fX18gICBfX19fICAgX19fX19fX19fX18gICAgICAgfF9ffCBfX19fX19cclxuICAgICBfLyBfX19cXF8gIF9fIFxcX18gIFxcXFwgICBfX1xcLyBfXyBcXCAvIF9fIHwgfCAgfC8gX19fXFwgLyBfX19cXF8vIF9fIFxcXyAgX18gXFwgICAgICB8ICB8LyAgX19fL1xyXG4gICAgIFxcICBcXF9fX3wgIHwgXFwvLyBfXyBcXHwgIHwgXFwgIF9fXy8vIC9fLyB8IHwgIC8gL18vICA+IC9fLyAgPiAgX19fL3wgIHwgXFwvICAgICAgfCAgfFxcX19fIFxcXHJcbiAgICAgIFxcX19fICA+X198ICAoX19fXyAgL19ffCAgXFxfX18gID5fX19fIHwgfF9fXFxfX18gIC9cXF9fXyAgLyBcXF9fXyAgPl9ffCAgL1xcIC9cXF9ffCAgL19fX18gID5cclxuICAgICAgICAgIFxcLyAgICAgICAgICAgXFwvICAgICAgICAgIFxcLyAgICAgXFwvICAgL19fX19fLy9fX19fXy8gICAgICBcXC8gICAgICBcXC8gXFxfX19fX198ICAgIFxcL1xyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgb3B0aW9ucyA9IHt9LFxyXG4gICAgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRE9NIGNvbnRhaW5lciBlbGVtZW50cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LFxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCxcclxuICAgIHRpdGxlSW5mb0VsZW1lbnQsXHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCxcclxuICAgIGNvdmVySW5mb0VsZW1lbnQsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHRhcmdldCxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIEZlYXR1cmUgdGVzdCAgPT09PT09PT09PSovXHJcblxyXG4gICAgLy8gVE9ETzogdG8gZml4IC0gc3VwcG9ydHMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJiYgISFyb290LmFkZEV2ZW50TGlzdGVuZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlZmF1bHQgc2V0dGluZ3MgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodDogbnVsbCxcclxuICAgICAgICBuYkNyYXRlczogMixcclxuICAgICAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgICAgIGxpZ2h0SW50ZW5zaXR5OiAxLFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZTogdHJ1ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgICAgIHNsZWV2ZUNvbG9yOiAweDBkMDcwMixcclxuICAgICAgICBzbGVldmVNYXNrVGV4dHVyZTogJ2ltZy9zbGVldmUucG5nJyxcclxuICAgICAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25DbGljazogdHJ1ZSxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgIGluZm9QYW5lbE9wYWNpdHk6IDAuOSxcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBibHVyQW1vdW50OiAwLjQsXHJcbiAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplOiB0cnVlLFxyXG4gICAgICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25Mb2FkaW5nRW5kOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICByb290Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlcicsXHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItY2FudmFzJyxcclxuICAgICAgICAgICAgbG9hZGluZ0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItbG9hZGluZycsXHJcbiAgICAgICAgICAgIGluZm9Db250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWluZm8nLFxyXG4gICAgICAgICAgICB0aXRsZUNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLXRpdGxlJyxcclxuICAgICAgICAgICAgYXJ0aXN0Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtYXJ0aXN0JyxcclxuICAgICAgICAgICAgY292ZXJDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1jb3ZlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnN0YW50czoge1xyXG4gICAgICAgICAgICByZWNvcmRNb3ZlVGltZTogMTAwMCxcclxuICAgICAgICAgICAgY2FtZXJhTW92ZVRpbWU6IDgwMCxcclxuICAgICAgICAgICAgaW5mb09wZW5UaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIHJlY29yZEJhc2VZOiA1LFxyXG4gICAgICAgICAgICByZWNvcmRTaG93blk6IDI1LFxyXG4gICAgICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgICAgICB0YXJnZXRCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMCxcclxuICAgICAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICAgICAgejogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDI4MCxcclxuICAgICAgICAgICAgICAgIHk6IDIwMCxcclxuICAgICAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFGb2N1c1Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAxNjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB6OiA4NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFk6IDAuMDcsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWjogMC4wMyxcclxuICAgICAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIENMQVNTRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUmVjb3JkIENsYXNzICA9PT09PT09PT09Ki9cclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggZ2V0UmVjb3JkTWF0ZXJpYWwoIG51bGwsIGZhbHNlICkgKSApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICB5OiA1MCArIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56ICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1bGxSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAncHVsbGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdWxsZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogTWF0aC5QSVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSAtIDUwLFxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcEJhY2tSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgLCBub0NhbWVyYVR3ZWVuICkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gJ2ZsaXBwZWQnICkge1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uICggZGVmYXVsdHMsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGtleSBpbiBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0c1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWZhdWx0cztcclxufTtcclxuXHJcbnZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggZG9SZW5kZXIgKSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbnMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmNhbWVyYU1vdXNlTW92ZSApIHtcclxuXHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnggPSAoIG1vdXNlLnggLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTsgLy8gaW52ZXJzZSBheGlzP1xyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy55ID0gKCBtb3VzZS55IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRaICogKCB0YXJnZXRDYW1lcmFQb3MueSAtIHJvb3RDb250YWluZXIucm90YXRpb24ueiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBkZXB0aE1hdGVyaWFsO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgZGVwdGhUYXJnZXQgKTtcclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuICAgICAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBMb2FkaW5nIG1ldGhvZHNcclxuICovXHJcbnZhciB1bmxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gbnVsbDtcclxuICAgICAgICByZWNvcmRzWyBpIF0uc2V0VW5hY3RpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDA7XHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXTtcclxuXHJcbn07XHJcblxyXG5cclxudmFyIGxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCByZWNvcmRzRGF0YSwgc2h1ZmZsZUJlZm9yZUxvYWRpbmcsIGRvbmUgKSB7XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCggdHJ1ZSApO1xyXG5cclxuICAgIHNob3dMb2FkaW5nKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggbG9hZGVkUmVjb3JkcyA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmxvYWRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzaHVmZmxlQmVmb3JlTG9hZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZHNEYXRhID0gc2h1ZmZsZSggcmVjb3Jkc0RhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aCAmJiBpIDwgcmVjb3Jkc0RhdGEubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IHJlY29yZHNEYXRhWyBpIF07XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLm1lc2gubWF0ZXJpYWwubWF0ZXJpYWxzID0gZ2V0UmVjb3JkTWF0ZXJpYWwoIHJlY29yZHNEYXRhWyBpIF0uY292ZXIsIHJlY29yZHNEYXRhWyBpIF0uaGFzU2xlZXZlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2h5ID8/XHJcbiAgICAgICAgLy8gbG9hZGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhLmxlbmd0aCA8IHJlY29yZHMubGVuZ3RoID8gcmVjb3Jkc0RhdGEubGVuZ3RoIDogcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgbG9hZGVkUmVjb3JkcyA9IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIHJlY29yZHNEYXRhTGlzdCA9IHJlY29yZHNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb25lICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgfSApO1xyXG59O1xyXG5cclxudmFyIHNodWZmbGVSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzaHVmZmxlZFJlY29yZHMgPSByZWNvcmRzRGF0YUxpc3Q7XHJcbiAgICBzaHVmZmxlZFJlY29yZHMgPSBzaHVmZmxlKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuICAgIGxvYWRSZWNvcmRzKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBSRUNPUkRTIFNFTEVDVElPTiBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApIHtcclxuXHJcbiAgICAgICAgZmlsbEluZm9QYW5lbCggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5pbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5lZCc7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGluZm9Db250YWluZXJFbGVtZW50LCBvcHRpb25zLmluZm9QYW5lbE9wYWNpdHkgKTtcclxuXHJcbiAgICAgICAgfSwgMzAwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmYWRlT3V0KCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NpbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBCYWNrUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgdXBkYXRlU2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVNob3duUmVjb3JkLi4nKTtcclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPCAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uU2Nyb2xsICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBzY3JvbGxSZWNvcmRzID0gZnVuY3Rpb24gKCBiYXNlWSwgb2xkRGVsdGEgKSB7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHZhciBpbnZlcnNlRGVsdGEgPSAxIC0gb2xkRGVsdGE7XHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQgPSBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiAzMDA7XHJcblxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdncmFiJyk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTkVYVCBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQUkVWIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggYmFzZVksIGRlbHRhICk7XHJcbiAgICB9LCBzY3JvbGxTcGVlZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBmaWxsSW5mb1BhbmVsID0gZnVuY3Rpb24gKCByZWNvcmQgKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS50aXRsZSApIHtcclxuXHJcbiAgICAgICAgdGl0bGVJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS50aXRsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5hcnRpc3QgKSB7XHJcblxyXG4gICAgICAgIGFydGlzdEluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLmFydGlzdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5jb3ZlciApIHtcclxuXHJcbiAgICAgICAgY292ZXJJbmZvRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyByZWNvcmQuZGF0YS5jb3ZlciArICcpJztcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVWRU5UUyBIQU5ETElORyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgb25Nb3VzZU1vdmVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIC8vZ2V0IG1vdXNlIHBvc2l0aW9uIG9uIGRvY3VtZW50IGNyb3NzYnJvd3NlclxyXG4gICAgaWYgKCAhZSApIHtcclxuXHJcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlLnBhZ2VYIHx8IGUucGFnZVkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUucGFnZVg7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5wYWdlWTtcclxuICAgIH0gZWxzZSBpZiAoIGUuY2xpZW50WCB8fCBlLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG1fcG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbnZhciBvblNjcm9sbEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbnZhciBvbkNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBtb3VzZS55ICk7XHJcbiAgICAgICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZVVwRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBvcHRpb25zLmNvbnN0YW50cy5ncmFiU2Vuc2l0aXZpdHkgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIG9uS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25XaW5kb3dSZXNpemVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgICBVSSBNRVRIT0RTICAgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZUluKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCwgMSwgZG9uZSApO1xyXG5cclxufTtcclxuXHJcbnZhciBoaWRlTG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlT3V0KCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCwgZG9uZSApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLCAxICk7XHJcblxyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA0NSwgY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQsIDAuMSwgMjAwMDAgKTtcclxuICAgIGNhbWVyYS5mb2NhbExlbmd0aCA9IDQ1O1xyXG4gICAgY2FtZXJhLmZyYW1lU2l6ZSA9IDMyO1xyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG5cclxuICAgIHRhcmdldCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgLy8gICAgICAgIHRhcmdldCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMTAsIDEwLCAxLCAxLCAxKSk7XHJcbiAgICAvLyAgICAgICAgc2NlbmUuYWRkKHRhcmdldCk7XHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggb3B0aW9ucy5jcmF0ZVRleHR1cmUgKTtcclxuICAgIHdvb2RfdGV4dHVyZS5hbmlzb3Ryb3B5ID0gcmVuZGVyZXIuZ2V0TWF4QW5pc290cm9weSgpO1xyXG4gICAgd29vZF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgbWFwOiB3b29kX3RleHR1cmVcclxuICAgIH0gKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBjcmF0ZXNDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHNjZW5lLmFkZCggcm9vdENvbnRhaW5lciApO1xyXG4gICAgcm9vdENvbnRhaW5lci5hZGQoIGNyYXRlc0NvbnRhaW5lciApO1xyXG5cclxuICAgIGluaXRDcmF0ZXMoKTtcclxuICAgIGluaXRSZWNvcmRzKCk7XHJcblxyXG4gICAgbGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAxLjEgKTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCggMzAwLCA4MCwgMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsaWdodCApO1xyXG5cclxuICAgIGxlZnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIHJpZ2h0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIC0xMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIHJpZ2h0TGlnaHQgKTtcclxuXHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd25FdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duRXZlbnQsIGZhbHNlICk7IFxyXG5cclxuICAgIGlmICggb3B0aW9ucy51cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemUgKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRE9NIHNldHVwXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgIGluaXREZWJ1ZygpO1xyXG4gICAgICAgIGluaXRHVUkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG59O1xyXG5cclxudmFyIGluaXRQb3N0UHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkZXB0aFNoYWRlciA9IFRIUkVFLlNoYWRlckxpYi5kZXB0aFJHQkE7XHJcbiAgICBkZXB0aFVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggZGVwdGhTaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcbiAgICBkZXB0aE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGRlcHRoU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZGVwdGhTaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBkZXB0aFVuaWZvcm1zXHJcbiAgICB9ICk7XHJcbiAgICBkZXB0aE1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHJcbiAgICBkZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwge1xyXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0XHJcbiAgICB9ICk7XHJcblxyXG4gICAgY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBuZXcgVEhSRUUuUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSApICk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVwdGggb2YgZmllbGQgc2hhZGVyICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkb2YgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRG9GU2hhZGVyICk7XHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgLy9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuICAgIGRvZi51bmlmb3Jtcy56bmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyOyAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLnpmYXIudmFsdWUgPSBjYW1lcmEuZmFyOyAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aC52YWx1ZSA9IDU7IC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoOyAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG4gICAgZG9mLnVuaWZvcm1zLmZzdG9wLnZhbHVlID0gOC4wOyAvL2Ytc3RvcCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLnNob3dGb2N1cy52YWx1ZSA9IGZhbHNlOyAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YudmFsdWUgPSB0cnVlOyAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQudmFsdWUgPSAxMTsgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMubmRvZmRpc3QudmFsdWUgPSA4MDsgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LnZhbHVlID0gMDsgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mZGlzdC52YWx1ZSA9IDEwMDsgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuQ29DLnZhbHVlID0gMC4wMzsgLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcudmFsdWUgPSBmYWxzZTsgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmF1dG9mb2N1cy52YWx1ZSA9IHRydWU7IC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUuc2V0KCAwLjM1LCAwLjM1ICk7IC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KSBcclxuICAgIGRvZi51bmlmb3Jtcy5tYXhibHVyLnZhbHVlID0gb3B0aW9ucy5ibHVyQW1vdW50OyAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudGhyZXNob2xkLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG4gICAgZG9mLnVuaWZvcm1zLmdhaW4udmFsdWUgPSAwOyAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5iaWFzLnZhbHVlID0gMDsgLy9ib2tlaCBlZGdlIGJpYXMgICAgICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZyaW5nZS52YWx1ZSA9IDA7IC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcbiAgICBGWEFBID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkZYQUFTaGFkZXIgKTtcclxuXHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIGRvZiApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggRlhBQSApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0RGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICB2YXIgZGVidWcgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMCwgMjAsIDIwLCAxLCAxLCAxICkgKTtcclxuICAgIGRlYnVnLnBvc2l0aW9uLnNldChcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi54LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uelxyXG4gICAgKTtcclxuICAgIHNjZW5lLmFkZCggZGVidWcgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdEdVSSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY2FtZXJhRm9sZGVyLFxyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLFxyXG4gICAgICAgIGRvZkZvbGRlcixcclxuICAgICAgICBfbGFzdDtcclxuXHJcbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG52YXIgdXBkYXRlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRDcmF0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgb3B0aW9ucy5uYkNyYXRlczsgY3JhdGVJZCsrICkge1xyXG4gICAgICAgIHZhciBjcmF0ZSA9IGNyZWF0ZUNyYXRlKCBjcmF0ZUlkICk7XHJcbiAgICAgICAgY3JhdGVzQ29udGFpbmVyLmFkZCggY3JhdGUgKTtcclxuICAgIH1cclxuICAgIGNyYXRlc0NvbnRhaW5lci5wb3NpdGlvbi56ID0gLSggMTEwIC0gKCAxMTAgKiBvcHRpb25zLm5iQ3JhdGVzICkgKSAvIDI7XHJcblxyXG59O1xyXG5cclxudmFyIGNyZWF0ZUNyYXRlID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcbiAgICB2YXIgYm94X2JvdHRvbSA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYm90dG9tICk7XHJcblxyXG4gICAgdmFyIGJveF9sZWZ0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2xlZnQucG9zaXRpb24uc2V0KCAwLCAzNSwgLTU1ICk7XHJcbiAgICBib3hfbGVmdC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfbGVmdCApO1xyXG5cclxuICAgIGlmICggaWQgPT09IDAgKSB7XHJcbiAgICAgICAgdmFyIGJveF9yaWdodCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgICAgICBib3hfcmlnaHQucG9zaXRpb24uc2V0KCAwLCAzNSwgNTUgKTtcclxuICAgICAgICBib3hfcmlnaHQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9yaWdodCApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBib3hfYmFjayA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDgwLCAxMCwgMTIwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9iYWNrLnBvc2l0aW9uLnNldCggLTEwNSwgMzUsIDAgKTtcclxuICAgIGJveF9iYWNrLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9iYWNrICk7XHJcblxyXG4gICAgdmFyIGJveF9mcm9udCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDQwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9mcm9udC5wb3NpdGlvbi5zZXQoIDk1LCAyNSwgMCApO1xyXG4gICAgYm94X2Zyb250LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9mcm9udCApO1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXS5wb3NpdGlvbi56ID0gLTExMCAqIGlkO1xyXG4gICAgcmV0dXJuIGNyYXRlc1sgaWQgXTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRSZWNvcmRJZCA9IDA7XHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBjcmF0ZXMubGVuZ3RoOyBjcmF0ZUlkKysgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBwb3MgPSAwOyBwb3MgPCBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UmVjb3JkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IG9wdGlvbnMuc2xlZXZlTWFza1RleHR1cmU7XHJcblxyXG4gICAgICAgICAgICBzbGVldmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMTMwLCAxMzAsIDEzNSwgMTM1ICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBzbGVldmUsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsZWV2ZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgY29sb3I6IG9wdGlvbnMuc2xlZXZlQ29sb3JcclxuXHJcbiAgICB9ICk7XHJcblxyXG4gICAgdmFyIG1hdGVyaWFscyA9IFtcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICAvLyB0ZXh0dXJlXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBtYXA6IHRleHR1cmVcclxuICAgICAgICB9ICksXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWxcclxuICAgIF07XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxzO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBVVElMUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciB3aGVlbERpc3RhbmNlID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICB2YXIgdyA9IGUud2hlZWxEZWx0YSxcclxuICAgICAgICBkID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoIGQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdyApIHJldHVybiB3IC8gZCAvIDQwICogZCA+IDAgPyAxIDogLTE7IC8vIE9wZXJhXHJcbiAgICAgICAgZWxzZSByZXR1cm4gLWQgLyAzOyAvLyBGaXJlZm94O1xyXG5cclxuICAgIH0gZWxzZSByZXR1cm4gdyAvIDEyMDsgLy8gSUUvU2FmYXJpL0Nocm9tZVxyXG59O1xyXG5cclxudmFyIHdoZWVsRGlyZWN0aW9uID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICByZXR1cm4gKCBlLmRldGFpbCA8IDAgKSA/IDEgOiAoIGUud2hlZWxEZWx0YSA+IDAgKSA/IDEgOiAtMTtcclxuXHJcbn07XHJcblxyXG52YXIgY29vcmRzRXF1YWxzQXBwcm94ID0gZnVuY3Rpb24gKCBjb29yZDEsIGNvb3JkMiwgcmFuZ2UgKSB7XHJcblxyXG4gICAgcmV0dXJuICggTWF0aC5hYnMoIGNvb3JkMS54IC0gY29vcmQyLnggKSA8PSByYW5nZSApICYmICggTWF0aC5hYnMoIGNvb3JkMS55IC0gY29vcmQyLnkgKSA8PSByYW5nZSApO1xyXG5cclxufTtcclxuXHJcbnZhciBmYWRlT3V0ID0gZnVuY3Rpb24gKCBlbGVtZW50LCBkb25lICkge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5zdHlsZS5vcGFjaXR5IDw9IDAuMSApIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5IC09IDAuMTtcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZhZGVPdXQoIGVsZW1lbnQsIGRvbmUgKTtcclxuICAgICAgICB9LCAxMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZhZGVJbiA9IGZ1bmN0aW9uICggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApIHtcclxuXHJcbiAgICBpZiAoICFlbGVtZW50LnN0eWxlLm9wYWNpdHkgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ICYmIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8IGZhZGVUbyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgb3AgPSAwO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCAhZWxlbWVudC5zdHlsZS5kaXNwbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgb3AgPSBlbGVtZW50LnN0eWxlLm9wYWNpdHkgfHwgMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcCArPSAwLjAzO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKTtcclxuXHJcbiAgICAgICAgfSwgMTAgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBmYWRlVG87XHJcblxyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG5cclxuICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2FsY3VsYXRlQ2FudmFzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IG9wdGlvbnMuY2FudmFzV2lkdGggPyBvcHRpb25zLmNhbnZhc1dpZHRoIDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjYW52YXNIZWlnaHQgPSBvcHRpb25zLmNhbnZhc0hlaWdodCA/IG9wdGlvbnMuY2FudmFzSGVpZ2h0IDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbnZhciBzZXRDYW52YXNEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIG9wdGlvbnMgPSBleHRlbmQoIGRlZmF1bHRzLCBwYXJhbXMgKTtcclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgLy8gVE9ETzogdG8gZml4IC0gaWYgKCAhc3VwcG9ydHMgfHwgIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuICAgIGNvbnNvbGUubG9nKCAnSW5pdGlhbGl6aW5nIGNyYXRlZGlnZ2VyLmpzLi4uJyApO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5yb290Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXJvb3RDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjYW52YXNDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjYW52YXMgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGxvYWRpbmcgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmluZm9Db250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhaW5mb0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0aXRsZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMudGl0bGVDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhdGl0bGVJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIHRpdGxlIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgYXJ0aXN0SW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5hcnRpc3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhYXJ0aXN0SW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCBhcnRpc3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjb3ZlckluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY292ZXJDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY292ZXJJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY292ZXIgaW1hZ2UgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmRpc2FibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgZ2V0dGVycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmdldENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFJlY29yZHNEYXRhTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc0RhdGFMaXN0O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0TG9hZGVkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUmVjb3JkcztcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT0gIE1ldGhvZHMgYWNjZXNzb3JzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMubG9hZFJlY29yZHMgPSBsb2FkUmVjb3JkcztcclxuZXhwb3J0cy51bmxvYWRSZWNvcmRzID0gdW5sb2FkUmVjb3JkcztcclxuZXhwb3J0cy5yZXNldFNob3duUmVjb3JkID0gcmVzZXRTaG93blJlY29yZDtcclxuZXhwb3J0cy5zaHVmZmxlUmVjb3JkcyA9IHNodWZmbGVSZWNvcmRzO1xyXG5leHBvcnRzLmZsaXBTZWxlY3RlZFJlY29yZCA9IGZsaXBTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3RQcmV2UmVjb3JkID0gc2VsZWN0UHJldlJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3ROZXh0UmVjb3JkID0gc2VsZWN0TmV4dFJlY29yZDtcclxuZXhwb3J0cy5zaG93TG9hZGluZyA9IHNob3dMb2FkaW5nO1xyXG5leHBvcnRzLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFBVQkxJQyBBUEkgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5elkzSnBjSFJ6TDJOeVlYUmxaR2xuWjJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOWZYMTlmSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZYMTlmWHlBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTlmWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdYMTlmWDE5ZlgxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzljWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJQ0FnSUM5Y1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUNBZ0lDOWNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRnhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4Nk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDODZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQzg2T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnTHpvNk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0x6bzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnTHpvNk9qbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBdk9qbzZPam82T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnTHpvNk9pOWNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0F2T2pvNkwxeGNPam82WEZ3Z0lDQWdYRndnSUNBdk9qbzZMMzUrWEZ3Nk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdk9qbzZMMTlmWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUM4Nk9qb3ZYMTljWERvNk9seGNJQ0FnSUZ4Y0lDODZPam92SUNBZ0lGeGNPam82WEZ3Z0lDQWdYRnhjY2x4dUlDQWdJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnTHpvNk9qcGNYQ0FnSUNCY1hDQmNYRG82T2x4Y0lDQWdYRnc2T2pwY1hDQWdJQ0JjWERvNk9pOGdJQ0FnTHlCY1hEbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBdk9qbzZPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjWDE4Z0lDQWdMem82T2pvNk9seGNJQ0FnSUZ4Y1gxeGNPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjT2k5ZlgxOWZMeUFnSUZ4Y09qbzZYRnhmWDE5ZlhGeGNjbHh1SUNBZ0lDQWdJQ0FnTHpvNk9pOWNYRG82T2x4Y0lDQWdYRnc2T2pwY1hGOWZYMTljWENCY1hDQWdMem82T2k5Y1hEbzZPbHhjSUNBZ0lGeGNJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJSHdnSUNBZ0lIdzZPanA4SUNBZ0lIeGNjbHh1SUNBZ0lDQWdJQ0F2T2pvNkx5QWdYRnc2T2pwY1hDQWdJRnhjT2pvNmZDQWdJQ0I4SUZ4Y0x6bzZPaThnSUZ4Y09qbzZYRnhmWDE5ZlhGd2dYRnc2T2pwY1hDQWdJRnhjT2pvNlhGeGZYMTlmWEZ4ZlgxOThJQ0FnSUNCOE9qbzZmRjlmWDE5OFhISmNiaUFnSUNBZ0lDQWdYRnc2T2k4Z0lDQjhPam82T2x4Y0lDQXZPam82ZkY5ZlgxOThJQzg2T2pvdklDQWdJRnhjT2pvdklDQWdJQzhnSUZ4Y09qbzZYRndnSUNCY1hEbzZMeUFnSUNBdklDQWdYMXhjWDE5Zkx6bzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0JjWEM5ZlgxOWZmRG82T2pvNlhGd3ZPam82THlBZ0lDQXZYRnd2T2pvNkx5QWdJQ0F2SUZ4Y0wxOWZYMTh2WEZ3Z0lDQmNYRG82T2x4Y0lDQWdYRnd2WDE5Zlh5ODZYRndnZkRvNmZDQXZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T2pvNk9qbzZPam92SUNBZ0lDODZPam82T2k4Z0lDQWdMeUFnSUNBZ0lGeGNPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNCY1hEbzZPbHhjZkRvNmZDODZPam92SUNBZ0lDOWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmRG82ZkZ4Y09qbzZPaThnSUNBZ0wxeGNPam82T2k5ZlgxOWZMeUFnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJRnhjT2pvNlhGeGZYMTlmWEZ3Z0lGeGNPam82T2pvNk9qbzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhPanA4SUZ4Y09qb3ZYMTlmWHk4Z0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0F2T2pvNkx5QWdJQ0F2SUNBZ1hGdzZPam82T2pvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhJQ0IrZkNBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0x6bzZPaThnSUNBZ0x5QWdJQ0FnWEZ3Nk9qbzZPam92SUNBZ0lDOWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmRG82ZkNBZ0lId2dJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZPam82THlBZ0lDQXZJQ0FnSUNBZ0lGeGNPam82T2k5ZlgxOWZMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjWERvNmZDQWdJSHdnSUNBZ0lDQWdJQ0FnSUZ4Y09qbzZYRnhmWDE5ZlhGd2dJQ0FnSUNBZ0lDQmNYRG82T2pvdklDQWdJQzhnSUNBZ0lDQWdJQ0I4T2pwOElDQWdJSHhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4Y09ud2dJQ0I4SUNBZ0lDQWdJQ0FnSUNBZ1hGdzZPaThnSUNBZ0x5QWdJQ0FnSUNBZ0lDQmNYRG82THlBZ0lDQXZJQ0FnSUNBZ0lDQWdJSHc2T254ZlgxOWZmRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4Y2ZGOWZYM3dnSUNBZ0lDQWdJQ0FnSUNBZ1hGd3ZYMTlmWHk4Z0lDQWdJQ0FnSUNBZ0lDQmNYQzlmWDE5Zkx5QWdJQ0FnSUNBZ0lDQWdJSDUrWEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjlmSUNBZ0lDQWdJQ0FnSUNBZ0lDNWZYMTh1WDE4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZlhISmNiaUFnSUNBZ0lDQmZYMTlmWDE5ZlgxOWZYMTlmWDE5ZklGOHZJQ0I4WHlBZ1gxOWZYeUFnSUY5ZmZDQmZMM3hmWDN3Z1gxOWZYeUFnSUY5ZlgxOGdJQ0JmWDE5ZlgxOWZYMTlmWHlBZ0lDQWdJQ0I4WDE5OElGOWZYMTlmWDF4eVhHNGdJQ0FnSUY4dklGOWZYMXhjWHlBZ1gxOGdYRnhmWHlBZ1hGeGNYQ0FnSUY5ZlhGd3ZJRjlmSUZ4Y0lDOGdYMThnZkNCOElDQjhMeUJmWDE5Y1hDQXZJRjlmWDF4Y1h5OGdYMThnWEZ4ZklDQmZYeUJjWENBZ0lDQWdJSHdnSUh3dklDQmZYMTh2WEhKY2JpQWdJQ0FnWEZ3Z0lGeGNYMTlmZkNBZ2ZDQmNYQzh2SUY5ZklGeGNmQ0FnZkNCY1hDQWdYMTlmTHk4Z0wxOHZJSHdnZkNBZ0x5QXZYeThnSUQ0Z0wxOHZJQ0ErSUNCZlgxOHZmQ0FnZkNCY1hDOGdJQ0FnSUNCOElDQjhYRnhmWDE4Z1hGeGNjbHh1SUNBZ0lDQWdYRnhmWDE4Z0lENWZYM3dnSUNoZlgxOWZJQ0F2WDE5OElDQmNYRjlmWHlBZ1BsOWZYMThnZkNCOFgxOWNYRjlmWHlBZ0wxeGNYMTlmSUNBdklGeGNYMTlmSUNBK1gxOThJQ0F2WEZ3Z0wxeGNYMTk4SUNBdlgxOWZYeUFnUGx4eVhHNGdJQ0FnSUNBZ0lDQWdYRnd2SUNBZ0lDQWdJQ0FnSUNCY1hDOGdJQ0FnSUNBZ0lDQWdYRnd2SUNBZ0lDQmNYQzhnSUNBdlgxOWZYMTh2TDE5ZlgxOWZMeUFnSUNBZ0lGeGNMeUFnSUNBZ0lGeGNMeUJjWEY5ZlgxOWZYM3dnSUNBZ1hGd3ZYSEpjYmx4eVhHNWNjbHh1S2k5Y2NseHVYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCamNtRjBaV1JwWjJkbGNpNXFjeUIyTUM0d0xqRWdMU0JpZVNCeWFYTnhJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dUozVnpaU0J6ZEhKcFkzUW5PMXh5WEc1Y2NseHVkbUZ5SUZSSVVrVkZJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKMVJJVWtWRkoxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5ZFVTRkpGUlNkZElEb2diblZzYkNrN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRWx1YW1WamRDQmhiR3dnWlhoMFpYSnVZV3dnYlc5a2RXeGxjeUIwYnlCVVNGSkZSUzVxY3lBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwxTm9ZV1JsY2xCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBOdmNIbFRhR0ZrWlhJbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMUpsYm1SbGNsQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwUnZSbE5vWVdSbGNpY3BLRlJJVWtWRktUdGNjbHh1Y21WeGRXbHlaU2duTGk5MGFISmxaV3B6WDIxdlpIVnNaWE12UmxoQlFWTm9ZV1JsY2ljcEtGUklVa1ZGS1R0Y2NseHVjbVZ4ZFdseVpTZ25MaTkwYUhKbFpXcHpYMjF2WkhWc1pYTXZUV0Z6YTFCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBWbVptVmpkRU52YlhCdmMyVnlKeWtvVkVoU1JVVXBPMXh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lGWkJVa2xCUWt4RlV5QWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm5aaGNpQnZjSFJwYjI1eklEMGdlMzBzWEhKY2JpQWdJQ0JsZUhCdmNuUnpJRDBnZTMwc0lDOHZJRTlpYW1WamRDQm1iM0lnY0hWaWJHbGpJRUZRU1hOY2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQkVUMDBnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblJ6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEN4Y2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUXNYSEpjYmlBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEN4Y2NseHVJQ0FnSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MExGeHlYRzRnSUNBZ2RHbDBiR1ZKYm1adlJXeGxiV1Z1ZEN4Y2NseHVJQ0FnSUdGeWRHbHpkRWx1Wm05RmJHVnRaVzUwTEZ4eVhHNGdJQ0FnWTI5MlpYSkpibVp2Uld4bGJXVnVkQ3hjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCVWFISmxaUzVxY3lCdlltcGxZM1J6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0J6ZEdGMGN5eGNjbHh1SUNBZ0lITmpaVzVsTEZ4eVhHNGdJQ0FnWTJGdFpYSmhMRnh5WEc0Z0lDQWdkR0Z5WjJWMExGeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJc1hISmNiaUFnSUNCc2FXZG9kQ3hjY2x4dUlDQWdJR3hsWm5STWFXZG9kQ3hjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFzWEhKY2JpQWdJQ0JqYjIxd2IzTmxjaXhjY2x4dUlDQWdJRVpZUVVFc1hISmNiaUFnSUNCa2IyWXNYSEpjYmlBZ0lDQm5kV2tzWEhKY2JpQWdJQ0JrWlhCMGFGUmhjbWRsZEN4Y2NseHVJQ0FnSUdSbGNIUm9VMmhoWkdWeUxGeHlYRzRnSUNBZ1pHVndkR2hWYm1sbWIzSnRjeXhjY2x4dUlDQWdJR1JsY0hSb1RXRjBaWEpwWVd3c1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdSbVZoZEhWeVpTQjBaWE4wSUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0F2THlCVVQwUlBPaUIwYnlCbWFYZ2dMU0J6ZFhCd2IzSjBjeUE5SUNFaFpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaUFtSmlBaElYSnZiM1F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaXhjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCUFltcGxZM1J6SUNZZ1pHRjBZU0JoY25KaGVYTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1SUNBZ0lHTnlZWFJsY3lBOUlGdGRMRnh5WEc0Z0lDQWdjbVZqYjNKa2N5QTlJRnRkTEZ4eVhHNGdJQ0FnY21WamIzSmtjMFJoZEdGTWFYTjBJRDBnVzEwc1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdWR2h5WldVdWFuTWdiMkpxWldOMGN5QmpiMjUwWVdsdVpYSnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TEZ4eVhHNGdJQ0FnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMRnh5WEc0Z0lDQWdjbVZqYjNKa2MwTnZiblJoYVc1bGNpeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JUZEdGMFpYTXNJSFYwYVd3Z2RtRnljeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdZMkZ1ZG1GelYybGtkR2dzWEhKY2JpQWdJQ0JqWVc1MllYTklaV2xuYUhRc1hISmNiaUFnSUNCa2NISXNYSEpjYmlBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6VkdsdFpXOTFkQ3hjY2x4dUlDQWdJR2x6VEc5aFpHbHVaeUE5SUdaaGJITmxMRnh5WEc0Z0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQmNJbU5zYjNObFpGd2lMRnh5WEc0Z0lDQWdhWE5UWTNKdmJHeHBibWNnUFNCbVlXeHpaU3hjY2x4dUlDQWdJR1J2VW1WdVpHVnlJRDBnZEhKMVpTeGNjbHh1SUNBZ0lHMXZkWE5sSUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSGc2SURBc1hISmNiaUFnSUNBZ0lDQWdlVG9nTUZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUcxdmRYTmxSRzkzYmxCdmN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNCNE9pQXdMRnh5WEc0Z0lDQWdJQ0FnSUhrNklEQmNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQjBZWEpuWlhSRFlXMWxjbUZRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnZURvZ01DeGNjbHh1SUNBZ0lDQWdJQ0I1T2lBd1hISmNiaUFnSUNCOUxGeHlYRzRnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNBdE1TeGNjbHh1SUNBZ0lITm9iM2R1VW1WamIzSmtJRDBnTFRFc1hISmNiaUFnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnTUN4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQk5ZWFJsY21saGJITWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1SUNBZ0lIZHZiMlJmYldGMFpYSnBZV3dzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1JHVm1ZWFZzZENCelpYUjBhVzVuY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnWkdWbVlYVnNkSE1nUFNCN1hISmNiaUFnSUNBZ0lDQWdaR1ZpZFdjNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ1kyRnVkbUZ6VjJsa2RHZzZJRzUxYkd3c1hISmNiaUFnSUNBZ0lDQWdZMkZ1ZG1GelNHVnBaMmgwT2lCdWRXeHNMRnh5WEc0Z0lDQWdJQ0FnSUc1aVEzSmhkR1Z6T2lBeUxGeHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITlFaWEpEY21GMFpUb2dNalFzWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFJKYm5SbGJuTnBkSGs2SURFc1hISmNiaUFnSUNBZ0lDQWdZMkZ0WlhKaFRXOTFjMlZOYjNabE9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ01IZ3hNVEV4TVRFc1hISmNiaUFnSUNBZ0lDQWdjMnhsWlhabFEyOXNiM0k2SURCNE1HUXdOekF5TEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlUxaGMydFVaWGgwZFhKbE9pQW5hVzFuTDNOc1pXVjJaUzV3Ym1jbkxGeHlYRzRnSUNBZ0lDQWdJR055WVhSbFZHVjRkSFZ5WlRvZ0oybHRaeTkzYjI5a0xtcHdaeWNzWEhKY2JpQWdJQ0FnSUNBZ1kyeHZjMlZKYm1adlVHRnVaV3hQYmtOc2FXTnJPaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJR05zYjNObFNXNW1iMUJoYm1Wc1QyNVRZM0p2Ykd3NklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1QzQmhZMmwwZVRvZ01DNDVMRnh5WEc0Z0lDQWdJQ0FnSUhCdmMzUndjbTlqWlhOemFXNW5PaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJR0pzZFhKQmJXOTFiblE2SURBdU5DeGNjbHh1SUNBZ0lDQWdJQ0IxY0dSaGRHVkRZVzUyWVhOVGFYcGxUMjVYYVc1a2IzZFNaWE5wZW1VNklIUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ2IyNUpibVp2VUdGdVpXeFBjR1Z1WldRNklHWjFibU4wYVc5dUlDZ3BJSHQ5TEZ4eVhHNGdJQ0FnSUNBZ0lHOXVTVzVtYjFCaGJtVnNRMnh2YzJWa09pQm1kVzVqZEdsdmJpQW9LU0I3ZlN4Y2NseHVJQ0FnSUNBZ0lDQnZia3h2WVdScGJtZEZibVE2SUdaMWJtTjBhVzl1SUNncElIdDlMRnh5WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblJ6T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkpaRG9nSjJOeVlYUmxaR2xuWjJWeUp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnVkbUZ6UTI5dWRHRnBibVZ5U1dRNklDZGpjbUYwWldScFoyZGxjaTFqWVc1MllYTW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVNXUTZJQ2RqY21GMFpXUnBaMmRsY2kxc2IyRmthVzVuSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1bWIwTnZiblJoYVc1bGNrbGtPaUFuWTNKaGRHVmthV2RuWlhJdGFXNW1ieWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJwZEd4bFEyOXVkR0ZwYm1WeVNXUTZJQ2RqY21GMFpXUnBaMmRsY2kxeVpXTnZjbVF0ZEdsMGJHVW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjblJwYzNSRGIyNTBZV2x1WlhKSlpEb2dKMk55WVhSbFpHbG5aMlZ5TFhKbFkyOXlaQzFoY25ScGMzUW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiM1psY2tOdmJuUmhhVzVsY2tsa09pQW5ZM0poZEdWa2FXZG5aWEl0Y21WamIzSmtMV052ZG1WeUoxeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ1kyOXVjM1JoYm5Sek9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkUxdmRtVlVhVzFsT2lBeE1EQXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZVzFsY21GTmIzWmxWR2x0WlRvZ09EQXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibVp2VDNCbGJsUnBiV1U2SURnd01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prUW1GelpWazZJRFVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpGTm9iM2R1V1RvZ01qVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkVac2FYQndaV1JaT2lBeE1UQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmhjbWRsZEVKaGMyVlFiM05wZEdsdmJqb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ0xUSXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01UQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lBd1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJXVnlZVUpoYzJWUWIzTnBkR2x2YmpvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nTWpnd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTWpBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nTVRnd1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SURFMk1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURFNU1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SURnMVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJXVnlZVTF2ZFhObFRXOTJaVk53WldWa1dUb2dNQzR3Tnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGdFpYSmhUVzkxYzJWTmIzWmxVM0JsWldSYU9pQXdMakF6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JuY21GaVUyVnVjMmwwYVhacGRIazZJRFpjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1EweEJVMU5GVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQlNaV052Y21RZ1EyeGhjM01nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dWRtRnlJRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRc0lHTnlZWFJsU1dRc0lIQnZjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG1sa0lEMGdhV1E3WEhKY2JpQWdJQ0IwYUdsekxtTnlZWFJsU1dRZ1BTQmpjbUYwWlVsa08xeHlYRzRnSUNBZ2RHaHBjeTV3YjNNZ1BTQndiM003WEhKY2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0oyOTFkQ2M3WEhKY2JpQWdJQ0IwYUdsekxuSmxZMjl5WkZoUWIzTWdQU0F0TmpJZ0t5QW9JREV6TlNBdklHOXdkR2x2Ym5NdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNrZ0tpQndiM003WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmdnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXhNREFzSURFdU5Td2dNVEF3TENBeExDQXhMQ0F4SUNrc0lHNWxkeUJVU0ZKRlJTNU5aWE5vUm1GalpVMWhkR1Z5YVdGc0tDQm5aWFJTWldOdmNtUk5ZWFJsY21saGJDZ2diblZzYkN3Z1ptRnNjMlVnS1NBcElDazdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VaMlZ2YldWMGNua3VZWEJ3YkhsTllYUnlhWGdvSUc1bGR5QlVTRkpGUlM1TllYUnlhWGcwS0NrdWJXRnJaVlJ5WVc1emJHRjBhVzl1S0NBMU1Dd2dNQ3dnTUNBcElDazdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNHVjMlYwS0NCMGFHbHpMbkpsWTI5eVpGaFFiM01zSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRUpoYzJWWkxDQXdJQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1Y205MFlYUnBiMjR1ZWlBOUlFMWhkR2d1VUVrZ0x5QXlPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9MbkpsWTI5eVpFbGtJRDBnYVdRN1hISmNiaUFnSUNCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNGdQU0J1WlhjZ1ZFaFNSVVV1Vm1WamRHOXlNeWdwTzF4eVhHNWNjbHh1SUNBZ0lIUm9hWE11YzJWMFZXNWhZM1JwZG1Vb0tUdGNjbHh1SUNBZ0lIUm9hWE11Y0hWemFGSmxZMjl5WkNncE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWJHOW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR052Ym5OdmJHVXViRzluS0NCY0lsSmxZMjl5WkNCdXdyQmNJaXdnZEdocGN5NXBaQ3hjY2x4dUlDQWdJQ0FnSUNCY0ltTnlZWFJsU1dRZ1BWd2lMQ0IwYUdsekxtTnlZWFJsU1dRc1hISmNiaUFnSUNBZ0lDQWdYQ0p3YjNNZ1BWd2lMQ0IwYUdsekxuQnZjeUFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1YzJWMFFXTjBhWFpsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVZV04wYVhabElEMGdkSEoxWlR0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUM1MmFYTnBZbXhsSUQwZ2RISjFaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbk5sZEZWdVlXTjBhWFpsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVZV04wYVhabElEMGdabUZzYzJVN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWRtbHphV0pzWlNBOUlHWmhiSE5sTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1YzJodmQxSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSFJvYVhNdWMzUmhkR1VnSVQwOUlDZHphRzkzYmljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuYzJodmQyNG5PMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV0p6YjJ4MWRHVlFiM05wZEdsdmJpNXpaWFJHY205dFRXRjBjbWw0VUc5emFYUnBiMjRvSUhSb2FYTXViV1Z6YUM1dFlYUnlhWGhYYjNKc1pDQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1UyaHZkMjVaWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklFMWhkR2d1VUVrZ0x5QXlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwWVhKblpYUXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdWNtVmpiM0prV0ZCdmN5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURVd0lDc2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1UyaHZkMjVaTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1TG5wY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lHTmhiV1Z5WVM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTV5WldOdmNtUllVRzl6SUNzZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ2RHaHBjeTVoWW5OdmJIVjBaVkJ2YzJsMGFXOXVMbm9nS3lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1Y0hWemFGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSFJvYVhNdWMzUmhkR1VnSVQwZ0ozQjFjMmhsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuY0hWemFHVmtKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFSmhjMlZaWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklFMWhkR2d1VUVrZ0x5QXlJQ3NnVFdGMGFDNVFTU0F2SURkY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjSFZzYkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDA5SUNkd2RXeHNaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdKM0IxYkd4bFpDYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21SQ1lYTmxXVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCTllYUm9MbEJKSUM4Z01pQXRJRTFoZEdndVVFa2dMeUEzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExtWnNhWEJTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJQ2RtYkdsd2NHVmtKenRjY2x4dVhISmNiaUFnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkVac2FYQndaV1JaWEhKY2JpQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpHVnNZWGtvSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1sdVptOVBjR1Z1VkdsdFpTQXZJRFFnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCTllYUm9MbEJKWEhKY2JpQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1eVpXTnZjbVJZVUc5ekxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21SR2JHbHdjR1ZrV1NBcklEVXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjZPaUIwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0dWVseHlYRzRnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1sdVptOVBjR1Z1VkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVnh5WEc0Z0lDQWdJQ0FnSUM1dmJrTnZiWEJzWlhSbEtDQmtiMjVsSUNrN1hISmNibHh5WEc0Z0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG5KbFkyOXlaRmhRYjNNZ0t5QnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GR2IyTjFjMUJ2YzJsMGFXOXVMbmdnS3lBNE1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU1SUMwZ05UQXNYSEpjYmlBZ0lDQWdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1bWJHbHdRbUZqYTFKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ1pHOXVaU0FzSUc1dlEyRnRaWEpoVkhkbFpXNGdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IwYUdsekxuTjBZWFJsSUQwOVBTQW5abXhwY0hCbFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9MbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVJsYkdGNUtDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXBibVp2VDNCbGJsUnBiV1VnTHlBeUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21SQ1lYTmxXVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV5YjNSaGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdMeUF5SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXViMjVEYjIxd2JHVjBaU2dnWkc5dVpTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSVc1dlEyRnRaWEpoVkhkbFpXNHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNWtaV3hoZVNnZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWFXNW1iMDl3Wlc1VWFXMWxJQzhnTWlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbkpsWTI5eVpGaFFiM01zWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTnpVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ2RHaHBjeTVoWW5OdmJIVjBaVkJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NXlaV052Y21SWVVHOXpJQ3NnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUVKQlUwVWdUVVZVU0U5RVV5QWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ1pYaDBaVzVrSUQwZ1puVnVZM1JwYjI0Z0tDQmtaV1poZFd4MGN5d2diM0IwYVc5dWN5QXBJSHRjY2x4dVhISmNiaUFnSUNCbWIzSWdLQ0IyWVhJZ2EyVjVJR2x1SUc5d2RHbHZibk1nS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLQ0J2Y0hScGIyNXpMQ0JyWlhrZ0tTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFJ6V3lCclpYa2dYU0E5SUc5d2RHbHZibk5iSUd0bGVTQmRPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJR1JsWm1GMWJIUnpPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR0Z1YVcxaGRHVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCa2IxSmxibVJsY2lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLQ0JoYm1sdFlYUmxJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2diM0IwYVc5dWN5NWtaV0oxWnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVhSekxuVndaR0YwWlNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2NtVnVaR1Z5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUZSWFJVVk9MblZ3WkdGMFpTZ3BPMXh5WEc0Z0lDQWdkWEJrWVhSbFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JRzl3ZEdsdmJuTXVZMkZ0WlhKaFRXOTFjMlZOYjNabElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBZWEpuWlhSRFlXMWxjbUZRYjNNdWVDQTlJQ2dnYlc5MWMyVXVlQ0F2SUdOaGJuWmhjMWRwWkhSb0lDMGdNQzQxSUNrZ0tpQXdMakkxT3lBdkx5QnBiblpsY25ObElHRjRhWE0vWEhKY2JpQWdJQ0FnSUNBZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ1BTQW9JRzF2ZFhObExua2dMeUJqWVc1MllYTlhhV1IwYUNBdElEQXVOU0FwSUNvZ01DNHlOVHRjY2x4dUlDQWdJQ0FnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS3owZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoVFc5MWMyVk5iM1psVTNCbFpXUlpJQ29nS0NCMFlYSm5aWFJEWVcxbGNtRlFiM011ZUNBdElISnZiM1JEYjI1MFlXbHVaWEl1Y205MFlYUnBiMjR1ZVNBcE8xeHlYRzRnSUNBZ0lDQWdJSEp2YjNSRGIyNTBZV2x1WlhJdWNtOTBZWFJwYjI0dWVpQXJQU0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1Z6WlUxdmRtVlRjR1ZsWkZvZ0tpQW9JSFJoY21kbGRFTmhiV1Z5WVZCdmN5NTVJQzBnY205dmRFTnZiblJoYVc1bGNpNXliM1JoZEdsdmJpNTZJQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR05oYldWeVlTNXNiMjlyUVhRb0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2IzQjBhVzl1Y3k1d2IzTjBjSEp2WTJWemMybHVaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJObGJtVXViM1psY25KcFpHVk5ZWFJsY21saGJDQTlJR1JsY0hSb1RXRjBaWEpwWVd3N1hISmNiaUFnSUNBZ0lDQWdjbVZ1WkdWeVpYSXVjbVZ1WkdWeUtDQnpZMlZ1WlN3Z1kyRnRaWEpoTENCa1pYQjBhRlJoY21kbGRDQXBPMXh5WEc0Z0lDQWdJQ0FnSUhOalpXNWxMbTkyWlhKeWFXUmxUV0YwWlhKcFlXd2dQU0J1ZFd4c08xeHlYRzRnSUNBZ0lDQWdJR052YlhCdmMyVnlMbkpsYm1SbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsYm1SbGNtVnlMbkpsYm1SbGNpZ2djMk5sYm1Vc0lHTmhiV1Z5WVNBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JpOHFYSEpjYmlBcUlFeHZZV1JwYm1jZ2JXVjBhRzlrYzF4eVhHNGdLaTljY2x4dWRtRnlJSFZ1Ykc5aFpGSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHa2dQU0F3T3lCcElEd2djbVZqYjNKa2N5NXNaVzVuZEdnN0lHa3JLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYVNCZExtUmhkR0VnUFNCdWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUdrZ1hTNXpaWFJWYm1GamRHbDJaU2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JzYjJGa1pXUlNaV052Y21SeklEMGdNRHRjY2x4dUlDQWdJSEpsWTI5eVpITkVZWFJoVEdsemRDQTlJRnRkTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTJZWElnYkc5aFpGSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9JSEpsWTI5eVpITkVZWFJoTENCemFIVm1abXhsUW1WbWIzSmxURzloWkdsdVp5d2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ0IwY25WbElDazdYSEpjYmx4eVhHNGdJQ0FnYzJodmQweHZZV1JwYm1jb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCc2IyRmtaV1JTWldOdmNtUnpJRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFZ1Ykc5aFpGSmxZMjl5WkhNb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JSE5vZFdabWJHVkNaV1p2Y21WTWIyRmthVzVuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2MwUmhkR0VnUFNCemFIVm1abXhsS0NCeVpXTnZjbVJ6UkdGMFlTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvSUhaaGNpQnBJRDBnTURzZ2FTQThJSEpsWTI5eVpITXViR1Z1WjNSb0lDWW1JR2tnUENCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnN0lHa3JLeUFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1a1lYUmhJRDBnY21WamIzSmtjMFJoZEdGYklHa2dYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG5ObGRFRmpkR2wyWlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCcElGMHViV1Z6YUM1dFlYUmxjbWxoYkM1dFlYUmxjbWxoYkhNZ1BTQm5aWFJTWldOdmNtUk5ZWFJsY21saGJDZ2djbVZqYjNKa2MwUmhkR0ZiSUdrZ1hTNWpiM1psY2l3Z2NtVmpiM0prYzBSaGRHRmJJR2tnWFM1b1lYTlRiR1ZsZG1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkx5QjNhSGtnUHo5Y2NseHVJQ0FnSUNBZ0lDQXZMeUJzYjJGa1pXUlNaV052Y21SeklEMGdjbVZqYjNKa2MwUmhkR0V1YkdWdVozUm9JRHdnY21WamIzSmtjeTVzWlc1bmRHZ2dQeUJ5WldOdmNtUnpSR0YwWVM1c1pXNW5kR2dnT2lCeVpXTnZjbVJ6TG14bGJtZDBhRHRjY2x4dUlDQWdJQ0FnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnY21WamIzSmtjeTVzWlc1bmRHZzdYSEpjYmlBZ0lDQWdJQ0FnY21WamIzSmtjMFJoZEdGTWFYTjBJRDBnY21WamIzSmtjMFJoZEdFN1hISmNiaUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYUdsa1pVeHZZV1JwYm1jb0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11YjI1TWIyRmthVzVuUlc1a0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lHUnZibVVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc5dVpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBeU1EQXdJQ2s3WEhKY2JpQWdJQ0I5SUNrN1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ2MyaDFabVpzWlZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlITm9kV1ptYkdWa1VtVmpiM0prY3lBOUlISmxZMjl5WkhORVlYUmhUR2x6ZER0Y2NseHVJQ0FnSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUE5SUhOb2RXWm1iR1VvSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUFwTzF4eVhHNGdJQ0FnYkc5aFpGSmxZMjl5WkhNb0lITm9kV1ptYkdWa1VtVmpiM0prY3lBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lGSkZRMDlTUkZNZ1UwVk1SVU5VU1U5T0lFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnpaV3hsWTNSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2R2Y0dWdWFXNW5KeUFtSmlCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyTnNiM05wYm1jbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOUlHbGtPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCbWJHbHdVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYVd4c1NXNW1iMUJoYm1Wc0tDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZElDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuYjNCbGJtbHVaeWM3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVabXhwY0ZKbFkyOXlaQ2dnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5iM0JsYm1Wa0p6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnZjSFJwYjI1ekxtOXVTVzVtYjFCaGJtVnNUM0JsYm1Wa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWmhaR1ZKYmlnZ2FXNW1iME52Ym5SaGFXNWxja1ZzWlcxbGJuUXNJRzl3ZEdsdmJuTXVhVzVtYjFCaGJtVnNUM0JoWTJsMGVTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0F6TURBZ0tUdGNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tHWnZjbU5sS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyOXdaVzVsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWmhaR1ZQZFhRb0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBblkyeHZjMmx1WnljN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1Wm14cGNFSmhZMnRTWldOdmNtUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwZ0oyTnNiM05sWkNjN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11YjI1SmJtWnZVR0Z1Wld4RGJHOXpaV1FvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1ptOXlZMlVnS1R0Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCMWNHUmhkR1ZUYUc5M2JsSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFtSmlCemFHOTNibEpsWTI5eVpDQWhQU0J6Wld4bFkzUmxaRkpsWTI5eVpDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnlnbmRYQmtZWFJsVTJodmQyNVNaV052Y21RdUxpY3BPMXh5WEc0Z0lDQWdJQ0FnSUhOb2IzZHVVbVZqYjNKa0lEMGdjMlZzWldOMFpXUlNaV052Y21RN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9JSFpoY2lCeVpXTnZjbVJKWkNBOUlEQTdJSEpsWTI5eVpFbGtJRHdnYkc5aFpHVmtVbVZqYjNKa2N6c2djbVZqYjNKa1NXUXJLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnYzJWc1pXTjBaV1JTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2NtVmpiM0prU1dRZ1hTNXdkWE5vVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDQnlaV052Y21SSlpDQStJSE5sYkdWamRHVmtVbVZqYjNKa0lDWW1YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkpaQ0ErSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1WTNKaGRHVkpaQ0FxSUc5d2RHbHZibk11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ1ltWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJKWkNBOElDZ2djbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTNWpjbUYwWlVsa0lDb2diM0IwYVc5dWN5NXlaV052Y21SelVHVnlRM0poZEdVZ0tTQXJJRzl3ZEdsdmJuTXVjbVZqYjNKa2MxQmxja055WVhSbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjSFZzYkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2djbVZqYjNKa1NXUWdQVDBnYzJWc1pXTjBaV1JTWldOdmNtUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2djbVZqYjNKa1NXUWdYUzV6YUc5M1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhKbFkyOXlaRWxrSUYwdWNIVnphRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JtYjNKalpTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFtSmlBaFptOXlZMlVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBaFBUMGdKMjl3Wlc1cGJtY25JQ1ltSUdsdVptOVFZVzVsYkZOMFlYUmxJQ0U5UFNBblkyeHZjMmx1WnljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLSFJ5ZFdVcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlZzWldOMFpXUlNaV052Y21RZ1BTQXRNVHRjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11ZEdGeVoyVjBRbUZ6WlZCdmMybDBhVzl1TG5nc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTUwWVhKblpYUkNZWE5sVUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMblJoY21kbGRFSmhjMlZRYjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVUpoYzJWUWIzTnBkR2x2Ymk1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhRbUZ6WlZCdmMybDBhVzl1TG5rc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjR1ZWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjMlZzWldOMFVISmxkbEpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvWjJWMFVISmxka0YyWVdsc1lXSnNaVkpsWTI5eVpDaHpaV3hsWTNSbFpGSmxZMjl5WkNrcE8xeHlYRzRnSUNBZ1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ2MyVnNaV04wVG1WNGRGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCelpXeGxZM1JTWldOdmNtUW9aMlYwVG1WNGRFRjJZV2xzWVdKc1pWSmxZMjl5WkNoelpXeGxZM1JsWkZKbFkyOXlaQ2twTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm5aWFJRY21WMlFYWmhhV3hoWW14bFVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tHWnliMjFTWldOdmNtUXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1p5YjIxU1pXTnZjbVFnUFQwZ0xURWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p5YjIxU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JtY205dFVtVmpiM0prSUR3Z2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JtY205dFVtVmpiM0prSUNzZ01UdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnTUR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJR1p5YjIxU1pXTnZjbVFnWFM1aFkzUnBkbVVnUHlCbWNtOXRVbVZqYjNKa0lEb2daMlYwVUhKbGRrRjJZV2xzWVdKc1pWSmxZMjl5WkNobWNtOXRVbVZqYjNKa0tUdGNjbHh1SUNBZ0lGeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHZGxkRTVsZUhSQmRtRnBiR0ZpYkdWU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb1puSnZiVkpsWTI5eVpDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dabkp2YlZKbFkyOXlaQ0E5UFNBdE1TQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR1p5YjIxU1pXTnZjbVFnUGlBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnWm5KdmJWSmxZMjl5WkNBdElERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdjbVZqYjNKa2Mxc2dabkp2YlZKbFkyOXlaQ0JkTG1GamRHbDJaU0EvSUdaeWIyMVNaV052Y21RZ09pQm5aWFJPWlhoMFFYWmhhV3hoWW14bFVtVmpiM0prS0daeWIyMVNaV052Y21RcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ1WVhacFoyRjBaVkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvSUdScGNtVmpkR2x2YmlBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5ZMnh2YzJWa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCa2FYSmxZM1JwYjI0Z1BUMDlJQ2R3Y21WMkp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRkJ5WlhaU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRTVsZUhSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFtSmlCdmNIUnBiMjV6TG1Oc2IzTmxTVzVtYjFCaGJtVnNUMjVUWTNKdmJHd2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlITmpjbTlzYkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0lHSmhjMlZaTENCdmJHUkVaV3gwWVNBcElIdGNjbHh1WEhKY2JpQWdJQ0J2YkdSRVpXeDBZU0E5SUNGdmJHUkVaV3gwWVNCOGZDQk5ZWFJvTG1GaWN5Z2diMnhrUkdWc2RHRWdLU0ErSURBdU5TQS9JREF1TlNBNklFMWhkR2d1WVdKektDQnZiR1JFWld4MFlTQXBPMXh5WEc0Z0lDQWdkbUZ5SUdsdWRtVnljMlZFWld4MFlTQTlJREVnTFNCdmJHUkVaV3gwWVR0Y2NseHVJQ0FnSUhaaGNpQnpZM0p2Ykd4VGNHVmxaQ0E5SUdsdWRtVnljMlZFWld4MFlTQXFJR2x1ZG1WeWMyVkVaV3gwWVNBcUlHbHVkbVZ5YzJWRVpXeDBZU0FxSURNd01EdGNjbHh1WEhKY2JpQWdJQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHlZV0luS1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRWdQU0FvSUdKaGMyVlpJQzBnYlc5MWMyVXVlU0FwSUM4Z1kyRnVkbUZ6U0dWcFoyaDBPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2daR1ZzZEdFZ1BpQXdJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUk9aWGgwVW1WamIzSmtLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSk9SVmhVSUZKRlEwOVNSQ0JjSWlBcklHUmxiSFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JrWld4MFlTQThJREFnS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRkJ5WlhaU1pXTnZjbVFvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbEJTUlZZZ1VrVkRUMUpFSUZ3aUlDc2daR1ZzZEdFcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCelkzSnZiR3hTWldOdmNtUnpLQ0JpWVhObFdTd2daR1ZzZEdFZ0tUdGNjbHh1SUNBZ0lIMHNJSE5qY205c2JGTndaV1ZrSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR1pwYkd4SmJtWnZVR0Z1Wld3Z1BTQm1kVzVqZEdsdmJpQW9JSEpsWTI5eVpDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSEpsWTI5eVpDNWtZWFJoTG5ScGRHeGxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYVhSc1pVbHVabTlGYkdWdFpXNTBMbWx1Ym1WeVNGUk5UQ0E5SUhKbFkyOXlaQzVrWVhSaExuUnBkR3hsTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkM1a1lYUmhMbUZ5ZEdsemRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZWEowYVhOMFNXNW1iMFZzWlcxbGJuUXVhVzV1WlhKSVZFMU1JRDBnY21WamIzSmtMbVJoZEdFdVlYSjBhWE4wTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkM1a1lYUmhMbU52ZG1WeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiM1psY2tsdVptOUZiR1Z0Wlc1MExuTjBlV3hsTG1KaFkydG5jbTkxYm1SSmJXRm5aU0E5SUNkMWNtd29KeUFySUhKbFkyOXlaQzVrWVhSaExtTnZkbVZ5SUNzZ0p5a25PMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdSVlpGVGxSVElFaEJUa1JNU1U1SElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnZiazF2ZFhObFRXOTJaVVYyWlc1MElEMGdablZ1WTNScGIyNGdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCdFgzQnZjM2dnUFNBd0xGeHlYRzRnSUNBZ0lDQWdJRzFmY0c5emVTQTlJREFzWEhKY2JpQWdJQ0FnSUNBZ1pWOXdiM040SUQwZ01DeGNjbHh1SUNBZ0lDQWdJQ0JsWDNCdmMza2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHOWlhaUE5SUhSb2FYTTdYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdiVzkxYzJVZ2NHOXphWFJwYjI0Z2IyNGdaRzlqZFcxbGJuUWdZM0p2YzNOaWNtOTNjMlZ5WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JsSUQwZ2QybHVaRzkzTG1WMlpXNTBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdVdWNHRm5aVmdnZkh3Z1pTNXdZV2RsV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNXdZV2RsV0R0Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQmxMbkJoWjJWWk8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daUzVqYkdsbGJuUllJSHg4SUdVdVkyeHBaVzUwV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNWpiR2xsYm5SWUlDc2daRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hNWldaMElDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRXhsWm5RN1hISmNiaUFnSUNBZ0lDQWdiVjl3YjNONUlEMGdaUzVqYkdsbGJuUlpJQ3NnWkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4VWIzQWdLMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdkwyZGxkQ0J3WVhKbGJuUWdaV3hsYldWdWRDQndiM05wZEdsdmJpQnBiaUJrYjJOMWJXVnVkRnh5WEc0Z0lDQWdhV1lnS0NCdlltb3ViMlptYzJWMFVHRnlaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2J5QjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsWDNCdmMzZ2dLejBnYjJKcUxtOW1abk5sZEV4bFpuUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmZjRzl6ZVNBclBTQnZZbW91YjJabWMyVjBWRzl3TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2dnYjJKcUlEMGdiMkpxTG05bVpuTmxkRkJoY21WdWRDQXBPeUF2THlCcWMyaHBiblFnYVdkdWIzSmxPbXhwYm1WY2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk4Z2JXOTFjMlVnY0c5emFYUnBiMjRnYldsdWRYTWdaV3h0SUhCdmMybDBhVzl1SUdseklHMXZkWE5sY0c5emFYUnBiMjRnY21Wc1lYUnBkbVVnZEc4Z1pXeGxiV1Z1ZERwY2NseHVJQ0FnSUcxdmRYTmxMbmdnUFNCdFgzQnZjM2dnTFNCbFgzQnZjM2c3WEhKY2JpQWdJQ0J0YjNWelpTNTVJRDBnYlY5d2IzTjVJQzBnWlY5d2IzTjVPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1VTJOeWIyeHNSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkMmhsWld4RWFYSmxZM1JwYjI0b0lHVWdLU0E4SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWhkbWxuWVhSbFVtVmpiM0prY3lnZ0ozQnlaWFluSUNrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtRjJhV2RoZEdWU1pXTnZjbVJ6S0NBbmJtVjRkQ2NnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVRMnhwWTJ0RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ2JXOTFjMlZFYjNkdVVHOXpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkamJHOXpaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkbVZqZEc5eVVHOXpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lBb0lDZ2dLQ0J0YjNWelpVUnZkMjVRYjNNdWVDQXRJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1YjJabWMyVjBUR1ZtZENBcElDOGdLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG5kcFpIUm9JQ2tnS1NBcUlESWdMU0F4SUNrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklDZ2dMU2dnS0NCdGIzVnpaVVJ2ZDI1UWIzTXVlU0F0SUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWIyWm1jMlYwVkc5d0lDa2dMeUFvSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWFHVnBaMmgwSUNrZ0tTQXFJRElnS3lBeElDa3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIbzZJREF1TlZ4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUIyWldOMGIzSWdQU0J1WlhjZ1ZFaFNSVVV1Vm1WamRHOXlNeWdnZG1WamRHOXlVRzl6TG5nc0lIWmxZM1J2Y2xCdmN5NTVMQ0IyWldOMGIzSlFiM011ZWlBcE8xeHlYRzRnSUNBZ0lDQWdJSFpsWTNSdmNpNTFibkJ5YjJwbFkzUW9JR05oYldWeVlTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlZWGxqWVhOMFpYSWdQU0J1WlhjZ1ZFaFNSVVV1VW1GNVkyRnpkR1Z5S0NCallXMWxjbUV1Y0c5emFYUnBiMjRzSUhabFkzUnZjaTV6ZFdJb0lHTmhiV1Z5WVM1d2IzTnBkR2x2YmlBcExtNXZjbTFoYkdsNlpTZ3BJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR2x1ZEdWeWMyVmpkSE1nUFNCeVlYbGpZWE4wWlhJdWFXNTBaWEp6WldOMFQySnFaV04wY3lnZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TG1Ob2FXeGtjbVZ1TENCMGNuVmxJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHbHVkR1Z5YzJWamRDQnpiMjFsZEdocGJtZGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHbHVkR1Z5YzJWamRITXViR1Z1WjNSb0lENGdNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqYkdsamEyVmtVbVZqYjNKa08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUjJWMElIUm9aU0JtYVhKemRDQjJhWE5wWW14bElISmxZMjl5WkNCcGJuUmxjbk5sWTNSbFpGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2FTQTlJREE3SUdrZ1BDQnBiblJsY25ObFkzUnpMbXhsYm1kMGFEc2dhU3NySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JR2x1ZEdWeVkyVndkQ0JoSUcxbGMyZ2dkMmhwWTJnZ2FYTWdibTkwSUdFZ2NtVmpiM0prTENCaWNtVmhhMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDQjBlWEJsYjJZb2FXNTBaWEp6WldOMGMxc2dhU0JkTG05aWFtVmpkQzV5WldOdmNtUkpaQ2tnUFQwOUlDZDFibVJsWm1sdVpXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JwYm5SbGNuTmxZM1J6V3lCcElGMHViMkpxWldOMExuWnBjMmxpYkdVZ0ppWWdhVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1eVpXTnZjbVJKWkNBK1BTQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHbGphMlZrVW1WamIzSmtJRDBnY21WamIzSmtjMXNnYVc1MFpYSnpaV04wYzFzZ2FTQmRMbTlpYW1WamRDNXlaV052Y21SSlpDQmRPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR1Z5WlNCcGN5QnZibVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NCamJHbGphMlZrVW1WamIzSmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ2MyVnNaV04wWldSU1pXTnZjbVFnUFQwOUlHTnNhV05yWldSU1pXTnZjbVF1YVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pzYVhCVFpXeGxZM1JsWkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRGSmxZMjl5WkNnZ1kyeHBZMnRsWkZKbFkyOXlaQzVwWkNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGc2JDQnBiblJsY25ObFkzUmxaQ0J5WldOdmNtUnpJR0Z5WlNCdWIzUWdkbWx6YVdKc1pYTmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OGdUbThnY21WamIzSmtJR2hoY3lCaVpXVnVJR2x1ZEdWeWMyVmpkR1ZrWEhKY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCdmJrMXZkWE5sUkc5M2JrVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTnNaV0Z5U1c1MFpYSjJZV3dvSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMElDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lHMXZkWE5sTG5rZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J0YjNWelpVUnZkMjVRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJRzF2ZFhObExuZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRzF2ZFhObExubGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFtSmlCdmNIUnBiMjV6TG1Oc2IzTmxTVzVtYjFCaGJtVnNUMjVEYkdsamF5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ2YmsxdmRYTmxWWEJGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqYkdWaGNrbHVkR1Z5ZG1Gc0tDQnpZM0p2Ykd4U1pXTnZjbVJ6VkdsdFpXOTFkQ0FwTzF4eVhHNGdJQ0FnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkbmNtRmlKeWs3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JqYjI5eVpITkZjWFZoYkhOQmNIQnliM2dvSUcxdmRYTmxSRzkzYmxCdmN5d2diVzkxYzJVc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtZHlZV0pUWlc1emFYUnBkbWwwZVNBcElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnZia05zYVdOclJYWmxiblFvSUcxdmRYTmxSRzkzYmxCdmN5QXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdiMjVMWlhsRWIzZHVSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCbExtdGxlVU52WkdVZ1BUMDlJRE0zSUh4OElHVXVhMlY1UTI5a1pTQTlQVDBnTXpnZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWhkbWxuWVhSbFVtVmpiM0prY3lnZ0oyNWxlSFFuSUNrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnWlM1clpYbERiMlJsSUQwOVBTQXpPU0I4ZkNCbExtdGxlVU52WkdVZ1BUMDlJRFF3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVlYWnBaMkYwWlZKbFkyOXlaSE1vSUNkd2NtVjJKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZibGRwYm1SdmQxSmxjMmw2WlVWMlpXNTBJRDBnWm5WdVkzUnBiMjRnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOaGJHTjFiR0YwWlVOaGJuWmhjMU5wZW1Vb0tUdGNjbHh1SUNBZ0lITmxkRU5oYm5aaGMwUnBiV1Z1YzJsdmJuTW9LVHRjY2x4dVhISmNiaUFnSUNCeVpXNWtaWEpsY2k1elpYUlRhWHBsS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNiaUFnSUNCallXMWxjbUV1WVhOd1pXTjBJRDBnWTJGdWRtRnpWMmxrZEdnZ0x5QmpZVzUyWVhOSVpXbG5hSFE3WEhKY2JpQWdJQ0JqWVcxbGNtRXVkWEJrWVhSbFVISnZhbVZqZEdsdmJrMWhkSEpwZUNncE8xeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1MFJHVndkR2d1ZG1Gc2RXVWdQU0JrWlhCMGFGUmhjbWRsZER0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXphWHBsTG5aaGJIVmxMbk5sZENnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJsZUhSbGJDNTJZV3gxWlM1elpYUW9JREV1TUNBdklHTmhiblpoYzFkcFpIUm9MQ0F4TGpBZ0x5QmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVJQ0FnSUVaWVFVRXVkVzVwWm05eWJYTXVjbVZ6YjJ4MWRHbHZiaTUyWVd4MVpTNXpaWFFvSURFZ0x5QmpZVzUyWVhOWGFXUjBhQ3dnTVNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0FnSUZWSklFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnphRzkzVEc5aFpHbHVaeUE5SUdaMWJtTjBhVzl1SUNnZ1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQm1ZV1JsU1c0b0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwTENBeExDQmtiMjVsSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2hwWkdWTWIyRmthVzVuSUQwZ1puVnVZM1JwYjI0Z0tDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1poWkdWUGRYUW9JR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MExDQmtiMjVsSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnU1U1SlZFbEJURWxUUVZSSlQwNGdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc1MllYSWdhVzVwZEZOalpXNWxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQzh2SUhOalpXNWxMQ0J5Wlc1a1pYSmxjaXdnWTJGdFpYSmhMQzR1TGx4eVhHNGdJQ0FnYzJObGJtVWdQU0J1WlhjZ1ZFaFNSVVV1VTJObGJtVW9LVHRjY2x4dVhISmNiaUFnSUNCeVpXNWtaWEpsY2lBOUlHNWxkeUJVU0ZKRlJTNVhaV0pIVEZKbGJtUmxjbVZ5S0NCN1hISmNiaUFnSUNBZ0lDQWdZVzUwYVdGc2FXRnpPaUIwY25WbFhISmNiaUFnSUNCOUlDazdYSEpjYmlBZ0lDQnlaVzVrWlhKbGNpNXpaWFJUYVhwbEtDQmpZVzUyWVhOWGFXUjBhQ3dnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmx4eVhHNGdJQ0FnWTJGdWRtRnpRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2dnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZENBcE8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNXBaQ0E5SUZ3aVkyOXVkR1Y0ZEZ3aU8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBRMnhsWVhKRGIyeHZjaWdnYjNCMGFXOXVjeTVpWVdOclozSnZkVzVrUTI5c2IzSXNJREVnS1R0Y2NseHVYSEpjYmlBZ0lDQmpZVzFsY21FZ1BTQnVaWGNnVkVoU1JVVXVVR1Z5YzNCbFkzUnBkbVZEWVcxbGNtRW9JRFExTENCallXNTJZWE5YYVdSMGFDQXZJR05oYm5aaGMwaGxhV2RvZEN3Z01DNHhMQ0F5TURBd01DQXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaExtWnZZMkZzVEdWdVozUm9JRDBnTkRVN1hISmNiaUFnSUNCallXMWxjbUV1Wm5KaGJXVlRhWHBsSUQwZ016STdYSEpjYmlBZ0lDQmpZVzFsY21FdWMyVjBUR1Z1Y3lnZ1kyRnRaWEpoTG1adlkyRnNUR1Z1WjNSb0xDQmpZVzFsY21FdVpuSmhiV1ZUYVhwbElDazdYSEpjYmx4eVhHNGdJQ0FnZEdGeVoyVjBJRDBnYm1WM0lGUklVa1ZGTGs5aWFtVmpkRE5FS0NrN1hISmNiaUFnSUNBdkx5QWdJQ0FnSUNBZ2RHRnlaMlYwSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtERXdMQ0F4TUN3Z01UQXNJREVzSURFc0lERXBLVHRjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0J6WTJWdVpTNWhaR1FvZEdGeVoyVjBLVHRjY2x4dUlDQWdJR05oYldWeVlTNXNiMjlyUVhRb0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCM2IyOWtYM1JsZUhSMWNtVWdQU0JVU0ZKRlJTNUpiV0ZuWlZWMGFXeHpMbXh2WVdSVVpYaDBkWEpsS0NCdmNIUnBiMjV6TG1OeVlYUmxWR1Y0ZEhWeVpTQXBPMXh5WEc0Z0lDQWdkMjl2WkY5MFpYaDBkWEpsTG1GdWFYTnZkSEp2Y0hrZ1BTQnlaVzVrWlhKbGNpNW5aWFJOWVhoQmJtbHpiM1J5YjNCNUtDazdYSEpjYmlBZ0lDQjNiMjlrWDIxaGRHVnlhV0ZzSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmhNWVcxaVpYSjBUV0YwWlhKcFlXd29JSHRjY2x4dUlDQWdJQ0FnSUNCdFlYQTZJSGR2YjJSZmRHVjRkSFZ5WlZ4eVhHNGdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhJZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJR055WVhSbGMwTnZiblJoYVc1bGNpQTlJRzVsZHlCVVNGSkZSUzVQWW1wbFkzUXpSQ2dwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCeWIyOTBRMjl1ZEdGcGJtVnlJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeUxtRmtaQ2dnWTNKaGRHVnpRMjl1ZEdGcGJtVnlJQ2s3WEhKY2JseHlYRzRnSUNBZ2FXNXBkRU55WVhSbGN5Z3BPMXh5WEc0Z0lDQWdhVzVwZEZKbFkyOXlaSE1vS1R0Y2NseHVYSEpjYmlBZ0lDQnNhV2RvZENBOUlHNWxkeUJVU0ZKRlJTNVFiMmx1ZEV4cFoyaDBLQ0F3ZUVaR1JrWkdSaXdnYjNCMGFXOXVjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREV1TVNBcE8xeHlYRzRnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1YzJWMEtDQXpNREFzSURnd0xDQXdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUd4cFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ2JHVm1kRXhwWjJoMElEMGdibVYzSUZSSVVrVkZMbEJ2YVc1MFRHbG5hSFFvSURCNFJrWkdSa1pHTENCdmNIUnBiMjV6TG14cFoyaDBTVzUwWlc1emFYUjVJQ29nTUM0MklDazdYSEpjYmlBZ0lDQnNaV1owVEdsbmFIUXVjRzl6YVhScGIyNHVjMlYwS0NBdE1UQXdMQ0F6TURBc0lERXdNREFnS1R0Y2NseHVJQ0FnSUhOalpXNWxMbUZrWkNnZ2JHVm1kRXhwWjJoMElDazdYSEpjYmx4eVhHNGdJQ0FnY21sbmFIUk1hV2RvZENBOUlHNWxkeUJVU0ZKRlJTNVFiMmx1ZEV4cFoyaDBLQ0F3ZUVaR1JrWkdSaXdnYjNCMGFXOXVjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2NtbG5hSFJNYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSUMweE1EQXNJRE13TUN3Z0xURXdNREFnS1R0Y2NseHVJQ0FnSUhOalpXNWxMbUZrWkNnZ2NtbG5hSFJNYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUdsdWFYUlFiM04wVUhKdlkyVnpjMmx1WnlncE8xeHlYRzVjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkRVQwMU5iM1Z6WlZOamNtOXNiQ2NzSUc5dVUyTnliMnhzUlhabGJuUXNJR1poYkhObElDazdYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuYlc5MWMyVjNhR1ZsYkNjc0lHOXVVMk55YjJ4c1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmJXOTFjMlZ0YjNabEp5d2diMjVOYjNWelpVMXZkbVZGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpXUnZkMjRuTENCdmJrMXZkWE5sUkc5M2JrVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oyMXZkWE5sZFhBbkxDQnZiazF2ZFhObFZYQkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVYSEpjYmlBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oydGxlV1J2ZDI0bkxDQnZia3RsZVVSdmQyNUZkbVZ1ZEN3Z1ptRnNjMlVnS1RzZ1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCdmNIUnBiMjV6TG5Wd1pHRjBaVU5oYm5aaGMxTnBlbVZQYmxkcGJtUnZkMUpsYzJsNlpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHlaWE5wZW1VbkxDQnZibGRwYm1SdmQxSmxjMmw2WlVWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZMeUJFVDAwZ2MyVjBkWEJjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjNKbGJHRjBhWFpsSnp0Y2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWNHOXphWFJwYjI0Z1BTQW5ZV0p6YjJ4MWRHVW5PMXh5WEc0Z0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNGdJQ0FnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWNHOXphWFJwYjI0Z1BTQW5ZV0p6YjJ4MWRHVW5PMXh5WEc1Y2NseHVJQ0FnSUhObGRFTmhiblpoYzBScGJXVnVjMmx2Ym5Nb0tUdGNjbHh1WEhKY2JpQWdJQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5PMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2diM0IwYVc5dWN5NWtaV0oxWnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXNXBkRVJsWW5WbktDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1cGRFZFZTU2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ2s3WEhKY2JpQWdJQ0JoYm1sdFlYUmxLQ2s3WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYVc1cGRGQnZjM1JRY205alpYTnphVzVuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdSbGNIUm9VMmhoWkdWeUlEMGdWRWhTUlVVdVUyaGhaR1Z5VEdsaUxtUmxjSFJvVWtkQ1FUdGNjbHh1SUNBZ0lHUmxjSFJvVlc1cFptOXliWE1nUFNCVVNGSkZSUzVWYm1sbWIzSnRjMVYwYVd4ekxtTnNiMjVsS0NCa1pYQjBhRk5vWVdSbGNpNTFibWxtYjNKdGN5QXBPMXh5WEc1Y2NseHVJQ0FnSUdSbGNIUm9UV0YwWlhKcFlXd2dQU0J1WlhjZ1ZFaFNSVVV1VTJoaFpHVnlUV0YwWlhKcFlXd29JSHRjY2x4dUlDQWdJQ0FnSUNCbWNtRm5iV1Z1ZEZOb1lXUmxjam9nWkdWd2RHaFRhR0ZrWlhJdVpuSmhaMjFsYm5SVGFHRmtaWElzWEhKY2JpQWdJQ0FnSUNBZ2RtVnlkR1Y0VTJoaFpHVnlPaUJrWlhCMGFGTm9ZV1JsY2k1MlpYSjBaWGhUYUdGa1pYSXNYSEpjYmlBZ0lDQWdJQ0FnZFc1cFptOXliWE02SUdSbGNIUm9WVzVwWm05eWJYTmNjbHh1SUNBZ0lIMGdLVHRjY2x4dUlDQWdJR1JsY0hSb1RXRjBaWEpwWVd3dVlteGxibVJwYm1jZ1BTQlVTRkpGUlM1T2IwSnNaVzVrYVc1bk8xeHlYRzVjY2x4dUlDQWdJR1JsY0hSb1ZHRnlaMlYwSUQwZ2JtVjNJRlJJVWtWRkxsZGxZa2RNVW1WdVpHVnlWR0Z5WjJWMEtDQmpZVzUyWVhOWGFXUjBhQ3dnWTJGdWRtRnpTR1ZwWjJoMExDQjdYSEpjYmlBZ0lDQWdJQ0FnYldsdVJtbHNkR1Z5T2lCVVNGSkZSUzVPWldGeVpYTjBSbWxzZEdWeUxGeHlYRzRnSUNBZ0lDQWdJRzFoWjBacGJIUmxjam9nVkVoU1JVVXVUbVZoY21WemRFWnBiSFJsY2l4Y2NseHVJQ0FnSUNBZ0lDQm1iM0p0WVhRNklGUklVa1ZGTGxKSFFrRkdiM0p0WVhSY2NseHVJQ0FnSUgwZ0tUdGNjbHh1WEhKY2JpQWdJQ0JqYjIxd2IzTmxjaUE5SUc1bGR5QlVTRkpGUlM1RlptWmxZM1JEYjIxd2IzTmxjaWdnY21WdVpHVnlaWElnS1R0Y2NseHVJQ0FnSUdOdmJYQnZjMlZ5TG1Ga1pGQmhjM01vSUc1bGR5QlVTRkpGUlM1U1pXNWtaWEpRWVhOektDQnpZMlZ1WlN3Z1kyRnRaWEpoSUNrZ0tUdGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JFWlhCMGFDQnZaaUJtYVdWc1pDQnphR0ZrWlhJZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUdSdlppQTlJRzVsZHlCVVNGSkZSUzVUYUdGa1pYSlFZWE56S0NCVVNGSkZSUzVFYjBaVGFHRmtaWElnS1R0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTBSR1Z3ZEdndWRtRnNkV1VnUFNCa1pYQjBhRlJoY21kbGREdGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV6YVhwbExuWmhiSFZsTG5ObGRDZ2dZMkZ1ZG1GelYybGtkR2dzSUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SbGVIUmxiQzUyWVd4MVpTNXpaWFFvSURFdU1DQXZJR05oYm5aaGMxZHBaSFJvTENBeExqQWdMeUJqWVc1MllYTklaV2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0F2TDIxaGEyVWdjM1Z5WlNCMGFHRjBJSFJvWlhObElIUjNieUIyWVd4MVpYTWdZWEpsSUhSb1pTQnpZVzFsSUdadmNpQjViM1Z5SUdOaGJXVnlZU3dnYjNSb1pYSjNhWE5sSUdScGMzUmhibU5sY3lCM2FXeHNJR0psSUhkeWIyNW5MbHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5wdVpXRnlMblpoYkhWbElEMGdZMkZ0WlhKaExtNWxZWEk3SUM4dlkyRnRaWEpoSUdOc2FYQndhVzVuSUhOMFlYSjBYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZW1aaGNpNTJZV3gxWlNBOUlHTmhiV1Z5WVM1bVlYSTdJQzh2WTJGdFpYSmhJR05zYVhCd2FXNW5JR1Z1WkZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOaGJFUmxjSFJvTG5aaGJIVmxJRDBnTlRzZ0x5OW1iMk5oYkNCa2FYTjBZVzVqWlNCMllXeDFaU0JwYmlCdFpYUmxjbk1zSUdKMWRDQjViM1VnYldGNUlIVnpaU0JoZFhSdlptOWpkWE1nYjNCMGFXOXVJR0psYkc5M1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabTlqWVd4TVpXNW5kR2d1ZG1Gc2RXVWdQU0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2c3SUM4dlptOWpZV3dnYkdWdVozUm9JR2x1SUcxdFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabk4wYjNBdWRtRnNkV1VnUFNBNExqQTdJQzh2WmkxemRHOXdJSFpoYkhWbFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVjMmh2ZDBadlkzVnpMblpoYkhWbElEMGdabUZzYzJVN0lDOHZjMmh2ZHlCa1pXSjFaeUJtYjJOMWN5QndiMmx1ZENCaGJtUWdabTlqWVd3Z2NtRnVaMlVnS0c5eVlXNW5aU0E5SUdadlkyRnNJSEJ2YVc1MExDQmliSFZsSUQwZ1ptOWpZV3dnY21GdVoyVXBYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtMWhiblZoYkdSdlppNTJZV3gxWlNBOUlIUnlkV1U3SUM4dmJXRnVkV0ZzSUdSdlppQmpZV3hqZFd4aGRHbHZibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG01a2IyWnpkR0Z5ZEM1MllXeDFaU0E5SURFeE95QXZMMjVsWVhJZ1pHOW1JR0pzZFhJZ2MzUmhjblJjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1dVpHOW1aR2x6ZEM1MllXeDFaU0E5SURnd095QXZMMjVsWVhJZ1pHOW1JR0pzZFhJZ1ptRnNiRzltWmlCa2FYTjBZVzVqWlNBZ0lDQmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtWkc5bWMzUmhjblF1ZG1Gc2RXVWdQU0F3T3lBdkwyWmhjaUJrYjJZZ1lteDFjaUJ6ZEdGeWRGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVprYjJaa2FYTjBMblpoYkhWbElEMGdNVEF3T3lBdkwyWmhjaUJrYjJZZ1lteDFjaUJtWVd4c2IyWm1JR1JwYzNSaGJtTmxJRnh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NURiME11ZG1Gc2RXVWdQU0F3TGpBek95QXZMMk5wY21Oc1pTQnZaaUJqYjI1bWRYTnBiMjRnYzJsNlpTQnBiaUJ0YlNBb016VnRiU0JtYVd4dElEMGdNQzR3TTIxdEtTQWdJQ0JjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkbWxuYm1WMGRHbHVaeTUyWVd4MVpTQTlJR1poYkhObE95QXZMM1Z6WlNCdmNIUnBZMkZzSUd4bGJuTWdkbWxuYm1WMGRHbHVaejljY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVZWFYwYjJadlkzVnpMblpoYkhWbElEMGdkSEoxWlRzZ0x5OTFjMlVnWVhWMGIyWnZZM1Z6SUdsdUlITm9ZV1JsY2o4Z1pHbHpZV0pzWlNCcFppQjViM1VnZFhObElHVjRkR1Z5Ym1Gc0lHWnZZMkZzUkdWd2RHZ2dkbUZzZFdWY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1iMk4xY3k1MllXeDFaUzV6WlhRb0lEQXVNelVzSURBdU16VWdLVHNnTHk4Z1lYVjBiMlp2WTNWeklIQnZhVzUwSUc5dUlITmpjbVZsYmlBb01DNHdMREF1TUNBdElHeGxablFnYkc5M1pYSWdZMjl5Ym1WeUxDQXhMakFzTVM0d0lDMGdkWEJ3WlhJZ2NtbG5hSFFwSUZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtMWhlR0pzZFhJdWRtRnNkV1VnUFNCdmNIUnBiMjV6TG1Kc2RYSkJiVzkxYm5RN0lDOHZZMnhoYlhBZ2RtRnNkV1VnYjJZZ2JXRjRJR0pzZFhJZ0tEQXVNQ0E5SUc1dklHSnNkWElzTVM0d0lHUmxabUYxYkhRcElDQWdJRnh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTBhSEpsYzJodmJHUXVkbUZzZFdVZ1BTQXdPeUF2TDJocFoyaHNhV2RvZENCMGFISmxjMmh2YkdRN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVaMkZwYmk1MllXeDFaU0E5SURBN0lDOHZhR2xuYUd4cFoyaDBJR2RoYVc0N1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1KcFlYTXVkbUZzZFdVZ1BTQXdPeUF2TDJKdmEyVm9JR1ZrWjJVZ1ltbGhjeUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm5KcGJtZGxMblpoYkhWbElEMGdNRHNnTHk5aWIydGxhQ0JqYUhKdmJXRjBhV01nWVdKbGNuSmhkR2x2Ymk5bWNtbHVaMmx1WjF4eVhHNWNjbHh1SUNBZ0lFWllRVUVnUFNCdVpYY2dWRWhTUlVVdVUyaGhaR1Z5VUdGemN5Z2dWRWhTUlVVdVJsaEJRVk5vWVdSbGNpQXBPMXh5WEc1Y2NseHVJQ0FnSUVaWVFVRXVkVzVwWm05eWJYTXVjbVZ6YjJ4MWRHbHZiaTUyWVd4MVpTNXpaWFFvSURFZ0x5QmpZVzUyWVhOWGFXUjBhQ3dnTVNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUmxoQlFTNXlaVzVrWlhKVWIxTmpjbVZsYmlBOUlIUnlkV1U3WEhKY2JseHlYRzRnSUNBZ1kyOXRjRzl6WlhJdVlXUmtVR0Z6Y3lnZ1pHOW1JQ2s3WEhKY2JpQWdJQ0JqYjIxd2IzTmxjaTVoWkdSUVlYTnpLQ0JHV0VGQklDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUkVaV0oxWnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCemRHRjBjeUE5SUc1bGR5QlRkR0YwY3lncE8xeHlYRzRnSUNBZ2MzUmhkSE11Wkc5dFJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNiaUFnSUNCemRHRjBjeTVrYjIxRmJHVnRaVzUwTG5OMGVXeGxMbXhsWm5RZ1BTQmNJakJjSWp0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXVkRzl3SUQwZ1hDSXdYQ0k3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDZ2djM1JoZEhNdVpHOXRSV3hsYldWdWRDQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmtaV0oxWnlBOUlHNWxkeUJVU0ZKRlJTNU5aWE5vS0NCdVpYY2dWRWhTUlVVdVFtOTRSMlZ2YldWMGNua29JREl3TENBeU1Dd2dNakFzSURFc0lERXNJREVnS1NBcE8xeHlYRzRnSUNBZ1pHVmlkV2N1Y0c5emFYUnBiMjR1YzJWMEtGeHlYRzRnSUNBZ0lDQWdJR3hwWjJoMExuQnZjMmwwYVc5dUxuZ3NYSEpjYmlBZ0lDQWdJQ0FnYkdsbmFIUXVjRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNCc2FXZG9kQzV3YjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCa1pXSjFaeUFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnBibWwwUjFWSklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJqWVcxbGNtRkdiMnhrWlhJc1hISmNiaUFnSUNBZ0lDQWdZMkZ0WlhKaFJtOWpZV3hNWlc1bmRHZ3NYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lGOXNZWE4wTzF4eVhHNWNjbHh1SUNBZ0lHZDFhU0E5SUc1bGR5QmtZWFF1UjFWSktDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnZjSFJwYjI1ekxuQnZjM1J3Y205alpYTnphVzVuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZHYjJ4a1pYSWdQU0JuZFdrdVlXUmtSbTlzWkdWeUtDQW5RMkZ0WlhKaEp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdOaGJXVnlZVVp2WTJGc1RHVnVaM1JvSUQwZ1kyRnRaWEpoUm05c1pHVnlMbUZrWkNnZ1kyRnRaWEpoTENBblptOWpZV3hNWlc1bmRHZ25MQ0F5T0N3Z01qQXdJQ2t1Ym1GdFpTZ2dKMFp2WTJGc0lFeGxibWQwYUNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqWVcxbGNtRkdiMk5oYkV4bGJtZDBhQzV2YmtOb1lXNW5aU2dnZFhCa1lYUmxRMkZ0WlhKaElDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpQTlJR2QxYVM1aFpHUkdiMnhrWlhJb0lDZEVaWEIwYUNCdlppQkdhV1ZzWkNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm05allXeEVaWEIwYUN3Z0ozWmhiSFZsSnl3Z01Dd2dNVEFnS1M1dVlXMWxLQ0FuUm05allXd2dSR1Z3ZEdnbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1aemRHOXdMQ0FuZG1Gc2RXVW5MQ0F3TENBeU1pQXBMbTVoYldVb0lDZEdJRk4wYjNBbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG0xaGVHSnNkWElzSUNkMllXeDFaU2NzSURBc0lETWdLUzV1WVcxbEtDQW5iV0Y0SUdKc2RYSW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV6YUc5M1JtOWpkWE1zSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVTJodmR5QkdiMk5oYkNCU1lXNW5aU2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG0xaGJuVmhiR1J2Wml3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkTllXNTFZV3dnUkc5R0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dVpHOW1jM1JoY25Rc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkdVpXRnlJSE4wWVhKMEp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dVpHOW1aR2x6ZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNakF3SUNrdWJtRnRaU2dnSjI1bFlYSWdabUZzYkc5bVppY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptUnZabk4wWVhKMExDQW5kbUZzZFdVbkxDQXdMQ0F5TURBZ0tTNXVZVzFsS0NBblptRnlJSE4wWVhKMEp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bVpHOW1aR2x6ZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNakF3SUNrdWJtRnRaU2dnSjJaaGNpQm1ZV3hzYjJabUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVRMjlETENBbmRtRnNkV1VuTENBd0xDQXdMakVnS1M1emRHVndLQ0F3TGpBd01TQXBMbTVoYldVb0lDZGphWEpqYkdVZ2IyWWdZMjl1Wm5WemFXOXVKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtVjBkR2x1Wnl3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkV2FXZHVaWFIwYVc1bkp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHViM1YwTENBbmRtRnNkV1VuTENBd0xDQXlJQ2t1Ym1GdFpTZ2dKMjkxZEdWeUlHSnZjbVJsY2ljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtbHVMQ0FuZG1Gc2RXVW5MQ0F3TENBeElDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2RwYm01bGNpQmliM0prWlhJbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNW1ZV1JsTENBbmRtRnNkV1VuTENBd0xDQXlNaUFwTG01aGJXVW9JQ2RtWVdSbElHRjBKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11WVhWMGIyWnZZM1Z6TENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjBGMWRHOW1iMk4xY3ljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm05amRYTXVkbUZzZFdVc0lDZDRKeXdnTUN3Z01TQXBMbTVoYldVb0lDZG1iMk4xY3lCNEp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTjFjeTUyWVd4MVpTd2dKM2tuTENBd0xDQXhJQ2t1Ym1GdFpTZ2dKMlp2WTNWeklIa25JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTUwYUhKbGMyaHZiR1FzSUNkMllXeDFaU2NzSURBc0lERWdLUzV6ZEdWd0tDQXdMakF4SUNrdWJtRnRaU2dnSjNSb2NtVnphRzlzWkNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11WjJGcGJpd2dKM1poYkhWbEp5d2dNQ3dnTVRBd0lDa3VibUZ0WlNnZ0oyZGhhVzRuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1aWFXRnpMQ0FuZG1Gc2RXVW5MQ0F3TENBMElDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2RpYVdGekp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWNtbHVaMlVzSUNkMllXeDFaU2NzSURBc0lEVWdLUzV6ZEdWd0tDQXdMakF4SUNrdWJtRnRaU2dnSjJaeWFXNW5aU2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG01dmFYTmxMQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMVZ6WlNCT2IybHpaU2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVibUZ0YjNWdWRDd2dKM1poYkhWbEp5d2dNQ3dnTUM0d01ERWdLUzV6ZEdWd0tDQXdMakF3TURFZ0tTNXVZVzFsS0NBblpHbDBhR1Z5SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVpHVndkR2hpYkhWeUxDQW5kbUZzZFdVbklDa3VibUZ0WlNnZ0owSnNkWElnUkdWd2RHZ25JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtUmljMmw2WlN3Z0ozWmhiSFZsSnl3Z01Dd2dOU0FwTG01aGJXVW9JQ2RpYkhWeUlITnBlbVVuSUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdkMWFTNWpiRzl6WlNncE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUIxY0dSaGRHVkRZVzFsY21FZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1kyRnRaWEpoTG5ObGRFeGxibk1vSUdOaGJXVnlZUzVtYjJOaGJFeGxibWQwYUN3Z1kyRnRaWEpoTG1aeVlXMWxVMmw2WlNBcE8xeHlYRzRnSUNBZ1kyRnRaWEpoTG5Wd1pHRjBaVkJ5YjJwbFkzUnBiMjVOWVhSeWFYZ29LVHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTmhiRXhsYm1kMGFDNTJZV3gxWlNBOUlHTmhiV1Z5WVM1bWIyTmhiRXhsYm1kMGFEdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYVc1cGRFTnlZWFJsY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCbWIzSWdLQ0IyWVhJZ1kzSmhkR1ZKWkNBOUlEQTdJR055WVhSbFNXUWdQQ0J2Y0hScGIyNXpMbTVpUTNKaGRHVnpPeUJqY21GMFpVbGtLeXNnS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOeVlYUmxJRDBnWTNKbFlYUmxRM0poZEdVb0lHTnlZWFJsU1dRZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqY21GMFpYTkRiMjUwWVdsdVpYSXVZV1JrS0NCamNtRjBaU0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMbkJ2YzJsMGFXOXVMbm9nUFNBdEtDQXhNVEFnTFNBb0lERXhNQ0FxSUc5d2RHbHZibk11Ym1KRGNtRjBaWE1nS1NBcElDOGdNanRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1kzSmxZWFJsUTNKaGRHVWdQU0JtZFc1amRHbHZiaUFvSUdsa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOeVlYUmxjMXNnYVdRZ1hTQTlJRzVsZHlCVVNGSkZSUzVQWW1wbFkzUXpSQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZlltOTBkRzl0SUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dNakF3TENBeE1Dd2dNVEF3SUNrc0lIZHZiMlJmYldGMFpYSnBZV3dnS1R0Y2NseHVJQ0FnSUdOeVlYUmxjMXNnYVdRZ1hTNWhaR1FvSUdKdmVGOWliM1IwYjIwZ0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1ltOTRYMnhsWm5RZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F5TURBc0lERXdMQ0E0TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNCaWIzaGZiR1ZtZEM1d2IzTnBkR2x2Ymk1elpYUW9JREFzSURNMUxDQXROVFVnS1R0Y2NseHVJQ0FnSUdKdmVGOXNaV1owTG5KdmRHRjBhVzl1TG5nZ1BTQk5ZWFJvTGxCSklDOGdNanRjY2x4dUlDQWdJR055WVhSbGMxc2dhV1FnWFM1aFpHUW9JR0p2ZUY5c1pXWjBJQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwWkNBOVBUMGdNQ0FwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWW05NFgzSnBaMmgwSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dNakF3TENBeE1Dd2dPREFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lHSnZlRjl5YVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSURBc0lETTFMQ0ExTlNBcE8xeHlYRzRnSUNBZ0lDQWdJR0p2ZUY5eWFXZG9kQzV5YjNSaGRHbHZiaTU0SUQwZ1RXRjBhQzVRU1NBdklESTdYSEpjYmlBZ0lDQWdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgzSnBaMmgwSUNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkbUZ5SUdKdmVGOWlZV05ySUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dPREFzSURFd0xDQXhNakFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnWW05NFgySmhZMnN1Y0c5emFYUnBiMjR1YzJWMEtDQXRNVEExTENBek5Td2dNQ0FwTzF4eVhHNGdJQ0FnWW05NFgySmhZMnN1Y205MFlYUnBiMjR1ZWlBOUlFMWhkR2d1VUVrZ0x5QXlPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJKaFkyc2dLVHRjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJaeWIyNTBJRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ05EQXNJREV3TENBeE1EQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdZbTk0WDJaeWIyNTBMbkJ2YzJsMGFXOXVMbk5sZENnZ09UVXNJREkxTENBd0lDazdYSEpjYmlBZ0lDQmliM2hmWm5KdmJuUXVjbTkwWVhScGIyNHVlaUE5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMlp5YjI1MElDazdYSEpjYmx4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExuQnZjMmwwYVc5dUxub2dQU0F0TVRFd0lDb2dhV1E3WEhKY2JpQWdJQ0J5WlhSMWNtNGdZM0poZEdWeld5QnBaQ0JkTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnBibWwwVW1WamIzSmtjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1kzVnljbVZ1ZEZKbFkyOXlaRWxrSUQwZ01EdGNjbHh1SUNBZ0lHWnZjaUFvSUhaaGNpQmpjbUYwWlVsa0lEMGdNRHNnWTNKaGRHVkpaQ0E4SUdOeVlYUmxjeTVzWlc1bmRHZzdJR055WVhSbFNXUXJLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUhCdmN5QTlJREE3SUhCdmN5QThJRzl3ZEdsdmJuTXVjbVZqYjNKa2MxQmxja055WVhSbE95QndiM01yS3lBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzSmxZWFJsVW1WamIzSmtLQ0JqZFhKeVpXNTBVbVZqYjNKa1NXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVW1WamIzSmtTV1FyS3p0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdZM0psWVhSbFVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDQnBaQ3dnWTNKaGRHVkpaQ3dnY0c5eklDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnlaV052Y21RZ1BTQnVaWGNnVW1WamIzSmtLQ0JwWkN3Z1kzSmhkR1ZKWkN3Z2NHOXpJQ2s3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR055WVhSbFNXUWdYUzVoWkdRb0lISmxZMjl5WkM1dFpYTm9JQ2s3WEhKY2JpQWdJQ0J5WldOdmNtUnpMbkIxYzJnb0lISmxZMjl5WkNBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJuWlhSU1pXTnZjbVJOWVhSbGNtbGhiQ0E5SUdaMWJtTjBhVzl1SUNnZ2MzSmpMQ0JvWVhOVGJHVmxkbVVnS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdsdFp5QTlJRzVsZHlCSmJXRm5aU2dwTzF4eVhHNGdJQ0FnYVcxbkxtTnliM056VDNKcFoybHVJRDBnWENKQmJtOXVlVzF2ZFhOY0lqdGNjbHh1SUNBZ0lHbHRaeTV6Y21NZ1BTQnpjbU1nUHlCemNtTWdPaUFuSnp0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYVcxblYybGtkR2dnUFNBME1EQXNYSEpjYmlBZ0lDQWdJQ0FnYVcxblNHVnBaMmgwSUQwZ05EQXdMRnh5WEc0Z0lDQWdJQ0FnSUcxaGNFTmhiblpoY3lBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSUNkallXNTJZWE1uSUNrN1hISmNibHh5WEc0Z0lDQWdiV0Z3UTJGdWRtRnpMbmRwWkhSb0lEMGdiV0Z3UTJGdWRtRnpMbWhsYVdkb2RDQTlJRFF3TUR0Y2NseHVYSEpjYmlBZ0lDQjJZWElnZEdWNGRIVnlaU0E5SUc1bGR5QlVTRkpGUlM1VVpYaDBkWEpsS0NCdFlYQkRZVzUyWVhNZ0tUdGNjbHh1SUNBZ0lIUmxlSFIxY21VdWJXbHVSbWxzZEdWeUlEMGdWRWhTUlVVdVRHbHVaV0Z5Um1sc2RHVnlPMXh5WEc1Y2NseHVJQ0FnSUdsdFp5NXZibXh2WVdRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2FHRnpVMnhsWlhabElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlITnNaV1YyWlNBOUlHNWxkeUJKYldGblpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiR1ZsZG1VdWMzSmpJRDBnYjNCMGFXOXVjeTV6YkdWbGRtVk5ZWE5yVkdWNGRIVnlaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc1pXVjJaUzV2Ym14dllXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjBlQ0E5SUcxaGNFTmhiblpoY3k1blpYUkRiMjUwWlhoMEtDQW5NbVFuSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NCcGJXZFhhV1IwYUNBdklESXNJR2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04wZUM1eWIzUmhkR1VvSUUxaGRHZ3VVRWtnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQXRhVzFuVjJsa2RHZ2dMeUF5TENBdGFXMW5TR1ZwWjJoMElDOGdNaUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbVJ5WVhkSmJXRm5aU2dnYVcxbkxDQXhNekFzSURFek1Dd2dNVE0xTENBeE16VWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNWtjbUYzU1cxaFoyVW9JSE5zWldWMlpTd2dNQ3dnTUN3Z05EQXdMQ0EwTURBZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSMWNtVXVibVZsWkhOVmNHUmhkR1VnUFNCMGNuVmxPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpkSGdnUFNCdFlYQkRZVzUyWVhNdVoyVjBRMjl1ZEdWNGRDZ2dKekprSnlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0JwYldkWGFXUjBhQ0F2SURJc0lHbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuSnZkR0YwWlNnZ1RXRjBhQzVRU1NBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5SeVlXNXpiR0YwWlNnZ0xXbHRaMWRwWkhSb0lDOGdNaXdnTFdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2FXMW5MQ0F3TENBd0xDQTBNREFzSURRd01DQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbExtNWxaV1J6VlhCa1lYUmxJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2MyeGxaWFpsVFdGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2IzQjBhVzl1Y3k1emJHVmxkbVZEYjJ4dmNseHlYRzVjY2x4dUlDQWdJSDBnS1R0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYldGMFpYSnBZV3h6SUQwZ1cxeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc0xGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc0xGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc0xGeHlYRzRnSUNBZ0lDQWdJQzh2SUhSbGVIUjFjbVZjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ01IaG1abVptWm1Zc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGNEb2dkR1Y0ZEhWeVpWeHlYRzRnSUNBZ0lDQWdJSDBnS1N4Y2NseHVJQ0FnSUNBZ0lDQnpiR1ZsZG1WTllYUmxjbWxoYkN4Y2NseHVJQ0FnSUNBZ0lDQnpiR1ZsZG1WTllYUmxjbWxoYkZ4eVhHNGdJQ0FnWFR0Y2NseHVJQ0FnSUhKbGRIVnliaUJ0WVhSbGNtbGhiSE03WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRlZVU1V4VElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1ZG1GeUlIZG9aV1ZzUkdsemRHRnVZMlVnUFNCbWRXNWpkR2x2YmlBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0FoWlNBcElHVWdQU0JsZG1WdWREdGNjbHh1SUNBZ0lIWmhjaUIzSUQwZ1pTNTNhR1ZsYkVSbGJIUmhMRnh5WEc0Z0lDQWdJQ0FnSUdRZ1BTQmxMbVJsZEdGcGJEdGNjbHh1SUNBZ0lHbG1JQ2dnWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0IzSUNrZ2NtVjBkWEp1SUhjZ0x5QmtJQzhnTkRBZ0tpQmtJRDRnTUNBL0lERWdPaUF0TVRzZ0x5OGdUM0JsY21GY2NseHVJQ0FnSUNBZ0lDQmxiSE5sSUhKbGRIVnliaUF0WkNBdklETTdJQzh2SUVacGNtVm1iM2c3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUhKbGRIVnliaUIzSUM4Z01USXdPeUF2THlCSlJTOVRZV1poY21rdlEyaHliMjFsWEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnZDJobFpXeEVhWEpsWTNScGIyNGdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhaU0FwSUdVZ1BTQmxkbVZ1ZER0Y2NseHVJQ0FnSUhKbGRIVnliaUFvSUdVdVpHVjBZV2xzSUR3Z01DQXBJRDhnTVNBNklDZ2daUzUzYUdWbGJFUmxiSFJoSUQ0Z01DQXBJRDhnTVNBNklDMHhPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCamIyOXlaSE5GY1hWaGJITkJjSEJ5YjNnZ1BTQm1kVzVqZEdsdmJpQW9JR052YjNKa01Td2dZMjl2Y21ReUxDQnlZVzVuWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdLQ0JOWVhSb0xtRmljeWdnWTI5dmNtUXhMbmdnTFNCamIyOXlaREl1ZUNBcElEdzlJSEpoYm1kbElDa2dKaVlnS0NCTllYUm9MbUZpY3lnZ1kyOXZjbVF4TG5rZ0xTQmpiMjl5WkRJdWVTQXBJRHc5SUhKaGJtZGxJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHWmhaR1ZQZFhRZ1BTQm1kVzVqZEdsdmJpQW9JR1ZzWlcxbGJuUXNJR1J2Ym1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnUEQwZ01DNHhJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjY2x4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F3TzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVhOR2RXNWpkR2x2YmlnZ1pHOXVaU0FwSUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyNWxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnTFQwZ01DNHhPMXh5WEc0Z0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabUZrWlU5MWRDZ2daV3hsYldWdWRDd2daRzl1WlNBcE8xeHlYRzRnSUNBZ0lDQWdJSDBzSURFd0lDazdYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdabUZrWlVsdUlEMGdablZ1WTNScGIyNGdLQ0JsYkdWdFpXNTBMQ0JtWVdSbFZHOHNJR1J2Ym1Vc0lHOXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnSVdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQjhmQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ0ppWWdaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUR3Z1ptRmtaVlJ2SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOVBTQW5ibTl1WlNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ZbXh2WTJzbk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNDQTlJREE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvSUNGbGJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNDQTlJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNCOGZDQXhPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHOXdJQ3M5SURBdU1ETTdYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdiM0E3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1poWkdWSmJpZ2daV3hsYldWdWRDd2dabUZrWlZSdkxDQmtiMjVsTENCdmNDQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlMQ0F4TUNBcE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E5SUdaaFpHVlVienRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCcGMwWjFibU4wYVc5dUtDQmtiMjVsSUNrZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjI1bEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQmpZV3hqZFd4aGRHVkRZVzUyWVhOVGFYcGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR05oYm5aaGMxZHBaSFJvSUQwZ2IzQjBhVzl1Y3k1allXNTJZWE5YYVdSMGFDQS9JRzl3ZEdsdmJuTXVZMkZ1ZG1GelYybGtkR2dnT2lCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWpiR2xsYm5SWGFXUjBhRHRjY2x4dUlDQWdJR05oYm5aaGMwaGxhV2RvZENBOUlHOXdkR2x2Ym5NdVkyRnVkbUZ6U0dWcFoyaDBJRDhnYjNCMGFXOXVjeTVqWVc1MllYTklaV2xuYUhRZ09pQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVqYkdsbGJuUklaV2xuYUhRN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSE5sZEVOaGJuWmhjMFJwYldWdWMybHZibk1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnTHk5eWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1b1pXbG5hSFFnSUNBZ0lEMGdZMkZ1ZG1GelNHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1YUdWcFoyaDBJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVJQ0FnSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1obGFXZG9kQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNW9aV2xuYUhRZ1BTQmpZVzUyWVhOSVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2NseHVJQ0FnSUM4dmNtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWQybGtkR2dnSUNBZ0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc0Z0lDQWdZMkZ1ZG1GelEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzUzYVdSMGFDQTlJR05oYm5aaGMxZHBaSFJvSUNzZ0ozQjRKenRjY2x4dUlDQWdJR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbmRwWkhSb0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc0Z0lDQWdiRzloWkdsdVowTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1ZDJsa2RHZ2dQU0JqWVc1MllYTlhhV1IwYUNBcklDZHdlQ2M3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJoMVptWnNaU2dnZGlBcElIc2dMeThnU205dVlYTWdVbUZ2Ym1rZ1UyOWhjbVZ6SUZOcGJIWmhJQzBnYUhSMGNEb3ZMMnB6Wm5KdmJXaGxiR3d1WTI5dEwyRnljbUY1TDNOb2RXWm1iR1VnVzNKbGRpNGdJekZkWEhKY2JseHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHb3NJSGdzSUdrZ1BTQjJMbXhsYm1kMGFEc2dhVHNnYWlBOUlIQmhjbk5sU1c1MEtDQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ2FTQXBMQ0I0SUQwZ2Rsc2dMUzFwSUYwc0lIWmJJR2tnWFNBOUlIWmJJR29nWFN3Z2Rsc2dhaUJkSUQwZ2VDQXBPMXh5WEc0Z0lDQWdjbVYwZFhKdUlIWTdYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnBjMFoxYm1OMGFXOXVLQ0J2WW1vZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW9nUFQwZ0oyWjFibU4wYVc5dUp5QjhmQ0JtWVd4elpUdGNjbHh1WEhKY2JuMWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFVllVRTlTVkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdVSFZpYkdsaklFMWxkR2h2WkhNZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVaWGh3YjNKMGN5NXBibWwwSUQwZ1puVnVZM1JwYjI0Z0tDQndZWEpoYlhNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYjNCMGFXOXVjeUE5SUdWNGRHVnVaQ2dnWkdWbVlYVnNkSE1zSUhCaGNtRnRjeUFwTzF4eVhHNGdJQ0FnTHk4Z1ptVmhkSFZ5WlNCMFpYTjBYSEpjYmlBZ0lDQXZMeUJVVDBSUE9pQjBieUJtYVhnZ0xTQnBaaUFvSUNGemRYQndiM0owY3lCOGZDQWhUVzlrWlhKdWFYcHlMbmRsWW1kc0lDa2djbVYwZFhKdU8xeHlYRzRnSUNBZ1kyOXVjMjlzWlM1c2IyY29JQ2RKYm1sMGFXRnNhWHBwYm1jZ1kzSmhkR1ZrYVdkblpYSXVhbk11TGk0bklDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjNhVzVrYjNjdVpHVjJhV05sVUdsNFpXeFNZWFJwYnlBaFBUMGdkVzVrWldacGJtVmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrY0hJZ1BTQjNhVzVrYjNjdVpHVjJhV05sVUdsNFpXeFNZWFJwYnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2NISWdQU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NCdmNIUnBiMjV6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSkpaQ0FwTzF4eVhHNGdJQ0FnYVdZZ0tDQWhjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJSEp2YjNRZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5RdUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnSUNCallXNTJZWE5EYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRzl3ZEdsdmJuTXVaV3hsYldWdWRITXVZMkZ1ZG1GelEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJR05oYm5aaGN5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUc5d2RHbHZibk11Wld4bGJXVnVkSE11Ykc5aFpHbHVaME52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0ZzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2JHOWhaR2x1WnlCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0lHOXdkR2x2Ym5NdVpXeGxiV1Z1ZEhNdWFXNW1iME52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0ZwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnYVc1bWJ5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lIUnBkR3hsU1c1bWIwVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnZ2IzQjBhVzl1Y3k1bGJHVnRaVzUwY3k1MGFYUnNaVU52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0YwYVhSc1pVbHVabTlGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnlaV052Y21RZ2RHbDBiR1VnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblF1SnlBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JoY25ScGMzUkpibVp2Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0J2Y0hScGIyNXpMbVZzWlcxbGJuUnpMbUZ5ZEdsemRFTnZiblJoYVc1bGNrbGtJQ2s3WEhKY2JpQWdJQ0JwWmlBb0lDRmhjblJwYzNSSmJtWnZSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2NtVmpiM0prSUdGeWRHbHpkQ0JqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR052ZG1WeVNXNW1iMFZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2diM0IwYVc5dWN5NWxiR1Z0Wlc1MGN5NWpiM1psY2tOdmJuUmhhVzVsY2tsa0lDazdYSEpjYmlBZ0lDQnBaaUFvSUNGamIzWmxja2x1Wm05RmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0JqYjNabGNpQnBiV0ZuWlNCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpZV3hqZFd4aGRHVkRZVzUyWVhOVGFYcGxLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXNXBkRk5qWlc1bEtDazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBaQ0E4SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcFpDQStJR3h2WVdSbFpGSmxZMjl5WkhNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNCcFpEdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxuTjBZWEowVW1WdVpHVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR1J2VW1WdVpHVnlJRDBnZEhKMVpUdGNjbHh1SUNBZ0lHRnVhVzFoZEdVb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxuTjBiM0JTWlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdaRzlTWlc1a1pYSWdQU0JtWVd4elpUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxtVnVZV0pzWlZCdmMzUndjbTlqWlhOemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJRzl3ZEdsdmJuTXVjRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQjBjblZsTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WkdsellXSnNaVkJ2YzNSd2NtOWpaWE56YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHOXdkR2x2Ym5NdWNHOXpkSEJ5YjJObGMzTnBibWNnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lGQjFZbXhwWXlCblpYUjBaWEp6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBRMkZ1ZG1GeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1ME8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBVbVZqYjNKa2MwUmhkR0ZNYVhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpXTnZjbVJ6UkdGMFlVeHBjM1E3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSTWIyRmtaV1JTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnNiMkZrWldSU1pXTnZjbVJ6TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WjJWMFUyVnNaV04wWldSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdUV1YwYUc5a2N5QmhZMk5sYzNOdmNuTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Wlhod2IzSjBjeTVzYjJGa1VtVmpiM0prY3lBOUlHeHZZV1JTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG5WdWJHOWhaRkpsWTI5eVpITWdQU0IxYm14dllXUlNaV052Y21Sek8xeHlYRzVsZUhCdmNuUnpMbkpsYzJWMFUyaHZkMjVTWldOdmNtUWdQU0J5WlhObGRGTm9iM2R1VW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5Ob2RXWm1iR1ZTWldOdmNtUnpJRDBnYzJoMVptWnNaVkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11Wm14cGNGTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1pteHBjRk5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbk5sYkdWamRGQnlaWFpTWldOdmNtUWdQU0J6Wld4bFkzUlFjbVYyVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRTVsZUhSU1pXTnZjbVFnUFNCelpXeGxZM1JPWlhoMFVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTm9iM2RNYjJGa2FXNW5JRDBnYzJodmQweHZZV1JwYm1jN1hISmNibVY0Y0c5eWRITXVhR2xrWlV4dllXUnBibWNnUFNCb2FXUmxURzloWkdsdVp6dGNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1VGVkNURWxESUVGUVNTQWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdWNGNHOXlkSE03SWwxOSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKlxyXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkNvcHlTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbmRyZXdiZXJnIC8gaHR0cDovL2FuZHJld2JlcmcuY29tL1xyXG4gKlxyXG4gKiBEZXB0aCBvZiBGaWVsZFxyXG4gKiAtIHBvcnRlZCBmcm9tXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5Eb0ZTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwidERlcHRoXCI6ICAgICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwiem5lYXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInpmYXJcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMTAwMC4wIH0sXHJcblx0XHRcdFwic2l6ZVwiOiAgICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDUxMiwgNTEyICkgfSxcclxuXHRcdFx0XCJ0ZXh0ZWxcIjpcdFx0eyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMS81MTIsIDEvNTEyKX0sXHJcblx0XHRcdFwiZm9jYWxEZXB0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIwMC4wIH0sXHJcblx0XHRcdFwiZm9jYWxMZW5ndGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyOC4wIH0sXHJcblx0XHRcdFwiZnN0b3BcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuOCB9LFxyXG5cdFx0XHRcInNob3dGb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJtYW51YWxkb2ZcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwibmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuMCB9LFxyXG5cdFx0XHRcImZkb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcImZkb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAzLjAgfSxcclxuXHRcdFx0XCJDb0NcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMyB9LFxyXG5cdFx0XHRcInZpZ25ldHRpbmdcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwidmlnbm91dFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4zIH0sXHJcblx0XHRcdFwidmlnbmluXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcclxuXHRcdFx0XCJ2aWduZmFkZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjIuMCB9LFxyXG5cdFx0XHRcImF1dG9mb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJmb2N1c1wiOiAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKSB9LFxyXG5cdFx0XHRcIm1heGJsdXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInRocmVzaG9sZFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuOCB9LFxyXG5cdFx0XHRcImdhaW5cIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS43IH0sXHJcblx0XHRcdFwiYmlhc1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjUgfSxcclxuXHRcdFx0XCJmcmluZ2VcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNyB9LFxyXG5cdFx0XHRcIm5vaXNlXCI6XHRcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwibmFtb3VudFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMDAxIH0sXHJcblx0XHRcdFwiZGVwdGhibHVyXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcImRic2l6ZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4yNX1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcclxuXHRcdFx0XCIjZGVmaW5lIFBJICAzLjE0MTU5MjY1XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHQvL3VuaWZvcm0gdmFyaWFibGVzIGZyb20gZXh0ZXJuYWwgc2NyaXB0XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgc2l6ZTtcIiwgLy8gdGV4dHVyZSB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHRleGVsO1wiLCAvLyB0ZXh0ZWwgc2l6ZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsRGVwdGg7XCIsICAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnN0b3A7XCIsIC8vZi1zdG9wIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHNob3dGb2N1cztcIiwgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcblx0XHRcdC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6bmVhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpmYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly91c2VyIHZhcmlhYmxlcyBub3cgcGFzc2VkIGFzIHVuaWZvcm1zXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBtYW51YWxkb2Y7XCIsIC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZnN0YXJ0O1wiLCAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZkaXN0O1wiLCAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZnN0YXJ0O1wiLCAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZmRpc3Q7XCIsIC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBDb0M7XCIsLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSlcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHZpZ25ldHRpbmc7XCIsIC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbm91dDtcIiwgLy92aWduZXR0aW5nIG91dGVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmluO1wiLCAvL3ZpZ25ldHRpbmcgaW5uZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduZmFkZTtcIiwgLy9mLXN0b3BzIHRpbGwgdmlnbmV0ZSBmYWRlc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgYXV0b2ZvY3VzO1wiLCAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBmb2N1cztcIiwgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBtYXhibHVyO1wiLCAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHRocmVzaG9sZDtcIiwgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZ2FpbjtcIiwgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBiaWFzO1wiLCAvL2Jva2VoIGVkZ2UgYmlhc1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnJpbmdlO1wiLCAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBub2lzZTtcIiwgLy91c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuYW1vdW50O1wiLCAvL2RpdGhlciBhbW91bnRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGRlcHRoYmx1cjtcIiwgLy9ibHVyIHRoZSBkZXB0aCBidWZmZXI/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBkYnNpemU7XCIsIC8vZGVwdGhibHVyc2l6ZVxyXG5cclxuXHRcdFx0Ly8gc2FtcGxlcyBhbmQgcmluZ3MgbmVlZCB0byBiZSBjb25zdGFudHMuIG5vIGR5bmFtaWMgbG9vcCBjb3VudGVycyBpbiBPcGVuR0wgRVNcclxuXHRcdFx0Ly8gQ2FuIHNoYWRlciBiZSBicm9rZW4gaW50byAyIHBhc3M/IC4uLiBcclxuXHRcdFx0XCJpbnQgc2FtcGxlcyA9IDM7XCIsIC8vc2FtcGxlcyBvbiB0aGUgZmlyc3QgcmluZ1xyXG5cdFx0XHRcImNvbnN0IGludCByaW5ncyA9IDM7XCIsIC8vcmluZyBjb3VudFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0bmV4dCBwYXJ0IGlzIGV4cGVyaW1lbnRhbFxyXG5cdFx0XHRub3QgbG9va2luZyBnb29kIHdpdGggc21hbGwgc2FtcGxlIGFuZCByaW5nIGNvdW50XHJcblx0XHRcdGxvb2tzIG9rYXkgc3RhcnRpbmcgZnJvbSBzYW1wbGVzID0gNCwgcmluZ3MgPSA0XHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHRcImJvb2wgcGVudGFnb24gPSBmYWxzZTtcIiwgLy91c2UgcGVudGFnb24gYXMgYm9rZWggc2hhcGU/XHJcblx0XHRcdFwiZmxvYXQgZmVhdGhlciA9IDAuNDtcIiwgLy9wZW50YWdvbiBzaGFwZSBmZWF0aGVyXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8gUkdCQSBkZXB0aFxyXG5cclxuXHRcdFx0XCJmbG9hdCB1bnBhY2tEZXB0aCggY29uc3QgaW4gdmVjNCByZ2JhX2RlcHRoICkge1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbnN0IHZlYzQgYml0X3NoaWZ0ID0gdmVjNCggMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICksIDEuMCAvIDI1Ni4wLCAxLjAgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gZG90KCByZ2JhX2RlcHRoLCBiaXRfc2hpZnQgKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBkZXB0aDtcIixcclxuXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwiZmxvYXQgcGVudGEodmVjMiBjb29yZHMpXCIsIC8vcGVudGFnb25hbCBzaGFwZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IHNjYWxlID0gZmxvYXQocmluZ3MpIC0gMS4zO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMwID0gdmVjNCggMS4wLCAgICAgICAgIDAuMCwgICAgICAgICAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMxID0gdmVjNCggMC4zMDkwMTY5OTQsIDAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMyID0gdmVjNCgtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMzID0gdmVjNCgtMC44MDkwMTY5OTQsLTAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM0ID0gdmVjNCggMC4zMDkwMTY5OTQsLTAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM1ID0gdmVjNCggMC4wICAgICAgICAsMC4wICAgICAgICAgLCAxLjAsICAxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgIG9uZSA9IHZlYzQoIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgUCA9IHZlYzQoKGNvb3JkcyksdmVjMihzY2FsZSwgc2NhbGUpKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IGRpc3QgPSB2ZWM0KDAuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBpbm9yb3V0ID0gLTQuMDtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTMCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gZG90KCBQLCBIUzEgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueiA9IGRvdCggUCwgSFMyICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LncgPSBkb3QoIFAsIEhTMyApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZG90KCBkaXN0LCBvbmUgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTNCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gSFM1LncgLSBhYnMoIFAueiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkaXN0Lng7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKCBpbm9yb3V0LCAwLjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgYmRlcHRoKHZlYzIgY29vcmRzKSAvL2JsdXJyaW5nIGRlcHRoXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZCA9IDAuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGtlcm5lbFs5XTtcIixcclxuXHRcdFx0XHRcInZlYzIgb2Zmc2V0WzldO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgd2ggPSB2ZWMyKHRleGVsLngsIHRleGVsLnkpICogZGJzaXplO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFswXSA9IHZlYzIoLXdoLngsLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzFdID0gdmVjMiggMC4wLCAtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMl0gPSB2ZWMyKCB3aC54IC13aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbM10gPSB2ZWMyKC13aC54LCAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs0XSA9IHZlYzIoIDAuMCwgICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzVdID0gdmVjMiggd2gueCwgIDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzZdID0gdmVjMigtd2gueCwgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbN10gPSB2ZWMyKCAwLjAsICB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs4XSA9IHZlYzIoIHdoLngsIHdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImtlcm5lbFswXSA9IDEuMC8xNi4wOyAgIGtlcm5lbFsxXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFsyXSA9IDEuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzNdID0gMi4wLzE2LjA7ICAga2VybmVsWzRdID0gNC4wLzE2LjA7ICAga2VybmVsWzVdID0gMi4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbNl0gPSAxLjAvMTYuMDsgICBrZXJuZWxbN10gPSAyLjAvMTYuMDsgICBrZXJuZWxbOF0gPSAxLjAvMTYuMDtcIixcclxuXHJcblxyXG5cdFx0XHRcdFwiZm9yKCBpbnQgaT0wOyBpPDk7IGkrKyApXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHRtcCA9IHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsIGNvb3JkcyArIG9mZnNldFtpXSkpO1wiLFxyXG5cdFx0XHRcdFx0XCJkICs9IHRtcCAqIGtlcm5lbFtpXTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gZDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJ2ZWMzIGNvbG9yKHZlYzIgY29vcmRzLGZsb2F0IGJsdXIpXCIsIC8vcHJvY2Vzc2luZyB0aGUgc2FtcGxlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjAsMS4wKSp0ZXhlbCpmcmluZ2UqYmx1cikucjtcIixcclxuXHRcdFx0XHRcImNvbC5nID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoLTAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5nO1wiLFxyXG5cdFx0XHRcdFwiY29sLmIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuYjtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWNvZWZmID0gdmVjMygwLjI5OSwwLjU4NywwLjExNCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW0gPSBkb3QoY29sLnJnYiwgbHVtY29lZmYpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgdGhyZXNoID0gbWF4KChsdW0tdGhyZXNob2xkKSpnYWluLCAwLjApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbCttaXgodmVjMygwLjApLGNvbCx0aHJlc2gqYmx1cik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMyIHJhbmQodmVjMiBjb29yZCkgLy9nZW5lcmF0aW5nIG5vaXNlL3BhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VYID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuMjUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC43NSkpKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVkgPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC43NSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjI1KSkqMi4wLTEuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobm9pc2UpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWCA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVkgPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSoyLjApKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gdmVjMihub2lzZVgsbm9pc2VZKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzMgZGVidWdGb2N1cyh2ZWMzIGNvbCwgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZWRnZSA9IDAuMDAyKmRlcHRoOyAvL2Rpc3RhbmNlIGJhc2VkIGVkZ2Ugc21vb3RoaW5nXCIsXHJcblx0XHRcdFx0XCJmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsZWRnZSxibHVyKSwwLjAsMS4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMC1lZGdlLDEuMCxibHVyKSwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMS4wLDAuNSwwLjApLCgxLjAtbSkqMC42KTtcIixcclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygwLjAsMC41LDEuMCksKCgxLjAtZSktKDEuMC1tKSkqMC4yKTtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInJldHVybiAtemZhciAqIHpuZWFyIC8gKGRlcHRoICogKHpmYXIgLSB6bmVhcikgLSB6ZmFyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IHZpZ25ldHRlKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwwLjUpKTtcIixcclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKHZpZ25vdXQrKGZzdG9wL3ZpZ25mYWRlKSwgdmlnbmluKyhmc3RvcC92aWduZmFkZSksIGRpc3QpO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKGRpc3QsMC4wLDEuMCk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHQvL3NjZW5lIGRlcHRoIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCx2VXYpKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGRlcHRoYmx1cilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZGVwdGggPSBsaW5lYXJpemUoYmRlcHRoKHZVdikpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2ZvY2FsIHBsYW5lIGNhbGN1bGF0aW9uXCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoYXV0b2ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmRGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCxmb2N1cykpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9kb2YgYmx1ciBmYWN0b3IgY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBibHVyID0gMC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChtYW51YWxkb2YpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSBkZXB0aC1mRGVwdGg7XCIsIC8vZm9jYWwgcGxhbmVcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChhLWZkb2ZzdGFydCkvZmRvZmRpc3Q7XCIsIC8vZmFyIERvRlxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKC1hLW5kb2ZzdGFydCkvbmRvZmRpc3Q7XCIsIC8vbmVhciBEb2ZcclxuXHRcdFx0XHRcdFwiYmx1ciA9IChhPjAuMCk/YjpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgZiA9IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBkID0gZkRlcHRoKjEwMDAuMDtcIiwgLy9mb2NhbCBwbGFuZSBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBvID0gZGVwdGgqMTAwMC4wO1wiLCAvL2RlcHRoIGluIG1tXHJcblxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gKG8qZikvKG8tZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoZCpmKS8oZC1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9IChkLWYpLyhkKmZzdG9wKkNvQyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJibHVyID0gYWJzKGEtYikqYztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJibHVyID0gY2xhbXAoYmx1ciwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgcGF0dGVybiBmb3IgZGl0ZXJpbmdcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIG5vaXNlID0gcmFuZCh2VXYpKm5hbW91bnQqYmx1cjtcIixcclxuXHJcblx0XHRcdFx0Ly8gZ2V0dGluZyBibHVyIHggYW5kIHkgc3RlcCBmYWN0b3JcclxuXHJcblx0XHRcdFx0XCJmbG9hdCB3ID0gKDEuMC9zaXplLngpKmJsdXIqbWF4Ymx1citub2lzZS54O1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaCA9ICgxLjAvc2l6ZS55KSpibHVyKm1heGJsdXIrbm9pc2UueTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgZmluYWwgY29sb3JcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZihibHVyIDwgMC4wNSlcIiwgLy9zb21lIG9wdGltaXphdGlvbiB0aGluZ3lcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgcyA9IDEuMDtcIixcclxuXHJcblx0XHRcdFx0XHRcImZvciAoaW50IGkgPSAxOyBpIDw9IHJpbmdzOyBpICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XCJmbG9hdCByaW5nc2FtcGxlcyA9IGZsb2F0KGkgKiBzYW1wbGVzKTtcIixcclxuXHJcblx0XHRcdFx0XHRcdFwiaWYoaSA9PSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDMgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAyKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDYgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAzKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDkgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcImNvbCAvPSBzO1wiLCAvL2RpdmlkZSBieSBzYW1wbGUgY291bnRcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAoc2hvd0ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSBkZWJ1Z0ZvY3VzKGNvbCwgYmx1ciwgZGVwdGgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmICh2aWduZXR0aW5nKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgKj0gdmlnbmV0dGUoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IucmdiID0gY29sO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XCIsXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyID0gZnVuY3Rpb24gKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xyXG5cdFx0XHR2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBUSFJFRS5Db3B5U2hhZGVyID09PSB1bmRlZmluZWQgKVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBcIlRIUkVFLkVmZmVjdENvbXBvc2VyIHJlbGllcyBvbiBUSFJFRS5Db3B5U2hhZGVyXCIgKTtcclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkNvcHlTaGFkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdFx0dmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hc2tBY3RpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5NYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLkNsZWFyTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcblx0XHRcdHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgZGF2aWRlZGMgLyBodHRwOi8vd3d3LnNrZXRjaHBhdGNoLm5ldC9cclxuICpcclxuICogTlZJRElBIEZYQUEgYnkgVGltb3RoeSBMb3R0ZXNcclxuICogaHR0cDovL3RpbW90aHlsb3R0ZXMuYmxvZ3Nwb3QuY29tLzIwMTEvMDYvZnhhYTMtc291cmNlLXJlbGVhc2VkLmh0bWxcclxuICogLSBXZWJHTCBwb3J0IGJ5IEBzdXBlcmVnZ2JlcnRcclxuICogaHR0cDovL3d3dy5nbGdlLm9yZy9kZW1vcy9meGFhL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRlhBQVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwicmVzb2x1dGlvblwiOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxIC8gMTAyNCwgMSAvIDUxMiApICB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1wiLFxyXG5cclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JORSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiApO1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JNICA9IHJnYmFNLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTlcgPSBkb3QoIHJnYk5XLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU0UgPSBkb3QoIHJnYlNFLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWF4ID0gbWF4KCBsdW1hTSwgbWF4KCBtYXgoIGx1bWFOVywgbHVtYU5FKSAsIG1heCggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiBkaXI7XCIsXHJcblx0XHRcdFx0XCJkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XCIsXHJcblx0XHRcdFx0XCJkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGlyUmVkdWNlID0gbWF4KCAoIGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSApICogKCAwLjI1ICogRlhBQV9SRURVQ0VfTVVMICksIEZYQUFfUkVEVUNFX01JTiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XCIsXHJcblx0XHRcdFx0XCJkaXIgPSBtaW4oIHZlYzIoIEZYQUFfU1BBTl9NQVgsICBGWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdCAgXCJtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdFx0XHRcImRpciAqIHJjcERpck1pbikpICogcmVzb2x1dGlvbjtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcIixcclxuXHQgICAgICAgIFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwidmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDAuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0ICAgICAgXHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMy4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwiZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgdmVjNChsdW1hLCAwLjApKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcIixcclxuXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkE7XCIsXHJcblxyXG5cdFx0XHRcdFwifSBlbHNlIHtcIixcclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQjtcIixcclxuXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuTWFza1Bhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Ly8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdXAgc3RlbmNpbFxyXG5cclxuXHRcdFx0dmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaW52ZXJzZSApIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDA7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMTtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xyXG5cdFx0XHRjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xyXG5cclxuXHRcdFx0Ly8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0Ly8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXHJcblxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Y29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xyXG5cclxuXHRcdHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG5cdFx0dGhpcy5vbGRDbGVhckFscGhhID0gMTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHRcclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzID0gZnVuY3Rpb24gKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiJdfQ==
