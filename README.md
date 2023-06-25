# ThreeJS-Particle-System

This project is a simple example of a particle system created using the Three.js library in JavaScript. The particles are randomly initialized in a 3D space and then move with random velocities. The particles are rendered as points. This project also uses GSAP for some functionalities.

## Setup

To set up this project locally:

1. Clone this repository by running `git clone https://github.com/[your_github_username]/ThreeJS-Particle-System.git`
2. Open the `index.html` file in a browser.

## File Structure

The main files of this project are:

- `index.html`: The main HTML file that contains the structure of the website.
- `main.js`: The JavaScript file where the logic of the particle system is implemented. It imports three libraries: Three.js for creating 3D animations, OrbitControls.js for controlling the camera view, and GSAP for advanced JavaScript animations.

## Code Overview

The `main.js` file contains the following sections:

1. Importing Libraries: Import necessary libraries from their respective CDN.
2. Globals: Initialize the global variables and objects such as the scene, camera, and renderer.
3. Initial Setup: Define the `initMain` function to set up the scene, including setting the background, positioning the light and camera, and setting the size of the renderer.
4. Point Cloud Initialization: Define the `pointcloud` function to initialize the particles. This involves setting random initial positions and velocities for each particle.
5. Updating Particle Positions: The `update` function updates the positions and velocities of the particles. It does this by incrementing the position of each particle by its velocity, and changing the velocity by a small random amount.
6. Animation: The `animate` function is responsible for rendering the scene. It also rotates a mesh object for additional visual interest.
7. Window Resize: The `onWindowResize` function adjusts the aspect ratio and size of the renderer when the window is resized.
8. Event Listener: An event listener is set up to call the `onWindowResize` function whenever the window is resized.
9. Function Calls: The `initMain`, `pointcloud`, and `animate` functions are called to set up and start the animation.

## Additional Information

This project has commented out code for drawing lines between the points. If you want to draw lines between particles, you can uncomment the relevant sections in the `pointcloud`, `update`, and `globals` sections. You will need to adjust this code according to your specific needs.

## Contribution

This project is open for contributions. Feel free to fork this repository and submit a pull request if you have improvements or fixes to propose. If you find any bugs or issues, you can also open an issue.

## License

This project is licensed under the MIT License.

## Author

[Zane Pearton](https://www.linkedin.com/in/zane-pearton/)


