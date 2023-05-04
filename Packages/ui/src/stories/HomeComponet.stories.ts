import { Meta, StoryObj } from "@storybook/react";
import { HomeComponent } from "../components";

const metaHome = {
    component: HomeComponent,
    title: "Components/Home",
    
} satisfies Meta<typeof HomeComponent>


export default metaHome;
type homerStory  = StoryObj<typeof metaHome>

export const HomeView: homerStory = {
    
}