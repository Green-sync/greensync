import { Meta, StoryObj } from "@storybook/react";
import {NavigationComponent} from "../components"
const navigation = {
    component: NavigationComponent,
    title: "Components/Navigation",
    tags: ["autodocs"]
} satisfies Meta<typeof NavigationComponent >

export default navigation;
type CompStory = StoryObj<typeof navigation>

export const Farmer: CompStory = {
    args: {
        type: "farmer",
        data: []
    }
}