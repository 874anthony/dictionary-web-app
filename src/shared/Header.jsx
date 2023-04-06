import { useEffect, useState } from 'react'

import { Dropdown, SwitchSlider } from '../components'

const fontsAvailable = [
  {
    name: 'Sans Serif',
    value: "'Inter', sans-serif"
  },
  {
    name: 'Serif',
    value: "'Lora', serif"
  },
  {
    name: 'Mono',
    value: "'Inconsolata', monospace"
  }
]

const selectedFontType = JSON.parse(localStorage.getItem('selectedFontType')) || fontsAvailable[0]

export default function Header () {
  const [fontSelected, setFontSelected] = useState(selectedFontType)

  useEffect(() => {
    const { value } = fontSelected

    document.body.style.fontFamily = value
    document.documentElement.style.setProperty('--font-family', value)
    localStorage.setItem('selectedFontType', JSON.stringify(fontSelected))
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
