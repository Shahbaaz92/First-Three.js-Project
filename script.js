//Import everything from three.js
import * as THREE from "three";

//Canvas - A canvas is an HTML element that can be used to render graphics. It is a container for the 3D scene.
const canvas = document.querySelector("canvas.webgl");
//Scene
const scene = new THREE.Scene();

//Object - An object in the scene is anything that has a position, rotation, and scale and can be rendered on the scene.
//Geometry - A geometry is a shape that can be rendered in the scene. It defines the shape of the object.
const geometry = new THREE.BoxGeometry(1, 1, 1);
//Material - A material is a surface that can be applied to a geometry. It defines how the object will look when rendered.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//Mesh - A mesh is a combination of geometry and material. It is the object that will be rendered in the scene.
const mesh = new THREE.Mesh(geometry, material);

//Add the mesh to the scene
scene.add(mesh);

//Sizes - The sizes of the scene are the width and height of the viewport. It defines how the scene will be rendered on the screen.
const sizes = {
  width: 800,
  height: 600,
};

//Camera - A camera is a virtual camera that defines the view of the scene. It determines what will be visible in the scene.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 3; //Set the position of the camera
camera.position.x = 1; //Set the position of the camera
camera.position.y = 0.15; //Set the position of the camera

//Render - A renderer is a component that renders the scene and camera. It takes the scene and camera as input and outputs the rendered image to the screen.
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
