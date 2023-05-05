import { Loader } from "../components";

export const HomePage = () => {
    return {
        home: <><Loader type="placeholder" msg="welcome home"/></>,
        // profile: <><ProfilesComponent /></>,
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