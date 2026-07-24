import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import ParticleBrain from "./components/ParticleBrain";

function Brain() {
  const { scene } = useGLTF("/brain.glb");

  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 225], fov: 45 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Suspense fallback={null}>
        <ParticleBrain />
      </Suspense>

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        />
    </Canvas>
  );
}
