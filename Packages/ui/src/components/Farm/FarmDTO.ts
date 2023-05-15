
export declare interface Crop {
  name: string;
  description: string;
  status: string;
}

export declare interface IFarm {
  farmName: string,
  description?: string,
  IsCrop?: boolean
  IsLiveStock?: boolean
  farmImage?: boolean
  location?: string
  sizeInhectors?: string
}
