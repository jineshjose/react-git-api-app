import { useContext, useState } from "react"
import AppContext from "../../context/githubContext/AppContext"
import User from "./User"

function UserResults() {

    const {users,loading} = useContext(AppContext)
  
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
