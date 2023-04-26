import {readFileSync} from "fs"

export const iotDeviceSchema = readFileSync("src/modules/farmer/iotdevice/schema/iotdevice.graphql", "utf-8")