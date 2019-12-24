import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Model = () => {
  const ref = useRef();

  useFrame(() => (ref.current.rotation.z -= 0.01));
  return (
    <mesh ref={ref} rotation={[90, 90, 0]} scale={[3, 3, 3]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default () => (
  <Canvas>
    <Model />
  </Canvas>
);
