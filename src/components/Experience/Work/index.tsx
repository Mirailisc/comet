import { IWorkContent } from '../workContent'
import { List, Typography } from 'antd'

const Work: React.FC<Props> = ({ content }: Props): JSX.Element => {
  const { Text, Title } = Typography

  const ListDescription = () => {
    return (
      <List
        className="content"
        dataSource={content.description}
        renderItem={(description: string) => {
          return (
            <List.Item>
              <Text>{description}</Text>
            </List.Item>
          )
        }}
      />
    )
  }

  return (
    <section className="work">
      <div className="workHeader">
        <Title level={3}>{content.title}</Title>
        <Text code>{content.date}</Text>
      </div>
      <ListDescription />
    </section>
  )
}

export default Work

type Props = {
  content: IWorkContent
}
