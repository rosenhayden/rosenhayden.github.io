import * as THREE from 'three';


const loader = new GLTFLoader(); 
loader.load( 'forest_house.glb', function ( gltf ) {

	const model = gltf.scene;
	model.position.set( 1, 1, 0 );
	model.scale.set( 0.01, 0.01, 0.01 );
	scene.add( model );

	mixer = new THREE.AnimationMixer( model );
	mixer.clipAction( gltf.animations[ 0 ] ).play();

	renderer.setAnimationLoop( animate );

}, undefined, function ( e ) {

	console.error( e );

} );



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const directionalLight = new THREE.DirectionalLight( 0xeb2828, 0.5 );
scene.add( directionalLight );

directionalLight.position.set(0, 20, 0);

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xedbdd2 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const g = new THREE.PlaneGeometry( 10000, 10000 );
const m = new THREE.MeshBasicMaterial( { color: 0xbbbbbb } );
const plane = new THREE.Mesh( g, m );
scene.add( plane );
plane.position.set(0, -30, 0);
plane.rotation.set(Math.PI / -2, 0, 0);


scene.background = new THREE.Color( 0x282828 );

camera.position.z = 100;
function animate() {

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;
  renderer.render( scene, camera );
}
