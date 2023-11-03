import Drop from '../animation/Drop'
import Logo from '../../assets/Logo.svg'
import Webring from '../../assets/Webring.svg'
import { Button } from 'antd'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EllipsisOutlined } from '@ant-design/icons'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

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
          <Link to="/" onClick={() => scroll.scrollToTop()}>
            <div className="link__text">Home</div>
          </Link>
          <ScrollLink to="about" smooth={true}>
            <div className="link__text">About Me</div>
          </ScrollLink>
          <ScrollLink to="experience" smooth={true}>
            <div className="link__text">Skills</div>
          </ScrollLink>
          <ScrollLink to="education" smooth={true}>
            <div className="link__text">Educations</div>
          </ScrollLink>
          <Link to="/project">
            <div className="link__text">Project</div>
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
            <Link to="/" onClick={() => scroll.scrollToTop()}>
              <div className="link__text">Home</div>
            </Link>
            <ScrollLink to="about" smooth={true}>
              <div className="link__text">About Me</div>
            </ScrollLink>
            <ScrollLink to="experience" smooth={true}>
              <div className="link__text">Skills</div>
            </ScrollLink>
            <ScrollLink to="education" smooth={true}>
              <div className="link__text">Educations</div>
            </ScrollLink>
            <Link to="/project">
              <div className="link__text">Project</div>
            </Link>
          </Drop>
        )}
      </div>
    </>
  )
}

export default Navbar
