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
    document.body.style.fontFamily = fontSelected.value
    localStorage.setItem('selectedFontType', JSON.stringify(fontSelected))
  }, [fontSelected])

  return <header className="header">
    <img src="images/logo.svg" alt="Dictionary Logo" />

    <div className="header-controls">
      <Dropdown optionSelected={fontSelected} setOptionSelected={setFontSelected} optionsAvailable={fontsAvailable} />

      <div className="line-separator"></div>

      <div className="theme-controls">
         <SwitchSlider />

        <img src="images/icon-moon.svg" alt="Dark Mode Icon" />
      </div>
    </div>
  </header>
}
