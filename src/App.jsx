import { Header, Layout } from './shared'
import { InputSearchIcon, WordOverview } from './components'

import './App.css'

export default function App () {
  return (
    <Layout>
      <Header />

      <InputSearchIcon />

      <WordOverview title='keyboard' pronunciation='/ˈkiːbɔːd/'/>

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
