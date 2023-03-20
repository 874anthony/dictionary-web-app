import PropTypes from 'prop-types'

export default function DropdownItem ({ handleValueChange, value, name }) {
  return <li onClick={handleValueChange} className="custom-dropdown-list-item" data-value={value}>{name}</li>
}

DropdownItem.propTypes = {
  handleValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
