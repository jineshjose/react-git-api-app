import { createContext, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducer";
const AppContext = createContext();

export const ApiProvider = ({children}) => {

    const initialState = {
        users: [],
        loading: false,
    }
    const [state,dispatch] = useReducer(githubReducer, initialState)
    
    useEffect(()=> {
        fetchUsers()
    },[])
    
    const fetchUsers = async () => {
        
        setLoading()

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload:data,
        })

        
    }
    //-- Set loading --
    const setLoading = ()=> {
        dispatch({
            type: 'SET_LOADING'
        })
    }
    //-- --//

    return(
        <AppContext.Provider value={
            {
                users:state.users,
                loading:state.loading,

            }
        }>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext