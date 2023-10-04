import React, { Suspense } from 'react'
import Loading from './components/Loading'
import { ConfigProvider } from 'antd'
import { customTheme } from './utils/theme'
import ScrollProgress from './components/animation/ScrollProgress'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { BASE_PATH, PROJECT_PATH } from './utils/routes'

const Navbar = React.lazy(() => import('./components/Navbar'))
const Home = React.lazy(() => import('./components/Home'))
const Footer = React.lazy(() => import('./components/Footer'))
const Project = React.lazy(() => import('./components/Project'))

const HomePage: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Home />
    </motion.div>
  )
}

const ProjectPage: React.FC = (): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Project />
    </motion.div>
  )
}

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Suspense fallback={<Loading />}>
      <ConfigProvider theme={customTheme}>
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={BASE_PATH} element={<HomePage />} />
            <Route path={PROJECT_PATH} element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScrollProgress />
      </ConfigProvider>
    </Suspense>
  )
}

export default App
