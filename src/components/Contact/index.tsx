import { motion } from 'framer-motion'
import './contact.scss'

const Contact: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} exit={{ opacity: 0 }}>
      <div className="contact">
        <h1 className="text-gradient">CONTACT ME</h1>
      </div>
    </motion.div>
  )
}

export default Contact
