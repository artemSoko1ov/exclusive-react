import './HeaderMenu.scss'
import { NavLink } from "react-router-dom"

const HeaderMenu = (props) => {
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
    { label: 'About', to: '/about' },
    { label: 'Sign Up', to: '/sign-up' },
  ]
  const {
    url
  } = props
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {menuItems.map(({ label, to }, index) => (
          <li
            className="header-menu__item"
            key={index}
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                "header-menu__link" + (isActive ? " is-active" : "")
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderMenu