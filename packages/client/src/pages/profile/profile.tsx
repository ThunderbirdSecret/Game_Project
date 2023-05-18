import Loader from '@/components/ui/loader/Loader'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/api/index'
import axios from 'axios'
import { ProfileForm } from './ProfileForm'

export const Profile = () => {

    const DataLoading = Loader(ProfileForm)
    const [userData, setUserData] = useState({
        loading: true,
        userInput: undefined
    })
  // Временное решение пока нет редакса
    useEffect(() => {
        setUserData({ loading: true, userInput: undefined })
        const fetch = async() => {
            await axios.get(`${BASE_URL}/auth/user`, {
                withCredentials: true
            }).then((res) => {
                const allDataUser = res.data
                setUserData({
                    loading: false,
                    userInput: allDataUser
                })
            })
        } 
        fetch()
    },[setUserData])

    return <div>
        <DataLoading isLoading={userData.loading} userInput={userData.userInput} />
    </div>
  }
