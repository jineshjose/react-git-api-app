import { useEffect, useState } from "react"
import User from "./User"

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        fetchUsers()
    },[])
    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
  if(!loading){
    return (
        <div className="grid grid-cols-2 gap-10 xl:grid-cols-4 lg:grid-cols-3 gap-3 md:grid-cols-2">
          {users.map((user)=>(
            <User key= {user.id} user = {user} />
          ))}
        </div>
      )
  }
  else{
    return (<h4 className="align-self-center flex justify-center">Loading ...</h4>)
  }
}

export default UserResults
