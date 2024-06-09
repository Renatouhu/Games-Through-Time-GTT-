import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import core from '@theatre/core'
import { editable as e } from '@theatre/r3f'

type GLTFResult = GLTF & {
    nodes: {
        Object: THREE.Mesh
    },
    materials: {
        ['Cover']: THREE.MeshPhysicalMaterial
    }
}

export function Collection(props: JSX.IntrinsicElements['mesh']) {
    const { nodes, materials } = useGLTF("/3DObjects/Collection/collection.gltf") as GLTFResult
    return (
        <e.mesh
            {...props}
            theatreKey='Cube'
            castShadow
            receiveShadow
            geometry={nodes.Object.geometry}
            material={materials['Cover']}
        />
    )
}

useGLTF.preload("/3DObjects/Collection/collection.gltf")