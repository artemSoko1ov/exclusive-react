import './Input.scss'
import SearchIcon from "@/assets/icons/search-icon.svg?react"
import SendIcon from "@/assets/icons/send-icon.svg?react"
import classNames from "classnames";

const Input = (props) => {
  const {
    className,
    icon,
    isNotFilled = false,
    ...restProps
  } = props

  return (
    <div className={classNames(className, "input", {
        "input--not-filled" : isNotFilled,
      })}
    >
      <input
        className="input__box"
        {...restProps}
      />
      {icon === 'search' && (
        <SearchIcon
          width={32}
          height={32}
        />
      )}
      {icon === 'send' && (
        <SendIcon
          width={32}
          height={32}
        />
      )}
    </div>
  )
}

export default Input