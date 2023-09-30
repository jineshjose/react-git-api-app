import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="bg-gray">
      <ul className="flex">
      <li className="px-3 cursor-pointer"><Link to='/'>Home</Link></li>
        <li className="px-3 cursor-pointer"><Link to='/About'>About</Link></li>
        <li className="px-3 cursor-pointer"><Link to='/Contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Footer
