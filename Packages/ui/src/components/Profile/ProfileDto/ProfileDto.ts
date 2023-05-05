export declare interface IProfile {
    name: string,
    surname: string,
    email: string,
    // password: string
    website: string  
    homeAddress: string
}

export declare interface IProfileData {
    data: IProfile
    farm: IFarms
    stock: IStock
    device: IDevice
}
export declare interface IFarms {
    name: string,
    farmType: string,
    location: string,
}

export declare interface IStock {
    itemName: string,
    quantity: number,
    price: number,
}
export declare interface IDevice {
    name: string,
    type: string
}

export declare interface ProfileProps {
    type: ProfileTypes,
    data: Partial<IProfileData>
}

export declare type ProfileTypes = "farmer" | "marketplace" 
