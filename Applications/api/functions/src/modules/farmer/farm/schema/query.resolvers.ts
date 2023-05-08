import { FarmService } from "../farmService";

export const FarmQueryResolver = {
  getFarmByUserId: async (_parent: unknown, args:
    { userId: string; }, context: { user: any }) => {

    return FarmService.getFarmByUserId(args.userId);
 },
}