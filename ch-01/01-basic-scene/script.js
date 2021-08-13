// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// Mesh is composesd from the geometry and material
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Aspect Ration 
const sizes = {
    width: 800,
    height: 600
}

// After creating the mesh, we provide the Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 2
scene.add(camera)

// Renderer, render the scene from camera point of view in html canvas

// Fetch canvas element from html
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)