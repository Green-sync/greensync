export declare interface IProfile {
    name: string,
    surname: string,
    email: string,
    password: string
    website: string  
}

export declare interface IProfileData {
    data: IProfile
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