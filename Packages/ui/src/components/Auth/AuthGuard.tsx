import {createContext,useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {User,onAuthStateChanged,getAuth} from "firebase/auth"
export const GreenSyncContext = createContext<User|null>(null)
export const AuthGuardProvider = ({children}:any) => {
    const [userData,setUserData] = useState<User|null>(null);
    const nav = useNavigate()
    const auth= getAuth()
    useEffect(() => {
     const sub = onAuthStateChanged(auth, async(user)=>{
        if(!user){
            nav("/auth")
        }
        setUserData(user)
        const tkn=  await user?.getIdTokenResult(true)
        localStorage.setItem("_AgriTKN",tkn?.token as string)
     })
     return sub;
    }, [setUserData])
    
    return <GreenSyncContext.Provider value={userData}>{children}</GreenSyncContext.Provider>
}


export default {AuthGuardProvider, GreenSyncContext}

