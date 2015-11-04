import THREE from 'three.js';
import TWEEN from 'tween.js';

import Constants from './constants';
import CameraManager from './cameraManager';

export default class Record {
  constructor(id, crateId, pos) {
    this.id = id;
    this.crateId = crateId;
    this.pos = pos;
    this.state = 'out';
    this.recordXPos = -62 + (135 / Constants.recordsPerCrate) * pos;
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(100, 1.5, 100, 1, 1, 1),
      new THREE.MeshFaceMaterial(new THREE.MeshLambertMaterial({
        color: Constants.sleeveColor,
      }))
    );
    this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(50, 0, 0));
    this.mesh.position.set(this.recordXPos, Constants.scene.recordBaseY, 0);
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.recordId = id;
    this.absolutePosition = new THREE.Vector3();

    this.positionTween = new TWEEN.Tween();
    this.rotationTween = new TWEEN.Tween();

    this.setUnactive();
    this.pushRecord();
  }

  setActive() {
    this.active = true;
    this.mesh.visible = true;
  }

  setUnactive() {
    this.active = false;
    this.mesh.visible = false;
  }

  showRecord() {
    this.positionTween.stop();
    this.rotationTween.stop();

    if (this.state !== 'shown') {

      this.state = 'shown';
      this.absolutePosition.setFromMatrixPosition(this.mesh.matrixWorld);

      this.positionTween = new TWEEN.Tween(this.mesh.position)
        .to({
          y: Constants.scene.recordShownY,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();

      this.rotationTween = new TWEEN.Tween(this.mesh.rotation)
        .to({
          z: Math.PI / 2,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();

      CameraManager.focusRecord(this.recordXPos, this.absolutePosition);
    }
  }

  pushRecord() {
    if (this.state != 'pushed') {
      this.state = 'pushed';
      this.positionTween.stop();
      this.rotationTween.stop();
      this.positionTween = new TWEEN.Tween(this.mesh.position)
        .to({
          y: Constants.scene.recordBaseY,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();

      this.rotationTween = new TWEEN.Tween(this.mesh.rotation)
        .to({
          z: Math.PI / 2 + Math.PI / 7,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();
    }
  }

  pullRecord() {
    if (this.state !== 'pulled') {
      this.state = 'pulled';
      this.positionTween.stop();
      this.rotationTween.stop();

      this.positionTween = new TWEEN.Tween(this.mesh.position)
        .to({
          y: Constants.scene.recordBaseY,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();

      this.rotationTween = new TWEEN.Tween(this.mesh.rotation)
        .to({
          z: Math.PI / 2 - Math.PI / 7,
        }, Constants.scene.recordMoveTime)
        .easing(TWEEN.Easing.Quartic.Out).start();
    }
  };

  flipRecord(done) {
    this.state = 'flipped';
    this.positionTween.stop();
    this.rotationTween.stop();

    this.positionTween = new TWEEN.Tween(this.mesh.position)
      .to({
        y: Constants.scene.recordFlippedY,
      }, Constants.scene.infoOpenTime)
      .easing(TWEEN.Easing.Quartic.Out).start();

    this.rotationTween = new TWEEN.Tween(this.mesh.rotation)
      .delay(Constants.scene.infoOpenTime / 4)
      .to({
        x: 0,
        y: Math.PI,
        z: Math.PI / 2,
      }, Constants.scene.infoOpenTime)
      .easing(TWEEN.Easing.Quartic.Out).start()
      .onComplete(done);

    CameraManager.zoomInRecord(this.recordXPos, this.absolutePosition);
  };

  flipBackRecord(done, noCameraTween) {
    if (this.state === 'flipped') {
      this.positionTween.stop();
      this.rotationTween.stop();

      this.positionTween = new TWEEN.Tween(this.mesh.position)
        .delay(Constants.scene.infoOpenTime / 2)
        .to({
          y: Constants.scene.recordBaseY,
        }, Constants.scene.infoOpenTime)
        .easing(TWEEN.Easing.Quartic.Out).start();

      this.rotationTween = new TWEEN.Tween(this.mesh.rotation)
        .to({
          y: 0,
        }, Constants.scene.infoOpenTime / 2)
        .easing(TWEEN.Easing.Quartic.Out).start()
        .onComplete(done);

      if (!noCameraTween) {
        CameraManager.zoomOutRecord(this.recordXPos, this.absolutePosition);
      }
    }
  };
}
