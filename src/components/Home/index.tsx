import About from '../About'
import Education from '../Education'
import Experience from '../Experience'
import Welcome from '../Welcome'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Welcome />
      <About />
      <Experience />
      <Education />
    </div>
  )
}

export default Home
