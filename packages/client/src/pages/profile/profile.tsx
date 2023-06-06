import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '@/components/ui/loader/Loader'
import { BASE_URL } from '@/api/index'
import ProfileForm, {
  InputContent,
} from '@/components/form/ProfileForm/ProfileForm'
import { withAuth } from '@/hoc/withAuth'

const Profile = () => {
  const DataLoading = Loader(ProfileForm)
  const [userData, setUserData] = useState<{
    loading: boolean
    userInput?: InputContent
  }>({
    loading: true,
    userInput: undefined,
  })
  // Временное решение пока нет редакса
  useEffect(() => {
    setUserData({ loading: true, userInput: undefined })
    const fetch = async () => {
      await axios
        .get(`${BASE_URL}/auth/user`, {
          withCredentials: true,
        })
        .then(res => {
          const allDataUser = res.data
          setUserData({
            loading: false,
            userInput: allDataUser,
          })
        })
    }
    fetch()
  }, [setUserData])

  return (
    <div>
      <DataLoading
        isLoading={userData.loading}
        userInput={userData.userInput}
      />
    </div>
  )
}
export default withAuth(Profile)
