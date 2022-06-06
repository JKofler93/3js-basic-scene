

// Create a scene
const scene = new THREE.Scene()

// Creating a mesh: BoxGeometry and MeshBasicMaterial create a mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// Render the
scene.add(mesh)

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Create a camera: PerspectiveCamera:(verticalFieldOfView value in degrees, aspectRation sizes.width / sizes.height )
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// To transfrom an object use: position, rotation, scale
// Position: x,y,z 
// x: Right
// y: Up
// z: Towards us
camera.position.z = 3
// camera.position.x = 2
// camera.position.y = 2
scene.add(camera)



// Grab canvas element
const canvas = document.querySelector('.webgl')
// Renderer: will render via an html canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

// Size the element
renderer.setSize(sizes.width, sizes.height)

// Render the scene and camera .render(sceen, camera)
renderer.render(scene, camera)

