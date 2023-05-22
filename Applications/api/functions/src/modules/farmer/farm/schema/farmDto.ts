export declare interface FarmInput {
    name: string
    location: string
    size: string
    image: string
    description: string
    type: FarmType
}
enum FarmType{
    LIVESTOCK, 
    CROPS,
    MIX
}