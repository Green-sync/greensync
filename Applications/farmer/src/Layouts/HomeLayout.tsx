import { NavigationComponent, HeroComponent } from "greensync-ui"
import { HeroStaticData, HomeNavigationStaticData} from "../components"


export const HomeLayout = () => {
    return (
        <>
        <NavigationComponent type="marketplace" data={HomeNavigationStaticData} />
        <HeroComponent type="website" data={HeroStaticData} />
        </>
    )
}