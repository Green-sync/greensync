import { Loader, ProfileComponent } from "../components";
import { IProfileData } from "../components/Profile/ProfileDto/ProfileDto";

export const HomePage = () => {
    return {
        home: <><Loader type="placeholder" msg="welcome home"/></>,
        profile: (data: IProfileData) => <><ProfileComponent data={data.data} farm={data.farm} device={data.device} stock={data.stock}/></>,
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