import React from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3, Color4 } from '@babylonjs/core';

const Model = () => (
  <Engine canvasId="sample-canvas">
    <Scene clearColor={new Color4(0, 0, 0, 0)}>
      <freeCamera
        name="camera1"
        position={new Vector3(0, 1, -10)}
        target={Vector3.Zero()}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <sphere
        name="sphere1"
        diameter={3}
        segments={64}
        position={new Vector3(0, 1, 0)}
      />
    </Scene>
  </Engine>
);

export default Model;
