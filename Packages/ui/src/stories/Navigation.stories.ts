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
        bgColor: "bg-gray-800",
        searchPrompt: '',
        searchData: [{name: "Reeds", age:23}],

            user: {
                displayName: "Sample User" // SU
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