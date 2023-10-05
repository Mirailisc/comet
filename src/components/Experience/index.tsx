import { Typography } from 'antd'
import Work from './Work'
import './exp.scss'
import { workContent } from '../../content/works'
import { IWorkContent } from '../../content/types/work'
import { useMemo } from 'react'

const Experience: React.FC = (): JSX.Element => {
  const renderWorkContents = useMemo(() => {
    return workContent.map((content: IWorkContent, i: number) => {
      return <Work content={content} key={i} />
    })
  }, [])

  const { Title } = Typography

  return (
    <div className="experience">
      <Title level={2} className="text-gradient header">
        SKILL & EXPERIENCE
      </Title>
      {renderWorkContents}
    </div>
  )
}

export default Experience
