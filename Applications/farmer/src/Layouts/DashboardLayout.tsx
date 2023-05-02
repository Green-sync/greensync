import { NavigationComponent } from 'greensync-ui'
import { DashBordNavigationStaticData } from '../components'
const DashboardLayout = () => {
  return (
    /**
     * Dashboard navigation Here
     */
        <NavigationComponent type={'farmer'} data={DashBordNavigationStaticData}/>
   
  )
}

export default DashboardLayout
