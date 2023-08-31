import NightCatCanvas from '../NightCat'
import './about.scss'
import { Space, Typography } from 'antd'
import KMUTT from '../../assets/kmutt.png'

const About: React.FC = (): JSX.Element => {
  const { Title, Text, Link } = Typography

  return (
    <div className="about">
      <Title level={2} className="text-gradient">
        ABOUT
      </Title>
      <div className="container">
        <div className="model">
          <NightCatCanvas />
        </div>
        <div className="content">
          <Space direction="vertical">
            <Link href="https://kmutt.ac.th" target="_blank">
              <img src={KMUTT} alt="college" width={100} loading="lazy" />
            </Link>
            <Text>
              Hello, I&apos;m Mark, a college student and front-end developer based in Thailand, and I love to create
              things that will make people happy.
            </Text>
            <Text>
              I&apos;m currently working at NUD Channel on a gallery website for my high school&apos;s events.
            </Text>
            <Text>I&apos;m interested in networking, DevOps, designing systems, and backend development.</Text>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default About
