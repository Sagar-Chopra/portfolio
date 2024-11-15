"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "./index.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import Link from "next/link";
import Credits from "@/components/credits/credits";

const Page = ({ params }) => {
  console.log("router", params);

  const canvasRef = useRef(null);
  const soundRef = useRef();
  const backSoundRef = useRef();
  const [musicLoader, setMusicLoader] = useState();
  const [pauseLoader, setPauseLoader] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();

    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });

    const color1 = new THREE.Color("rgb(0, 28, 41)");

    scene.background = color1;

    // Load custom 3D model
    const loader = new GLTFLoader();
    loader.load(
      "models/galaxy.glb",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0.1, 0.1, 0.1);
        model.scale.set(30, 30, 30);
        // tl.fromTo(model.scale, {z: 0, x: 0, y: 0}, {z: 30, x: 30, y: 30})
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // add starts
    function addStart() {
      const geometry = new THREE.SphereGeometry(0.25, 5, 5);
      const material = new THREE.MeshStandardMaterial({ color: "#3d5257" });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(60));
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(150).fill().forEach(addStart);

    function addStart() {
      const geometry = new THREE.SphereGeometry(0.25, 10, 10);
      const material = new THREE.MeshStandardMaterial({ color: "#3d5257" });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(50).fill().forEach(addStart);

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
    camera.position.z = 20;
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
    controls.autoRotateSpeed = 0.5;

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
        setPauseLoader(false)
        backSoundRef.current.play();
      }
    };

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
    window.addEventListener("resize", () => {
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
      window.removeEventListener("mousedown", playGlobeSonnd);
      window.removeEventListener("mouseup", pauseGlobeSound);
      window.removeEventListener("click", backGroundMusic);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.dispose();
    };
  }, []);

  const stopBackGroundMusic = (e) => {
    e.stopPropagation()
    setPauseLoader(true)
    setMusicLoader(false)
    if (backSoundRef.current) {
      backSoundRef.current.pause();
    }
  }

  const handleOpen = (e) => {
    e.stopPropagation()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <canvas ref={canvasRef} className="webgl"></canvas>
      <div className="overlay"></div>
      <audio controls preload="true" ref={soundRef} className="audio">
        <source src="sound/globeSound.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <audio controls preload="true" ref={backSoundRef} className="audio">
        <source src="sound/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div className="soundIconSlug">
        {musicLoader && (
          <div className="loader" onClick={(e) => stopBackGroundMusic(e)}></div>
        )}
        {pauseLoader && <div className="paused"></div>}
        <div className={`menu-button ${showMobileMenu ? "active" : ""}`}onClick={(e) => {stopBackGroundMusic(e); setShowMobileMenu(!showMobileMenu)}}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="contentDiv">
        {params.slug === "about" && <About params={params} />}
        {params.slug === "work" && <Work params={params} />} 
        {params.slug === "credit" && <Credits params={params} />} 
      </div>
      <div className="text-white absolute z-[2] header">
        <div className="headerMenu">
          <ul className="menuItems">
            <div className="uppercase header-options" onClick={(e) => e.stopPropagation()}><Link href="/dashboard">Home</Link></div>
            <div className="uppercase header-options" onClick={(e) => e.stopPropagation()}><Link href="/work">| Work</Link></div>
            <div className="uppercase header-options" onClick={(e) => handleOpen(e)}>| Resume</div>
            <div className="uppercase header-options" onClick={(e) => e.stopPropagation()}><Link href="/about">| about</Link></div>
            {/* <div className="uppercase header-options" onClick={(e) => e.stopPropagation()}><Link href="/work">| contact</Link></div> */}
            <div className="uppercase header-options" onClick={(e) => e.stopPropagation()}><Link href="/credit">| credit</Link></div>
          </ul>
        </div>
      </div>
        <div className={`menu ${showMobileMenu ? "show" : ""}`}>
          <ul className="menu-items">
            <li className="menu-item" onClick={(e) => e.stopPropagation()}><Link href="/dashboard">Home</Link></li> 
            <li className="menu-item" onClick={(e) => e.stopPropagation()}><Link href="/work">Work</Link></li> 
            <li className="menu-item" onClick={(e) => e.stopPropagation()}><Link href="/about">about</Link></li> 
            <li className="menu-item" onClick={(e) => e.stopPropagation()}><Link href="/credit">credit</Link></li> 
          </ul>
        </div>
      {open && (
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn-slug" onClick={handleClose}>
            &times;
          </button>
          <iframe
            src="/pdf/Sagar-Frontend.pdf"
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
