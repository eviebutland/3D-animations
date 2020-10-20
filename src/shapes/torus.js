let camera, scene, torus, renderer

function setUp(){
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 25

  createTorus()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement)
  render();
}

function createTorus(){
  let shape = new THREE.TorusGeometry(10, 3, 16, 100)
  let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
  torus = new THREE.Mesh(shape, material)
  scene.add(torus)
}

var render = function () {
  requestAnimationFrame(render);
  torus.rotation.x += 0.01
  torus.rotation.z += 0.02
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
};
setUp()