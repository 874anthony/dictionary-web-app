import { useState, useEffect } from 'react'

export default function useFetch (url, params) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!url || !params) return

    const controller = new AbortController()
    const { signal } = controller

    async function fetchData () {
      try {
        const response = await fetch(`${url}${params}`, { signal })
        const data = await response.json()
        setData(data)
      } catch (error) {
        if (error.name === 'AbortError') return
        console.error(error.message)
      }
    }
    fetchData()

    return () => controller.abort()
  }, [params])

  return data
}
