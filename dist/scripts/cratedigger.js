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


(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.cratedigger = factory(root);
    }
})(this, function(root) {

    'use strict';


    /*=================================
    =            VARIABLES            =
    =================================*/


    // Plugin
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
        projector,
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

        supports = !!document.querySelector && !!root.addEventListener,


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
            closeInfoPanelOnClick: true,
            closeInfoPanelOnScroll: true,
            infoPanelOpacity: 0.9,
            postprocessing: true,
            blurAmount: 0.4,
            updateCanvasSizeOnWindowResize: true,
            infoPanelOpened: function() {},
            infoPanelClosed: function() {},
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

    var Record = function(id, crateId, pos) {
        this.id = id;
        this.crateId = crateId;
        this.pos = pos;
        this.state = 'out';
        this.recordXPos = -62 + (135 / options.recordsPerCrate) * pos;
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 1.5, 100, 1, 1, 1), new THREE.MeshFaceMaterial(getRecordMaterial(null, false)));
        this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(50, 0, 0));
        this.mesh.position.set(this.recordXPos, 0, 0);
        this.mesh.rotation.z = Math.PI / 2;
        this.mesh.recordId = id;
        this.mesh.visible = false;
        this.absolutePosition = new THREE.Vector3();
        this.pushRecord();
    };

    Record.prototype.log = function() {
        console.log("Record n°", this.id,
            "crateId =", this.crateId,
            "pos =", this.pos);
    };

    Record.prototype.showRecord = function() {
        if (this.state !== 'shown') {
            this.state = 'shown';
            this.absolutePosition.setFromMatrixPosition(this.mesh.matrixWorld);
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: options.constants.recordShownY
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(target.position)
                .to({
                    x: this.recordXPos,
                    y: 50 + options.constants.recordShownY,
                    z: this.absolutePosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(camera.position)
                .to({
                    x: this.recordXPos + options.constants.cameraFocusPosition.x,
                    y: options.constants.cameraFocusPosition.y,
                    z: this.absolutePosition.z + options.constants.cameraFocusPosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Record.prototype.pushRecord = function() {
        if (this.state != 'pushed') {
            this.state = 'pushed';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 + Math.PI / 7
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Record.prototype.pullRecord = function() {
        if (this.state !== 'pulled') {
            this.state = 'pulled';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 - Math.PI / 7
                }, options.constants.recordMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Record.prototype.flipRecord = function(done) {
        this.state = 'flipped';
        new TWEEN.Tween(this.mesh.position)
            .to({
                y: options.constants.recordFlippedY
            }, options.constants.infoOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start();

        new TWEEN.Tween(this.mesh.rotation)
            .delay(options.constants.infoOpenTime / 4)
            .to({
                y: Math.PI
            }, options.constants.infoOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start();

        new TWEEN.Tween(target.position)
            .to({
                x: this.recordXPos,
                y: options.constants.recordFlippedY + 50,
                z: this.absolutePosition.z
            }, options.constants.infoOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start()
            .onComplete(done);

        new TWEEN.Tween(camera.position)
            .to({
                x: this.recordXPos + options.constants.cameraFocusPosition.x + 80,
                y: options.constants.cameraFocusPosition.y - 50,
            }, options.constants.cameraMoveTime)
            .easing(TWEEN.Easing.Quartic.Out).start();
    };

    Record.prototype.flipBackRecord = function(done) {
        if (this.state === 'flipped') {
            new TWEEN.Tween(this.mesh.position)
                .delay(options.constants.infoOpenTime / 2)
                .to({
                    y: 0
                }, options.constants.infoOpenTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    y: 0
                }, options.constants.infoOpenTime / 2)
                .easing(TWEEN.Easing.Quartic.Out).start()
                .onComplete(done);

            new TWEEN.Tween(target.position)
                .delay(options.constants.infoOpenTime / 2)
                .to({
                    x: this.recordXPos,
                    y: 75,
                    z: this.absolutePosition.z
                }, options.constants.infoOpenTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(camera.position)
                .to({
                    x: this.recordXPos + options.constants.cameraFocusPosition.x,
                    y: options.constants.cameraFocusPosition.y,
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };


    /*====================================
    =            BASE METHODS            =
    ====================================*/


    var extend = function(defaults, options) {
        for (var key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                defaults[key] = options[key];
            }
        }
        return defaults;
    };

    var animate = function() {
        if (doRender) {
            requestAnimationFrame(animate);
            render();
            if (options.debug) {
                stats.update();
            }
        }
    };

    var render = function() {
        TWEEN.update();
        updateShownRecord();
        if (options.cameraMouseMove) {
            targetCameraPos.x = (mouse.x / canvasWidth - 0.5) * 0.25; // inverse axis?
            targetCameraPos.y = (mouse.y / canvasWidth - 0.5) * 0.25;
            rootContainer.rotation.y += options.constants.cameraMouseMoveSpeedY * (targetCameraPos.x - rootContainer.rotation.y);
            rootContainer.rotation.z += options.constants.cameraMouseMoveSpeedZ * (targetCameraPos.y - rootContainer.rotation.z);
        }
        camera.lookAt(target.position);

        if (options.postprocessing) {
            scene.overrideMaterial = depthMaterial;
            renderer.render(scene, camera, depthTarget);
            scene.overrideMaterial = null;
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
    };

    /*
     * Loading methods
     */
    var unloadRecords = function() {
        for (var i = 0; i < records.length; i++) {
            records[i].data = null;
            records[i].mesh.visible = false;
        }
        loadedRecords = 0;
        recordsDataList = [];
    };


    var loadRecords = function(recordsData, shuffleBeforeLoading) {
        fadeIn(loadingContainerElement, 1, function() {
            if (loadedRecords > 0) {
                unloadRecords();
            }
            if (shuffleBeforeLoading) {
                recordsData = shuffle(recordsData);
            }
            for (var i = 0; i < records.length && i < recordsData.length; i++) {
                records[i].data = recordsData[i];
                records[i].mesh.visible = true;
                records[i].mesh.material.materials = getRecordMaterial(recordsData[i].cover, recordsData[i].hasSleeve);
            }
            // why ??
            // loadedRecords = recordsData.length < records.length ? recordsData.length : records.length;
            loadedRecords = records.length;
            recordsDataList = recordsData;
            console.log('loadedRecords', loadedRecords);
            console.log('recordsData', recordsData.length);
            console.log('records', records.length);
            setTimeout(function() {
                fadeOut(loadingContainerElement);
            }, 2000);
        });
    };

    var shuffleRecords = function() {
        var shuffledRecords = recordsDataList;
        shuffledRecords = shuffle(shuffledRecords);
        loadRecords(shuffledRecords);
    };


    /*=================================================
    =            RECORDS SELECTION METHODS            =
    =================================================*/


    var selectRecord = function(id) {
        if (infoPanelState === 'opened') {
            flipBackSelectedRecord();
        } else if (infoPanelState !== 'opening' && infoPanelState !== 'closing') {
            selectedRecord = id;
        }
    };

    var flipSelectedRecord = function() {
        if (records[selectedRecord]) {
            fillInfoPanel(records[selectedRecord]);
            infoPanelState = 'opening';
            records[selectedRecord].flipRecord(function() {
                infoPanelState = 'opened';
            });
            options.infoPanelOpened();
            setTimeout(function() {
                fadeIn(infoContainerElement, options.infoPanelOpacity);
            }, 300);
        }
    };

    var flipBackSelectedRecord = function() {
        if (infoPanelState === 'opened') {
            fadeOut(infoContainerElement);
            infoPanelState = 'closing';
            records[selectedRecord].flipBackRecord(function() {
                infoPanelState = 'closed';
                options.infoPanelClosed();
            });
        }
    };

    var updateShownRecord = function() {
        if (infoPanelState === 'closed' && shownRecord != selectedRecord) {
            //console.log('updateShownRecord..');
            shownRecord = selectedRecord;
            for (var recordId = 0; recordId < loadedRecords; recordId++) {
                if (selectedRecord == -1) {
                    records[recordId].pushRecord();
                } else if (recordId > selectedRecord &&
                    recordId > records[selectedRecord].crateId * options.recordsPerCrate &&
                    recordId < (records[selectedRecord].crateId * options.recordsPerCrate) + options.recordsPerCrate) {
                    records[recordId].pullRecord();
                } else if (recordId == selectedRecord) {
                    records[recordId].showRecord();
                } else {
                    records[recordId].pushRecord();
                }
            }
        }
    };

    var resetShownRecord = function() {
        if (infoPanelState === 'opened') {
            flipBackSelectedRecord();
        } else if (infoPanelState !== 'opening' && infoPanelState !== 'closing') {
            selectedRecord = -1;
            new TWEEN.Tween(target.position)
                .to({
                    x: options.constants.targetBasePosition.x,
                    y: options.constants.targetBasePosition.y,
                    z: options.constants.targetBasePosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(camera.position)
                .to({
                    x: options.constants.cameraBasePosition.x,
                    y: options.constants.cameraBasePosition.y,
                    z: options.constants.cameraBasePosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };

    var selectPrevRecord = function() {
        if (selectedRecord == -1) {
            selectRecord(loadedRecords - 1);
        } else if (selectedRecord < loadedRecords - 1) {
            selectRecord(selectedRecord + 1);
        } else {
            selectRecord(0);
        }
    };

    var selectNextRecord = function() {
        if (selectedRecord == -1) {
            selectRecord(loadedRecords - 1);
        } else if (selectedRecord > 0) {
            selectRecord(selectedRecord - 1);
        } else {
            selectRecord(loadedRecords - 1);
        }
    };

    var fillInfoPanel = function(record) {
        if (record.data.title) {
            titleInfoElement.innerHTML = record.data.title;
        }
        if (record.data.artist) {
            artistInfoElement.innerHTML = record.data.artist;
        }
        if (record.data.cover) {
            coverInfoElement.style.backgroundImage = 'url(' + record.data.cover + ')';
        }
    };


    /*=======================================
    =            EVENTS HANDLING            =
    =======================================*/


    var onMouseMoveEvent = function(e) {
        var m_posx = 0,
            m_posy = 0,
            e_posx = 0,
            e_posy = 0,
            obj = this;

        //get mouse position on document crossbrowser
        if (!e) {
            e = window.event;
        }
        if (e.pageX || e.pageY) {
            m_posx = e.pageX;
            m_posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            m_posx = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            m_posy = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        //get parent element position in document
        if (obj.offsetParent) {
            do {
                e_posx += obj.offsetLeft;
                e_posy += obj.offsetTop;
            } while (obj = obj.offsetParent); // jshint ignore:line
        }
        // mouse position minus elm position is mouseposition relative to element:
        mouse.x = m_posx - e_posx;
        mouse.y = m_posy - e_posy;
    };

    var onScrollEvent = function(e) {
        if (infoPanelState === 'closed') {
            if (wheelDirection(e) < 0) {
                selectPrevRecord();
            } else {
                selectNextRecord();
            }
        } else if (infoPanelState === 'opened' && options.closeInfoPanelOnScroll) {
            flipBackSelectedRecord();
        }
        return false;
    };

    var onClickEvent = function(mouseDownPos) {
        if (infoPanelState === 'closed') {
            var vectorPos = {
                x: (((mouseDownPos.x - renderer.domElement.offsetLeft / dpr) / (renderer.domElement.width / dpr)) * 2 - 1),
                y: (-((mouseDownPos.y - renderer.domElement.offsetTop / dpr) / (renderer.domElement.height / dpr)) * 2 + 1),
                z: 0.5
            };

            var vector = new THREE.Vector3(vectorPos.x, vectorPos.y, vectorPos.z);
            vector.unproject(camera);
            var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
            var intersects = raycaster.intersectObjects(cratesContainer.children, true);

            // If intersect something
            if (intersects.length > 0) {
                var clickedRecord;

                // Get the first visible record intersected
                for (var i = 0; i < intersects.length; i++) {

                    // If intercept a mesh which is not a record, break
                    if(!intersects[i].object.recordId) {
                        break;
                    }
                    else if (intersects[i].object.visible && intersects[i].object.recordId >= 0) {
                        clickedRecord = records[intersects[i].object.recordId];
                        break;
                    }
                }

                // If there is one
                if (clickedRecord) {
                    if (selectedRecord === clickedRecord.id) {
                        flipSelectedRecord();
                    } else {
                        selectRecord(clickedRecord.id);
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

    var onMouseDownEvent = function(e) {
        clearInterval(scrollRecordsTimeout);
        if (infoPanelState === 'closed') {
            scrollRecords(mouse.y);
            mouseDownPos = {
                x: mouse.x,
                y: mouse.y
            };
        } else if (infoPanelState === 'opened' && options.closeInfoPanelOnClick) {
            flipBackSelectedRecord();
        }
    };

    var onMouseUpEvent = function(e) {
        clearInterval(scrollRecordsTimeout);
        classie.remove(renderer.domElement, 'grab');
        if (coordsEqualsApprox(mouseDownPos, mouse, options.constants.grabSensitivity)) {
            onClickEvent(mouseDownPos);
        }
    };

    var scrollRecords = function(baseY, oldDelta) {
        oldDelta = !oldDelta || Math.abs(oldDelta) > 0.5 ? 0.5 : Math.abs(oldDelta);
        var inverseDelta = 1 - oldDelta;
        var scrollSpeed = inverseDelta * inverseDelta * inverseDelta * 300;

        scrollRecordsTimeout = setTimeout(function() {
            classie.add(renderer.domElement, 'grab');
            var delta = (baseY - mouse.y) / canvasHeight;
            if (delta > 0) {
                selectNextRecord();
                //console.log("NEXT RECORD " + delta);
            } else if (delta < 0) {
                selectPrevRecord();
                //console.log("PREV RECORD " + delta);
            }
            scrollRecords(baseY, delta);
        }, scrollSpeed );
    };

    var onWindowResizeEvent = function(e) {
        calculateCanvasSize();
        setCanvasDimensions();

        renderer.setSize(canvasWidth, canvasHeight);
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();

        dof.uniforms.tDepth.value = depthTarget;
        dof.uniforms.size.value.set(canvasWidth, canvasHeight);
        dof.uniforms.textel.value.set(1.0 / canvasWidth, 1.0 / canvasHeight);
        FXAA.uniforms.resolution.value.set(1 / (canvasWidth * dpr), 1 / (canvasHeight * dpr));
    };


    /*======================================
    =            INITIALISATION            =
    ======================================*/


    var initScene = function() {
        // scene, renderer, camera,...
        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(canvasWidth, canvasHeight);

        canvasContainerElement.appendChild(renderer.domElement);
        renderer.domElement.id = "context";
        renderer.setClearColor(options.backgroundColor, 1);

        camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 20000);
        camera.focalLength = 45;
        camera.frameSize = 32;
        camera.setLens(camera.focalLength, camera.frameSize);

        target = new THREE.Object3D();
        //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
        //        scene.add(target);
        camera.lookAt(target.position);

        projector = new THREE.Projector();

        var wood_texture = THREE.ImageUtils.loadTexture('img/wood.jpg');
        wood_texture.anisotropy = renderer.getMaxAnisotropy();
        wood_material = new THREE.MeshLambertMaterial({
            map: wood_texture
        });

        rootContainer = new THREE.Object3D();
        cratesContainer = new THREE.Object3D();
        scene.add(rootContainer);
        rootContainer.add(cratesContainer);

        initCrates();
        initRecords();

        light = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 1.1);
        light.position.set(300, 80, 0);
        scene.add(light);

        leftLight = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.6);
        leftLight.position.set(-100, 300, 1000);
        scene.add(leftLight);

        rightLight = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.6);
        rightLight.position.set(-100, 300, -1000);
        scene.add(rightLight);

        if (options.postprocessing) {
            initPostProcessing();
        }

        rootContainerElement.addEventListener('DOMMouseScroll', onScrollEvent, false);
        rootContainerElement.addEventListener('mousewheel', onScrollEvent, false);
        rootContainerElement.addEventListener('mousemove', onMouseMoveEvent, false);
        rootContainerElement.addEventListener('mousedown', onMouseDownEvent, false);
        rootContainerElement.addEventListener('mouseup', onMouseUpEvent, false);

        if (options.updateCanvasSizeOnWindowResize) {
            window.addEventListener('resize', onWindowResizeEvent, false);
        }

        //        renderer.domElement.addEventListener('click', onClickEvent, false);

        // DOM setup
        rootContainerElement.style.position = 'relative';
        canvasContainerElement.style.position = 'absolute';
        infoContainerElement.style.position = 'absolute';
        loadingContainerElement.style.position = 'absolute';

        console.log(canvasHeight);

        setCanvasDimensions();

        infoContainerElement.style.display = 'none';

        if (options.debug) {
            initDebug();
            initGUI();
        }
        resetShownRecord();
        animate();
    };

    var initPostProcessing = function() {
        depthShader = THREE.ShaderLib.depthRGBA;
        depthUniforms = THREE.UniformsUtils.clone(depthShader.uniforms);

        depthMaterial = new THREE.ShaderMaterial({
            fragmentShader: depthShader.fragmentShader,
            vertexShader: depthShader.vertexShader,
            uniforms: depthUniforms
        });
        depthMaterial.blending = THREE.NoBlending;

        depthTarget = new THREE.WebGLRenderTarget(canvasWidth, canvasHeight, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat
        });

        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));


        /*==========  Depth of field shader  ==========*/

        dof = new THREE.ShaderPass(THREE.DoFShader);
        dof.uniforms.tDepth.value = depthTarget;
        dof.uniforms.size.value.set(canvasWidth, canvasHeight);
        dof.uniforms.textel.value.set(1.0 / canvasWidth, 1.0 / canvasHeight);

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
        dof.uniforms.focus.value.set(0.35, 0.35); // autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right) 
        dof.uniforms.maxblur.value = options.blurAmount; //clamp value of max blur (0.0 = no blur,1.0 default)    

        dof.uniforms.threshold.value = 0; //highlight threshold;
        dof.uniforms.gain.value = 0; //highlight gain;

        dof.uniforms.bias.value = 0; //bokeh edge bias        
        dof.uniforms.fringe.value = 0; //bokeh chromatic aberration/fringing

        FXAA = new THREE.ShaderPass(THREE.FXAAShader);

        FXAA.uniforms.resolution.value.set(1 / (canvasWidth * dpr), 1 / (canvasHeight * dpr));
        FXAA.renderToScreen = true;

        composer.addPass(dof);
        composer.addPass(FXAA);
    };

    var initDebug = function() {
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = "0";
        stats.domElement.style.top = "0";
        rootContainerElement.appendChild(stats.domElement);

        var debug = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20, 1, 1, 1));
        debug.position.set(
            light.position.x,
            light.position.y,
            light.position.z
        );
        scene.add(debug);
    };

    var initGUI = function() {
        var cameraFolder,
            cameraFocalLength,
            dofFolder,
            _last;

        gui = new dat.GUI();

        if (options.postprocessing) {
            cameraFolder = gui.addFolder('Camera');
            cameraFocalLength = cameraFolder.add(camera, 'focalLength', 28, 200).name('Focal Length');
            cameraFocalLength.onChange(updateCamera);

            dofFolder = gui.addFolder('Depth of Field');
            dofFolder.add(dof.uniforms.focalDepth, 'value', 0, 10).name('Focal Depth');
            dofFolder.add(dof.uniforms.fstop, 'value', 0, 22).name('F Stop');
            dofFolder.add(dof.uniforms.maxblur, 'value', 0, 3).name('max blur');

            dofFolder.add(dof.uniforms.showFocus, 'value').name('Show Focal Range');

            dofFolder.add(dof.uniforms.manualdof, 'value').name('Manual DoF');
            dofFolder.add(dof.uniforms.ndofstart, 'value', 0, 200).name('near start');
            dofFolder.add(dof.uniforms.ndofdist, 'value', 0, 200).name('near falloff');
            dofFolder.add(dof.uniforms.fdofstart, 'value', 0, 200).name('far start');
            dofFolder.add(dof.uniforms.fdofdist, 'value', 0, 200).name('far falloff');

            dofFolder.add(dof.uniforms.CoC, 'value', 0, 0.1).step(0.001).name('circle of confusion');

            dofFolder.add(dof.uniforms.vignetting, 'value').name('Vignetting');
            dofFolder.add(dof.uniforms.vignout, 'value', 0, 2).name('outer border');
            dofFolder.add(dof.uniforms.vignin, 'value', 0, 1).step(0.01).name('inner border');
            dofFolder.add(dof.uniforms.vignfade, 'value', 0, 22).name('fade at');

            dofFolder.add(dof.uniforms.autofocus, 'value').name('Autofocus');
            dofFolder.add(dof.uniforms.focus.value, 'x', 0, 1).name('focus x');
            dofFolder.add(dof.uniforms.focus.value, 'y', 0, 1).name('focus y');

            dofFolder.add(dof.uniforms.threshold, 'value', 0, 1).step(0.01).name('threshold');
            dofFolder.add(dof.uniforms.gain, 'value', 0, 100).name('gain');

            dofFolder.add(dof.uniforms.bias, 'value', 0, 4).step(0.01).name('bias');
            dofFolder.add(dof.uniforms.fringe, 'value', 0, 5).step(0.01).name('fringe');

            dofFolder.add(dof.uniforms.noise, 'value').name('Use Noise');
            dofFolder.add(dof.uniforms.namount, 'value', 0, 0.001).step(0.0001).name('dither');

            dofFolder.add(dof.uniforms.depthblur, 'value').name('Blur Depth');
            dofFolder.add(dof.uniforms.dbsize, 'value', 0, 5).name('blur size');
        }

        gui.close();
    };

    var updateCamera = function() {
        camera.setLens(camera.focalLength, camera.frameSize);
        camera.updateProjectionMatrix();
        dof.uniforms.focalLength.value = camera.focalLength;
    };

    var initCrates = function() {
        for (var crateId = 0; crateId < options.nbCrates; crateId++) {
            var crate = createCrate(crateId);
            cratesContainer.add(crate);
        }
        cratesContainer.position.z = -(110 - (110 * options.nbCrates)) / 2;
    };

    var createCrate = function(id) {
        crates[id] = new THREE.Object3D();

        var box_bottom = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 100), wood_material);
        crates[id].add(box_bottom);

        var box_left = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 80), wood_material);
        box_left.position.set(0, 35, -55);
        box_left.rotation.x = Math.PI / 2;
        crates[id].add(box_left);

        if (id === 0) {
            var box_right = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 80), wood_material);
            box_right.position.set(0, 35, 55);
            box_right.rotation.x = Math.PI / 2;
            crates[id].add(box_right);
        }

        var box_back = new THREE.Mesh(new THREE.BoxGeometry(80, 10, 120), wood_material);
        box_back.position.set(-105, 35, 0);
        box_back.rotation.z = Math.PI / 2;
        crates[id].add(box_back);

        var box_front = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 100), wood_material);
        box_front.position.set(95, 25, 0);
        box_front.rotation.z = Math.PI / 2;
        crates[id].add(box_front);

        crates[id].position.z = -110 * id;
        return crates[id];
    };

    var initRecords = function() {
        var currentRecordId = 0;
        for (var crateId = 0; crateId < crates.length; crateId++) {
            for (var pos = 0; pos < options.recordsPerCrate; pos++) {
                createRecord(currentRecordId, crateId, pos);
                currentRecordId++;
            }
        }
    };

    var createRecord = function(id, crateId, pos) {
        var record = new Record(id, crateId, pos);
        crates[crateId].add(record.mesh);
        records.push(record);
    };

    var getRecordMaterial = function(src, hasSleeve) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = src ? src : '';

        var imgWidth = 400,
            imgHeight = 400,
            mapCanvas = document.createElement('canvas');

        mapCanvas.width = mapCanvas.height = 400;

        var texture = new THREE.Texture(mapCanvas);

        img.onload = function() {
            if (hasSleeve) {
                var sleeve = new Image();
                sleeve.src = 'img/sleeve.png';

                sleeve.onload = function() {
                    var ctx = mapCanvas.getContext('2d');
                    ctx.translate(imgWidth / 2, imgHeight / 2);
                    ctx.rotate(Math.PI / 2);
                    ctx.translate(-imgWidth / 2, -imgHeight / 2);
                    ctx.drawImage(img, 130, 130, 135, 135);
                    ctx.drawImage(sleeve, 0, 0, 400, 400);
                    texture.needsUpdate = true;
                };
            } else {
                var ctx = mapCanvas.getContext('2d');
                ctx.translate(imgWidth / 2, imgHeight / 2);
                ctx.rotate(Math.PI / 2);
                ctx.translate(-imgWidth / 2, -imgHeight / 2);
                ctx.drawImage(img, 0, 0, 400, 400);
                texture.needsUpdate = true;
            }
        };

        var sleeveMaterial = new THREE.MeshLambertMaterial({
            color: options.sleeveColor
        });

        var materials = [
            sleeveMaterial,
            sleeveMaterial,
            sleeveMaterial,
            // texture
            new THREE.MeshLambertMaterial({
                color: 0xffffff,
                map: texture
            }),
            sleeveMaterial,
            sleeveMaterial
        ];
        return materials;
    };


    /*=============================
    =            UTILS            =
    =============================*/


    var wheelDistance = function(e) {
        if (!e) e = event;
        var w = e.wheelDelta,
            d = e.detail;
        if (d) {
            if (w) return w / d / 40 * d > 0 ? 1 : -1; // Opera
            else return -d / 3; // Firefox;
        } else return w / 120; // IE/Safari/Chrome
    };

    var wheelDirection = function(e) {
        if (!e) e = event;
        return (e.detail < 0) ? 1 : (e.wheelDelta > 0) ? 1 : -1;
    };

    var coordsEqualsApprox = function(coord1, coord2, range) {
        return (Math.abs(coord1.x - coord2.x) <= range) && (Math.abs(coord1.y - coord2.y) <= range);
    };

    var fadeOut = function(element, done) {
        if (element.style.opacity <= 0.1) {
            element.style.display = 'none';
            element.style.opacity = 0;
            if (isFunction(done)) {
                done();
            }
        } else {
            element.style.opacity -= 0.1;
            setTimeout(function() {
                fadeOut(element, done);
            }, 10);
        }
    };

    var fadeIn = function(element, fadeTo, done, op) {
        if (!element.style.opacity || element.style.opacity && element.style.opacity < fadeTo) {
            if (element.style.display == 'none') {
                element.style.display = 'block';
                op = 0;
            }
            else if (!element.style.display) {
                op = element.style.opacity || 1;
            }
            op += 0.03;
            element.style.opacity = op;
            setTimeout(function() {
                fadeIn(element, fadeTo, done, op);
            }, 10);
        } else {
            element.style.opacity = fadeTo;

            if (isFunction(done)) {
                done();
            }
        }
    };

    var calculateCanvasSize = function() {
        canvasWidth = options.canvasWidth ? options.canvasWidth : rootContainerElement.clientWidth;
        canvasHeight = options.canvasHeight ? options.canvasHeight : rootContainerElement.clientHeight;
    };

    var setCanvasDimensions = function() {
        //rootContainerElement.style.height     = canvasHeight + 'px';
        canvasContainerElement.style.height = canvasHeight + 'px';
        infoContainerElement.style.height = canvasHeight + 'px';
        loadingContainerElement.style.height = canvasHeight + 'px';

        //rootContainerElement.style.width     = canvasWidth + 'px';
        canvasContainerElement.style.width = canvasWidth + 'px';
        infoContainerElement.style.width = canvasWidth + 'px';
        loadingContainerElement.style.width = canvasWidth + 'px';
    };

    function shuffle(v) { // Jonas Raoni Soares Silva - http://jsfromhell.com/array/shuffle [rev. #1]
        for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
        return v;
    }

    function isFunction(obj) {
      return typeof obj == 'function' || false;
    }


    /*===============================
    =            EXPORTS            =
    ===============================*/


    /*==========  Public Methods  ==========*/

    exports.init = function(params) {
        options = extend(defaults, params);
        // feature test
        if (!supports || !Modernizr.webgl) return;
        console.log('initializing...');
        console.log('options:', options);

        if (window.devicePixelRatio !== undefined) {
            dpr = window.devicePixelRatio;
        }
        else {
            dpr = 1;
        }

        rootContainerElement = document.getElementById(options.elements.rootContainerId);
        if (!rootContainerElement) {
            console.error('cratedigger.js - Init failed : can not find root container element.');
            return;
        }
        canvasContainerElement = document.getElementById(options.elements.canvasContainerId);
        if (!canvasContainerElement) {
            console.error('cratedigger.js - Init failed : can not find canvas container element.');
            return;
        }
        loadingContainerElement = document.getElementById(options.elements.loadingContainerId);
        if (!loadingContainerElement) {
            console.error('cratedigger.js - Init failed : can not find loading container element.');
            return;
        }
        infoContainerElement = document.getElementById(options.elements.infoContainerId);
        if (!infoContainerElement) {
            console.error('cratedigger.js - Init failed : can not find info container element.');
            return;
        }
        titleInfoElement = document.getElementById(options.elements.titleContainerId);
        if (!titleInfoElement) {
            console.error('cratedigger.js - Init failed : can not find record title container element.');
            return;
        }
        artistInfoElement = document.getElementById(options.elements.artistContainerId);
        if (!artistInfoElement) {
            console.error('cratedigger.js - Init failed : can not find record artist container element.');
            return;
        }
        coverInfoElement = document.getElementById(options.elements.coverContainerId);
        if (!coverInfoElement) {
            console.error('cratedigger.js - Init failed : can not find cover image container element.');
            return;
        }

        calculateCanvasSize();

        initScene();
    };

    exports.selectRecord = function(id) {
        if (id < 0) {
            resetShownRecord();
        } else if (id > loadedRecords) {
            selectedRecord = loadedRecords - 1;
        } else {
            selectedRecord = id;
        }
    };

    exports.startRender = function() {
        doRender = true;
        animate();
    };

    exports.stopRender = function() {
        doRender = false;
    };

    exports.enablePostprocessing = function() {
        options.postprocessing = true;
    };

    exports.disablePostprocessing = function() {
        options.postprocessing = false;
    };

    /*==========  Public getters  ==========*/

    exports.getCanvas = function() {
        return renderer.domElement;
    };
    exports.getRecordsDataList = function() {
        return recordsDataList;
    };
    exports.getSelectedRecord = function() {
        return records[selectedRecord];
    };


    /*==========  Methods accessors  ==========*/

    exports.loadRecords         = loadRecords;
    exports.unloadRecords       = unloadRecords;
    exports.resetShownRecord    = resetShownRecord;
    exports.shuffleRecords      = shuffleRecords;
    exports.flipSelectedRecord  = flipSelectedRecord;
    exports.selectPrevRecord    = selectPrevRecord;
    exports.selectNextRecord    = selectNextRecord;


    /*==================================
    =            PUBLIC API            =
    ==================================*/

    return exports;


});
