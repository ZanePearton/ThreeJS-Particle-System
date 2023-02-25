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
var particlecount = 2000;

//array
let  particles = [];

var bgeometry = new THREE.BufferGeometry();
var bmaterial = new THREE.PointsMaterial({ size: .01, color: 0xffffff });
var points = new THREE.Points(bgeometry, bmaterial);

// points.rotation.x += rotation;
// points.rotation.y += rotation;
// console.log (points.rotation.x, points.rotation.y ,points.rotation.z);

//function_initMain
function initMain(scene,mesh,light,camera,renderer,particlecount){
    pointcloud(particlecount);
    bgeometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
    scene.add(points);
    scene.add(mesh);
    scene.add(points);
    light.position.set(10,1,10);
    scene.add(light);
    camera.position.z = 5;
    scene.add(camera);
    renderer.setSize(size.width,size.height);
}

//function_pointcloud_write to an array
function pointcloud(particlecount){
    for (var i = 0; i < particlecount; i++) {
        var x = THREE.MathUtils.randFloatSpread(6);
        var y = THREE.MathUtils.randFloatSpread(6);
        var z = THREE.MathUtils.randFloatSpread(6);
        particles.push(x, y, z);
        console.log (x, y , z);
    }
}

//initialist_main_fuction
initMain(scene,mesh,light,camera,renderer,particlecount);

//function_animate
function animate() {
    requestAnimationFrame(animate);
    const rotation = .0009;
    mesh.rotation.x += rotation;
    mesh.rotation.y += rotation;
    mesh.rotation.z += rotation;
    // console.log (mesh.rotation.x, mesh.rotation.y ,mesh.rotation.z);
    render();
}

//function_render
function render() {
    renderer.render(scene, camera);
}

//function_animate
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//eventlistener window
window.addEventListener('resize', onWindowResize, false);

//initialist main fuction
animate();





