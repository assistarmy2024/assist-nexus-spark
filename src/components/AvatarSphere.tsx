
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

interface AvatarSphereProps {
  seed: string;
  size?: number;
  autoRotate?: boolean;
}

function SphereWithAvatar({ seed, size = 2 }: AvatarSphereProps) {
  const url = `https://avatars.dicebear.com/api/pixel-art/${encodeURIComponent(seed)}.png`;
  const avatarTex = useLoader(TextureLoader, url);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshTransmissionMaterial
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.9}
          envMapIntensity={1}
        />
      </mesh>

      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[size * 1.4, size * 1.4]} />
        <meshBasicMaterial map={avatarTex} transparent />
      </mesh>
    </>
  );
}

export const AvatarSphere: React.FC<AvatarSphereProps> = ({ seed, size, autoRotate = true }) => (
  <Canvas style={{ width: "100%", height: "100%" }}>
    <Suspense fallback={null}>
      <SphereWithAvatar seed={seed} size={size} />
    </Suspense>
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      autoRotate={autoRotate}
      autoRotateSpeed={4}
    />
  </Canvas>
);

