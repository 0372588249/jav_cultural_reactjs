import RouterPath from '../../utils/RouterPath'
import Theory from '../features/Theory'
import Analysis from '../features/Analysis'
import Recommend from '../features/Recommend'
interface RouterProps {
  path: string
  component: React.FC | any
  param?: any
}

const ScreenRouter: Array<RouterProps> = [
  {
    path: RouterPath.HOME,
    component: Theory,
  },
  {
    path: RouterPath.ANALYSIS,
    component: Analysis,
  },
  {
    path: RouterPath.RECOMMENT,
    component: Recommend,
  },
]
export default ScreenRouter
