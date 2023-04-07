import PropTypes from 'prop-types'
import { WordDefinition, WordDefinitionFooter, WordOverview } from '../components'

export default function ResultsPage ({ wordResponse }) {
  const { word, phonetics, meanings, sourceUrls } = wordResponse

  // Take the first phonetic that has audio and text
  const phonetic = phonetics.find(({ audio, text }) => audio && text)

  return (
    <>
      <WordOverview
        title={word}
        phonetic={phonetic}
      />

      {meanings.map(({ partOfSpeech, definitions, synonyms }, index) => (
        <WordDefinition
          key={index}
          sectionTitle={partOfSpeech}
          definitionList={definitions}
          synonymsList={synonyms}
        />
      ))}

      <WordDefinitionFooter sourceURL={sourceUrls.at(0)} />
    </>
  )
}

ResultsPage.propTypes = {
  wordResponse: PropTypes.object.isRequired
}
