import { Typography } from 'antd'
import './footer.scss'

const Footer: React.FC = (): JSX.Element => {
  const { Text } = Typography

  return (
    <div className="footer">
      <Text>© 2022 Phubordin Poolnai. All Rights Reserved.</Text>
    </div>
  )
}

export default Footer
