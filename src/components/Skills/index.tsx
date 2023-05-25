import React from 'react'
import { Space, Typography } from 'antd'
import './skills.scss'

const Skills: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className="skills">
      <div className="header">
        <Title level={2} className="text-gradient">
          Skills
        </Title>
      </div>
      <Space className="content">
        <div>HTML</div>
        <div>HTML</div>
        <div>HTML</div>
        <div>HTML</div>
        <div>HTML</div>
        <div>HTML</div>
      </Space>
    </div>
  )
}

export default Skills
