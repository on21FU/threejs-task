import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.setZ(50);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#sceneCanvas"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var pointLight = new THREE.PointLight(0xffffff, 600);
pointLight.position.set(0, 0, 20);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

