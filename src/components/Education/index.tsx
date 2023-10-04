import { Image, Typography } from 'antd'
import './education.scss'
import { educationContents } from '../../content/educations'
import { IEducationContent } from '../../content/types/educations'
import { useMemo } from 'react'

const Education: React.FC = (): JSX.Element => {
  const { Title, Text } = Typography

  const renderEducation = useMemo(() => {
    return educationContents.map((content: IEducationContent, i: number) => {
      return (
        <div className="content" key={i}>
          <Image preview={false} width={100} src={content.image} />
          <div>
            <Title level={5}>{content.name}</Title>
            <Text strong>{content.location}</Text>
            <br />
            <Text className="date">{content.date}</Text>
          </div>
        </div>
      )
    })
  }, [])

  return (
    <div className="education">
      <Title level={2} className="text-gradient header" style={{ marginBottom: '3rem' }}>
        EDUCATION
      </Title>
      <div className="educations">{renderEducation}</div>
    </div>
  )
}

export default Education
