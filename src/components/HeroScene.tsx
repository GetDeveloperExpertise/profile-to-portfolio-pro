import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, MeshDistortMaterial, Environment, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.15;
      ref.current.rotation.y += dt * 0.2;
    }
  });
  return (
    <Icosahedron ref={ref} args={[1.4, 2]}>
      <MeshDistortMaterial
        color="#22d3ee"
        emissive="#7c3aed"
        emissiveIntensity={0.35}
        distort={0.42}
        speed={1.6}
        roughness={0.15}
        metalness={0.85}
      />
    </Icosahedron>
  );
}

function Rings() {
  const g = useRef<Group>(null);
  useFrame((_, dt) => {
    if (g.current) {
      g.current.rotation.x += dt * 0.1;
      g.current.rotation.z += dt * 0.05;
    }
  });
  return (
    <group ref={g}>
      <Torus args={[2.4, 0.015, 16, 128]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.2} />
      </Torus>
      <Torus args={[2.9, 0.01, 16, 128]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.2} />
      </Torus>
      <Torus args={[3.4, 0.008, 16, 128]} rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
      </Torus>
    </group>
  );
}

function Nodes() {
  const positions: [number, number, number][] = [
    [2.6, 1.4, 0.5], [-2.4, -1.2, 0.8], [1.8, -1.9, -0.6],
    [-2.8, 1.6, -0.4], [0.2, 2.6, 0.9], [-0.4, -2.7, -0.8],
    [3.1, -0.4, 0.2], [-3.2, 0.2, 0.6],
  ];
  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={1.4 + i * 0.15} rotationIntensity={0.6} floatIntensity={1.2}>
          <mesh position={p}>
            <octahedronGeometry args={[0.14, 0]} />
            <meshStandardMaterial
              color={i % 2 ? "#a855f7" : "#22d3ee"}
              emissive={i % 2 ? "#a855f7" : "#22d3ee"}
              emissiveIntensity={1.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, -3]} intensity={1} color="#a855f7" />
        <Stars radius={40} depth={30} count={2000} factor={3} saturation={0} fade speed={0.5} />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <Core />
        </Float>
        <Rings />
        <Nodes />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
