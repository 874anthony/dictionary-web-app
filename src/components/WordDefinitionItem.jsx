import PropTypes from 'prop-types'

export default function WordDefinitionItem ({ definition, example }) {
  return (
    <li className="word-definition__item body-m">
      <p>{definition}</p>

       { example && <span>&ldquo;{example}&ldquo;</span> }
    </li>
  )
}

WordDefinitionItem.propTypes = {
  definition: PropTypes.string.isRequired,
  example: PropTypes.string
}
