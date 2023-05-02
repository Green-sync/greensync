import { ArrowLeftOnRectangleIcon, GlobeEuropeAfricaIcon, WalletIcon } from "@heroicons/react/24/solid";
import { IHero } from "./HeroDto";


export const HeroStaticData: IHero ={
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

}

