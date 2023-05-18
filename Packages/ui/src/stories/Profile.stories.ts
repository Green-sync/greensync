import { Meta, StoryObj } from "@storybook/react";
import {FarmProfile, ProfileComponent, ProfileStaticData } from '../components'




const metaProfile = {
    component: ProfileComponent,
    title: "Components/Profile",
    
} satisfies Meta<typeof ProfileComponent>

const metaFarmProfile = {
    component: FarmProfile,
    title: "Components/Profile",
    
} satisfies Meta<typeof FarmProfile>

export default metaProfile;
// export default metaFarmProfile;
type profileStory  = StoryObj<typeof metaProfile>
// type farmProfileStory = StoryObj<typeof metaFarmProfile>

export const UserProfile: profileStory = {
    args: {
        ...ProfileStaticData
    }

}
// export const FarmProfile: farmProfileStory = {
//     args: {        
//     }

// }