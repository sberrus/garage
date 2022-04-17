import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import * as THREE from "three";

const Three = () => {
  const useThree = () => {
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const scene = new THREE.Scene();

    // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    // const material = new THREE.MeshNormalMaterial();
    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    const loader = new THREE.STLLoader();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);

    // // animation
    // function animation(time: number) {
    //   mesh.rotation.x = time / 2000;
    //   mesh.rotation.y = time / 1000;

    //   renderer.render(scene, camera);
    // }
  };

  return (
    <Container>
      <h1>Three js tls import</h1>
      <Button
        onClick={() => {
          useThree();
        }}
      >
        Llamar geometria
      </Button>
    </Container>
  );
};

export default Three;
