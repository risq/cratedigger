export default {
  debug: false,
  canvasWidth: null,
  canvasHeight: null,
  nbCrates: 2,
  recordsPerCrate: 24,
  lightIntensity: 1,
  cameraMouseMove: true,
  backgroundColor: 0x111111,
  sleeveColor: 0x0d0702,
  sleeveMaskTexture: 'images/sleeve.png',
  crateTexture: 'images/wood.jpg',
  closeInfoPanelOnClick: true,
  closeInfoPanelOnScroll: true,
  postprocessing: false,
  blurAmount: 0.4,
  updateCanvasSizeOnWindowResize: true,
  elements: {
    rootContainer: null,
    canvasContainer: null,
    loadingContainer: null,
    infoContainer: null,
    titleContainer: null,
    artistContainer: null,
    coverContainer: null,
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
      z: 0,
    },
    cameraBasePosition: {
      x: 280,
      y: 200,
      z: 180,
    },
    cameraFocusPosition: {
      x: 190,
      y: 195,
      z: 93,
    },
    cameraMouseMoveSpeedY: 0.07,
    cameraMouseMoveSpeedZ: 0.04,
    grabSensitivity: 6,
  },

  onInfoPanelOpened: () => {},

  onInfoPanelClosed: () => {},

  onLoadingEnd: () => {},

  extend: function(options) {
    for (var key in options) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        this[key] = options[key];
      }
    }

    return this;
  },
};
