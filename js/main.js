
//import from CDN API https://cdn.skypack.dev/three
//imports
//three import
import * as THREE from "https://cdn.skypack.dev/three";
import { OrbitControls } from "./three/OrbitControls.js";
//gsap import
import { gsap } from "https://cdn.skypack.dev/gsap";
//comsol log imports
console.log(gsap);

// set three as a constant
const scene = new THREE.Scene();
//canvas size
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// geometry 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "#0x00ff83" });
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10,1,10);
scene.add(light);

// camera
const camera = new THREE.PerspectiveCamera( 45, size.width/size.height);
camera.position.z = 10;
scene.add(camera);

//render
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(size.width,size.height);
renderer.render(scene, camera);

//controls 
const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 5, 0);
// controls.update();

//update window
window.addEventListener("resize", () => {
  //update size
  console.log(window.innerWidth);
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.updateProjectionMatrix();
  camera.aspect = size.width/size.height;
  renderer.setSize(size.width,size.height);
})

//render loop
const loop = () => {
  // mesh location >> add acellaration
  mesh.position.z += 0.01;
  mesh.position.y += 0.001;
  mesh.position.z += 0.001;
  // render to screne
  renderer.render(scene, camera);
  // loop though animation frame
  window.requestAnimationFrame(loop);
  //control update function
  controls.update();
}
loop();