export default function NoResultsPage () {
  return (
    <div className="no-results">
      <span className="no-results__emoji">🫤</span>

      <div className="no-results__text">
        <h5 className="no-results__title">No definitions found</h5>
        <p className="body-m no-results__paragraph">
          Sorry pal, we couldn&apos;t find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  )
}
