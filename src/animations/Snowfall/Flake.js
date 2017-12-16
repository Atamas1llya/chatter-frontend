import * as THREE from 'three';

const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

export default class Flake {
  constructor() {
    const geometry = new THREE.PlaneGeometry(0.05, 0.05);
    const material = new THREE.MeshLambertMaterial({ color: '#535353' });
    this.flake = new THREE.Mesh(geometry, material);

    this.yLim = 3.87;
    this.xLim = 6.9;

    this.direction = Math.random() >= 0.5 ? 'right' : 'left';
    this.oneDirectionMoves = 0;
    this.oneDirectionLimit = 500;

    this.xSpeed = 0.002;
    this.ySpeed = 0.008;

    this.flake.position.x = generateRandomNumber(-this.xLim, this.xLim);
    this.flake.position.y = this.yLim;
  }

  update = () => {
    if (this.direction === 'right') {
      this.flake.position.x -= this.xSpeed;
      this.flake.rotation.z -= 0.01;
      this.oneDirectionMoves++;
      if (this.oneDirectionMoves > this.oneDirectionLimit) {
        this.oneDirectionMoves = 0;
        if (Math.random() >= 0.5) {
          console.log('Direction changed!');
          this.direction = 'left';
        }
      }
    } else {
      this.flake.position.x += this.xSpeed;
      this.flake.rotation.z += 0.01;
      this.oneDirectionMoves++;

      if (this.oneDirectionMoves > this.oneDirectionLimit) {
        this.oneDirectionMoves = 0;
        if (Math.random() >= 0.5) {
          console.log('Direction changed!');
          this.direction = 'right';
        }
      }
    }

    const { position } = this.flake;

    if (position.y > -this.yLim) {
      this.flake.position.y -= this.ySpeed;
    } else {
      this.flake.position.y = this.yLim;
    }

    if (position.x > this.xLim) {
      this.flake.position.x = -this.xLim;
    }

    if (position.x < -this.xLim) {
      this.flake.position.x = this.xLim;
    }

  }

}
