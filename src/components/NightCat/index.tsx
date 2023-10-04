import { OrbitControls } from '@react-three/drei'
import NightCat from '../../assets/model/NightCat'
import { Canvas } from '@react-three/fiber'

const NightCatCanvas: React.FC = (): JSX.Element => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={3} />
      <NightCat />
    </Canvas>
  )
}

export default NightCatCanvas
