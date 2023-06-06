import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const RotatingLight = () => {
  const lightRef = useRef();

  useFrame(() => {
    lightRef.current.position.x = Math.sin(Date.now() * 0.001) * 2;
    lightRef.current.position.z = Math.cos(Date.now() * 0.001) * 2;
  });

  return (
    <spotLight ref={lightRef} position={[0, 0, 0]} intensity={1} color="white" />
  );
};

export default RotatingLight;
