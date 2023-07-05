import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import texturePlanet from "../../assets/images/texture.jpg"

const RotatingPlanet = () => {
  const texture = useLoader(THREE.TextureLoader, texturePlanet);
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={sphereRef} scale={[4, 4, 4]} position={[0, -2.5, -1.1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"gray"} map={texture} />
    </mesh>
  );
};

const SmallPlanet = () => {
  const texture = useLoader(THREE.TextureLoader, texturePlanet);
  const sphereRef = useRef();

  return (
    <mesh ref={sphereRef} scale={[2, 2, 2]} position={[0, 4, 0]}>
      <pointLight position={[0, -2, 0]} />
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={"#82E9FF"} map={texture} />
    </mesh>
  );
};

const HeaderHero = ({ headerTitle }) => {
  return (
    <div className="relative h-72 overflow-hidden">
      <div className="bg-canvas-bg bg-cover bg-no-repeat h-screen absolute inset-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <pointLight position={[0, 2, 0]} color={"#82E9FF"} />
          <pointLight position={[0, 2.3, 0]} />
          <Suspense fallback={null}>
            <SmallPlanet />
            <RotatingPlanet />
          </Suspense>
        </Canvas>
      </div>

  
    </div>
  );
}

export default HeaderHero;
