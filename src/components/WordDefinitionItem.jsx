import PropTypes from 'prop-types'

export default function WordDefinitionItem ({ definition, exampleText }) {
  return (
    <li className="word-definition__item body-m">
      <p>{definition}</p>

       { exampleText && <span>{exampleText}</span> }
    </li>
  )
}

WordDefinitionItem.propTypes = {
  definition: PropTypes.string.isRequired,
  exampleText: PropTypes.string
}
