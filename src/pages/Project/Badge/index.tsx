import { ProjectStatus } from '../../../content/types/project'
import { Badge } from 'antd'

const StatusBadge: React.FC<Props> = ({ status }: Props): JSX.Element => {
  switch (status) {
    case ProjectStatus.ONGOING:
      return <Badge status="success" text={ProjectStatus.ONGOING} />

    case ProjectStatus.STOPPED:
      return <Badge status="error" text={ProjectStatus.STOPPED} />

    default:
      return <Badge status="processing" text="Processing" />
  }
}

export default StatusBadge

type Props = {
  status: ProjectStatus
}
