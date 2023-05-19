import { Meta, StoryObj } from "@storybook/react";
import {FarmProfile,StockProfile, ProfileComponent, ProfileStaticData, DeviceProfile } from '../components'




const metaProfile = {
    component: DeviceProfile,
    title: "Components/Profile",
    
} satisfies Meta<typeof ProfileComponent>


export default metaProfile;

type profileStory  = StoryObj<typeof metaProfile>


export const UserProfile: profileStory = {
    args: {
        ...ProfileStaticData
    }

}
