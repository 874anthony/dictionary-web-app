import { useRef, useEffect, useState } from 'react'

import Header from './shared/Header'
import Layout from './shared/Layout'

import './App.css'

export default function App () {
  const inputSearchRef = useRef()
  const [search, setSearch] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    inputSearchRef.current.focus()

    inputSearchRef.current.onclick = () => {
      console.log('lo vuelve a triggererror', error)
      console.log('lo vuelve a trigger')
      setError(false)
      inputSearchRef.current.style.border = '1px solid var(--color-purple)'
    }

    inputSearchRef.current.onblur = () => {
      console.log('error', error)
      if (error) setError(false)
      inputSearchRef.current.style.border = null
    }
  }, [search])

  const handleOnKeyEnter = ({ key }) => {
    if (!(key === 'Enter')) return
    const inputValue = inputSearchRef.current.value
    const isEmpty = !inputValue || inputValue.trim() === '' || inputValue.length === 0

    if (isEmpty) {
      inputSearchRef.current.style.border = '1px solid var(--color-red)'
      setError(true)
      // inputSearchRef.current.focus()
      return
    }

    inputSearchRef.current.blur()
    setSearch(inputValue)
  }

  return <Layout>
    <Header />

    <div className='search-box'>
      <input onKeyDown={handleOnKeyEnter} ref={inputSearchRef} className='input-search' type='text' placeholder='Search for any word...' />
      <img className="input-search__icon" src='images/icon-search.svg' alt='Search Icon' />
    </div>

    { error && <span className='input-error-message'>Whoops, can&apos;t be empty...</span> }
  </Layout>
}
