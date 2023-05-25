import React, { Suspense } from 'react'
import Loading from './components/Loading'
import { ConfigProvider } from 'antd'
import { customTheme } from './utils/theme'
import ScrollProgress from './components/animation/ScrollProgress'

const Navbar = React.lazy(() => import('./components/Navbar'))
const Welcome = React.lazy(() => import('./components/Welcome'))
const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))

const App: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ConfigProvider theme={customTheme}>
        <div className="App">
          <Navbar />
          <Welcome />
          <About />
          <Skills />
          <Experience />
        </div>
        <ScrollProgress />
      </ConfigProvider>
    </Suspense>
  )
}

export default App
