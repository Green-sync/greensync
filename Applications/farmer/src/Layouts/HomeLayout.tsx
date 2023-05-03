import { NavigationComponent, HeroComponent } from "greensync-ui"
import { HeroStaticData, HomeNavigationStaticData} from "../components"
/**
 * 
 * @returns JSX Element
 */

export const HomeLayout = () => {
    return (
        <>
        {/* TODO: change the type on this component to website. 
        It has to be uniform */}

        <NavigationComponent type="marketplace" data={HomeNavigationStaticData} />
        <HeroComponent type="website" data={HeroStaticData} />
        </>
    )
}