"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import * as THREE from 'three';
import gsap from 'gsap';
import './index.css';
import { useRouter } from 'next/navigation'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Page = () => {
  const router = useRouter();
  const canvasRef = useRef(null);
  const modelRef = useRef(null); // Reference to the 3D model
  const soundRef = useRef();
  const backSoundRef = useRef();
  const [musicLoader, setMusicLoader] = useState();
  const [open, setOpen] = useState(false);
  const mouseMoveTimeout = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const tl = gsap.timeline({
        defaults: {duration: 1}
    })

    const color1 = new THREE.Color("rgb(0, 28, 41)");

    scene.background = color1;

    // Load custom 3D model
    const loader = new GLTFLoader();
    loader.load(
      'models/oceanEarth.glb',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model
        scene.add(model);
        model.position.set(0.1, 0.1, 0.1);
        tl.fromTo(model.scale, {z: 0, x: 0, y: 0}, {z: 25, x: 25, y: 25})
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // add starts
    function addStart(){
    const geometry = new THREE.SphereGeometry(0.25, 5, 5);
    const material = new THREE.MeshStandardMaterial({color: '#157fc5'})
    const star = new THREE.Mesh(geometry,material);
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(60));
    star.position.set(x,y,z)
    scene.add(star);
    }

    Array(150).fill().forEach(addStart)

    function addStart(){
    const geometry = new THREE.SphereGeometry(0.25, 10, 10);
    const material = new THREE.MeshStandardMaterial({color: "#157fc5"})
    const star = new THREE.Mesh(geometry,material);
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z)
    scene.add(star);
    }

    Array(50).fill().forEach(addStart)


    // Set up sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Set up lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(light, ambientLight);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 100;
    scene.add(camera);

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Mouse movement handling
    const mouse = new THREE.Vector2();
    const targetPosition = new THREE.Vector3();

    const onMouseMove = (event) => {
      console.log("move")
      // Convert mouse coordinates to normalized device coordinates (NDC)
      mouse.x = (event.clientX / sizes.width) * 2 - 1;
      mouse.y = -(event.clientY / sizes.height) * 2 + 1;

      // Map the mouse position to the 3D space
      targetPosition.set(mouse.x * 10, mouse.y * 10, 0);

      if (modelRef.current) {
        // Smooth transition using GSAP
        gsap.to(modelRef.current.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          duration: 1,
        });
      }

      // Clear previous timeout and set a new one
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
      mouseMoveTimeout.current = setTimeout(() => {
        // Move model to center if no mouse movement
        if (modelRef.current) {
          gsap.to(modelRef.current.position, {
            x: 0,
            y: 0,
            duration: 1,
          });
        }
      }, 1000); // 1 second delay before moving back to center
    };

    window.addEventListener('mousemove', onMouseMove);


    // Add event listener for double click
    const playGlobeSonnd = () => {
        if (soundRef.current) {
          soundRef.current.currentTime = 0;
          soundRef.current.play();
        }
    };

    const pauseGlobeSound = () => {
        if (soundRef.current) {
          soundRef.current.pause();
        }
    };
      
    window.addEventListener("mousedown", playGlobeSonnd);
    window.addEventListener("mouseup", pauseGlobeSound);

    const backGroundMusic = () => {
      if (backSoundRef.current) {
        setMusicLoader(true);
        backSoundRef.current.play();
      }
    }

    window.addEventListener("click", backGroundMusic);

    // Pause background music on tab switch
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (backSoundRef.current && !backSoundRef.current.paused) {
          // Pause the music only if it is playing
          backSoundRef.current.pause();
        }
      } else {
        if (backSoundRef.current && backSoundRef.current.paused) {
          // Play the music only if it was previously paused
          backSoundRef.current.play();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Clean up function
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener("mousedown", playGlobeSonnd);
      window.removeEventListener("mouseup", pauseGlobeSound);
      window.removeEventListener("click", backGroundMusic);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.dispose();
    };
  }, []);

  const stopBackGroundMusic = (e) => {
    e.stopPropagation()
    if (backSoundRef.current) {
      backSoundRef.current.pause();
    }
  }

  const handleOpen = (e) => {
    e.stopPropagation()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const handleDownload = (e) => {
    e.stopPropagation()
    const link = document.createElement("a");
    link.href = "/pdf/Sagar-Resume.pdf"; // Path to your PDF file
    link.download = "Sagar-Resume"; // Name the file when downloading
    link.click();
  };

  const handleModelAnimation = (path) => {
    if (modelRef.current) {
      // Animation on model when link is clicked
      gsap.to(modelRef.current.scale, {
        x: 30,
        y: 30,
        z: 30,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Navigate to the new page after animation completes
          router.push(path);
        },
      });
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} className="webgl" ></canvas>
      <div className='overlay'></div>
      <audio controls preload="true" ref={soundRef} className="audio" >
        <source src="sound/globeSound.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <audio controls preload="true" ref={backSoundRef} className="audio" >
        <source src="sound/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div className='soundIcon'>
        {musicLoader &&
        <div className="loader" onClick={(e) => stopBackGroundMusic(e)}></div>}
      </div>
      <div className='top-bar bar'></div>
      <div className='text-white absolute z-[2] tittle'>
        <div className='uppercase name'>SAGAR CHOPRA</div>
        <div className='uppercase key'>creative | learner | developer</div>
      </div>
      <div className='bottom-bar bar'></div>
      <div className='text-white absolute z-[2] footer'>
        <div className='uppercase footer-options' onClick={(e) => {e.stopPropagation(); handleModelAnimation('/work'); }}><Link href="/work">Work</Link></div>
        <div className='uppercase footer-options' onClick={(e) => handleOpen(e)}>Resume</div>
        <div className='uppercase footer-options' onClick={(e) => e.stopPropagation()}><Link href="/about">About</Link></div>
        <div className='uppercase footer-options' >contact</div>
        <div className='uppercase footer-options' onClick={(e) => e.stopPropagation()}><Link href="/credit">credit</Link></div>
      </div>
      {open && (
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          <iframe
            src="/pdf/Sagar-Resume.pdf"
            width="100%"
            height="100%"
            title="PDF Viewer"
          />
        </div>
      </div>
    )}
    </div> 
  );
};

export default Page;
