import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const Drop: React.FC<Props> = ({ className, children }: Props): JSX.Element => {
  return (
    <motion.div
      transition={{ type: 'tween', restSpeed: 0.5 }}
      className={className}
      animate={{ y: 0 }}
      initial={{ y: -50 }}
    >
      {children}
    </motion.div>
  )
}

export default Drop

type Props = {
  className?: string
  children: ReactNode
}
