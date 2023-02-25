//import from CDN API https://cdn.skypack.dev/three
//three import
import * as THREE from "https://cdn.skypack.dev/three";
import { OrbitControls } from "./three/OrbitControls.js";
import { gsap } from "https://cdn.skypack.dev/gsap";
//globals
const size = {
    width: window.innerWidth,
    height: window.innerHeight,
}
//globals
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "#0x00ff83" });
const mesh = new THREE.Mesh(geometry,material);
const light = new THREE.PointLight(0xffffff, 1, 100);
const camera = new THREE.PerspectiveCamera( 45, size.width/size.height);
const canvas = document.querySelector('.webgl');
const controls = new OrbitControls(camera, canvas);
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
const hello = "working yo"; 
const rotation = .0009;
var particlecount = 20;
//array
let  particles = [];


//functions_initMain
function initMain(scene,mesh,light,camera,renderer,particlecount){
    // pointcloud(particlecount);
    scene.add(mesh);
    light.position.set(10,1,10);
    scene.add(light);
    camera.position.z = 10;
    scene.add(camera);
    renderer.setSize(size.width,size.height);
}

//functions_pointcloud
function pointcloud(particlecount){
    const i = 0;
    for (const i = 0; i < particlecount; i++) {
        const x = THREE.MathUtils.randFloatSpread(6);
        const y = THREE.MathUtils.randFloatSpread(6);
        const z = THREE.MathUtils.randFloatSpread(6);
        particles.push(x, y, z);
        console.log (x, y , z);
    }
}

//initialist_main_fuction
initMain(scene,mesh,light,camera,renderer);

//functions_animate
function animate() {
    requestAnimationFrame(animate);
    const rotation = .0009;
    mesh.rotation.x += rotation;
    mesh.rotation.y += rotation;
    mesh.rotation.z += rotation;
    // console.log (mesh.rotation.x, mesh.rotation.y ,mesh.rotation.z);
    render();
}

//functions_render
function render() {
    renderer.render(scene, camera);
}

//functions_animate
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);
//initialist main fuction
animate();





