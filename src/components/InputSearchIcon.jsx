import { useRef, useState } from 'react'

import PropTypes from 'prop-types'

export default function InputSearchIcon ({ setInputValue }) {
  const inputSearchRef = useRef()
  const [error, setError] = useState(false)

  const handleOnChange = () => {
    if (error) setError(false)
    const inputValue = inputSearchRef.current.value.trim()

    const borderClass = inputValue.length === 0 ? null : '1px solid var(--color-purple)'
    inputSearchRef.current.style.border = borderClass
  }

  const handleOnKeyEnter = async ({ key }) => {
    if (!(key === 'Enter')) return

    const inputValue = inputSearchRef.current.value.trim()
    const isEmpty = !inputValue || inputValue === '' || inputValue.length === 0

    if (isEmpty) {
      inputSearchRef.current.style.border = '1px solid var(--color-red)'
      setError(true)
      inputSearchRef.current.focus()
      return
    }

    setInputValue(inputValue)
    inputSearchRef.current.blur()
  }

  return (
    <>
      <div className="search-box">
        <input
          onChange={handleOnChange}
          onKeyDown={handleOnKeyEnter}
          onBlur={() => { inputSearchRef.current.style.border = null }}
          ref={inputSearchRef}
          className="input-search"
          type="text"
          placeholder="Search for any word..."
        />

        <img className="input-search__icon" src="images/icon-search.svg" alt="Search Icon" />
      </div>

      {error && (<span className="input-error-message">Whoops, can&apos;t be empty...</span>)}
    </>
  )
}

InputSearchIcon.propTypes = {
  setInputValue: PropTypes.func.isRequired
}
