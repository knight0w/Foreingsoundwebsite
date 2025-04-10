document.addEventListener('DOMContentLoaded', function() {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Create a geometry and material for the sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true }); // Dark grey color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Load font and create text
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
        const textGeometry = new THREE.TextGeometry('FOREIGNSOUND', {
            font: font,
            size: 0.25, // 2x smaller
            height: 0.1,
            curveSegments: 12,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-1.25, -1.5, 0); // Positioned slightly higher
        scene.add(textMesh);
    });

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}); 