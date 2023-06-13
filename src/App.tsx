import React, { Suspense } from 'react'
import Loading from './components/Loading'
import { ConfigProvider } from 'antd'
import { customTheme } from './utils/theme'
import ScrollProgress from './components/animation/ScrollProgress'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = React.lazy(() => import('./components/Navbar'))
const Welcome = React.lazy(() => import('./components/Welcome'))
const About = React.lazy(() => import('./components/About'))
const Experience = React.lazy(() => import('./components/Experience'))
const Footer = React.lazy(() => import('./components/Footer'))
const Project = React.lazy(() => import('./components/Project'))

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  const HomePage = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <Welcome />
        <About />
        <Experience />
      </motion.div>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <ConfigProvider theme={customTheme}>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        {location.pathname === '/' && <Footer />}
        {location.pathname === '/' && <ScrollProgress />}
      </ConfigProvider>
    </Suspense>
  )
}

export default App
