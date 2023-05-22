import { withAuth } from '@/hoc/withAuth'

function Error404() {
  return (
    <div>
      <h1>Error 404</h1>
    </div>
  )
}
export default withAuth(Error404, {
  onAuthPath: null,
  onUnAuthPath: null,
})
