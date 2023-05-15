export declare interface AuthComponentProps {
    authType: AuthenticationType
    userData: IUserData
    image?: string
    title?: string
    description?: string
    // theme: AuthThemesType
    [key:string]: any

}

export declare interface IUserData {
    email: string
    password: string
    lastName: string
    firstName: string
}

export declare type AuthenticationType ="login"| "register"|"password-recovery"|"verify-password"
export declare type AuthThemesType = "default"|"batlaey"|"scotchy"|"neyo"|"tikey"|"simaphy"| "veagy"
