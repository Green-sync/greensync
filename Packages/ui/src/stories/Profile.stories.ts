import { Meta, StoryObj } from "@storybook/react";
import {ProfileComponent, ProfileStaticData } from '../components'




const metaProfile = {
    component: ProfileComponent,
    title: "Components/Profile",
    
} satisfies Meta<typeof ProfileComponent>


export default metaProfile;
type profileStory  = StoryObj<typeof metaProfile>

export const UserProfile: profileStory = {
    args: {
        ...ProfileStaticData
    }

}