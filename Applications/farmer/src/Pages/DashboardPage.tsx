import { Loader } from "greensync-ui";
import { useParams } from "react-router-dom";

export const DashboardPage = () => {
    const {id} = useParams()
    return (
    <div className="h-[90vh] flex justify-center items-center text-3xl capitalize">
    <Loader msg={`${id? id: "Home"} page is in development`} type="placeholder"/>
    </div>
    )
    
};
