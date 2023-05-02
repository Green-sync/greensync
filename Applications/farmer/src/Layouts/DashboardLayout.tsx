import { NavigationComponent } from 'greensync-ui/dist/types'
import { CalendarIcon, ClockIcon, GlobeAltIcon, HomeIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const data= {
    bgColor: "bg-indigo-900",
    searhPrompt: '',
    searchData: [{name: 'Soul', age: 78}],

    user: {
        displayName: "Farmer User" // SU
    },

    teams: [
    {initial: "MKP", href: "", name: "Market Place" },
    {initial: "Edu", href: "", name: "Education" },
    {initial: "IoT", href: "", name: "Internet of Things" }
    ],
    navData: [ 
    { name: "Home", icon: HomeIcon, href: "#" },
    { name: "Profile", icon: UserCircleIcon, href: "#"},
    { name: "Weather", icon: SunIcon, href: "#"},
    { name: "Calendar", icon: CalendarIcon, href: "#"},
    { name: "Farm", icon: GlobeAltIcon, href: "#" },
    { name: "Recent", icon: ClockIcon, href: "#"},]
}
const DashboardLayout = () => {
  return (
    
        <NavigationComponent type={'farmer'} data={data}/>
   
  )
}

export default DashboardLayout
