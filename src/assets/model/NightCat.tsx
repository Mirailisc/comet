import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['voxel-nightcat']: THREE.Mesh
  }
  materials: {
    palette: THREE.MeshPhysicalMaterial
  }
}

const NightCat = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/nightcat.gltf') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['voxel-nightcat'].geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

export default NightCat

useGLTF.preload('/nightcat.gltf')
