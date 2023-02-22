// // https://github.com/mrdoob/three.js/blob/dev/examples/misc_controls_orbit.html
// //global variables
// var scene, renderer, camera;
// var cube;
// var controls;
// var geometry;
// var light;
// var material;
// var particlecount = 20;
// var verticecount = 20;
// // var controls;
// //add array of points
// let  particles = [];
// let  vertices = [];
// let  colors = [];
// //global variables

// init();

// function init(){

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 3000);
//     renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     //let controls = new THREE.OrbitControls(camera, renderer.domElement);
//     //controls.addEventListener('change',renderer);
//     // light
//     light = new THREE.AmbientLight(0xffffff, .08);
//     scene.add(light);
//     light = new THREE.PointLight(0xffffff, .5);
//     light.position.set(0, 1, 2);
//     scene.add(light);
//     scene.add(cube);
//     camera.position.z = 23;
//     // initalise particles
//     for (var i = 0; i < particlecount; i++) {
//         //initalise array of points
//         var x = THREE.MathUtils.randFloatSpread(6);
//         var y = THREE.MathUtils.randFloatSpread(6);
//         var z = THREE.MathUtils.randFloatSpread(6);
//         //push random nunber to array list
//         particles.push(x, y, z);
//         for (var i = 0; i < verticecount; i++) {
//             var x = THREE.MathUtils.randFloatSpread(6);
//             var y = THREE.MathUtils.randFloatSpread(6);
//             var z = THREE.MathUtils.randFloatSpread(6);
//             vertices.push(x, y, z);
//         }
//         //console log the array initalial array
//     }
// }

// //run main
// init();

// //load geo to buffer
// function buffer(){

// }

// //add array geometry buffer
// geometry = new THREE.BufferGeometry();
// // geometry = new THREE.BufferGeometry().setFromPoints( points );
// geometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
// geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
// // geometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
// var material = new THREE.PointsMaterial({ size: .05, color: 0xffffff });
// // var material = new THREE.PointsMaterial({ size: 15, vertexColors: true });
// var points = new THREE.Points(geometry, material);
// var line = new THREE.Line( geometry, material );
// scene.add(points);
// scene.add(line);

// //animate frame
// function animate(){
//     requestAnimationFrame(animate);
//     //controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
//     var rotation = .0009;
//     // line.rotation.x += rotation;
//     // line.rotation.y += rotation;
//     // line.rotation.z += rotation; 
//     points.rotation.x += rotation;
//     points.rotation.y += rotation;
//     points.rotation.z += rotation;
//     console.log (points.rotation.x, points.rotation.y ,points.rotation.z);

//     // console.log(points);
// 	//render geometry 
// 	render();

// }

// function render(){
// 	renderer.render(scene,camera); 

// }

// function onWindowResize(){
// 	// Camera frustum aspect ratio
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	// After making changes to aspect
// 	camera.updateProjectionMatrix();
// 	// Reset size
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	}

// window.addEventListener('resize', onWindowResize, false);
// animate();











var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1, 1000);
var renderer = new THREE.WebGLRenderer();


//frame
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// camera
camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 400, 200, 0 );

//controls 
// controls = new OrbitControls(camera, renderer.domElement);
// controls.listenToKeyEvents(window);
// controls.enableDamping = true; 
// controls.dampingFactor = 0.05;
// controls.screenSpacePanning = false;
// controls.minDistance = 100;
// controls.maxDistance = 500;
// controls.maxPolarAngle = Math.PI / 2;

// geometry 
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();