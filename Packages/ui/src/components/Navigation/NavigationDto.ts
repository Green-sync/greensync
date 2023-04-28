import { User } from "firebase/auth"

export declare interface NavigationProps {
    type: NavigationTypes,
    data: FarmerNavigationDto | WebsiteNavigationDto | MarketPlaceNavigationDto
}

export declare type NavigationTypes ="farmer" |"marketplace" | "website"

export declare interface NavigationData {
    href: string
    icon?: any
    name: string

}

export declare interface FarmerNavigationDto  {
    teams: OtherLinks[],
    bgColor: string
    isOpen?: boolean,
    onClose?: () => void
    navData: NavigationData[]
    user?: Partial<User>
    [key:string]: any
}


export declare interface OtherLinks extends NavigationData {
    initial: string
}

export declare type NavigationSwitchDto <A>={
    [key in NavigationTypes]: A
}

export declare interface MarketPlaceNavigationDto extends NavigationData {}
export declare interface WebsiteNavigationDto extends NavigationData {}