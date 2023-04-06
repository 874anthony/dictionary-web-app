import PropTypes from 'prop-types'

export default function Layout ({ children }) {
  return <main className="main-layout">{ children }</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
