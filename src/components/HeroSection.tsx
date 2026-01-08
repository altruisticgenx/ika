"use client";
import { Canvas, extend, Object3DNode } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Extend Three. js Line for R3F
extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: Object3DNode<THREE.Line, typeof THREE.Line>;
  }
}

// Utility to check WebGL availability
function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  
  try {
    const canvas = document.createElement("canvas");
    return ! !(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch (e) {
    return false;
  }
}

function GovernanceNode({ position }:  { position: [number, number, number] }) {
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

// Fallback component for when WebGL is not available
function FallbackLattice() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
        <defs>
          <pattern id="lattice-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="40" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3" />
            <line x1="40" y1="0" x2="0" y2="40" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#lattice-pattern)" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="#2dd4bf" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}

export const GovernanceLattice = () => {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    // Check WebGL availability on mount (client-side only)
    setWebGLSupported(isWebGLAvailable());
  }, []);

  // Show nothing during SSR or initial check
  if (webGLSupported === null) {
    return null;
  }

  // Show fallback if WebGL is not supported or if there was a render error
  if (!webGLSupported || renderError) {
    return <FallbackLattice />;
  }

  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        onCreated={(state) => {
          // Defensive check:  if renderer creation somehow succeeded but context is invalid
          try {
            const gl = state.gl. getContext();
            if (!gl) {
              console.warn("WebGL context is null, falling back to static display");
              setRenderError(true);
            }
          } catch (error) {
            console.error("Error during WebGL context validation:", error);
            setRenderError(true);
          }
        }}
        onError={(error) => {
          // Catch any errors during Canvas creation/rendering
          console.error("Three.js Canvas error:", error);
          setRenderError(true);
        }}
      >
        <ambientLight intensity={0.5} />
        <LatticeNetwork />
      </Canvas>
    </div>
  );
};

export default GovernanceLattice;
