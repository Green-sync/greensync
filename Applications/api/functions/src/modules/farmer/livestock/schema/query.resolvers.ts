import { UserDetails } from "../../../auth/contextDto";
import { LivestockService } from "../LivestockService";

export const LivestockQueryResolver = {
    getLivestock: async (_parent: unknown, __: any, context: { user: UserDetails }) => {
        return LivestockService.getLivestock(context.user);
     },
}