import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import './App.css';


function scroll_canvas(scrollY){
  const content = document.querySelector(".content-wrapper");
  content.style.top =`${scrollY}px`;
}

const CurvedText = ({ text, size = 1, color = 0x00ff00, curveIntensity = -0.04, position = { x: 0, y: 0, z: 0 }, scene, camera, renderer }) => {
  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Load the font
    const fontLoader = new FontLoader();
    fontLoader.load(`${process.env.PUBLIC_URL}/fonts/VT323.json`, (font) => {
      // Create text geometry
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        height: 0.5,
        curveSegments: 20,
      });

      // Bend text along a curve
      const positionAttr = textGeometry.attributes.position;
      const numVertices = positionAttr.count;

      // Calculate the center of the text's bounding box
      textGeometry.computeBoundingBox();
      const boundingBox = textGeometry.boundingBox;
      const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;

      for (let i = 0; i < numVertices; i++) {
        const x = positionAttr.getX(i);

        // Parabolic curve formula: Adjust 'a' to control curvature intensity
        const z = curveIntensity * Math.pow(x - centerX, 2);
        positionAttr.setZ(i, z);
      }

      // Create material and mesh
      const material = new THREE.MeshStandardMaterial({ color: color });
      const textMesh = new THREE.Mesh(textGeometry, material);

      // Set custom position
      textMesh.position.set(position.x, position.y, position.z);
      scene.add(textMesh);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });
  }, [text, size, color, curveIntensity, position, scene, camera, renderer]);

  return null; // No need to render anything here, everything happens in the scene
};



const App  = () => {
  const mountRef = useRef(null);
  const [textContent, setTextContent] = useState([
    { text: "Name : Amos Goh En Jie", size: 2, color: 0x00ff00, curveIntensity: -0.001 },
    { text: "part 5 of the text or whatever", size: 1, color: 0x00ff00, curveIntensity: -0.01 },
    { text: "part 4 of the text or whatever", size: 1, color: 0x00ff00, curveIntensity: -0.02 },
    { text: "part 3 of the text or whatever", size: 1, color: 0x00ff00, curveIntensity: -0.03 },
    { text: "part 2 of the text or whatever", size: 1, color: 0x00ff00, curveIntensity: -0.04 },
    { text: "subtitle and it's contents", size: 1, color: 0x00ff00, curveIntensity: -0.05 },
    { text: "Name : Amos Goh En Jie", size: 2, color: 0x00ff00, curveIntensity: -0.04 },
  ]);
  const [positions, setPositions] = useState([]);

  // Create scene, camera, and renderer once
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  // Ensure the mountRef element exists before appending the renderer
  useEffect(() => {
    if (mountRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
    }

    // Cleanup renderer when the component is unmounted
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [renderer]);

  // Set camera position
  camera.position.set(0, 0, 20);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  // Calculate Y offset to stack text vertically
  const calculateYOffset = (index, size) => {
    const spaceBetween = 2; // Space between texts (can be adjusted)
    const totalHeight = size + spaceBetween;
    return -(index * totalHeight); // Shift each text down by its height
  };

  // Calculate X offset to center the text
  const calculatePosition = (index, size, text, font) => {
    // Create bounding box to calculate text width
    const boundingBox = new THREE.Box3(); // Bounding box for text width

    const textGeometry = new TextGeometry(text, {
      font: font,
      size: size,
      height: 0.5,
      curveSegments: 20,
    });

    textGeometry.computeBoundingBox();
    boundingBox.copy(textGeometry.boundingBox);

    // Calculate offset for center
    const offsetX = -(boundingBox.max.x + boundingBox.min.x) / 2;
    const offsetY = calculateYOffset(index, size);

    return { x: offsetX, y: offsetY, z: 0 };
  };

  // When font is loaded, calculate all positions
  useEffect(() => {
    const fontLoader = new FontLoader();
    fontLoader.load(`${process.env.PUBLIC_URL}/fonts/VT323.json`, (font) => {
      const newPositions = textContent.map((item, index) => {
        return calculatePosition(index, item.size, item.text, font);
      });
      setPositions(newPositions);
    });
  }, [textContent]);

  // Scroll handling to simulate vertical movement
  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll")
      const scrollY = window.scrollY;
      scroll_canvas(scrollY);
      camera.position.y = -(scrollY/10); // Adjust the divisor to control scroll speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [camera]);

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  return (
    <div className="App">
      <div className="content-wrapper scanlines" ref={mountRef}>
        {positions.map((position, index) => {
          const item = textContent[index];
          return (
            <CurvedText
              key={index}
              text={item.text}
              size={item.size}
              color={item.color}
              curveIntensity={item.curveIntensity}
              position={position}
              scene={scene}
              camera={camera}
              renderer={renderer}
            />
          );
        })}
      </div>
    </div>
  );
  
};

export default App;