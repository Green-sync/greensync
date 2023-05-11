export declare interface IWeekWeather {
    day: string
    icon: any
    wetherType: string
    degrees: number
    time: Iintervals[]

}

export declare interface IWeatherData {
    location: string
    weekWeather: IWeekWeather[]
}
export declare interface IWeatherType {
    wetherType: string
    image: string
    degrees: number

} 
export declare interface Iintervals {
    time: string
    weatherType: TWeatherTypes
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