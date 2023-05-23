import Image from '../../assets/loading-image.svg'
import { motion } from 'framer-motion'
import './loading.scss'

const Loading: React.FC = (): JSX.Element => {
  return (
    <motion.div className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={Image} alt="loading-image" loading="lazy" />
    </motion.div>
  )
}

export default Loading
