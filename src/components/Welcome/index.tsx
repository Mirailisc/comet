import { Button, Typography } from 'antd'
import './welcome.scss'
import { motion } from 'framer-motion'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined, FacebookOutlined } from '@ant-design/icons'

const Welcome: React.FC = (): JSX.Element => {
  const { Link } = Typography

  return (
    <div className="welcome">
      <div className="text">
        <div className="header">
          <motion.h1
            className="text-gradient"
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Phubordin Poolnai
          </motion.h1>
        </div>
        <div className="header">
          <motion.h2
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="sub-header"
          >
            Fullstack Developer
          </motion.h2>
        </div>
        <div className="links">
          <Link href="https://github.com/Mirailisc" target="_blank">
            <Button shape="circle" icon={<GithubOutlined />} />
          </Link>
          <Link href="https://twitter.com/Mirailisc" target="_blank">
            <Button shape="circle" icon={<TwitterOutlined />} />
          </Link>
          <Link href="https://linkedin.com/in/phubordin/" target="_blank">
            <Button shape="circle" icon={<LinkedinOutlined />} />
          </Link>
          <Link href="https://facebook.com/AtsuiMatsuri/" target="_blank">
            <Button shape="circle" icon={<FacebookOutlined />} />
          </Link>
          <Link href="mailto:mirailisclm@gmail.com" target="_blank">
            <Button shape="circle" icon={<MailOutlined />} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
