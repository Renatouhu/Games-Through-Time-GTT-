import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Object: THREE.Mesh
    },
    materials: {
        ['Cover']: THREE.MeshPhysicalMaterial
    }
}

export function GodWar(props: JSX.IntrinsicElements['mesh']) {
    const { nodes, materials } = useGLTF("/3DObjects/GodOfWarObject/GodWar.gltf") as GLTFResult

    return (
        <mesh
            {...props}
            castShadow
            receiveShadow
            geometry={nodes.Object.geometry}
            material={materials['Cover']}
        ></mesh>
    )
}

useGLTF.preload("/3DObjects/GodOfWarObject/GodWar.gltf")