import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const SlideLeft: React.FC<Props> = ({ className, children }: Props): JSX.Element => {
  return (
    <motion.div
      transition={{ type: 'spring', restSpeed: 0.7 }}
      className={className}
      animate={{ x: 0 }}
      initial={{ x: -500 }}
    >
      {children}
    </motion.div>
  )
}

export default SlideLeft

type Props = {
  className?: string
  children: ReactNode
}
