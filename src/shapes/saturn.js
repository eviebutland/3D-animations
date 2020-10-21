let scene, camera, renderer, largestRing, mediumRing, innerCircle, smallestRing

function setUp(){
  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xffffff)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 20
  createRender()
  createLargestRing()
  createMediumRing()
  createInnerSphere()
  createSmallestRing()
}
setUp()
animation()

function createLargestRing(){
  const geometry = new THREE.TorusGeometry(4, 0.5,  2, 50)
  const material = new THREE.MeshBasicMaterial({color: 'rgba(255, 158, 100)'})
  largestRing = new THREE.Mesh(geometry, material)
  scene.add(largestRing)
}
function createMediumRing(){
  const geometry = new THREE.TorusGeometry(3, 0.5,  2, 50)
  const material = new THREE.MeshBasicMaterial({color: 'rgba(255, 178, 10)'})
  mediumRing = new THREE.Mesh(geometry, material)
  scene.add(mediumRing)
}
function createSmallestRing(){
  const geometry = new THREE.TorusGeometry(2, 0.5,  2, 50)
  const material = new THREE.MeshBasicMaterial({color: 'rgba(254, 217, 200)'})
  smallestRing = new THREE.Mesh(geometry, material)
  scene.add(smallestRing)
}
function createInnerSphere(){
  const geometry = new THREE.SphereGeometry(2, 30, 30, 0, Math.PI * 2, 0, Math.PI * 2)
  const material = new THREE.MeshBasicMaterial({color: 'rgba(204, 78, 1)'})
  innerCircle = new THREE.Mesh(geometry, material)
  scene.add(innerCircle)
}
 
function createRender(){
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

function animation(){
  requestAnimationFrame(animation)
  largestRing.rotation.y += 0.01
  mediumRing.rotation.y += 0.01
  smallestRing.rotation.y += 0.01
  renderer.render(scene, camera); // this must always be in animation
}
