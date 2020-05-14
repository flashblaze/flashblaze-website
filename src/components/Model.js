/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
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

const MyObject = ({ meshColor }) => {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 1, 0]} scale={[1.5, 1.5, 1.5]}>
      <coneBufferGeometry attach="geometry" args={[1.5, 2.5]} />
      <meshBasicMaterial
        attach="material"
        color={meshColor}
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
      <ambientLight />
    </mesh>
  );
};

const Model = ({ meshColor }) => {
  if (typeof window === 'undefined') {
    return (
      <Canvas pixelRatio={3}>
        <Controls />
        <MyObject meshColor={meshColor} />
      </Canvas>
    );
  } else {
    return (
      <Canvas pixelRatio={window.devicePixelRatio | 1}>
        <Controls />
        <MyObject meshColor={meshColor} />
      </Canvas>
    );
  }
};

export default Model;
