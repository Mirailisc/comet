import NightCatCanvas from '../NightCat'
import './about.scss'
import { Space, Typography } from 'antd'

const About: React.FC = (): JSX.Element => {
  const { Title, Text } = Typography

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
            <Text>
              Hello, I&apos;m Mark, a college student and frontend developer based in Thailand, and I love to create
              things that will make people happy.
            </Text>
            <Text>
              I&apos;m currently working on my personal projects and helping my college&apos;s student union team.
            </Text>
            <Text>I&apos;m interested in networking, DevOps, designing systems, and backend development.</Text>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default About
