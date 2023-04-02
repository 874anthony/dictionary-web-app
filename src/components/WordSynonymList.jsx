import PropTypes from 'prop-types'

export default function WordSynonymList ({ synonymsList }) {
  return (
    <div className="word-synonyms">
      <h4 className="word-definition__title heading-s">Synonyms</h4>

      <ul role="list" className="word-synonyms__list">
        {synonymsList.map((synonym, i) => (
          <li key={i} className="word-synonyms__item">
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  )
}

WordSynonymList.propTypes = {
  synonymsList: PropTypes.arrayOf(PropTypes.string)
}
