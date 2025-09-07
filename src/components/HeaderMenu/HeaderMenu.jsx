import './HeaderMenu.scss'
import classNames from "classnames";

const HeaderMenu = (props) => {
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Sign Up',
      href: '/sign-up',
    },
  ]
  const {
    url
  } = props
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {menuItems.map(({label, href}, index) => (
          <li
            className="header-menu__item"
            key={index}
          >
            <a
              className={classNames('header-menu__link', {
                'is-active': href === url
              })}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderMenu