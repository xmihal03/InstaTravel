import React, { useEffect, useState } from 'react'
import UsersList from '../components/UsersList'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const Users = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [loadedUsers, setLoadedUsers] = useState()

  useEffect(() => {
    const iife = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('http://localhost:5000/api/users')
        const responseData = await res.json()
        if (!res.ok) {
          throw new Error(responseData.message)
        }
        setLoadedUsers(responseData.users)
      } catch (err) {
        setError(err.message)
      }
      setIsLoading(false)
    }
    iife()
  }, [])

  const errorHandler = () => {
    setError(null)
  }
  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  )
}

export default Users
