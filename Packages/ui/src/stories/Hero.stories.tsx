import { Meta, StoryObj } from "@storybook/react"
import { HeroComponent } from "../components"
import { WalletIcon, GlobeEuropeAfricaIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid"

const heroStory ={
    title: "Components/Hero",
    component: HeroComponent,
    tags: ['autodocs']
} satisfies Meta<typeof HeroComponent>
export default heroStory

type Hero =  StoryObj<typeof heroStory>

export const Default: Hero = {
    args: {
        type: "default",
        data: {
            title: "Welcome to greensync",
            description: "We are commited to making agricultre fun and profitable",
            cta: {
                href: "#",
                title: "Get Started"
            },
            image: "/agri.jpg"
        }
    }
}

export const website : Hero = {
    args: {
        type: "website",
        data: {
            title: "Welcome to greensync",
            description: "We are commited to making agricultre fun and profitable",
            cta: {
                href: "#",
                title: "Get Started"
            },
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
              ]
        }
    }
}