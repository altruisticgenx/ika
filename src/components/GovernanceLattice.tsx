"use client";
import { Canvas, extend, Object3DNode } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

// Extend Three.js Line for R3F
extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: Object3DNode<THREE.Line, typeof THREE.Line>;
  }
}

function GovernanceNode({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial 
          color="#2dd4bf" 
          wireframe 
          transparent 
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array([...start, ...end]);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [start, end]);

  return (
    <line_ geometry={geometry}>
      <lineBasicMaterial color="#2dd4bf" transparent opacity={0.15} />
    </line_>
  );
}

function LatticeNetwork() {
  const nodes: [number, number, number][] = [
    [-2, 1, -1],
    [2, -1, -2],
    [0, 2, -1.5],
    [-1.5, -1.5, -1],
    [1.5, 1.5, -2],
    [-0.5, 0, -1],
    [1, -0.5, -1.5],
  ];

  const connections: Array<[number, number]> = [
    [0, 2], [0, 3], [0, 5],
    [1, 3], [1, 6],
    [2, 4], [2, 5],
    [3, 5], [3, 6],
    [4, 6], [5, 6],
  ];

  return (
    <group>
      {nodes.map((pos, i) => (
        <GovernanceNode key={i} position={pos} />
      ))}
      {connections.map(([a, b], i) => (
        <ConnectionLine
          key={i}
          start={nodes[a]}
          end={nodes[b]}
        />
      ))}
    </group>
  );
}

export const GovernanceLattice = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <LatticeNetwork />
      </Canvas>
    </div>
  );
};

export default GovernanceLattice;
