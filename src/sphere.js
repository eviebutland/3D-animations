import * as THREE from 'three';

function setUp(){
  let camera, scene, renderer

  // create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00ff00)


  // create camera
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 20

  
  // create sphere
  createSphere(scene)
  
  // create renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement )

  // create axes 
  createAxes(scene)
}

function createSphere(scene){
  let geomerty = new THREE.SphereGeometry(5, 30, 30)
  let material = new THREE.MeshBasicMaterial({color: oxffffff})
  let sphere = new THREE.Mesh(geomerty, material)
  scene.add(sphere)
}
function createAxes(scene){
  let axes = new THREE.AxesHelper(3)
  scene.add(axes)
}
setUp()