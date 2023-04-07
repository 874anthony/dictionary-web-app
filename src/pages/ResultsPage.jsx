import PropTypes from 'prop-types'
import { WordDefinition, WordDefinitionFooter, WordOverview } from '../components'

export default function ResultsPage ({ wordResponse }) {
  console.log('wordResponse', wordResponse)
  const { word, phonetic, meanings, sourceUrls } = wordResponse

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
