export declare interface FarmInput {
    farmId: string
    userId: string
    name: string
    location: string
    size: number
    description: string
    type: FarmType
}
enum FarmType{
    LIVESTOCK, 
    CROPS
}