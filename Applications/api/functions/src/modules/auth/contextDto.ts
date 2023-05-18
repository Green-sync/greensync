export declare interface UserDetails {
    role?: string;
    photoURL?: string;
    uid: string
    email: string
    emailVerified: boolean
    displayName: string
    isAnonymous: string
    providerData: ProviderData[]
    stsTokenManager: AuthData
    createdAt: string
    lastLoginAt: string
    appName: string
    [key: string]: unknown
}

export declare interface AuthOptions {
    access?: string,
    uid?: string
}
export declare interface AuthData {
    refreshToken: string
    accessToken: string
    expirationTime: string
}

export declare interface ProviderData {
    providerId: string
    uid: string
    displayName: string
    email: string
    phoneNumber: string
    photoURL: string
}