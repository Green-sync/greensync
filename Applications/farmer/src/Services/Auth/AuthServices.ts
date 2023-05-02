/* eslint-disable react-hooks/rules-of-hooks */
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile
  } from "firebase/auth";
  import { SocialProviders, UserDetails } from "./AuthDto";
  import {auth} from "../utils";
  
  // const history = useHistory();
 
export class AuthService {
   
    
   static LoginWithEmailAndPassword = async (data: UserDetails) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log(`User ${user.uid} signed in.`);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
  
        // If the account does not exist, set the error state
        if (errorCode === "auth/user-not-found") {
          console.log("user not found" + errorMessage);
        }
      })
      return true
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  // union type
 static SocialLogin = async (provider: SocialProviders) => {
    // TODO: implement this method
    const providers = {
      google: new GoogleAuthProvider(),
      facebook: new FacebookAuthProvider(),
    }
    try {
      await signInWithPopup(auth, providers[provider as SocialProviders]);
      return true;
    } catch(error) {
      return false
    }
   
  };
  
 static  CreateUserAccount = async (data: UserDetails) => {
    try {
      const { email, password, firstName, lastName } = data;
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const  {user} = userCredential;
        updateProfile(user, {
            displayName: lastName + " " + firstName
      })
    })
      return true
    } catch (error) {
      return false;
    }
  }
  
  static LogOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signing out')
    }).catch((error) => {
      // An error happened.
      console.log(`Error signing ${error}`)
    });
  }
} 
//   export { LoginnWithEmailAndPassword, SocialLogin, CreateUserAccount, LogOut };
  