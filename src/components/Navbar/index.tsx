import Drop from '../animation/Drop'
import Logo from '../../assets/Logo.svg'
import Webring from '../../assets/Webring.svg'
import { Button } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const LogoComponent: React.FC = (): JSX.Element => {
    return (
      <div className="logo">
        <img id="logo" src={Logo} alt="logo" loading="lazy" />
        <a href="https://webring.wonderful.software/#mirailisc.me" target="_blank" rel="noreferrer">
          <img id="webring" src={Webring} alt="webring" loading="lazy" />
        </a>
      </div>
    )
  }

  return (
    <>
      <Drop className="navbar">
        <LogoComponent />
        <div className="links">
          <Link to="/">
            <div className="link__text">Home</div>
          </Link>
          <Link to="/project">
            <div className="link__text">Project</div>
          </Link>
          <Link to="/contact">
            <Button type="primary">Contact</Button>
          </Link>
        </div>
      </Drop>
      <div className="navbar-mobile">
        <div className="nav">
          <LogoComponent />
          <Button type="primary" onClick={() => setOpen(!isOpen)} icon={<EllipsisOutlined />} />
        </div>
        {isOpen && (
          <Drop className="content">
            <Link to="/">
              <div className="link__text">Home</div>
            </Link>
            <Link to="/project">
              <div className="link__text">Project</div>
            </Link>
            <Button type="primary">Contact</Button>
          </Drop>
        )}
      </div>
    </>
  )
}

export default Navbar
