"use client"
import { Collection } from "../3DObjects/Collection"
import { statisticsSection, statisticText, canvasCollection } from "./GameCollectionStatistics.css"
import { Canvas, useFrame } from "@react-three/fiber"
import { ScrollControls, useScroll, useProgress } from "@react-three/drei"
import { getProject, ISheet, val } from "@theatre/core"
import studio from "@theatre/studio"
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider, PerspectiveCamera as TheatreCamera, useCurrentSheet, editable as e } from "@theatre/r3f"
import collectionState from '../../../public/collection.theatre-project-state.json'
import * as React from 'react'
import { useState, useEffect, useRef } from "react"


if (process.env.NODE_ENV === 'development') {
    studio.initialize()
    studio.extend(extension)
}

export function GameColletionStatistics() {
    const collectionSheet = getProject('collection', { state: collectionState }).sheet('collection_sheet')
    const [gamesAmout, setGamesAmout] = useState(0)

    const { progress } = useProgress()

    useEffect(() => {
        if (progress === 100) {
            const scrollArea = document.querySelector(`.${canvasCollection}`)
            if (scrollArea) {
                const elementDiv = scrollArea.children[0].lastChild as HTMLElement | null
                if (elementDiv) {
                    elementDiv.style.left = '18px'
                }
            }
        }
    }, [progress])

    return (
        <section className={statisticsSection}>
            <Canvas gl={{ preserveDrawingBuffer: true }} className={canvasCollection}>
                <ScrollControls pages={3} maxSpeed={0.15}>
                    <SheetProvider sheet={collectionSheet}>
                        <Scene setGamesAmout={setGamesAmout} />
                    </SheetProvider>
                </ScrollControls>
            </Canvas>
            <h2 className={statisticText}>{gamesAmout} games in the whole collection</h2>
        </section>
    )
}

type SceneProps = {
    setGamesAmout: React.Dispatch<React.SetStateAction<number>>
}

function Scene({ setGamesAmout }: SceneProps) {
    const currentSheet = useCurrentSheet() as ISheet
    const scroll = useScroll()

    useFrame(() => {
        const sequenceLength = val(currentSheet?.sequence.pointer.length)
        if (currentSheet.sequence.position != sequenceLength) {
            currentSheet.sequence.position = scroll.offset * sequenceLength
            setGamesAmout(Math.floor((scroll.offset * sequenceLength) * 20000))
        }
    })

    return (
        <SheetProvider sheet={currentSheet}>
            <TheatreCamera theatreKey="camera" makeDefault fov={60} position={[0, 0, 1.5]} />
            <e.ambientLight intensity={Math.PI / 4} theatreKey="light" />
            <spotLight
                position={[15, 10, 10]}
                angle={1}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
            />
            <Collection position={[0, -1, 0]} rotation={[Math.PI / 3, 3.15, 0]} />
        </SheetProvider>
    )
}