
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial, OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { Mesh } from 'three';

interface AvatarSphereProps {
  seed: string;
  size?: number;
  width?: number;
  height?: number;
  autoRotate?: boolean;
}

function SphereWithAvatar({ seed, size = 2, autoRotate = false }: AvatarSphereProps) {
  const meshRef = useRef<Mesh>(null);
  const avatarUrl = `https://avatars.dicebear.com/api/pixel-art/${encodeURIComponent(seed)}.png`;
  const texture = useLoader(TextureLoader, avatarUrl);

  // Animate the sphere rotation
  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4f93ff" />

      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshTransmissionMaterial
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.9}
          chromaticAberration={0.05}
          roughness={0.1}
          distortion={0.3}
          temporalDistortion={0.1}
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
  height = 200,
  autoRotate = false
}) => (
  <Canvas style={{ width, height }}>
    <Suspense fallback={null}>
      <SphereWithAvatar seed={seed} size={size} autoRotate={autoRotate} />
    </Suspense>
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      enableRotate={true}
      autoRotate={autoRotate}
      autoRotateSpeed={4}
    />
  </Canvas>
);
