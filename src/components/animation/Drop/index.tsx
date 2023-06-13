import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const Drop: React.FC<Props> = ({ className, children }: Props): JSX.Element => {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className={className}
      animate={{ y: 0 }}
      initial={{ y: -50 }}
      exit={{ y: -50 }}
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
