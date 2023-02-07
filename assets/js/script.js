console.clear()
const section = document.querySelector(".bar")
let initial = 0;
// let cameraX = 0
// Setting up Scene, Camera & Renderer 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const light = new THREE.AmbientLight(0x202020); // soft white light
scene.add(light);
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(1, 0, 0);
// directional.position.x = 1
scene.add(directional);
// rendering here
const renderer = new THREE.WebGLRenderer();
// setting render
renderer.setSize(window.innerWidth, 450);
// append render
section.appendChild(renderer.domElement);

// creating bar to add in scene
const creat = (x) => {
	const geometry = new THREE.BoxGeometry(1, 4, 1);
	const material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
	const bar = new THREE.Mesh(geometry, material);
	scene.add(bar)
	bar.position.set(x, 0, 0);

	bar.rotation.y = Math.PI / 4;
	camera.position.z = 10;
	// camera.position.x = cameraX;
	camera.position.y = 0

	const raycaster = new THREE.Raycaster();
	const mouseMove = new THREE.Vector2();

	window.addEventListener("mousemove", (event) => {
		mouseMove.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouseMove.y = - (event.clientY / window.innerHeight) * 2 + 1;
	})
	const timeline = gsap.timeline();

	function animate() {
		requestAnimationFrame(animate);
		raycaster.setFromCamera(mouseMove, camera);
		const result = raycaster.intersectObjects(scene.children);
		if (result.length > 0) {
			for (let obj of result) {
				// console.log(timeline);
				let ybar = obj.object.rotation;
				if (!timeline.isActive()) {
					timeline.to(ybar, { duration: 2, y: "+=6.283185307179586", repeat: -1 })
				}

			}
		} else {
			timeline.clear();
		}

		renderer.render(scene, camera);
	}
	animate();
}

creat(initial)

const button = document.createElement("button");
button.className = "btn";
button.innerText = "Next";
section.appendChild(button);
button.addEventListener("click", () => {
	initial += 3;
	creat(initial);
	button.style.pointerEvents = "none";
	button.style.opacity = 0.6;
})

// function for converting degree to radians start here

// const degrees_to_radians = (degrees) =>
// {
//   var pi = Math.PI;
//   return degrees * (pi/180);
// }

// console.log(degrees_to_radians(360));
// console.log(degrees_to_radians(360));

// function for converting degree to radians end here



