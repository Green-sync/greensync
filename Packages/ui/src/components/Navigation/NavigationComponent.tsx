import {NavigationProps} from "./NavigationDto"
import { NavigationSwitch } from "./NavigationSwitch"

export const NavigationComponent = ({type,data}: NavigationProps) => {
     
    {/* // ref #17: Farmer with sidebar*/}
    {/* Website Navigation ref #16 */}
    {/* Marketplace  Navigation - redf #18 */}

    return NavigationSwitch()[type](data)

}

export default NavigationComponent