import { AuthComponent } from "greensync-ui"
import { AuthService } from "../Services";
import { useNavigate, useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import { UserDetails } from "../Services/Auth/AuthDto";
import { AuthenticationType, IUserData } from "greensync-ui/dist/types/components/Auth/AuthDto";



export const AuthPage = () => {
  const [authType, setAuthType] =useState<AuthenticationType>()
  const [userData, setUserData] = useState<UserDetails>()
    const nav= useNavigate()
    const authenticate = async (e: any) => {
    e.preventDefault()
    const [option,provider] = e.target.id.split(',')
    if(option === "social"){
      const isloggedIn=  await AuthService.SocialLogin(provider)
      console.log("In")
      return isloggedIn ? nav("/dashboard"): null
    }
    if(option ==="custom" && provider ==='login'){
      const isloggedIn=  await AuthService.LoginWithEmailAndPassword(userData as UserDetails)
      return isloggedIn ? nav("/dashboard"): null
    } else if(option ==="custom" && provider ==='registration'){ 
      const isloggedIn= await AuthService.CreateUserAccount(userData as UserDetails)
      return isloggedIn ? nav("/dashboard"): null
    }

  }

  const {id} = useParams()
  useEffect(()=>{
    if(id){
      setAuthType(id as AuthenticationType)
    } else {
      setAuthType("login")
    }
  },[authType,setAuthType])
  const handleInputChange = (event:any)=> {
    const { name, value } = event.target
    setUserData({...userData, [name]: value })
  }
  console.log(authType)
    return <>
    {/* AuthComponent Here */}
    <AuthComponent image={`/${authType}.jpg`} authenticate={authenticate} handleInputChange={handleInputChange} authType={authType as AuthenticationType} userData={userData as IUserData}/>
    </>
    
};
