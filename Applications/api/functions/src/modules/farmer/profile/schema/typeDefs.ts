import {readFileSync} from "fs"

export const farmSchema = readFileSync("src/modules/farmer/profile/schema/profile.graphql", "utf-8")