import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Model = () => {
  const ref = useRef();

  useFrame(() => (ref.current.rotation.y += 0.008));
  return (
    <mesh ref={ref} rotation={[0, 0, 45]}>
      <coneBufferGeometry attach="geometry" args={[1, 3]} />
      <meshBasicMaterial
        attach="material"
        color="#3a3a3a"
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
      <ambientLight />
    </mesh>
  );
};

export default () => (
  <Canvas pixelRatio={9}>
    <Model />
  </Canvas>
);
