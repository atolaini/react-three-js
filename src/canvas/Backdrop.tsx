import { useRef } from 'react';
import * as THREE from 'three';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef(null);
  const rotation = new THREE.Euler(Math.PI / 2, 0, 0);
  return (
    <AccumulativeShadows
      position={[0.77, 0, -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.5}
      scale={7}
      rotation={rotation}
      opacity={0.44}
    >
      <RandomizedLight
        amount={4}
        radius={7}
        intensity={0.9}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.44}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
