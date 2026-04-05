import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import './Background.css';

const FloatingClouds = () => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={ref}>
            <Clouds material={THREE.MeshBasicMaterial}>
                <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#ffffff" fade={10} />
                <Cloud seed={1} scale={2} volume={5} color="#f0f4ff" fade={10} position={[0, -2, 0]} />
                <Cloud seed={2} scale={1.5} volume={4} color="#e8f2ff" fade={10} position={[3, 1, 0]} />
            </Clouds>
        </group>
    );
}

const ThreeClouds = () => {
    return (
        <div className="three-clouds-container">
            {/* Dynamic gradient canvas */}
            <div className="gradient-canvas">
                <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                    <ambientLight intensity={1.2} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#fff" />
                    <pointLight position={[-10, -5, 5]} intensity={0.8} color="#818cf8" />
                    <FloatingClouds />
                </Canvas>
            </div>

            {/* Multiple glass layers for depth */}
            <div className="glass-layer glass-layer-1"></div>
            <div className="glass-layer glass-layer-2"></div>
            <div className="glass-overlay"></div>

            {/* Animated gradient orbs */}
            <div className="floating-orbs">
                <div className="orb floating-1"></div>
                <div className="orb floating-2"></div>
                <div className="orb floating-3"></div>
                <div className="orb floating-4"></div>
            </div>
        </div>
    );
};

export default ThreeClouds;
