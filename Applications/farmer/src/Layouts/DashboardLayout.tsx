import { NavigationComponent } from "greensync-ui";
import { DashBordNavigationStaticData } from "../components";
const DashboardLayout = () => {
  return (
    /**
     * Dashboard navigation call here and updated
     */
    <>
      <NavigationComponent
        type={"farmer"}
        data={DashBordNavigationStaticData}
      />

      <h1>My Dash Board</h1>
    </>
  );
};

export default DashboardLayout;
