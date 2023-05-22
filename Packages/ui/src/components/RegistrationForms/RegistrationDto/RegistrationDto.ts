export declare interface IFarmForm {
    name: string;
    location: string
    size: FarmSize
    description?: string;
    farmtype: FarmType
}

declare interface FarmSize {
    hectares?: number;
    acres?: number;
}

enum FarmType {
    CROP = "Crop",
    LIVESTOCK = "Livestock",
    MIXED = "Mixed"
}

export declare type TFarming = "CROP" | 'LIVESTOCK' | "MiXED"
export declare type TInputTypes = "text" | "password" | "email" | "tel" | 'radio' | 'textarea' | 'file' | 'phone' | 'number'

export declare interface InputTypes {
    name?: string
    placeholder?: string
    type?: TInputTypes
    label?: string
    id?: string
    isSelect?: ISelectDto[]
    isTextArea?: ItextAreaDto
}
export declare interface ItextAreaDto {
    rows: string
    cols: string
}

export declare interface ISelectDto {
    value: string
    name: string
}