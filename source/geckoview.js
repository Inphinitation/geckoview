import * as threeJs from 'https://esm.run/three.js';
const gekVersion = "1.0.0";
console.log("GeckoView running v"+gekVersion);

class GeckoElement extends HTMLCanvasElement {
  constructor() {
    super();
  }
}
customElements.define('x-gecko', GeckoElement, { extends: 'canvas' });
const viewerObjects = document.querySelectorAll('[is="x-gecko"]');

const scene = new threeJs.THREE.Scene();
const camera = new threeJs.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new threeJs.THREE.WebGLRenderer( { canvas: viewerObjects[0] } );
const geometry = new threeJs.THREE.BoxGeometry( 1, 1, 1 );
const material = new threeJs.THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new threeJs.THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
