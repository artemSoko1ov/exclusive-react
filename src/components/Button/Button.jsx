import './Button.scss'
import classNames from "classnames";

const Button = (props) => {
  const {
    className,
    icon: Icon,
    children,
  } = props
  return (
    <button
      className={classNames(className, "button")}
      type="button"
    >
      {Icon && <Icon className="button__icon" />}
      {children}
    </button>
  )
}

export default Button