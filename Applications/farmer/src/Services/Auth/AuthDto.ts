export interface UserDetails{
    email?: string;
    password?: string;
    lastName?: string;
    firstName?: string;
}

export default interface Socials{
    name: string;
    icon: string;

}

// @LANGABOM you can also add twitter 
export declare type SocialProviders = "google" | "facebook" 