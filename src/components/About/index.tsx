import NightCatCanvas from '../NightCat'
import './about.scss'
import { Space, Typography } from 'antd'
import KMUTT from '../../assets/kmutt.png'

const About: React.FC = (): JSX.Element => {
  const { Title, Text, Link } = Typography

  return (
    <div className="about">
      <Title level={2} className="text-gradient">
        About Me
      </Title>
      <div className="container">
        <div className="model">
          <NightCatCanvas />
        </div>
        <div className="content">
          <Space direction="vertical">
            <Link href="https://kmutt.ac.th" target="_blank">
              <img src={KMUTT} alt="college" width={100} />
            </Link>
            <Text>
              I&apos;m a sophomore college student based in Bangkok, Thailand, and I love to create funny things with
              the desire to become a web developer.
            </Text>
            <Text>
              I have two years of experience in front-end development and I also interested in
              <Text code>backend & mobile</Text>
              development
            </Text>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default About
