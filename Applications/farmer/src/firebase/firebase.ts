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
import { SocialProviders, UserDetails } from "./firebaseInterfaces";
import {auth} from "../utils";

// const history = useHistory();

const LoginnWithEmailAndPassword = async (data: UserDetails) => {
  try {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password);
    alert("in")
    return true
  } catch (error) {
    console.log(error);
    return error;
  }
};

// union type
const SocialLogin = async (provider: SocialProviders) => {
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

const CreateUserAccount = async (data: UserDetails) => {
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

const LogOut = async () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Signing out')
  }).catch((error) => {
    // An error happened.
    console.log(`Error signing ${error}`)
  });
}

export { LoginnWithEmailAndPassword, SocialLogin, CreateUserAccount, LogOut };
