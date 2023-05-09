export declare interface IWeekWeather {
    day: string
    imgage: string
    wetherType: string
    degrees: number
}

export declare interface IWeatherType {
    wetherType: string
    image: string
    degrees: number

} 

export declare type TWeatherTypes = "sunny" | "cloudy" | "windy" | "rainy" | "humid" | "snow" | "storm"
// export declare interface IFooterProps {
//     footer: IFooterDto;
// }

// export declare type IFooterDto = {
//     [key in TFooterDto]: IFooterData[]
// }

// export declare interface IFooterData {
//         name:  string;
//         href:  string;
//         icon?:  any;

// }

// export type TSocialTypes = "facebook"| "instagram"| "github"| "linkedIn"| "twitter" | "youtube" | "angular" | 'react' | 'node' | 'javascript' | 'html' | 'typescript';