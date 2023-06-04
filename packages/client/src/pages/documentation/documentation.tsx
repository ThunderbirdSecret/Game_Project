import { withAuth } from '../../hoc/withAuth'

function Documentation() {
  return (
    <div>
      <h1>Documentation</h1>
    </div>
  )
}

export default withAuth(Documentation)
