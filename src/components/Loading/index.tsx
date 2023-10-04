import Logo from '../../assets/Logo.svg'
import { motion } from 'framer-motion'
import './loading.scss'
import { Image } from 'antd'

const Loading: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="loading">
        <Image preview={false} width={40} height={40} src={Logo} alt="loading-image" loading="lazy" />
      </div>
    </motion.div>
  )
}

export default Loading
