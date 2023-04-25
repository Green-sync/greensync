import {Meta, StoryObj} from "@storybook/react"
import { Loader } from "../components"
const loaderMeta = {
    component: Loader,
    title: "Components/Loader"
} satisfies Meta<typeof Loader>

export default loaderMeta;
type LoaderStory = StoryObj<typeof loaderMeta>

export const Default:LoaderStory ={
args: {
    msg: "Comming soon please keep an eye for this"
}
}