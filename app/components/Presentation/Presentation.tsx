"use client";
import { Vector3 } from 'three'
import { Canvas } from "@react-three/fiber";
import { h2, presentation } from './Presentation.css';
import { PerspectiveCamera } from "@react-three/drei";
import { Nintendinho } from '../3DObjects/Nintendinho';
import { GodWar } from "../3DObjects/GodWar";
import { Halo } from '../3DObjects/Halo';
import { Suspense, useEffect, useRef } from 'react';

export function Presentation() {
    const canvasSize = {
        width: 30,
        height: 50
    }
    const cameraVector = new Vector3(0, 0, 18)
    const aspectRatio = useRef<number>()

    useEffect(() => {
        aspectRatio.current = ((window.innerWidth * canvasSize.width) / 100) / ((window.innerHeight * canvasSize.height) / 100)
    })

    return (
        <section className={presentation}>
            <h2 className={h2}>
                Welcome to GTT, <br />
                here we have games collections <br />
                from consoles in different times
            </h2>
            <Canvas style={{ height: `${canvasSize.height}vh`, width: `${canvasSize.width}vw` }}  >
                <PerspectiveCamera position={cameraVector} makeDefault fov={25} aspect={aspectRatio.current} />
                <ambientLight intensity={Math.PI / 3} />
                <spotLight
                    position={[15, 10, 10]}
                    angle={1}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                <spotLight position={[-10, 0, 5]} angle={1} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, 0, -10]} decay={0} intensity={Math.PI} />
                <Suspense fallback={null}>
                    <Nintendinho scale={1.1} position={[-1, -0.2, 5]} rotation={[0, 5.8, 0]} />
                    <Halo position={[0.9, -2, 2.5]} rotation={[Math.PI / 2, 0, 1.1]} />
                    <GodWar position={[3, -2, -0.5]} rotation={[Math.PI / 2, 0, 1.3]} />
                </Suspense>
            </Canvas>
        </section>
    )
}