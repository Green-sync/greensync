import { NavigationComponent } from 'greensync-ui'
import { DashBordNavigationStaticData } from '../components'
const DashboardLayout = () => {
  return (
    /**
     * Dashboard navigation call here
     */
        <NavigationComponent type={'farmer'} data={DashBordNavigationStaticData}/>
   
  )
}

export default DashboardLayout
