import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bolt000_Material006_0: THREE.Mesh
    Bolt001_Material006_0: THREE.Mesh
    Bolt002_Material006_0: THREE.Mesh
    Bolt003_Material006_0: THREE.Mesh
    Bolt004_Material006_0: THREE.Mesh
    cartucho_Material_cart_0: THREE.Mesh
    detalhes_Material_0: THREE.Mesh
    detalhes001_Material_0: THREE.Mesh
    detalhes002_Material_0: THREE.Mesh
    detalhes003_Material_0: THREE.Mesh
    detalhes004_Material_0: THREE.Mesh
    detalhes005_Material_0: THREE.Mesh
    detalhes006_Material_0: THREE.Mesh
    detalhes007_Material_0: THREE.Mesh
    detalhes008_Material_0: THREE.Mesh
    detalhes009_Material_0: THREE.Mesh
    detalhes010_Material_0: THREE.Mesh
    detalhes011_Material_0: THREE.Mesh
    detalhes012_Material_0: THREE.Mesh
    detalhes013_Material_0: THREE.Mesh
    detalhes014_Material_0: THREE.Mesh
    detalhes015_Material_0: THREE.Mesh
    detalhes016_Material_0: THREE.Mesh
    detalhes017_Material_0: THREE.Mesh
    detalhes018_Material_0: THREE.Mesh
    detalhes019_Material_0: THREE.Mesh
    detalhes020_Material_0: THREE.Mesh
    detalhes021_Material_0: THREE.Mesh
    detalhes022_Material_0: THREE.Mesh
    detalhes023_Material_0: THREE.Mesh
    detalhes024_Material_0: THREE.Mesh
    detalhes025_Material_0: THREE.Mesh
    detalhes026_Material_0: THREE.Mesh
    detalhes027_Material_0: THREE.Mesh
    detalhes028_Material_0: THREE.Mesh
    detalhes029_Material_0: THREE.Mesh
    detalhes030_Material_0: THREE.Mesh
    nintendo_Material_0: THREE.Mesh
    pino_Material005_0: THREE.Mesh
    pino001_Material005_0: THREE.Mesh
    pino002_Material005_0: THREE.Mesh
    pino003_Material005_0: THREE.Mesh
    pino004_Material005_0: THREE.Mesh
    pino005_Material005_0: THREE.Mesh
    pino006_Material005_0: THREE.Mesh
    pino007_Material005_0: THREE.Mesh
    pino008_Material005_0: THREE.Mesh
    pino009_Material005_0: THREE.Mesh
    pino010_Material005_0: THREE.Mesh
    pino011_Material005_0: THREE.Mesh
    pino012_Material005_0: THREE.Mesh
    pino013_Material005_0: THREE.Mesh
    pino014_Material005_0: THREE.Mesh
    pino015_Material005_0: THREE.Mesh
    pino016_Material005_0: THREE.Mesh
    pino017_Material005_0: THREE.Mesh
    pino018_Material005_0: THREE.Mesh
    pino019_Material005_0: THREE.Mesh
    pino020_Material005_0: THREE.Mesh
    pino021_Material005_0: THREE.Mesh
    pino022_Material005_0: THREE.Mesh
    pino023_Material005_0: THREE.Mesh
    pino024_Material005_0: THREE.Mesh
    pino025_Material005_0: THREE.Mesh
    Plane_Material001_0: THREE.Mesh
    Plane001_Material002_0: THREE.Mesh
    Plane002_Material004_0: THREE.Mesh
    processor_1_Material003_0: THREE.Mesh
    processor_2_Material003_0: THREE.Mesh
    processor_2001_Material003_0: THREE.Mesh
    processor_2002_Material003_0: THREE.Mesh
    R__0: THREE.Mesh
    Text_Material_0: THREE.Mesh
    title__0: THREE.Mesh
  }
  materials: {
    ['Material.007']: THREE.MeshStandardMaterial
    Material_cart: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    R__0: THREE.MeshStandardMaterial
  }
}

export function Nintendinho(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3DObjects/supermario3/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.065, 1.265, -1.633]} scale={0.016}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt000_Material006_0.geometry}
            material={materials['Material.007']}
            position={[-84.119, -5.045, -73.718]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt001_Material006_0.geometry}
            material={materials['Material.007']}
            position={[-85.677, -5.045, 75.841]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt002_Material006_0.geometry}
            material={materials['Material.007']}
            position={[69.14, -5.045, -73.913]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt003_Material006_0.geometry}
            material={materials['Material.007']}
            position={[69.335, -5.045, 75.841]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt004_Material006_0.geometry}
            material={materials['Material.007']}
            position={[-27.101, -5.045, -0.139]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={6.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cartucho_Material_cart_0.geometry}
            material={materials.Material_cart}
            position={[0.923, 0, -0.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[94.784, 83.373, 9.937]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes_Material_0.geometry}
            material={materials['Material.001']}
            position={[-64.648, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes001_Material_0.geometry}
            material={materials['Material.001']}
            position={[-57.77, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes002_Material_0.geometry}
            material={materials['Material.001']}
            position={[-50.866, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes003_Material_0.geometry}
            material={materials['Material.001']}
            position={[-43.993, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes004_Material_0.geometry}
            material={materials['Material.001']}
            position={[-36.921, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes005_Material_0.geometry}
            material={materials['Material.001']}
            position={[-30.048, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes006_Material_0.geometry}
            material={materials['Material.001']}
            position={[-23.125, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes007_Material_0.geometry}
            material={materials['Material.001']}
            position={[-16.221, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes008_Material_0.geometry}
            material={materials['Material.001']}
            position={[-9.248, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes009_Material_0.geometry}
            material={materials['Material.001']}
            position={[-2.231, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes010_Material_0.geometry}
            material={materials['Material.001']}
            position={[4.69, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes011_Material_0.geometry}
            material={materials['Material.001']}
            position={[11.504, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes012_Material_0.geometry}
            material={materials['Material.001']}
            position={[18.593, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes013_Material_0.geometry}
            material={materials['Material.001']}
            position={[25.442, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes014_Material_0.geometry}
            material={materials['Material.001']}
            position={[32.407, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes015_Material_0.geometry}
            material={materials['Material.001']}
            position={[39.368, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes016_Material_0.geometry}
            material={materials['Material.001']}
            position={[46.5, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes017_Material_0.geometry}
            material={materials['Material.001']}
            position={[53.297, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes018_Material_0.geometry}
            material={materials['Material.001']}
            position={[60.255, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes019_Material_0.geometry}
            material={materials['Material.001']}
            position={[67.277, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes020_Material_0.geometry}
            material={materials['Material.001']}
            position={[74.49, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes021_Material_0.geometry}
            material={materials['Material.001']}
            position={[81.424, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes022_Material_0.geometry}
            material={materials['Material.001']}
            position={[-72.928, 3.912, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes023_Material_0.geometry}
            material={materials['Material.001']}
            position={[-79.355, 3.912, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes024_Material_0.geometry}
            material={materials['Material.001']}
            position={[-85.793, 3.912, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes025_Material_0.geometry}
            material={materials['Material.001']}
            position={[-91.608, 3.912, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes026_Material_0.geometry}
            material={materials['Material.001']}
            position={[-72.928, -3.673, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes027_Material_0.geometry}
            material={materials['Material.001']}
            position={[-79.355, -3.673, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes028_Material_0.geometry}
            material={materials['Material.001']}
            position={[-85.793, -3.673, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes029_Material_0.geometry}
            material={materials['Material.001']}
            position={[-91.608, -3.673, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detalhes030_Material_0.geometry}
            material={materials['Material.001']}
            position={[101.097, 9.003, 49.796]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.198, 14.458, 0.588]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nintendo_Material_0.geometry}
            material={materials['Material.001']}
            position={[52.342, -9.221, 0.154]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={4.623}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 68.522]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino001_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 64.042]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino002_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 59.564]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino003_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 55.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino004_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 50.563]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino005_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 46.101]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino006_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 41.613]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino007_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 37.125]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino008_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 32.637]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino009_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 28.052]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino010_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 23.467]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino011_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, 18.846]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino012_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -17.95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino013_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -22.429]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino014_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -26.907]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino015_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -31.395]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino016_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -35.908]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino017_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -40.371]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino018_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -44.858]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino019_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -49.346]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino020_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -53.834]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino021_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -58.419]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino022_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -63.004]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino023_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -67.625]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino024_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -13.446]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pino025_Material005_0.geometry}
            material={materials['Material.006']}
            position={[87.717, -5.933, -8.918]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[7.315, 2.156, 0.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0.geometry}
            material={materials['Material.002']}
            position={[52.799, -4.775, 0.579]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[138.428, 103.973, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material002_0.geometry}
            material={materials['Material.004']}
            position={[81.214, -5.903, 0.579]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[12.961, 70.612, 72.637]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Material004_0.geometry}
            material={materials['Material.005']}
            position={[91.241, -5.092, 0.579]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[3.555, 70.612, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.processor_1_Material003_0.geometry}
            material={materials['Material.003']}
            position={[55.692, -2.8, -39.46]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[9.973, 22.173, 2.064]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.processor_2_Material003_0.geometry}
            material={materials['Material.003']}
            position={[61.256, -2.8, 26.435]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[12.666, 28.16, 2.621]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.processor_2001_Material003_0.geometry}
            material={materials['Material.003']}
            position={[32.087, -2.8, -41.138]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[5.427, 12.066, 1.123]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.processor_2002_Material003_0.geometry}
            material={materials['Material.003']}
            position={[62.413, -3.664, 66.905]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[5.427, 12.066, 1.123]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.R__0.geometry}
            material={materials.R__0}
            position={[51.288, -9.249, 11.319]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={1.624}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_Material_0.geometry}
            material={materials['Material.001']}
            position={[60.718, -8.963, -0.024]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={3.62}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.title__0.geometry}
            material={materials.R__0}
            position={[-24.623, 9.546, -21.195]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[33.749, 68.791, 48.447]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3DObjects/supermario3/scene.gltf')