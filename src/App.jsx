import { Header, Layout } from './shared'
import { InputSearchIcon } from './components'

import './App.css'
import ResultsPage from './pages/ResultsPage'
// import NoResultsPage from './pages/NoResultsPage'

export default function App () {
  return (
    <Layout>
      <Header />

      <InputSearchIcon />

      <ResultsPage />
      {/* <NoResultsPage /> */}

    </Layout>
  )
}
