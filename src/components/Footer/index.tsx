import { Typography } from 'antd'
import './footer.scss'

const Footer: React.FC = (): JSX.Element => {
  const { Text, Link } = Typography

  return (
    <div className="footer">
      <Text>
        © 2023 <Link href="https://youtu.be/SHkF48SgiSA">Phubordin Poolnai</Link>. All Rights Reserved.
      </Text>
    </div>
  )
}

export default Footer
