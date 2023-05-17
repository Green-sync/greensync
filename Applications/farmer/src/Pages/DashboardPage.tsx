/* eslint-disable @typescript-eslint/ban-ts-comment */

import { HomePage } from "greensync-ui";
import { useParams } from "react-router-dom";

export const DashboardPage = () => {
    const {id} = useParams()
    /// @ts-ignore
    return HomePage()[id? id: "home"]
};