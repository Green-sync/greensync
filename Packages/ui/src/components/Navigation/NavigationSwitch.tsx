import { FarmerNavigationDto, NavigationSwitchDto } from "./NavigationDto"
import { FarmerNavigationComponent } from "./NavigationThemes"

export const NavigationSwitch = (): NavigationSwitchDto<any> => {
    return {
        farmer: (data: FarmerNavigationDto)=> <><FarmerNavigationComponent navData={data.navData} 
        user={data.user} teams={data.teams} bgColor={data.bgColor
        } searchPrompt={data.searchPrompt} searchData={data.searchData}/></>,
        website: (data: any)=> <>Website </>,
        marketplace: (data: any)=> <>Marketplace </>,
    }
}