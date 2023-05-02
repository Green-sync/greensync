import { Meta, StoryObj } from "@storybook/react";
import { NavigationComponent } from "../components"
import { CalendarIcon, ClockIcon, GlobeAltIcon, HomeIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";
const navigation = {
    component: NavigationComponent,
    title: "Components/Navigation",
    tags: ["autodocs"]
} satisfies Meta<typeof NavigationComponent>

export default navigation;
type CompStory = StoryObj<typeof navigation>

const options: any = {
    authOptions: [
        {name: "Create Account", href: "#"},
        {name: "Consumer Market", href: "#"},
        {name: "Sign in", href: "#"},
    ],
    message: "Get fresh farm produce every saturday at our auctions located near you.",
  categories: [
    {
      name: 'crops',
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

export const Farmer: CompStory = {
    args: {
        type: "farmer",
        data: {
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
    }
}

export const authenticatedFarmer: CompStory = {
    args: {
        type: "marketplace",
        data: {
            authOptions: [
                {name: "Mitch Chanza", href: "href"},
                {name: "Logout", href: "href"}
            ],
    
            categories: [
                {
                    name: 'Devices', href: "",
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
            brand: {},
            pages: []
        }
    }
}
export const Webste: CompStory = {
    args: {
        type: "website",

        data: {
                    bgColor: "bg-lime-900",
        searchPrompt: '',
        searchData: [{name: "Drake", age:42}],

            user: {
                displayName: "Web User" // SU
            },

            teams: [{
                initial: "IoT", href: "", name: ""
            }],
            navData: [{
                name: "Home", href: "", icon: HomeIcon
            }]
        }
    }
}


export const Marketplace: CompStory = {
   args: {
    type: "marketplace",
    data: {
        ...options
    }
   }
}