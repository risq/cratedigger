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

var THREE = require('three');
var TWEEN = require('tween.js');
var Stats = require('stats-js');
var Modernizr = require('Modernizr');
var dat = require('dat-gui');
var Record = require('./Record');
var CameraManager = require('./CameraManager');
var Constants = require('./Constants');


/*=================================
=            VARIABLES            =
=================================*/

var exports = {}; // Object for public APIs

/*==========  Three.js objects  ==========*/

var stats;
var scene;
var camera;
var renderer;
var light;
var leftLight;
var rightLight;
var composer;
var FXAA;
var dof;
var gui;
var depthTarget;
var depthShader;
var depthUniforms;
var depthMaterial;

/*==========  Objects & data arrays  ==========*/
var crates = [];
var records = [];
var recordsDataList = [];

/*==========  Three.js objects containers  ==========*/

var rootContainer;
var cratesContainer;

/*==========  States, util vars  ==========*/

var canvasWidth;
var canvasHeight;
var dpr;
var scrollRecordsTimeout;
var infoPanelState = 'closed';
var doRender = true;
var mouse = {
    x: 0,
    y: 0,
  };
var mouseDownPos = {
    x: 0,
    y: 0,
  };
var targetCameraPos = {
    x: 0,
    y: 0,
  };
var selectedRecord = -1;
var shownRecord = -1;
var loadedRecords = 0;


/*==========  Materials  ==========*/

var woodMaterial;

/*==========  Inject all external modules to THREE.js ==========*/

require('./threejs_modules/ShaderPass')(THREE);
require('./threejs_modules/CopyShader')(THREE);
require('./threejs_modules/RenderPass')(THREE);
require('./threejs_modules/DoFShader')(THREE);
require('./threejs_modules/FXAAShader')(THREE);
require('./threejs_modules/MaskPass')(THREE);
require('./threejs_modules/EffectComposer')(THREE);

/*====================================
=            BASE METHODS            =
====================================*/

function animate() {
  if (doRender) {
    requestAnimationFrame(animate);
    render();
    if (Constants.debug) {
      stats.update();
    }
  }
}

function render() {
  TWEEN.update();
  updateShownRecord();
  if (Constants.cameraMouseMove) {
    targetCameraPos.x = (mouse.x / canvasWidth - 0.5) * 0.25; // inverse axis?
    targetCameraPos.y = (mouse.y / canvasWidth - 0.5) * 0.25;
    rootContainer.rotation.y += Constants.scene.cameraMouseMoveSpeedY * (targetCameraPos.x - rootContainer.rotation.y);
    rootContainer.rotation.z += Constants.scene.cameraMouseMoveSpeedZ * (targetCameraPos.y - rootContainer.rotation.z);
  }

  CameraManager.lookAtTarget();

  if (Constants.postprocessing) {
    scene.overrideMaterial = depthMaterial;
    renderer.render(scene, camera, depthTarget);
    scene.overrideMaterial = null;
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

/*
 * Loading methods
 */
function unloadRecords() {
  var i;
  for (i = 0; i < records.length; i++) {
    records[i].data = null;
    records[i].setUnactive();
  }

  loadedRecords = 0;
  recordsDataList = [];
}


function loadRecords(recordsData, shuffleBeforeLoading, done) {
  var i;

  resetShownRecord(true);
  showLoading(function() {
    if (loadedRecords > 0) {
      unloadRecords();
    }

    if (shuffleBeforeLoading) {
      recordsData = shuffle(recordsData);
    }

    for (i = 0; i < records.length && i < recordsData.length; i++) {
      records[i].data = recordsData[i];
      records[i].setActive();
      records[i].mesh.material.materials = getRecordMaterial(recordsData[i].cover, recordsData[i].hasSleeve);
    }

    // why ??
    // loadedRecords = recordsData.length < records.length ? recordsData.length : records.length;
    loadedRecords = records.length;
    recordsDataList = recordsData;

    setTimeout(function() {
      hideLoading(done);
      Constants.onLoadingEnd();
    }, 3000);
  });
}

function shuffleRecords() {
  var shuffledRecords = recordsDataList;
  shuffledRecords = shuffle(shuffledRecords);
  loadRecords(shuffledRecords);
}


/*=================================================
=            RECORDS SELECTION METHODS            =
=================================================*/


function selectRecord(id) {
  if (infoPanelState === 'opened') {
    flipBackSelectedRecord();
  } else if (infoPanelState !== 'opening' && infoPanelState !== 'closing') {
    if (id < 0) {
      resetShownRecord();
    } else if (id > loadedRecords) {
      selectedRecord = loadedRecords - 1;
    } else {
      selectedRecord = id;
    }
  }
}

function flipSelectedRecord() {
  if (records[selectedRecord]) {
    infoPanelState = 'opening';
    records[selectedRecord].flipRecord(function() {
      infoPanelState = 'opened';
    });

    Constants.onInfoPanelOpened();

    setTimeout(function() {
      fadeIn(Constants.elements.infoContainer);
    }, 300);
  }
}

function flipBackSelectedRecord(force) {
  if (infoPanelState === 'opened') {
    fadeOut(Constants.elements.infoContainer);
    infoPanelState = 'closing';

    records[selectedRecord].flipBackRecord(function() {
      infoPanelState = 'closed';
      Constants.onInfoPanelClosed();
    }, force);
  }
}

function updateShownRecord() {
  var recordId;

  if (infoPanelState === 'closed' && shownRecord !== selectedRecord) {
    shownRecord = selectedRecord;
    for (recordId = 0; recordId < loadedRecords; recordId++) {
      if (selectedRecord === -1) {
        records[recordId].pushRecord();
      } else if (recordId > selectedRecord &&
        recordId > records[selectedRecord].crateId * Constants.recordsPerCrate &&
        recordId < (records[selectedRecord].crateId * Constants.recordsPerCrate) + Constants.recordsPerCrate) {
        records[recordId].pullRecord();
      } else if (recordId === selectedRecord) {
        records[recordId].showRecord();
      } else {
        records[recordId].pushRecord();
      }
    }
  }
}

function resetShownRecord(force) {
  if (infoPanelState === 'opened' && !force) {
    flipBackSelectedRecord();
  } else if (infoPanelState !== 'opening' && infoPanelState !== 'closing') {
    if (infoPanelState === 'opened') {
      flipBackSelectedRecord(true);
    }

    selectedRecord = -1;
    CameraManager.resetCamera();
  }
}

function selectPrevRecord() {
  selectRecord(getPrevAvailableRecord(selectedRecord));
}

function selectNextRecord() {
  selectRecord(getNextAvailableRecord(selectedRecord));
}

function getPrevAvailableRecord(fromRecord) {
  var baseRecord;

  if (fromRecord === -1) {
    baseRecord = loadedRecords - 1;
  } else if (fromRecord < loadedRecords - 1) {
    baseRecord = fromRecord + 1;
  } else {
    baseRecord = 0;
  }

  return records[baseRecord].active ? baseRecord : getPrevAvailableRecord(baseRecord);
}

function getNextAvailableRecord(fromRecord) {
  var baseRecord;

  if (fromRecord === -1) {
    baseRecord = loadedRecords - 1;
  } else if (fromRecord > 0) {
    baseRecord = fromRecord - 1;
  } else {
    baseRecord = loadedRecords - 1;
  }

  return records[baseRecord].active ? baseRecord : getNextAvailableRecord(baseRecord);
}

function navigateRecords(direction) {
  if (infoPanelState === 'closed') {
    if (direction === 'prev') {
      selectPrevRecord();
    } else {
      selectNextRecord();
    }
  } else if (infoPanelState === 'opened' && Constants.closeInfoPanelOnScroll) {
    flipBackSelectedRecord();
  }
}

function scrollRecords(touch, baseY, delta) {
  var scrollSpeed;
  var oldDelta;

  oldDelta = !delta || Math.abs(delta) > 0.5 ? 0.5 : Math.abs(delta);
  scrollSpeed = touch ? Math.pow(1 - oldDelta, 3) * 200 : Math.pow(1 - oldDelta, 3) * 300;

  scrollRecordsTimeout = setTimeout(function() {
    var newDelta = (baseY - mouse.y) / canvasHeight;
    renderer.domElement.classList.add('grab');

    if (newDelta > 0) {
      selectNextRecord();
    } else if (newDelta < 0) {
      selectPrevRecord();
    }

    scrollRecords(touch, baseY, newDelta);
  }, scrollSpeed);
}

/*=======================================
=            EVENTS HANDLING            =
=======================================*/

function bindEvents() {
  Constants.elements.rootContainer.addEventListener('DOMMouseScroll', onScrollEvent, false);
  Constants.elements.rootContainer.addEventListener('mousewheel', onScrollEvent, false);
  Constants.elements.rootContainer.addEventListener('mousemove', onMouseMoveEvent, false);
  Constants.elements.rootContainer.addEventListener('touchmove', onTouchMoveEvent, false);
  Constants.elements.rootContainer.addEventListener('mousedown', onMouseDownEvent, false);
  Constants.elements.rootContainer.addEventListener('touchstart', onTouchStartEvent, false);
  Constants.elements.rootContainer.addEventListener('mouseup', onMouseUpEvent, false);
  Constants.elements.rootContainer.addEventListener('touchend', onTouchStopEvent, false);
  Constants.elements.rootContainer.addEventListener('contextmenu', onRightClickEvent, false);

  window.addEventListener('keydown', onKeyDownEvent, false);

  if (Constants.updateCanvasSizeOnWindowResize) {
    window.addEventListener('resize', onWindowResizeEvent, false);
  }
}

function onMouseMoveEvent(e) {
  var mPosx = 0;
  var mPosy = 0;
  var ePosx = 0;
  var ePosy = 0;
  var event;
  var obj = this;

  // Get mouse position on document crossbrowser
  event = e || window.event;

  if (event.pageX || event.pageY) {
    mPosx = event.pageX;
    mPosy = event.pageY;
  } else if (event.clientX || event.clientY) {
    mPosx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    mPosy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  // Get parent element position in document
  if (obj.offsetParent) {
    do {
      ePosx += obj.offsetLeft;
      ePosy += obj.offsetTop;
    } while (obj = obj.offsetParent); // jshint ignore:line
  }

  // Mouse position minus elm position is mouseposition relative to element:
  mouse.x = mPosx - ePosx;
  mouse.y = mPosy - ePosy;
}

function onTouchMoveEvent(e) {
  var mPosx = 0;
  var mPosy = 0;
  var ePosx = 0;
  var ePosy = 0;
  var event;
  var obj = this;

  // Get mouse position on document crossbrowser
  event = e || window.event;

  if (event.changedTouches && event.changedTouches[0]) {
    if (event.changedTouches[0].pageX || event.changedTouches[0].pageY) {
      mPosx = event.changedTouches[0].pageX;
      mPosy = event.changedTouches[0].pageY;
    } else if (event.changedTouches[0].clientX || event.changedTouches[0].clientY) {
      mPosx = event.changedTouches[0].clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      mPosy = event.changedTouches[0].clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
  }

  // Get parent element position in document
  if (obj && obj.offsetParent) {
    do {
      ePosx += obj.offsetLeft;
      ePosy += obj.offsetTop;
    } while (obj = obj.offsetParent); // jshint ignore:line
  }

  // mouse position minus elm position is mouseposition relative to element:
  mouse.x = mPosx - ePosx;
  mouse.y = mPosy - ePosy;
}

function onScrollEvent(e) {
  if (wheelDirection(e) < 0) {
    navigateRecords('prev');
  } else {
    navigateRecords('next');
  }

  return false;
}

function onClickEvent(pos) {
  var vectorPos;
  var vector;
  var raycaster;
  var intersects;
  var intersectIndex;
  var clickedRecord;

  if (infoPanelState === 'closed') {
    vectorPos = {
      x: (((pos.x - renderer.domElement.offsetLeft) / (renderer.domElement.width)) * 2 - 1),
      y: (-((pos.y - renderer.domElement.offsetTop) / (renderer.domElement.height)) * 2 + 1),
      z: 0.5,
    };

    vector = new THREE.Vector3(vectorPos.x, vectorPos.y, vectorPos.z);
    vector.unproject(camera);
    raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    intersects = raycaster.intersectObjects(cratesContainer.children, true);

    // If intersect something
    if (intersects.length > 0) {
      // Get the first visible record intersected
      for (intersectIndex = 0; intersectIndex < intersects.length; intersectIndex++) {
        // If intercept a mesh which is not a record, break
        if (typeof (intersects[intersectIndex].object.recordId) === 'undefined') {
          break;
        } else if (intersects[intersectIndex].object.visible && intersects[intersectIndex].object.recordId >= 0) {
          clickedRecord = records[intersects[intersectIndex].object.recordId];
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
      } else { // All intersected records are not visibles
        resetShownRecord();
      }
    } else { // No record has been intersected
      resetShownRecord();
    }
  } else if (Constants.closeInfoPanelOnClick) {
    flipBackSelectedRecord();
  }
}

function onMouseDownEvent(e) {
  if (e.button !== 1 && e.button !== 2) {
    clearInterval(scrollRecordsTimeout);

    if (infoPanelState === 'closed') {
      scrollRecords(false, mouse.y);
    }

    mouseDownPos = {
      x: mouse.x,
      y: mouse.y,
    };
  }
}

function onTouchStartEvent(e) {
  mouseDownPos = {
    x: mouse.x,
    y: mouse.y,
  };
  onTouchMoveEvent(e);
  clearInterval(scrollRecordsTimeout);

  if (infoPanelState === 'closed') {
    scrollRecords(true, mouse.y);
  }
}

function onMouseUpEvent(e) {
  if (e.button !== 1 && e.button !== 2) {
    clearInterval(scrollRecordsTimeout);
    renderer.domElement.classList.remove('grab');

    // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
    if (coordsEqualsApprox(mouseDownPos, mouse, Constants.scene.grabSensitivity) && !(e.target && e.target.hasAttribute('href'))) {
      onClickEvent(mouseDownPos);
    }
  }
}

function onTouchStopEvent(e) {
  clearInterval(scrollRecordsTimeout);
  renderer.domElement.classList.remove('grab');

  // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
  if (coordsEqualsApprox(mouseDownPos, mouse, Constants.scene.grabSensitivity) && !(e.target && e.target.hasAttribute('href'))) {
    onClickEvent(mouseDownPos);
  }
}

function onRightClickEvent(e) {
  e.preventDefault();

  if (infoPanelState === 'opened') {
    flipBackSelectedRecord();
  } else {
    resetShownRecord();
  }

  return false;
}

function onKeyDownEvent(e) {
  if (e.keyCode === 37 || e.keyCode === 38) {
    navigateRecords('next');
  } else if (e.keyCode === 39 || e.keyCode === 40) {
    navigateRecords('prev');
  } else if (infoPanelState === 'closed' && e.keyCode === 13 || e.keyCode === 32) {
    flipSelectedRecord();
  } else if (e.keyCode === 27) {
    if (infoPanelState === 'opened') {
      flipBackSelectedRecord();
    } else {
      resetShownRecord();
    }
  }
}

function onWindowResizeEvent() {
  calculateCanvasSize();
  setCanvasDimensions();

  renderer.setSize(canvasWidth, canvasHeight);
  CameraManager.updateCameraAspect(canvasWidth / canvasHeight);

  dof.uniforms.tDepth.value = depthTarget;
  dof.uniforms.size.value.set(canvasWidth, canvasHeight);
  dof.uniforms.textel.value.set(1.0 / canvasWidth, 1.0 / canvasHeight);
  FXAA.uniforms.resolution.value.set(1 / canvasWidth, 1 / canvasHeight);
}


/*======================================
=              UI METHODS              =
======================================*/

function showLoading(done) {
  fadeIn(Constants.elements.loadingContainer);
  setTimeout(done, 1000);
}

function hideLoading(done) {
  fadeOut(Constants.elements.loadingContainer);
  setTimeout(done, 1000);
}


/*======================================
=            INITIALISATION            =
======================================*/

function initScene() {
  var woodTexture;

  // scene, renderer, camera,...
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(canvasWidth, canvasHeight);

  Constants.elements.canvasContainer.appendChild(renderer.domElement);
  renderer.domElement.id = 'context';
  renderer.setClearColor(Constants.backgroundColor, 1);

  CameraManager.init(canvasWidth / canvasHeight);
  camera = CameraManager.getCamera();

  woodTexture = THREE.ImageUtils.loadTexture(Constants.crateTexture);
  woodTexture.anisotropy = renderer.getMaxAnisotropy();
  woodMaterial = new THREE.MeshLambertMaterial({
    map: woodTexture,
  });

  rootContainer = new THREE.Object3D();
  cratesContainer = new THREE.Object3D();
  scene.add(rootContainer);
  rootContainer.add(cratesContainer);

  initCrates();
  initRecords();

  light = new THREE.PointLight(0xFFFFFF, Constants.lightIntensity * 1.1);
  light.position.set(300, 80, 0);
  scene.add(light);

  leftLight = new THREE.PointLight(0xFFFFFF, Constants.lightIntensity * 0.6);
  leftLight.position.set(-100, 300, 1000);
  scene.add(leftLight);

  rightLight = new THREE.PointLight(0xFFFFFF, Constants.lightIntensity * 0.6);
  rightLight.position.set(-100, 300, -1000);
  scene.add(rightLight);

  initPostProcessing();

  bindEvents();

  // DOM setup
  Constants.elements.rootContainer.style.position = 'relative';
  Constants.elements.canvasContainer.style.position = 'absolute';
  Constants.elements.infoContainer.style.position = 'absolute';
  Constants.elements.loadingContainer.style.position = 'absolute';

  setCanvasDimensions();
  hideElement(Constants.elements.infoContainer);

  if (Constants.debug) {
    initDebug();
    initGUI();
  }

  resetShownRecord();
  animate();
}

function initPostProcessing() {
  depthShader = THREE.ShaderLib.depthRGBA;
  depthUniforms = THREE.UniformsUtils.clone(depthShader.uniforms);

  depthMaterial = new THREE.ShaderMaterial({
    fragmentShader: depthShader.fragmentShader,
    vertexShader: depthShader.vertexShader,
    uniforms: depthUniforms,
  });
  depthMaterial.blending = THREE.NoBlending;

  depthTarget = new THREE.WebGLRenderTarget(canvasWidth, canvasHeight, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
  });

  composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));


  /*==========  Depth of field shader  ==========*/

  dof = new THREE.ShaderPass(THREE.DoFShader);
  dof.uniforms.tDepth.value = depthTarget;
  dof.uniforms.size.value.set(canvasWidth, canvasHeight);
  dof.uniforms.textel.value.set(1.0 / canvasWidth, 1.0 / canvasHeight);

  // Make sure that these two values are the same for your camera, otherwise distances will be wrong.
  dof.uniforms.znear.value = camera.near; // Camera clipping start
  dof.uniforms.zfar.value = camera.far; // Camera clipping end

  dof.uniforms.focalDepth.value = 5; // Focal distance value in meters, but you may use autofocus option below
  dof.uniforms.focalLength.value = camera.focalLength; // Focal length in mm
  dof.uniforms.fstop.value = 8.0; // F-stop value
  dof.uniforms.showFocus.value = false; // Show debug focus point and focal range (orange = focal point, blue = focal range)

  dof.uniforms.manualdof.value = true; // Manual dof calculation
  dof.uniforms.ndofstart.value = 11; // Near dof blur start
  dof.uniforms.ndofdist.value = 80; // Near dof blur falloff distance
  dof.uniforms.fdofstart.value = 0; // Far dof blur start
  dof.uniforms.fdofdist.value = 100; // Far dof blur falloff distance

  dof.uniforms.CoC.value = 0.03; // Circle of confusion size in mm (35mm film = 0.03mm)

  dof.uniforms.vignetting.value = false; // Use optical lens vignetting?

  dof.uniforms.autofocus.value = true; // Use autofocus in shader? disable if you use external focalDepth value
  dof.uniforms.focus.value.set(0.35, 0.35); //  autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)
  dof.uniforms.maxblur.value = Constants.blurAmount; // Clamp value of max blur (0.0 = no blur,1.0 default)

  dof.uniforms.threshold.value = 0; // Highlight threshold;
  dof.uniforms.gain.value = 0; // Highlight gain;

  dof.uniforms.bias.value = 0; // Bokeh edge bias
  dof.uniforms.fringe.value = 0; // Bokeh chromatic aberration/fringing

  FXAA = new THREE.ShaderPass(THREE.FXAAShader);

  FXAA.uniforms.resolution.value.set(1 / canvasWidth, 1 / canvasHeight);
  FXAA.renderToScreen = true;

  composer.addPass(dof);
  composer.addPass(FXAA);
}

function initDebug() {
  var debug;

  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0';
  stats.domElement.style.top = '0';
  Constants.elements.rootContainer.appendChild(stats.domElement);

  debug = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20, 1, 1, 1));
  debug.position.set(
    light.position.x,
    light.position.y,
    light.position.z
  );
  scene.add(debug);
}

function initGUI() {
  var cameraFolder;
  var cameraFocalLength;
  var dofFolder;

  gui = new dat.GUI();

  cameraFolder = gui.addFolder('Camera');
  cameraFocalLength = cameraFolder.add(camera, 'focalLength', 28, 200).name('Focal Length');
  cameraFocalLength.onChange(updateCamera);

  if (Constants.postprocessing) {
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
}

function updateCamera() {
  camera.setLens(camera.focalLength, camera.frameSize);
  camera.updateProjectionMatrix();
  dof.uniforms.focalLength.value = camera.focalLength;
}

function initCrates() {
  var crateId;
  var crate;

  for (crateId = 0; crateId < Constants.nbCrates; crateId++) {
    crate = createCrate(crateId);
    cratesContainer.add(crate);
  }
  cratesContainer.position.z = -(110 - (110 * Constants.nbCrates)) / 2;
}

function createCrate(id) {
  var boxBottom;
  var boxLeft;
  var boxRight;
  var boxBack;
  var boxFront;

  crates[id] = new THREE.Object3D();

  boxBottom = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 100), woodMaterial);
  crates[id].add(boxBottom);

  boxLeft = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 80), woodMaterial);
  boxLeft.position.set(0, 35, -55);
  boxLeft.rotation.x = Math.PI / 2;
  crates[id].add(boxLeft);

  if (id === 0) {
    boxRight = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 80), woodMaterial);
    boxRight.position.set(0, 35, 55);
    boxRight.rotation.x = Math.PI / 2;
    crates[id].add(boxRight);
  }

  boxBack = new THREE.Mesh(new THREE.BoxGeometry(80, 10, 120), woodMaterial);
  boxBack.position.set(-105, 35, 0);
  boxBack.rotation.z = Math.PI / 2;
  crates[id].add(boxBack);

  boxFront = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 100), woodMaterial);
  boxFront.position.set(95, 25, 0);
  boxFront.rotation.z = Math.PI / 2;
  crates[id].add(boxFront);

  crates[id].position.z = -110 * id;
  return crates[id];
}

function initRecords() {
  var currentRecordId = 0;
  var crateId;
  var pos;

  for (crateId = 0; crateId < crates.length; crateId++) {
    for (pos = 0; pos < Constants.recordsPerCrate; pos++) {
      createRecord(currentRecordId, crateId, pos);
      currentRecordId++;
    }
  }
}

function createRecord(id, crateId, pos) {
  var record = new Record(id, crateId, pos);
  crates[crateId].add(record.mesh);
  records.push(record);
}

function getRecordMaterial(src, hasSleeve) {
  var img = new Image();
  var imgWidth = 400;
  var imgHeight = 400;
  var mapCanvas = document.createElement('canvas');
  var texture = new THREE.Texture(mapCanvas);
  var sleeve;
  var sleeveMaterial;
  var materials;

  img.crossOrigin = 'Anonymous';
  img.src = src ? src : '';

  mapCanvas.width = mapCanvas.height = 400;
  texture.minFilter = THREE.LinearFilter;

  img.onload = function() {
    var ctx;

    if (hasSleeve) {
      sleeve = new Image();
      sleeve.src = Constants.sleeveMaskTexture;

      sleeve.onload = function() {
        ctx = mapCanvas.getContext('2d');
        ctx.translate(imgWidth / 2, imgHeight / 2);
        ctx.rotate(Math.PI / 2);
        ctx.translate(-imgWidth / 2, -imgHeight / 2);
        ctx.drawImage(img, 130, 130, 135, 135);
        ctx.drawImage(sleeve, 0, 0, 400, 400);
        texture.needsUpdate = true;
      };
    } else {
      ctx = mapCanvas.getContext('2d');
      ctx.translate(imgWidth / 2, imgHeight / 2);
      ctx.rotate(Math.PI / 2);
      ctx.translate(-imgWidth / 2, -imgHeight / 2);
      ctx.drawImage(img, 0, 0, 400, 400);
      texture.needsUpdate = true;
    }
  };

  sleeveMaterial = new THREE.MeshLambertMaterial({
    color: Constants.sleeveColor,
  });

  materials = [
    sleeveMaterial,
    sleeveMaterial,
    sleeveMaterial,
    // texture
    new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: texture,
    }),
    sleeveMaterial,
    sleeveMaterial,
  ];

  return materials;
}


/*=============================
=            UTILS            =
=============================*/

function wheelDistance(e) {
  var event;
  var wheelDelta;
  var detail;

  event = e || window.event;

  wheelDelta = event.wheelDelta;
  detail = event.detail;

  if (detail) {
    if (wheelDelta) {
      return wheelDelta / detail / 40 * detail > 0 ? 1 : -1; // Opera
    }
    return -detail / 3; // Firefox;
  }

  return wheelDelta / 120; // IE/Safari/Chrome
}

function wheelDirection(e) {
  var event;

  event = e || window.event;
  
  return (event.detail < 0) ? 1 : (event.wheelDelta > 0) ? 1 : -1;
}

function coordsEqualsApprox(coord1, coord2, range) {
  return (Math.abs(coord1.x - coord2.x) <= range) && (Math.abs(coord1.y - coord2.y) <= range);
}

function fadeOut(element) {
  var transitionEvent;

  if (element.style.opacity === 0) {
    element.style.display = 'none';
  } else {
    transitionEvent = getTransitionEvent(element);

    if (transitionEvent) {
      element.addEventListener(transitionEvent, onFadeComplete);
      element.style.opacity = 0;
    }
  }
}

function fadeIn(element) {
  var transitionEvent;

  if (element.style.opacity === '' || element.style.opacity === '1') {
    element.style.display = 'block';
  } else {
    transitionEvent = getTransitionEvent(element);
    element.style.display = 'block';

    if (transitionEvent) {
      element.addEventListener(transitionEvent, onFadeComplete);
    }

    setTimeout(function() {
      element.style.opacity = 1;
    }, 15);
  }
}

function onFadeComplete(e) {
  e.currentTarget.removeEventListener(e.type, onFadeComplete);

  if (e.currentTarget.style.opacity === '0') {
    e.currentTarget.style.display = 'none';
  } else {
    e.currentTarget.style.display = 'block';
  }
}

function hideElement(element) {
  element.style.opacity = 0;
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'block';
  element.style.opacity = 1;
}

function getTransitionEvent() {
  var t;
  var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
    };

  for (t in transitions) {
    if (document.body.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

function calculateCanvasSize() {
  canvasWidth = Constants.canvasWidth ? Constants.canvasWidth : Constants.elements.rootContainer.clientWidth;
  canvasHeight = Constants.canvasHeight ? Constants.canvasHeight : Constants.elements.rootContainer.clientHeight;
}

function setCanvasDimensions() {
  Constants.elements.canvasContainer.style.height = canvasHeight + 'px';
  Constants.elements.infoContainer.style.height = canvasHeight + 'px';
  Constants.elements.loadingContainer.style.height = canvasHeight + 'px';

  Constants.elements.canvasContainer.style.width = canvasWidth + 'px';
  Constants.elements.infoContainer.style.width = canvasWidth + 'px';
  Constants.elements.loadingContainer.style.width = canvasWidth + 'px';
}

function shuffle(array) {
  var counter = array.length;
  var temp;
  var index;

    // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function isFunction(obj) {
  return typeof obj === 'function' || false;
}


/*===============================
=            EXPORTS            =
===============================*/

/*==========  Public Methods  ==========*/

exports.init = function init(params) {
  Constants.extend(params);

  // feature test
  if (!Modernizr.webgl) return;

  if (window.devicePixelRatio !== undefined) {
    dpr = window.devicePixelRatio;
  } else {
    dpr = 1;
  }

  if (!Constants.elements.rootContainer) {
    console.error('cratedigger.js - Init failed : can not find root container element.');
    return;
  }

  if (!Constants.elements.canvasContainer) {
    console.error('cratedigger.js - Init failed : can not find canvas container element.');
    return;
  }

  if (!Constants.elements.loadingContainer) {
    console.error('cratedigger.js - Init failed : can not find loading container element.');
    return;
  }

  if (!Constants.elements.infoContainer) {
    console.error('cratedigger.js - Init failed : can not find info container element.');
    return;
  }

  calculateCanvasSize();
  initScene();
};

exports.startRender = function startRender() {
  doRender = true;
  animate();
};

exports.stopRender = function stopRender() {
  doRender = false;
};

exports.enablePostprocessing = function enablePostprocessing() {
  Constants.postprocessing = true;
};

exports.disablePostprocessing = function disablePostprocessing() {
  Constants.postprocessing = false;
};

/*==========  Public getters  ==========*/

exports.getCanvas = function getCanvas() {
  return renderer.domElement;
};

exports.getRecordsDataList = function getRecordsDataList() {
  return recordsDataList;
};

exports.getLoadedRecords = function getLoadedRecords() {
  return loadedRecords;
};

exports.getSelectedRecord = function getSelectedRecord() {
  return records[selectedRecord];
};

/*==========  Methods accessors  ==========*/

exports.loadRecords = loadRecords;
exports.unloadRecords = unloadRecords;
exports.resetShownRecord = resetShownRecord;
exports.shuffleRecords = shuffleRecords;
exports.flipSelectedRecord = flipSelectedRecord;
exports.flipBackSelectedRecord = flipBackSelectedRecord;
exports.selectRecord = selectRecord;
exports.selectPrevRecord = selectPrevRecord;
exports.selectNextRecord = selectNextRecord;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/*==================================
=            PUBLIC API            =
==================================*/

module.exports = exports;
