import { useState } from 'react'

import { Header, Layout } from './shared'
import { InputSearchIcon } from './components'

// Hooks
import useFetch from './hooks/useFetch'

import { API_DICTIONARY_URL } from './constants'

import ResultsPage from './pages/ResultsPage'
import NoResultsPage from './pages/NoResultsPage'

import './App.css'

const showPage = (wordResponse) => {
  const isWordResponseArray = Array.isArray(wordResponse)

  if (wordResponse && isWordResponseArray) return <ResultsPage wordResponse={wordResponse.at(0)} />
  if (wordResponse && !isWordResponseArray) return <NoResultsPage title={wordResponse.title} message={wordResponse.message} resolution={wordResponse.resolution} />

  return null
}

export default function App () {
  const [inputValue, setInputValue] = useState('')
  const wordResponse = useFetch(API_DICTIONARY_URL, inputValue)

  return (
    <Layout>
      <Header />

      <InputSearchIcon setInputValue={setInputValue}/>

      {showPage(wordResponse)}

    </Layout>
  )
}
