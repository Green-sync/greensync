
import './App.css'
import {Loader} from "greensync-ui";
const env = import.meta.env
function App() {
const message = `Welcome to ${env.VITE_APP_ENV==="DEV"? "GreenSync Dev Platform": "GreenSync"}`
  return (
    <>
      <Loader msg={message}/>

    </>
  )
}

