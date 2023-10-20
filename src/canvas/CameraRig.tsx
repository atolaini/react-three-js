import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

interface CameraRigProps {
  children: React.ReactNode;
}

const CameraRig = ({ children }: CameraRigProps) => {
  const group = useRef<THREE.Group>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.matchMedia('(min-width: 1260px)').matches;
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    //set inital postion of the model
    let targetPostion: [number, number, number] = [-0.4, 0, 2];

    if (snap.intro) {
      if (isBreakpoint) targetPostion = [0, 0, 2];
      if (isMobile) targetPostion = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPostion = [0, 0, 2.5];
      else targetPostion = [0, 0, 2];
    }

    //set camera postion
    easing.damp3(state.camera.position, targetPostion, 0.25, delta);

    //Set model rotation
    group.current &&
      easing.dampE(
        group.current?.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
