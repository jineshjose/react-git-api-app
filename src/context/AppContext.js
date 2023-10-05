import { createContext, useEffect, useState } from "react";
const AppContext = createContext();

export const ApiProvider = ({children}) => {

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
        console.log(users)
    }

    return(
        <AppContext.Provider value={
            {
                users,
                loading,

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext