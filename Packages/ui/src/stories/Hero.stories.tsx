import { Meta, StoryObj } from "@storybook/react"
import { HeroComponent } from "../components"

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