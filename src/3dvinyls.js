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
    var container, scene, camera, target, renderer, projector, light, leftLight;
    // Feature test
    var supports = !!document.querySelector && !!root.addEventListener;
    // Objects arrays
    var crates = [],
        vinyls = [];
    // Three.js objects containers
    var rootContainer, cratesContainer, vinylsContainer;
    // States
    var selectedVinyl = -1,
        shownVinyl = -1;
    // Materials
    var wood_material;
    // Default settings
    var defaults = {
        containerId     : 'vinyls',
        nbCrates        : 2,
        vinylsPerCrate  : 24,
        lightIntensity  : 1,
        callbackBefore  : function () {},
        callbackAfter   : function () {}
    };

    /*
     *  Classes
     */
    var Vinyl = function (id, crateId, pos) {
        this.id = id;
        this.crateId = crateId;
        this.pos = pos;
        this.state = 'init';
        this.vinylXPos = -62 + (135 / options.vinylsPerCrate) * pos;
        this.mesh = new THREE.Mesh(new THREE.CubeGeometry(100, 1.5, 100, 1, 1, 1), wood_material);
        this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(50, 0, 0));
        this.mesh.position.set(this.vinylXPos, 0, 0);
        this.mesh.rotation.z = Math.PI / 2;
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
            this.absolutePosition.setFromMatrixPosition( this.mesh.matrixWorld );
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 25
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
            new TWEEN.Tween(target.position)
                .to({
                    x: this.vinylXPos,
                    y: 75,
                    z: this.absolutePosition.z
                }, 800)
                .easing(TWEEN.Easing.Quartic.Out).start();
            new TWEEN.Tween(camera.position).to({
                x: this.vinylXPos + 140,
                y: 190,
                z: this.absolutePosition.z + 100
            }, 800)
            .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };

    Vinyl.prototype.pushVinyl = function () {
        if (this.state != 'pushed') {
            this.state = 'pushed';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 + Math.PI / 7
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };

    Vinyl.prototype.pullVinyl = function () {
        if (this.state !== 'pulled') {
            this.state = 'pulled';
            new TWEEN.Tween(this.mesh.position)
                .to({
                    y: 0
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
            new TWEEN.Tween(this.mesh.rotation)
                .to({
                    z: Math.PI / 2 - Math.PI / 7
                }, 1000)
                .easing(TWEEN.Easing.Quartic.Out).start();
        }
    };


    /*
     *  Methods
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
        requestAnimationFrame(animate);
        TWEEN.update();
        updateShownVinyl();
        camera.lookAt(target.position);
        render();
    }

    var render = function () {
//        rootContainer.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    /*
     *
     */
    var updateShownVinyl = function () {
        if (shownVinyl != selectedVinyl) {
            console.log('updateShownVinyl..');
            shownVinyl = selectedVinyl;
            for (var vinylId = 0; vinylId < vinyls.length; vinylId++) {
                if (selectedVinyl == -1) {
                    vinyls[vinylId].pushVinyl();
                }
                else if (vinylId > selectedVinyl &&
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
    }

    var onScrollEvent = function (event) {
        if (wheelDirection(event) < 0) {
            selectPrevVinyl();
        } else {
            selectNextVinyl();
        }
        console.log(selectedVinyl)
        return false;
    }

    var selectPrevVinyl = function () {
        if (selectedVinyl == -1) {
            selectedVinyl = vinyls.length - 1;
        }
        else if (selectedVinyl < vinyls.length - 1) {
            selectedVinyl += 1;
        }
        else {
            selectedVinyl = 0;
        }
    }

    var selectNextVinyl = function () {
        if (selectedVinyl == -1) {
            selectedVinyl = 0;
        }
        else if (selectedVinyl > 0) {
            selectedVinyl -= 1;
        }
        else {
            selectedVinyl = vinyls.length - 1;
        }
    }

    /*
     *  INITIALISATION
     */
    var initScene = function () {
        // scene, renderer, camera,...
        scene = new THREE.Scene();

        var width = container.offsetWidth;
        var height = container.offsetHeight;
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(width, height);

        container.appendChild(renderer.domElement);
        renderer.domElement.id = "context";

        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
        camera.position.set(230, 230, 130);

        target = new THREE.Object3D();
//        target = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10, 1, 1, 1));
//        scene.add(target);
        camera.lookAt(target.position);

        wood_material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('img/wood.jpg')
        });
        rootContainer = new THREE.Object3D();
        cratesContainer = new THREE.Object3D();
        scene.add(rootContainer);
        rootContainer.add(cratesContainer);

        initCrates();
        initVinyls();

        light = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.9);
        light.position.set(200, 150, 0);
        scene.add(light);

        leftLight = new THREE.PointLight(0xFFFFFF, options.lightIntensity * 0.6);
        leftLight.position.set(200, 150, 1000);
        scene.add(leftLight);

        renderer.domElement.addEventListener('DOMMouseScroll', onScrollEvent, false);
        renderer.domElement.addEventListener('mousewheel', onScrollEvent, false);

//        var debug = new THREE.Mesh(new THREE.CubeGeometry(20, 20, 20, 1, 1, 1));
//        debug.position.set(200, 150, 0);
//        scene.add(debug);

        animate()
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

        var box_bottom = new THREE.Mesh(new THREE.CubeGeometry(200, 10, 100), wood_material);
        crates[id].add(box_bottom);

        var box_left = new THREE.Mesh(new THREE.CubeGeometry(200, 10, 80), wood_material);
        box_left.position.set(0, 35, -55);
        box_left.rotation.x = Math.PI / 2;
        crates[id].add(box_left);

        if (id == 0) {
            var box_right = new THREE.Mesh(new THREE.CubeGeometry(200, 10, 80), wood_material);
            box_right.position.set(0, 35, 55);
            box_right.rotation.x = Math.PI / 2;
            crates[id].add(box_right);
        }

        var box_back = new THREE.Mesh(new THREE.CubeGeometry(80, 10, 120), wood_material);
        box_back.position.set(-105, 35, 0);
        box_back.rotation.z = Math.PI / 2;
        crates[id].add(box_back);

        var box_front = new THREE.Mesh(new THREE.CubeGeometry(40, 10, 100), wood_material);
        box_front.position.set(95, 25, 0);
        box_front.rotation.z = Math.PI / 2;
        crates[id].add(box_front);

        crates[id].position.z = -110 * id;
        return crates[id];
    }

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
    }

    /*
     *  Utils
     */
    var wheelDistance = function (evt) {
        if (!evt) evt = event;
        var w = evt.wheelDelta,
            d = evt.detail;
        if (d) {
            if (w) return w / d / 40 * d > 0 ? 1 : -1; // Opera
            else return -d / 3; // Firefox;         TODO: do not /3 for OS X
        } else return w / 120; // IE/Safari/Chrome TODO: /3 for Chrome OS X
    };

    var wheelDirection = function (evt) {
        if (!evt) evt = event;
        return (evt.detail < 0) ? 1 : (evt.wheelDelta > 0) ? 1 : -1;
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
        console.log(container);
        initScene();
    };
    exports.selectVinyl = function (id) {
        return selectedVinyl = id;
    };


    //
    // Public APIs
    //

    return exports;

});
