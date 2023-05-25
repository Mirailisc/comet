import Drop from '../animation/Drop'
import Logo from '../../assets/Logo.svg'
import Webring from '../../assets/Webring.svg'
import { Button, Typography } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import './navbar.scss'
import { useState } from 'react'

const Navbar: React.FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { Text, Link } = Typography

  const LogoComponent: React.FC = (): JSX.Element => {
    return (
      <div className="logo">
        <img id="logo" src={Logo} alt="logo" loading="lazy" />
        <Link href="https://webring.wonderful.software/#mirailisc.me" target="_blank">
          <img id="webring" src={Webring} alt="webring" loading="lazy" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <Drop className="navbar">
        <LogoComponent />
        <div className="links">
          <Text strong>Home</Text>
          <Text strong>About</Text>
          <Text strong>Skills</Text>
          <Text strong>Experiences</Text>
          <Button type="primary">Contact</Button>
        </div>
      </Drop>
      <div className="navbar-mobile">
        <div className="nav">
          <LogoComponent />
          <Button type="primary" onClick={() => setOpen(!isOpen)} icon={<EllipsisOutlined />} />
        </div>
        {isOpen && (
          <Drop className="content">
            <Text strong>Home</Text>
            <Text strong>About</Text>
            <Text strong>Skills</Text>
            <Text strong>Experiences</Text>
            <Button type="primary">Contact</Button>
          </Drop>
        )}
      </div>
    </>
  )
}

export default Navbar
