import {Link} from 'react-router-dom'
function User({user:{login, avatar_url}}) {
  return (
    <div className="user-card rounded-md flex shadow px-3 py-2  bg-gray-900 shadow-sm">
        <div className=" rounded-full w-14 h-14 mr-3"><img className="rounded-full" src={avatar_url} alt=""  /></div>
      <div className="u-info">
        <h4> {login} </h4>
        <Link to={`/users/${login}`} className='text-base-content small text-small text-opacity-70 text-sm'>View Profile</Link>
      </div>
      
    </div>
  )
}

export default User
