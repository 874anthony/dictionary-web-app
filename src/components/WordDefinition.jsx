import PropTypes from 'prop-types'

import WordDefinitionList from './WordDefinitionList'
import WordSynonymList from './WordSynonymList'

/**
 *
 * @param {string[]} synonymsList
 * @returns {JSX.Element | null}
 */
const showSynonyms = synonymsList => synonymsList && <WordSynonymList synonymsList={synonymsList}/>

export default function WordDefinition ({ sectionTitle, definitionList, synonymsList }) {
  return (
    <section className="word-definitions">
      <h3 className="title-separator heading-m">{sectionTitle}</h3>

      <h4 className="word-definition__title mt-4 heading-s">Meaning</h4>

      <WordDefinitionList definitionList={definitionList}/>

      { showSynonyms(synonymsList) }
    </section>
  )
}

WordDefinition.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  definitionList: PropTypes.arrayOf(
    PropTypes.shape({
      definition: PropTypes.string.isRequired,
      exampleText: PropTypes.string
    })),
  synonymsList: PropTypes.arrayOf(PropTypes.string)
}
