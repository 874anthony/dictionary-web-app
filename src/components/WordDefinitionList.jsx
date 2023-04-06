import PropTypes from 'prop-types'
import WordDefinitionItem from './WordDefinitionItem'

export default function WordDefinitionList ({ definitionList }) {
  return (
    <ul className="word-definition__list">
      {definitionList.map(({ definition, example }, i) => (
        <WordDefinitionItem
          key={i}
          definition={definition}
          example={example}
        />
      ))}
    </ul>
  )
}

WordDefinitionList.propTypes = {
  definitionList: PropTypes.arrayOf(
    PropTypes.shape({
      definition: PropTypes.string.isRequired,
      example: PropTypes.string
    })
  )
}
