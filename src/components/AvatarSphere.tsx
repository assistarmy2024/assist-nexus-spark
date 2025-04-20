
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

interface AvatarSphereProps {
  seed: string;
  size?: number;
  width?: number;
  height?: number;
}

function SphereWithAvatar({ seed, size = 2 }: AvatarSphereProps) {
  const avatarUrl = `https://avatars.dicebear.com/api/pixel-art/${encodeURIComponent(seed)}.png`;
  const texture = useLoader(TextureLoader, avatarUrl);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <mesh>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshTransmissionMaterial
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.9}
          envMapIntensity={1}
        />
      </mesh>

      <mesh position={[0, 0, size * 0.01]}>
        <planeGeometry args={[size * 1.4, size * 1.4]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </>
  );
}

export const AvatarSphere: React.FC<AvatarSphereProps> = ({ 
  seed, 
  size, 
  width = 200, 
  height = 200 
}) => (
  <Canvas style={{ width, height }}>
    <Suspense fallback={null}>
      <SphereWithAvatar seed={seed} size={size} />
    </Suspense>
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
  </Canvas>
);
