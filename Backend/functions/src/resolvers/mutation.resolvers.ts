import { CropsMutationResolver} from "../modules"
import { StockMutationResolver } from "../modules"
import { FarmMutationResolver } from "../modules/farmer/farm"
import { iotDeviceMutationResolver } from "../modules/farmer/iotdevice"
import { WeatherMutationResolver } from "../modules/farmer/weather"

export const MutationResolver = {
    ...CropsMutationResolver,
    ...StockMutationResolver,
    ...FarmMutationResolver,
    ...iotDeviceMutationResolver,
    ...WeatherMutationResolver
}


