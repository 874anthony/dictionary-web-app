import PropTypes from 'prop-types'

export default function WordDefinitionFooter ({ sourceURL }) {
  return (
    <footer className="footer mt-4">
      <hr />

      <div className="word-reference">
        <span className="body-s">Source</span>

        <a
          target="_blank"
          type="text/html"
          className="word-reference__link body-s"
          href={sourceURL}
          rel="noreferrer"
        >
          {sourceURL}
        </a>
      </div>
    </footer>
  )
}

WordDefinitionFooter.propTypes = {
  sourceURL: PropTypes.string.isRequired
}
