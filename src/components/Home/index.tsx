import About from '../About'
import Experience from '../Experience'
import Welcome from '../Welcome'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Welcome />
      <About />
      <Experience />
    </div>
  )
}

export default Home
