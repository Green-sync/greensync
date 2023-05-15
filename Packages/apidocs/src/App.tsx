import {HeroComponent} from "greensync-ui";

const env = import.meta.env
function App() {

  return (
      <>
      <HeroComponent type={"welcome"} data={{description: "On this Site you have access to our playground to test the api before you start using it ", title: "Introducing GreenSync API", cta: {
      href: `/api/v1/${env.VITE_ENDPOINT}`, title: "Get Started"}
      }}/>
      </>
  )
}

export default App
