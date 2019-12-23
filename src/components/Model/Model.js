import React from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3, Color4, Mesh } from '@babylonjs/core';

const Model = () => (
  <Engine canvasId="sample-canvas">
    <Scene clearColor={new Color4(0, 0, 0, 0)}>
      <targetCamera
        name="camera1"
        position={new Vector3(0, 1, -10)}
        target={Vector3.Zero()}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <box
        name="box"
        height={2}
        width={2}
        depth={2}
        rotation={new Vector3(90, 90, 180)}
        position={new Vector3(0, 1, 0)}
      />
    </Scene>
  </Engine>
);

export default Model;
