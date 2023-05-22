export declare interface IProfile {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string
    website: string  
    photoURL: string
    homeAddress: string
}

export declare interface IProfileData {
    data: IProfile
    farm: IFarms[]
    stock: IStock[]
    device: IDevice[]
    [key:string]: any
}
export declare interface IFarms {
    name: string,
    farmType: string,
    location: string,
    size: number,
    image: string
}

export declare interface IStock {
    itemName: string,
    quantity: number,
    price: number,
    image?: string
}
export declare interface IDevice {
    name: string,
    type: string,
    image: string
}

export declare interface ProfileProps {
    type: ProfileTypes,
    data: Partial<IFarms | IStock | IDevice | IProfile>
}

export declare type ProfileTypes = "farmer" | "marketplace" 

export declare type ProfileSwitchDto<A> = {
    [key in ProfileTypes]: A
}