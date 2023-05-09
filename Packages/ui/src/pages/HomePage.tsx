import { Loader, ProfileComponent, ProfileStaticData } from "../components";

export const HomePage = () => {
    return {
        home: <><Loader type="placeholder" msg="welcome home"/></>,
        profile: <><ProfileComponent data={ProfileStaticData.data} farm={ProfileStaticData.farm} stock={ProfileStaticData.stock} device={ProfileStaticData.device} /></>,
        weather: <>Weather</>,
        calendar: <>Calendar</>,
        farm: <>Farm</>,
        recent: <>recent</>,
        marketplace: <>marketplace</>,
        iot: <>iot</>,
        education: <>Education</>,

    }
};


export default HomePage