
function setUp(){
  // create scene
  var scene = new THREE.Scene();

  // create camera
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // create renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // create cube
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube ); // cube gets added at (0,0)

  // positiion camera away 
  camera.position.z = 5;
  camera.position.y= -2;

  // create axes 
  let axes = new THREE.AxesHelper(3)
  scene.add(axes)
  // create animation
  var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
}
setUp()