import { HomePage, Profile } from "greensync-ui";
import { useParams } from "react-router-dom";
import { ProfileStaticData } from "./ProfileDto";

export const DashboardPage = () => {
    const {id} = useParams()
    // return HomePage()[id? id: "home"]
    //@ts-ignore
    return <Profile type={"farmer"} data={ProfileStaticData} />
};
