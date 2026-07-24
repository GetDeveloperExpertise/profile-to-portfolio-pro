import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Torus,
  MeshDistortMaterial,
  Environment,
  Stars,
  Sphere,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.12;
      ref.current.rotation.y += dt * 0.18;
    }
  });
  return (
    <Icosahedron ref={ref} args={[1.55, 4]}>
      <MeshDistortMaterial
        color="#a78bfa"
        emissive="#4ade80"
        emissiveIntensity={0.4}
        distort={0.5}
        speed={1.4}
        roughness={0.05}
        metalness={0.95}
      />
    </Icosahedron>
  );
}

function InnerSphere() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y -= dt * 0.3;
  });
  return (
    <Sphere ref={ref} args={[0.85, 64, 64]}>
      <meshStandardMaterial
        color="#4ade80"
        emissive="#4ade80"
        emissiveIntensity={0.9}
        roughness={0.3}
        metalness={0.6}
      />
    </Sphere>
  );
}

function Rings() {
  const g = useRef<Group>(null);
  useFrame((_, dt) => {
    if (g.current) {
      g.current.rotation.x += dt * 0.08;
      g.current.rotation.z += dt * 0.04;
    }
  });
  return (
    <group ref={g}>
      <Torus args={[2.6, 0.018, 16, 160]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.6} />
      </Torus>
      <Torus args={[3.1, 0.012, 16, 160]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={1.4} />
      </Torus>
      <Torus args={[3.6, 0.009, 16, 160]} rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
      </Torus>
      <Torus args={[4.1, 0.006, 16, 160]} rotation={[Math.PI / 2.8, -Math.PI / 5, 0]}>
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.7} />
      </Torus>
    </group>
  );
}

function Nodes() {
  const positions: [number, number, number][] = [
    [2.8, 1.5, 0.6], [-2.6, -1.3, 0.9], [1.9, -2.0, -0.7],
    [-3.0, 1.7, -0.5], [0.2, 2.8, 1.0], [-0.4, -2.9, -0.9],
    [3.3, -0.4, 0.2], [-3.4, 0.2, 0.6], [1.2, 2.4, -1.2],
    [-1.8, -2.2, 1.1],
  ];
  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={1.4 + i * 0.15} rotationIntensity={0.7} floatIntensity={1.4}>
          <mesh position={p}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#a78bfa" : "#22d3ee"}
              emissive={i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#a78bfa" : "#22d3ee"}
              emissiveIntensity={2}
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
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#a78bfa" />
        <pointLight position={[-5, -3, -3]} intensity={1.1} color="#4ade80" />
        <pointLight position={[0, 5, -5]} intensity={0.6} color="#22d3ee" />
        <Stars radius={60} depth={40} count={3000} factor={4} saturation={0} fade speed={0.6} />
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
          <Core />
          <InnerSphere />
        </Float>
        <Rings />
        <Nodes />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
