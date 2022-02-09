import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Footer from "./Footer";
import More from "./More";
import "../styles/main.css";
import "../styles/font-awesome.min.css";
import * as THREE from "three";
import harry from "../../images/profile.jpg";
import { Color } from "three";

export default function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    let geometry, color1, color2;

    color2 = new Color(0xffffff);
    color1 = new Color(0x015353);

    const curr = mountRef.current;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.setZ(30);

    // let w = 3,
    //   h = 1;

    geometry = new THREE.TorusGeometry(25, 3, 16, 100);

    var material = new THREE.MeshStandardMaterial({
      color: color1,
      wireframe: false,
    });

    var torus = new THREE.Mesh(geometry, material);
    torus.position.set(-1, 1, 0);
    scene.add(torus);

    var light = new THREE.AmbientLight(0xffffff);
    var lightPoint = new THREE.PointLight(0xffffff);

    scene.add(lightPoint, light);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() + 3) * 15 * (Math.random() - 0.5);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: color2,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    const profileTexture = new THREE.TextureLoader().load(
      "../../images/profile.jpg"
    );

    const profileBox = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: profileTexture })
    );

    profileBox.position.y += 13;
    profileBox.position.x -= 1;

    scene.add(profileBox);

    document.addEventListener("mousemove", animateParticles);
    document.addEventListener("mousewheel", zoomCamera, false);

    let mouseX = 0;
    let mouseY = 0;

    function animateParticles(event) {
      mouseY = event.clientY;
      mouseX = event.clientX;
    }
    function zoomCamera(event) {
      camera.position.z += event.deltaY / 800;
    }

    var animate = function () {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.0005;
      torus.rotation.y += 0.0005;
      torus.rotation.z += 0.0005;

      profileBox.rotation.x += 0.001;
      profileBox.rotation.y += 0.001;
      profileBox.rotation.z += 0.001;

      if (mouseX > 0) {
        camera.position.x = -mouseX * 0.003;
        camera.position.y = -mouseY * 0.003;
      }

      particlesMesh.rotation.y += -0.0005;
      // particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.z += -0.0005;

      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    animate();

    return () => curr.removeChild(renderer.domElement);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <div className="App">
      <div id="c" ref={mountRef}></div>
      <Welcome />
      <About />
      <Resume />
      <More />
      <Footer />
    </div>
  );
}
