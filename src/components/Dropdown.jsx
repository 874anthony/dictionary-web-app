import { useEffect } from 'react'
import PropTypes from 'prop-types'

import DropdownItem from './DropdownItem'

const handleDropdownClick = ({ target }) => {
  const { lastElementChild: dropdownList } = target.closest('.custom-dropdown')

  dropdownList.classList.contains('drop-active')
    ? dropdownList.classList.remove('drop-active')
    : dropdownList.classList.add('drop-active')
}

export default function Dropdown ({ optionSelected, setOptionSelected, optionsAvailable = [] }) {
  useEffect(() => {
    const dropdownList = Array.from(document.querySelector('.custom-dropdown-list').children)

    const menuOption = dropdownList.find((item) => {
      const { dataset: { value } } = item
      return value === optionSelected.value
    })

    menuOption.classList.add('text-active')
  }, [])

  const handleValueChange = ({ target }) => {
    const { dataset: { value } } = target

    const option = optionsAvailable.find(({ value: optionValue }) => optionValue === value)
    setOptionSelected(option)

    const { parentNode: dropdownList } = target.closest('.custom-dropdown-list')
    const activeOption = dropdownList.querySelector('.text-active')

    if (activeOption) activeOption.classList.remove('text-active')
    target.classList.add('text-active')
  }

  return (
    <div onClick={handleDropdownClick} className="custom-dropdown">
      <span className="custom-dropdown-title">{optionSelected.name}</span>
      <img src="images/icon-arrow-down.svg" alt="Arrow Down" />

      <ul className="custom-dropdown-list">
        {
          optionsAvailable.map(({ name, value }, index) =>
          <DropdownItem key={index} handleValueChange={handleValueChange} value={value} name={name} />)
        }
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  optionSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  setOptionSelected: PropTypes.func.isRequired,
  optionsAvailable: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
}
