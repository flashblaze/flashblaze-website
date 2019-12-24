import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const MyObject = () => {
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

const Model = () => {
  if (typeof window === 'undefined') {
    return (
      <Canvas pixelRatio={3}>
        <MyObject />
      </Canvas>
    );
  } else {
    return (
      <Canvas pixelRatio={window.devicePixelRatio | 1}>
        <MyObject />
      </Canvas>
    );
  }
};

export default Model;
