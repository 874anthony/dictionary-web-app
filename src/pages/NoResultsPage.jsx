import PropTypes from 'prop-types'

export default function NoResultsPage ({ title, message, resolution }) {
  return (
    <div className="no-results">
      <span className="no-results__emoji">🫤</span>

      <div className="no-results__text">
        <h5 className="no-results__title">{title}</h5>
        <p className="body-m no-results__paragraph">
          {message} {resolution}
        </p>
      </div>
    </div>
  )
}

NoResultsPage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  resolution: PropTypes.string.isRequired
}
