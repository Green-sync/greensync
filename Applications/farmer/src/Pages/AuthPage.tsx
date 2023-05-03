import { AuthComponent } from "greensync-ui"
import { AuthService } from "../Services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserDetails } from "../Services/Auth/AuthDto";
import { IUserData } from "greensync-ui/dist/types/components/Auth/AuthDto";



export const AuthPage = () => {
  const [userData, setUserData] = useState<UserDetails>()
    const nav= useNavigate()
    const authenticate = async (e: any) => {
    e.preventDefault()
    const [option,provider] = e.target.id.split(',')
    if(option === "social"){
      const isloggedIn=  await AuthService.SocialLogin(provider)
      return isloggedIn ? nav("/"): null
    }
    if(option ==="custom" && provider ==='login'){
      const isloggedIn=  await AuthService.LoginWithEmailAndPassword(userData as UserDetails)
      return isloggedIn ? nav("/"): null
    } else if(option ==="custom" && provider ==='registration'){ 
      const isloggedIn= await AuthService.CreateUserAccount(userData as UserDetails)
      return isloggedIn ? nav("/"): null
    }

  }
  const handleInputChange = (event:any)=> {
    const { name, value } = event.target
    setUserData({...userData, [name]: value })
  }
    return <>
    {/* AuthComponent Here */}
    <AuthComponent image={'/vite.jpeg'} authenticate={authenticate} handleInputChange={handleInputChange} authType={"login"} userData={userData as IUserData}/>
    </>
    
};
