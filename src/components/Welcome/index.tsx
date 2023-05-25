import { Typography } from 'antd'
import SlideLeft from '../animation/SlideLeft'
import Profile from '../../assets/profile.webp'
import './welcome.scss'

import { motion } from 'framer-motion'

const Welcome: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className="welcome">
      <SlideLeft className="content">
        <Title>Hi, I&apos;m Phubordin Poolnai</Title>
        <Title level={2} className="text-gradient">
          Frontend Developer
        </Title>
      </SlideLeft>
      <div className="image">
        <motion.img
          animate={{
            x: 0,
          }}
          initial={{
            x: 500,
          }}
          transition={{ type: 'spring', restSpeed: 0.7 }}
          src={Profile}
          alt="profile"
          loading="lazy"
        />
        <div className="glow" />
      </div>
    </div>
  )
}

export default Welcome
