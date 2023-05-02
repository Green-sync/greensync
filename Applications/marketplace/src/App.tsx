import { HeroComponent, Loader,NavigationComponent } from "greensync-ui"
import { WalletIcon, GlobeEuropeAfricaIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid"

export const App = () => {

  const options: any = {
    isOpen: false,
    setOpen: ()=>{},
    authOptions: [
        {name: "Create Account", href: "#"},
        {name: "Consumer Market", href: "#"},
        {name: "Sign in", href: "#"},
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
const env = import.meta.env
  return <>
  <NavigationComponent type="marketplace" data={{...options}} />
  <HeroComponent type={"website"} data={{
    image: "/oranges.jpg",
     cards: [
      {
        name: 'Fruits',
        description: 'Explore a wide range of fruits and learn how to cultivate them',
        icon: WalletIcon,
      },
      {
        name: 'Grains',
        description: 'Find information about different types of grains and farming techniques',
        icon: GlobeEuropeAfricaIcon,
      },
      {
        name: 'Vegetables',
        description: 'Learn about different varieties of vegetables and how to grow them',
        icon: ArrowLeftOnRectangleIcon,
      },
    ],
    title: "Welcome to greensync",
            description: "Welcome to our platform! We're here to help you manage your farms, crops, livestock, and weather data all in one place. With our user-friendly interface and powerful tools, you can streamline your agricultural operations and make more informed decisions. Let's grow together!",
      }}/>
  </>
}