import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

import { keysStorage } from '../constants'

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function SwitchSlider () {
  const [isDarkTheme, saveToLocalStorage] = useLocalStorage(keysStorage.isDarkTheme, defaultDark)

  useEffect(() => {
    isDarkTheme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
    saveToLocalStorage(isDarkTheme)
  }, [isDarkTheme])

  const handleThemeChange = ({ target }) => saveToLocalStorage(target.checked)

  return <input onChange={handleThemeChange} defaultChecked={isDarkTheme} type="checkbox" id="checkbox-dark-theme" />
}
