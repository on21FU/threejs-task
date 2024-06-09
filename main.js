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

const geometry = new THREE.TorusKnotGeometry(10, 2, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);

var pointLight = new THREE.PointLight(0xffffff, 600);
pointLight.position.set(0, 0, 20);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotateX(0.01)
  torusKnot.rotateY(0.01)
  torusKnot.rotateZ(0.01)
  renderer.render(scene, camera);
}

animate();

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    camera.position.z = 50 + scrollY;
  });
