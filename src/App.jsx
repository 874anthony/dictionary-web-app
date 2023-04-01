import { Header, Layout } from './shared'
import { InputSearchIcon } from './components'

import './App.css'

export default function App () {
  const handleVoiceClick = ({ target }) => {
    const svgIcon = target.closest('svg')
    svgIcon.classList.toggle('active')
  }

  return (
    <Layout>
      <Header />

      <InputSearchIcon />

      <section className="word-overview">
        <div className="word-search">
          <h1 className="heading-l">keyboard</h1>
          <h2 className="heading-m word-search__music">/ˈkiːbɔːd/</h2>
        </div>

        <svg
          onClick={handleVoiceClick}
          className="word-search__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          alt="Pronunciation Play Icon"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </section>

      <section className="word-definitions">
        <h3 className="title-separator heading-m">noun</h3>

        <h4 className="word-definition__title mt-4 heading-s">Meaning</h4>

        <ul className="word-definition__list">
          <li className="word-definition__item body-m">
            <p>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </p>
          </li>
          <li className="word-definition__item body-m">
            <p>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </p>
          </li>
          <li className="word-definition__item body-m">
            <p>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </p>
          </li>
        </ul>

        <div className="word-synonyms">
          <h4 className="word-definition__title heading-s">Synonyms</h4>

          <ul role="list" className="word-synonyms__list">
            <li className="word-synonyms__item">electronic keyboard</li>
          </ul>
        </div>
      </section>

      <section className="word-definitions">
        <h3 className="title-separator heading-m">verb</h3>

        <h4 className="word-definition__title mt-4 heading-s">Meaning</h4>

        <ul className="word-definition__list">
          <li className="word-definition__item body-m">
            <p>To type on a computer keyboard.</p>
            <span>“Keyboarding is the part of this job I hate the most.”</span>
          </li>
        </ul>
      </section>

      <footer className='footer mt-4'>
        <hr />

        <div className='word-reference'>
          <span className='body-s'>Source</span>

          <a target='_blank' type='text/html' className='word-reference__link body-s' href='https://en.wiktionary.org/wiki/keyboard' rel="noreferrer">
            https://en.wiktionary.org/wiki/keyboard
          </a>
        </div>
      </footer>

    </Layout>
  )
}
