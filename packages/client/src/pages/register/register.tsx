import { withAuth } from '@/hoc/withAuth'
import { ROUTES } from '../../routes';

function Register() {
  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default withAuth(Register, {
  onAuthPath: ROUTES.GAME,
  onUnAuthPath: null,
})
