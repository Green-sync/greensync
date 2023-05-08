import { cropsSchema } from "../modules";
import { farmSchema } from "../modules/farmer/farm";
import {livestockSchema} from "../modules";
import  {readFileSync} from "fs";
import { weatherSchema } from "../modules/farmer/weather";
import { iotdeviceSchema } from "../modules/farmer/iotdevice";

const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    livestockSchema,
    farmSchema,
    iotdeviceSchema,
    weatherSchema
    // iotSchema
   

    
]