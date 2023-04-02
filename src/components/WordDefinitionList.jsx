import PropTypes from 'prop-types'
import WordDefinitionItem from './WordDefinitionItem'

export default function WordDefinitionList ({ definitionList }) {
  return (
    <ul className="word-definition__list">
      {definitionList.map(({ definition, exampleText }, i) => (
        <WordDefinitionItem
          key={i}
          definition={definition}
          exampleText={exampleText}
        />
      ))}
    </ul>
  )
}

WordDefinitionList.propTypes = {
  definitionList: PropTypes.arrayOf(
    PropTypes.shape({
      definition: PropTypes.string.isRequired,
      exampleText: PropTypes.string
    })
  )
}
