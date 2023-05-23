import { motion, useScroll } from 'framer-motion'
import './progress.scss'

const ScrollProgress: React.FC = (): JSX.Element => {
  const { scrollYProgress } = useScroll()

  return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
}

export default ScrollProgress
