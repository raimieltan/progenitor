import React, { useRef } from 'react';
import { Canvas , useFrame, useLoader} from 'react-three-fiber';
import * as THREE from 'three';
import planetTexture from "../assets/images/8k_mercury.jpg"

const RotatingSphere = () => {
    const texture = useLoader(THREE.TextureLoader, planetTexture);

      const sphereRef = useRef();

      useFrame(() => {
        // sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.001;
      });

    return (
        <>

            {/* <ambientLight intensity={0.5} /> */}
           
            <mesh ref={sphereRef} scale={[2.5,2.5, 2.5]} position={[0,0.5,0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color={"gray"} map={texture} />
                {/* <meshPhysicalMaterial
                    // metalness={0.5}
                    roughness={0.2}
                    // clearcoat={1}
                    color={"red"}
                    // clearcoatRoughness={0.1}
                    map={texture}

                /> */}
            </mesh>
        </>



    );
};

export default RotatingSphere;
