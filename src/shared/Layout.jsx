import { useEffect } from 'react'
import PropTypes from 'prop-types'

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = defaultDark ? 'dark-theme' : 'light-theme'

export default function Layout ({ children }) {
  useEffect(() => {
    document.body.classList.add(theme)
  }, [])

  return <main className="main-layout">{ children }</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
