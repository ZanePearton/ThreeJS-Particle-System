// Import from CDN APIs
import * as THREE from "https://cdn.skypack.dev/three";
import { OrbitControls } from "./three/OrbitControls.js";
import { gsap } from "https://cdn.skypack.dev/gsap";

// Globals
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshStandardMaterial({ color: "#0x00ff83" });
const mesh = new THREE.Mesh(geometry, material);
const light = new THREE.PointLight(0xffffff, 1.3, 100);
const camera = new THREE.PerspectiveCamera(45, size.width / size.height);
const canvas = document.querySelector(".webgl");
const controls = new OrbitControls(camera, canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const pointgeometry = new THREE.BufferGeometry();
var particlecount = 300000;

// Array
const particles = [];
const velocities = [];
const pointmaterial = new THREE.PointsMaterial({ size: 0.001, color: 0x00ff83 });
let points = null;

//function_initMain
function initMain(scene, mesh, light, camera, renderer, particlecount) {
  scene.background = new THREE.Color(0x000000);
  scene.add(mesh);
  light.position.set(10, 1, 10);
  scene.add(light);
  camera.position.z = 1;
  scene.add(camera);
  renderer.setSize(size.width, size.height);
}

//function_initalise_pointcloud_Vlocity
function pointcloud(particlecount) {
  for (var i = 0; i < particlecount; i++) {
    var x = THREE.MathUtils.randFloatSpread(6);
    var y = THREE.MathUtils.randFloatSpread(6);
    var z = THREE.MathUtils.randFloatSpread(6);
    particles.push(x, y, z);
    // Set a random velocity for each particle
    var vx = THREE.MathUtils.randFloatSpread(0.02);
    var vy = THREE.MathUtils.randFloatSpread(0.02);
    var vz = THREE.MathUtils.randFloatSpread(0.02);
    velocities.push(vx, vy, vz);
  }
  pointgeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(particles), 3)
  );
  points = new THREE.Points(pointgeometry, pointmaterial);
  scene.add(points);
}

//function_animate
function animate() {
  requestAnimationFrame(animate);
  for (var i = 0; i < particlecount; i++) {
    particles[i * 3] += velocities[i * 3];
    particles[i * 3 + 1] += velocities[i * 3 + 1];
    particles[i * 3 + 2] += velocities[i * 3 + 2];

    velocities[i * 3] += THREE.MathUtils.randFloatSpread(0.001);
    velocities[i * 3 + 1] += THREE.MathUtils.randFloatSpread(0.001);
    velocities[i * 3 + 2] += THREE.MathUtils.randFloatSpread(0.001);
  }
  pointgeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(particles), 3)
  );
  points.geometry = pointgeometry;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

//function_onWindowResize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//eventlistener window
window.addEventListener('resize', onWindowResize, false);

// Call the functions
initMain(scene, mesh, light, camera, renderer, particlecount);
pointcloud(particlecount);
animate();
