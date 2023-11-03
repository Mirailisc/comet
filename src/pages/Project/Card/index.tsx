import { Button, Divider, Image, Space, Typography } from 'antd'
import './card.scss'
import { IProjectContent } from '../../../content/types/project'
import StatusBadge from '../Badge'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const Card: React.FC<Props> = ({ project }: Props): JSX.Element => {
  const { Title, Link } = Typography

  return (
    <div className="card-border">
      <div className="card">
        <Image preview={false} className="image" src={project.image} />
        <Title level={4}>{project.name}</Title>
        <StatusBadge status={project.status} />
        <Divider />
        <Space style={{ marginBottom: '10px' }}>
          {project.url && (
            <Link href={project.url} target="_blank">
              <Button icon={<LinkOutlined />} />
            </Link>
          )}
          {project.repo && (
            <Link href={project.repo} target="_blank">
              <Button icon={<GithubOutlined />} />
            </Link>
          )}
        </Space>
      </div>
    </div>
  )
}

export default Card

type Props = {
  project: IProjectContent
}
