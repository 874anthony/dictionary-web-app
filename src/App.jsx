import { useState, useEffect } from 'react'

import { Header, Layout } from './shared'
import { InputSearchIcon } from './components'

import './App.css'
import ResultsPage from './pages/ResultsPage'
// import NoResultsPage from './pages/NoResultsPage'

const API_DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default function App () {
  const [inputValue, setInputValue] = useState('')
  const [wordResponse, setWordResponse] = useState(null)

  useEffect(() => {
    if (inputValue === '') return

    const url = `${API_DICTIONARY_URL}${inputValue}`

    async function fetchData () {
      const response = await fetch(url)
      const data = await response.json()

      const { word, sourceUrls, phonetic, meanings, phonetics } = data.at(0)
      setWordResponse({ word, sourceUrls, phonetic, meanings, phonetics })
    }
    fetchData()
  }, [inputValue])

  return (
    <Layout>
      <Header />

      <InputSearchIcon setInputValue={setInputValue}/>

      {wordResponse && <ResultsPage wordResponse={wordResponse} />}
      {/* <NoResultsPage /> */}

    </Layout>
  )
}
