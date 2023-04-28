import { FarmerNavigationDto, NavigationSwitchDto } from "./NavigationDto"

export const NavigationSwitch = (): NavigationSwitchDto<any> => {
    return {
        farmer: (data: FarmerNavigationDto)=> <> Farmer Dashboard{data}</>,
        website: (data: any)=> <>Website {data}</>,
        marketplace: (data: any)=> <>Marketplace {data}</>,
    }
}