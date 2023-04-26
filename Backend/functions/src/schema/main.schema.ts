import { cropsSchema } from "../modules";
import { farmSchema } from "../modules/farmer/farm";
import {livestockSchema} from "../modules";
import  {readFileSync} from "fs";
import { iotDeviceSchema } from "../modules/farmer/iotdevice";
import { weatherSchema } from "../modules/farmer/weather";

const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    iotDeviceSchema,
    livestockSchema,
    weatherSchema,
    farmSchema
    // iotSchema
   

    
]