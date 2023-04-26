import {readFileSync} from "fs"

export const userSchema = readFileSync("src/modules/farmer/user/schema/user.graphql", "utf-8")