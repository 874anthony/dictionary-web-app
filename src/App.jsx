import './App.css'

export default function App () {
  return (
    <section className="main-layout">
      <header className="header">
        <img src="images/logo.svg" alt="Dictionary Logo" />

        <div className="header-controls">
          <div className="custom-dropdown">
            <span className="custom-dropdown-title">Sans Serif</span>
            <img src="images/icon-arrow-down.svg" alt="Arrow Down" />
          </div>

          <div className="line-separator"></div>

          <div className="theme-controls">
            <select name="" id=""></select>
            <img src="images/icon-moon.svg" alt="Dark Mode Icon" />
          </div>
        </div>
      </header>
    </section>
  )
}
