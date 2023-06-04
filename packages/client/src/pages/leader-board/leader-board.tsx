import { withAuth } from '../../hoc/withAuth'
import './index.scss'

function LeaderBord() {
  return (
    <div>
      <h1>LeaderBord</h1>
      <div className="test-button-gradient">test button gradient</div>
      <div className="test-title-gradient">Worms Game</div>
    </div>
  )
}
export default withAuth(LeaderBord)
