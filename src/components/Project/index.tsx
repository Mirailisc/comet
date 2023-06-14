import { Row } from 'antd'
import Card from './Card'
import './project.scss'
import { motion } from 'framer-motion'
import { Projects } from '../../content/projects'
import { IProjectContent } from '../../content/types/project'

const Project: React.FC = (): JSX.Element => {
  const renderProjects = Projects.map((project: IProjectContent, index: number) => (
    <Card project={project} key={index} />
  ))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} exit={{ opacity: 0 }}>
      <div className="project">
        <div className="header">
          <motion.h1
            className="text-gradient"
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            PROJECTS
          </motion.h1>
        </div>
        <div className="content">
          <Row gutter={[16, 16]}>{renderProjects}</Row>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
