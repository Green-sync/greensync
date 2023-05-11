import {readFileSync} from "fs"

export const profileSchema = readFileSync("src/modules/farmer/profile/schema/profile.graphql", "utf-8")