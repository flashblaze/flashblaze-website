import React, { useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const orbitRef = useRef();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
      enableZoom={false}
      enablePan={false}
    />
  );
};

const MyObject = () => {
  // const ref = useRef();

  // useFrame(() => (ref.current.rotation.y += 0.008));
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 1.5, 0]}>
      <coneBufferGeometry attach="geometry" args={[1.5, 2.5]} />
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
        <Controls />
        <MyObject />
      </Canvas>
    );
  } else {
    return (
      <Canvas pixelRatio={window.devicePixelRatio | 1}>
        <Controls />
        <MyObject />
      </Canvas>
    );
  }
};

export default Model;
