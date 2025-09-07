import './Input.scss'
import SearchIcon from "@/assets/icons/search-icon.svg?react"

const Input = (props) => {
  const {
    type,
  } = props

  return (
    <div className="input">
      <input
        className="input__box"
        type={type}
        placeholder={type === 'search' && 'What are you looking for?'}
      />
      {type === 'search' && (
        <SearchIcon
          width={32}
          height={32}
        />
      )}
    </div>
  )
}

export default Input