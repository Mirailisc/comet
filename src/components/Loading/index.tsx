import Image from '../../assets/Logo.svg'
import { motion } from 'framer-motion'
import './loading.scss'

const Loading: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="loading">
        <img src={Image} alt="loading-image" loading="lazy" />
      </div>
    </motion.div>
  )
}

export default Loading
