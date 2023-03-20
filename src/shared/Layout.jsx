import PropTypes from 'prop-types'

export default function Layout ({ children }) {
  return <section className="main-layout">{ children }</section>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
