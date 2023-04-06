import { useState } from 'react'

export default function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return JSON.parse(item) || initialValue
  })

  const saveToLocalStorage = (value) => {
    // Set to state
    setStoredValue(value)

    // Save to actual local storage
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, saveToLocalStorage, setStoredValue]
}
