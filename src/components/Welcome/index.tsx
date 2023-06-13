import './welcome.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Welcome: React.FC = (): JSX.Element => {
  return (
    <div className="welcome">
      <div className="text">
        <div className="header">
          <motion.h1 animate={{ y: 0 }} initial={{ y: '100%' }} transition={{ delay: 0.2, duration: 0.3 }}>
            Phubordin Poolnai
          </motion.h1>
          <motion.h2
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="sub-header"
          >
            Frontend Developer
          </motion.h2>
        </div>
        <Link to="/contact">
          <button className="button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome
