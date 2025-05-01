//**************Three.js Basics*************/

//First Basic Project - Rendering a simple 3D box using Three.js
//Three.js is a JavaScript library that makes it easy to create 3D graphics in the browser. It uses WebGL to render 3D graphics and provides a simple API for creating and manipulating 3D objects.
//It is a powerful library that allows you to create complex 3D scenes with ease. It is widely used in web development for creating 3D graphics and animations.

// //Import everything from three.js
// import * as THREE from "three";

// //Canvas - A canvas is an HTML element that can be used to render graphics. It is a container for the 3D scene.
// const canvas = document.querySelector("canvas.webgl");
// //Scene
// const scene = new THREE.Scene();

// //Object - An object in the scene is anything that has a position, rotation, and scale and can be rendered on the scene.
// //Geometry - A geometry is a shape that can be rendered in the scene. It defines the shape of the object.
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// //Material - A material is a surface that can be applied to a geometry. It defines how the object will look when rendered.
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// //Mesh - A mesh is a combination of geometry and material. It is the object that will be rendered in the scene.
// const mesh = new THREE.Mesh(geometry, material);

// //Add the mesh to the scene
// scene.add(mesh);

// //Sizes - The sizes of the scene are the width and height of the viewport. It defines how the scene will be rendered on the screen.
// const sizes = {
//   width: 800,
//   height: 600,
// };

// //Camera - A camera is a virtual camera that defines the view of the scene. It determines what will be visible in the scene.
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// scene.add(camera);
// camera.position.z = 3; //Set the position of the camera
// camera.position.x = 1; //Set the position of the camera
// camera.position.y = 0.15; //Set the position of the camera

// //Render - A renderer is a component that renders the scene and camera. It takes the scene and camera as input and outputs the rendered image to the screen. Renderer is always last step.
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);

// renderer.render(scene, camera);

//Practice
import * as THREE from "three";
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffcd06 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 700,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.x = 0.5;
camera.position.y = 0.5;
camera.position.z = 3;

//Transform Objects
//Transformations are used to change the position, rotation, scale and quaternion of objects in the scene. Three.js provides methods to apply transformations to objects easily.

//Position
mesh.position.y = 0;
mesh.position.x = 0;
mesh.position.z = 0;
//Generally added before adding the mesh to the scene.
//Methods
// mesh.position.set(1, -0.5, -4);
console.log(mesh.position.length());
mesh.position.normalize(); //Normalize the position vector to make it a unit vector.
console.log(mesh.position.length());
console.log(mesh.position.distanceTo(camera.position));

//Scale
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;
// mesh.scale.set(0,0,0)

//Rotation
mesh.rotation.reorder("YXZ"); //Set the order of rotation to YXZ. This means that the object will be rotated around the Y-axis first, then the X-axis, and finally the Z-axis. Do it before setting the rotation values.
mesh.rotation.y = Math.PI;
// mesh.rotation.y = Math.PI * 0.25; //Rotate the object by 180 degrees around the y-axis;
mesh.rotation.x = Math.PI / 4;
mesh.rotation.z = 0;
// mesh.rotation.set(Math.PI / 4, Math.PI * 0.25, 0);

//Combining Transformations - You can combine transformations by applying them in the order you want. For example, you can first scale the object, then rotate it, and finally translate it.

//Axes Helper - An axis helper is a visual representation of the axes in the scene. It helps to visualize the orientation of the objects in the scene.
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
//LookAt - The lookAt method is used to make the camera look at a specific point in the scene. It takes a vector as input and makes the camera look at that point.
camera.lookAt(mesh.position); //Make the camera look at the mesh position.
//Scene Graph - The scene graph is a hierarchical representation of the objects in the scene. It defines the parent-child relationship between the objects in the scene. The scene graph is used to organize the objects in the scene and to apply transformations to them.

const group = new THREE.Group();
group.position.y = 0.5;
group.scale.y = 1;
group.rotation.y = 1;
scene.add(group);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x463a00 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00463a })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x46003a })
);
group.add(cube1, cube2, cube3);
cube2.position.set(1.5, 0, 0);
cube3.position.set(-1.5, 0, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
