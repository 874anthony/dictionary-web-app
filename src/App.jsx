import './App.css'

export default function App () {
  const handleDropdownClick = ({ target }) => {
    const dropdown = target.closest('.custom-dropdown')
    const dropdownList = dropdown.lastElementChild

    if (dropdownList.classList.contains('drop-active')) {
      dropdownList.classList.remove('drop-active')
    } else {
      dropdownList.classList.add('drop-active')
    }
  }

  return (
    <section className="main-layout">

      <header className="header">
        <img src="images/logo.svg" alt="Dictionary Logo" />

        <div className="header-controls">
          <div onClick={handleDropdownClick} className="custom-dropdown">
            <span className="custom-dropdown-title">Sans Serif</span>
            <img src="images/icon-arrow-down.svg" alt="Arrow Down" />

            <ul className="custom-dropdown-list">
              <li className="custom-dropdown-list-item" data-font="sans-serif">Sans Serif</li>
              <li className="custom-dropdown-list-item" data-font="serif">Serif</li>
              <li className="custom-dropdown-list-item" data-font="mono">Mono</li>
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
