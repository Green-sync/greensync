import { HomePage } from '../pages/HomePage';
import { Meta, StoryObj } from '@storybook/react';
const metaHome = {
    title: "Pages/Home",
    component: HomePage
} satisfies Meta<typeof HomePage>

export default metaHome;
type homePageStory = StoryObj<typeof metaHome>

export const Default: homePageStory = {

}