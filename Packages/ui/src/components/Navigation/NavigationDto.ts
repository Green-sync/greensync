import { User } from "firebase/auth"

export declare interface NavigationProps {
    type: NavigationTypes,
    data: Partial<FarmerNavigationDto | WebsiteNavigationDto | MarketPlaceNavigationDto>
}

export declare type NavigationTypes = "farmer" | "marketplace" | "website"

export declare interface NavigationData {
    href: string
    icon?: any
    name: string
    [key:string]: any

}

export declare interface FarmerNavigationDto {
    teams: OtherLinks[],
    bgColor: string
    isOpen?: boolean,
    onClose?: () => void
    navData: NavigationData[]
    user?: Partial<User>
    outlet?:JSX.Element;
    [key: string]: any
}


export declare interface OtherLinks extends NavigationData {
    initial: string
}

export declare type NavigationSwitchDto<A> = {
    [key in NavigationTypes]: A
}

export declare interface MarketPlaceNavigationDto {
        categories: NavigationData[], 
        pages: NavigationData[], 
        isOpen: boolean, setIsOpen: () => any 
        brand: BrandProps
        message: string
        authOptions: NavigationAuthOptions[]
        bgColor: string
}

export declare interface NavigationAuthOptions extends NavigationData {

}
export declare interface BrandProps {
    name: string
    logo: string
}

export declare  interface MarketplaceNavigationCategories extends NavigationData {
    [key:string]: NavigationData[] | any

}
export declare interface WebsiteNavigationDto extends NavigationData { }