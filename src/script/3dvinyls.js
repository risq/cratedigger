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

                 ________ ________       .__              .__                   __
                 \_____  \\______ \___  _|__| ____ ___.__.|  |   ______        |__| ______
         ______    _(__  < |    |  \  \/ /  |/    <   |  ||  |  /  ___/        |  |/  ___/   ______
        /_____/   /       \|    `   \   /|  |   |  \___  ||  |__\___ \         |  |\___ \   /_____/
                 /______  /_______  /\_/ |__|___|  / ____||____/____  > /\ /\__|  /____  >
                        \/        \/             \/\/               \/  \/ \______|    \/

*/

/**
 *
 * 3dvinyls.js v0.0.1
 * By risq.
 *
 */

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.vinyls = factory(root);
    }
})(this, function (root) {

    'use strict';

    /*
     *  Variables
     */

    // Plugin
    var options = {};
    var exports = {}; // Object for public APIs

    // Three.js objects
    var container,
        stats,
        scene,
        camera,
        target,
        renderer,
        projector,
        light,
        leftLight,
        rightLight;

    // Feature test
    var supports = !!document.querySelector && !!root.addEventListener;

    // Objects arrays
    var crates = [],
        vinyls = [];

    // Three.js objects containers
    var rootContainer,
        cratesContainer,
        vinylsContainer;

    // States, util vars
    var canvasWidth,
        canvasHeight,
        scrollVinylsTimeout,
        isLoading = false,
        infosPanelState = "closed",
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
        selectedVinyl = -1,
        shownVinyl = -1,
        loadedVinyls = 0;

    // Materials
    var wood_material;

    // Default settings
    var defaults = {
        debug: true,
        canvasWidth: null,
        canvasHeight: null,
        containerId: 'vinyls',
        nbCrates: 2,
        vinylsPerCrate: 24,
        lightIntensity: 1,
        cameraMouseMove: true,
        backgroundColor: 0x111111,
        sleeveColor: 0x0d0702,
        closeInfoPanelOnClick: true,
        closeInfoPanelOnScroll: true,
        callbackBefore: function () {},
        callbackAfter: function () {},
        constants: {
            vinylMoveTime: 1000,
            cameraMoveTime: 800,
            infosOpenTime: 800,
            vinylShownY: 25,
            vinylFlippedY: 100,
            cameraBasePosition: {
                x: 270,
                y: 180,
                z: 110
            },
            cameraFocusPosition: {
                x: 140,
                y: 180,
                z: 80
            },
            cameraMouseMoveSpeedY: 0.07,
            cameraMouseMoveSpeedZ: 0.03,
            grabSensitivity: 6
        }
    };

    /*
     *  Classes
     */
    var Vinyl = function (id, crateId, pos) {
        this.id = id;
        this.crateId = crateId;
        this.pos = pos;
        this.state = 'out';
        this.vinylXPos = -62 + (135 / options.vinylsPerCrate) * pos;
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 1.5, 100, 1, 1, 1), new THREE.MeshFaceMaterial(getVinylMaterial(null, false)));
        this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(50, 0, 0));
        this.mesh.position.set(this.vinylXPos, 0, 0);
        this.mesh.rotation.z = Math.PI / 2;
        this.mesh.vinylId = id;
        this.mesh.visible = false;
        this.absolutePosition = new THREE.Vector3();
        this.pushVinyl();
    };

    Vinyl.prototype.log = function () {
        console.log("Vinyl n°", this.id,
            "crateId =", this.crateId,
            "pos =", this.pos);
    };

    Vinyl.prototype.showVinyl = function () {
        if (this.state !== 'shown') {
            this.state = 'shown';
            this.absolutePosition.setFromMatrixPosition(this.mesh.matrixWorld);
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: options.constants.vinylShownY
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(target.position)
                .to({
                    x: this.vinylXPos,
                    y: 50 + options.constants.vinylShownY,
                    z: this.absolutePosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(camera.position)
                .to({
                    x: this.vinylXPos + options.constants.cameraFocusPosition.x,
                    y: options.constants.cameraFocusPosition.y,
                    z: this.absolutePosition.z + options.constants.cameraFocusPosition.z
                }, options.constants.cameraMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Vinyl.prototype.pushVinyl = function () {
        if (this.state != 'pushed') {
            this.state = 'pushed';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 + Math.PI / 7
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Vinyl.prototype.pullVinyl = function () {
        if (this.state !== 'pulled') {
            this.state = 'pulled';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 - Math.PI / 7
                }, options.constants.vinylMoveTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

        }
    };

    Vinyl.prototype.flipVinyl = function (done) {
        this.state = 'flipped';
        new TWEEN.Tween(this.mesh.position)
            .to({
                y: options.constants.vinylFlippedY
            }, options.constants.infosOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start();

        new TWEEN.Tween(this.mesh.rotation)
            .delay(options.constants.infosOpenTime / 4)
            .to({
                y: Math.PI
            }, options.constants.infosOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start();

        new TWEEN.Tween(target.position)
            .to({
                x: this.vinylXPos,
                y: options.constants.vinylFlippedY + 50,
                z: this.absolutePosition.z
            }, options.constants.infosOpenTime)
            .easing(TWEEN.Easing.Quartic.Out).start()
            .onComplete(done);
    };

    Vinyl.prototype.flipBackVinyl = function (done) {
        if (this.state === 'flipped') {
            new TWEEN.Tween(this.mesh.position)
                .delay(options.constants.infosOpenTime / 2)
                .to({
                    y: 0
                }, options.constants.infosOpenTime)
                .easing(TWEEN.Easing.Quartic.Out).start();

            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    y: 0
                }, options.constants.infosOpenTime / 2)
                .easing(TWEEN.Easing.Quartic.Out).start()
                .onComplete(done);

            new TWEEN.Tween(target.position)
                .delay(options.constants.infosOpenTime / 2)
                .to({
                    x: this.vinylXPos,
                    y: 75,
                    z: this.absolutePosition.z
                }, options.constants.infosOpenTime)
                .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };

    /*
     *  Base Methods
     */
    var extend = function (defaults, options) {
        for (var key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                defaults[key] = options[key];
            }
        }
        return defaults;
    };

    var animate = function () {
        if (doRender) {
            requestAnimationFrame(animate);
            render();
            if (options.debug) {
                stats.update();
            }
        }
    };

    var render = function () {
        //        rootContainer.rotation.y += 0.01;

        TWEEN.update();
        updateShownVinyl();
        if (options.cameraMouseMove) {
            targetCameraPos.x = (mouse.x / canvasWidth - 0.5) * 0.25;
            targetCameraPos.y = (mouse.y / canvasWidth - 0.5) * 0.25;
            rootContainer.rotation.y += options.constants.cameraMouseMoveSpeedY * (targetCameraPos.x - rootContainer.rotation.y);
            rootContainer.rotation.z += options.constants.cameraMouseMoveSpeedZ * (targetCameraPos.y - rootContainer.rotation.z);
        }
        camera.lookAt(target.position);

        renderer.render(scene, camera);
    };

    /*
     * Loading methods
     */
    var unloadVinyls = function () {
        for (var i = 0; i < vinyls.length; i++) {
            vinyls[i].data = null;
            vinyls[i].mesh.visible = false;
        }
        loadedVinyls = 0;
    };


    var loadVinyls = function (vinylsData) {
        if (loadedVinyls > 0) {
            unloadVinyls();
        }
        for (var i = 0; i < vinyls.length && i < vinylsData.length; i++) {
            vinyls[i].data = vinylsData[i];
            vinyls[i].mesh.visible = true;
            vinyls[i].mesh.material.materials = getVinylMaterial(vinylsData[i].cover, vinylsData[i].hasSleeve);
        }
        loadedVinyls = vinylsData.length < vinyls.length ? vinylsData.length : vinyls.length;
        console.log('loadedVinyls', loadedVinyls);
    };


    /*
     * Vinyls select methods
     */
    var selectVinyl = function (id) {
        if (infosPanelState === 'opened') {
            flipBackSelectedVinyl();
        } else if (infosPanelState !== 'opening' && infosPanelState !== 'closing') {
            selectedVinyl = id;
        }
    };

    var flipSelectedVinyl = function () {
        infosPanelState = 'opening';
        vinyls[selectedVinyl].flipVinyl(function () {
            infosPanelState = 'opened';
        });
    };

    var flipBackSelectedVinyl = function () {
        if (infosPanelState === 'opened') {
            infosPanelState = 'closing';
            vinyls[selectedVinyl].flipBackVinyl(function () {
                infosPanelState = 'closed';
            });
        }
    };

    var updateShownVinyl = function () {
        if (infosPanelState === 'closed' && shownVinyl != selectedVinyl) {
            //console.log('updateShownVinyl..');
            shownVinyl = selectedVinyl;
            for (var vinylId = 0; vinylId < loadedVinyls; vinylId++) {
                if (selectedVinyl == -1) {
                    vinyls[vinylId].pushVinyl();
                } else if (vinylId > selectedVinyl &&
                    vinylId > vinyls[selectedVinyl].crateId * options.vinylsPerCrate &&
                    vinylId < (vinyls[selectedVinyl].crateId * options.vinylsPerCrate) + options.vinylsPerCrate) {
                    vinyls[vinylId].pullVinyl();
                } else if (vinylId == selectedVinyl) {
                    vinyls[vinylId].showVinyl();
                } else {
                    vinyls[vinylId].pushVinyl();
                }
            }
        }
    };

    var resetShownVinyl = function () {
        selectedVinyl = -1;
        new TWEEN.Tween(target.position)
            .to({
                x: 0,
                y: 0,
                z: 0
            }, options.constants.cameraMoveTime)
            .easing(TWEEN.Easing.Quartic.Out).start();

        new TWEEN.Tween(camera.position)
            .to({
                x: options.constants.cameraBasePosition.x,
                y: options.constants.cameraBasePosition.y,
                z: options.constants.cameraBasePosition.z
            }, options.constants.cameraMoveTime)
            .easing(TWEEN.Easing.Quartic.Out).start();
    };

    var selectPrevVinyl = function () {
        if (selectedVinyl == -1) {
            selectVinyl(loadedVinyls - 1);
        } else if (selectedVinyl < loadedVinyls - 1) {
            selectVinyl(selectedVinyl + 1);
        } else {
            selectVinyl(0);
        }
    };

    var selectNextVinyl = function () {
        if (selectedVinyl == -1) {
            selectVinyl(0);
        } else if (selectedVinyl > 0) {
            selectVinyl(selectedVinyl - 1);
        } else {
            selectVinyl(loadedVinyls - 1);
        }
    };


    /*
     * Events handling
     */
    var onMouseMoveEvent = function (e) {
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
            } while (obj = obj.offsetParent);
        }
        // mouse position minus elm position is mouseposition relative to element:
        mouse.x = m_posx - e_posx;
        mouse.y = m_posy - e_posy;
    };

    var onScrollEvent = function (e) {
        if (infosPanelState === 'closed') {
            if (wheelDirection(e) < 0) {
                selectPrevVinyl();
            } else {
                selectNextVinyl();
            }
        }
        else if (infosPanelState === 'opened' && options.closeInfoPanelOnScroll) {
            flipBackSelectedVinyl();
        }
        return false;
    };

    var onClickEvent = function (e) {
        if (infosPanelState === 'closed') {
            var vector = new THREE.Vector3(
                ((e.clientX - renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1, -((e.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 + 1,
                0.5
            );
            projector.unprojectVector(vector, camera);
            var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
            var intersects = raycaster.intersectObjects(cratesContainer.children, true);

            if (intersects.length > 0 && intersects[0].object.vinylId >= 0) {
                var clickedVinyl = vinyls[intersects[0].object.vinylId];
                if (selectedVinyl === clickedVinyl.id) {
                    flipSelectedVinyl();
                } else {
                    selectVinyl(clickedVinyl.id);
                }
            } else {
                resetShownVinyl();
            }
            return false;
        }
    };

    var onMouseDownEvent = function (e) {
        clearInterval(scrollVinylsTimeout);
        if (infosPanelState === 'closed') {
            scrollVinyls(mouse.y);
            mouseDownPos = {
                x: mouse.x,
                y: mouse.y
            };
        }
        else if (infosPanelState === 'opened' && options.closeInfoPanelOnClick) {
            flipBackSelectedVinyl();
        }
    };

    var onMouseUpEvent = function (e) {
        clearInterval(scrollVinylsTimeout);
        classie.remove(renderer.domElement, 'grab');
        if (coordsEqualsApprox(mouseDownPos, mouse, options.constants.grabSensitivity)) {
            onClickEvent(e);
        }
    };

    var scrollVinyls = function (baseY) {
        scrollVinylsTimeout = setTimeout(function () {
            classie.add(renderer.domElement, 'grab');
            var delta = (baseY - mouse.y) / canvasHeight;
            if (delta > 0) {
                selectNextVinyl();
                //console.log("NEXT VINYL " + delta);
            } else if (delta < 0) {
                selectPrevVinyl();
                //console.log("PREV VINYL " + delta);
            }
            scrollVinyls(baseY);
        }, 75);
    };

    /*
     *  INITIALISATION
     */
    var initScene = function () {
        // scene, renderer, camera,...
        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(canvasWidth, canvasHeight);

        container.appendChild(renderer.domElement);
        renderer.domElement.id = "context";
        renderer.setClearColor(options.backgroundColor, 1);

        camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 20000);

        target = new THREE.Object3D();
        //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
        //        scene.add(target);
        camera.lookAt(target.position);

        projector = new THREE.Projector();

        wood_material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('img/wood.jpg')
        });

        rootContainer = new THREE.Object3D();
        cratesContainer = new THREE.Object3D();
        scene.add(rootContainer);
        rootContainer.add(cratesContainer);

        initCrates();
        initVinyls();

        light = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 1.1);
        light.position.set(300, 80, 0);
        scene.add(light);

        leftLight = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.6);
        leftLight.position.set(-100, 300, 1000);
        scene.add(leftLight);

        rightLight = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.6);
        rightLight.position.set(-100, 300, -1000);
        scene.add(rightLight);

        renderer.domElement.addEventListener('DOMMouseScroll', onScrollEvent, false);
        renderer.domElement.addEventListener('mousewheel', onScrollEvent, false);
        renderer.domElement.addEventListener('mousemove', onMouseMoveEvent, false);
        renderer.domElement.addEventListener('mousedown', onMouseDownEvent, false);
        renderer.domElement.addEventListener('mouseup', onMouseUpEvent, false);
        //        renderer.domElement.addEventListener('click', onClickEvent, false);


        if (options.debug) {
            initDebug();
        }
        resetShownVinyl();
        animate();
    };

    var initDebug = function () {
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = "0px";
        stats.domElement.style.top = "0px";
        container.style.position = 'relative';
        container.appendChild(stats.domElement);

        var debug = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20, 1, 1, 1));
        debug.position.set(
            light.position.x,
            light.position.y,
            light.position.z
        );
        scene.add(debug);

    };

    var initCrates = function () {
        for (var crateId = 0; crateId < options.nbCrates; crateId++) {
            var crate = createCrate(crateId);
            cratesContainer.add(crate);
        }
        cratesContainer.position.z = -(110 - (110 * options.nbCrates)) / 2;
    };

    var createCrate = function (id) {
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

    var initVinyls = function () {
        var currentVinylId = 0;
        for (var crateId = 0; crateId < crates.length; crateId++) {
            for (var pos = 0; pos < options.vinylsPerCrate; pos++) {
                createVinyl(currentVinylId, crateId, pos);
                currentVinylId++;
            }
        }
        console.log(vinyls);
    };

    var createVinyl = function (id, crateId, pos) {
        var vinyl = new Vinyl(id, crateId, pos);
        crates[crateId].add(vinyl.mesh);
        vinyls.push(vinyl);
    };

    var getVinylMaterial = function (src, hasSleeve) {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = src;

        var imgWidth = 400,
            imgHeight = 400,
            mapCanvas = document.createElement('canvas');

        mapCanvas.width = mapCanvas.height = 400;

        var texture = new THREE.Texture(mapCanvas);

        img.onload = function () {
            if (hasSleeve) {
                var sleeve = new Image();
                sleeve.src = 'img/sleeve.png';

                sleeve.onload = function () {
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

    /*
     *  Utils
     */
    var wheelDistance = function (e) {
        if (!e) e = event;
        var w = e.wheelDelta,
            d = e.detail;
        if (d) {
            if (w) return w / d / 40 * d > 0 ? 1 : -1; // Opera
            else return -d / 3; // Firefox;         TODO: do not /3 for OS X
        } else return w / 120; // IE/Safari/Chrome TODO: /3 for Chrome OS X
    };

    var wheelDirection = function (e) {
        if (!e) e = event;
        return (e.detail < 0) ? 1 : (e.wheelDelta > 0) ? 1 : -1;
    };

    var coordsEqualsApprox = function (coord1, coord2, range) {
        return (Math.abs(coord1.x - coord2.x) <= range) && (Math.abs(coord1.y - coord2.y) <= range);
    };

    /*
     *  Exports
     */
    exports.init = function (params) {
        options = extend(defaults, params);
        // feature test
        if (!supports || !Modernizr.webgl) return;
        console.log('initializing...');
        console.log('options:', options);

        container = document.getElementById(options.containerId);
        canvasWidth = options.canvasWidth ? options.canvasWidth : container.offsetWidth;
        canvasHeight = options.canvasHeight ? options.canvasHeight : container.offsetHeight;

        console.log(container);
        initScene();
    };
    exports.selectVinyl = function (id) {
        if (id < 0) {
            resetShownVinyl();
        } else if (id > loadedVinyls) {
            selectedVinyl = loadedVinyls - 1;
        } else {
            selectedVinyl = id;
        }
    };
    exports.startRender = function () {
        doRender = true;
        animate();
    };
    exports.stopRender = function () {
        doRender = false;
    };
    exports.loadVinyls = loadVinyls;
    exports.unloadVinyls = unloadVinyls;

    //
    // Public APIs
    //

    return exports;

});
