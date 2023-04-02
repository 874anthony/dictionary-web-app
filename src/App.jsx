import { Header, Layout } from './shared'
import { InputSearchIcon, WordDefinition, WordOverview } from './components'

import './App.css'

const nounDefinitions = [
  {
    definition:
      '(etc.) A set of keys used to operate a typewriter, computer etc.'
  },
  {
    definition:
      'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.'
  },
  {
    definition:
      'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.'
  }
]

const wordSynonyms = [
  'electronic keyboard'
]

const verbDefinitions = [
  {
    definition: 'To type on a computer keyboard.',
    exampleText: '“Keyboarding is the part of this job I hate the most.”'
  }
]

export default function App () {
  return (
    <Layout>
      <Header />

      <InputSearchIcon />

      <WordOverview title='keyboard' pronunciation='/ˈkiːbɔːd/'/>

      <WordDefinition sectionTitle='noun' definitionList={nounDefinitions} synonymsList={wordSynonyms}/>

      <WordDefinition sectionTitle='verb' definitionList={verbDefinitions} />

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
