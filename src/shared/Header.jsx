import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

import { Dropdown, SwitchSlider } from '../components'
import { fontsAvailable, keysStorage } from '../constants'

export default function Header () {
  const [fontSelected, saveToLocalStorage, setFontSelected] = useLocalStorage(keysStorage.fontSelected, fontsAvailable[0])

  useEffect(() => {
    const { value } = fontSelected

    document.body.style.fontFamily = value
    saveToLocalStorage(fontSelected)
  }, [fontSelected])

  return <header className="header">
    <img src="images/logo.svg" alt="Dictionary Logo" />

    <div className="header-controls">
      <Dropdown optionSelected={fontSelected} setOptionSelected={setFontSelected} optionsAvailable={fontsAvailable} />

      <div className="line-separator"></div>

      <div className="theme-controls">
         <SwitchSlider />
         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
         </svg>
      </div>
    </div>
  </header>
}
