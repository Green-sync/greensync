import {readFileSync} from "fs"

export const iotdeviceSchema = readFileSync("src/modules/farmer/iotdevice/schema/iotdevice.graphql", "utf-8")