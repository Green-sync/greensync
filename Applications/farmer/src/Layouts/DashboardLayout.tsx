import { NavigationComponent } from "greensync-ui";
import { DashBordNavigationStaticData } from "../components";
import { GreenSyncContext } from "greensync-ui";
import { useContext } from "react";
const DashboardLayout = () => {
  const user = useContext(GreenSyncContext)
  return (
    /**
     * Dashboard navigation call here and updated
     */
    <>
    {
      user?
    
      <NavigationComponent
        type={"farmer"}
        data={DashBordNavigationStaticData(user)}
      />
      : null
    }
    </>
  );
};

export default DashboardLayout;
