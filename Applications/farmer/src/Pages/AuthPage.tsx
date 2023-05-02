import { AuthComponent } from "greensync-ui"
import { AuthService } from "../Services";




export const AuthPage = () => {
    const authenticate = async (e: any) => {
    e.preventDefault()
    const [option,provider] = e.target.id.split(',')
    if(option === "social"){
      const isloggedIn=  AuthService.SocialLogin(provider)
      return isloggedIn ? nav("/"): null
    }
    if(option ==="custom" && provider ==='login'){
      const isloggedIn=  AuthService.LoginWithEmailAndPassword(userData)
      return isloggedIn ? nav("/"): null
    } else if(option ==="custom" && provider ==='registration'){ 
      if(passwordMatch) {
      const isloggedIn= AuthService.CreateUserAccount(userData)
      return isloggedIn ? nav("/"): null
      }
    }

  }
    return <>
    AuthComponent Here
    <AuthComponent image={'/vite.jpeg'} authenticate={} handleInputChange={} authType={"login"} userData={}/>
    </>
    
};
