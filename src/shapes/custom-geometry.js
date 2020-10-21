let scene, camera, renderer, customShape

function setUp(){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 20

  createRenderer()
  createCustomGeometry()
}
setUp()

function createRenderer(){
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}
function createCustomGeometry(){
  const geometry = new THREE.Geometry()
  geometry.vertices.push(new THREE.Vector3(0, 0, 5))
  geometry.vertices.push(new THREE.Vector3(0, 5, 0))
  geometry.vertices.push(new THREE.Vector3(5, 0, 0))
  geometry.faces.push(new THREE.Face3(0,1,2))
  let material = new THREE.MeshBasicMaterial({color: 0x00000, side: THREE.DoubleSide})
  let shape = new THREE.Mesh(geometry, material)
  scene.add(shape)
}
function createAnimation(){
  requestAnimationFrame(createAnimation)
  customShape.rotation.x += 0.01
  renderer.render(scene, camera)
}