export declare interface NavigationProps {
    type: NavigationTypes,
    data: NavigationData[]
}

export declare type NavigationTypes ="farmer" |"marketplace" | "website"

export declare interface NavigationData {
    href: string
    name: string

}

export declare interface FarmerNavigationDto extends NavigationData {
    icon: any
    teams: OtherLinks[],
    isOpen: boolean,
    onClose: () => void
}

export declare interface OtherLinks extends NavigationData {
    initial: string
}

export declare type NavigationSwitchDto <A>={
    [key in NavigationTypes]: A
}