import { useEffect, useState } from 'react'
import './App.css'

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

const selectedFontType = localStorage.getItem('selectedFontType') ?? fontsAvailable[0].name

export default function App () {
  const [fontSelected, setFontSelected] = useState(selectedFontType)

  useEffect(() => {
    const { value } = fontsAvailable.find(({ name }) => name === selectedFontType)

    document.body.style.fontFamily = value
    const dropdownList = Array.from(document.querySelector('.custom-dropdown-list').children)

    const typeFont = dropdownList.find((item) => {
      const { dataset: { font } } = item
      return font === value
    })

    typeFont.classList.add('text-active')
  }, [])

  const handleDropdownClick = ({ target }) => {
    const { lastElementChild: dropdownList } = target.closest('.custom-dropdown')

    dropdownList.classList.contains('drop-active')
      ? dropdownList.classList.remove('drop-active')
      : dropdownList.classList.add('drop-active')
  }

  const handleFontChange = ({ target }) => {
    const { dataset: { font } } = target
    document.body.style.fontFamily = font

    const { parentNode: dropdownList } = target.closest('.custom-dropdown-list')
    const activeFontType = dropdownList.querySelector('.text-active')

    if (activeFontType) activeFontType.classList.remove('text-active')
    target.classList.add('text-active')

    const { innerText } = target
    localStorage.setItem('selectedFontType', innerText)
    setFontSelected(innerText)
  }

  return (
    <section className="main-layout">

      <header className="header">
        <img src="images/logo.svg" alt="Dictionary Logo" />

        <div className="header-controls">
          <div onClick={handleDropdownClick} className="custom-dropdown">
            <span className="custom-dropdown-title">{fontSelected}</span>
            <img src="images/icon-arrow-down.svg" alt="Arrow Down" />

            <ul className="custom-dropdown-list">
              {
                fontsAvailable.map(({ name, value }, index) => (
                  <li key={index} onClick={handleFontChange} className="custom-dropdown-list-item" data-font={value}>{name}</li>
                ))
              }
            </ul>
          </div>

          <div className="line-separator"></div>

          <div className="theme-controls">
            <input type="checkbox" id="checkbox-dark-theme" />

            <img src="images/icon-moon.svg" alt="Dark Mode Icon" />
          </div>
        </div>
      </header>

    </section>
  )
}
