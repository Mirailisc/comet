import Card from './Card'
import './project.scss'
import { motion } from 'framer-motion'
import { projects } from '../../content/projects'
import { IProjectContent } from '../../content/types/project'
import { useMemo } from 'react'

const Project: React.FC = (): JSX.Element => {
  const renderProjects = useMemo(
    () => projects.map((project: IProjectContent, index: number) => <Card project={project} key={index} />),
    []
  )

  return (
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
      <div className="content">{renderProjects}</div>
    </div>
  )
}

export default Project
