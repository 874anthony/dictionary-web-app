
import { Header, Layout } from './shared'
import { InputSearchIcon } from './components'

import './App.css'

export default function App () {
  const handleVoiceClick = ({ target }) => {
    const svgIcon = target.closest('svg')
    svgIcon.classList.toggle('active')
  }

  return <Layout>
    <Header />

    <InputSearchIcon />

    <section className='word-overview'>
      <div className='word-search'>
        <h1 className='heading-l'>keyboard</h1>
        <h2 className='heading-m word-search__music'>/ˈkiːbɔːd/</h2>
      </div>

      <svg onClick={handleVoiceClick} className='word-search__icon' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" alt='Pronunciation Play Icon'>
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" />
          <path d="M29 27v21l21-10.5z"/>
        </g>
      </svg>

    </section>

    <h3 className='title-separator heading-m'>noun</h3>

  </Layout>
}
