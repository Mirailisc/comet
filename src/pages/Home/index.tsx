import About from '../../components/About'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Welcome from '../../components/Welcome'
import { Element } from 'react-scroll'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Welcome />
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
    </div>
  )
}

export default Home
