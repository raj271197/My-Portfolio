import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';

const FloatingClouds = () => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05; // Slow rotation
        }
    });

    return (
        <group ref={ref}>
            <Clouds material={THREE.MeshBasicMaterial}>
                <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#e0e0e0" fade={10} />
                <Cloud seed={1} scale={2} volume={5} color="#d4e4f7" fade={10} position={[0, -2, 0]} />
            </Clouds>
        </group>
    );
}

const ThreeClouds = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)', // Softer sky gradient
            pointerEvents: 'none'
        }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
                <FloatingClouds />
            </Canvas>

            {/* Glass Effect Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(30px)', /* Distinct Glass Effect */
                backgroundColor: 'rgba(255, 255, 255, 0.1)' /* Subtle tint */
            }}></div>
        </div>
    );
};

export default ThreeClouds;
