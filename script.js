// **************Three.js Basics*************/

// TODO First Basic Project - Rendering a simple 3D box using Three.js
// Three.js is a JavaScript library that makes it easy to create 3D graphics in the browser. It uses WebGL to render 3D graphics and provides a simple API for creating and manipulating 3D objects.
// It is a powerful library that allows you to create complex 3D scenes with ease. It is widely used in web development for creating 3D graphics and animations.

// Import everything from three.js
// ! import * as THREE from "three";

// * CANAVAS
// Canvas - A canvas is an HTML element that can be used to render graphics. It is a container for the 3D scene.
//  The canvas element is used to create a drawing surface for the 3D scene. It is used to render the 3D graphics on the screen.
//  const canvas = document.querySelector("canvas.webgl");

// * SCENE
// Scene - A scene is a container for all the objects in the 3D world. It is used to create a 3D environment where the objects can be rendered.
//  const scene = new THREE.Scene();

// * OBJECT
// Object - An object in the scene is anything that has a position, rotation, and scale and can be rendered on the scene.

// * GEOMETRY
// Geometry - A geometry is a shape that can be rendered in the scene. It defines the shape of the object.
//  const geometry = new THREE.BoxGeometry(1, 1, 1);

// * MATERIAL
// Material - A material is a surface that can be applied to a geometry. It defines how the object will look when rendered.
//  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// * MESH
// Mesh - A mesh is a combination of geometry and material. It is the object that will be rendered in the scene.
//  const mesh = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
//  scene.add(mesh);

// * SIZES
//  Sizes - The sizes of the scene are the width and height of the viewport. It defines how the scene will be rendered on the screen.
//  const sizes = {
//    width: 800,
//    height: 600,
//  };

// *CAMERA
//  Camera - A camera is a virtual camera that defines the view of the scene. It determines what will be visible in the scene.
//  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//  scene.add(camera);
//  camera.position.z = 3; // Set the position of the camera
//  camera.position.x = 1; // Set the position of the camera
//  camera.position.y = 0.15; // Set the position of the camera

// * RENDERER
//  Render - A renderer is a component that renders the scene and camera. It takes the scene and camera as input and outputs the rendered image to the screen. Renderer is always last step.
//  const renderer = new THREE.WebGLRenderer({
//    canvas: canvas,
//  });
//  renderer.setSize(sizes.width, sizes.height);

//  renderer.render(scene, camera);

// TODO Practice
import * as THREE from "three";
import gsap from "gsap";
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffcd06 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 750,
  height: 650,
};

/**
 * Cursor
 */
window.addEventListener("mousemove", (event) => {
  console.log(event);
});

let camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// const aspectRatio = sizes.width / sizes.height;
// camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
scene.add(camera);
camera.position.x = 0.5;
camera.position.y = 0.5;
camera.position.z = 4;

// ! TRANSFORM OBJECTS

// Transformations are used to change the position, rotation, scale and quaternion of objects in the scene. Three.js provides methods to apply transformations to objects easily.

// *Position
mesh.position.y = 0; // upwards/downwards -
mesh.position.x = 0; // sidewards
mesh.position.z = 0; // forwards/backwards

// Generally added before adding the mesh to the scene.

// * Position Methods
//  mesh.position.set(1, -0.5, -4); // Set the position of the mesh to (1, -0.5, -4) where x=1, y=-0.5, z=-4.
//  console.log(mesh.position.length()); // Get the length of the position vector from the origin (0,0,0) to the mesh position.
//  mesh.position.normalize(); // Normalize the position vector to make it a unit vector.
//  console.log(mesh.position.length());
//  console.log(mesh.position.distanceTo(camera.position)); // Get the distance between the mesh position and the camera position.

// * Axes Helper - An axis helper is a visual representation of the axes in the scene. It helps to visualize the orientation of the objects in the scene.
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// * Scale
//  mesh.scale.x = 2;
//  mesh.scale.y = 0.5;
//  mesh.scale.z = 0.5;
//  mesh.scale.set(0,0,0)

// * Rotation
//  mesh.rotation.reorder("YXZ"); // Set the order of rotation to YXZ. This means that the object will be rotated around the Y-axis first, then the X-axis, and finally the Z-axis. Do it before setting the rotation values.
//  mesh.rotation.y = Math.PI;
//  mesh.rotation.y = Math.PI * 0.25; // Rotate the object by 180 degrees around the y-axis;
//  mesh.rotation.x = Math.PI / 4;
//  mesh.rotation.z = 0;
//  mesh.rotation.set(Math.PI / 4, Math.PI * 0.25, 0);

// * Combining Transformations - You can combine transformations by applying them in the order you want. For example, you can first scale the object, then rotate it, and finally translate it.

// * LookAt - The lookAt method is used to make the camera look at a specific point in the scene. It takes a vector as input and makes the camera look at that point.

camera.lookAt(mesh.position); // Make the camera look at the mesh position.

// !GROUPING OBJECTS

// * Scene Graph - The scene graph is a hierarchical representation of the objects in the scene. It defines the parent-child relationship between the objects in the scene. The scene graph is used to organize the objects in the scene and to apply transformations to them.

// TODO New Group

/*
 const group = new THREE.Group();
 group.position.y = 1;
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
*/

// *Rendering

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
//  renderer.render(scene, camera);

// ! ANIMATION

// Animation is the process of creating the illusion of motion by displaying a series of images or frames. In Three.js, animation is done using the requestAnimationFrame method, which is a built-in method in JavaScript that allows you to create smooth animations.
// It is used to create a loop that updates the scene and renders it at a specific frame rate. The requestAnimationFrame method takes a callback function as input and calls it before the next repaint of the browser.

// Animation control using time
// The time variable is used to keep track of the time elapsed since the last frame. It is used to calculate the delta time, which is the time difference between the current frame and the previous frame. The delta time is used to update the position and rotation of the objects in the scene.
//  It is used to create smooth animations that are independent of the frame rate. The delta time is calculated by subtracting the current time from the previous time. The delta time is then used to update the position and rotation of the objects in the scene.

/* let time = Date.now();

  const loop = () => {
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  mesh.position.x += 0.01;
  mesh.rotation.y += 0.01 * deltaTime;

  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
 };
*/

// Animation control using Three.Clock()
// It is a built-in class in the three.js library. The Three.Clock class is a utility class that provides a simple way to keep track of time in your application.
// The Three.Clock class is used to keep track of the time elapsed since the last frame. It is used to create smooth animations that are independent of the frame rate. The Three.Clock class provides methods to start, stop, and reset the clock. It also provides methods to get the elapsed time and delta time.

const clock = new THREE.Clock();
const loop = () => {
  const elaspedTime = clock.getElapsedTime();
  // Update objects
  mesh.rotation.y = elaspedTime * Math.PI; //
  mesh.position.x = Math.sin(elaspedTime);
  mesh.position.y = Math.cos(elaspedTime);

  // Render Object
  renderer.render(scene, camera);
  // Call the loop again
  window.requestAnimationFrame(loop);
};
loop();

// Animation control using gsap
// The gsap library is used to create animations in JavaScript. It provides a simple API for creating complex animations with ease. It is widely used in web development for creating animations and transitions.
// It is a powerful library that allows you to create complex animations with ease. It is widely used in web development for creating animations and transitions.

//  gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
//  gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

//  const loop = () => {
//    renderer.render(scene, camera);
//    window.requestAnimationFrame(loop);
//  };

//  loop();

//! CAMERAS - Extended
//* Camera
// Abstract base class for cameras. This class should always be inherited when you build a new camera.

// Types of Cameras
// 1. PerspectiveCamera - A perspective camera is a camera that simulates the way the human eye sees the world. It uses a perspective projection to create a 3D effect. It is used to create realistic 3D scenes.
// 2. OrthographicCamera - An orthographic camera is a camera that uses an orthographic projection to create a 2D effect. It is used to create 2D scenes and is often used in games and applications where a 2D view is required.
// 3. CubeCamera - A cube camera is a camera that captures the scene from six different angles and creates a cube map. It is used to create reflections and refractions in the scene.
// 4. ArrayCamera - An array camera is a camera that uses multiple cameras to create a 3D effect. It is used to create complex 3D scenes and is often used in games and applications where a 3D view is required.
// 5. StereoCamera - A stereo camera is a camera that uses two cameras to create a 3D effect. It is used to create realistic 3D scenes and is often used in games and applications where a 3D view is required.

// Perspective Camera
//This camera simulates the way the human eye sees. Objects that are further away appear smaller, creating a sense of depth and realism in 3D scenes.

//  const camera = new THREE.PerspectiveCamera(
//    75, // Field of View
//    sizes.width / sizes.height, // Aspect Ratio
//    0.1, // Near - objects closer than this distance will not be rendered
//    1000 // Far - objects further than this distance will not be rendered
//  );

// Orthographic Camera
// This camera uses orthographic projection, where objects maintain their size regardless of their distance from the camera. It is often used in 2D games, architectural visualizations, and technical drawings where accurate measurements are essential.

// camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
