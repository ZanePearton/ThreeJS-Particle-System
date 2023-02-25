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
const pointmaterial = new THREE.PointsMaterial({ size: .01, color: 0xffffff });
const material = new THREE.MeshStandardMaterial({ color: "#0x00ff83" });
const mesh = new THREE.Mesh(geometry, material);
const light = new THREE.PointLight(0xffffff, 1.3, 100);
const camera = new THREE.PerspectiveCamera(45, size.width / size.height);
const canvas = document.querySelector(".webgl");
const controls = new OrbitControls(camera, canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const pointgeometry = new THREE.BufferGeometry();
var particlecount = 30000;

//line geometry 
// const linegeometry = new THREE.BufferGeometry();
// const linematerial = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );

// arrays
const particles = [];
const velocities = [];
const color = [];
//lets 
let points;
// let line;

//function_initMain
function initMain(scene, mesh, light, camera, renderer) {
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
  points = new THREE.Points(pointgeometry, pointmaterial);
  scene.add(points);
  // line = new THREE.Line( linegeometry, linematerial );
  // scene.add(line);
}

//update fuction
function update(){
    // update
    for (var i = 0; i < particlecount; i++) {
      //Update the x position of the particle i by adding the x velocity of particle i
      particles[i * 3] += velocities[i * 3];
      // +1,+2,+3 to access x,y,z elements in the array
      particles[i * 3 + 1] += velocities[i * 3 + 1];
      particles[i * 3 + 2] += velocities[i * 3 + 2];
      //Update the x velocity of particle i by adding a random value between -0.001 and 0.001
      velocities[i * 3] += THREE.MathUtils.randFloatSpread(0.001);
      velocities[i * 3 + 1] += THREE.MathUtils.randFloatSpread(0.001);
      velocities[i * 3 + 2] += THREE.MathUtils.randFloatSpread(0.001);
    }

    pointgeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(particles), 3)
    );

    // linegeometry.setAttribute(
    //   "position",
    //   new THREE.BufferAttribute(new Float32Array(particles), 3)
    // );

}

//function_animate
function animate() {
  requestAnimationFrame(animate);
  update();
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
initMain(scene, mesh, light, camera, renderer);
pointcloud(particlecount);
animate();