import { Link } from 'react-router-dom'


function About() {
  return (
    <div className='full-h d-flex h-screen'>
      <h2>This is the 'about' heading</h2>
        <p>This is about the Page: </p>
        <Link to="/">Go to Home page</Link>
    </div>
  )
}

export default About
