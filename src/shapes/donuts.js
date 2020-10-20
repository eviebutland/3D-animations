let camera, scene, renderer, donut
let donuts = []

function setup(){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 30
  camera.position.y = -10;

  let x = Math.random()
  if(x < 0.2){
  }

  createRenderer()
}
setup()

function createDonut(){
  let geomerty = new THREE.TorusGeometry(1, 3, 16, 10, Math.PI * 2)
  let material = new THREE.MeshBasicMaterial({color: Math.random() * 0xfffff})
  donut = new THREE.Mesh(geomerty, material)
  donut.position.x = randomInRange(-15, 15)
  donut.position.z = randomInRange(-15, 15)
  donut.position.y = 15
  scene.add(donut)
  donuts.push(donut)

}
function createRenderer(){
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement)
}
let animation = function(){

  let x = Math.random();
  if(x < 0.1){
    createDonut()
  }
  console.log(donuts)
  donuts.forEach(d => {
    d.position.y -= 0.1
    console.log(d.position.y)
  })

  renderer.render(scene, camera)
  requestAnimationFrame(animation)

}
function randomInRange (to, from){
  let x = Math.random() * (to - from)
  return x + from
}
animation()