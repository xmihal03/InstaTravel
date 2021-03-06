import { useState, useCallback, useRef, useEffect } from 'react'

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const activeHttpRequest = useRef([])

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true)
      // browser build-in foo as fetch()
      const httpAbortCtrl = new AbortController()
      activeHttpRequest.current.push(httpAbortCtrl)
      try {
        const res = await fetch(url, {
          method,
          headers,
          body,
          signal: httpAbortCtrl.signal,
        })

        const responseData = await res.json()

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        )
        if (!res.ok) {
          throw new Error(responseData.message)
        }
        setIsLoading(false)

        return responseData
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        throw err
      }
    },
    []
  )

  const clearError = () => {
    setError(null)
  }

  useEffect(() => {
    //cleanup foo - unmount
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort())
    }
  }, [])

  return { isLoading, error, sendRequest, clearError }
}
