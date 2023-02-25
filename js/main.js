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
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshStandardMaterial({ color: "#0x00ff83" });
const mesh = new THREE.Mesh(geometry,material);
const light = new THREE.PointLight(0xffffff, 1.3, 100);
const camera = new THREE.PerspectiveCamera( 45, size.width/size.height);
const canvas = document.querySelector('.webgl');
const controls = new OrbitControls(camera, canvas); //enable_cam
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
var particlecount = 150000;

//array
const  particles = [];
const pointgeometry = new THREE.BufferGeometry();

// const color3 = new THREE.Color("rgb(particles.x, particles.y, particles.z)");
// console.log(color3);

const pointmaterial = new THREE.PointsMaterial({ size: .002, color: 0x00ff83 });
const points = new THREE.Points(pointgeometry, pointmaterial);

// points.rotation.x += rotation;
// points.rotation.y += rotation;
// console.log (points.rotation.x, points.rotation.y ,points.rotation.z);


//function_initMain
function initMain(scene,mesh,light,camera,renderer,particlecount){
    
    scene.background = new THREE.Color( 0xffffff );
    pointcloud(particlecount);
    pointgeometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
    scene.add(points);
    scene.add(mesh);
    scene.add(points);
    light.position.set(10,1,10);
    scene.add(light);
    camera.position.z = 1;
    scene.add(camera);
    renderer.setSize(size.width,size.height);
}

//function_initalise_pointcloud_write_to_an_array
function pointcloud(particlecount){
    for (var i = 0; i < particlecount; i++) {
        var x = THREE.MathUtils.randFloatSpread(6);
        var y = THREE.MathUtils.randFloatSpread(6);
        var z = THREE.MathUtils.randFloatSpread(6);
        particles.push(x, y, z);
        // console.log (x, y , z);
    }
}

//initialist_main_fuction
initMain(scene,mesh,light,camera,renderer,particlecount);

//function_animate
function animate() {
    requestAnimationFrame(animate);
    const rotation = .0009;
    //mesh_orbit
    mesh.rotation.x += rotation;
    mesh.rotation.y += rotation;
    mesh.rotation.z += rotation;
    //point_orbit 
    points.rotation.x += rotation;
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





