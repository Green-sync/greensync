import { HomeIcon, UserCircleIcon, SunIcon, CalendarIcon, GlobeAltIcon, ClockIcon } from "@heroicons/react/24/solid"
import { IDashboardNavigation, IHomeNavigation } from "./NavigationsDto"
import { auth } from "../../../utils"
import { Outlet } from 'react-router-dom';

const user = auth.currentUser;
export const HomeNavigationStaticData: IHomeNavigation = {
    isOpen: false,
    setOpen: ()=>{},
    authOptions: [
        {name: "Create Account", href: "/auth/register"},
        {name: "Consumer Market", href: "https://market.greensync.co.za"},
        {name: "Sign in", href: "/auth"},
    ],
    message: "GreenSync",
  categories: [
    {
      name: 'Home',
      href: "",
      featured: [
        { name: 'main', href: '#' },
        { name: 'sweet potatoes', href: '#' },
        { name: 'potatoes', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      farms: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'livestock', href: "",
      featured: [
        { name: 'cow', href: '#' },
        { name: 'goats', href: '#' },
        { name: 'shet', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      farms: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'locations', href: '#' },
    { name: 'auctions', href: '#' },
  ],
  brand: {
    name: "greensync",
    logo: ""
  }
}


export const DashBordNavigationStaticData :IDashboardNavigation= {
    bgColor: "bg-lime-800",
    searhPrompt: '',
    searchData: [{name: 'Soul', age:" 78"}],

    teams: [
    {initial: "MKP", href: "marketplace", name: "Marketplace" },
    {initial: "Edu", href: "education", name: "Education" },
    {initial: "IoT", href: "iot", name: "Internet of Things" }
    ],
    navData: [ 
    { name: "Home", icon: HomeIcon, href: "/dashboard" },
    { name: "Profile", icon: UserCircleIcon, href: "/dashboard/profile"},
    { name: "Weather", icon: SunIcon, href: "/dashboard/weather"},
    { name: "Calendar", icon: CalendarIcon, href: "/dashboard/calendar"},
    { name: "Farm", icon: GlobeAltIcon, href: "/dashboard/farm" },
    { name: "Recent", icon: ClockIcon, href: "/dashboard/recent"},]



}