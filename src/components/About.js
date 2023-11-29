import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Projet réalisé à l'aide du <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">lien</a> suivant.</h4>
      <Link to='/'>Retour</Link>
    </div>
  )
}

export default About
