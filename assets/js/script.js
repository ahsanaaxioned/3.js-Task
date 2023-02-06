console.clear()
const section = document.querySelector(".bar")
let initial = 0;
// let cameraX = 0
// Setting up Scene, Camera & Renderer 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
const light = new THREE.AmbientLight( 0x202020 ); // soft white light
scene.add( light );
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(1, 0, 0);
// directional.position.x = -1
scene.add(directional);
// rendering here
const renderer = new THREE.WebGLRenderer();
// setting render
renderer.setSize( window.innerWidth, 450 );
// append render
section.appendChild( renderer.domElement );

// creating bar to add in scene
const creat=(x)=>{
const geometry  = new THREE.BoxGeometry( 1, 4, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xFF0000 } );
const bar = new THREE.Mesh( geometry, material );
scene.add(bar)
bar.position.set(x,0,0);

bar.rotation.y = Math.PI / 4;
camera.position.z = 10;
// camera.position.x = cameraX;
camera.position.y = 0

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
canvas = section.children[1]
canvas.addEventListener("mouseover",()=>{
	console.log("hi");
// gsap.to(bar.rotation,{duration: 2 ,x:360})
gsap.to(bar.rotation,{duration: 200 ,y:360})
// gsap.to(bar.rotation,{duration: 2 ,z:360})
})
}
creat(initial)

const button = document.createElement("button");
button.className = "btn";
button.innerText = "Next";
section.appendChild(button);
button.addEventListener("click",()=>{
	initial+=3;
	// cameraX+=5;
	creat(initial)
})






