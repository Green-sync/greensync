
import { ProfileProps } from "."
import { ProfileSwitch } from "./ProfileSwitch"

export const ProfilesComponent = ({type,data}: ProfileProps) => {
     
    {/* // ref #17: Farmer with sidebar*/}
    {/* Website Navigation ref #16 */}
    {/* Marketplace  Navigation - redf #18 */}

    return ProfileSwitch()[type](data)

}

export default ProfilesComponent