// TODO: Let is snow, let it snow, let it snow...
import * as THREE from 'three';

import Flake from './Flake';

import './styles.less';

export default class Snowfall {
  constructor(query) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.flakes = [];

    this.camera.position.z = 5;

    document.querySelector(query).appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.resize);

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        console.log(i);
        this.createSnowFlake();
      }, 100 * i * Math.random());
    }

    this.animate();
  }

  createSnowFlake = () => {
    const flake = new Flake();
    this.scene.add(flake.flake);
    this.flakes.push(flake);
  }

  animate = () => {
    this.id = requestAnimationFrame(this.animate);

    this.flakes.forEach(flake => flake.update());

    this.renderer.render(this.scene, this.camera);
  }

  resize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  destroy = () => {
    cancelAnimationFrame(this.id);// Stop the animation
    window.removeEventListener('resize', this.resize);
  }
}