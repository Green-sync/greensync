import { NavigationComponent, HeroComponent } from "greensync-ui"
import { HeroStaticData, HomeNavigationStaticData} from "../components"
/**
 * 
 * @returns JSX Element
 */

export const HomeLayout = () => {
    return (
        <>
        {/* Navigation Here */}
        <NavigationComponent type="marketplace" data={HomeNavigationStaticData} />
        <HeroComponent type="website" data={HeroStaticData} />
        </>
    )
}