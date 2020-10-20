var camera, renderer, scene, sphere

function setUp(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5
  
  createSphere();
  
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor( 0xffffff, 0)
  
  document.body.appendChild(renderer.domElement);
}

function createSphere(){
  var geometry = new THREE.SphereGeometry(3, 30, 30, 0, Math.PI * 2, 0, Math.PI * 2);
  var material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
  sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );
}

setUp()

var render = function () {
    requestAnimationFrame(render);
    sphere.rotation.x += 0.01
    sphere.rotation.z += 0.02
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();
      