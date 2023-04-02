import { Header, Layout } from './shared'
import { InputSearchIcon, WordDefinition, WordDefinitionFooter, WordOverview } from './components'

import './App.css'

const nounDefinitions = {
  partOfSpeech: 'noun',
  definitions: [
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
  ],
  synonyms: ['electronic keyboard']
}

const verbDefinitions = {
  partOfSpeech: 'verb',
  definitions: [
    {
      definition: 'To type on a computer keyboard.',
      example: '“Keyboarding is the part of this job I hate the most.”'
    }
  ]
}

const wordResponse = {
  word: 'keyboard',
  phonetic: '/ˈkiːbɔːd/',
  meanings: [
    nounDefinitions,
    verbDefinitions
  ]
}

const sourceURL = 'https://en.wiktionary.org/wiki/keyboard'

export default function App () {
  return (
    <Layout>
      <Header />

      <InputSearchIcon />

      <WordOverview title={wordResponse.word} phonetic={wordResponse.phonetic} />

      <WordDefinition sectionTitle={nounDefinitions.partOfSpeech} definitionList={nounDefinitions.definitions} synonymsList={nounDefinitions.synonyms}/>

      <WordDefinition sectionTitle={verbDefinitions.partOfSpeech} definitionList={verbDefinitions.definitions} />

      <WordDefinitionFooter sourceURL={sourceURL} />

    </Layout>
  )
}
