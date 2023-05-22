import { UserDetails } from "../../../auth/contextDto";
import { FarmService } from "../farmService";

export const FarmQueryResolver = {
  getFarm: async (_parent: unknown, ___: any, context: { user: UserDetails }) => {

    return FarmService.getFarmByUserId(context.user);
 },



}