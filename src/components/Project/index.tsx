import './project.scss'
import { motion } from 'framer-motion'

const Project: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} exit={{ opacity: 0 }}>
      <div className="project">
        <div className="header">
          <motion.h1
            className="text-gradient"
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            PROJECTS
          </motion.h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
