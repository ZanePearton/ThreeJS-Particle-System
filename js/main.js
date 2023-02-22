// https://github.com/mrdoob/three.js/blob/dev/examples/misc_controls_orbit.html

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