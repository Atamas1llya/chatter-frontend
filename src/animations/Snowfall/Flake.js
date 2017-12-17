import * as THREE from 'three';

const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

export default class Flake {
  constructor() {
    const size = generateRandomNumber(0.009, 0.07);
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({ color: '#535353' });
    this.flake = new THREE.Mesh(geometry, material);

    this.yLim = 3.87;
    this.xLim = 6.9;

    this.direction = Math.random() >= 0.5 ? 'right' : 'left';
    this.oneDirectionMoves = 0;
    this.oneDirectionLimit = 500;

    // this.xSpeed = 0.004;
    // this.ySpeed = 0.01;
    // this.rotSpeed = 0.01;
    
    this.xSpeed = generateRandomNumber(0.003, 0.005);
    this.ySpeed = generateRandomNumber(0.005, 0.02);
    this.rotSpeed = generateRandomNumber(0.05, 0.005);

    this.flake.position.x = generateRandomNumber(-this.xLim, this.xLim);
    this.flake.position.y = this.yLim;
  }

  update = () => {
    if (this.direction === 'right') {
      this.flake.position.x -= this.xSpeed;
      this.flake.rotation.z -= this.rotSpeed;
      this.oneDirectionMoves++;
      if (this.oneDirectionMoves > this.oneDirectionLimit) {
        this.oneDirectionMoves = 0;
        if (Math.random() >= 0.5) {
          this.direction = 'left';
        }
      }
    } else {
      this.flake.position.x += this.xSpeed;
      this.flake.rotation.z += this.rotSpeed;
      this.oneDirectionMoves++;

      if (this.oneDirectionMoves > this.oneDirectionLimit) {
        this.oneDirectionMoves = 0;
        if (Math.random() >= 0.5) {
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
