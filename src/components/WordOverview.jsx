import PropTypes from 'prop-types'

const handleVoiceClick = ({ target }, audioURL) => {
  const svgIcon = target.closest('svg')
  svgIcon.classList.toggle('active')

  const audio = new Audio(audioURL)
  audio.play()

  audio.addEventListener('ended', () => {
    svgIcon.classList.remove('active')
  })
}

const showIcon = (phonetic) =>
  phonetic && (
    <svg
      onClick={(e) => handleVoiceClick(e, phonetic.audio)}
      className="word-search__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      alt="Phonetic Play Icon"
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  )

export default function WordOverview ({ title, phonetic }) {
  return (
    <section className="word-overview">
      <div className="word-search">
        <h1 className="heading-l">{title}</h1>

        {phonetic && (<h2 className="heading-m word-search__music">{phonetic.text}</h2>)}
      </div>

      {showIcon(phonetic)}
    </section>
  )
}

WordOverview.propTypes = {
  title: PropTypes.string.isRequired,
  phonetic: PropTypes.object
}
