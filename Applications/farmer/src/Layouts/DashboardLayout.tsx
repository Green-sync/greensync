import { AuthGuard, NavigationComponent } from "greensync-ui";
import { DashBordNavigationStaticData } from "../components";
const DashboardLayout = () => {
  return (
    /**
     * Dashboard navigation call here and updated
     */
    <>
    <AuthGuard>
      <NavigationComponent
        type={"farmer"}
        data={DashBordNavigationStaticData}
      />
      </AuthGuard>
    </>
  );
};

export default DashboardLayout;
