import {gql} from "@apollo/client"

  export declare interface Crop {
    name: string;
    description: string;
    status: string;
  }


  export declare interface IFarmInput {
    name: string;
    type: string;
    location: string;
    size: number;
    farmId: string;
    description: string;
    userId?: string | null;
    dateCreated?: string | null;
  }
  
`;
