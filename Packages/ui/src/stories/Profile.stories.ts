import { Meta, StoryObj } from "@storybook/react";
import {FarmProfile, ProfileStaticData } from '../components'




const metaProfile = {
    component: FarmProfile,
    title: "Components/Profile",
    
} satisfies Meta<typeof FarmProfile>


export default metaProfile;
type profileStory  = StoryObj<typeof metaProfile>

export const UserProfile: profileStory = {
    args: {
        ...ProfileStaticData.farm
    }

}